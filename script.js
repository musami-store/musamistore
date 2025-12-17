/* =========================
   BASE DE DATOS DE PRODUCTOS
   ========================= */


/* =========================
   ESTADOS
   ========================= */
let CART = [];
let FAVORITES = [];

/* =========================
   LOCALSTORAGE
   ========================= */
function saveCart() { localStorage.setItem("cart", JSON.stringify(CART)); }
function loadCart() { 
    const saved = localStorage.getItem("cart"); 
    if (saved) CART = JSON.parse(saved);
    renderCart();
}

function saveFavorites() { localStorage.setItem("favorites", JSON.stringify(FAVORITES)); }
function loadFavorites() {
    const saved = localStorage.getItem("favorites");
    if (saved) FAVORITES = JSON.parse(saved);
    updateFavoritesCount();
}

/* =========================
   CARRITO
   ========================= */
function renderCart() {
    const dropdown = document.querySelector('.cart-dropdown');
    const count = document.querySelector('.cart-count');
    if (!dropdown || !count) return;

    dropdown.innerHTML = "";
    let total = 0, items = 0;

    CART.forEach((item, index) => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    items += item.qty;

    dropdown.innerHTML += `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-info">
                <strong>${item.title}</strong>
                ${item.variant ? `<small>${item.variant}</small>` : ""}
                <p class="cart-item-price">$${item.price.toLocaleString("es-CL")}</p>
                <div class="cart-item-controls">
                    <button data-action="minus" data-index="${index}">−</button>
                    <span>${item.qty}</span>
                    <button data-action="plus" data-index="${index}">+</button>
                </div>
            </div>
            <button class="cart-remove" data-index="${index}">✕</button>
        </div>
    `;
});

    dropdown.innerHTML += `
        <div class="cart-total">Total: $${total.toLocaleString("es-CL")}</div>
        <div class="cart-actions"><button>Ver carrito</button></div>
    `;

    count.textContent = items;

    // --- Aquí agregamos el listener al botón "Ver carrito" ---
    const verCarritoBtn = dropdown.querySelector(".cart-actions button");
    if (verCarritoBtn) {
        verCarritoBtn.addEventListener("click", () => {
            window.location.href = "cart.html";
        });
    }
}


function initCartDropdown() {
    const cartBtn = document.getElementById("cart-btn");
    const cartDropdown = document.querySelector(".cart-dropdown");
    if(!cartBtn || !cartDropdown) return;

    cartBtn.addEventListener("click", e => {
        e.preventDefault();
        cartDropdown.classList.toggle("open");
    });
}
initCartDropdown();

function addToCart(productId, variantKey=null, qty=1){
    const product = PRODUCTS[productId];
    const data = variantKey ? product.variants[variantKey] : product;

    const existing = CART.find(item => item.id===productId && item.variant===variantKey);
    if(existing) existing.qty += qty;
    else CART.push({id:productId, variant:variantKey, qty, price:data.price, title:product.title, image:data.images[0]});

    saveCart();
    renderCart();
}
function updateCartItem(index, delta){
    CART[index].qty += delta;
    if(CART[index].qty<=0) CART.splice(index,1);
    saveCart();
    renderCart();
}
function removeCartItem(index){
    CART.splice(index,1);
    saveCart();
    renderCart();
}


function renderCartList() {
    const listContainer = document.getElementById("cart-list");
    const summaryContainer = document.getElementById("cart-summary");
    if (!listContainer || !summaryContainer) return;

    listContainer.innerHTML = "";
    summaryContainer.innerHTML = "";

    let total = 0;

    CART.forEach((item, index) => {
        total += item.price * item.qty;

        const itemEl = document.createElement("div");
        itemEl.className = "cart-list-item";
        itemEl.innerHTML = `
            <img src="${item.image}" alt="">
            <div class="cart-info">
                <strong>${item.title}</strong>
                ${item.variant ? `<small>${item.variant}</small>` : ""}
                <div class="cart-controls">
                    <button data-action="minus" data-index="${index}">−</button>
                    <span>${item.qty}</span>
                    <button data-action="plus" data-index="${index}">+</button>
                </div>
                <div class="cart-price">$${(item.price * item.qty).toLocaleString("es-CL")}</div>
                <button class="cart-remove" data-index="${index}">✕</button>
            </div>
        `;
        listContainer.appendChild(itemEl);
    });

    summaryContainer.innerHTML = `
        <h2>Total: $${total.toLocaleString("es-CL")}</h2>
        <button id="checkout-btn">Finalizar Compra</button>
    `;
}
function renderCartPage() {
    const container = document.getElementById("cart-container");
    if (!container) return;

    container.innerHTML = "";

    let total = 0;

    CART.forEach((item, index) => {
        total += item.price * item.qty;

        const div = document.createElement("div");
        div.className = "cart-item-list"; // clase nueva para lista horizontal

        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-info-controls-page">
                <strong>${item.title}</strong>
                ${item.variant ? `<small>${item.variant}</small>` : ""}
                <p class="cart-item-price-page">$${item.price.toLocaleString("es-CL")}</p>
                <div class="cart-item-controls-page">
                    <button data-action="minus" data-index="${index}">−</button>
                    <span>${item.qty}</span>
                    <button data-action="plus" data-index="${index}">+</button>
                    <button class="cart-remove" data-index="${index}">✕</button>
                </div>
            </div>
        `;

        container.appendChild(div);
    });

    // total al final
    const totalDiv = document.createElement("div");
    totalDiv.className = "cart-total";
    totalDiv.textContent = `Total: $${total.toLocaleString("es-CL")}`;
    container.appendChild(totalDiv);
}


/* =========================
   FAVORITOS
   ========================= */
function updateFavoritesCount() {
    const count = document.querySelector('.favorites-count');
    if(count) count.textContent = FAVORITES.length;

    document.querySelectorAll('.product-card').forEach(card => {
        const id = card.dataset.id;
        const icon = card.querySelector(".add-to-favorites i");
        if (!icon) return;

        icon.classList.toggle("active", FAVORITES.includes(id));
    });
}

function toggleFavorite(productId) {
    const index = FAVORITES.indexOf(productId);
    if(index >= 0) FAVORITES.splice(index,1);
    else FAVORITES.push(productId);

    saveFavorites();
    updateFavoritesCount();
}

/* =========================
   PRODUCT CARD
   ========================= */
function renderProductCard(card, product){
    let activeVariant = product.variants ? Object.keys(product.variants)[0] : null;
    const data = activeVariant ? product.variants[activeVariant] : product;

    card.innerHTML = `
        <div class="product-slider">
            <div class="slider-track">
                ${data.images.map(img=>`<img src="${img}">`).join("")}
            </div>
            <button class="slider-btn prev"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="slider-btn next"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
        <h3 class="product-title">${product.title}</h3>
        ${product.variants ? `
            <select class="variant-selector">
                ${Object.entries(product.variants).map(([k,v])=>`<option value="${k}">${v.label}</option>`).join("")}
            </select>` : ""}
        <p class="product-price">$${data.price.toLocaleString("es-CL")}</p>
        <div class="product-actions">
            <div class="quantity-selector">
                <button class="qty-minus">-</button>
                <span class="qty-value">1</span>
                <button class="qty-plus">+</button>
            </div>
            <button class="add-to-cart"><i class="fa-solid fa-cart-plus"></i></button>
            <button class="add-to-favorites"><i class="fa-solid fa-heart ${FAVORITES.includes(card.dataset.id)?"active":""}"></i></button>
        </div>
    `;

    if(product.variants) initVariantSelector(card, product);
    initLightboxTrigger(card);

    // Inicializa botones de cantidad
    const qtyMinus = card.querySelector(".qty-minus");
    const qtyPlus = card.querySelector(".qty-plus");
    const qtyValue = card.querySelector(".qty-value");

    qtyMinus?.addEventListener("click", () => {
        let val = parseInt(qtyValue.textContent);
        if(val > 1) qtyValue.textContent = val - 1;
    });
    qtyPlus?.addEventListener("click", () => {
        let val = parseInt(qtyValue.textContent);
        qtyValue.textContent = val + 1;
    });

}

function initVariantSelector(card, product){
    const select = card.querySelector(".variant-selector");
    const priceEl = card.querySelector(".product-price");
    const track = card.querySelector(".slider-track");

    if(!select) return;

    select.addEventListener("change", ()=>{
        const variant = product.variants[select.value];
        priceEl.textContent = `$${variant.price.toLocaleString("es-CL")}`;
        track.innerHTML = variant.images.map(img=>`<img src="${img}">`).join("");
        track.style.transform="translateX(0)";
        initLightboxTrigger(card);
    });
}

/* =========================
   SLIDERS
   ========================= */
function initSliders(){
    document.querySelectorAll('.product-slider').forEach(slider=>{
        const track = slider.querySelector('.slider-track');
        const images = track.children;
        let index=0;

        const update = ()=> track.style.transform=`translateX(-${index*100}%)`;

        slider.querySelector('.next')?.addEventListener('click',()=>{index=(index+1)%images.length; update();});
        slider.querySelector('.prev')?.addEventListener('click',()=>{index=(index-1+images.length)%images.length; update();});

        let startX=0;
        slider.addEventListener('touchstart',e=>startX=e.touches[0].clientX);
        slider.addEventListener('touchend',e=>{
            const diff = startX-e.changedTouches[0].clientX;
            if(Math.abs(diff)>50){ index = diff>0?(index+1)%images.length:(index-1+images.length)%images.length; update(); }
        });
    });
}

/* =========================
   LIGHTBOX
   ========================= */
const lightbox = document.getElementById("lightbox");
const lightboxTrack = lightbox?.querySelector(".lightbox-track");
const lightboxTitle = lightbox?.querySelector(".lightbox-title");
const lightboxClose = lightbox?.querySelector("#lightbox-close");
let lbIndex=0, lbImages=[];

function initLightboxTrigger(card){
    card.querySelectorAll(".product-slider img").forEach(img=>{
        img.addEventListener("click", e=>{
            const id = card.dataset.id;
            const product = PRODUCTS[id];
            const variantSelect = card.querySelector(".variant-selector");
            const variant = variantSelect ? variantSelect.value : null;
            const data = variant ? product.variants[variant] : product;

            lbImages = data.images;
            lbIndex = Array.from(data.images).indexOf(e.target.getAttribute("src"));
            if(!lightboxTrack) return;
            lightboxTrack.innerHTML = lbImages.map(src=>`<img src="${src}">`).join("");
            lightboxTitle.textContent = product.title;
            lightbox.classList.add("open");
        });
    });
}

lightbox?.querySelector(".next")?.addEventListener("click",()=>{lbIndex=(lbIndex+1)%lbImages.length; updateLightbox();});
lightbox?.querySelector(".prev")?.addEventListener("click",()=>{lbIndex=(lbIndex-1+lbImages.length)%lbImages.length; updateLightbox();});
lightboxClose?.addEventListener("click",()=>lightbox.classList.remove("open"));
lightbox?.addEventListener("click", e=>{if(e.target===lightbox) lightbox.classList.remove("open");});

function updateLightbox(){
    if(!lightboxTrack) return;
    const sliderWidth = lightbox.querySelector(".lightbox-slider").offsetWidth;
    lightboxTrack.style.transform=`translateX(-${lbIndex*sliderWidth}px)`;
}
lightboxTrack?.addEventListener("touchstart",e=>startX=e.touches[0].clientX);
lightboxTrack?.addEventListener("touchend",e=>{
    const diff = startX-e.changedTouches[0].clientX;
    if(Math.abs(diff)>50){ lbIndex=diff>0?(lbIndex+1)%lbImages.length:(lbIndex-1+lbImages.length)%lbImages.length; updateLightbox(); }
});

/* =========================
   INICIALIZACIÓN
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
    loadCart();
    loadFavorites();

    if(document.body.classList.contains("cart-page")) {
        renderCartPage();
    } else {
        renderCart(); // para dropdown en header
    }
    const isFavoritesPage = document.body.classList.contains("favorites-page");

    if(isFavoritesPage){
        const container = document.getElementById("favorites-container");
        if(!container) return;

        FAVORITES.forEach(id=>{
            const product = PRODUCTS[id];
            if(!product) return;

            const card = document.createElement("div");
            card.classList.add("product-card");
            card.dataset.id = id;

            renderProductCard(card, product);
            container.appendChild(card);
        });

        initSliders();
        document.querySelectorAll('.product-card').forEach(card=>initLightboxTrigger(card));
    } else {
        document.querySelectorAll('.product-card').forEach(card=>{
            const id = card.dataset.id;
            const product = PRODUCTS[id];
            if(!product) return;
            renderProductCard(card, product);
        });
        initSliders();
    }

    updateFavoritesCount();
});

/* =========================
   EVENTOS GLOBALES
   ========================= */
document.addEventListener("click", e=>{
    // Carrito
    if(e.target.closest(".add-to-cart")){
        const card = e.target.closest(".product-card");
        const id = card.dataset.id;
        const variantSelect = card.querySelector(".variant-selector");
        const variant = variantSelect ? variantSelect.value : null;
        const qtyEl = card.querySelector(".qty-value");
        const qty = qtyEl ? parseInt(qtyEl.textContent) : 1;
        addToCart(id, variant, qty);
    }

    // Favoritos
    if(e.target.closest(".add-to-favorites")){
        const card = e.target.closest(".product-card");
        toggleFavorite(card.dataset.id);
    }

    // Dropdown carrito
    if(document.body.classList.contains("cart-page")) renderCartList();

});

document.addEventListener("click", e => {
    // Botones de carrito en cart.html
    if(e.target.closest("[data-action='plus']")) {
        const index = Number(e.target.closest("[data-action='plus']").dataset.index);
        updateCartItem(index, 1);
        renderCartPage();
    }

    if(e.target.closest("[data-action='minus']")) {
        const index = Number(e.target.closest("[data-action='minus']").dataset.index);
        updateCartItem(index, -1);
        renderCartPage();
    }

    if(e.target.classList.contains("cart-remove")) {
        const index = Number(e.target.dataset.index);
        removeCartItem(index);
        renderCartPage();
    }
});


const mobileCategories = document.querySelectorAll(".mobile-category");
mobileCategories.forEach(cat => {
    cat.addEventListener("click", e => {
        const submenu = cat.nextElementSibling;
        if (!submenu) return;

        // cerrar otros submenus
        document.querySelectorAll(".mobile-submenu").forEach(sm => {
            if (sm !== submenu) sm.classList.remove("open");
        });

        submenu.classList.toggle("open");
    });
});

// botón hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});
