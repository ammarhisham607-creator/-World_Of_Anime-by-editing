// ==============================
// CONFIG
// ==============================
const WHATSAPP_NUMBER = "201149243249";

// ==============================
// TRANSLATIONS (AR/EN)
// ==============================
const translations = {
  ar: {
    'nav-home': 'الرئيسية', 'nav-products': 'المنتجات', 'nav-login': 'تسجيل الدخول',
    'nav-signup': 'إنشاء حساب', 'nav-cart': 'السلة', 'nav-wishlist': 'المفضلة', 'nav-profile': 'حسابي',
    'hero-badge': '🌸 مغامرة الأنمي من اليابان', 'hero-title': 'عالم الأنمي بين إيديك',
    'hero-desc': 'اكتشف أفضل المنتجات المستوحاة من الأنمي: سيوف، مجسمات، ملابس، بوسترات، مانجا وأكثر.',
    'browse-products': 'تصفح المنتجات', 'create-account': 'إنشاء حساب',
    'categories-title': 'تصفح حسب التصنيف', 'bestsellers-title': 'الأكثر مبيعاً',
    'new-arrivals-title': 'وصل حديثاً', 'offers-title': 'عروض خاصة',
    'view-all': 'عرض الكل', 'add-to-cart': 'أضف للسلة', 'add-to-wishlist': 'أضف للمفضلة',
    'buy-now': 'اشتري الآن', 'added-to-cart': 'تمت الإضافة للسلة!',
    'removed-from-cart': 'تم الحذف من السلة', 'added-to-wishlist': 'تمت الإضافة للمفضلة!',
    'removed-from-wishlist': 'تم الحذف من المفضلة', 'cart-title': 'سلة التسوق',
    'cart-empty': 'سلتك فاضية!', 'cart-empty-desc': 'ابدأ التسوق واكتشف منتجاتنا المميزة',
    'continue-shopping': 'تابع التسوق', 'subtotal': 'المجموع الفرعي', 'shipping': 'الشحن',
    'free-shipping': 'مجاني', 'total': 'الإجمالي', 'proceed-to-checkout': 'إتمام الشراء',
    'checkout-title': 'إتمام الطلب', 'shipping-info': 'معلومات الشحن', 'name': 'الاسم الكامل',
    'phone': 'رقم الهاتف', 'address': 'العنوان بالتفصيل', 'city': 'المدينة',
    'notes': 'ملاحظات (اختياري)', 'payment-method': 'طريقة الدفع', 'cod': 'الدفع عند الاستلام',
    'cod-desc': 'ادفع كاش لما الطلب يوصلك لحد باب البيت', 'place-order': 'تأكيد الطلب',
    'order-success': 'تم تأكيد طلبك بنجاح!', 'order-success-desc': 'هنتواصل معاك قريباً لتأكيد التوصيل.',
    'order-id': 'رقم الطلب', 'back-to-home': 'العودة للرئيسية',
    'login-title': '🔑 تسجيل الدخول', 'login-desc': 'أدخل بياناتك للوصول إلى حسابك.',
    'email-label': 'البريد الإلكتروني', 'email-placeholder': 'example@email.com',
    'password-label': 'كلمة المرور', 'password-placeholder': '••••••••', 'login-button': 'دخول',
    'signup-link': 'ليس لديك حساب؟ أنشئ واحداً الآن', 'login-loading': 'جاري تسجيل الدخول...',
    'login-success': 'تم تسجيل الدخول بنجاح!',
    'signup-title': '✨ إنشاء حساب جديد', 'signup-desc': 'انضم لمجتمع الأنمي وابدأ رحلتك.',
    'name-label': 'الاسم', 'name-placeholder': 'أدخل اسمك', 'signup-button': 'إنشاء الحساب',
    'login-link': 'لديك حساب بالفعل؟ تسجيل الدخول',
    'signup-success': 'تم إنشاء الحساب بنجاح!', 'signup-loading': 'جاري إنشاء الحساب...',
    'fill-all-fields': 'يرجى ملء جميع الحقول', 'generic-error': 'حدث خطأ غير متوقع',
    'profile-title': 'حسابي', 'orders-title': 'طلباتي', 'no-orders': 'لا توجد طلبات بعد',
    'logout': 'تسجيل الخروج', 'order-pending': 'قيد التجهيز',
    'order-shipped': 'في الطريق', 'order-delivered': 'تم التوصيل', 'order-cancelled': 'ملغي',
    'wishlist-title': 'المفضلة', 'wishlist-empty': 'قائمة المفضلة فاضية',
    'move-to-cart': 'نقل للسلة', 'remove': 'حذف',
    'search-placeholder': 'ابحث عن منتجات أنمي...', 'all-categories': 'كل التصنيفات',
    'filter-category': 'التصنيف', 'filter-price': 'السعر', 'filter-rating': 'التقييم',
    'sort-popular': 'الأكثر شعبية', 'sort-price-low': 'السعر: الأقل',
    'sort-price-high': 'السعر: الأعلى', 'sort-newest': 'الأحدث', 'results': 'نتيجة',
    'product-description': 'وصف المنتج', 'product-reviews': 'التقييمات', 'related-products': 'منتجات مشابهة',
    'size': 'المقاس', 'quantity': 'الكمية', 'currency': 'ج.م',
    'offer-ends': 'ينتهي العرض خلال', 'days': 'يوم', 'hours': 'ساعة',
    'minutes': 'دقيقة', 'seconds': 'ثانية', 'off': 'خصم',
    'filter-btn': 'الفلاتر', 'from': 'من', 'to': 'إلى', 'apply': 'تطبيق', 'up': 'وأعلى',
    'stock': 'متوفر', 'sold': 'مباع', 'write-review': 'اكتب تقييمك', 'your-rating': 'تقييمك',
    'your-comment': 'تعليقك', 'submit-review': 'إرسال التقييم', 'review-added': 'تم إضافة تقييمك!',
    'whatsapp-contact': 'تواصل معنا واتساب', 'out-of-stock': 'غير متوفر',
    'admin-login': 'تسجيل دخول المدير', 'admin-dashboard': 'لوحة التحكم',
    'admin-products': 'إدارة المنتجات', 'add-product': 'إضافة منتج', 'delete-product': 'حذف',
    'total-products': 'إجمالي المنتجات', 'total-sold': 'إجمالي المبيعات',
    'total-revenue': 'إجمالي الإيرادات', 'total-orders': 'إجمالي الطلبات',
    'product-name-ar': 'اسم المنتج (عربي)', 'product-name-en': 'اسم المنتج (إنجليزي)',
    'product-desc-ar': 'الوصف (عربي)', 'product-desc-en': 'الوصف (إنجليزي)',
    'product-price': 'السعر', 'product-old-price': 'السعر القديم', 'product-category': 'التصنيف',
    'product-stock': 'المخزون', 'product-image': 'رابط الصورة', 'product-sizes': 'المقاسات',
    'product-badge': 'الشارة', 'save': 'حفظ',
    'hero-main-title': '🚀 أضخم متجر لمنتجات ومجسمات الأنمي',
    'hero-subtitle': 'شحن سريع لجميع المحافظات • دفع عند الاستلام • خامات عالية الجودة',
    'sidebar-categories': '📁 التصنيفات', 'cat-all': '🔥 الكل',
    'cat-swords': '⚔️ سيوف', 'cat-figures': '🗿 مجسمات', 'cat-posters': '🖼️ بوسترات',
    'cat-clothing': '👕 ملابس', 'cat-accessories': '💎 إكسسوارات', 'cat-manga': '📚 مانجا',
    'all-products': '🔥 جميع المنتجات المتاحة',
    'nav-swords': '⚔️ السيوف', 'nav-figures': '🗿 المجسمات', 'nav-manga': '📚 المانجا',
    'search-results': '🔍 نتائج البحث عن'
  },
  en: {
    'nav-home': 'Home', 'nav-products': 'Products', 'nav-login': 'Login',
    'nav-signup': 'Sign Up', 'nav-cart': 'Cart', 'nav-wishlist': 'Wishlist', 'nav-profile': 'Profile',
    'hero-badge': '🌸 Anime Adventure from Japan', 'hero-title': 'World of Anime at Your Fingertips',
    'hero-desc': 'Discover the best anime-inspired products: swords, figures, clothing, posters, manga and more.',
    'browse-products': 'Browse Products', 'create-account': 'Create Account',
    'categories-title': 'Shop by Category', 'bestsellers-title': 'Best Sellers',
    'new-arrivals-title': 'New Arrivals', 'offers-title': 'Special Offers',
    'view-all': 'View All', 'add-to-cart': 'Add to Cart', 'add-to-wishlist': 'Add to Wishlist',
    'buy-now': 'Buy Now', 'added-to-cart': 'Added to cart!',
    'removed-from-cart': 'Removed from cart', 'added-to-wishlist': 'Added to wishlist!',
    'removed-from-wishlist': 'Removed from wishlist', 'cart-title': 'Shopping Cart',
    'cart-empty': 'Your cart is empty!', 'cart-empty-desc': 'Start shopping and discover our products',
    'continue-shopping': 'Continue Shopping', 'subtotal': 'Subtotal', 'shipping': 'Shipping',
    'free-shipping': 'Free', 'total': 'Total', 'proceed-to-checkout': 'Proceed to Checkout',
    'checkout-title': 'Checkout', 'shipping-info': 'Shipping Information', 'name': 'Full Name',
    'phone': 'Phone Number', 'address': 'Detailed Address', 'city': 'City',
    'notes': 'Notes (optional)', 'payment-method': 'Payment Method', 'cod': 'Cash on Delivery',
    'cod-desc': 'Pay cash when your order arrives at your doorstep', 'place-order': 'Place Order',
    'order-success': 'Your order has been placed!', 'order-success-desc': 'We will contact you soon.',
    'order-id': 'Order ID', 'back-to-home': 'Back to Home',
    'login-title': '🔑 Login', 'login-desc': 'Enter your details to access your account.',
    'email-label': 'Email', 'email-placeholder': 'example@email.com',
    'password-label': 'Password', 'password-placeholder': '••••••••', 'login-button': 'Login',
    'signup-link': "Don't have an account? Create one now", 'login-loading': 'Logging in...',
    'login-success': 'Login successful!',
    'signup-title': '✨ Create New Account', 'signup-desc': 'Join the anime community.',
    'name-label': 'Name', 'name-placeholder': 'Enter your name', 'signup-button': 'Create Account',
    'login-link': 'Already have an account? Login',
    'signup-success': 'Account created successfully!', 'signup-loading': 'Creating account...',
    'fill-all-fields': 'Please fill in all fields', 'generic-error': 'An unexpected error occurred',
    'profile-title': 'My Account', 'orders-title': 'My Orders', 'no-orders': 'No orders yet',
    'logout': 'Logout', 'order-pending': 'Processing',
    'order-shipped': 'On the way', 'order-delivered': 'Delivered', 'order-cancelled': 'Cancelled',
    'wishlist-title': 'Wishlist', 'wishlist-empty': 'Your wishlist is empty',
    'move-to-cart': 'Move to Cart', 'remove': 'Remove',
    'search-placeholder': 'Search anime products...', 'all-categories': 'All Categories',
    'filter-category': 'Category', 'filter-price': 'Price', 'filter-rating': 'Rating',
    'sort-popular': 'Most Popular', 'sort-price-low': 'Price: Low',
    'sort-price-high': 'Price: High', 'sort-newest': 'Newest', 'results': 'results',
    'product-description': 'Description', 'product-reviews': 'Reviews', 'related-products': 'Related Products',
    'size': 'Size', 'quantity': 'Quantity', 'currency': 'EGP',
    'offer-ends': 'Offer ends in', 'days': 'Days', 'hours': 'Hours',
    'minutes': 'Min', 'seconds': 'Sec', 'off': 'OFF',
    'filter-btn': 'Filters', 'from': 'From', 'to': 'To', 'apply': 'Apply', 'up': '& up',
    'stock': 'In Stock', 'sold': 'Sold', 'write-review': 'Write a Review', 'your-rating': 'Your Rating',
    'your-comment': 'Your Comment', 'submit-review': 'Submit Review', 'review-added': 'Review added!',
    'whatsapp-contact': 'Contact us on WhatsApp', 'out-of-stock': 'Out of Stock',
    'admin-login': 'Admin Login', 'admin-dashboard': 'Dashboard',
    'admin-products': 'Manage Products', 'add-product': 'Add Product', 'delete-product': 'Delete',
    'total-products': 'Total Products', 'total-sold': 'Total Sold',
    'total-revenue': 'Total Revenue', 'total-orders': 'Total Orders',
    'product-name-ar': 'Product Name (AR)', 'product-name-en': 'Product Name (EN)',
    'product-desc-ar': 'Description (AR)', 'product-desc-en': 'Description (EN)',
    'product-price': 'Price', 'product-old-price': 'Old Price', 'product-category': 'Category',
    'product-stock': 'Stock', 'product-image': 'Image URL', 'product-sizes': 'Sizes',
    'product-badge': 'Badge', 'save': 'Save',
    'hero-main-title': '🚀 The Biggest Anime Store',
    'hero-subtitle': 'Fast shipping nationwide • Cash on delivery • Premium quality',
    'sidebar-categories': '📁 Categories', 'cat-all': '🔥 All',
    'cat-swords': '⚔️ Swords', 'cat-figures': '🗿 Figures', 'cat-posters': '🖼️ Posters',
    'cat-clothing': '👕 Clothing', 'cat-accessories': '💎 Accessories', 'cat-manga': '📚 Manga',
    'all-products': '🔥 All Products',
    'nav-swords': '⚔️ Swords', 'nav-figures': '🗿 Figures', 'nav-manga': '📚 Manga',
    'search-results': '🔍 Search results for'
  }
};

let currentLang = localStorage.getItem('anime-lang') || 'ar';
function t(key) { return (translations[currentLang] && translations[currentLang][key]) || key; }

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('anime-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang]?.[key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang]?.[key]) el.placeholder = translations[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  ['renderProducts','renderCart','renderWishlist','renderProductDetail','renderAdminDashboard','renderCheckout']
    .forEach(fn => { if (typeof window[fn] === 'function') window[fn](); });
  updateCartCount();
}

// ==============================
// HELPERS
// ==============================
function getStars(r) {
  const f = Math.floor(r), h = r % 1 >= 0.5 ? 1 : 0, e = 5 - f - h;
  return '★'.repeat(f) + (h ? '½' : '') + '☆'.repeat(e);
}
function formatPrice(p) { return p.toLocaleString() + ' ' + t('currency'); }
function getProductById(id) {
  let p = PRODUCTS.find(p => p.id === parseInt(id));
  if (!p) {
    // Check localStorage for admin-added products
    try {
      const saved = JSON.parse(localStorage.getItem('anime-products') || '[]');
      p = saved.find(p => p.id === parseInt(id));
    } catch {}
  }
  return p;
}
function getUrlParam(n) { return new URLSearchParams(window.location.search).get(n); }

// ==============================
// TOAST
// ==============================
function showToast(msg) {
  let c = document.querySelector('.toast-container');
  if (!c) { c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); }
  const el = document.createElement('div');
  el.className = 'toast'; el.textContent = msg;
  c.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

// ==============================
// CART
// ==============================
function getCart() { try { return JSON.parse(localStorage.getItem('anime-cart')) || []; } catch { return []; } }
function saveCart(c) { localStorage.setItem('anime-cart', JSON.stringify(c)); updateCartCount(); }
function addToCart(id, qty = 1, size = '') {
  const cart = getCart();
  const ex = cart.find(i => i.id === id && i.size === size);
  if (ex) ex.quantity += qty; else cart.push({ id, quantity: qty, size });
  saveCart(cart); showToast(t('added-to-cart'));
}
function removeFromCart(id, size = '') {
  saveCart(getCart().filter(i => !(i.id === id && i.size === size)));
}
function updateCartQuantity(id, qty, size = '') {
  const cart = getCart();
  const item = cart.find(i => i.id === id && i.size === size);
  if (item) { item.quantity = Math.max(1, qty); saveCart(cart); }
}
function getCartTotal() {
  return getCart().reduce((s, i) => { const p = PRODUCTS.find(x => x.id === i.id); return s + (p ? p.price * i.quantity : 0); }, 0);
}
function getCartCount() { return getCart().reduce((s, i) => s + i.quantity, 0); }
function updateCartCount() {
  document.querySelectorAll('.cart-count').forEach(el => {
    const c = getCartCount(); el.textContent = c; el.classList.toggle('empty', c === 0);
  });
}

// ==============================
// WISHLIST
// ==============================
function getWishlist() { try { return JSON.parse(localStorage.getItem('anime-wishlist')) || []; } catch { return []; } }
function saveWishlist(w) { localStorage.setItem('anime-wishlist', JSON.stringify(w)); }
function toggleWishlist(id) {
  let w = getWishlist();
  const i = w.indexOf(id);
  if (i > -1) { w.splice(i, 1); showToast(t('removed-from-wishlist')); }
  else { w.push(id); showToast(t('added-to-wishlist')); }
  saveWishlist(w);
  document.querySelectorAll(`.product-wishlist-btn[data-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('active', w.includes(id));
    btn.textContent = w.includes(id) ? '❤️' : '🤍';
  });
}
function isWishlisted(id) { return getWishlist().includes(id); }

// ==============================
// REVIEWS (localStorage fallback)
// ==============================
function getReviewsLocal(productId) {
  try { return JSON.parse(localStorage.getItem('anime-reviews-' + productId)) || []; } catch { return []; }
}
function saveReviewLocal(productId, review) {
  const reviews = getReviewsLocal(productId);
  reviews.unshift(review);
  localStorage.setItem('anime-reviews-' + productId, JSON.stringify(reviews));
  showToast(t('review-added'));
}

// ==============================
// PRODUCT CARD
// ==============================
function renderProductCard(product) {
  const w = isWishlisted(product.id);
  const badgeText = product.badge === 'bestseller' ? (currentLang==='ar'?'الأكثر مبيعاً':'Best Seller')
    : product.badge === 'new' ? (currentLang==='ar'?'جديد':'New')
    : product.badge === 'sale' ? (currentLang==='ar'?'عرض':'Sale') : '';
  return `<article class="product-card">
    <div class="product-card-img">
      ${product.badge ? `<span class="product-badge ${product.badge}">${badgeText}</span>` : ''}
      <button class="product-wishlist-btn ${w?'active':''}" data-id="${product.id}" aria-label="${t('add-to-wishlist')}"
        onclick="event.preventDefault();toggleWishlist(${product.id})">${w?'❤️':'🤍'}</button>
      <a href="product-detail.html?id=${product.id}">
        <img src="${product.images[0]}" alt="${product.title[currentLang]}" loading="lazy" width="400" height="200">
      </a>
    </div>
    <div class="product-card-body">
      <a href="product-detail.html?id=${product.id}"><h3 class="product-card-title">${product.title[currentLang]}</h3></a>
      <div class="product-rating"><span class="stars" aria-label="${product.rating} stars">${getStars(product.rating)}</span><span class="rating-count">(${product.reviews})</span></div>
      <div class="product-price-row">
        <span class="product-price">${formatPrice(product.price)}</span>
        ${product.oldPrice ? `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>` : ''}
      </div>
      <span style="font-size:0.78rem;color:${product.stock>0?'var(--neon-green)':'var(--neon-red)'}">${product.stock > 0 ? t('stock') + ': ' + product.stock : t('out-of-stock')}</span>
    </div>
    <div class="product-card-actions">
      <button class="btn sm btn-primary" ${product.stock<=0?'disabled':''} onclick="addToCart(${product.id})">🛒 ${t('add-to-cart')}</button>
    </div>
  </article>`;
}

// ==============================
// COUNTDOWN
// ==============================
function initCountdown() {
  const el = document.getElementById('countdown-timer');
  if (!el) return;
  const end = new Date(); end.setDate(end.getDate() + 3); end.setHours(23,59,59);
  function up() {
    const d = end - new Date(); if (d <= 0) return;
    el.innerHTML = `<div class="countdown-item"><span class="number">${Math.floor(d/864e5)}</span><span class="label">${t('days')}</span></div>
      <div class="countdown-item"><span class="number">${Math.floor(d%864e5/36e5)}</span><span class="label">${t('hours')}</span></div>
      <div class="countdown-item"><span class="number">${Math.floor(d%36e5/6e4)}</span><span class="label">${t('minutes')}</span></div>
      <div class="countdown-item"><span class="number">${Math.floor(d%6e4/1e3)}</span><span class="label">${t('seconds')}</span></div>`;
  }
  up(); setInterval(up, 1000);
}

// ==============================
// LOADER
// ==============================
function showLoader() {
  let l = document.getElementById('app-loader');
  if (!l) { l = document.createElement('div'); l.className='loader'; l.id='app-loader'; l.innerHTML='<div class="loader-core"></div>'; document.body.appendChild(l); }
  l.classList.remove('hidden');
  setTimeout(() => l.classList.add('hidden'), 600);
  setTimeout(() => { if (l.parentNode) l.remove(); }, 1000);
}

// ==============================
// SEARCH
// ==============================
function initSearch() {
  const inp = document.getElementById('search-input');
  const sel = document.getElementById('search-category');
  if (!inp) return;
  const go = () => { let u = 'products.html?search=' + encodeURIComponent(inp.value.trim()); if (sel?.value) u += '&category=' + sel.value; window.location.href = u; };
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); go(); } });
  document.getElementById('search-btn')?.addEventListener('click', go);
}

// ==============================
// AUTH
// ==============================
function initLoginForm() {
  const form = document.getElementById('loginForm'); if (!form) return;
  const msg = document.getElementById('message');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('email')?.value || '';
    const pw = document.getElementById('password')?.value || '';
    if (msg) { msg.style.color = 'var(--neon-yellow)'; msg.textContent = t('login-loading'); }
    if (!supabaseClient) { localStorage.setItem('anime-user', JSON.stringify({email,name:'User'})); window.location.href='index.html'; return; }
    try {
      const {data,error} = await supabaseClient.auth.signInWithPassword({email,password:pw});
      if (error) { if(msg){msg.style.color='var(--neon-red)';msg.textContent=error.message;} }
      else { localStorage.setItem('anime-user',JSON.stringify({email,name:data.user.user_metadata?.full_name||'User',id:data.user.id})); if(msg){msg.style.color='var(--neon-green)';msg.textContent=t('login-success');} setTimeout(()=>window.location.href='index.html',800); }
    } catch { if(msg){msg.style.color='var(--neon-red)';msg.textContent=t('generic-error');} }
  });
}

function initSignupForm() {
  const form = document.getElementById('signupForm'); if (!form) return;
  const msg = document.getElementById('message');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name = document.getElementById('signup-name')?.value||'';
    const email = document.getElementById('signup-email')?.value||'';
    const pw = document.getElementById('signup-password')?.value||'';
    if (!name||!email||!pw) { if(msg){msg.style.color='var(--neon-red)';msg.textContent=t('fill-all-fields');} return; }
    if (msg) { msg.style.color = 'var(--neon-yellow)'; msg.textContent=t('signup-loading'); }
    if (!supabaseClient) { localStorage.setItem('anime-user',JSON.stringify({email,name})); if(msg){msg.style.color='var(--neon-green)';msg.textContent=t('signup-success');} setTimeout(()=>window.location.href='index.html',800); return; }
    try {
      const {data,error} = await supabaseClient.auth.signUp({email,password:pw,options:{data:{full_name:name}}});
      if (error) { if(msg){msg.style.color='var(--neon-red)';msg.textContent=error.message;} }
      else { localStorage.setItem('anime-user',JSON.stringify({email,name,id:data.user?.id})); if(msg){msg.style.color='var(--neon-green)';msg.textContent=t('signup-success');} setTimeout(()=>window.location.href='index.html',800); }
    } catch { if(msg){msg.style.color='var(--neon-red)';msg.textContent=t('generic-error');} }
  });
}

// ==============================
// CHECKOUT (form handler is now inside renderCheckout in checkout.html)
// ==============================
function initCheckout() {
  // No-op: checkout.html's renderCheckout() attaches the submit handler
  // This avoids double-attachment issues on language switch
}

// ==============================
// PROFILE
// ==============================
function initProfile() {
  const c = document.getElementById('profile-content'); if (!c) return;
  const user = JSON.parse(localStorage.getItem('anime-user')||'null');
  const orders = JSON.parse(localStorage.getItem('anime-orders')||'[]');
  if (!user) { c.innerHTML = `<p style="text-align:center;color:var(--text-dim);padding:32px;">${t('login-desc')}</p><div style="text-align:center;"><a href="login.html" class="btn">${t('login-button')}</a></div>`; return; }
  const sm = {pending:'order-pending',shipped:'order-shipped',delivered:'order-delivered',cancelled:'order-cancelled'};
  const userOrders = orders.filter(o => o.userId === user.id || o.email === user.email);
  const allOrders = orders; // show all orders for the logged-in user

  c.innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar">${(user.name||'U')[0].toUpperCase()}</div>
      <div class="profile-info"><h2>${user.name||'User'}</h2><p>${user.email||''}</p></div>
    </div>

    <!-- Edit Profile -->
    <div class="admin-form" style="margin-bottom:20px;">
      <h3>${currentLang==='ar'?'تعديل البيانات الشخصية':'Edit Profile'}</h3>
      <div class="form-row">
        <div class="form-group"><label>${t('name-label')}</label><input type="text" id="profile-name" value="${user.name||''}"></div>
        <div class="form-group"><label>${t('email-label')}</label><input type="email" id="profile-email" value="${user.email||''}"></div>
      </div>
      <div class="form-group"><label>${currentLang==='ar'?'كلمة مرور جديدة (اختياري)':'New Password (optional)'}</label><input type="password" id="profile-new-pw" placeholder="${currentLang==='ar'?'اتركها فارغة إذا لا تريد تغييرها':'Leave empty to keep current'}"></div>
      <button class="btn btn-primary" onclick="saveProfile()">✓ ${t('save')}</button>
    </div>

    <!-- Orders -->
    <div class="section-title"><h2>${t('orders-title')}</h2></div>
    ${allOrders.length===0?`<p style="color:var(--text-dim);text-align:center;padding:24px;">${t('no-orders')}</p>`
    :`<div class="orders-list">${allOrders.map(o=>`<div class="order-card"><div class="order-header"><span class="order-id">${o.id||'ORD'}</span><span class="order-status ${o.status||'pending'}">${t(sm[o.status]||'order-pending')}</span></div><div class="order-items-list">${(o.items||[]).map(i=>`${i.title?.[currentLang]||i.title||'Product'} × ${i.quantity}`).join('<br>')}</div><div class="order-total"><span>${t('total')}</span><span style="color:var(--neon-yellow);">${formatPrice(o.total)}</span></div></div>`).join('')}</div>`}

    <!-- Actions -->
    <div style="margin-top:20px;display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-danger" onclick="logout()">${t('logout')}</button>
      <button class="btn outline" onclick="deleteAccount()">${currentLang==='ar'?'حذف الحساب':'Delete Account'}</button>
    </div>`;
}

function saveProfile() {
  const user = JSON.parse(localStorage.getItem('anime-user')||'null');
  if (!user) return;
  const name = document.getElementById('profile-name')?.value?.trim();
  const email = document.getElementById('profile-email')?.value?.trim();
  const newPw = document.getElementById('profile-new-pw')?.value;
  if (name) user.name = name;
  if (email) user.email = email;
  localStorage.setItem('anime-user', JSON.stringify(user));
  if (newPw && newPw.length >= 4 && supabaseClient) {
    supabaseClient.auth.updateUser({ password: newPw }).then(() => {
      showToast(currentLang==='ar'?'تم حفظ التعديلات':'Profile updated');
      initProfile();
    }).catch(() => {
      showToast(currentLang==='ar'?'خطأ في تغيير كلمة المرور':'Password change failed');
    });
  } else {
    showToast(currentLang==='ar'?'تم حفظ التعديلات':'Profile updated');
    initProfile();
  }
}

function deleteAccount() {
  if (!confirm(currentLang==='ar'?'هل أنت متأكد من حذف حسابك؟ سيتم حذف كل بياناتك.':'Are you sure you want to delete your account? All your data will be removed.')) return;
  localStorage.removeItem('anime-user');
  if (supabaseClient) supabaseClient.auth.signOut();
  window.location.href = 'index.html';
}

function logout() { localStorage.removeItem('anime-user'); if(supabaseClient) supabaseClient.auth.signOut(); window.location.href='index.html'; }

// ==============================
// ADMIN
// ==============================
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123';

function initAdminLogin() {
  const form = document.getElementById('adminLoginForm'); if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const u = document.getElementById('admin-user')?.value;
    const p = document.getElementById('admin-pass')?.value;
    const storedPass = localStorage.getItem('anime-admin-pass');
    const validPass = storedPass || ADMIN_PASS;
    if (u === ADMIN_USER && p === validPass) {
      localStorage.setItem('anime-admin', 'true');
      window.location.href = 'admin.html';
    } else {
      const msg = document.getElementById('admin-msg');
      if (msg) { msg.textContent = currentLang === 'ar' ? 'بيانات غير صحيحة' : 'Invalid credentials'; msg.style.color = 'var(--neon-red)'; }
    }
  });
}

function initAdminDashboard() {
  const c = document.getElementById('admin-content'); if (!c) return;
  if (localStorage.getItem('anime-admin') !== 'true') { window.location.href = 'admin-login.html'; return; }
  renderAdminDashboard();
}

function getOrders() { try { return JSON.parse(localStorage.getItem('anime-orders') || '[]'); } catch { return []; } }
function saveOrders(orders) { localStorage.setItem('anime-orders', JSON.stringify(orders)); }

function renderAdminDashboard() {
  const c = document.getElementById('admin-content'); if (!c) return;
  const totalProducts = PRODUCTS.length;
  const totalSold = PRODUCTS.reduce((s, p) => s + p.sold, 0);
  const totalRevenue = PRODUCTS.reduce((s, p) => s + p.price * p.sold, 0);
  const orders = getOrders();
  const totalOrders = orders.length;

  // Tab buttons
  const tabAr = { products: 'المنتجات', orders: 'الطلبات', settings: 'الإعدادات' };
  const tabEn = { products: 'Products', orders: 'Orders', settings: 'Settings' };
  const tabLabels = currentLang === 'ar' ? tabAr : tabEn;

  c.innerHTML = `
    <div class="admin-stats">
      <div class="stat-card"><div class="stat-value">${totalProducts}</div><div class="stat-label">${t('total-products')}</div></div>
      <div class="stat-card"><div class="stat-value">${totalSold}</div><div class="stat-label">${t('total-sold')}</div></div>
      <div class="stat-card"><div class="stat-value">${formatPrice(totalRevenue)}</div><div class="stat-label">${t('total-revenue')}</div></div>
      <div class="stat-card"><div class="stat-value">${totalOrders}</div><div class="stat-label">${t('total-orders')}</div></div>
    </div>
    <div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap;">
      <button class="btn sm" onclick="showAdminTab('products')">${tabLabels.products}</button>
      <button class="btn sm secondary" onclick="showAdminTab('orders')">${tabLabels.orders}</button>
      <button class="btn sm outline" onclick="showAdminTab('settings')">${tabLabels.settings}</button>
    </div>
    <div id="admin-tab-content"></div>`;
  showAdminTab('products');
}

function showAdminTab(tab) {
  const tc = document.getElementById('admin-tab-content'); if (!tc) return;
  if (tab === 'products') renderAdminProducts(tc);
  else if (tab === 'orders') renderAdminOrders(tc);
  else if (tab === 'settings') renderAdminSettings(tc);
}

function renderAdminProducts(tc) {
  tc.innerHTML = `
    <div class="admin-form" id="add-product-form">
      <h3>${t('add-product')}</h3>
      <div class="form-row">
        <div class="form-group"><label>${t('product-name-ar')}</label><input type="text" id="ap-name-ar"></div>
        <div class="form-group"><label>${t('product-name-en')}</label><input type="text" id="ap-name-en"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>${t('product-desc-ar')}</label><textarea id="ap-desc-ar"></textarea></div>
        <div class="form-group"><label>${t('product-desc-en')}</label><textarea id="ap-desc-en"></textarea></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>${t('product-price')}</label><input type="number" id="ap-price"></div>
        <div class="form-group"><label>${t('product-old-price')}</label><input type="number" id="ap-old-price"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>${t('product-category')}</label>
          <select id="ap-category"><option value="swords">سيوف</option><option value="figures">مجسمات</option><option value="posters">بوسترات</option><option value="tshirts">ملابس</option><option value="accessories">إكسسوارات</option><option value="manga">مانجا</option></select>
        </div>
        <div class="form-group"><label>${t('product-stock')}</label><input type="number" id="ap-stock" value="10"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>${t('product-image')}</label><input type="text" id="ap-image" placeholder="https://..."></div>
        <div class="form-group"><label>${t('product-sizes')}</label><input type="text" id="ap-sizes" placeholder="S, M, L"></div>
      </div>
      <div class="form-group"><label>${t('product-badge')}</label>
        <select id="ap-badge"><option value="">بدون</option><option value="bestseller">الأكثر مبيعاً</option><option value="new">جديد</option><option value="sale">عرض</option></select>
      </div>
      <button class="btn btn-primary" onclick="adminAddProduct()">✓ ${t('add-product')}</button>
    </div>
    <div class="section-title"><h3>${t('admin-products')}</h3></div>
    <div style="overflow-x:auto;">
    <table class="admin-table">
      <thead><tr><th>#</th><th>${currentLang==='ar'?'المنتج':'Product'}</th><th>${t('product-category')}</th><th>${t('product-price')}</th><th>${t('product-stock')}</th><th>${t('sold')}</th><th></th><th></th></tr></thead>
      <tbody>${PRODUCTS.map(p => `<tr>
        <td>${p.id}</td><td>${p.title[currentLang]}</td><td>${p.category}</td><td>${formatPrice(p.price)}</td><td>${p.stock}</td><td>${p.sold}</td>
        <td><button class="btn sm outline" onclick="adminEditProduct(${p.id})">${currentLang==='ar'?'تعديل':'Edit'}</button></td>
        <td><button class="btn sm btn-danger" onclick="adminDeleteProduct(${p.id})">${t('delete-product')}</button></td>
      </tr>`).join('')}</tbody>
    </table></div>`;
}

function renderAdminOrders(tc) {
  const orders = getOrders();
  const statusAr = { pending: 'قيد التجهيز', shipped: 'في الطريق', delivered: 'تم التوصيل', cancelled: 'ملغي' };
  const statusEn = { pending: 'Processing', shipped: 'On the way', delivered: 'Delivered', cancelled: 'Cancelled' };
  const labels = currentLang === 'ar' ? statusAr : statusEn;
  if (orders.length === 0) {
    tc.innerHTML = `<p style="text-align:center;color:var(--text-dim);padding:24px;">${currentLang==='ar'?'لا توجد طلبات بعد':'No orders yet'}</p>`;
    return;
  }
  tc.innerHTML = `
    <div style="overflow-x:auto;">
    <table class="admin-table">
      <thead><tr><th>${t('order-id')}</th><th>${t('name')}</th><th>${t('phone')}</th><th>${t('city')}</th><th>${t('total')}</th><th>${currentLang==='ar'?'الحالة':'Status'}</th><th>${currentLang==='ar'?'تاريخ':'Date'}</th><th></th></tr></thead>
      <tbody>${orders.map((o, idx) => `<tr>
        <td>${o.id || 'ORD'}</td>
        <td>${o.name || '-'}</td>
        <td>${o.phone || '-'}</td>
        <td>${o.city || '-'}</td>
        <td style="color:var(--neon-yellow);font-weight:800;">${formatPrice(o.total)}</td>
        <td><select onchange="updateOrderStatus(${idx}, this.value)" style="padding:4px 8px;border-radius:8px;background:var(--bg-input);border:1px solid var(--border);color:#fff;font-family:inherit;">
          <option value="pending" ${o.status==='pending'?'selected':''}>${labels.pending}</option>
          <option value="shipped" ${o.status==='shipped'?'selected':''}>${labels.shipped}</option>
          <option value="delivered" ${o.status==='delivered'?'selected':''}>${labels.delivered}</option>
          <option value="cancelled" ${o.status==='cancelled'?'selected':''}>${labels.cancelled || 'ملغي'}</option>
        </select></td>
        <td style="font-size:0.78rem;">${o.created_at ? new Date(o.created_at).toLocaleDateString() : '-'}</td>
        <td><button class="btn sm btn-danger" onclick="adminDeleteOrder(${idx})">🗑️</button></td>
      </tr>`).join('')}</tbody>
    </table></div>
    <div style="margin-top:12px;">
      <h3 style="margin-bottom:8px;">${currentLang==='ar'?'تفاصيل الطلبات':'Order Details'}</h3>
      ${orders.map(o => `<div class="order-card" style="margin-bottom:8px;">
        <div class="order-header"><span class="order-id">${o.id}</span><span class="order-status ${o.status||'pending'}">${labels[o.status]||o.status}</span></div>
        <div class="order-items-list">${(o.items||[]).map(i => `${i.title?.[currentLang]||i.title||i.id} × ${i.quantity} = ${formatPrice((i.price||0)*(i.quantity||1))}`).join('<br>')}</div>
        <div class="order-total"><span>${t('total')}</span><span style="color:var(--neon-yellow);">${formatPrice(o.total)}</span></div>
      </div>`).join('')}
    </div>`;
}

function renderAdminSettings(tc) {
  const user = JSON.parse(localStorage.getItem('anime-user') || 'null');
  tc.innerHTML = `
    <div class="admin-form">
      <h3>${currentLang==='ar'?'إعدادات المدير':'Admin Settings'}</h3>
      <p style="color:var(--text-dim);margin-bottom:12px;">${currentLang==='ar'?'تغيير كلمة مرور المدير':'Change admin password'}</p>
      <div class="form-group"><label>${currentLang==='ar'?'كلمة المرور الحالية':'Current Password'}</label><input type="password" id="admin-old-pw"></div>
      <div class="form-group"><label>${currentLang==='ar'?'كلمة المرور جديدة':'New Password'}</label><input type="password" id="admin-new-pw"></div>
      <button class="btn btn-primary" onclick="changeAdminPassword()">${t('save')}</button>
    </div>
    <div class="admin-form" style="margin-top:16px;">
      <h3>${currentLang==='ar'?'إدارة البيانات':'Data Management'}</h3>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn sm outline" onclick="exportData()">${currentLang==='ar'?'تصدير البيانات':'Export Data'}</button>
        <button class="btn sm btn-danger" onclick="clearAllOrders()">${currentLang==='ar'?'حذف كل الطلبات':'Clear All Orders'}</button>
        <button class="btn sm btn-danger" onclick="resetProducts()">${currentLang==='ar'?'إعادة تعيين المنتجات':'Reset Products'}</button>
      </div>
    </div>`;
}

function updateOrderStatus(idx, status) {
  const orders = getOrders();
  if (orders[idx]) { orders[idx].status = status; saveOrders(orders); showToast(currentLang==='ar'?'تم تحديث الحالة':'Status updated'); }
}

function adminDeleteOrder(idx) {
  const orders = getOrders();
  if (idx >= 0 && idx < orders.length) { orders.splice(idx, 1); saveOrders(orders); showToast(currentLang==='ar'?'تم حذف الطلب':'Order deleted'); showAdminTab('orders'); }
}

function changeAdminPassword() {
  const oldPw = document.getElementById('admin-old-pw')?.value;
  const newPw = document.getElementById('admin-new-pw')?.value;
  if (oldPw !== ADMIN_PASS) { showToast(currentLang==='ar'?'كلمة المرور الحالية غير صحيحة':'Wrong current password'); return; }
  if (!newPw || newPw.length < 4) { showToast(currentLang==='ar'?'كلمة المرور قصيرة جداً':'Password too short'); return; }
  localStorage.setItem('anime-admin-pass', newPw);
  showToast(currentLang==='ar'?'تم تغيير كلمة المرور':'Password changed');
}

function exportData() {
  const data = { products: PRODUCTS, orders: getOrders() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'anime-store-data.json'; a.click();
  URL.revokeObjectURL(url);
}

function clearAllOrders() {
  if (!confirm(currentLang==='ar'?'هل أنت متأكد من حذف كل الطلبات؟':'Are you sure you want to delete all orders?')) return;
  saveOrders([]); showToast(currentLang==='ar'?'تم حذف كل الطلبات':'All orders deleted'); showAdminTab('orders');
}

function resetProducts() {
  if (!confirm(currentLang==='ar'?'هل أنت متأكد؟ سيتم إعادة المنتجات للوضع الأصلي':'Are you sure? Products will be reset to default.')) return;
  localStorage.removeItem('anime-products'); window.location.reload();
}

function adminEditProduct(id) {
  const p = getProductById(id); if (!p) return;
  const tc = document.getElementById('admin-tab-content'); if (!tc) return;
  tc.innerHTML = `
    <div class="admin-form">
      <h3>${currentLang==='ar'?'تعديل منتج #':'Edit Product #'}${p.id}</h3>
      <div class="form-row">
        <div class="form-group"><label>${t('product-name-ar')}</label><input type="text" id="ep-name-ar" value="${p.title.ar||''}"></div>
        <div class="form-group"><label>${t('product-name-en')}</label><input type="text" id="ep-name-en" value="${p.title.en||''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>${t('product-desc-ar')}</label><textarea id="ep-desc-ar">${p.description?.ar||''}</textarea></div>
        <div class="form-group"><label>${t('product-desc-en')}</label><textarea id="ep-desc-en">${p.description?.en||''}</textarea></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>${t('product-price')}</label><input type="number" id="ep-price" value="${p.price}"></div>
        <div class="form-group"><label>${t('product-old-price')}</label><input type="number" id="ep-old-price" value="${p.oldPrice||''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>${t('product-category')}</label>
          <select id="ep-category">
            ${CATEGORIES.map(c => `<option value="${c.id}" ${c.id===p.category?'selected':''}>${c.name[currentLang]}</option>`).join('')}
          </select>
        </div>
        <div class="form-group"><label>${t('product-stock')}</label><input type="number" id="ep-stock" value="${p.stock}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>${t('product-image')}</label><input type="text" id="ep-image" value="${p.images?.[0]||''}"></div>
        <div class="form-group"><label>${t('product-sizes')}</label><input type="text" id="ep-sizes" value="${(p.sizes||[]).join(', ')}"></div>
      </div>
      <div class="form-group"><label>${t('product-badge')}</label>
        <select id="ep-badge">
          <option value="" ${!p.badge?'selected':''}>بدون</option>
          <option value="bestseller" ${p.badge==='bestseller'?'selected':''}>الأكثر مبيعاً</option>
          <option value="new" ${p.badge==='new'?'selected':''}>جديد</option>
          <option value="sale" ${p.badge==='sale'?'selected':''}>عرض</option>
        </select>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-primary" onclick="adminSaveProduct(${p.id})">✓ ${t('save')}</button>
        <button class="btn outline" onclick="showAdminTab('products')">${currentLang==='ar'?'رجوع':'Back'}</button>
      </div>
    </div>`;
}

function adminSaveProduct(id) {
  const p = PRODUCTS.find(x => x.id === id); if (!p) return;
  p.title.ar = document.getElementById('ep-name-ar')?.value?.trim() || p.title.ar;
  p.title.en = document.getElementById('ep-name-en')?.value?.trim() || p.title.en;
  p.description.ar = document.getElementById('ep-desc-ar')?.value?.trim() || p.description.ar;
  p.description.en = document.getElementById('ep-desc-en')?.value?.trim() || p.description.en;
  p.price = parseFloat(document.getElementById('ep-price')?.value) || p.price;
  p.oldPrice = parseFloat(document.getElementById('ep-old-price')?.value) || null;
  p.category = document.getElementById('ep-category')?.value || p.category;
  p.stock = parseInt(document.getElementById('ep-stock')?.value) || 0;
  p.images = [document.getElementById('ep-image')?.value || p.images[0]];
  p.sizes = (document.getElementById('ep-sizes')?.value || '').split(',').map(s => s.trim()).filter(Boolean);
  p.badge = document.getElementById('ep-badge')?.value || null;
  localStorage.setItem('anime-products', JSON.stringify(PRODUCTS));
  showToast(currentLang==='ar'?'تم حفظ التعديلات':'Changes saved');
  showAdminTab('products');
}

function adminLogout() { localStorage.removeItem('anime-admin'); window.location.href = 'admin-login.html'; }

// ==============================
// WHATSAPP
// ==============================
function addWhatsAppBtn() {
  if (document.querySelector('.whatsapp-btn')) return;
  const btn = document.createElement('a');
  btn.className = 'whatsapp-btn';
  btn.href = `https://wa.me/${WHATSAPP_NUMBER}`;
  btn.target = '_blank'; btn.rel = 'noopener noreferrer';
  btn.setAttribute('aria-label', t('whatsapp-contact'));
  btn.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  document.body.appendChild(btn);
}

// ==============================
// SAKURA PETALS ANIMATION
// ==============================
function initSakuraPetals() {
  const petals = ['🌸', '✿', '❀'];
  let count = 0;
  const maxPetals = 10;
  setInterval(() => {
    document.querySelectorAll('.sakura-petal').forEach(p => { if (parseFloat(getComputedStyle(p).opacity) < 0.05) { p.remove(); count--; } });
    if (count >= maxPetals) return;
    const petal = document.createElement('span');
    petal.className = 'sakura-petal';
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (7 + Math.random() * 5) + 's';
    petal.style.fontSize = (11 + Math.random() * 8) + 'px';
    document.body.appendChild(petal);
    count++;
    setTimeout(() => { petal.remove(); count = Math.max(0, count - 1); }, 13000);
  }, 2500);
}
document.addEventListener('DOMContentLoaded', () => {
  // Language switcher click handlers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });

  // Load persisted products
  const saved = localStorage.getItem('anime-products');
  if (saved) { try { const parsed = JSON.parse(saved); if (parsed.length) { PRODUCTS.length = 0; PRODUCTS.push(...parsed); } } catch {} }

  setLanguage(currentLang);
  initSearch();
  initLoginForm();
  initSignupForm();
  initCheckout();
  initProfile();
  initAdminLogin();
  initAdminDashboard();
  initCountdown();
  updateCartCount();
  addWhatsAppBtn();
  initSakuraPetals();
});
