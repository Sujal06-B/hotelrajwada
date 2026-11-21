import { dbStore } from '../models/dataStore.js';

export const getBookings = async (req, res) => {
  try {
    const { status, search } = req.query;
    let enquiries = dbStore.get('enquiries') || [];

    if (status && status !== 'all') {
      enquiries = enquiries.filter(item => item.status.toLowerCase() === status.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      enquiries = enquiries.filter(item => 
        (item.guestName && item.guestName.toLowerCase().includes(q)) ||
        (item.phone && item.phone.includes(q)) ||
        (item.type && item.type.toLowerCase().includes(q))
      );
    }

    res.json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createBooking = async (req, res) => {
  try {
    const { guestName, phone, email, date, time, guests, type, notes } = req.body;
    if (!guestName || !phone) {
      return res.status(400).json({ success: false, message: 'Name and phone number are required' });
    }

    const enquiries = dbStore.get('enquiries') || [];
    const newEnquiry = {
      id: `enq-${Date.now()}`,
      guestName: guestName.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : '',
      date: date || new Date().toISOString().split('T')[0],
      time: time || '19:00',
      guests: Number(guests) || 2,
      type: type || 'Table enquiry',
      status: 'New',
      notes: notes ? notes.trim() : '',
      createdAt: new Date().toISOString()
    };

    enquiries.unshift(newEnquiry);
    dbStore.set('enquiries', enquiries);

    // Generate WhatsApp direct text for the user
    const profile = dbStore.get('profile') || {};
    const waNumber = (profile.whatsapp || '919611761010').replace(/\D/g, '');
    const waText = encodeURIComponent(
      `नमस्कार Yes Rajvada!\nमी ${newEnquiry.guestName} बोलत आहे.\nचौकशी: ${newEnquiry.type}\nतारीख: ${newEnquiry.date} (${newEnquiry.time})\nव्यक्ती: ${newEnquiry.guests}\nमाहिती: ${newEnquiry.notes || '-'}`
    );
    const whatsappUrl = `https://wa.me/${waNumber}?text=${waText}`;

    res.status(201).json({ 
      success: true, 
      message: 'Enquiry submitted successfully! We will contact you shortly.', 
      data: newEnquiry,
      whatsappUrl
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const enquiries = dbStore.get('enquiries') || [];
    const index = enquiries.findIndex(item => item.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Booking enquiry not found' });
    }

    if (status) enquiries[index].status = status;
    if (notes !== undefined) enquiries[index].notes = notes;
    enquiries[index].updatedAt = new Date().toISOString();

    dbStore.set('enquiries', enquiries);
    res.json({ success: true, data: enquiries[index] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    let enquiries = dbStore.get('enquiries') || [];
    const filtered = enquiries.filter(item => item.id !== id);

    if (filtered.length === enquiries.length) {
      return res.status(404).json({ success: false, message: 'Booking enquiry not found' });
    }

    dbStore.set('enquiries', filtered);
    res.json({ success: true, message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

