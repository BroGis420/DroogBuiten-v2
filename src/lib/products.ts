export interface Product {
    id: string;
    name: string;
    description: string;
    imagePath: string;
    shopUrl: string;
    category: 'JA' | 'NEE' | 'MISSCHIEN';
    shopName: 'Bol.com' | 'Coolblue';
    whyThis: string;
    benefit: string;
    resultTitle: string;
    middelTitle: string;
    ctaText?: string;
}

/**
 * Copy per verdict scenario.
 * label = bold heading above the product card
 * transition = one-liner that bridges verdict → product
 */
/**
 * Copy per verdict scenario for the "Primary Advice Block"
 */
export const situationalAdvice: Record<'JA' | 'MISSCHIEN' | 'NEE', { context: string; headline: string }> = {
    JA: {
        context: 'Optimale condities voor buiten drogen.',
        headline: 'Status',
    },
    MISSCHIEN: {
        context: 'Droogtijd buiten is onzeker; deze tools minimaliseren de risico\'s.',
        headline: 'Wat helpt in deze omstandigheden',
    },
    NEE: {
        context: '',
        headline: 'Wat helpt in deze omstandigheden',
    },
};

export const verdictCopy: Record<'JA' | 'MISSCHIEN' | 'NEE', { label: string; transition: string }> = {
    JA: {
        label: 'Professioneel buitenhangen:',
        transition: 'Mooi. Buitenhangen dus.',
    },
    MISSCHIEN: {
        label: 'Voor de zekerheid:',
        transition: 'Hiermee kan het toch buiten lukken',
    },
    NEE: {
        label: 'Dit is vandaag sneller dan wachten:',
        transition: 'Binnen drogen is sneller.',
    },
};

export const products: Product[] = [
    // --- NEE Categorie (Indoor / Elektrisch) ---
    {
        id: 'verwarmd-wasrek',
        name: 'Verwarmd wasrek',
        description: '',
        resultTitle: 'Droog tegen vanavond',
        middelTitle: 'verwarmd wasrek',
        ctaText: 'bekijk voorbeeld',
        imagePath: '/products/wasrek-verwarmd.png',
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Feleganca-elektrisch-droogrek-147-x-54-x-94-cm-verwarmd-wasrek-elektrisch-220-240v-230w-ipx1-zilver%2F9300000226680542%2F&name=Elektrisch%20Droogrek&subid=Elektrisch%20Droogrek',
        category: 'NEE',
        shopName: 'Bol.com',
        whyThis: 'Ideaal voor een snelle droging binnenshuis.',
        benefit: 'Werkt best bij koud en vochtig weer'
    },
    {
        id: 'draagbare-wasdroger-elek',
        name: 'Draagbare wasdroger',
        description: '',
        resultTitle: 'Geen muffe geur',
        middelTitle: 'luchtcirculatie droger',
        ctaText: 'bekijk voorbeeld',
        imagePath: 'https://images.unsplash.com/photo-1545173153-4dc975765727?q=80&w=300&h=300&auto=format&fit=crop',
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fdraagbare-elektrische-droger-opvouwbare-droger-uv-sterilisator-8-uurs-timer-360-hetelucht-mini-droger-verstelbaar-ideaal-voor-thuis-op-reis-in-de-camper-en-in-compacte-wasruimtes%2F9300000241654694%2F&name=Draagbare%20elektrische%20droger%20&subid=Draagbare%20elektrische%20droger%20',
        category: 'NEE',
        shopName: 'Bol.com',
        whyThis: 'Compact en effectief voor snelle resultaten.',
        benefit: 'Droogt nog binnen één avond'
    },
    {
        id: 'plafonddroogrek-elek',
        name: 'Plafonddroogrek',
        description: '',
        resultTitle: 'Past in kleine ruimte',
        middelTitle: 'compacte wasdroger',
        ctaText: 'bekijk voorbeeld',
        imagePath: 'https://images.unsplash.com/photo-1549400893-61ba4f4044a2?q=80&w=300&h=300&auto=format&fit=crop',
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Ffoxydry-air-120-electrisch-plafonddroogrek-met-afstandsbediening-122-x-57-x-30-cm%2F9300000220471309%2F&name=Electrisch%20plafonddroogrek&subid=Electrisch%20plafonddroogrek',
        category: 'NEE',
        shopName: 'Bol.com',
        whyThis: 'Bespaart vloerruimte en benut opstijgende hitte.',
        benefit: 'Voorkomt dat was muf blijft'
    },

    // --- MISSCHIEN Categorie (Handige tools) ---
    {
        id: 'sokkenmolen',
        name: 'Sokkenmolen',
        description: 'Houd alles bij elkaar',
        resultTitle: 'Nooit meer sokken kwijt',
        middelTitle: 'met de sokkenmolen',
        ctaText: 'Bekijk hoe handig',
        imagePath: '/products/droogmolen.png',
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2F4-pack-socks-drying-mill-holder-rack-for-clothes-and-laundry-ideal-for-socks-and-underwear%2F9300000234256304%2F&name=Sokkenmolen&subid=Sokkenmolen',
        category: 'MISSCHIEN',
        shopName: 'Bol.com',
        whyThis: 'Scheelt je de helft van de tijd met ophangen.',
        benefit: 'Voorkomt dat sokken wegwaaien of klam blijven',
    },
    {
        id: 'droogballen',
        name: 'Droogballen',
        description: 'Natuurlijk zachtere was',
        resultTitle: '2x sneller droog',
        middelTitle: 'door droogballen',
        ctaText: 'Zie het effect',
        imagePath: '/products/wasrek-verwarmd.png',
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fhappy-laundry-duurzame-wollen-droger-ballen-drogerballen-dryer-balls-wasdroger-ballen-ballen-voor-snellere-droogtijd-drogerbollen-6-stuks%2F9200000108636346%2F&name=Droogballen&subid=Droogballen',
        category: 'MISSCHIEN',
        shopName: 'Bol.com',
        whyThis: 'Kleine investering, groot verschil in droogtijd.',
        benefit: 'Natuurlijk kortere droogtijd door vezel-opening',
    },
    {
        id: 'flexlijn',
        name: 'Flexlijn',
        description: 'Altijd een plekje vrij',
        resultTitle: 'Overal een waslijn',
        middelTitle: 'met deze flexlijn',
        ctaText: 'Bekijk voorbeeld',
        imagePath: '/products/droogmolen.png',
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2F2-stuks-waslijn-uittrekbaar-uittrekbare-waslijn-douchekledinglijn-voor-buiten-en-binnen-droogrek-wasrek-wasdraad-voor-binnen-en-buiten-2-8-m-rvs%2F9300000221628963%2F&name=Flexlijn&subid=Flexlijn',
        category: 'MISSCHIEN',
        shopName: 'Bol.com',
        whyThis: 'Ideaal voor als het weer twijfelachtig is: snel weer binnen.',
        benefit: 'Snel verplaatsbaar bij plotselinge buien',
    },

    // --- JA Categorie (Buiten drogen) ---
    {
        id: 'radiatorrek',
        name: 'Radiatorrek',
        description: 'Gebruik elke warmtebron',
        resultTitle: 'Extra droogruimte',
        middelTitle: 'met een radiatorrek',
        ctaText: 'Zie voorbeeld',
        imagePath: '/products/wasrek-verwarmd.png',
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fradiator-clothes-airer-drying-rack-for-balcony-hang-and-small-spaces-foldable%2F9300000234256298%2F&name=Radiatorrek&subid=Radiatorrek',
        category: 'JA',
        shopName: 'Bol.com',
        whyThis: 'Ook handig voor aan het balkonhekje.',
        benefit: 'Bespaart ruimte en benut de kleinste warmtebron',
    },
    {
        id: 'tripodrek',
        name: 'Tripodrek',
        description: 'Zet hem waar je wil',
        resultTitle: 'Stabiel buiten hangen',
        middelTitle: 'op dit tripodrek',
        ctaText: 'Bekijk voorbeeld',
        imagePath: '/products/droogmolen.png',
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Ftripod-drying-rack-for-clothes-portable-and-foldable-space-saving-clothes-drying-rack-with-16-wooden-bars%2F9300000234256267%2F&name=Tripodrek&subid=Tripodrek',
        category: 'JA',
        shopName: 'Bol.com',
        whyThis: 'Voor wie geen vaste droogmolen in de tuin wil rammen.',
        benefit: 'Stabiele basis voor zware, natte was',
    },
    {
        id: 'zweefnet',
        name: 'Zweefnet',
        description: 'Behoud de ideale vorm',
        resultTitle: 'Veilig plat drogen',
        middelTitle: 'in een zweefnet',
        ctaText: 'Bekijk hoe het werkt',
        imagePath: '/products/wasrek-verwarmd.png',
        shopUrl: 'https://partner.bol.com/click/click?p=2&t=url&s=1503974&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fhanging-drying-net-windproof-clothes-basket-foldable-2-layers-drying-net-portable-multifunctional-drying-net-voor-het-drogen-van-kruiden-bloemen-paddenstoelen-en-planten%2F9300000241662942%2F&name=Zweefnet&subid=Zweefnet',
        category: 'JA',
        shopName: 'Bol.com',
        whyThis: 'Plat drogen is het nieuwe ophangen.',
        benefit: 'Voorkomt vormverlies bij delicate stoffen',
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
