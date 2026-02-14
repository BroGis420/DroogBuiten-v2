import { allDutchPlaces, fetchWeatherData } from "@/lib/weather";
import { isNearCoast, getDistance } from "@/lib/geo";
import { CityDashboardClient } from "@/components/CityDashboardClient";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
    return allDutchPlaces.map((city) => ({
        city: city.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const city = allDutchPlaces.find((c) => c.slug === resolvedParams.city);

    if (!city) {
        return {
            title: "Stad niet gevonden",
        };
    }

    return {
        title: `Was buiten hangen in ${city.name}? Bekijk de droogscore vandaag`,
        description: `Ontdek of je vandaag de was buiten kan hangen in ${city.name}. Actuele droogscore, beste droogmoment en hoe snel je was droogt per uur.`,
    };
}

export default async function CityPage({ params }: PageProps) {
    const resolvedParams = await params;
    const city = allDutchPlaces.find((c) => c.slug === resolvedParams.city);

    if (!city) {
        notFound();
    }

    const weather = await fetchWeatherData(city.slug);
    if (!weather) {
        notFound();
    }

    const isCoastal = isNearCoast(city.lat, city.lon);

    // Find 4 nearest cities
    const nearbyCities = allDutchPlaces
        .filter((c) => c.slug !== city.slug)
        .map((c) => ({
            name: c.name,
            slug: c.slug,
            distance: getDistance(city.lat, city.lon, c.lat, c.lon),
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 4);

    return (
        <CityDashboardClient
            weather={weather}
            cityInfo={{
                name: city.name,
                isCoastal,
                nearbyCities,
            }}
        />
    );
}
