export type Place = {
  city: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz: string;
};

/**
 * Curated birthplace directory. Each entry carries an IANA time-zone id so the
 * historical offset (including past DST rules) can be resolved for the actual
 * birth date rather than today's rules.
 */
export const PLACES: Place[] = [
  { city: "Mumbai", region: "Maharashtra", country: "India", lat: 19.076, lon: 72.8777, tz: "Asia/Kolkata" },
  { city: "Delhi", region: "Delhi", country: "India", lat: 28.6139, lon: 77.209, tz: "Asia/Kolkata" },
  { city: "Bengaluru", region: "Karnataka", country: "India", lat: 12.9716, lon: 77.5946, tz: "Asia/Kolkata" },
  { city: "Hyderabad", region: "Telangana", country: "India", lat: 17.385, lon: 78.4867, tz: "Asia/Kolkata" },
  { city: "Chennai", region: "Tamil Nadu", country: "India", lat: 13.0827, lon: 80.2707, tz: "Asia/Kolkata" },
  { city: "Kolkata", region: "West Bengal", country: "India", lat: 22.5726, lon: 88.3639, tz: "Asia/Kolkata" },
  { city: "Pune", region: "Maharashtra", country: "India", lat: 18.5204, lon: 73.8567, tz: "Asia/Kolkata" },
  { city: "Ahmedabad", region: "Gujarat", country: "India", lat: 23.0225, lon: 72.5714, tz: "Asia/Kolkata" },
  { city: "Surat", region: "Gujarat", country: "India", lat: 21.1702, lon: 72.8311, tz: "Asia/Kolkata" },
  { city: "Jaipur", region: "Rajasthan", country: "India", lat: 26.9124, lon: 75.7873, tz: "Asia/Kolkata" },
  { city: "Lucknow", region: "Uttar Pradesh", country: "India", lat: 26.8467, lon: 80.9462, tz: "Asia/Kolkata" },
  { city: "Kanpur", region: "Uttar Pradesh", country: "India", lat: 26.4499, lon: 80.3319, tz: "Asia/Kolkata" },
  { city: "Nagpur", region: "Maharashtra", country: "India", lat: 21.1458, lon: 79.0882, tz: "Asia/Kolkata" },
  { city: "Indore", region: "Madhya Pradesh", country: "India", lat: 22.7196, lon: 75.8577, tz: "Asia/Kolkata" },
  { city: "Bhopal", region: "Madhya Pradesh", country: "India", lat: 23.2599, lon: 77.4126, tz: "Asia/Kolkata" },
  { city: "Patna", region: "Bihar", country: "India", lat: 25.5941, lon: 85.1376, tz: "Asia/Kolkata" },
  { city: "Varanasi", region: "Uttar Pradesh", country: "India", lat: 25.3176, lon: 82.9739, tz: "Asia/Kolkata" },
  { city: "Chandigarh", region: "Chandigarh", country: "India", lat: 30.7333, lon: 76.7794, tz: "Asia/Kolkata" },
  { city: "Amritsar", region: "Punjab", country: "India", lat: 31.634, lon: 74.8723, tz: "Asia/Kolkata" },
  { city: "Ludhiana", region: "Punjab", country: "India", lat: 30.901, lon: 75.8573, tz: "Asia/Kolkata" },
  { city: "Coimbatore", region: "Tamil Nadu", country: "India", lat: 11.0168, lon: 76.9558, tz: "Asia/Kolkata" },
  { city: "Madurai", region: "Tamil Nadu", country: "India", lat: 9.9252, lon: 78.1198, tz: "Asia/Kolkata" },
  { city: "Kochi", region: "Kerala", country: "India", lat: 9.9312, lon: 76.2673, tz: "Asia/Kolkata" },
  { city: "Thiruvananthapuram", region: "Kerala", country: "India", lat: 8.5241, lon: 76.9366, tz: "Asia/Kolkata" },
  { city: "Visakhapatnam", region: "Andhra Pradesh", country: "India", lat: 17.6868, lon: 83.2185, tz: "Asia/Kolkata" },
  { city: "Vijayawada", region: "Andhra Pradesh", country: "India", lat: 16.5062, lon: 80.648, tz: "Asia/Kolkata" },
  { city: "Bhubaneswar", region: "Odisha", country: "India", lat: 20.2961, lon: 85.8245, tz: "Asia/Kolkata" },
  { city: "Guwahati", region: "Assam", country: "India", lat: 26.1445, lon: 91.7362, tz: "Asia/Kolkata" },
  { city: "Ranchi", region: "Jharkhand", country: "India", lat: 23.3441, lon: 85.3096, tz: "Asia/Kolkata" },
  { city: "Raipur", region: "Chhattisgarh", country: "India", lat: 21.2514, lon: 81.6296, tz: "Asia/Kolkata" },
  { city: "Dehradun", region: "Uttarakhand", country: "India", lat: 30.3165, lon: 78.0322, tz: "Asia/Kolkata" },
  { city: "Srinagar", region: "Jammu & Kashmir", country: "India", lat: 34.0837, lon: 74.7973, tz: "Asia/Kolkata" },
  { city: "Goa (Panaji)", region: "Goa", country: "India", lat: 15.4909, lon: 73.8278, tz: "Asia/Kolkata" },
  { city: "Mysuru", region: "Karnataka", country: "India", lat: 12.2958, lon: 76.6394, tz: "Asia/Kolkata" },
  { city: "Nashik", region: "Maharashtra", country: "India", lat: 19.9975, lon: 73.7898, tz: "Asia/Kolkata" },
  { city: "Agra", region: "Uttar Pradesh", country: "India", lat: 27.1767, lon: 78.0081, tz: "Asia/Kolkata" },
  { city: "Jodhpur", region: "Rajasthan", country: "India", lat: 26.2389, lon: 73.0243, tz: "Asia/Kolkata" },
  { city: "Kathmandu", region: "Bagmati", country: "Nepal", lat: 27.7172, lon: 85.324, tz: "Asia/Kathmandu" },
  { city: "Colombo", region: "Western", country: "Sri Lanka", lat: 6.9271, lon: 79.8612, tz: "Asia/Colombo" },
  { city: "Dhaka", region: "Dhaka", country: "Bangladesh", lat: 23.8103, lon: 90.4125, tz: "Asia/Dhaka" },
  { city: "Karachi", region: "Sindh", country: "Pakistan", lat: 24.8607, lon: 67.0011, tz: "Asia/Karachi" },
  { city: "Lahore", region: "Punjab", country: "Pakistan", lat: 31.5204, lon: 74.3587, tz: "Asia/Karachi" },
  { city: "Dubai", region: "Dubai", country: "UAE", lat: 25.2048, lon: 55.2708, tz: "Asia/Dubai" },
  { city: "Abu Dhabi", region: "Abu Dhabi", country: "UAE", lat: 24.4539, lon: 54.3773, tz: "Asia/Dubai" },
  { city: "Doha", region: "Doha", country: "Qatar", lat: 25.2854, lon: 51.531, tz: "Asia/Qatar" },
  { city: "Riyadh", region: "Riyadh", country: "Saudi Arabia", lat: 24.7136, lon: 46.6753, tz: "Asia/Riyadh" },
  { city: "Singapore", region: "Singapore", country: "Singapore", lat: 1.3521, lon: 103.8198, tz: "Asia/Singapore" },
  { city: "Kuala Lumpur", region: "Selangor", country: "Malaysia", lat: 3.139, lon: 101.6869, tz: "Asia/Kuala_Lumpur" },
  { city: "Bangkok", region: "Bangkok", country: "Thailand", lat: 13.7563, lon: 100.5018, tz: "Asia/Bangkok" },
  { city: "Jakarta", region: "Jakarta", country: "Indonesia", lat: -6.2088, lon: 106.8456, tz: "Asia/Jakarta" },
  { city: "Manila", region: "Metro Manila", country: "Philippines", lat: 14.5995, lon: 120.9842, tz: "Asia/Manila" },
  { city: "Hong Kong", region: "Hong Kong", country: "China", lat: 22.3193, lon: 114.1694, tz: "Asia/Hong_Kong" },
  { city: "Shanghai", region: "Shanghai", country: "China", lat: 31.2304, lon: 121.4737, tz: "Asia/Shanghai" },
  { city: "Beijing", region: "Beijing", country: "China", lat: 39.9042, lon: 116.4074, tz: "Asia/Shanghai" },
  { city: "Tokyo", region: "Tokyo", country: "Japan", lat: 35.6762, lon: 139.6503, tz: "Asia/Tokyo" },
  { city: "Seoul", region: "Seoul", country: "South Korea", lat: 37.5665, lon: 126.978, tz: "Asia/Seoul" },
  { city: "Sydney", region: "New South Wales", country: "Australia", lat: -33.8688, lon: 151.2093, tz: "Australia/Sydney" },
  { city: "Melbourne", region: "Victoria", country: "Australia", lat: -37.8136, lon: 144.9631, tz: "Australia/Melbourne" },
  { city: "Perth", region: "Western Australia", country: "Australia", lat: -31.9523, lon: 115.8613, tz: "Australia/Perth" },
  { city: "Auckland", region: "Auckland", country: "New Zealand", lat: -36.8485, lon: 174.7633, tz: "Pacific/Auckland" },
  { city: "London", region: "England", country: "United Kingdom", lat: 51.5072, lon: -0.1276, tz: "Europe/London" },
  { city: "Manchester", region: "England", country: "United Kingdom", lat: 53.4808, lon: -2.2426, tz: "Europe/London" },
  { city: "Dublin", region: "Leinster", country: "Ireland", lat: 53.3498, lon: -6.2603, tz: "Europe/Dublin" },
  { city: "Paris", region: "Ile-de-France", country: "France", lat: 48.8566, lon: 2.3522, tz: "Europe/Paris" },
  { city: "Berlin", region: "Berlin", country: "Germany", lat: 52.52, lon: 13.405, tz: "Europe/Berlin" },
  { city: "Munich", region: "Bavaria", country: "Germany", lat: 48.1351, lon: 11.582, tz: "Europe/Berlin" },
  { city: "Amsterdam", region: "North Holland", country: "Netherlands", lat: 52.3676, lon: 4.9041, tz: "Europe/Amsterdam" },
  { city: "Madrid", region: "Madrid", country: "Spain", lat: 40.4168, lon: -3.7038, tz: "Europe/Madrid" },
  { city: "Barcelona", region: "Catalonia", country: "Spain", lat: 41.3874, lon: 2.1686, tz: "Europe/Madrid" },
  { city: "Rome", region: "Lazio", country: "Italy", lat: 41.9028, lon: 12.4964, tz: "Europe/Rome" },
  { city: "Zurich", region: "Zurich", country: "Switzerland", lat: 47.3769, lon: 8.5417, tz: "Europe/Zurich" },
  { city: "Vienna", region: "Vienna", country: "Austria", lat: 48.2082, lon: 16.3738, tz: "Europe/Vienna" },
  { city: "Stockholm", region: "Stockholm", country: "Sweden", lat: 59.3293, lon: 18.0686, tz: "Europe/Stockholm" },
  { city: "Oslo", region: "Oslo", country: "Norway", lat: 59.9139, lon: 10.7522, tz: "Europe/Oslo" },
  { city: "Copenhagen", region: "Capital", country: "Denmark", lat: 55.6761, lon: 12.5683, tz: "Europe/Copenhagen" },
  { city: "Warsaw", region: "Masovia", country: "Poland", lat: 52.2297, lon: 21.0122, tz: "Europe/Warsaw" },
  { city: "Moscow", region: "Moscow", country: "Russia", lat: 55.7558, lon: 37.6173, tz: "Europe/Moscow" },
  { city: "Istanbul", region: "Istanbul", country: "Turkey", lat: 41.0082, lon: 28.9784, tz: "Europe/Istanbul" },
  { city: "Athens", region: "Attica", country: "Greece", lat: 37.9838, lon: 23.7275, tz: "Europe/Athens" },
  { city: "Lisbon", region: "Lisbon", country: "Portugal", lat: 38.7223, lon: -9.1393, tz: "Europe/Lisbon" },
  { city: "Cairo", region: "Cairo", country: "Egypt", lat: 30.0444, lon: 31.2357, tz: "Africa/Cairo" },
  { city: "Nairobi", region: "Nairobi", country: "Kenya", lat: -1.2921, lon: 36.8219, tz: "Africa/Nairobi" },
  { city: "Lagos", region: "Lagos", country: "Nigeria", lat: 6.5244, lon: 3.3792, tz: "Africa/Lagos" },
  { city: "Johannesburg", region: "Gauteng", country: "South Africa", lat: -26.2041, lon: 28.0473, tz: "Africa/Johannesburg" },
  { city: "Cape Town", region: "Western Cape", country: "South Africa", lat: -33.9249, lon: 18.4241, tz: "Africa/Johannesburg" },
  { city: "New York", region: "New York", country: "United States", lat: 40.7128, lon: -74.006, tz: "America/New_York" },
  { city: "Boston", region: "Massachusetts", country: "United States", lat: 42.3601, lon: -71.0589, tz: "America/New_York" },
  { city: "Washington DC", region: "DC", country: "United States", lat: 38.9072, lon: -77.0369, tz: "America/New_York" },
  { city: "Atlanta", region: "Georgia", country: "United States", lat: 33.749, lon: -84.388, tz: "America/New_York" },
  { city: "Chicago", region: "Illinois", country: "United States", lat: 41.8781, lon: -87.6298, tz: "America/Chicago" },
  { city: "Houston", region: "Texas", country: "United States", lat: 29.7604, lon: -95.3698, tz: "America/Chicago" },
  { city: "Dallas", region: "Texas", country: "United States", lat: 32.7767, lon: -96.797, tz: "America/Chicago" },
  { city: "Denver", region: "Colorado", country: "United States", lat: 39.7392, lon: -104.9903, tz: "America/Denver" },
  { city: "Phoenix", region: "Arizona", country: "United States", lat: 33.4484, lon: -112.074, tz: "America/Phoenix" },
  { city: "Seattle", region: "Washington", country: "United States", lat: 47.6062, lon: -122.3321, tz: "America/Los_Angeles" },
  { city: "San Francisco", region: "California", country: "United States", lat: 37.7749, lon: -122.4194, tz: "America/Los_Angeles" },
  { city: "Los Angeles", region: "California", country: "United States", lat: 34.0522, lon: -118.2437, tz: "America/Los_Angeles" },
  { city: "San Jose", region: "California", country: "United States", lat: 37.3382, lon: -121.8863, tz: "America/Los_Angeles" },
  { city: "Toronto", region: "Ontario", country: "Canada", lat: 43.6532, lon: -79.3832, tz: "America/Toronto" },
  { city: "Vancouver", region: "British Columbia", country: "Canada", lat: 49.2827, lon: -123.1207, tz: "America/Vancouver" },
  { city: "Mexico City", region: "CDMX", country: "Mexico", lat: 19.4326, lon: -99.1332, tz: "America/Mexico_City" },
  { city: "Sao Paulo", region: "Sao Paulo", country: "Brazil", lat: -23.5505, lon: -46.6333, tz: "America/Sao_Paulo" },
  { city: "Rio de Janeiro", region: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lon: -43.1729, tz: "America/Sao_Paulo" },
  { city: "Buenos Aires", region: "Buenos Aires", country: "Argentina", lat: -34.6037, lon: -58.3816, tz: "America/Argentina/Buenos_Aires" },
  { city: "Santiago", region: "Santiago", country: "Chile", lat: -33.4489, lon: -70.6693, tz: "America/Santiago" },
  { city: "Bogota", region: "Bogota", country: "Colombia", lat: 4.711, lon: -74.0721, tz: "America/Bogota" },
  { city: "Lima", region: "Lima", country: "Peru", lat: -12.0464, lon: -77.0428, tz: "America/Lima" },
];

export function searchPlaces(query: string, limit = 8): Place[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return PLACES.filter(
    (p) =>
      p.city.toLowerCase().includes(q) ||
      p.region.toLowerCase().includes(q) ||
      p.country.toLowerCase().includes(q),
  ).slice(0, limit);
}

export function placeLabel(p: Place) {
  return `${p.city}, ${p.region}, ${p.country}`;
}

/**
 * Offset (minutes east of UTC) that the given IANA zone had at a specific
 * instant. Uses the runtime tz database, so historical and DST rules apply.
 */
export function zoneOffsetMinutes(tz: string, utcMillis: number): number {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const parts = dtf.formatToParts(new Date(utcMillis));
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? "0");
  const asUTC = Date.UTC(
    get("year"),
    get("month") - 1,
    get("day"),
    get("hour") % 24,
    get("minute"),
    get("second"),
  );
  return Math.round((asUTC - utcMillis) / 60000);
}

/**
 * Convert a local wall-clock birth date/time in an IANA zone to a UTC instant,
 * resolving the offset that was actually in force on that date.
 */
export function localToUtcMillis(dateISO: string, timeHHMM: string, tz: string) {
  const [y, m, d] = dateISO.split("-").map(Number);
  const [hh, mm] = timeHHMM.split(":").map(Number);
  const naive = Date.UTC(y!, (m ?? 1) - 1, d ?? 1, hh ?? 0, mm ?? 0, 0);
  let offset = zoneOffsetMinutes(tz, naive);
  let utc = naive - offset * 60000;
  // Second pass handles DST boundaries.
  offset = zoneOffsetMinutes(tz, utc);
  utc = naive - offset * 60000;
  return { utcMillis: utc, offsetMinutes: offset };
}

export function formatOffset(minutes: number) {
  const sign = minutes < 0 ? "-" : "+";
  const abs = Math.abs(minutes);
  return `UTC${sign}${String(Math.floor(abs / 60)).padStart(2, "0")}:${String(abs % 60).padStart(2, "0")}`;
}
