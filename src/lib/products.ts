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
    {
        id: 'leifheit-droogmolen',
        name: 'Leifheit Droogmolen Linomatic',
        description: 'Meer drooglengte, minder gehannes. Klapt zichzelf open.',
        imagePath: '/products/droogmolen.png',
        shopUrl: 'https://partner.bol.com/click/click?p=1&a=AFFILIATE_CODE',
        category: 'JA',
        shopName: 'Bol.com',
        whyThis: 'Meer droogruimte, minder \'waar hang ik dit nog\'.',
    },
    {
        id: 'samsung-warmtepomp-droger',
        name: 'Samsung Bespoke Droger',
        description: 'Fluisterstil, extreem zuinig. Doet het werk als de lucht het niet doet.',
        imagePath: '/products/droger-samsung.png',
        shopUrl: 'https://www.coolblue.nl/share-product/456?utm_source=affiliate',
        category: 'NEE',
        shopName: 'Coolblue',
        whyThis: 'Dit is de goedkoopste manier om binnen te versnellen.',
    },
    {
        id: 'vileda-verwarmd-rek',
        name: 'Vileda Verwarmd Wasrek',
        description: 'Elektrisch droogrek. Sneller droog, zonder droogkastgedoe.',
        imagePath: '/products/wasrek-verwarmd.png',
        shopUrl: 'https://partner.bol.com/click/click?p=3&a=AFFILIATE_CODE',
        category: 'MISSCHIEN',
        shopName: 'Bol.com',
        whyThis: 'Dit vangt de \'net niet\' dagen op.',
    },
];

export function getProductForCategory(category: 'JA' | 'NEE' | 'MISSCHIEN'): Product {
    const filtered = products.filter(p => p.category === category);
    return filtered[0]; // One fixed product per category, no rotation
}
