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
    // 1️⃣ Elektrisch droogrek (primair bij TWIJFEL / NEE) -> Scenario: TWIJFEL / NEE
    {
        id: 'eleganca-elektrisch-droogrek',
        name: 'Elektrisch droogrek',
        description: 'Verwarmd de stangen. Droogt je was sneller dan gewoon ophangen, zonder dat het krimp.',
        imagePath: '/products/wasrek-verwarmd.png', // Using existing placeholder
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Feleganca-elektrisch-droogrek-147-x-54-x-94-cm-verwarmd-wasrek-elektrisch-220-240v-230w-ipx1-zilver%2F9300000226680542%2F&name=Elektrisch%20Droogrek&subid=Elektrisch%20Droogrek',
        category: 'MISSCHIEN', // Primary scenario
        shopName: 'Bol.com',
        whyThis: 'Warmte helpt gewoon. Zeker opdagen dat het net niet wil.',
    },
    // 2️⃣ Draagbare elektrische mini-droger -> Scenario: NEE (alternatief)
    {
        id: 'draagbare-elektrische-droger',
        name: 'Draagbare droger',
        description: 'Een tentje waar je kleren in hangt met warme lucht. Klinkt gek, werkt best goed.',
        imagePath: '/products/droger-samsung.png', // Placeholder (needs better image ideally)
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fdraagbare-elektrische-droger-opvouwbare-droger-uv-sterilisator-8-uurs-timer-360-hetelucht-mini-droger-verstelbaar-ideaal-voor-thuis-op-reis-in-de-camper-en-in-compacte-wasruimtes%2F9300000241654694%2F&name=Draagbare%20elektrische%20droger&subid=Draagbare%20elektrische%20droger',
        category: 'NEE',
        shopName: 'Bol.com',
        whyThis: 'Als je klein woont en toch snel droge kleren wil.',
    },
    // 3️⃣ Plafonddroogrek (premium binnenoplossing) -> Scenario: NEE (premium alternatief)
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
    // 4️⃣ Compacte elektrische wasdroger -> Scenario: NEE (alternatief)
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
    // 5️⃣ Droogmolen (primair bij JA) -> Scenario: JA
    {
        id: 'leifheit-droogmolen',
        name: 'Leifheit droogmolen',
        description: 'Veel lijn, weinig gedoe. Klapt makkelijk in.',
        imagePath: '/products/droogmolen.png', // Existing valid image
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fleifheit-droogmolen-linomatic-500-easy-incl-bodemhuls-50-m-drooglengte-5-wasmachineladingen%2F9300000024958549%2F&name=Droogmolen&subid=Droogmolen',
        category: 'JA',
        shopName: 'Bol.com',
        whyThis: 'Buiten drogen is gratis. Dit maakt het makkelijk.',
    },
];

export function getProductForCategory(category: 'JA' | 'NEE' | 'MISSCHIEN'): Product {
    const filtered = products.filter(p => p.category === category);
    if (filtered.length === 0) {
        // Fallback if no product found (should not happen with current data)
        return products[0];
    }
    // Pick a random product from the filtered list
    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex];
}

export function getIndoorProducts(): Product[] {
    const indoorIds = ['eleganca-elektrisch-droogrek', 'foxydry-air-120', 'compacte-wasdroger-600w'];
    // Return them in the specific order requested
    return indoorIds.map(id => products.find(p => p.id === id)).filter((p): p is Product => p !== undefined);
}
