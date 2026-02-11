export interface Product {
    id: string;
    name: string;
    description: string;
    imagePath: string;
    shopUrl: string;
    category: 'JA' | 'NEE' | 'MISSCHIEN';
    shopName: 'Bol.com' | 'Coolblue';
}

export const products: Product[] = [
    {
        id: 'leifheit-droogmolen',
        name: 'Leifheit Droogmolen Linomatic',
        description: 'Laat de Nederlandse wind het zware werk doen. Je was danst nog net niet de samba.',
        imagePath: '/products/droogmolen.png',
        shopUrl: 'https://partner.bol.com/click/click?p=1&a=AFFILIATE_CODE',
        category: 'JA',
        shopName: 'Bol.com',
    },
    {
        id: 'brabantia-wasrek',
        name: 'Brabantia HangOn Wasrek',
        description: 'Voor de zon-aanbidders onder de wasmanden. Stevig genoeg voor al je natte jeans.',
        imagePath: '/products/wasrek-buiten.png',
        shopUrl: 'https://www.coolblue.nl/share-product/123?utm_source=affiliate',
        category: 'JA',
        shopName: 'Coolblue',
    },
    {
        id: 'samsung-warmtepomp-droger',
        name: 'Samsung Bespoke Droger',
        description: 'Als de wolken winnen, win jij alsnog. Fluisterstil en extreem zuinig.',
        imagePath: '/products/droger-samsung.png',
        shopUrl: 'https://www.coolblue.nl/share-product/456?utm_source=affiliate',
        category: 'NEE',
        shopName: 'Coolblue',
    },
    {
        id: 'miele-tumble-dryer',
        name: 'Miele T1 Droger',
        description: 'De enige die vandaag harder werkt dan jij. Duitse degelijkheid voor een klamme dag.',
        imagePath: '/products/droger-miele.png',
        shopUrl: 'https://partner.bol.com/click/click?p=2&a=AFFILIATE_CODE',
        category: 'NEE',
        shopName: 'Bol.com',
    },
    {
        id: 'vileda-verwarmd-rek',
        name: 'Vileda One-Click Verwarmd Wasrek',
        description: 'De perfecte \'plan B\' voor onbesliste dagen. Een beetje hulp van de stekker.',
        imagePath: '/products/wasrek-verwarmd.png',
        shopUrl: 'https://partner.bol.com/click/click?p=3&a=AFFILIATE_CODE',
        category: 'MISSCHIEN',
        shopName: 'Bol.com',
    },
];

export function getRandomProduct(category: 'JA' | 'NEE' | 'MISSCHIEN'): Product {
    const filtered = products.filter(p => p.category === category);
    return filtered[Math.floor(Math.random() * filtered.length)];
}
