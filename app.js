// Comanda Virtual - Versão Atualizada com 89 itens
let products = [];
let cart = [];
let discountType = 'fixed';
let discountValue = 0;
let servicePercentage = 0;
let numberOfPeople = 1;

// Elementos DOM
const mainContent = document.getElementById('mainContent');
const cartSidebar = document.getElementById('cartSidebar');
const cartToggle = document.getElementById('cartToggle');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const discountInput = document.getElementById('discountValue');
const discountTypeSelect = document.getElementById('discountType');
const serviceButtons = document.querySelectorAll('.service-btn');
const customService = document.getElementById('customService');
const peopleCount = document.getElementById('peopleCount');
const decrementPeople = document.getElementById('decrementPeople');
const incrementPeople = document.getElementById('incrementPeople');
const summarySubtotal = document.getElementById('summarySubtotal');
const totalAmount = document.getElementById('totalAmount');
const perPerson = document.getElementById('perPerson');
const finalizeBtn = document.getElementById('finalizeOrder');
const finalizeModal = document.getElementById('finalizeModal');
const finalizeDetails = document.getElementById('finalizeDetails');
const closeModal = document.getElementById('closeModal');

// --- CARDÁPIO COMPLETO (89 ITENS) ---
const initialProducts = [
    // PIZZAS SALGADAS (40)
    { id: 1, nome: '🍕 Margherita', descricao: 'Molho, mussarela, tomate e manjericão', preco: 45.90, categoria: 'pizzas' },
    { id: 2, nome: '🍕 Calabresa', descricao: 'Molho, mussarela, calabresa e cebola', preco: 49.90, categoria: 'pizzas' },
    { id: 3, nome: '🍕 Portuguesa', descricao: 'Presunto, ovos, cebola, ervilha e azeitona', preco: 54.90, categoria: 'pizzas' },
    { id: 4, nome: '🍕 Frango com Catupiry', descricao: 'Frango desfiado com o legítimo Catupiry', preco: 52.90, categoria: 'pizzas' },
    { id: 5, nome: '🍕 Quatro Queijos', descricao: 'Mussarela, parmesão, gorgonzola e provolone', preco: 56.90, categoria: 'pizzas' },
    { id: 6, nome: '🍕 Pepperoni', descricao: 'Mussarela e fatias de pepperoni premium', preco: 58.90, categoria: 'pizzas' },
    { id: 7, nome: '🍕 Napolitana', descricao: 'Mussarela, tomate fatiado e parmesão ralado', preco: 48.90, categoria: 'pizzas' },
    { id: 8, nome: '🍕 Muçarela', descricao: 'Molho de tomate e dose dupla de muçarela', preco: 42.90, categoria: 'pizzas' },
    { id: 9, nome: '🍕 Bacon', descricao: 'Mussarela e fatias crocantes de bacon', preco: 51.90, categoria: 'pizzas' },
    { id: 10, nome: '🍕 Milho', descricao: 'Mussarela e milho selecionado', preco: 44.90, categoria: 'pizzas' },
    { id: 11, nome: '🍕 Atum com Cebola', descricao: 'Atum sólido premium e cebola fatiada', preco: 55.90, categoria: 'pizzas' },
    { id: 12, nome: '🍕 Palmito Especial', descricao: 'Palmito macio, mussarela e orégano', preco: 57.90, categoria: 'pizzas' },
    { id: 13, nome: '🍕 Lombo Defumado', descricao: 'Lombo canadense, cebola e mussarela', preco: 53.90, categoria: 'pizzas' },
    { id: 14, nome: '🍕 Siciliana', descricao: 'Mussarela, bacon e champignon ao molho', preco: 54.90, categoria: 'pizzas' },
    { id: 15, nome: '🍕 Rúcula com Tomate Seco', descricao: 'Mussarela de búfala, rúcula e tomate seco', preco: 59.90, categoria: 'pizzas' },
    { id: 16, nome: '🍕 Baiana Forte', descricao: 'Calabresa moída, ovos, pimenta e cebola', preco: 50.90, categoria: 'pizzas' },
    { id: 17, nome: '🍕 Cinco Queijos', descricao: 'Mussarela, provolone, parmesão e catupiry', preco: 59.90, categoria: 'pizzas' },
    { id: 18, nome: '🍕 Alho e Óleo', descricao: 'Mussarela com alho frito crocante', preco: 46.90, categoria: 'pizzas' },
    { id: 19, nome: '🍕 Aliche Importado', descricao: 'Fatias de aliche sobre molho de tomate', preco: 62.90, categoria: 'pizzas' },
    { id: 20, nome: '🍕 Brócolis com Bacon', descricao: 'Brócolis, mussarela, bacon e alho', preco: 53.90, categoria: 'pizzas' },
    { id: 21, nome: '🍕 Carne Seca', descricao: 'Carne seca, mussarela e cebola roxa', preco: 61.90, categoria: 'pizzas' },
    { id: 22, nome: '🍕 Champignon Premium', descricao: 'Mussarela com champignon temperado', preco: 52.90, categoria: 'pizzas' },
    { id: 23, nome: '🍕 Escarola Especial', descricao: 'Escarola refogada, mussarela e bacon', preco: 49.90, categoria: 'pizzas' },
    { id: 24, nome: '🍕 Mexicana', descricao: 'Calabresa, pimentão, milho e pimenta', preco: 51.90, categoria: 'pizzas' },
    { id: 25, nome: '🍕 Moda da Casa', descricao: 'O melhor do chef: mix de frios e queijos', preco: 65.90, categoria: 'pizzas' },
    { id: 26, nome: '🍕 Namorado', descricao: 'Palmito, milho e catupiry sobre mussarela', preco: 58.90, categoria: 'pizzas' },
    { id: 27, nome: '🍕 Pantaneira', descricao: 'Carne seca, ovos e cebola roxa', preco: 59.90, categoria: 'pizzas' },
    { id: 28, nome: '🍕 Parmegiana', descricao: 'Mussarela, molho extra e parmesão', preco: 54.90, categoria: 'pizzas' },
    { id: 29, nome: '🍕 Peruana', descricao: 'Atum, ovos e cebola sobre mussarela', preco: 55.90, categoria: 'pizzas' },
    { id: 30, nome: '🍕 Picanha ao Alho', descricao: 'Tiras de picanha, mussarela e alho', preco: 72.90, categoria: 'pizzas' },
    { id: 31, nome: '🍕 Pomodoro', descricao: 'Molho, alho, parmesão e manjericão', preco: 47.90, categoria: 'pizzas' },
    { id: 32, nome: '🍕 Romana', descricao: 'Mussarela, parmesão e filés de aliche', preco: 53.90, categoria: 'pizzas' },
    { id: 33, nome: '🍕 Shimeji Gourmet', descricao: 'Shimeji na manteiga e mussarela búfala', preco: 68.90, categoria: 'pizzas' },
    { id: 34, nome: '🍕 Strogonoff de Carne', descricao: 'Strogonoff, mussarela e batata palha', preco: 63.90, categoria: 'pizzas' },
    { id: 35, nome: '🍕 Strogonoff de Frango', descricao: 'Frango ao molho e batata palha', preco: 58.90, categoria: 'pizzas' },
    { id: 36, nome: '🍕 Toscana', descricao: 'Calabresa moída e mussarela', preco: 49.90, categoria: 'pizzas' },
    { id: 37, nome: '🍕 Vegetariana', descricao: 'Mix de legumes frescos e mussarela', preco: 52.90, categoria: 'pizzas' },
    { id: 38, nome: '🍕 Veneza', descricao: 'Peito de peru, catupiry e cebola', preco: 56.90, categoria: 'pizzas' },
    { id: 39, nome: '🍕 Carbonara', descricao: 'Ovos, bacon, parmesão e creme de leite', preco: 58.90, categoria: 'pizzas' },
    { id: 40, nome: '🍕 Zucchini', descricao: 'Abobrinha grelhada e parmesão', preco: 54.90, categoria: 'pizzas' },

    // PIZZAS DOCES (20)
    { id: 41, nome: '🍫 Brigadeiro', descricao: 'Chocolate ao leite e granulado', preco: 46.90, categoria: 'doces' },
    { id: 42, nome: '🥥 Prestígio', descricao: 'Chocolate ao leite e coco ralado', preco: 47.90, categoria: 'doces' },
    { id: 43, nome: '🧀 Romeu e Julieta', descricao: 'Mussarela e goiabada cremosa', preco: 45.90, categoria: 'doces' },
    { id: 44, nome: '🍌 Banana com Canela', descricao: 'Banana, açúcar e canela', preco: 44.90, categoria: 'doces' },
    { id: 45, nome: '🍬 M&Ms Coloridos', descricao: 'Chocolate ao leite e M&Ms', preco: 52.90, categoria: 'doces' },
    { id: 46, nome: '🍓 Nutella com Morango', descricao: 'Nutella com morangos frescos', preco: 59.90, categoria: 'doces' },
    { id: 47, nome: '🤍 Chocolate Branco', descricao: 'Chocolate branco Nestlé derretido', preco: 48.90, categoria: 'doces' },
    { id: 48, nome: '💖 Sensação', descricao: 'Chocolate e pedaços de morango', preco: 51.90, categoria: 'doces' },
    { id: 49, nome: '🥜 Charge', descricao: 'Chocolate, amendoim e caramelo', preco: 53.90, categoria: 'doces' },
    { id: 50, nome: '🍪 Oreo', descricao: 'Chocolate branco e biscoito Oreo', preco: 54.90, categoria: 'doces' },
    { id: 51, nome: '🍫 Kit Kat', descricao: 'Chocolate ao leite e Kit Kat', preco: 55.90, categoria: 'doces' },
    { id: 52, nome: '🍯 Paçoca', descricao: 'Doce de leite e paçoca', preco: 46.90, categoria: 'doces' },
    { id: 53, nome: '🥥 Doce de Leite com Coco', preco: 47.90, categoria: 'doces' },
    { id: 54, nome: '🥨 Churros', descricao: 'Doce de leite, açúcar e canela', preco: 49.90, categoria: 'doces' },
    { id: 55, nome: '🍍 Califórnia', descricao: 'Mussarela e frutas em calda', preco: 48.90, categoria: 'doces' },
    { id: 56, nome: '🥚 Kinder Bueno', descricao: 'Creme de avelã e Kinder Bueno', preco: 62.90, categoria: 'doces' },
    { id: 57, nome: '🍬 Sonho de Valsa', descricao: 'Chocolate com bombom picado', preco: 54.90, categoria: 'doces' },
    { id: 58, nome: '🥥 Beijinho', descricao: 'Chocolate branco e coco', preco: 46.90, categoria: 'doces' },
    { id: 59, nome: '🍍 Abacaxi com Coco', preco: 47.90, categoria: 'doces' },
    { id: 60, nome: '🍫 Meio Amargo', descricao: 'Chocolate 50% cacau premium', preco: 52.90, categoria: 'doces' },

    // ENTRADAS (10)
    { id: 61, nome: '🥖 Pão de Alho Tradicional', preco: 18.90, categoria: 'entradas' },
    { id: 62, nome: '🍟 Batata Frita Individual', preco: 22.90, categoria: 'entradas' },
    { id: 63, nome: '🥓 Batata Cheddar e Bacon', preco: 34.90, categoria: 'entradas' },
    { id: 64, nome: '🌯 Calabresa Acebolada', preco: 29.90, categoria: 'entradas' },
    { id: 65, nome: '🌽 Polenta Frita', preco: 24.90, categoria: 'entradas' },
    { id: 66, nome: '🍅 Bruschetta Pomodoro', preco: 26.90, categoria: 'entradas' },
    { id: 67, nome: '🥩 Carpaccio de Carne', preco: 42.90, categoria: 'entradas' },
    { id: 68, nome: '🧀 Sticks de Muçarela (6un)', preco: 28.90, categoria: 'entradas' },
    { id: 69, nome: '🥗 Salada Caprese', preco: 32.90, categoria: 'entradas' },
    { id: 70, nome: '🥪 Croquete de Carne (4un)', preco: 19.90, categoria: 'entradas' },

    // BEBIDAS (7)
    { id: 71, nome: '🥤 Refrigerante Lata', preco: 6.50, categoria: 'bebidas' },
    { id: 72, nome: '🥤 Refrigerante 2L', preco: 14.00, categoria: 'bebidas' },
    { id: 73, nome: '💧 Água Mineral 500ml', preco: 4.50, categoria: 'bebidas' },
    { id: 74, nome: '🍊 Suco Natural 500ml', preco: 10.90, categoria: 'bebidas' },
    { id: 75, nome: '🍺 Cerveja Long Neck', preco: 9.90, categoria: 'bebidas' },
    { id: 76, nome: '🍺 Cerveja 600ml', preco: 16.00, categoria: 'bebidas' },
    { id: 77, nome: '🍵 Chá Gelado Lata', preco: 7.50, categoria: 'bebidas' },

    // BORDAS (3)
    { id: 78, nome: '➕ Borda de Catupiry', preco: 10.00, categoria: 'bordas' },
    { id: 79, nome: '➕ Borda de Cheddar', preco: 10.00, categoria: 'bordas' },
    { id: 80, nome: '➕ Borda de Chocolate', preco: 12.00, categoria: 'bordas' },

    // SOBREMESAS (9)
    { id: 81, nome: '🍮 Pudim de Leite', preco: 12.90, categoria: 'sobremesas' },
    { id: 82, nome: '🍰 Brownie com Sorvete', preco: 22.90, categoria: 'sobremesas' },
    { id: 83, nome: '🧁 Petit Gateau', preco: 24.90, categoria: 'sobremesas' },
    { id: 84, nome: '🥧 Tiramisù Italiano', preco: 26.90, categoria: 'sobremesas' },
    { id: 85, nome: '🍨 Sorvete (2 bolas)', preco: 16.90, categoria: 'sobremesas' },
    { id: 86, nome: '🍫 Mousse de Chocolate', preco: 14.90, categoria: 'sobremesas' },
    { id: 87, nome: '🍋 Mousse de Maracujá', preco: 14.90, categoria: 'sobremesas' },
    { id: 88, nome: '🍰 Cheesecake Frutas V.', preco: 24.90, categoria: 'sobremesas' },
    { id: 89, nome: '🍌 Banoffee no Pote', preco: 18.90, categoria: 'sobremesas' }
];

const categorias = [
    { id: 'todos', nome: 'Todos' },
    { id: 'pizzas', nome: 'Pizzas Salgadas' },
    { id: 'doces', nome: 'Pizzas Doces' },
    { id: 'entradas', nome: 'Entradas' },
    { id: 'bebidas', nome: 'Bebidas' },
    { id: 'bordas', nome: 'Bordas' },
    { id: 'sobremesas', nome: 'Sobremesas' }
];

// Inicialização
function init() {
    products = initialProducts;
    renderCategorias();
    renderProducts(); // Chama a função sem argumentos para mostrar "Todos" agrupado
    loadCartFromStorage();
    updateCartUI();
    setupEventListeners();
    console.log("App carregado com " + products.length + " itens.");
}

// Renderizar abas
function renderCategorias() {
    const existing = document.querySelector('.categorias');
    if (existing) existing.remove();

    const header = document.querySelector('.header');
    const categoriasHTML = `
        <div class="categorias">
            ${categorias.map(cat => `
                <button class="categoria-btn ${cat.id === 'todos' ? 'active' : ''}" data-categoria="${cat.id}">
                    ${cat.nome}
                </button>
            `).join('')}
        </div>
    `;
    header.insertAdjacentHTML('afterend', categoriasHTML);
    
    document.querySelectorAll('.categoria-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.categoria-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterProducts(e.target.dataset.categoria);
        });
    });
}

function filterProducts(categoriaId) {
    if (categoriaId === 'todos') {
        renderProducts(products, false);
    } else {
        const filtered = products.filter(p => p.categoria === categoriaId);
        renderProducts(filtered, true);
    }
}

function renderProducts(productsToRender = products, isFiltered = false) {
    if (isFiltered) {
        mainContent.innerHTML = `
            <div class="products-grid">
                ${productsToRender.map(product => renderProductCard(product)).join('')}
            </div>
        `;
    } else {
        let html = '';
        categorias.forEach(cat => {
            if (cat.id === 'todos') return;
            const group = products.filter(p => p.categoria === cat.id);
            if (group.length > 0) {
                html += `
                    <section class="category-section">
                        <h2 class="category-group-title">${cat.nome}</h2>
                        <div class="products-grid">
                            ${group.map(product => renderProductCard(product)).join('')}
                        </div>
                    </section>
                `;
            }
        });
        mainContent.innerHTML = html;
    }
}

function renderProductCard(product) {
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">${product.nome.split(' ')[0]}</div>
            <div class="product-info">
                <h3 class="product-name">${product.nome}</h3>
                <p class="product-description">${product.descricao || ''}</p>
                <div class="product-price">R$ ${product.preco.toFixed(2)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">+ adicionar</button>
            </div>
        </div>
    `;
}

// Lógica de Carrinho (Comanda)
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCartToStorage();
    updateCartUI();
    showFeedback(`${product.nome} adicionado`);
};

function updateCartUI() {
    updateCartItems();
    updateSummary();
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<div style="text-align:center;color:#666;padding:2rem;">Comanda vazia</div>';
        return;
    }
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.nome}</div>
                <div class="cart-item-price">R$ ${item.preco.toFixed(2)}</div>
                <div class="cart-item-controls">
                    <button onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeItem(${item.id})">remover</button>
                </div>
            </div>
        </div>
    `).join('');
}

function updateSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.preco * item.quantity), 0);
    const discount = discountType === 'fixed' ? Math.min(discountValue, subtotal) : subtotal * (discountValue / 100);
    const service = (subtotal - discount) * (servicePercentage / 100);
    const total = (subtotal - discount) + service;
    
    summarySubtotal.textContent = `R$ ${subtotal.toFixed(2)}`;
    totalAmount.textContent = `R$ ${total.toFixed(2)}`;
    perPerson.textContent = `por pessoa: R$ ${(total / numberOfPeople).toFixed(2)}`;
}

window.updateQuantity = function(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) removeItem(id);
        saveCartToStorage();
        updateCartUI();
    }
};

window.removeItem = function(id) {
    cart = cart.filter(i => i.id !== id);
    saveCartToStorage();
    updateCartUI();
};

function saveCartToStorage() { localStorage.setItem('pizzariaCart', JSON.stringify(cart)); }
function loadCartFromStorage() {
    const saved = localStorage.getItem('pizzariaCart');
    if (saved) cart = JSON.parse(saved);
}

function setupEventListeners() {
    cartToggle.onclick = () => cartSidebar.classList.add('open');
    closeCart.onclick = () => cartSidebar.classList.remove('open');
    
    discountInput.oninput = (e) => { discountValue = parseFloat(e.target.value) || 0; updateSummary(); };
    discountTypeSelect.onchange = (e) => { discountType = e.target.value; updateSummary(); };
    
    serviceButtons.forEach(btn => {
        btn.onclick = () => {
            serviceButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            servicePercentage = parseInt(btn.dataset.service);
            updateSummary();
        };
    });

    decrementPeople.onclick = () => { if (numberOfPeople > 1) { numberOfPeople--; peopleCount.textContent = numberOfPeople; updateSummary(); } };
    incrementPeople.onclick = () => { numberOfPeople++; peopleCount.textContent = numberOfPeople; updateSummary(); };
    
    finalizeBtn.onclick = () => {
        finalizeModal.classList.add('show');
        cartSidebar.classList.remove('open');
        finalizeDetails.innerHTML = `<h3>Total: ${totalAmount.textContent}</h3><p>Dividido para ${numberOfPeople} pessoas.</p>`;
    };
    
    closeModal.onclick = () => {
        finalizeModal.classList.remove('show');
        cart = [];
        saveCartToStorage();
        updateCartUI();
    };
}

function showFeedback(msg) {
    const f = document.createElement('div');
    f.style.cssText = "position:fixed; bottom:20px; left:50%; transform:translateX(-50%); background:#333; color:white; padding:10px 20px; border-radius:8px; z-index:9999; font-size:14px;";
    f.textContent = msg;
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 2000);
}

init();
