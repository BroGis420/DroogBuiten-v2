export type DryingVerdict = {
    title: string;
    subtitle: string;
    color: string;
    icon: string; // 'check', 'warning', 'cross'
    verdict: "JA" | "MISSCHIEN" | "NEE";
};

const sentences_YES = [
    "Hang die handdoeken maar buiten, ze zijn droog voor je 'wasverzachter' kan zeggen.",
    "De zon doet haar best, nu jij nog met die wasmand.",
    "Perfect weer om je buren te jaloers te maken met je schone lakens.",
    "Buiten drogen is gratis, net als mijn advies.",
    "Hup, naar buiten met die natte handel!",
    "Je wasrek heeft ook frisse lucht nodig.",
    "Vandaag is wasdag, en de natuur helpt een handje."
];

const sentences_MAYBE = [
    "Het kan, maar blijf in de buurt voor als het misgaat.",
    "Durf je het aan? Het is een gokje vandaag.",
    "Misschien droogt het, misschien wordt het natter. Spannend!",
    "Alleen voor de risiconemers onder ons.",
    "Hou buienradar in de gaten, of vertrouw op je geluk.",
    "Snel drogen is er niet bij, maar het luchten kan geen kwaad."
];

const sentences_NO = [
    "Door lage temperatuur en hoge luchtvochtigheid kan vocht vandaag nauwelijks uit stof verdampen."
];

export function getDryingVerdict(score: number, isRaining: boolean): DryingVerdict {
    // Logic based on score and rain
    // Score 0-100.
    // Rain usually overrides score if it's currently raining.

    if (isRaining) {
        const sentence = sentences_NO[Math.floor(Math.random() * sentences_NO.length)];
        return {
            title: "NEE",
            subtitle: sentence,
            color: "text-red-500",
            icon: "cross",
            verdict: "NEE"
        };
    }

    if (score >= 70) {
        const sentence = sentences_YES[Math.floor(Math.random() * sentences_YES.length)];
        return {
            title: "JA!",
            subtitle: sentence,
            color: "text-emerald-500", // Green
            icon: "check",
            verdict: "JA"
        };
    }

    if (score >= 40) {
        const sentence = sentences_MAYBE[Math.floor(Math.random() * sentences_MAYBE.length)];
        return {
            title: "MISSCHIEN",
            subtitle: sentence,
            color: "text-amber-500", // Orange/Yellow
            icon: "warning",
            verdict: "MISSCHIEN"
        };
    }

    // Score < 40 and no rain (e.g. cold, high humidity)
    const sentence = sentences_NO[Math.floor(Math.random() * sentences_NO.length)];
    return {
        title: "NEE",
        subtitle: sentence,
        color: "text-red-500", // Red
        icon: "cross",
        verdict: "NEE"
    };
}

export function checkIfPrecipitating(code: number): boolean {
    // WMO Weather interpretation codes (WW)
    // 51, 53, 55: Drizzle
    // 61, 63, 65: Rain
    // 66, 67: Freezing Rain
    // 71, 73, 75, 77: Snow
    // 80, 81, 82: Rain showers
    // 85, 86: Snow showers
    // 95, 96, 99: Thunderstorm
    const precipCodes = [
        51, 53, 55, // Drizzle
        61, 63, 65, // Rain
        66, 67,     // Freezing Rain
        71, 73, 75, 77, // Snow
        80, 81, 82, // Rain showers
        85, 86,     // Snow showers
        95, 96, 99  // Thunderstorm
    ];
    return precipCodes.includes(code);
}
