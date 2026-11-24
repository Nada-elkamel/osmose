import './index.css';

const MENU_CATEGORIES = [
  {
    id: 'coffee',
    label: 'Café',
    shortLabel: 'Café',
    subtitle: 'Espresso fraîchement extrait et grands classiques au lait chaud',
    kind: 'beverage',
  },
  {
    id: 'iced-coffee',
    label: 'Café Glacé',
    shortLabel: 'Café Glacé',
    subtitle: 'Signatures espresso glacées servies sur glace cristalline',
    kind: 'beverage',
  },
  {
    id: 'tea',
    label: 'Thé',
    shortLabel: 'Thé',
    subtitle: 'Thé à la menthe traditionnel, karak épicé et infusions',
    kind: 'beverage',
  },
  {
    id: 'smoothies',
    label: 'Smoothies',
    shortLabel: 'Smoothies',
    subtitle: 'Mélanges onctueux de fruits et fruits secs préparés à la commande',
    kind: 'beverage',
  },
  {
    id: 'milkshakes',
    label: 'Milkshakes',
    shortLabel: 'Milkshakes',
    subtitle: 'Milkshakes gourmands aux saveurs signatures',
    kind: 'beverage',
  },
  {
    id: 'pizza',
    label: 'Pizza',
    shortLabel: 'Pizza',
    subtitle: 'Pizzas artisanales au four en formats Mini, Moyenne et Maxi',
    kind: 'food',
  },
  {
    id: 'makloub',
    label: 'Makloub',
    shortLabel: 'Makloub',
    subtitle: 'Pains tunisiens dorés et pressés à la minute',
    kind: 'food',
  },
  {
    id: 'sandwiches',
    label: 'Sandwiches',
    shortLabel: 'Sandwiches',
    subtitle: 'Spécialités généreuses et fraîchement garnies',
    kind: 'food',
  },
  {
    id: 'juices',
    label: 'Jus Frais',
    shortLabel: 'Jus',
    subtitle: 'Jus de fruits de saison et agrumes pressés à froid',
    kind: 'beverage',
  },
  {
    id: 'boissons-fraiches',
    label: 'Boissons Fraîches',
    shortLabel: 'Boissons',
    subtitle: 'Eaux minérales et canettes rafraîchissantes',
    kind: 'beverage',
  },
];

const MENU_ITEMS = [
  // COFFEE
  {id: 'coffee-espresso', name: 'Espresso', price: '2.900 DT', category: 'coffee'},
  {id: 'coffee-americano', name: 'Americano', price: '3.000 DT', category: 'coffee'},
  {id: 'coffee-macchiato', name: 'Macchiato', price: '3.400 DT', category: 'coffee'},
  {id: 'coffee-cappuccino', name: 'Cappuccino', price: '3.900 DT', category: 'coffee'},
  {id: 'coffee-turkish', name: 'Turkish Coffee', price: '3.900 DT', category: 'coffee'},
  {id: 'coffee-latte', name: 'Latte', price: '4.900 DT', category: 'coffee'},
  {id: 'coffee-double-espresso', name: 'Double Espresso', price: '4.800 DT', category: 'coffee'},
  {id: 'coffee-big-cappuccino', name: 'Big Cappuccino', price: '5.900 DT', category: 'coffee'},
  {id: 'coffee-vanilla-latte', name: 'Vanilla Latte', price: '5.900 DT', category: 'coffee'},
  {id: 'coffee-caramel-latte', name: 'Caramel Latte', price: '5.900 DT', category: 'coffee'},
  {id: 'coffee-hazelnut-latte', name: 'Hazelnut Latte', price: '5.900 DT', category: 'coffee'},
  {id: 'coffee-spanish-latte', name: 'Spanish Latte', price: '6.400 DT', category: 'coffee'},

  // ICED COFFEE
  {id: 'iced-americano', name: 'Iced Americano', price: '4.900 DT', category: 'iced-coffee'},
  {id: 'iced-latte', name: 'Iced Latte', price: '6.900 DT', category: 'iced-coffee'},
  {id: 'iced-spanish-latte', name: 'Iced Spanish Latte', price: '7.900 DT', category: 'iced-coffee'},
  {id: 'iced-vanilla-latte', name: 'Iced Vanilla Latte', price: '7.900 DT', category: 'iced-coffee'},
  {id: 'iced-caramel-latte', name: 'Iced Caramel Latte', price: '7.900 DT', category: 'iced-coffee'},
  {id: 'iced-hazelnut-latte', name: 'Iced Hazelnut Latte', price: '7.900 DT', category: 'iced-coffee'},
  {id: 'iced-osmose-special', name: 'Osmose Special', price: '9.900 DT', category: 'iced-coffee', signature: true},

  // TEA
  {id: 'tea-mint', name: 'Tea With Mint', price: '2.500 DT', category: 'tea'},
  {id: 'tea-iced', name: 'Iced Tea', price: '2.900 DT', category: 'tea'},
  {id: 'tea-almond', name: 'Almond Tea', price: '4.500 DT', category: 'tea'},
  {id: 'tea-flavored', name: 'Flavored Tea', price: '3.500 DT', category: 'tea'},
  {id: 'tea-karak', name: 'Karak', price: '3.500 DT', category: 'tea'},
  {id: 'tea-ginger-honey', name: 'Ginger Honey', price: '4.000 DT', category: 'tea'},
  {id: 'tea-osmose-special', name: 'Osmose Special', price: '7.500 DT', category: 'tea', signature: true},

  // SMOOTHIES
  {id: 'smoothie-strawberry', name: 'Strawberry', price: '9.900 DT', category: 'smoothies'},
  {id: 'smoothie-date', name: 'Date', price: '9.900 DT', category: 'smoothies'},
  {id: 'smoothie-banana', name: 'Banana', price: '11.900 DT', category: 'smoothies'},
  {id: 'smoothie-mixed-fruits', name: 'Mixed Fruits', price: '13.900 DT', category: 'smoothies'},
  {id: 'smoothie-pistachio', name: 'Pistachio', price: '14.900 DT', category: 'smoothies'},
  {id: 'smoothie-osmose-special', name: 'Osmose Special', price: '15.900 DT', category: 'smoothies', signature: true},

  // MILKSHAKES
  {id: 'milkshake-strawberry', name: 'Strawberry', price: '9.900 DT', category: 'milkshakes'},
  {id: 'milkshake-date', name: 'Date', price: '9.900 DT', category: 'milkshakes'},
  {id: 'milkshake-banana', name: 'Banana', price: '9.900 DT', category: 'milkshakes'},
  {id: 'milkshake-apple', name: 'Apple', price: '9.900 DT', category: 'milkshakes'},
  {id: 'milkshake-kiwi', name: 'Kiwi', price: '9.900 DT', category: 'milkshakes'},
  {id: 'milkshake-strawberry-banana', name: 'Strawberry Banana', price: '9.900 DT', category: 'milkshakes'},
  {id: 'milkshake-date-banana', name: 'Date Banana', price: '9.900 DT', category: 'milkshakes'},
  {id: 'milkshake-mixed-fruits', name: 'Mixed Fruits', price: '11.900 DT', category: 'milkshakes'},

  // PIZZA
  {
    id: 'pizza-margheritta',
    name: 'Margheritta',
    category: 'pizza',
    prices: {mini: '6 DT', moyenne: '9 DT', maxi: '11 DT'},
  },
  {
    id: 'pizza-neptune',
    name: 'Neptune',
    category: 'pizza',
    prices: {mini: '10 DT', moyenne: '13 DT', maxi: '17 DT'},
  },
  {
    id: 'pizza-escalope',
    name: 'Escalope',
    category: 'pizza',
    prices: {mini: '10 DT', moyenne: '13 DT', maxi: '17 DT'},
  },
  {
    id: 'pizza-pepperoni',
    name: 'Pepperoni',
    category: 'pizza',
    prices: {mini: '10 DT', moyenne: '13 DT', maxi: '17 DT'},
  },
  {
    id: 'pizza-viande-hachee',
    name: 'Viande hachée',
    category: 'pizza',
    prices: {mini: '13 DT', moyenne: '17 DT', maxi: '20 DT'},
  },
  {
    id: 'pizza-fruits-de-mer',
    name: 'Fruits de mer',
    category: 'pizza',
    prices: {mini: '15 DT', moyenne: '19 DT', maxi: '24 DT'},
  },

  // MAKLOUB
  {id: 'makloub-thon', name: 'Makloub Thon', price: '8 DT', category: 'makloub'},
  {id: 'makloub-jambon', name: 'Makloub Jambon', price: '8 DT', category: 'makloub'},
  {id: 'makloub-escalope', name: 'Makloub Escalope', price: '9 DT', category: 'makloub'},
  {id: 'makloub-merguez', name: 'Makloub Merguez', price: '10 DT', category: 'makloub'},

  // SANDWICHES
  {id: 'sandwich-baguette-farcie', name: 'Baguette Farcie', price: '12 DT', category: 'sandwiches'},
  {id: 'sandwich-cornet', name: 'Cornet', price: '12 DT', category: 'sandwiches'},
  {id: 'sandwich-mahboul', name: 'Sandwich Mahboul', price: '15 DT', category: 'sandwiches'},

  // JUICES
  {id: 'juice-orange', name: 'Orange', price: '3.300 DT', category: 'juices'},
  {id: 'juice-lemon', name: 'Lemon', price: '3.500 DT', category: 'juices'},
  {id: 'juice-lemon-mint', name: 'Lemon Mint', price: '3.900 DT', category: 'juices'},
  {id: 'juice-orange-carrot', name: 'Orange Carrot', price: '3.900 DT', category: 'juices'},
  {id: 'juice-strawberry', name: 'Strawberry', price: '6.900 DT', category: 'juices'},
  {id: 'juice-date', name: 'Date', price: '6.900 DT', category: 'juices'},
  {id: 'juice-watermelon', name: 'Watermelon', price: '7.500 DT', category: 'juices'},
  {id: 'juice-strawberry-banana', name: 'Strawberry Banana', price: '7.800 DT', category: 'juices'},
  {id: 'juice-date-banana', name: 'Date Banana', price: '7.800 DT', category: 'juices'},
  {id: 'juice-banana', name: 'Banana', price: '7.900 DT', category: 'juices'},
  {id: 'juice-kiwi', name: 'Kiwi', price: '9.900 DT', category: 'juices'},
  {id: 'juice-mixed-fruits', name: 'Mixed Fruits', price: '11.900 DT', category: 'juices'},

  // BOISSONS FRAÎCHES
  {id: 'boisson-canette', name: 'Canette', price: '2.500 DT', category: 'boissons-fraiches'},
  {id: 'boisson-eau-05', name: 'Eau Minérale 0.5L', price: '1.000 DT', category: 'boissons-fraiches'},
  {id: 'boisson-eau-1l', name: 'Eau 1L', price: '2.000 DT', category: 'boissons-fraiches'},
];

const state = {
  selectedCategory: 'all',
  searchQuery: '',
  pizzaSize: 'all',
  mobileMenuOpen: false,
  mobileSheetOpen: false,
};

function createCoffeeBeanSvg(className) {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.25');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('class', className);

  const ellipse = document.createElementNS(ns, 'ellipse');
  ellipse.setAttribute('cx', '12');
  ellipse.setAttribute('cy', '12');
  ellipse.setAttribute('rx', '6.5');
  ellipse.setAttribute('ry', '9');
  ellipse.setAttribute('transform', 'rotate(-24 12 12)');

  const path = document.createElementNS(ns, 'path');
  path.setAttribute('d', 'M9 4.8c2.2 3.2.2 6.8 3 14.4');

  svg.appendChild(ellipse);
  svg.appendChild(path);
  return svg;
}

function getCategoryCounts() {
  const counts = {all: MENU_ITEMS.length};
  for (const cat of MENU_CATEGORIES) {
    counts[cat.id] = MENU_ITEMS.filter((item) => item.category === cat.id).length;
  }
  return counts;
}

function getActiveCategoryLabel() {
  if (state.selectedCategory === 'all') return 'Toutes les catégories';
  const found = MENU_CATEGORIES.find((c) => c.id === state.selectedCategory);
  return found ? found.label : 'La Carte';
}

function scrollToMenuTop() {
  const menuEl = document.getElementById('menu');
  if (menuEl) {
    menuEl.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}

function resetFilters() {
  state.selectedCategory = 'all';
  state.searchQuery = '';
  state.pizzaSize = 'all';
  const searchInput = document.getElementById('menu-search');
  if (searchInput instanceof HTMLInputElement) {
    searchInput.value = '';
  }
  renderMenu();
}

function renderCategoryTabs() {
  const tabsEl = document.getElementById('category-tabs');
  if (!tabsEl) return;

  const counts = getCategoryCounts();
  tabsEl.replaceChildren();

  const createTab = (id, label) => {
    const isActive = state.selectedCategory === id;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', String(isActive));
    btn.textContent = label;
    btn.className = `px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap shrink-0 min-h-[40px] ${
      isActive
        ? 'bg-[#C9824D] text-[#101010] font-semibold'
        : 'bg-[#101010] text-[#B8ADA2] border border-white/10 hover:border-[#C9824D]/40 hover:text-[#F5EFE8]'
    }`;
    btn.addEventListener('click', () => {
      state.selectedCategory = id;
      renderMenu();
    });
    return btn;
  };

  tabsEl.appendChild(createTab('all', `Tout (${counts.all})`));
  for (const cat of MENU_CATEGORIES) {
    tabsEl.appendChild(createTab(cat.id, cat.label));
  }
}

function renderMobileCategoryGrid() {
  const gridEl = document.getElementById('mobile-category-grid');
  if (!gridEl) return;

  const counts = getCategoryCounts();
  gridEl.replaceChildren();

  const allBtn = document.createElement('button');
  allBtn.type = 'button';
  allBtn.className = `col-span-2 flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium min-h-[44px] ${
    state.selectedCategory === 'all'
      ? 'bg-[#C9824D] text-[#101010] font-semibold'
      : 'bg-[#101010] text-[#F5EFE8] border border-white/10'
  }`;
  const allLabel = document.createElement('span');
  allLabel.textContent = 'Toutes les catégories';
  const allCount = document.createElement('span');
  allCount.className = 'tabular-nums text-xs opacity-80';
  allCount.textContent = String(counts.all);
  allBtn.appendChild(allLabel);
  allBtn.appendChild(allCount);
  allBtn.addEventListener('click', () => {
    state.selectedCategory = 'all';
    closeMobileSheet();
    renderMenu();
    scrollToMenuTop();
  });
  gridEl.appendChild(allBtn);

  for (const cat of MENU_CATEGORIES) {
    const isActive = state.selectedCategory === cat.id;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `flex items-center justify-between px-3.5 py-3 rounded-lg text-left text-sm font-medium min-h-[44px] ${
      isActive
        ? 'bg-[#C9824D] text-[#101010] font-semibold'
        : 'bg-[#101010] text-[#F5EFE8] border border-white/10'
    }`;

    const labelSpan = document.createElement('span');
    labelSpan.className = 'truncate';
    labelSpan.textContent = cat.shortLabel;

    const countSpan = document.createElement('span');
    countSpan.className = 'tabular-nums text-xs opacity-75 ml-2 shrink-0';
    countSpan.textContent = String(counts[cat.id]);

    btn.appendChild(labelSpan);
    btn.appendChild(countSpan);
    btn.addEventListener('click', () => {
      state.selectedCategory = cat.id;
      closeMobileSheet();
      renderMenu();
      scrollToMenuTop();
    });

    gridEl.appendChild(btn);
  }
}

function buildPizzaCard(pizza) {
  const article = document.createElement('article');
  article.className =
    'bg-[#161616] border border-[#2A2521] hover:border-[#C9824D]/55 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between gap-4';

  const topRow = document.createElement('div');
  topRow.className = 'flex items-start justify-between gap-3';

  const titleWrap = document.createElement('div');
  const kicker = document.createElement('p');
  kicker.className = 'text-[11px] tracking-[0.18em] uppercase text-[#B8ADA2]';
  kicker.textContent = 'Pizza Artisanale';

  const title = document.createElement('h4');
  title.className = 'font-display text-2xl font-semibold text-[#F5EFE8] mt-0.5';
  title.textContent = pizza.name;

  titleWrap.appendChild(kicker);
  titleWrap.appendChild(title);
  topRow.appendChild(titleWrap);
  topRow.appendChild(createCoffeeBeanSvg('w-4 h-4 text-[#C9824D]/45 shrink-0 mt-1'));

  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-3 gap-2 pt-3 border-t border-white/10';

  const tiers = [
    {key: 'mini', label: 'Mini', value: pizza.prices.mini},
    {key: 'moyenne', label: 'Moyenne', value: pizza.prices.moyenne},
    {key: 'maxi', label: 'Maxi', value: pizza.prices.maxi},
  ];

  for (const tier of tiers) {
    const dimmed = state.pizzaSize !== 'all' && state.pizzaSize !== tier.key;
    const highlighted = state.pizzaSize === tier.key;

    const cell = document.createElement('div');
    cell.className = `rounded-lg px-2.5 py-2 transition-colors ${
      highlighted ? 'bg-[#C9824D]/15 border border-[#C9824D]/50' : 'bg-[#101010] border border-white/5'
    } ${dimmed ? 'opacity-40' : 'opacity-100'}`;

    const labelEl = document.createElement('span');
    labelEl.className = 'block text-[11px] uppercase tracking-wider text-[#B8ADA2]';
    labelEl.textContent = tier.label;

    const priceEl = document.createElement('span');
    priceEl.className = 'block text-sm font-semibold text-[#D9A06B] tabular-nums mt-0.5';
    priceEl.textContent = tier.value;

    cell.appendChild(labelEl);
    cell.appendChild(priceEl);
    grid.appendChild(cell);
  }

  article.appendChild(topRow);
  article.appendChild(grid);
  return article;
}

function buildStandardCard(item, categoryLabel) {
  const article = document.createElement('article');
  article.className =
    'group bg-[#161616] border border-[#2A2521] hover:border-[#C9824D]/55 rounded-xl px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-between gap-4';

  const left = document.createElement('div');
  left.className = 'min-w-0';

  const title = document.createElement('h4');
  title.className =
    'text-base font-medium text-[#F5EFE8] group-hover:text-[#D9A06B] transition-colors truncate';
  title.textContent = item.name;

  const meta = document.createElement('p');
  if (item.signature) {
    meta.className = 'text-xs text-[#C9824D] mt-0.5';
    meta.textContent = `Signature Maison · ${categoryLabel}`;
  } else {
    meta.className = 'text-xs text-[#B8ADA2]/80 mt-0.5';
    meta.textContent = categoryLabel;
  }

  left.appendChild(title);
  left.appendChild(meta);

  const right = document.createElement('div');
  right.className = 'shrink-0 text-right';

  const price = document.createElement('span');
  price.className = 'text-base font-semibold text-[#D9A06B] tabular-nums';
  price.textContent = item.price;

  right.appendChild(price);
  article.appendChild(left);
  article.appendChild(right);
  return article;
}

function renderMenu() {
  const normalizedQuery = state.searchQuery.trim().toLowerCase();
  const targetCategories =
    state.selectedCategory === 'all'
      ? MENU_CATEGORIES
      : MENU_CATEGORIES.filter((c) => c.id === state.selectedCategory);

  const visibleGroups = [];
  for (const category of targetCategories) {
    const matchingItems = MENU_ITEMS.filter((item) => {
      if (item.category !== category.id) return false;
      if (!normalizedQuery) return true;
      return (
        item.name.toLowerCase().includes(normalizedQuery) ||
        category.label.toLowerCase().includes(normalizedQuery)
      );
    });
    if (matchingItems.length > 0) {
      visibleGroups.push({category, items: matchingItems});
    }
  }

  const totalMatching = visibleGroups.reduce((acc, g) => acc + g.items.length, 0);

  // Update counter & controls
  const countEl = document.getElementById('menu-count');
  if (countEl) {
    countEl.replaceChildren();
    const strong = document.createElement('strong');
    strong.className = 'text-[#F5EFE8] font-medium';
    strong.textContent = String(totalMatching);
    countEl.appendChild(strong);
    countEl.appendChild(
      document.createTextNode(totalMatching <= 1 ? ' article affiché' : ' articles affichés')
    );
  }

  const clearBtn = document.getElementById('menu-search-clear');
  if (clearBtn) {
    clearBtn.classList.toggle('hidden', !state.searchQuery);
    clearBtn.classList.toggle('flex', Boolean(state.searchQuery));
  }

  const resetBtn = document.getElementById('menu-reset-btn');
  if (resetBtn) {
    const hasFilters =
      state.selectedCategory !== 'all' || Boolean(state.searchQuery) || state.pizzaSize !== 'all';
    resetBtn.classList.toggle('hidden', !hasFilters);
  }

  const mobileLabel = document.getElementById('mobile-active-category-label');
  if (mobileLabel) {
    mobileLabel.textContent = getActiveCategoryLabel();
  }

  renderCategoryTabs();
  renderMobileCategoryGrid();

  const resultsEl = document.getElementById('menu-results');
  if (!resultsEl) return;
  resultsEl.replaceChildren();

  if (visibleGroups.length === 0) {
    const emptyBox = document.createElement('div');
    emptyBox.className = 'bg-[#161616] border border-[#2A2521] rounded-xl py-16 px-6 text-center';

    emptyBox.appendChild(createCoffeeBeanSvg('w-8 h-8 text-[#C9824D]/70 mx-auto mb-4'));

    const emptyTitle = document.createElement('h3');
    emptyTitle.className = 'font-display text-2xl font-semibold text-[#F5EFE8] mb-2';
    emptyTitle.textContent = 'Aucun produit trouvé';

    const emptyText = document.createElement('p');
    emptyText.className = 'text-sm text-[#B8ADA2] max-w-md mx-auto mb-6';
    emptyText.textContent = `Aucun article ne correspond à « ${state.searchQuery} » dans ${getActiveCategoryLabel()}. Essayez un autre mot-clé ou affichez toute la carte.`;

    const emptyBtn = document.createElement('button');
    emptyBtn.type = 'button';
    emptyBtn.className =
      'px-6 py-2.5 text-sm font-semibold bg-[#C9824D] text-[#101010] rounded-md hover:bg-[#D9A06B] transition-colors min-h-[44px]';
    emptyBtn.textContent = 'Afficher toute la carte';
    emptyBtn.addEventListener('click', resetFilters);

    emptyBox.appendChild(emptyTitle);
    emptyBox.appendChild(emptyText);
    emptyBox.appendChild(emptyBtn);
    resultsEl.appendChild(emptyBox);
    return;
  }

  for (const {category, items} of visibleGroups) {
    const section = document.createElement('div');
    section.id = `cat-${category.id}`;
    section.className = 'scroll-mt-24';

    const header = document.createElement('div');
    header.className =
      'flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 mb-6 border-b border-[#C9824D]/25';

    const headerLeft = document.createElement('div');
    const metaLine = document.createElement('div');
    metaLine.className =
      'flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#C9824D] mb-1';

    const kindSpan = document.createElement('span');
    kindSpan.textContent = category.kind === 'beverage' ? 'Boissons' : 'Cuisine';
    const dotSpan = document.createElement('span');
    dotSpan.setAttribute('aria-hidden', 'true');
    dotSpan.textContent = '·';
    const countSpan = document.createElement('span');
    countSpan.className = 'tabular-nums';
    countSpan.textContent = `${items.length} choix`;

    metaLine.appendChild(kindSpan);
    metaLine.appendChild(dotSpan);
    metaLine.appendChild(countSpan);

    const catTitle = document.createElement('h3');
    catTitle.className = 'font-display text-3xl sm:text-4xl font-semibold text-[#F5EFE8]';
    catTitle.textContent = category.label;

    const catSubtitle = document.createElement('p');
    catSubtitle.className = 'text-sm text-[#B8ADA2] mt-1';
    catSubtitle.textContent = category.subtitle;

    headerLeft.appendChild(metaLine);
    headerLeft.appendChild(catTitle);
    headerLeft.appendChild(catSubtitle);
    header.appendChild(headerLeft);

    if (category.id === 'pizza') {
      const sizeGroup = document.createElement('div');
      sizeGroup.className =
        'flex items-center gap-1 p-1 bg-[#161616] border border-[#2A2521] rounded-lg self-start sm:self-auto';
      sizeGroup.setAttribute('role', 'group');
      sizeGroup.setAttribute('aria-label', "Filtrer l'affichage des tailles de pizza");

      const sizeOptions = [
        {id: 'all', label: 'Toutes'},
        {id: 'mini', label: 'Mini'},
        {id: 'moyenne', label: 'Moyenne'},
        {id: 'maxi', label: 'Maxi'},
      ];

      for (const opt of sizeOptions) {
        const isActive = state.pizzaSize === opt.id;
        const sizeBtn = document.createElement('button');
        sizeBtn.type = 'button';
        sizeBtn.textContent = opt.label;
        sizeBtn.className = `px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 min-h-[34px] ${
          isActive
            ? 'bg-[#C9824D] text-[#101010] font-semibold'
            : 'text-[#B8ADA2] hover:text-[#F5EFE8]'
        }`;
        sizeBtn.addEventListener('click', () => {
          state.pizzaSize = opt.id;
          renderMenu();
        });
        sizeGroup.appendChild(sizeBtn);
      }
      header.appendChild(sizeGroup);
    }

    section.appendChild(header);

    const grid = document.createElement('div');
    if (category.id === 'pizza') {
      grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5';
      for (const pizza of items) {
        grid.appendChild(buildPizzaCard(pizza));
      }
    } else {
      grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4';
      for (const item of items) {
        grid.appendChild(buildStandardCard(item, category.label));
      }
    }

    section.appendChild(grid);
    resultsEl.appendChild(section);
  }
}

function setMobileMenuOpen(open) {
  state.mobileMenuOpen = open;
  const mobileNav = document.getElementById('mobile-nav');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const openIcon = document.getElementById('mobile-icon-open');
  const closeIcon = document.getElementById('mobile-icon-close');

  if (mobileNav) mobileNav.classList.toggle('hidden', !open);
  if (menuBtn) {
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute(
      'aria-label',
      open ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'
    );
  }
  if (openIcon) openIcon.classList.toggle('hidden', open);
  if (closeIcon) closeIcon.classList.toggle('hidden', !open);
}

function openMobileSheet() {
  state.mobileSheetOpen = true;
  const sheet = document.getElementById('mobile-category-sheet');
  if (sheet) {
    sheet.classList.remove('hidden');
    sheet.classList.add('flex');
  }
}

function closeMobileSheet() {
  state.mobileSheetOpen = false;
  const sheet = document.getElementById('mobile-category-sheet');
  if (sheet) {
    sheet.classList.add('hidden');
    sheet.classList.remove('flex');
  }
}

function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const update = () => {
    const scrolled = window.scrollY > 36;
    header.classList.toggle('bg-[#101010]/95', scrolled);
    header.classList.toggle('backdrop-blur-md', scrolled);
    header.classList.toggle('border-[#C9824D]/20', scrolled);
    header.classList.toggle('bg-[#101010]/80', !scrolled);
    header.classList.toggle('backdrop-blur-sm', !scrolled);
    header.classList.toggle('border-white/5', !scrolled);
  };

  update();
  window.addEventListener('scroll', update, {passive: true});
}

function initImageFallbacks() {
  const heroImg = document.getElementById('hero-img');
  const heroFallback = document.getElementById('hero-fallback');
  if (heroImg && heroFallback) {
    heroImg.addEventListener('error', () => {
      heroImg.classList.add('hidden');
      heroFallback.classList.remove('hidden');
    });
  }

  const aboutImg = document.getElementById('about-img');
  const aboutFallback = document.getElementById('about-fallback');
  if (aboutImg && aboutFallback) {
    aboutImg.addEventListener('error', () => {
      aboutImg.classList.add('hidden');
      aboutFallback.classList.remove('hidden');
      aboutFallback.classList.add('flex');
    });
  }
}

function init() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  initHeaderScroll();
  initImageFallbacks();

  const menuBtn = document.getElementById('mobile-menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => setMobileMenuOpen(!state.mobileMenuOpen));
  }

  document.querySelectorAll('[data-mobile-link]').forEach((link) => {
    link.addEventListener('click', () => setMobileMenuOpen(false));
  });

  const searchInput = document.getElementById('menu-search');
  if (searchInput instanceof HTMLInputElement) {
    searchInput.addEventListener('input', (e) => {
      const target = e.target;
      if (target instanceof HTMLInputElement) {
        state.searchQuery = target.value;
        renderMenu();
      }
    });
  }

  const clearBtn = document.getElementById('menu-search-clear');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      state.searchQuery = '';
      if (searchInput instanceof HTMLInputElement) {
        searchInput.value = '';
        searchInput.focus();
      }
      renderMenu();
    });
  }

  const resetBtn = document.getElementById('menu-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetFilters);
  }

  const openSheetBtn = document.getElementById('mobile-sheet-open-btn');
  if (openSheetBtn) {
    openSheetBtn.addEventListener('click', openMobileSheet);
  }

  const closeSheetBtn = document.getElementById('mobile-sheet-close-btn');
  if (closeSheetBtn) {
    closeSheetBtn.addEventListener('click', closeMobileSheet);
  }

  const sheetEl = document.getElementById('mobile-category-sheet');
  const sheetPanel = document.getElementById('mobile-sheet-panel');
  if (sheetEl) {
    sheetEl.addEventListener('click', closeMobileSheet);
  }
  if (sheetPanel) {
    sheetPanel.addEventListener('click', (e) => e.stopPropagation());
  }

  const focusSearchBtn = document.getElementById('mobile-focus-search-btn');
  if (focusSearchBtn) {
    focusSearchBtn.addEventListener('click', () => {
      scrollToMenuTop();
      setTimeout(() => {
        if (searchInput instanceof HTMLInputElement) {
          searchInput.focus();
        }
      }, 250);
    });
  }

  const scrollMenuBtn = document.getElementById('mobile-scroll-menu-btn');
  if (scrollMenuBtn) {
    scrollMenuBtn.addEventListener('click', scrollToMenuTop);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (state.mobileSheetOpen) closeMobileSheet();
      if (state.mobileMenuOpen) setMobileMenuOpen(false);
    }
  });

  renderMenu();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
