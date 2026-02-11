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
        label: 'Goed. Dan kan dit ook.',
        transition: 'Als je toch buiten hangt, doe het in één keer goed.',
    },
    MISSCHIEN: {
        label: 'Plan B, zonder drama.',
        transition: 'Het kan lukken. Het kan ook eindigen in klamme jeans.',
    },
    NEE: {
        label: 'Binnendrogen. Dit helpt.',
        transition: 'Buiten gaat het niet worden. Binnen kan je wel versnellen.',
    },
};

export const products: Product[] = [
    // 1️⃣ Elektrisch droogrek (primair bij TWIJFEL / NEE) -> Scenario: TWIJFEL / NEE
    {
        id: 'eleganca-elektrisch-droogrek',
        name: 'Eleganca Elektrisch Droogrek',
        description: 'Verwarmd droogrek. Sneller droog, zonder droogkastgedoe.',
        imagePath: '/products/wasrek-verwarmd.png', // Using existing placeholder
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Feleganca-elektrisch-droogrek-147-x-54-x-94-cm-verwarmd-wasrek-elektrisch-220-240v-230w-ipx1-zilver%2F9300000226680542%2F&name=Elektrisch%20Droogrek&subid=Elektrisch%20Droogrek',
        category: 'MISSCHIEN', // Primary scenario
        shopName: 'Bol.com',
        whyThis: 'Dit vangt de \'net niet\' dagen op, en versnelt het proces binnen.',
    },
    // 2️⃣ Draagbare elektrische mini-droger -> Scenario: NEE (alternatief)
    {
        id: 'draagbare-elektrische-droger',
        name: 'Draagbare Elektrische Droger',
        description: 'Compacte hetelucht droger. Ideaal voor kleine ruimtes of op reis.',
        imagePath: '/products/droger-samsung.png', // Placeholder (needs better image ideally)
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fdraagbare-elektrische-droger-opvouwbare-droger-uv-sterilisator-8-uurs-timer-360-hetelucht-mini-droger-verstelbaar-ideaal-voor-thuis-op-reis-in-de-camper-en-in-compacte-wasruimtes%2F9300000241654694%2F&name=Draagbare%20elektrische%20droger&subid=Draagbare%20elektrische%20droger',
        category: 'NEE',
        shopName: 'Bol.com',
        whyThis: 'Geen plek voor een grote droger? Dit werkt net zo goed.',
    },
    // 3️⃣ Plafonddroogrek (premium binnenoplossing) -> Scenario: NEE (premium alternatief)
    {
        id: 'foxydry-air-120',
        name: 'Foxydry Air 120',
        description: 'Elektrisch plafonddroogrek met afstandsbediening. Bespaar vloerruimte.',
        imagePath: '/products/wasrek-verwarmd.png', // Placeholder
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Ffoxydry-air-120-electrisch-plafonddroogrek-met-afstandsbediening-122-x-57-x-30-cm%2F9300000220471309%2F&name=Electrisch%20plafonddroogrek&subid=Electrisch%20plafonddroogrek',
        category: 'NEE',
        shopName: 'Bol.com',
        whyThis: 'De ultieme space-saver. Droog je was in de verloren ruimte aan het plafond.',
    },
    // 4️⃣ Compacte elektrische wasdroger -> Scenario: NEE (alternatief)
    {
        id: 'compacte-wasdroger-600w',
        name: 'Compacte Wasdroger (600W)',
        description: 'Multifunctionele draagbare droger. Compact en efficiënt.',
        imagePath: '/products/droger-samsung.png', // Placeholder
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fmultifunctionele-draagbare-elektrische-wasdroger-600-w-huishouden-compact-en-efficient%2F9300000259091355%2F&name=Elektrische%20Wasdroger&subid=Elektrische%20Wasdroger',
        category: 'NEE',
        shopName: 'Bol.com',
        whyThis: 'Voor als je wel een droger wil, maar geen kasteel bewoont.',
    },
    // 5️⃣ Droogmolen (primair bij JA) -> Scenario: JA
    {
        id: 'leifheit-droogmolen',
        name: 'Leifheit Droogmolen Linomatic',
        description: '50m drooglengte, lijnen blijven schoon in de armen.',
        imagePath: '/products/droogmolen.png', // Existing valid image
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fleifheit-droogmolen-linomatic-500-easy-incl-bodemhuls-50-m-drooglengte-5-wasmachineladingen%2F9300000024958549%2F&name=Droogmolen&subid=Droogmolen',
        category: 'JA',
        shopName: 'Bol.com',
        whyThis: 'Buiten drogen is koning. Met 50 meter lijn kan je alles kwijt.',
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
