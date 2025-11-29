// Products Database
const products = [
    { id: 1, name: "Radiant Glow Foundation", category: "makeup", price: 1299, emoji: "💄" },
    { id: 2, name: "Velvet Matte Lipstick", category: "makeup", price: 599, emoji: "💋" },
    { id: 3, name: "Shimmer Eyeshadow Palette", category: "makeup", price: 1599, emoji: "✨" },
    { id: 4, name: "Long Lasting Mascara", category: "makeup", price: 799, emoji: "👁️" },
    { id: 5, name: "Blush & Highlighter Duo", category: "makeup", price: 899, emoji: "🌸" },
    { id: 6, name: "HD Compact Powder", category: "makeup", price: 699, emoji: "💫" },
    
    { id: 7, name: "Vitamin C Serum", category: "skincare", price: 1899, emoji: "🧴" },
    { id: 8, name: "Hydrating Face Moisturizer", category: "skincare", price: 1299, emoji: "💧" },
    { id: 9, name: "Anti-Aging Night Cream", category: "skincare", price: 2499, emoji: "🌙" },
    { id: 10, name: "Gentle Face Cleanser", category: "skincare", price: 599, emoji: "🧼" },
    { id: 11, name: "Brightening Face Mask", category: "skincare", price: 799, emoji: "😊" },
    { id: 12, name: "Sunscreen SPF 50", category: "skincare", price: 899, emoji: "☀️" },
    
    { id: 13, name: "Argan Oil Hair Serum", category: "haircare", price: 1199, emoji: "💇" },
    { id: 14, name: "Keratin Shampoo", category: "haircare", price: 699, emoji: "🧴" },
    { id: 15, name: "Deep Conditioning Mask", category: "haircare", price: 899, emoji: "💆" },
    { id: 16, name: "Anti-Frizz Conditioner", category: "haircare", price: 649, emoji: "✨" },
    { id: 17, name: "Hair Growth Oil", category: "haircare", price: 1499, emoji: "🌿" },
    { id: 18, name: "Heat Protection Spray", category: "haircare", price: 799, emoji: "🔥" },
    
    { id: 19, name: "Floral Eau de Parfum", category: "fragrance", price: 2999, emoji: "🌺" },
    { id: 20, name: "Fresh Body Mist", category: "fragrance", price: 799, emoji: "💐" },
    { id: 21, name: "Luxury Perfume Set", category: "fragrance", price: 4999, emoji: "🎁" },
    { id: 22, name: "Vanilla Body Spray", category: "fragrance", price: 599, emoji: "🍦" },
    { id: 23, name: "Rose Scented Lotion", category: "fragrance", price: 899, emoji: "🌹" },
    { id: 24, name: "Citrus Refreshing Mist", category: "fragrance", price: 699, emoji: "🍊" }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    // Page-specific initialization
    if (window.location.pathname.includes('products.html')) {
        initProductsPage();
    } else if (window.location.pathname.includes('cart.html')) {
        initCartPage();
    } else if (window.location.pathname.includes('payment.html')) {
        initPaymentPage();
    } else if (window.location.pathname.includes('thankyou.html')) {
        initThankYouPage();
    }
});

// ============================================
// PRODUCTS PAGE
