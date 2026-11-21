const DBKEY="yesRajvadaPremiumAdminV1";
const FOOD_CATS=["Veg Special","Non-Veg Special","Special Thali","Beverages","Desserts"];
const ALL_CATS=[...FOOD_CATS,"Hotel","Hall"];
const defaults={profile:{hotelName:"Yes Rajvada",tagline:"राजेशाही चव, आपुलकीची सेवा"},menu:[],photos:[],enquiries:[],offers:[],branches:[],reviewUrl:""};
let db=loadDB(),activeTab="overview",modalSaveAction=null,activeGalCat="all";
function loadDB(){try{return{...defaults,...JSON.parse(localStorage.getItem(DBKEY)||"{}")}}catch(e){return structuredClone(defaults)}}
function saveDB(){localStorage.setItem(DBKEY,JSON.stringify(db));refreshAll()}
function esc(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
const $=id=>document.getElementById(id);
function $$(n){return document.querySelectorAll(`[data-${n}]`)}

// ── Tab Navigation ──────────────────────────────
function showTab(name){
  activeTab=name;
  document.querySelectorAll(".tab-panel").forEach(x=>x.classList.toggle("active",x.id==="tab-"+name));
  document.querySelectorAll(".nav-item").forEach(x=>x.classList.toggle("active",x.dataset.tab===name));
  const label=document.querySelector(`[data-tab="${name}"] span`)?.textContent||"Dashboard";
  $("crumbTitle").textContent=label;
  $("pageTitle").innerHTML=name==="overview"?'Good evening! <em>Welcome back.</em>':label;
  document.querySelector(".sidebar").classList.remove("mobile-open");
}
document.querySelectorAll("[data-tab]").forEach(b=>b.addEventListener("click",()=>showTab(b.dataset.tab)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showTab(b.dataset.go)));
$("mobileMenu").onclick=()=>document.querySelector(".sidebar").classList.toggle("mobile-open");
$("todayLabel").textContent=new Date().toLocaleDateString("en-IN",{weekday:"short",day:"2-digit",month:"short",year:"numeric"}).toUpperCase();

// ── Refresh All ─────────────────────────────────
function refreshAll(){
  $("statEnquiries").textContent=db.enquiries.length;
  $("statPhotos").textContent=db.photos.length;
  $("statMenu").textContent=db.menu.length;
  $("statOffers").textContent=db.offers.filter(x=>x.active!==false).length;
  renderRecent();renderMenu();renderGallery();renderEnquiries();renderOffers();renderBranches();
  syncProfile();
  $("googleReviewUrl").value=db.reviewUrl||"";
  $("reviewPreview").href=db.reviewUrl||"https://www.google.com/maps/search/?api=1&query=Yes+Rajvada";
}

// ── Renders ─────────────────────────────────────
function renderRecent(){
  const arr=[...db.enquiries].slice(-5).reverse();
  $("recentEnquiries").innerHTML=arr.length
    ?`<table><thead><tr><th>Customer</th><th>Phone</th><th>Type</th><th>Status</th></tr></thead><tbody>${arr.map(x=>`<tr><td>${esc(x.name)}</td><td>${esc(x.phone)}</td><td>${esc(x.type)}</td><td><span class="state">${esc(x.status)}</span></td></tr>`).join("")}</tbody></table>`
    :'<div class="empty">अजून enquiry नाही.</div>';
}

function renderMenu(){
  const root=$("menuList");
  root.innerHTML=db.menu.length
    ?db.menu.map(x=>`<div class="data-row"><div class="row-avatar">☷</div><div class="row-main"><b>${esc(x.name)}</b><small>${esc(x.category)} · ${x.available?"Available":"Unavailable"}</small></div><strong>₹${esc(x.price)}</strong><button class="icon-btn" data-edit-menu="${x.id}">Edit</button><button class="icon-btn delete" data-del-menu="${x.id}">Delete</button></div>`).join("")
    :'<div class="empty">Menu items नाहीत. Add menu item वर क्लिक करा.</div>';
  root.querySelectorAll("[data-edit-menu]").forEach(b=>b.onclick=()=>editMenu(+b.dataset.editMenu));
  root.querySelectorAll("[data-del-menu]").forEach(b=>b.onclick=()=>removeItem("menu",+b.dataset.delMenu));
}

// ── Gallery with Category Filter ────────────────
function renderGallery(){
  const root=$("galleryList");
  const photos=activeGalCat==="all"?db.photos:db.photos.filter(p=>p.category===activeGalCat);
  root.innerHTML=photos.length
    ?photos.map(p=>`
      <article class="gallery-card">
        <img src="${p.data}" alt="${esc(p.title)}" loading="lazy">
        <div>
          <span class="cat-badge">${esc(p.category||"Hotel")}</span>
          <b>${esc(p.title)}</b>
          <button class="icon-btn delete" data-del-photo="${p.id}">Delete</button>
        </div>
      </article>`).join("")
    :'<div class="empty wide">या category मध्ये अजून फोटो नाहीत.</div>';
  root.querySelectorAll("[data-del-photo]").forEach(b=>
    b.onclick=()=>{if(confirm("हा फोटो delete करायचा?")){db.photos=db.photos.filter(p=>p.id!==+b.dataset.delPhoto);saveDB();}}
  );
}

// Category tab clicks
document.querySelectorAll(".gcat-btn").forEach(btn=>
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".gcat-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    activeGalCat=btn.dataset.cat;
    renderGallery();
  })
);

// ── Upload Photos ───────────────────────────────
$("uploadGallery").onclick=async()=>{
  const files=[...$("galleryFiles").files];
  const category=$("uploadCategory").value;
  if(!files.length){$("galleryStatus").textContent="आधी फोटो निवडा.";return;}
  let uploaded=0,skipped=0;
  for(let f of files){
    if(!f.type.startsWith("image/")){skipped++;continue;}
    if(f.size>2*1024*1024){$("galleryStatus").textContent=`${f.name}: 2 MB पेक्षा कमी असावा.`;skipped++;continue;}
    const data=await new Promise(res=>{const r=new FileReader();r.onload=()=>res(r.result);r.readAsDataURL(f);});
    db.photos.push({id:Date.now()+Math.random(),title:f.name.replace(/\.[^.]+$/,""),category,data});
    uploaded++;
  }
  $("galleryFiles").value="";
  $("galleryStatus").textContent=`✅ ${uploaded} फोटो upload झाले${skipped?` (${skipped} skip)`:"."}.`;
  saveDB();
};

function renderEnquiries(){
  const q=$("enquirySearch").value.toLowerCase(),f=$("enquiryFilter").value;
  const arr=db.enquiries.filter(x=>(f==="all"||x.status===f)&&(`${x.name} ${x.phone} ${x.type}`.toLowerCase().includes(q)));
  $("enquiryList").innerHTML=arr.length
    ?`<table><thead><tr><th>Customer</th><th>Contact</th><th>Enquiry</th><th>Date</th><th>Status</th><th>Action</th></tr></thead><tbody>${arr.map(x=>`<tr><td><b>${esc(x.name)}</b></td><td>${esc(x.phone)}</td><td>${esc(x.type)}</td><td>${esc(x.date||"—")}</td><td><select class="status-select" data-status="${x.id}">${["New","Contacted","Confirmed","Completed","Cancelled"].map(s=>`<option ${x.status===s?"selected":""}>${s}</option>`).join("")}</select></td><td><button class="icon-btn delete" data-del-enquiry="${x.id}">Delete</button></td></tr>`).join("")}</tbody></table>`
    :'<div class="empty">या filter साठी enquiry सापडली नाही.</div>';
  $$("status").forEach(s=>s.onchange=()=>{const x=db.enquiries.find(e=>e.id===+s.dataset.status);if(x){x.status=s.value;saveDB();}});
  $$("del-enquiry").forEach(b=>b.onclick=()=>removeItem("enquiries",+b.dataset.delEnquiry));
}

function renderOffers(){
  $("offerList").innerHTML=db.offers.length
    ?db.offers.map(o=>`<article class="offer-card"><span class="offer-tag">${o.active?"ACTIVE":"INACTIVE"}</span><h3>${esc(o.title)}</h3><p>${esc(o.description)}</p><b>${esc(o.validity||"No end date")}</b><div><button class="icon-btn" data-edit-offer="${o.id}">Edit</button><button class="icon-btn delete" data-del-offer="${o.id}">Delete</button></div></article>`).join("")
    :'<div class="empty wide">सध्या offers नाहीत.</div>';
  $$("edit-offer").forEach(b=>b.onclick=()=>editOffer(+b.dataset.editOffer));
  $$("del-offer").forEach(b=>b.onclick=()=>removeItem("offers",+b.dataset.delOffer));
}

function renderBranches(){
  $("branchList").innerHTML=db.branches.length
    ?db.branches.map(b=>`<div class="data-row"><div class="row-avatar">⌖</div><div class="row-main"><b>${esc(b.name)}</b><small>${esc(b.address)}${b.phone?" · "+esc(b.phone):""}</small></div><button class="icon-btn" data-edit-branch="${b.id}">Edit</button><button class="icon-btn delete" data-del-branch="${b.id}">Delete</button></div>`).join("")
    :'<div class="empty">Branches add करा.</div>';
  $$("edit-branch").forEach(b=>b.onclick=()=>editBranch(+b.dataset.editBranch));
  $$("del-branch").forEach(b=>b.onclick=()=>removeItem("branches",+b.dataset.delBranch));
}

function syncProfile(){
  const p=db.profile||{};
  for(const id of ["hotelName","tagline","phone","whatsapp","address","openTime","closeTime","aboutText","mapsUrl"])$(id).value=p[id]||"";
}

function removeItem(key,id){if(confirm("हा record delete करायचा?")){db[key]=db[key].filter(x=>x.id!==id);saveDB();}}

// ── Modal ────────────────────────────────────────
function openModal(title,html,fn){$("modalTitle").textContent=title;$("modalBody").innerHTML=html;$("modal").hidden=false;modalSaveAction=fn;}
function closeModal(){$("modal").hidden=true;modalSaveAction=null;}
$("modalClose").onclick=$("modalCancel").onclick=closeModal;
$("modalSave").onclick=()=>{if(modalSaveAction&&modalSaveAction()!==false){closeModal();saveDB();}};

// ── Menu CRUD ────────────────────────────────────
function editMenu(id){
  const x=db.menu.find(a=>a.id===id)||{name:"",price:"",category:"Veg Special",available:true};
  openModal(id?"Edit menu item":"Add menu item",
    `<label>Dish name<input id="mName" value="${esc(x.name)}"></label>
     <label>Price (₹)<input id="mPrice" type="number" min="0" value="${esc(x.price)}"></label>
     <label>Category<select id="mCat">${["Veg Special","Non-Veg Special","Special Thali","Beverages","Desserts","Other"].map(v=>`<option ${x.category===v?"selected":""}>${v}</option>`).join("")}</select></label>
     <label class="check-label"><input id="mAvail" type="checkbox" ${x.available?"checked":""}> Currently available</label>`,
    ()=>{
      const name=$("mName").value.trim(),price=$("mPrice").value;
      if(!name||price===""){alert("Dish name आणि price भरा.");return false;}
      const obj={id:id||Date.now(),name,price,category:$("mCat").value,available:$("mAvail").checked};
      if(id)db.menu=db.menu.map(a=>a.id===id?obj:a);else db.menu.push(obj);
    }
  );
}
$("addMenu").onclick=()=>editMenu();

// ── Offers CRUD ──────────────────────────────────
function editOffer(id){
  const x=db.offers.find(a=>a.id===id)||{title:"",description:"",validity:"",active:true};
  openModal(id?"Edit offer":"Create offer",
    `<label>Offer title<input id="oTitle" value="${esc(x.title)}"></label>
     <label>Description<textarea id="oDesc">${esc(x.description)}</textarea></label>
     <label>Valid until<input id="oValidity" type="date" value="${esc(x.validity)}"></label>
     <label class="check-label"><input id="oActive" type="checkbox" ${x.active?"checked":""}> Active offer</label>`,
    ()=>{
      const title=$("oTitle").value.trim();
      if(!title){alert("Offer title भरा.");return false;}
      const obj={id:id||Date.now(),title,description:$("oDesc").value,validity:$("oValidity").value,active:$("oActive").checked};
      if(id)db.offers=db.offers.map(a=>a.id===id?obj:a);else db.offers.push(obj);
    }
  );
}
$("addOffer").onclick=()=>editOffer();

// ── Branches CRUD ────────────────────────────────
function editBranch(id){
  const x=db.branches.find(a=>a.id===id)||{name:"",address:"",phone:"",mapsUrl:""};
  openModal(id?"Edit branch":"Add branch",
    `<label>Branch name<input id="bName" value="${esc(x.name)}"></label>
     <label>Address<input id="bAddress" value="${esc(x.address)}"></label>
     <label>Phone<input id="bPhone" value="${esc(x.phone)}"></label>
     <label>Google Maps URL (optional)<input id="bMaps" value="${esc(x.mapsUrl||"")}"></label>`,
    ()=>{
      const name=$("bName").value.trim();
      if(!name){alert("Branch name भरा.");return false;}
      const obj={id:id||Date.now(),name,address:$("bAddress").value,phone:$("bPhone").value,mapsUrl:$("bMaps").value};
      if(id)db.branches=db.branches.map(a=>a.id===id?obj:a);else db.branches.push(obj);
    }
  );
}
$("addBranch").onclick=()=>editBranch();

// ── Profile Save ─────────────────────────────────
$("saveProfile").onclick=()=>{
  db.profile={};
  for(const id of ["hotelName","tagline","phone","whatsapp","address","openTime","closeTime","aboutText","mapsUrl"])db.profile[id]=$(id).value.trim();
  saveDB();alert("✅ Hotel profile saved!");
};

// ── Enquiry ──────────────────────────────────────
$("addEnquiry").onclick=()=>openModal("Add customer enquiry",
  `<label>Customer name<input id="eName"></label>
   <label>Mobile number<input id="ePhone"></label>
   <label>Enquiry type<select id="eType"><option>Table booking</option><option>Hall booking</option><option>Party / Event</option><option>General enquiry</option></select></label>
   <label>Date<input id="eDate" type="date"></label>
   <label>Notes<textarea id="eNotes"></textarea></label>`,
  ()=>{
    const name=$("eName").value.trim(),phone=$("ePhone").value.trim();
    if(!name||!phone){alert("Customer name आणि phone भरा.");return false;}
    db.enquiries.push({id:Date.now(),name,phone,type:$("eType").value,date:$("eDate").value,notes:$("eNotes").value,status:"New"});
  }
);
$("enquiryFilter").onchange=renderEnquiries;
$("enquirySearch").oninput=renderEnquiries;

// ── Reviews ──────────────────────────────────────
$("saveReview").onclick=()=>{
  const u=$("googleReviewUrl").value.trim();
  if(u&&!/^https:\/\/(g\.page|search\.google\.com|www\.google\.com)\//i.test(u)){alert("कृपया valid Google review URL टाका.");return;}
  db.reviewUrl=u;saveDB();alert("✅ Google review link saved!");
};
$("copyReview").onclick=()=>{
  const u=db.reviewUrl||"";
  if(!u){alert("आधी Google review link save करा.");return;}
  navigator.clipboard?.writeText(u).then(()=>alert("✅ Link copied!"),()=>alert(u));
};

// ── Backup / Restore ─────────────────────────────
$("exportData").onclick=()=>{
  const blob=new Blob([JSON.stringify(db,null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="yes-rajvada-backup.json";a.click();URL.revokeObjectURL(a.href);
};
$("importData").onclick=async()=>{
  const f=$("importFile").files[0];
  if(!f){alert("Backup JSON file निवडा.");return;}
  try{const v=JSON.parse(await f.text());if(!v||typeof v!=="object")throw Error();db={...defaults,...v};saveDB();alert("✅ Backup restored!");}
  catch(e){alert("Invalid backup file.");}
};
$("resetData").onclick=()=>{if(confirm("सर्व admin data delete करायचा? ही कृती undo होणार नाही.")){db=structuredClone(defaults);saveDB();}};

// ── Init ─────────────────────────────────────────
function init(){refreshAll();}init();
