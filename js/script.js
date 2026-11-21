// YES RAJVADA HOTEL — script.js v3.0
// Features: Preloader, Open/Closed Badge, Menu Filter, Count-up, Testimonials, Lightbox, Mobile Nav, Admin Sync

document.getElementById("year").textContent = new Date().getFullYear();

// ── Menu Toggle ─────────────────────────────────────────────
const menuToggle=document.getElementById("menuToggle"), nav=document.getElementById("mainNav");
menuToggle?.addEventListener("click",()=>nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

// ══ 1. PRELOADER ════════════════════════════════════════════
(function(){
  const pre = document.getElementById("preloader");
  if(!pre) return;
  window.addEventListener("load", function(){
    setTimeout(()=>pre.classList.add("done"), 1700);
  });
  // Fallback: hide after 3s even if load event missed
  setTimeout(()=>pre.classList.add("done"), 3000);
})();

// ══ 2. OPEN / CLOSED STATUS BADGE ═══════════════════════════
(function(){
  const badge = document.getElementById("hotelStatusBadge");
  if(!badge) return;
  const now = new Date();
  const h = now.getHours(), m = now.getMinutes();
  const totalMins = h * 60 + m;
  const openMins  = 11 * 60;      // 11:00 AM
  const closeMins = 23 * 60;      // 11:00 PM
  const isOpen = totalMins >= openMins && totalMins < closeMins;
  if(isOpen){
    badge.className = "status-badge open";
    badge.textContent = " उघडे आहे";
  } else {
    badge.className = "status-badge closed";
    badge.textContent = " बंद आहे";
  }
})();

// ══ 3. HERO SLIDESHOW ═══════════════════════════════════════
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
  let tx=0;
  const hero=document.querySelector(".hero");
  hero?.addEventListener("touchstart",e=>{tx=e.touches[0].clientX;},{passive:true});
  hero?.addEventListener("touchend",e=>{
    const diff=tx-e.changedTouches[0].clientX;
    if(Math.abs(diff)>50){diff>0?goNext():goPrev();startTimer();}
  },{passive:true});
  if(slides.length>1)startTimer();
})();

// ══ 4. SCROLL-REVEAL ════════════════════════════════════════
(function(){
  const els=document.querySelectorAll(".reveal");
  if(!els.length)return;
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target);}});
  },{threshold:.12});
  els.forEach(el=>obs.observe(el));
})();

// ══ 5. SCROLL-TO-TOP ════════════════════════════════════════
(function(){
  const btn=document.getElementById("scrollTop");
  if(!btn)return;
  window.addEventListener("scroll",()=>btn.classList.toggle("show",window.scrollY>400));
  btn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
})();

// ══ 6. STICKY HEADER SHADOW ═════════════════════════════════
(function(){
  const hdr=document.querySelector(".site-header");
  window.addEventListener("scroll",()=>hdr?.classList.toggle("scrolled",window.scrollY>60));
})();

// ══ 7. ANIMATED COUNT-UP ════════════════════════════════════
(function(){
  const counters = document.querySelectorAll(".count-up");
  if(!counters.length) return;
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        let current = 0;
        const step = Math.max(1, Math.floor(target / 40));
        const timer = setInterval(()=>{
          current = Math.min(current + step, target);
          el.textContent = current < 10 ? "0" + current : current;
          if(current >= target) clearInterval(timer);
        }, 40);
        obs.unobserve(el);
      }
    });
  },{threshold: .5});
  counters.forEach(c=>obs.observe(c));
})();

// ══ 8. MENU FILTER TABS ═════════════════════════════════════
(function(){
  const tabs = document.querySelectorAll(".mf-tab");
  const cards = document.querySelectorAll(".food-card");
  if(!tabs.length) return;
  tabs.forEach(tab=>{
    tab.addEventListener("click", function(){
      tabs.forEach(t=>t.classList.remove("active"));
      this.classList.add("active");
      const filter = this.dataset.filter;
      cards.forEach(card=>{
        if(filter === "all"){
          card.classList.remove("hidden");
        } else {
          const cat = card.dataset.foodCat; // veg | nonveg | thali
          if(cat === filter){
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        }
      });
    });
  });
})();

// ══ 9. TESTIMONIALS CAROUSEL ════════════════════════════════
(function(){
  const track = document.getElementById("testimonialsTrack");
  const dots  = document.querySelectorAll(".tc-dot");
  if(!track) return;
  let idx = 0;
  const cards = track.querySelectorAll(".testimonial-card");
  let timer;
  function goTo(n){
    idx = (n + cards.length) % cards.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d,i)=>d.classList.toggle("active", i===idx));
  }
  function next(){ goTo(idx+1); }
  function startTimer(){ clearInterval(timer); timer=setInterval(next, 5000); }
  dots.forEach(d=>d.addEventListener("click",function(){
    goTo(+this.dataset.idx); startTimer();
  }));
  // Touch swipe
  let tx=0;
  track.addEventListener("touchstart",e=>{tx=e.touches[0].clientX;},{passive:true});
  track.addEventListener("touchend",e=>{
    const diff=tx-e.changedTouches[0].clientX;
    if(Math.abs(diff)>50){diff>0?goTo(idx+1):goTo(idx-1); startTimer();}
  },{passive:true});
  startTimer();
})();

// ══ 10. LIGHTBOX ════════════════════════════════════════════
(function(){
  const lb      = document.getElementById("lightbox");
  const lbImg   = document.getElementById("lbImg");
  const lbClose = document.getElementById("lbClose");
  const lbPrev  = document.getElementById("lbPrev");
  const lbNext  = document.getElementById("lbNext");
  const lbCap   = document.getElementById("lbCaption");
  const lbCtr   = document.getElementById("lbCounter");
  if(!lb) return;

  let images = [], currentIdx = 0;

  function collectImages(){
    images = [...document.querySelectorAll(".gallery-grid img")];
  }

  function openAt(idx){
    collectImages();
    if(!images.length) return;
    currentIdx = (idx + images.length) % images.length;
    lbImg.src = images[currentIdx].src;
    lbImg.alt = images[currentIdx].alt || "Yes Rajvada";
    lbCap.textContent = images[currentIdx].alt || "Yes Rajvada";
    lbCtr.textContent = `${currentIdx + 1} / ${images.length}`;
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function close(){
    lb.classList.remove("open");
    document.body.style.overflow = "";
    lbImg.src = "";
  }

  // Delegate click on gallery
  document.getElementById("publicGallery")?.addEventListener("click", function(e){
    const img = e.target.closest("img");
    if(!img) return;
    collectImages();
    const idx = images.indexOf(img);
    openAt(idx >= 0 ? idx : 0);
  });

  lbClose?.addEventListener("click", close);
  lbPrev?.addEventListener("click", ()=>openAt(currentIdx - 1));
  lbNext?.addEventListener("click", ()=>openAt(currentIdx + 1));
  lb?.addEventListener("click", e=>{ if(e.target===lb) close(); });
  document.addEventListener("keydown", e=>{
    if(!lb.classList.contains("open")) return;
    if(e.key==="Escape") close();
    if(e.key==="ArrowLeft") openAt(currentIdx - 1);
    if(e.key==="ArrowRight") openAt(currentIdx + 1);
  });
})();

// ══ 11. MOBILE BOTTOM NAV — Active highlight ════════════════
(function(){
  const mbnItems = document.querySelectorAll(".mbn-item");
  const sections = ["home","menu","gallery","contact"];
  window.addEventListener("scroll", ()=>{
    let current = "home";
    sections.forEach(id=>{
      const el = document.getElementById(id);
      if(el && window.scrollY >= el.offsetTop - 180) current = id;
    });
    mbnItems.forEach(item=>{
      const href = item.getAttribute("href") || "";
      if(href === `#${current}`) item.classList.add("active");
      else item.classList.remove("active");
    });
  });
})();

// ══ ADMIN KEY ════════════════════════════════════════════════
const ADMIN_KEY = "yesRajvadaPremiumAdminV1";

// ══ 12. ADMIN → PUBLIC WEBSITE SYNC ════════════════════════
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

  // --- Contact details ---
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
  document.querySelectorAll("a[href^='https://wa.me/']").forEach(a => {
    a.href = `https://wa.me/${wa}`;
  });
  // Mobile bottom nav WA
  document.querySelectorAll(".mbn-wa").forEach(a => { a.href = `https://wa.me/${wa}`; });

  // --- Topbar phone ---
  const topPhone = document.querySelector(".topline a[href^='tel:']");
  if (topPhone && profile.phone) {
    topPhone.href        = `tel:${profile.phone.replace(/\s/g,'')}`;
    topPhone.textContent = profile.phone;
  }

  // --- Mobile bottom nav call ---
  const mbnCall = document.querySelector(".mbn-call");
  if(mbnCall && profile.phone) mbnCall.href = `tel:${profile.phone.replace(/\s/g,'')}`;

  // --- Google Review button ---
  const reviewBtn = document.getElementById("googleReviewButton");
  if (reviewBtn && data.reviewUrl) reviewBtn.href = data.reviewUrl;

  // ── GALLERY SYNC ─────────────────────────────────────────
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

  // ── FOOD MENU PHOTOS SYNC ────────────────────────────────
  const catMap = { "Veg Special":0, "Non-Veg Special":1, "Special Thali":2 };
  const phMap  = { "Veg Special":"vegPlaceholder", "Non-Veg Special":"nonvegPlaceholder", "Special Thali":"thaliPlaceholder" };
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

  // ── ABOUT SECTION PHOTO ──────────────────────────────────
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

  // ── HALL SECTION PHOTO ──────────────────────────────────
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

  // ── BRANCHES SYNC ────────────────────────────────────────
  if (Array.isArray(data.branches) && data.branches.length) {
    const grid = document.getElementById("branchGridPublic");
    if (grid) {
      data.branches.forEach((b, i) => {
        const existing = [...grid.querySelectorAll(".branch-card h3")]
          .find(h => h.textContent === b.name);
        if (!existing) {
          const art = document.createElement("article");
          art.className = "branch-card";
          art.innerHTML = `
            <span class="branch-num">0${i + 3}</span>
            <div class="branch-icon">📍</div>
            <h3>${b.name}</h3>
            <p>${b.address || ""}</p>
            ${b.phone ? `<div class="branch-info-row"><span>📞</span><span>${b.phone}</span></div>` : ""}
            ${b.mapsUrl ? `<a class="branch-dir-btn" href="${b.mapsUrl}" target="_blank" rel="noopener">Get Directions ↗</a>` : `<a class="branch-dir-btn" href="#contact">Contact for details ↗</a>`}`;
          grid.appendChild(art);
        }
      });
    }
  }
})();

// ══ 13. CONTACT FORM → WHATSAPP ════════════════════════════
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
  // Success feedback
  const btn = this.querySelector("button[type='submit']");
  const orig = btn.textContent;
  btn.textContent = "✅ Sent!";
  btn.style.background = "#27ae60";
  setTimeout(()=>{ btn.textContent = orig; btn.style.background = ""; this.reset(); }, 3000);
});
