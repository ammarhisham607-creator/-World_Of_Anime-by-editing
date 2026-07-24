/* ==========================================================================
   World Of Anime - بيانات المنتجات + Supabase (نسخة متصلة بالكامل بقاعدة البيانات)
   ========================================================================== */

// 1. Supabase Config
const SUPABASE_URL = "https://ogfmshoffpvonsxhyzzp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nZm1zaG9mZnB2b25zeGh5enpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4MTQ4NjIsImV4cCI6MjEwMDM5MDg2Mn0.9-R20Hod0hrtSQZdAL5FLq-nx5AIPM7-BaPxQ-yJhuI";

let supabaseClient = null;
if (typeof supabase !== 'undefined') {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// 2. التصنيفات
const CATEGORIES = [
  { id: 'swords', name: { ar: '⚔️ السيوف', en: '⚔️ Swords' }, icon: '⚔️' },
  { id: 'figures', name: { ar: '🗿 المجسمات', en: '🗿 Figures' }, icon: '🗿' },
  { id: 'posters', name: { ar: '🖼️ البوسترات', en: '🖼️ Posters' }, icon: '🖼️' },
  { id: 'tshirts', name: { ar: '👕 الملابس', en: '👕 Clothing' }, icon: '👕' },
  { id: 'accessories', name: { ar: '💎 الإكسسوارات', en: '💎 Accessories' }, icon: '💎' },
  { id: 'manga', name: { ar: '📚 المانجا', en: '📚 Manga' }, icon: '📚' }
];

// 3. المنتجات - بتتحمل من Supabase عند فتح أي صفحة عبر loadProducts()
//    وده array فاضي في البداية ويتملى ديناميكياً (نفس المرجع بيفضل ثابت
//    عشان أي كود تاني عامل reference للـ PRODUCTS يفضل شغال صح).
let PRODUCTS = [];

// نسخة احتياطية تُستخدم فقط لو فشل الاتصال بقاعدة البيانات أو الجدول لسه فاضي،
// عشان الموقعميقفش تمامًا لو حصلت مشكلة في الشبكة أو الإعداد.
const FALLBACK_PRODUCTS = [
  { id: 1, title: { ar: 'سيف كاتانا زورو - One Piece', en: 'Zoro Katana Sword - One Piece' },
    description: { ar: 'سيف كاتانا replicas لزورو من ون بيس، مصنوع من الستانلس ستيل بطول 104 سم.', en: 'Replica katana sword of Zoro from One Piece, made of stainless steel, 104cm length.' },
    price: 850, oldPrice: 1100, category: 'swords', rating: 4.8, reviews: 124,
    images: ['https://images.unsplash.com/photo-1589656966895-2f33d7653819?auto=format&fit=crop&w=800&q=80'],
    sizes: ['104cm', '80cm'], badge: 'bestseller', stock: 15, sold: 87 },
  { id: 2, title: { ar: 'مجسم لوفي Gear 5 - One Piece', en: 'Luffy Gear 5 Figure - One Piece' },
    description: { ar: 'مجسم لوفي بشكل Gear 5 بتفاصيل دقيقة وخامة PVC عالية الجودة، ارتفاع 25 سم.', en: 'Luffy Gear 5 figure with precise details and high quality PVC, 25cm height.' },
    price: 650, oldPrice: null, category: 'figures', rating: 4.9, reviews: 89,
    images: ['https://images.unsplash.com/photo-1608889825103-5041190c1d9f?auto=format&fit=crop&w=800&q=80'],
    sizes: [], badge: 'bestseller', stock: 8, sold: 156 }
  // (باقي المنتجات موجودة فعليًا في قاعدة البيانات بعد تشغيل ملفات الـ SQL،
  //  الاحتياطي هنا مختصر عمدًا لأنه للطوارئ فقط)
];

function mapDbProduct(row) {
  return {
    id: row.id,
    title: { ar: row.title_ar, en: row.title_en },
    description: { ar: row.description_ar || '', en: row.description_en || '' },
    price: Number(row.price) || 0,
    oldPrice: row.old_price != null ? Number(row.old_price) : null,
    category: row.category,
    rating: Number(row.rating) || 0,
    reviews: Number(row.reviews_count) || 0,
    images: Array.isArray(row.images) ? row.images : (row.images ? JSON.parse(row.images) : []),
    sizes: Array.isArray(row.sizes) ? row.sizes : (row.sizes ? JSON.parse(row.sizes) : []),
    badge: row.badge || null,
    stock: Number(row.stock) || 0,
    sold: Number(row.sold) || 0
  };
}

// تحميل المنتجات من قاعدة البيانات (لازم تتنادى وتتستنى قبل أي عرض للمنتجات)
async function loadProducts() {
  if (!supabaseClient) {
    PRODUCTS.length = 0;
    PRODUCTS.push(...FALLBACK_PRODUCTS);
    return PRODUCTS;
  }
  try {
    const { data, error } = await supabaseClient
      .from('products')
      .select('*')
      .order('id', { ascending: true });
    if (error || !data || data.length === 0) {
      console.error('loadProducts error or empty:', error?.message);
      PRODUCTS.length = 0;
      PRODUCTS.push(...FALLBACK_PRODUCTS);
    } else {
      PRODUCTS.length = 0;
      PRODUCTS.push(...data.map(mapDbProduct));
    }
  } catch (err) {
    console.error('loadProducts exception:', err);
    PRODUCTS.length = 0;
    PRODUCTS.push(...FALLBACK_PRODUCTS);
  }
  return PRODUCTS;
}

// إضافة منتج جديد (أدمن بس - محمي كمان من جهة السيرفر عبر RLS)
async function dbAddProduct(p) {
  if (!supabaseClient) return null;
  try {
    const { data, error } = await supabaseClient.from('products').insert([{
      title_ar: p.title.ar, title_en: p.title.en,
      description_ar: p.description.ar, description_en: p.description.en,
      price: p.price, old_price: p.oldPrice,
      category: p.category, rating: 4.5, reviews_count: 0,
      images: p.images, sizes: p.sizes, badge: p.badge,
      stock: p.stock, sold: 0
    }]).select();
    if (error) { console.error('dbAddProduct error:', error.message); return null; }
    return data ? mapDbProduct(data[0]) : null;
  } catch (err) { console.error('dbAddProduct exception:', err); return null; }
}

// حذف منتج (أدمن بس)
async function dbDeleteProduct(id) {
  if (!supabaseClient) return false;
  try {
    const { error } = await supabaseClient.from('products').delete().eq('id', id);
    if (error) { console.error('dbDeleteProduct error:', error.message); return false; }
    return true;
  } catch (err) { console.error('dbDeleteProduct exception:', err); return false; }
}

// تحديث المخزون والمبيعات بعد إتمام طلب
async function dbDecrementStock(id, qty) {
  if (!supabaseClient) return;
  try {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;
    const newStock = Math.max(0, product.stock - qty);
    const newSold = product.sold + qty;
    const { error } = await supabaseClient.from('products')
      .update({ stock: newStock, sold: newSold }).eq('id', id);
    if (error) console.error('dbDecrementStock error:', error.message);
    else { product.stock = newStock; product.sold = newSold; }
  } catch (err) { console.error('dbDecrementStock exception:', err); }
}

// ==============================
// 4. المستخدم الحالي والصلاحيات
// ==============================

// بيرجع بيانات المستخدم المسجل دخوله دلوقتي (من الجلسة الحقيقية في Supabase) أو null
async function getCurrentUser() {
  if (!supabaseClient) return null;
  try {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session || !session.user) return null;
    const { data: profile, error } = await supabaseClient
      .from('profiles').select('*').eq('id', session.user.id).single();
    if (error) {
      // لو لسه مفيش صف بروفايل (نادر) نرجع بيانات أساسية بس
      return { id: session.user.id, email: session.user.email, name: session.user.email, phone: '', role: 'user' };
    }
    return { id: profile.id, email: profile.email, name: profile.name, phone: profile.phone || '', role: profile.role };
  } catch (err) {
    console.error('getCurrentUser exception:', err);
    return null;
  }
}

async function isAdminUser() {
  const user = await getCurrentUser();
  return !!user && user.role === 'admin';
}

// اليوزر يعدل بياناته هو بس (اسم / تليفون)
async function updateMyProfile({ name, phone }) {
  if (!supabaseClient) return false;
  try {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) return false;
    const { error } = await supabaseClient.from('profiles')
      .update({ name, phone }).eq('id', session.user.id);
    if (error) { console.error('updateMyProfile error:', error.message); return false; }
    return true;
  } catch (err) { console.error('updateMyProfile exception:', err); return false; }
}

async function logoutUser() {
  if (supabaseClient) { try { await supabaseClient.auth.signOut(); } catch (err) { console.error(err); } }
}

// ==============================
// 5. دوال التقييمات (Supabase)
// ==============================
async function getReviews(productId) {
  if (!supabaseClient) {
    try { return JSON.parse(localStorage.getItem('anime-reviews-' + productId)) || []; } catch { return []; }
  }
  try {
    const { data, error } = await supabaseClient
      .from('reviews').select('*')
      .eq('product_id', productId)
      .order('created_at', { ascending: false });
    if (error) { console.error('Reviews error:', error.message); return []; }
    return data || [];
  } catch (err) { console.error('Reviews error:', err); return []; }
}

async function saveReview(productId, review) {
  const user = await getCurrentUser();
  if (!user) return false; // لازم تسجيل دخول عشان تكتب تقييم (نفس شرط الـ RLS)

  if (!supabaseClient) return true;
  try {
    const { error } = await supabaseClient.from('reviews').insert([{
      product_id: productId, author: review.author,
      rating: parseInt(review.rating), text: review.text,
      user_id: user.id
    }]);
    if (error) { console.error('Save review error:', error.message); return false; }
    return true;
  } catch (err) { console.error('Save review error:', err); return false; }
}

// ==============================
// 6. دوال الطلبات (Supabase)
// ==============================
async function saveOrder(orderData) {
  const user = await getCurrentUser();
  orderData.id = orderData.id || 'ORD-' + Date.now();
  orderData.user_id = user ? user.id : null;

  if (!supabaseClient) {
    const orders = JSON.parse(localStorage.getItem('anime-orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('anime-orders', JSON.stringify(orders));
    return orderData;
  }
  try {
    const { data, error } = await supabaseClient.from('orders').insert([orderData]).select();
    if (error) { console.error('Save order error:', error.message); return orderData; }
    return data ? data[0] : orderData;
  } catch (err) { console.error('Save order error:', err); return orderData; }
}

// طلبات المستخدم الحالي بس (لصفحة "حسابي")
async function getMyOrders() {
  const user = await getCurrentUser();
  if (!user || !supabaseClient) return [];
  try {
    const { data, error } = await supabaseClient
      .from('orders').select('*').eq('user_id', user.id)
      .order('created_at', { ascending: false });
    if (error) { console.error('getMyOrders error:', error.message); return []; }
    return data || [];
  } catch (err) { console.error('getMyOrders exception:', err); return []; }
}

// كل الطلبات (أدمن بس - ومحمي كمان بـ RLS من جهة السيرفر)
async function getAllOrders() {
  if (!supabaseClient) return [];
  try {
    const { data, error } = await supabaseClient
      .from('orders').select('*').order('created_at', { ascending: false });
    if (error) { console.error('getAllOrders error:', error.message); return []; }
    return data || [];
  } catch (err) { console.error('getAllOrders exception:', err); return []; }
}

// الأدمن بيغيّر حالة الطلب
async function updateOrderStatus(orderId, status) {
  if (!supabaseClient) return false;
  try {
    const { error } = await supabaseClient.from('orders').update({ status }).eq('id', orderId);
    if (error) { console.error('updateOrderStatus error:', error.message); return false; }
    return true;
  } catch (err) { console.error('updateOrderStatus exception:', err); return false; }
}