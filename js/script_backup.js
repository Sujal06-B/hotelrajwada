document.getElementById("year").textContent = new Date().getFullYear();
const menuToggle=document.getElementById("menuToggle"), nav=document.getElementById("mainNav");
menuToggle?.addEventListener("click",()=>nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

// ── Hero Slideshow ──────────────────────────────
(function(){
  const slides=document.querySelectorAll(".hero-slide");
  const dots=document.querySelectorAll(".hero-dot");
  const prev=document.getElementById("heroPrev");
  const next=document.getElementById("heroNext");
  let current=0, timer;
  function goTo(n){
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current=(n+slides.length)%slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }
  function goNext(){goTo(current+1);}
  function goPrev(){goTo(current-1);}
  function startTimer(){clearInterval(timer);timer=setInterval(goNext,4800);}
  dots.forEach(d=>d.addEventListener("click",function(){goTo(+this.dataset.index);startTimer();}));
  next?.addEventListener("click",()=>{goNext();startTimer();});
  prev?.addEventListener("click",()=>{goPrev();startTimer();});
  // Touch/swipe support
  let tx=0;
  const hero=document.querySelector(".hero");
  hero?.addEventListener("touchstart",e=>{tx=e.touches[0].clientX;},{passive:true});
  hero?.addEventListener("touchend",e=>{
    const diff=tx-e.changedTouches[0].clientX;
    if(Math.abs(diff)>50){diff>0?goNext():goPrev();startTimer();}
  },{passive:true});
  if(slides.length>1)startTimer();
})();

// ── Scroll-reveal (Intersection Observer) ──────
(function(){
  const els=document.querySelectorAll(".reveal");
  if(!els.length)return;
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target);}});
  },{threshold:.12});
  els.forEach(el=>obs.observe(el));
})();

// ── Scroll-to-top button ────────────────────────
(function(){
  const btn=document.getElementById("scrollTop");
  if(!btn)return;
  window.addEventListener("scroll",()=>{
    btn.classList.toggle("show",window.scrollY>400);
  });
  btn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
})();

// ── Sticky header shadow on scroll ─────────────
(function(){
  const hdr=document.querySelector(".site-header");
  window.addEventListener("scroll",()=>{
    hdr?.classList.toggle("scrolled",window.scrollY>60);
  });
})();

const ADMIN_KEY = "yesRajvadaPremiumAdminV1";

// ── Admin → Public Website Sync ─────────────────
(function syncFromAdmin() {
  let data = {};
  try { data = JSON.parse(localStorage.getItem(ADMIN_KEY) || "{}"); }
  catch(e) { return; }

  const profile = data.profile || {};
  const name    = profile.hotelName || "Yes Rajvada";

  // --- Hotel name ---
  document.querySelectorAll(".brand b").forEach(el => el.textContent = name.toUpperCase());

  // --- Hero eyebrow ---
  document.querySelectorAll(".hero .eyebrow").forEach(el => el.textContent = `WELCOME TO ${name.toUpperCase()} · GADHINGLAJ`);

  // --- Hero tagline ---
  if (profile.tagline) {
    const copy = document.querySelector(".hero-copy");
    if (copy) copy.textContent = profile.tagline;
  }

  // --- Contact details (location & phone) ---
  document.querySelectorAll(".contact-detail").forEach(el => {
    const label = el.querySelector("b")?.textContent?.trim();
    const p     = el.querySelector("p");
    if (!p) return;
    if (label === "Location" && profile.address) p.textContent = profile.address;
    if (label === "Phone"    && profile.phone)   {
      p.innerHTML = `<a href="tel:${profile.phone.replace(/\s/g,'')}" style="color:var(--gold)">${profile.phone}</a>`;
    }
  });

  // --- WhatsApp number ---
  const wa = (profile.whatsapp || "919611761010").replace(/\D/g, "");
  document.querySelectorAll(".whatsapp-float, [href^='https://wa.me/']").forEach(a => {
    if (a.href.startsWith("https://wa.me/")) a.href = `https://wa.me/${wa}`;
  });

  // --- Topbar phone ---
  const topPhone = document.querySelector(".topline a[href^='tel:']");
  if (topPhone && profile.phone) {
    topPhone.href        = `tel:${profile.phone.replace(/\s/g,'')}`;
    topPhone.textContent = profile.phone;
  }

  // --- Google Review button ---
  const reviewBtn = document.getElementById("googleReviewButton");
  if (reviewBtn && data.reviewUrl) reviewBtn.href = data.reviewUrl;

  // ── GALLERY SYNC ────────────────────────────────
  const gallery = document.getElementById("publicGallery");
  if (gallery) {
    const hotelPhotos = (data.photos || []).filter(p => p.category === "Hotel" || p.category === "Hall");
    if (hotelPhotos.length) {
      gallery.innerHTML = "";
      hotelPhotos.forEach(photo => {
        const img = document.createElement("img");
        img.src     = photo.data;
        img.alt     = photo.title || name;
        img.loading = "lazy";
        gallery.appendChild(img);
      });
    }
  }

  // ── FOOD MENU PHOTOS SYNC ───────────────────────
  const catMap = {
    "Veg Special":    0,
    "Non-Veg Special":1,
    "Special Thali":  2
  };
  const foodCards = document.querySelectorAll(".food-card");
  const photos = data.photos || [];
  Object.entries(catMap).forEach(([cat, idx]) => {
    const catPhotos = photos.filter(p => p.category === cat);
    if (catPhotos.length && foodCards[idx]) {
      const wrap = foodCards[idx].querySelector(".food-img-wrap");
      if (wrap) {
        wrap.innerHTML = `<img src="${catPhotos[0].data}" alt="${cat}" loading="lazy">`;
      }
    }
  });

  // ── ABOUT SECTION PHOTO (Hotel) ─────────────────
  const aboutWrap = document.getElementById("aboutImageWrap");
  const hotelPhotos2 = photos.filter(p => p.category === "Hotel");
  if (aboutWrap && hotelPhotos2.length) {
    const ph = document.getElementById("aboutPlaceholder");
    if (ph) {
      const img = document.createElement("img");
      img.src = hotelPhotos2[0].data;
      img.alt = "Yes Rajvada Hotel";
      img.loading = "lazy";
      ph.replaceWith(img);
    }
  }

  // ── HALL SECTION PHOTO ──────────────────────────
  const hallWrap = document.getElementById("hallPhotoWrap");
  const hallPhotos = photos.filter(p => p.category === "Hall");
  if (hallWrap && hallPhotos.length) {
    const ph = document.getElementById("hallPlaceholder");
    if (ph) {
      const img = document.createElement("img");
      img.src = hallPhotos[0].data;
      img.alt = "Yes Rajvada Hall";
      img.loading = "lazy";
      ph.replaceWith(img);
    }
  }

  // ── BRANCHES SYNC ──────────────────────────────
  if (Array.isArray(data.branches) && data.branches.length) {
    const grid = document.getElementById("branchGridPublic");
    if (grid) {
      // Keep static HTML branches (01, 02) and append admin-added ones
      const adminBranches = data.branches;
      // Clear only placeholder branches (03,04,05)
      grid.querySelectorAll(".branch-card").forEach(card => {
        const num = card.querySelector("span")?.textContent;
        if (["03","04","05"].includes(num)) card.remove();
      });
      // Add branches from admin if not duplicate
      adminBranches.forEach((b, i) => {
        const existing = [...grid.querySelectorAll(".branch-card h3")]
          .find(h => h.textContent === b.name);
        if (!existing) {
          const art = document.createElement("article");
          art.className = "branch-card";
          art.innerHTML = `<span>0${i + 3}</span>
            <h3>${b.name}</h3>
            <p>${b.address || ""}${b.phone ? `<br><small style='color:var(--gold-lt)'>${b.phone}</small>` : ""}</p>
            ${b.mapsUrl ? `<a href="${b.mapsUrl}" target="_blank" rel="noopener">Get Directions ↗</a>` : `<a href="#contact">Contact for details ↗</a>`}`;
          grid.appendChild(art);
        }
      });
    }
  }
})();

// ── Contact Form → WhatsApp ─────────────────────
const form = document.getElementById("contactForm");
form?.addEventListener("submit", function(e) {
  e.preventDefault();
  const data = new FormData(this);
  let number = "919611761010";
  try {
    const cfg = JSON.parse(localStorage.getItem(ADMIN_KEY) || "{}");
    number = (cfg.profile?.whatsapp || number).replace(/\D/g, "");
  } catch(e) {}
  const message = `Hello Yes Rajvada!\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nEnquiry: ${data.get("subject")}\nMessage: ${data.get("message") || "No additional message"}`;
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank");
});

