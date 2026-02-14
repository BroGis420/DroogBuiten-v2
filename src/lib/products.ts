export interface Product {
    id: string;
    name: string;
    description: string;
    imagePath: string;
    shopUrl: string;
    category: 'JA' | 'NEE' | 'MISSCHIEN';
    shopName: 'Bol.com' | 'Coolblue';
    whyThis: string;
}

/**
 * Copy per verdict scenario.
 * label = bold heading above the product card
 * transition = one-liner that bridges verdict → product
 */
export const verdictCopy: Record<'JA' | 'MISSCHIEN' | 'NEE', { label: string; transition: string }> = {
    JA: {
        label: 'Als je geen zin hebt in gedoe:',
        transition: 'Mooi. Buitenhangen dus.',
    },
    MISSCHIEN: {
        label: 'Voor de zekerheid:',
        transition: 'Twijfelgevalletje.',
    },
    NEE: {
        label: 'Als je geen zin hebt in traag drogen:',
        transition: 'Oké. Dan wordt het binnen.',
    },
};

export const products: Product[] = [
    // --- NEE Categorie (Indoor / Elektrisch) ---
    {
        id: 'draagbare-elektrische-droger',
        name: 'Draagbare droger',
        description: 'Een tentje waar je kleren in hangt met warme lucht. Klinkt gek, werkt best goed.',
        imagePath: '/products/droger-samsung.png', // Placeholder
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fdraagbare-elektrische-droger-opvouwbare-droger-uv-sterilisator-8-uurs-timer-360-hetelucht-mini-droger-verstelbaar-ideaal-voor-thuis-op-reis-in-de-camper-en-in-compacte-wasruimtes%2F9300000241654694%2F&name=Draagbare%20elektrische%20droger&subid=Draagbare%20elektrische%20droger',
        category: 'NEE',
        shopName: 'Bol.com',
        whyThis: 'Als je klein woont en toch snel droge kleren wil.',
    },
    {
        id: 'foxydry-air-120',
        name: 'Plafonddroogrek',
        description: 'Hangt uit de weg en droogt sneller dan gewoon ophangen. Met afstandsbediening.',
        imagePath: '/products/wasrek-verwarmd.png', // Placeholder
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Ffoxydry-air-120-electrisch-plafonddroogrek-met-afstandsbediening-122-x-57-x-30-cm%2F9300000220471309%2F&name=Electrisch%20plafonddroogrek&subid=Electrisch%20plafonddroogrek',
        category: 'NEE',
        shopName: 'Bol.com',
        whyThis: 'Je vloer blijft vrij. Dat is de grootste winst.',
    },
    {
        id: 'compacte-wasdroger-600w',
        name: 'Draagbare wasdroger',
        description: 'Klein en doet wat ie moet doen. Past in een hoekje.',
        imagePath: '/products/droger-samsung.png', // Placeholder
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fmultifunctionele-draagbare-elektrische-wasdroger-600-w-huishouden-compact-en-efficient%2F9300000259091355%2F&name=Elektrische%20Wasdroger&subid=Elektrische%20Wasdroger',
        category: 'NEE',
        shopName: 'Bol.com',
        whyThis: 'Voor als een echte droger niet past of te duur is.',
    },

    // --- MISSCHIEN Categorie (Handige tools) ---
    {
        id: 'sokkenmolen',
        name: 'Sokkenmolen',
        description: 'Geen gedoe meer met losse sokken. Klik ze vast en klaar.',
        imagePath: '/products/droogmolen.png', // Placeholder
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2F4-pack-socks-drying-mill-holder-rack-for-clothes-and-laundry-ideal-for-socks-and-underwear%2F9300000234256304%2F&name=Sokkenmolen&subid=Sokkenmolen',
        category: 'MISSCHIEN',
        shopName: 'Bol.com',
        whyThis: 'Scheelt je de helft van de tijd met ophangen.',
    },
    {
        id: 'droogballen',
        name: 'Droogballen',
        description: 'Versnelt het drogen (ook buiten in de wind) en maakt was zachter.',
        imagePath: '/products/wasrek-verwarmd.png', // Placeholder
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fhappy-laundry-duurzame-wollen-droger-ballen-drogerballen-dryer-balls-wasdroger-ballen-ballen-voor-snellere-droogtijd-drogerbollen-6-stuks%2F9200000108636346%2F&name=Droogballen&subid=Droogballen',
        category: 'MISSCHIEN',
        shopName: 'Bol.com',
        whyThis: 'Kleine investering, groot verschil in droogtijd.',
    },
    {
        id: 'flexlijn',
        name: 'Flexlijn',
        description: 'Uittrekbare waslijn. Hangt nooit in de weg als je hem niet gebruikt.',
        imagePath: '/products/droogmolen.png', // Placeholder
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2F2-stuks-waslijn-uittrekbaar-uittrekbare-waslijn-douchekledinglijn-voor-buiten-en-binnen-droogrek-wasrek-wasdraad-voor-binnen-en-buiten-2-8-m-rvs%2F9300000221628963%2F&name=Flexlijn&subid=Flexlijn',
        category: 'MISSCHIEN',
        shopName: 'Bol.com',
        whyThis: 'Ideaal voor als het weer twijfelachtig is: snel weer binnen.',
    },

    // --- JA Categorie (Buiten drogen) ---
    {
        id: 'radiatorrek',
        name: 'Radiatorrek',
        description: 'Perfect voor dat kleine beetje was of als het buiten net te fris is.',
        imagePath: '/products/wasrek-verwarmd.png', // Placeholder
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fradiator-clothes-airer-drying-rack-for-balcony-hang-and-small-spaces-foldable%2F9300000234256298%2F&name=Radiatorrek&subid=Radiatorrek',
        category: 'JA',
        shopName: 'Bol.com',
        whyThis: 'Ook handig voor aan het balkonhekje.',
    },
    {
        id: 'tripodrek',
        name: 'Tripodrek',
        description: 'Staat stabiel, neemt weinig ruimte in en je kan veel kwijt.',
        imagePath: '/products/droogmolen.png', // Placeholder
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Ftripod-drying-rack-for-clothes-portable-and-foldable-space-saving-clothes-drying-rack-with-16-wooden-bars%2F9300000234256267%2F&name=Tripodrek&subid=Tripodrek',
        category: 'JA',
        shopName: 'Bol.com',
        whyThis: 'Voor wie geen vaste droogmolen in de tuin wil rammen.',
    },
    {
        id: 'zweefnet',
        name: 'Zweefnet',
        description: 'Voor je delicate truitjes die niet mogen uitlubberen.',
        imagePath: '/products/wasrek-verwarmd.png', // Placeholder
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fhanging-drying-net-windproof-clothes-basket-foldable-2-layers-drying-net-portable-multifunctional-drying-net-voor-het-drogen-van-kruiden-bloemen-paddenstoelen-en-planten%2F9300000241662942%2F&name=Zweefnet&subid=Zweefnet',
        category: 'JA',
        shopName: 'Bol.com',
        whyThis: 'Plat drogen is het nieuwe ophangen.',
    },
];

export function getProductForCategory(category: 'JA' | 'NEE' | 'MISSCHIEN'): Product {
    const filtered = products.filter(p => p.category === category);
    if (filtered.length === 0) {
        // Fallback should not happen, but safe to return a random one
        return products[0];
    }
    // Pick a random product from the filtered list
    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex];
}

export function getProductsForCategory(category: 'JA' | 'NEE' | 'MISSCHIEN'): Product[] {
    return products.filter(p => p.category === category);
}

export function getIndoorProducts(): Product[] {
    return getProductsForCategory('NEE');
}
