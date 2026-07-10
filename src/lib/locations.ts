export type CityData = {
  slug: string;
  name: string;
  region: string;
  province: "ON";
  neighborhoods: string[];
  landmark: string;
  blurb: string;
};

export const targetCities: CityData[] = [
  {
    slug: "markham",
    name: "Markham",
    region: "York Region",
    province: "ON",
    neighborhoods: ["Unionville", "Cornell", "Cathedraltown", "Berczy Village", "Milliken Mills", "Thornhill"],
    landmark: "Markham Civic Centre",
    blurb:
      "Markham is home to Y2 Design & Build's head office, giving us fast response times and deep familiarity with the mix of established properties in Unionville and Thornhill alongside newer builds in Cornell and Berczy Village.",
  },
  {
    slug: "pickering",
    name: "Pickering",
    region: "Durham Region",
    province: "ON",
    neighborhoods: ["Bay Ridges", "Amberlea", "Rougemount", "Highbush", "Duffin Heights"],
    landmark: "Pickering Town Centre",
    blurb:
      "Pickering's mix of lakefront properties in Bay Ridges and family homes across Amberlea and Highbush call for renovation crews who understand both older housing stock and newer subdivisions in this fast-growing Durham Region city.",
  },
  {
    slug: "oakville",
    name: "Oakville",
    region: "Halton Region",
    province: "ON",
    neighborhoods: ["Kerr Village", "Bronte", "Glen Abbey", "Old Oakville", "River Oaks"],
    landmark: "Oakville Harbour",
    blurb:
      "Oakville homeowners in Old Oakville, Bronte, and Glen Abbey often look for high-end finishes and custom design work — the kind of detailed craftsmanship Y2 Design & Build brings to every Halton Region project.",
  },
  {
    slug: "ajax",
    name: "Ajax",
    region: "Durham Region",
    province: "ON",
    neighborhoods: ["Pickering Beach", "South Ajax", "Northeast Ajax", "Audley Village"],
    landmark: "Ajax Waterfront Park",
    blurb:
      "Ajax's planned communities and lakeside neighbourhoods like South Ajax and Audley Village are full of family homes ready for kitchen, bathroom, and basement upgrades from an experienced Durham Region renovation team.",
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    region: "City of Toronto",
    province: "ON",
    neighborhoods: ["Agincourt", "Malvern", "Scarborough Bluffs", "Guildwood", "Bendale"],
    landmark: "Scarborough Bluffs",
    blurb:
      "Scarborough's diverse housing stock — from bungalows near the Scarborough Bluffs to family homes in Agincourt and Malvern — is exactly the kind of varied renovation work Y2 Design & Build tackles across Toronto every week.",
  },
  {
    slug: "toronto",
    name: "Toronto",
    region: "City of Toronto",
    province: "ON",
    neighborhoods: [
      "The Bridle Path",
      "York Mills",
      "Sunnybrook",
      "St. Andrew-Windfields",
      "Hoggs Hollow",
      "Rosedale",
      "Forest Hill South",
      "Forest Hill North",
      "Casa Loma",
      "Moore Park",
      "Lawrence Park",
      "The Annex",
      "Leaside",
      "Summerhill",
      "Bedford Park-Nortown",
      "Kingsway South",
      "Yorkville",
      "Yonge-St. Clair",
      "Willowdale",
      "Wychwood",
    ],
    landmark: "Yorkville",
    blurb:
      "From century homes in Rosedale and Forest Hill to modern condos in Yorkville and Willowdale, Toronto's most distinctive neighbourhoods demand renovation contractors who understand heritage details, Toronto Building permits, and high-end finish standards.",
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return targetCities.find((c) => c.slug === slug);
}

export function formatNeighborhoodList(city: CityData): string {
  if (city.neighborhoods.length <= 5) {
    return city.neighborhoods.join(", ");
  }
  const shown = city.neighborhoods.slice(0, 6).join(", ");
  const remaining = city.neighborhoods.length - 6;
  return `${shown}, and ${remaining} more neighbourhoods across ${city.name}`;
}
