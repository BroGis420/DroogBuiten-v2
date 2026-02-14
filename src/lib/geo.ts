/**
 * Calculates the Haversine distance between two points on Earth.
 */
export function getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Approximate coastal anchor points for the Netherlands
const dutchCoastalPoints = [
    { lat: 51.4425, lon: 3.5708 }, // Vlissingen
    { lat: 51.5636, lon: 3.4983 }, // Domburg
    { lat: 51.7333, lon: 3.7833 }, // Renesse
    { lat: 51.9772, lon: 4.1311 }, // Hoek van Holland
    { lat: 52.1133, lon: 4.2742 }, // Scheveningen
    { lat: 52.2392, lon: 4.4431 }, // Noordwijk
    { lat: 52.3739, lon: 4.5244 }, // Zandvoort
    { lat: 52.4586, lon: 4.5828 }, // IJmuiden
    { lat: 52.6178, lon: 4.6225 }, // Egmond
    { lat: 52.9533, lon: 4.7608 }, // Den Helder
    { lat: 53.0994, lon: 4.7619 }, // Texel (De Koog)
    { lat: 53.2981, lon: 4.9897 }, // Vlieland
    { lat: 53.3619, lon: 5.2153 }, // Terschelling
    { lat: 53.4472, lon: 5.7611 }, // Ameland
    { lat: 53.4833, lon: 6.1333 }, // Schiermonnikoog
    { lat: 53.3294, lon: 6.9181 }, // Delfzijl
];

/**
 * Checks if a location is within 25km of the Dutch coast.
 */
export function isNearCoast(lat: number, lon: number): boolean {
    return dutchCoastalPoints.some(point => getDistance(lat, lon, point.lat, point.lon) < 25);
}
