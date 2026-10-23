// ─── DATA ───
let products = [
  {
    id: 1,
    name: "باقلوا زعفرانی",
    desc: "با مغز گردو، عسل طبیعی و زعفران اعلا",
    price: 180000,
    icon: "🥮",
    cat: "traditional",
    badge: "hot",
    rating: 5,
  },
  {
    id: 2,
    name: "کیک خامه توت فرنگی",
    desc: "اسفنجی نرم با خامه تازه و توت فرنگی",
    price: 320000,
    icon: "🎂",
    cat: "cake",
    badge: "new",
    rating: 5,
  },
  {
    id: 3,
    name: "شکلات بلژیکی تلخ",
    desc: "۷۰٪ کاکائو، مخصوص عاشقان شکلات واقعی",
    price: 145000,
    icon: "🍫",
    cat: "chocolate",
    badge: "",
    rating: 4,
  },
  {
    id: 4,
    name: "کوکی کره‌ای وانیل",
    desc: "ترد و خوشمزه با کره طبیعی هلندی",
    price: 95000,
    icon: "🍪",
    cat: "cookie",
    badge: "sale",
    rating: 5,
  },
  {
    id: 5,
    name: "زولبیا بامیه خانگی",
    desc: "تازه و داغ، سنتی به سبک قدیم",
    price: 80000,
    icon: "🍩",
    cat: "traditional",
    badge: "hot",
    rating: 4,
  },
  {
    id: 6,
    name: "کیک تولد اختصاصی",
    desc: "طراحی سفارشی با نام و پیام دلخواه",
    price: 550000,
    icon: "🎂",
    cat: "cake",
    badge: "new",
    rating: 5,
  },
  {
    id: 7,
    name: "تروفل شکلاتی",
    desc: "قلب مایع با پودر کاکائو بلژیک",
    price: 220000,
    icon: "🍫",
    cat: "chocolate",
    badge: "",
    rating: 5,
  },
  {
    id: 8,
    name: "ماکارون فرانسوی",
    desc: "رلیلینگ با انواع طعم‌های خاص",
    price: 175000,
    icon: "🎨",
    cat: "cookie",
    badge: "new",
    rating: 4,
  },
];

const galleryItems = [
  { icon: "🎂", name: "کیک تولد" },
  { icon: "🥮", name: "باقلوا" },
  { icon: "🍫", name: "تروفل" },
  { icon: "🍪", name: "کوکی" },
  { icon: "🍰", name: "شیرینی" },
  { icon: "🧁", name: "کاپ‌کیک" },
  { icon: "🍩", name: "دونات" },
  { icon: "🍬", name: "آبنبات" },
  { icon: "🎁", name: "هدیه ویژه" },
  { icon: "🍦", name: "بستنی" },
  { icon: "🥐", name: "شیرینی پفکی" },
  { icon: "🍡", name: "شیرینی سنتی" },
];

let reviews = [
  {
    name: "سارا رضایی",
    city: "تهران",
    text: "شیرینی باقلواشان واقعاً بی‌نظیر است. طعم زعفران و گلاب توش حسابی حس می‌شه!",
    rating: 5,
    avatar: "👩",
  },
  {
    name: "امیر حسین کریمی",
    city: "اصفهان",
    text: "کیک تولد فرزندم رو اینجا سفارش دادم. هم طراحیش عالی بود هم طعمش!",
    rating: 5,
    avatar: "👨",
  },
  {
    name: "نیلوفر محمدی",
    city: "مشهد",
    text: "بسته‌بندی شیرینی‌ها خیلی شیک و مرتب بود. قیمتش هم منصفانه‌ست.",
    rating: 4,
    avatar: "👩",
  },
];

let orders = [
  {
    id: "NEG-0001",
    name: "علی احمدی",
    items: "باقلوا × ۲",
    total: "۳۶۰,۰۰۰",
    status: "done",
    date: "۱۴۰۳/۳/۱۰",
  },
  {
    id: "NEG-0002",
    name: "مریم حسینی",
    items: "کیک تولد × ۱",
    total: "۵۵۰,۰۰۰",
    status: "pending",
    date: "۱۴۰۳/۳/۱۱",
  },
  {
    id: "NEG-0003",
    name: "رضا کریمی",
    items: "ماکارون × ۳",
    total: "۵۲۵,۰۰۰",
    status: "done",
    date: "۱۴۰۳/۳/۱۲",
  },
  {
    id: "NEG-0004",
    name: "زهرا نوری",
    items: "شکلات × ۵",
    total: "۷۲۵,۰۰۰",
    status: "cancel",
    date: "۱۴۰۳/۳/۱۲",
  },
];

let cart = [];
let currentRating = 5;
let selectedIcon = "🎂";
let nextId = 9;
let orderCount = 4;

// ─── PAGE SYSTEM ───
function showPage(name) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + name).classList.add("active");
  window.scrollTo(0, 0);
  if (name === "checkout") renderCheckoutSummary();
  if (name === "admin") renderAdmin();
}

// ─── SEARCH ───
let searchOpen = false;
function toggleSearch() {
  searchOpen = !searchOpen;
  document.getElementById("searchBar").classList.toggle("open", searchOpen);
  document.getElementById("searchResults").classList.remove("open");
  if (searchOpen) document.getElementById("searchInput").focus();
  else {
    document.getElementById("searchInput").value = "";
  }
}

function doSearch(q) {
  const el = document.getElementById("searchResults");
  if (!q.trim()) {
    el.classList.remove("open");
    return;
  }
  const res = products.filter((p) => p.name.includes(q) || p.desc.includes(q));
  if (!res.length) {
    el.innerHTML =
      '<div style="padding:20px;text-align:center;color:var(--lb)">نتیجه‌ای یافت نشد 😔</div>';
    el.classList.add("open");
    return;
  }
  el.innerHTML = res
    .map(
      (p) => `
    <div class="search-result-item" onclick="searchSelect(${p.id})">
      <span class="sr-icon">${p.icon}</span>
      <div><div class="sr-name">${p.name}</div><div class="sr-price">${formatPrice(p.price)} تومان</div></div>
    </div>
  `,
    )
    .join("");
  el.classList.add("open");
}

function searchSelect(id) {
  addToCart(id);
  document.getElementById("searchResults").classList.remove("open");
  document.getElementById("searchInput").value = "";
  toggleSearch();
}

// ─── RENDER PRODUCTS ───
function renderProducts(filter = "all") {
  const grid = document.getElementById("productsGrid");
  const list =
    filter === "all" ? products : products.filter((p) => p.cat === filter);
  grid.innerHTML = list
    .map(
      (p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.1}s">
      <div class="product-img" style="background:linear-gradient(135deg,${cardBg(p.cat)})">
        ${p.badge ? `<span class="badge-${p.badge}">${badgeLabel(p.badge)}</span>` : ""}
        ${p.icon}
      </div>
      <div class="product-info">
        <div class="stars">${"★".repeat(p.rating)}${"☆".repeat(5 - p.rating)}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">${formatPrice(p.price)} <span>تومان</span></div>
          <button class="add-btn" onclick="addToCart(${p.id})">+ افزودن</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

function cardBg(cat) {
  return (
    {
      traditional: "#FFF0DC,#FFE0B8",
      cake: "#FFE8F0,#FFD0E0",
      chocolate: "#F0E0D0,#E0C8B0",
      cookie: "#FFF8E0,#FFE8C0",
      ice: "#E0F0FF,#C0E0FF",
      special: "#F0E8FF,#E0D0FF",
    }[cat] || "#FFF0DC,#FFE0B8"
  );
}
function badgeLabel(b) {
  return { hot: "🔥 پرفروش", new: "✨ جدید", sale: "🏷️ تخفیف" }[b] || "";
}
function formatPrice(p) {
  return p.toLocaleString("fa-IR");
}

function setFilter(btn, filter) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderProducts(filter);
}
function filterProducts(cat) {
  showPage("home");
  setTimeout(() => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    renderProducts(cat);
  }, 100);
}

// ─── GALLERY ───
function renderGallery() {
  document.getElementById("galleryGrid").innerHTML = galleryItems
    .map(
      (g) => `
    <div class="gallery-item" onclick="openLightbox('${g.icon}','${g.name}')">
      ${g.icon}
      <div class="overlay">مشاهده بزرگ</div>
    </div>
  `,
    )
    .join("");
}

function openLightbox(icon, name) {
  document.getElementById("lightboxContent").textContent = icon;
  document.getElementById("lightboxName").textContent = name;
  document.getElementById("lightbox").classList.add("open");
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

// ─── REVIEWS ───
function renderReviews() {
  document.getElementById("reviewsGrid").innerHTML = reviews
    .map(
      (r) => `
    <div class="test-card">
      <p class="test-text">${r.text}</p>
      <div style="color:var(--gold);font-size:.85rem;margin-bottom:12px">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
      <div class="test-author">
        <div class="test-avatar">${r.avatar}</div>
        <div><div class="test-name">${r.name}</div><div class="test-role">مشتری • ${r.city}</div></div>
      </div>
    </div>
  `,
    )
    .join("");
}

function setRating(n) {
  currentRating = n;
  document.querySelectorAll("#starInput span").forEach((s, i) => {
    s.classList.toggle("active", i < n);
  });
}

function submitReview() {
  const name = document.getElementById("reviewName").value.trim();
  const city = document.getElementById("reviewCity").value.trim();
  const text = document.getElementById("reviewText").value.trim();
  if (!name || !text) {
    showToast("❌ لطفاً نام و نظر را وارد کنید");
    return;
  }
  reviews.unshift({
    name,
    city: city || "ایران",
    text,
    rating: currentRating,
    avatar: "👤",
  });
  renderReviews();
  document.getElementById("reviewName").value = "";
  document.getElementById("reviewCity").value = "";
  document.getElementById("reviewText").value = "";
  setRating(5);
  showToast("✅ نظر شما ثبت شد!");
  document.getElementById("statReviews").textContent = reviews.length;
}

// ─── CART ───
function addToCart(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  const ex = cart.find((x) => x.id === id);
  if (ex) ex.qty++;
  else cart.push({ ...p, qty: 1 });
  updateCart();
  showToast(`${p.icon} ${p.name} به سبد اضافه شد!`);
}

function updateCart() {
  document.getElementById("cartCount").textContent = cart.reduce(
    (a, c) => a + c.qty,
    0,
  );
  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);
  document.getElementById("cartTotal").textContent =
    formatPrice(total) + " تومان";
  const el = document.getElementById("cartItemsEl");
  if (!cart.length) {
    el.innerHTML =
      '<p style="text-align:center;color:var(--lb);margin-top:40px">سبد شما خالی است 🍪</p>';
    return;
  }
  el.innerHTML = cart
    .map(
      (c) => `
    <div class="cart-item">
      <div class="cart-item-icon">${c.icon}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-item-price">${formatPrice(c.price)} تومان</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${c.id},-1)">−</button>
          <span>${c.qty}</span>
          <button class="qty-btn" onclick="changeQty(${c.id},1)">+</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function changeQty(id, d) {
  const i = cart.findIndex((x) => x.id === id);
  if (i < 0) return;
  cart[i].qty += d;
  if (cart[i].qty <= 0) cart.splice(i, 1);
  updateCart();
}

function openCart() {
  document.getElementById("cartSidebar").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
}
function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
}

function goCheckout() {
  if (!cart.length) {
    showToast("❌ سبد خرید شما خالی است!");
    return;
  }
  closeCart();
  showPage("checkout");
}

// ─── CHECKOUT ───
function renderCheckoutSummary() {
  const el = document.getElementById("summaryItems");
  el.innerHTML = cart
    .map(
      (c) => `
    <div class="summary-item">
      <span class="summary-item-name">${c.icon} ${c.name} × ${c.qty}</span>
      <span class="summary-item-price">${formatPrice(c.price * c.qty)} تومان</span>
    </div>
  `,
    )
    .join("");
  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);
  document.getElementById("summaryTotal").textContent =
    formatPrice(total) + " تومان";
}

function selectDelivery(el) {
  document
    .querySelectorAll(".delivery-option")
    .forEach((d) => d.classList.remove("selected"));
  el.classList.add("selected");
}
function selectPayment(el) {
  document.querySelectorAll(".delivery-option").forEach((d) => {
    if (d.querySelector("input[name=payment]")) d.classList.remove("selected");
  });
  el.classList.add("selected");
}

function placeOrder() {
  const fname = document.getElementById("fname").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  if (!fname || !phone || !address) {
    showToast("❌ لطفاً اطلاعات ضروری را تکمیل کنید");
    return;
  }
  orderCount++;
  const oid = "NEG-" + String(orderCount).padStart(4, "0");
  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);
  orders.unshift({
    id: oid,
    name: fname,
    items: cart.map((c) => c.name + " × " + c.qty).join(", "),
    total: formatPrice(total),
    status: "pending",
    date: "۱۴۰۳/۳/۱۵",
  });
  document.getElementById("orderId").textContent = "شماره سفارش: #" + oid;
  cart = [];
  updateCart();
  showPage("success");
}

// ─── ADMIN ───
function renderAdmin() {
  renderOrdersTable("ordersTableOverview", orders.slice(0, 4));
  renderOrdersTable("ordersTableFull", orders);
  renderProductsTable();
  renderIconPicker();
  document.getElementById("statProducts").textContent = products.length;
  document.getElementById("statOrders").textContent = orders.length;
  document.getElementById("statReviews").textContent = reviews.length;
}

function renderOrdersTable(id, list) {
  document.getElementById(id).innerHTML = `
    <thead><tr><th>شماره</th><th>مشتری</th><th>سفارشات</th><th>مبلغ</th><th>وضعیت</th><th>تاریخ</th></tr></thead>
    <tbody>${list
      .map(
        (o) => `
      <tr>
        <td>${o.id}</td><td>${o.name}</td><td>${o.items}</td><td>${o.total} تومان</td>
        <td><span class="status-badge status-${o.status}">${{ done: "✅ تحویل شد", pending: "⏳ در انتظار", cancel: "❌ لغو شد" }[o.status]}</span></td>
        <td>${o.date}</td>
      </tr>`,
      )
      .join("")}</tbody>
  `;
}

function renderProductsTable() {
  document.getElementById("productsTable").innerHTML = `
    <thead><tr><th>آیکون</th><th>نام</th><th>دسته</th><th>قیمت</th><th>برچسب</th><th>عملیات</th></tr></thead>
    <tbody>${products
      .map(
        (p) => `
      <tr>
        <td style="font-size:1.8rem">${p.icon}</td>
        <td>${p.name}</td>
        <td>${{ traditional: "سنتی", cake: "کیک", chocolate: "شکلات", cookie: "کوکی", ice: "بستنی", special: "ویژه" }[p.cat] || p.cat}</td>
        <td>${formatPrice(p.price)} تومان</td>
        <td>${p.badge ? badgeLabel(p.badge) : "—"}</td>
        <td><div class="admin-actions">
          <button class="btn-sm btn-danger" onclick="deleteProduct(${p.id})">🗑️ حذف</button>
        </div></td>
      </tr>`,
      )
      .join("")}</tbody>
  `;
}

const iconOptions = [
  "🎂",
  "🥮",
  "🍫",
  "🍪",
  "🍩",
  "🍰",
  "🧁",
  "🎁",
  "🍬",
  "🍦",
  "🥐",
  "🍡",
];
function renderIconPicker() {
  document.getElementById("iconPicker").innerHTML = iconOptions
    .map(
      (ic) => `
    <div class="icon-option ${ic === selectedIcon ? "selected" : ""}" onclick="selectIcon('${ic}')">${ic}</div>
  `,
    )
    .join("");
}
function selectIcon(ic) {
  selectedIcon = ic;
  document
    .querySelectorAll(".icon-option")
    .forEach((el) => el.classList.toggle("selected", el.textContent === ic));
}

function addNewProduct() {
  const name = document.getElementById("newName").value.trim();
  const price = parseInt(document.getElementById("newPrice").value) || 0;
  const cat = document.getElementById("newCat").value;
  const badge = document.getElementById("newBadge").value;
  const desc = document.getElementById("newDesc").value.trim();
  if (!name || !price) {
    showToast("❌ نام و قیمت الزامی هستند");
    return;
  }
  products.push({
    id: nextId++,
    name,
    desc,
    price,
    icon: selectedIcon,
    cat,
    badge,
    rating: 5,
  });
  renderProducts("all");
  renderProductsTable();
  document.getElementById("statProducts").textContent = products.length;
  document.getElementById("newName").value = "";
  document.getElementById("newPrice").value = "";
  document.getElementById("newDesc").value = "";
  showToast(`✅ ${name} اضافه شد!`);
}

function deleteProduct(id) {
  products = products.filter((p) => p.id !== id);
  renderProductsTable();
  renderProducts("all");
  document.getElementById("statProducts").textContent = products.length;
  showToast("🗑️ محصول حذف شد");
}

function switchAdminTab(btn, tab) {
  document
    .querySelectorAll(".admin-tab")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".admin-content")
    .forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("tab-" + tab).classList.add("active");
}

// ─── TOAST ───
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}

// ─── COUNTDOWN ───
let cdSecs = 8 * 3600 + 45 * 60 + 30;
setInterval(() => {
  if (cdSecs <= 0) return;
  cdSecs--;
  document.getElementById("cdH").textContent = String(
    Math.floor(cdSecs / 3600),
  ).padStart(2, "0");
  document.getElementById("cdM").textContent = String(
    Math.floor((cdSecs % 3600) / 60),
  ).padStart(2, "0");
  document.getElementById("cdS").textContent = String(cdSecs % 60).padStart(
    2,
    "0",
  );
}, 1000);

// ─── SCROLL REVEAL ───
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ─── INIT ───
renderProducts("all");
renderGallery();
renderReviews();
setRating(5);
