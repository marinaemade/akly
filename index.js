// Safe icon initialiser — retries until lucide is loaded
function initIcons(){
  if(typeof lucide !== 'undefined'){
    lucide.createIcons();
  } else {
    setTimeout(initIcons, 80);
  }
}

const menuData = {
  starters: { icon:'salad', label:'Starters', items:[
    { name:"Classic Caesar Salad", desc:"Crisp romaine, parmesan, croutons & house Caesar dressing", tag:"Signature", price:"60", img:"https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=700" },
    { name:"Mozzarella Sticks", desc:"6 pieces of golden fried cheese with a rich marinara dipping sauce", tag:"Fan Favorite", price:"85", img:"https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=700" },
    { name:"Creamy Chicken Soup", desc:"Our famous smooth cream soup with tender chicken chunks", tag:"Daily Fresh", price:"100", img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=700" },
    { name:"Mombar", desc:"Authentic Egyptian stuffed rice sausages with local spices", tag:"Local Hero", price:"125", img:"https://images.unsplash.com/photo-1589113331515-9923832d787a?w=700" },
  ]},
  mains: { icon:'beef', label:'Main Courses', items:[
    { name:"Akly Double Smash Burger", desc:"Two juicy beef patties, cheddar, caramelized onions & secret sauce", tag:"Chef's Pick", price:"260", img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700" },
    { name:"Grilled Chicken Platter", desc:"Half grilled chicken, served with basmati rice and garlic dip (Tomeya)", tag:"Healthy", price:"320", img:"https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=700" },
    { name:"Chicken Fettuccine Alfredo", desc:"Creamy white sauce pasta with grilled chicken and parmesan", tag:"Comfort", price:"195", img:"https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=700" },
    { name:"Super Supreme Pizza", desc:"Beef pepperoni, mushrooms, peppers, olives and mozzarella", tag:"Classic", price:"280", img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700" },
    { name:"Mixed Grill 1/2 KG", desc:"Premium Kofta, Shish Tawook, and Kebab served with charred sides", tag:"Crowd Pleaser", price:"380", img:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700" },
    { name:"Crispy Chicken Strips Meal", desc:"5 pieces of breaded strips served with fries, coleslaw, and honey mustard", tag:"New", price:"275", img:"https://images.unsplash.com/photo-1562967914-608f82629710?w=700" },
    { name:"Grilled Sea Bream (Denise)", desc:"Fresh Mediterranean fish with lemon-butter sauce and sayadeya rice", tag:"Seafood", price:"360", img:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=700" },
    { name:"Beef Stroganoff", desc:"Tender beef strips in creamy mushroom sauce over white rice", tag:"Classic", price:"320", img:"https://images.unsplash.com/photo-1534939561122-3d290a019d2b?w=700" }
  ]},
  sides: { icon:'container', label:'Sides', items:[
    { name:"Cheese Fries", desc:"Crispy fries topped with melted cheddar and jalapenos", tag:"Classic", price:"45", img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700" },
    { name:"Basmati Rice", desc:"Yellow long-grain rice with Egyptian aromatic spices", tag:"Simple", price:"55", img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=700" },
    { name:"Tehina & Pickles", desc:"Traditional sesame paste and house-made Egyptian pickles", tag:"Essential", price:"40", img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700" },
    { name:"Sauteed Vegetables", desc:"Seasonal veggies tossed in butter and herbs", tag:"Healthy", price:"90", img:"https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700" }
  ]},
  desserts: { icon:'cake', label:'Desserts', items:[
    { name:"Nutella Cheesecake", desc:"Creamy cheesecake with a thick layer of Nutella and Lotus crumbles", tag:"Must Try", price:"195", img:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=700" },
    { name:"Molten Lava Cake", desc:"Served with a scoop of vanilla ice cream", tag:"Classic", price:"180", img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700" },
  ]},
  drinks: { icon:'coffee', label:'Drinks', items:[
    { name:"Soft Drinks", desc:"Coke, Sprite, or Fanta", tag:"Classic", price:"40", img:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=700" },
    { name:"Fresh Lemon Mint", desc:"The ultimate Egyptian refresher, blended with ice", tag:"Best Seller", price:"60", img:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=700" },
    { name:"Spanish Latte", desc:"Condensed milk and double shot espresso over ice", tag:"Trendy", price:"115", img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700" },
    { name:"Turkish Coffee", desc:"Double shot, made the traditional way (Manous)", tag:"Strong", price:"75", img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700" },
    { name:"Iced Hibiscus (Karkadeh)", desc:"Premium Egyptian dried hibiscus, cold-pressed and sweetened", tag:"Local", price:"90", img:"https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=700" },
    { name:"Classic Mojito", desc:"Fresh lime, mint, and soda with your choice of flavor (Blueberry/Strawberry)", tag:"Cooler", price:"135", img:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=700" }
  ]}
};

const keys = Object.keys(menuData);
const tabsEl = document.getElementById('menuTabs');
const panelsEl = document.getElementById('menuPanels');

// Build tabs
tabsEl.innerHTML = keys.map((k,i)=>`
  <button class="tab-btn${i===0?' active':''}" data-tab="${k}">
    <i data-lucide="${menuData[k].icon}"></i> ${menuData[k].label}
  </button>`).join('');

function renderPanel(key){
  const {items} = menuData[key];
  return `<div class="menu-panel active">
    <div class="menu-grid">
      ${items.map((item,i)=>`
        <div class="menu-card reveal rd${(i%4)+1}">
          <div class="menu-card-img-wrap">
            <img class="menu-card-img" src="${item.img}" alt="${item.name}" loading="lazy"
              onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&auto=format&fit=crop&q=80'" />
            <span class="menu-card-tag">${item.tag}</span>
          </div>
          <div class="menu-card-body">
            <h3 class="menu-card-name">${item.name}</h3>
            <p class="menu-card-desc">${item.desc}</p>
            <div class="menu-card-footer">
              <div class="menu-card-price">${item.price} <span>EGP</span></div>
              <div class="menu-card-icon"><i data-lucide="plus"></i></div>
            </div>
          </div>
        </div>`).join('')}
    </div>
  </div>`;
}

panelsEl.innerHTML = renderPanel('starters');
initIcons();

tabsEl.addEventListener('click', e=>{
  const btn = e.target.closest('.tab-btn');
  if(!btn) return;
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  panelsEl.innerHTML = renderPanel(btn.dataset.tab);
  initIcons();
  observeReveal();
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('navDrawer');
hamburger.addEventListener('click', ()=>{ hamburger.classList.toggle('open'); drawer.classList.toggle('open'); });
function closeDrawer(){ hamburger.classList.remove('open'); drawer.classList.remove('open'); }

// Nav scroll
window.addEventListener('scroll', ()=>{
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  observeReveal();
});

// Reveal
function observeReveal(){
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, {threshold:.1});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>obs.observe(el));
}
observeReveal();

// Cursor
const cursorEl = document.getElementById('cursor');
const dot = cursorEl.querySelector('.cursor-dot');
const ring = cursorEl.querySelector('.cursor-ring');
let mx=0,my=0,rx=0,ry=0;
window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
(function tick(){ dot.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`; rx+=(mx-rx)*.12; ry+=(my-ry)*.12; ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`; requestAnimationFrame(tick); })();

// Boot
initIcons();