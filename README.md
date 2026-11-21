# 👑 Yes Rajvada Hotel & Family Restaurant (MERN Stack)

A modern, high-performance **MERN Stack** (MongoDB, Express.js, React 19, Node.js + Tailwind CSS) web application and hotel management system for **Yes Rajvada Hotel & Celebration Hall**, Gadhinglaj.

Designed with royal heritage aesthetics, authentic Maharashtrian hospitality, live table and celebration hall reservations, instant WhatsApp communication, and an interactive Hotel Admin Control Center.

---

## 🏛️ Features

### 🌟 Public Website
* **Live Open/Closed Badge**: Automatically updates based on opening hours (11:00 AM – 11:00 PM).
* **Hero Carousel**: Cinematic royal presentation featuring entrance, dining ambience, and celebration hall.
* **Interactive Menu**: Category-based filtering (`Special Thali`, `Veg Special`, `Non-Veg Special`, `Beverages`, `Desserts`) with real-time pricing and direct 1-click WhatsApp dish ordering.
* **Celebration Hall (मंगल कार्यालय)**: Showcase for weddings, engagements, birthday parties, and corporate events with direct rate quotation download.
* **Photo Gallery with Lightbox**: Interactive full-screen preview for hotel ambience, food, and event spaces.
* **Customer Testimonials & Google Review Link**: Verified guest experiences and 1-click button to write official Google reviews.
* **Instant Booking & Reservation Form**: Direct table and hall bookings recorded into the system and sent with prefilled details directly to WhatsApp.
* **Mobile-First Experience**: Responsive bottom navigation bar and persistent WhatsApp quick-chat floating widget.

### 🛡️ Admin Control Center (`/admin`)
* **Live Dashboard (Overview)**: Real-time counters for enquiries, menu items, gallery photos, and operational status.
* **Menu & Pricing Manager**: Add new dishes, edit prices, toggle item availability (Available vs. Sold Out), and delete items.
* **Bookings & Leads Management**: Search customer reservations by name or phone, filter by status (`New`, `Contacted`, `Confirmed`, `Completed`, `Cancelled`), and update statuses with one click.
* **Photo Gallery Manager**: Add or remove photos across categories.
* **Hotel Profile & Settings**: Update contact phone, WhatsApp number, hotel address, opening hours, and official Google Review URL.
* **Backup & Restore**: Export all hotel data as JSON for instant safekeeping.

---

## 🛠️ Tech Stack

* **Frontend**: React 19, Vite, Tailwind CSS v4, Lucide Icons, React Router DOM v7
* **Backend**: Node.js, Express.js (ES Modules)
* **Database**: MongoDB (Mongoose) with automatic resilient persistent storage fallback
* **Communication**: WhatsApp Click-to-Chat Deep-Links, RESTful API

---

## 📂 Project Structure

```
HotelRajwada/
├── client/                     # React + Vite Frontend
│   ├── public/                 # Static assets (images, PDFs, logos)
│   │   ├── Menu/               # Food menu photos
│   │   ├── rajwadaHotelImages/ # Hotel ambience photos
│   │   ├── Reviews/            # Google review screenshots
│   │   ├── hero2.webp, hero3.jpg, hero4.jpg
│   │   ├── rajvada-entrance.webp
│   │   └── RajwadaQuatation.pdf
│   ├── src/
│   │   ├── components/         # Navbar, Hero, Menu, Hall, Gallery, Reviews, Contact, Footer
│   │   ├── pages/              # PublicHome.jsx, AdminDashboard.jsx
│   │   ├── data/               # defaultData.js (instant static fallback data)
│   │   ├── App.jsx             # React Router setup
│   │   └── index.css           # Tailwind CSS + Royal Theme Styles
│   ├── package.json
│   └── vite.config.js
├── server/                     # Express.js REST API
│   ├── config/                 # Database configuration (db.js)
│   ├── controllers/            # Auth, Menu, Booking, Photo, Profile controllers
│   ├── middleware/             # JWT auth middleware
│   ├── models/                 # Data schema & persistent store
│   ├── routes/                 # /api router endpoints
│   ├── package.json
│   └── server.js               # Express application entrypoint
├── scripts/
│   └── dev.js                  # Unified startup script with auto port conflict cleanup
├── package.json                # Root package manager
├── .gitignore
└── README.md
```

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
In the root directory, run:
```bash
npm run install-all
```
*(Or install in both folders: `cd server && npm install`, then `cd ../client && npm install`)*

### 2. Start Application (Server + Client)
From the root directory:
```bash
npm run dev
```

* **Public Website**: [http://localhost:3000](http://localhost:3000)
* **Admin Control Panel**: [http://localhost:3000/admin](http://localhost:3000/admin)
* **Backend API**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## ⚙️ Configuration & Environment

The server includes default settings out of the box in `server/.env`.
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hotel_rajwada
JWT_SECRET=rajwada_super_secret_jwt_key_2026_heritage
NODE_ENV=development
```

> **Note on Database**: If a local or remote MongoDB instance is running, it connects automatically. If MongoDB is not yet running, the server automatically switches to its **Resilient Persistent Engine** (`server/data/store.json`) so the website and admin panel run without crashes!

---

## 🚢 Building for Production

To build the client for deployment:
```bash
npm run build
```
Production assets will be generated in `client/dist/`.

---

## 🔒 Default Admin Credentials
* **Username**: `admin`
* **Password**: `admin123`
*(Can be customized via the Admin Panel)*

