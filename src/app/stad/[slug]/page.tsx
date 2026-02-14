import { allDutchPlaces, fetchWeatherData } from "@/lib/weather";
import { isNearCoast, getDistance } from "@/lib/geo";
import { CityDashboardClient } from "@/components/CityDashboardClient";
import { notFound } from "next/navigation";
import { use } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LegacyCityPage({ params }: PageProps) {
  const resolvedParams = await params;
  const city = allDutchPlaces.find((c) => c.slug === resolvedParams.slug);

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
