async function loadHeader() {
    const placeholder = document.getElementById("header-placeholder");
    if (!placeholder) return;

    try {
        const res = await fetch("header.html");
        const html = await res.text();

        placeholder.outerHTML = html;

        // 🔥 IMPORTANTE: inicializar cosas del header aquí
        initCartDropdown();
        renderCart();
        updateFavoritesCount();

    } catch (err) {
        console.error("Error cargando header:", err);
    }

    // MENU
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("open");
        });
    }

    // SCROLL HEADER
    let lastScroll = 0;
    const header = document.querySelector(".site-header");

    if (header) {
        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll && currentScroll > 50) {
                header.classList.add("hidden");
            } else {
                header.classList.remove("hidden");
            }

            lastScroll = currentScroll;
        });
    }

    document
    .getElementById("save-order-image")
    ?.addEventListener("click", generateOrderImage);

    const mobileCategories = document.querySelectorAll(".mobile-category");

    mobileCategories.forEach(cat => {
        cat.addEventListener("click", () => {
            const submenu = cat.nextElementSibling;
            if (!submenu) return;

            document.querySelectorAll(".mobile-submenu").forEach(sm => {
                if (sm !== submenu) sm.classList.remove("open");
            });

            submenu.classList.toggle("open");
        });
    });

    const messages = [
        "ENTREGAS PRESENCIALES EN VALDIVIA Y LOS LAGOS",
        "ENVÍOS A TODO CHILE CONTINENTAL",
        "PAGOS POR TRANSFERENCIA O EFECTIVO",
    ];

    const text = document.getElementById("banner-text");

    let index = 0;

    function changeBanner(){

        text.classList.remove("show");
        text.classList.add("slide-out");

        setTimeout(() => {

            index = (index + 1) % messages.length;

            text.textContent = messages[index];

            // Entra desde abajo
            text.classList.remove("slide-out");
            text.classList.add("slide-in");

            setTimeout(()=>{
                text.classList.remove("slide-in");
                text.classList.add("show");
            },50);

        },500);
    }

    text.classList.add("show");

    setInterval(changeBanner,4000);
}


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

function addToCart(productId, variantKey=null, qty=1){
    const product = PRODUCTS[productId];
    const data = variantKey ? product.variants[variantKey] : product;

    const existing = CART.find(item => item.id===productId && item.variant===variantKey);

    const currentQty = existing ? existing.qty : 0;
    const newQty = currentQty + qty;

    if (newQty > data.stock) {
        showToast(
"No hay suficiente stock",
"error"
);
        return;
    }

    if(existing) existing.qty = newQty;
    else CART.push({
        id:productId,
        variant:variantKey,
        qty,
        price:data.price,
        title:product.title,
        image:data.images[0]
    });

    showToast("Añadido al carrito");
    saveCart();
    renderCart();
}
function updateCartItem(index, delta){
    const item = CART[index];
    if (!item) return;

    const product = PRODUCTS[item.id];
    const data = item.variant 
        ? product.variants[item.variant] 
        : product;

    const newQty = item.qty + delta;

    // ❌ No permitir menos de 1
    if (newQty <= 0){
        removeCartItem(index);
        return;
    }

    // ❌ No permitir más que el stock
    if (newQty > data.stock){
        return; // o muestra mensaje si quieres
    }

    item.qty = newQty;

    saveCart();

    // 🔁 IMPORTANTE: refrescar TODO
    renderCart();
    renderCartPage?.();
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

if(index >= 0){
    FAVORITES.splice(index,1);

    showToast(
      "♡ Quitado de favoritos"
    );

}else{
    FAVORITES.push(productId);

    showToast(
      "♥ Agregado a favoritos"
    );
}

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

        ${product.brand ? `
        <p class="product-brand">
        ${product.brand}
        </p>
        ` : ""}
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
        if(images.length <= 1){
            slider.querySelector('.next')?.style.setProperty(
                'display',
                'none'
            );

            slider.querySelector('.prev')?.style.setProperty(
                'display',
                'none'
            );

            return;
        }
        
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

            // Inyectar descripción dinámicamente si existe
            let descEl = lightbox.querySelector(".lightbox-description");
            if (!descEl) {
                descEl = document.createElement("p");
                descEl.className = "lightbox-description";
                descEl.style.fontSize = "0.95rem";
                descEl.style.color = "#ffffff";
                descEl.style.fontStyle = "italic";
                descEl.style.marginTop = "10px";
                descEl.style.lineHeight = "1.4";
                descEl.style.fontFamily = "inherit";
                descEl.style.textAlign = "center";
                descEl.style.padding = "0 10px";
                lightboxTitle.parentNode.appendChild(descEl);
            }
            descEl.textContent = product.description || "";
            descEl.style.display = product.description ? "block" : "none";

            const lbPrev = lightbox.querySelector(".prev");
            const lbNext = lightbox.querySelector(".next");

            if(lbImages.length <=1){
                lbPrev.style.display="none";
                lbNext.style.display="none";
            }else{
                lbPrev.style.display="";
                lbNext.style.display="";
            }
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
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

async function initSupabase() {
    try {
        // Cargar dinámicamente Supabase SDK y archivo de configuración local
        await loadScript("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2");
        await loadScript("supabase-config.js");

        if (window.supabaseClient) {
            const { data, error } = await window.supabaseClient.from("products").select("*");
            if (error) throw error;

            if (data && data.length > 0) {
                // Limpiar llaves estáticas anteriores de PRODUCTS
                for (let key in PRODUCTS) {
                    if (PRODUCTS.hasOwnProperty(key)) {
                        delete PRODUCTS[key];
                    }
                }
                // Repoblar con información en vivo desde Supabase
                data.forEach(row => {
                    PRODUCTS[row.id] = {
                        title: row.title,
                        category: row.category,
                        subcategory: row.subcategory,
                        brand: row.brand,
                        price: Number(row.price),
                        images: row.images,
                        stock: Number(row.stock),
                        variants: row.variants,
                        description: row.description
                    };
                });
                console.log("Catálogo en vivo cargado desde Supabase:", data.length, "productos.");
            }
        }
    } catch (e) {
        console.warn("No se pudo cargar Supabase (usando respaldo local estático products.js):", e);
    }
}

async function renderHomepageDynamic() {
    if (!window.supabaseClient) return;

    try {
        const { data: sections, error } = await window.supabaseClient
            .from("homepage_sections")
            .select("*")
            .order("position", { ascending: true });

        if (error) throw error;

        if (sections && sections.length > 0) {
            const mainEl = document.querySelector("main");
            if (!mainEl) return;

            mainEl.innerHTML = "";

            sections.forEach(section => {
                if (section.type === "slider") {
                    const sec = document.createElement("section");
                    sec.className = "product-slider-section";
                    sec.innerHTML = `
                        <h2>${section.title || "Destacados"}</h2>
                        <div class="product-slider-container">
                            <button class="product-slider-btn prev">&#10094;</button>
                            <div class="product-slider-track" id="${section.id}">
                                ${section.product_ids ? section.product_ids.map(pid => `<div class="product-card" data-id="${pid}"></div>`).join("") : ""}
                            </div>
                            <button class="product-slider-btn next">&#10095;</button>
                        </div>
                    `;
                    mainEl.appendChild(sec);
                } else if (section.type === "grid") {
                    if (section.title) {
                        const h2 = document.createElement("h2");
                        h2.style.marginTop = "40px";
                        h2.style.marginBottom = "20px";
                        h2.style.color = "var(--color-border)";
                        h2.style.textAlign = "center";
                        h2.textContent = section.title;
                        mainEl.appendChild(h2);
                    }
                    const grid = document.createElement("div");
                    grid.className = "product-grid";
                    grid.innerHTML = section.product_ids ? section.product_ids.map(pid => `<div class="product-card" data-id="${pid}"></div>`).join("") : "";
                    mainEl.appendChild(grid);
                } else if (section.type === "banner" && section.content) {
                    const banner = document.createElement("div");
                    banner.className = "homepage-banner-section";
                    banner.style.width = "100%";
                    banner.style.maxWidth = "1200px";
                    banner.style.margin = "30px auto";
                    banner.style.borderRadius = "15px";
                    banner.style.overflow = "hidden";
                    banner.style.border = "2px solid #6f74ff30";
                    banner.style.boxShadow = "0 8px 20px rgba(70,72,187,0.08)";
                    
                    let bannerHtml = `<img src="${section.content.image_url}" style="width: 100%; height: auto; max-height: 280px; object-fit: cover; display: block;">`;
                    if (section.content.link_url) {
                        bannerHtml = `<a href="${section.content.link_url}">${bannerHtml}</a>`;
                    }
                    banner.innerHTML = bannerHtml;
                    mainEl.appendChild(banner);
                }
            });
        }
    } catch (e) {
        console.warn("Fallo al cargar diseño dinámico desde Supabase, usando respaldo estático:", e);
    }
}

document.addEventListener("DOMContentLoaded", async () => {

    await initSupabase();

    const isHomepage = !document.body.dataset.category && 
                       !document.body.classList.contains("cart-page") && 
                       !document.body.classList.contains("favorites-page");

    if (isHomepage) {
        await renderHomepageDynamic();
    }

    loadHeader();
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
        
        if (isHomepage) {
            initHomepageSliders();
        }
    }

    if(document.body.dataset.category){
        renderCategory();
    }

    updateFavoritesCount();
});

function renderCategory(){
    const container = document.querySelector(".product-grid");
    if(!container) return;

    const pageCategory = document.body.dataset.category;
    const pageSubcategory = document.body.dataset.subcategory;

    container.innerHTML = "";

    Object.entries(PRODUCTS).forEach(([id, product]) => {

        // Debe coincidir categoría principal sí o sí
        if(product.category !== pageCategory) return;

        // Si la página tiene subcategoría,
        // el producto también debe coincidir
        if(
            pageSubcategory &&
            product.subcategory !== pageSubcategory
        ) return;

        const card = document.createElement("div");
        card.classList.add("product-card");
        card.dataset.id = id;

        renderProductCard(card, product);
        container.appendChild(card);
    });

    initSliders();
}

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


async function generateOrderImage() {
  if (!CART.length) {
    showToast("No se puede generar imagen: Carrito vacío", "error");
    return;
  }

  const ahora = new Date();
  const fechaFormateada = ahora.toLocaleString('es-ES', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: false
  }).replace(',', ' -');

  const orderImage = document.getElementById("order-image");

  // 1. MODIFICADO: Estructura más sólida (sin absolute para evitar saltos en móvil)
  let html = `
    <div id="render-container" style="background:white; padding:40px; width:460px; box-sizing:border-box; border-radius:20px;">
      <div style="display:flex; justify-content:flex-end; font-size:14px; color:#4648bb; transform:translate(27px, -27px)">
        ${fechaFormateada}
      </div>
      <div style="text-align:center; margin-bottom:30px;">
        <img src="logoticket.png" style="width:260px; height:auto; display:inline-block;"> 
      </div>
      <h3 style="color:#4648bb; margin-top:0;">Resumen de pedido</h3>
      <hr style="border:0; border-top:1px solid #eee;">
  `;

  CART.forEach(item => {
    html += `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:15px 0; gap:15px; border-bottom:1px solid #f9f9f9;">
        <div style="display:flex; align-items:center; gap:15px;">
          <img src="${item.image}" style="object-fit:cover; border-radius:12px; width:60px; height:60px; min-width:60px;">
          <div>
            <div style="color:#84BAF8; font-weight:bolder; font-size:16px;">
              ${item.title}${item.variant ? ` (${item.variant})` : ""}
            </div>
            <div style="font-size:13px; opacity:.7;">Cantidad: ${item.qty}</div>
          </div>
        </div>
        <div style="color:green; font-weight:bold; white-space:nowrap;">
          $${(item.price * item.qty).toLocaleString("es-CL")}
        </div>
      </div>
    `;
  });

  html += `
    <h2 style="text-align:center; color:#84BAF8; margin-top:25px;">
      Total: $${CART.reduce((total, item) => total + (item.price * item.qty), 0).toLocaleString("es-CL")}
    </h2>
    </div>
  `;

  orderImage.innerHTML = html;

  // 2. MODIFICADO: Esperar a que las imágenes carguen con un pequeño margen extra para móvil
  const images = orderImage.querySelectorAll("img");
  await Promise.all([...images].map(img => {
    return new Promise(resolve => {
      if (img.complete) resolve();
      else {
        img.onload = resolve;
        img.onerror = resolve; // Evitar que se bloquee si una imagen falla
      }
    });
  }));

  // Pequeña pausa extra para asegurar el renderizado del motor móvil
  await new Promise(r => setTimeout(r, 300));

  // 3. MODIFICADO: Configuración de html2canvas optimizada
  const canvas = await html2canvas(orderImage, {
    scale: 2,
    backgroundColor: "#ffffff",
    useCORS: true, // Crucial para imágenes de productos si vienen de otro dominio
    allowTaint: true,
    logging: false,
    width: 460, // Forzamos el ancho exacto
  });

  try {
    const image = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = image;
    a.download = "Pedido Musamí.cl.png";
    a.click();
    showToast("Pedido descargado");
  } catch (err) {
    console.error("Error generando imagen:", err);
    showToast("Error al generar imagen", "error");
  }
}



//TOAST

function showToast(
message,
type="success",
duration=2000
){

let container =
document.getElementById(
"toast-container"
);

// si no existe lo crea solo
if(!container){

container =
document.createElement("div");

container.id="toast-container";

document.body.appendChild(
container
);

}

const toast =
document.createElement("div");

toast.className=`toast ${type}`;
toast.textContent=message;

container.appendChild(toast);


// fuerza reflow
toast.offsetHeight;

toast.classList.add("show");


setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{
toast.remove();
},300);

},duration);

}



function initHomepageSliders() {
    document.querySelectorAll(".product-slider-container").forEach(container => {
        const track = container.querySelector(".product-slider-track");
        const next = container.querySelector(".next");
        const prev = container.querySelector(".prev");

        if (!track || !next || !prev) return;

        const scrollAmount = 300;

        next.onclick = () => {
            track.scrollBy({ left: scrollAmount, behavior: "smooth" });
        };

        prev.onclick = () => {
            track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        };

        function updateFade() {
            const scrollLeft = track.scrollLeft;
            const maxScroll = track.scrollWidth - track.clientWidth;

            // izquierda
            if (scrollLeft > 10) {
                container.classList.add("show-left");
            } else {
                container.classList.remove("show-left");
            }

            // derecha
            if (scrollLeft < maxScroll - 10) {
                container.classList.add("show-right");
            } else {
                container.classList.remove("show-right");
            }
        }

        // ejecutar al inicio
        updateFade();

        // escuchar scroll
        track.onscroll = updateFade;

        // también cuando cambie tamaño (importante en responsive)
        window.onresize = updateFade;
    });
}

function renderSliderProducts(containerId, filterFn) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const products = PRODUCTS.filter(filterFn);

    container.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.images[0]}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
        </div>
    `).join("");
}

renderSliderProducts("slider-destacados", p => p.featured);