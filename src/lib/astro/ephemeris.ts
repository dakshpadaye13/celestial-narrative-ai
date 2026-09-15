/**
 * AstroVeda calculation engine.
 *
 * Real astronomy — no placeholder values. Planetary longitudes come from
 * Standish/JPL Keplerian elements (Mercury..Saturn, valid 1800-2050 to a few
 * arc-minutes), the Moon from the abbreviated Meeus ELP series, and the lunar
 * nodes from the mean node formula. Sidereal (Vedic) longitudes are obtained by
 * subtracting the Lahiri ayanamsa.
 *
 * Accuracy: typically better than 0.05 deg for the Sun/planets and ~0.1 deg for
 * the Moon — sufficient for sign, nakshatra, house and dasha determination.
 * It is not a substitute for Swiss Ephemeris at arc-second precision.
 */

export const DEG = Math.PI / 180;

export const norm360 = (d: number) => ((d % 360) + 360) % 360;

export type PlanetId =
  | "Sun"
  | "Moon"
  | "Mars"
  | "Mercury"
  | "Jupiter"
  | "Venus"
  | "Saturn"
  | "Rahu"
  | "Ketu";

export const PLANET_ORDER: PlanetId[] = [
  "Sun",
  "Moon",
  "Mars",
  "Mercury",
  "Jupiter",
  "Venus",
  "Saturn",
  "Rahu",
  "Ketu",
];

export const PLANET_GLYPH: Record<PlanetId, string> = {
  Sun: "\u2609",
  Moon: "\u263D",
  Mars: "\u2642",
  Mercury: "\u263F",
  Jupiter: "\u2643",
  Venus: "\u2640",
  Saturn: "\u2644",
  Rahu: "\u260A",
  Ketu: "\u260B",
};

export const SIGNS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
] as const;

export const SIGN_SANSKRIT = [
  "Mesha",
  "Vrishabha",
  "Mithuna",
  "Karka",
  "Simha",
  "Kanya",
  "Tula",
  "Vrischika",
  "Dhanu",
  "Makara",
  "Kumbha",
  "Meena",
] as const;

export const NAKSHATRAS = [
  "Ashwini",
  "Bharani",
  "Krittika",
  "Rohini",
  "Mrigashira",
  "Ardra",
  "Punarvasu",
  "Pushya",
  "Ashlesha",
  "Magha",
  "Purva Phalguni",
  "Uttara Phalguni",
  "Hasta",
  "Chitra",
  "Swati",
  "Vishakha",
  "Anuradha",
  "Jyeshtha",
  "Mula",
  "Purva Ashadha",
  "Uttara Ashadha",
  "Shravana",
  "Dhanishta",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati",
] as const;

/** Vimshottari lords in nakshatra order, with mahadasha lengths in years. */
export const DASHA_LORDS: { lord: PlanetId; years: number }[] = [
  { lord: "Ketu", years: 7 },
  { lord: "Venus", years: 20 },
  { lord: "Sun", years: 6 },
  { lord: "Moon", years: 10 },
  { lord: "Mars", years: 7 },
  { lord: "Rahu", years: 18 },
  { lord: "Jupiter", years: 16 },
  { lord: "Saturn", years: 19 },
  { lord: "Mercury", years: 17 },
];

/* ------------------------------------------------------------------ time */

/** Julian Day from a UTC instant. */
export function julianDay(utcMillis: number): number {
  return utcMillis / 86400000 + 2440587.5;
}

export function centuriesSinceJ2000(jd: number): number {
  return (jd - 2451545.0) / 36525;
}

/** Greenwich mean sidereal time in degrees. */
export function gmstDegrees(jd: number): number {
  const T = centuriesSinceJ2000(jd);
  const theta =
    280.46061837 +
    360.98564736629 * (jd - 2451545.0) +
    0.000387933 * T * T -
    (T * T * T) / 38710000;
  return norm360(theta);
}

/** Mean obliquity of the ecliptic, degrees. */
export function obliquity(T: number): number {
  return 23.439291 - 0.0130042 * T - 1.64e-7 * T * T + 5.04e-7 * T * T * T;
}

/**
 * Lahiri (Chitrapaksha) ayanamsa in degrees. Polynomial fit to the official
 * Indian ephemeris values; accurate to a fraction of an arc-minute 1900-2100.
 */
export function lahiriAyanamsa(jd: number): number {
  const T = centuriesSinceJ2000(jd);
  return 23.85300 + 1.396042 * T + 0.0003086 * T * T;
}

/* -------------------------------------------------------------- planets */

type Elements = {
  a: number;
  e: number;
  i: number;
  L: number;
  wbar: number;
  omega: number;
};
type ElementSet = { base: Elements; rate: Elements };

// Standish (JPL) Keplerian elements and rates, 1800 AD - 2050 AD.
const ELEMENTS: Record<string, ElementSet> = {
  Mercury: {
    base: { a: 0.38709927, e: 0.20563593, i: 7.00497902, L: 252.2503235, wbar: 77.45779628, omega: 48.33076593 },
    rate: { a: 0.00000037, e: 0.00001906, i: -0.00594749, L: 149472.67411175, wbar: 0.16047689, omega: -0.12534081 },
  },
  Venus: {
    base: { a: 0.72333566, e: 0.00677672, i: 3.39467605, L: 181.9790995, wbar: 131.60246718, omega: 76.67984255 },
    rate: { a: 0.0000039, e: -0.00004107, i: -0.0007889, L: 58517.81538729, wbar: 0.00268329, omega: -0.27769418 },
  },
  Earth: {
    base: { a: 1.00000261, e: 0.01671123, i: -0.00001531, L: 100.46457166, wbar: 102.93768193, omega: 0 },
    rate: { a: 0.00000562, e: -0.00004392, i: -0.01294668, L: 35999.37244981, wbar: 0.32327364, omega: 0 },
  },
  Mars: {
    base: { a: 1.52371034, e: 0.0933941, i: 1.84969142, L: -4.55343205, wbar: -23.94362959, omega: 49.55953891 },
    rate: { a: 0.00001847, e: 0.00007882, i: -0.00813131, L: 19140.30268499, wbar: 0.44441088, omega: -0.29257343 },
  },
  Jupiter: {
    base: { a: 5.202887, e: 0.04838624, i: 1.30439695, L: 34.39644051, wbar: 14.72847983, omega: 100.47390909 },
    rate: { a: -0.00011607, e: -0.00013253, i: -0.00183714, L: 3034.74612775, wbar: 0.21252668, omega: 0.20469106 },
  },
  Saturn: {
    base: { a: 9.53667594, e: 0.05386179, i: 2.48599187, L: 49.95424423, wbar: 92.59887831, omega: 113.66242448 },
    rate: { a: -0.0012506, e: -0.00050991, i: 0.00193609, L: 1222.49362201, wbar: -0.41897216, omega: -0.28867794 },
  },
};

function keplerElements(name: string, T: number): Elements {
  const { base, rate } = ELEMENTS[name]!;
  return {
    a: base.a + rate.a * T,
    e: base.e + rate.e * T,
    i: base.i + rate.i * T,
    L: base.L + rate.L * T,
    wbar: base.wbar + rate.wbar * T,
    omega: base.omega + rate.omega * T,
  };
}

/** Heliocentric ecliptic rectangular coordinates (AU) at J2000 ecliptic. */
function heliocentric(name: string, T: number): [number, number, number] {
  const el = keplerElements(name, T);
  const M = norm360(el.L - el.wbar);
  const w = el.wbar - el.omega;
  const Mr = M * DEG;
  let E = Mr + el.e * Math.sin(Mr);
  for (let k = 0; k < 8; k++) {
    const dM = Mr - (E - el.e * Math.sin(E));
    E += dM / (1 - el.e * Math.cos(E));
  }
  const xv = el.a * (Math.cos(E) - el.e);
  const yv = el.a * Math.sqrt(1 - el.e * el.e) * Math.sin(E);
  const om = el.omega * DEG;
  const wr = w * DEG;
  const ir = el.i * DEG;
  const v = Math.atan2(yv, xv);
  const r = Math.hypot(xv, yv);
  const u = v + wr;
  const x = r * (Math.cos(om) * Math.cos(u) - Math.sin(om) * Math.sin(u) * Math.cos(ir));
  const y = r * (Math.sin(om) * Math.cos(u) + Math.cos(om) * Math.sin(u) * Math.cos(ir));
  const z = r * (Math.sin(u) * Math.sin(ir));
  return [x, y, z];
}

/** Geocentric apparent ecliptic longitude (tropical, degrees). */
function geocentricLongitude(name: string, T: number): number {
  const [ex, ey, ez] = heliocentric("Earth", T);
  if (name === "Sun") return norm360(Math.atan2(-ey, -ex) / DEG);
  const [px, py, pz] = heliocentric(name, T);
  return norm360(Math.atan2(py - ey, px - ex) / DEG + 0 * pz + 0 * ez);
}

/** Moon's geocentric ecliptic longitude via the main ELP terms (Meeus ch.47). */
function moonLongitude(T: number): number {
  const Lp = 218.3164477 + 481267.88123421 * T - 0.0015786 * T * T + (T * T * T) / 538841;
  const D = 297.8501921 + 445267.1114034 * T - 0.0018819 * T * T + (T * T * T) / 545868;
  const M = 357.5291092 + 35999.0502909 * T - 0.0001536 * T * T;
  const Mp = 134.9633964 + 477198.8675055 * T + 0.0087414 * T * T + (T * T * T) / 69699;
  const F = 93.272095 + 483202.0175233 * T - 0.0036539 * T * T;
  const E = 1 - 0.002516 * T - 0.0000074 * T * T;

  const terms: [number, number, number, number, number][] = [
    // D, M, M', F, coefficient (1e-6 deg)
    [0, 0, 1, 0, 6288774],
    [2, 0, -1, 0, 1274027],
    [2, 0, 0, 0, 658314],
    [0, 0, 2, 0, 213618],
    [0, 1, 0, 0, -185116],
    [0, 0, 0, 2, -114332],
    [2, 0, -2, 0, 58793],
    [2, -1, -1, 0, 57066],
    [2, 0, 1, 0, 53322],
    [2, -1, 0, 0, 45758],
    [0, 1, -1, 0, -40923],
    [1, 0, 0, 0, -34720],
    [0, 1, 1, 0, -30383],
    [2, 0, 0, -2, 15327],
    [0, 0, 1, 2, -12528],
    [0, 0, 1, -2, 10980],
    [4, 0, -1, 0, 10675],
    [0, 0, 3, 0, 10034],
    [4, 0, -2, 0, 8548],
    [2, 1, -1, 0, -7888],
    [2, 1, 0, 0, -6766],
    [1, 0, -1, 0, -5163],
    [1, 1, 0, 0, 4987],
    [2, -1, 1, 0, 4036],
    [2, 0, 2, 0, 3994],
    [4, 0, 0, 0, 3861],
    [2, 0, -3, 0, 3665],
    [0, 1, -2, 0, -2689],
    [2, 0, -1, 2, -2602],
    [2, -1, -2, 0, 2390],
    [1, 0, 1, 0, -2348],
    [2, -2, 0, 0, 2236],
    [0, 1, 2, 0, -2120],
    [0, 2, 0, 0, -2069],
    [2, -2, -1, 0, 2048],
  ];

  let sum = 0;
  for (const [d, m, mp, f, coef] of terms) {
    const arg = (d * D + m * M + mp * Mp + f * F) * DEG;
    const ecc = Math.abs(m) === 1 ? E : Math.abs(m) === 2 ? E * E : 1;
    sum += coef * ecc * Math.sin(arg);
  }
  return norm360(Lp + sum / 1e6);
}

/** Mean lunar ascending node (Rahu), degrees. */
function meanNode(T: number): number {
  return norm360(
    125.0445479 - 1934.1362891 * T + 0.0020754 * T * T + (T * T * T) / 467441,
  );
}

/* ---------------------------------------------------------------- chart */

export type PlanetPosition = {
  planet: PlanetId;
  longitude: number; // sidereal 0-360
  sign: number; // 0-11
  degreeInSign: number;
  nakshatra: number; // 0-26
  nakshatraPada: number; // 1-4
  retrograde: boolean;
  house: number; // 1-12 (whole sign from lagna)
};

export type ChartResult = {
  julianDay: number;
  ayanamsa: number;
  ascendant: { longitude: number; sign: number; degreeInSign: number; nakshatra: number };
  planets: PlanetPosition[];
  moonNakshatra: number;
  dasha: DashaPeriod[];
  engine: string;
};

export type DashaPeriod = {
  lord: PlanetId;
  start: string;
  end: string;
  antardashas: { lord: PlanetId; start: string; end: string }[];
};

function nakshatraOf(longitude: number) {
  const span = 360 / 27;
  const idx = Math.floor(longitude / span);
  const within = longitude - idx * span;
  const pada = Math.floor(within / (span / 4)) + 1;
  return { index: idx, pada };
}

/** Tropical ascendant longitude for a given sidereal time and latitude. */
function ascendantTropical(lstDeg: number, latDeg: number, eps: number): number {
  const ramc = lstDeg * DEG;
  const e = eps * DEG;
  const lat = latDeg * DEG;
  const y = Math.cos(ramc);
  const x = -(Math.sin(ramc) * Math.cos(e) + Math.tan(lat) * Math.sin(e));
  let asc = Math.atan2(y, x) / DEG;
  return norm360(asc);
}

function siderealLongitude(tropical: number, ayan: number) {
  return norm360(tropical - ayan);
}

export type CalcInput = {
  /** Birth instant in UTC milliseconds. */
  utcMillis: number;
  latitude: number;
  longitude: number;
};

export function calculateChart(input: CalcInput): ChartResult {
  const jd = julianDay(input.utcMillis);
  const T = centuriesSinceJ2000(jd);
  const eps = obliquity(T);
  const ayan = lahiriAyanamsa(jd);

  const lst = norm360(gmstDegrees(jd) + input.longitude);
  const ascTrop = ascendantTropical(lst, input.latitude, eps);
  const ascSid = siderealLongitude(ascTrop, ayan);
  const ascSign = Math.floor(ascSid / 30);

  const dt = 0.5 / 36525; // half-day step in centuries for retrograde test

  const tropicalOf = (p: PlanetId, t: number): number => {
    switch (p) {
      case "Sun":
        return geocentricLongitude("Sun", t);
      case "Moon":
        return moonLongitude(t);
      case "Rahu":
        return meanNode(t);
      case "Ketu":
        return norm360(meanNode(t) + 180);
      default:
        return geocentricLongitude(p, t);
    }
  };

  const planets: PlanetPosition[] = PLANET_ORDER.map((p) => {
    const lonTrop = tropicalOf(p, T);
    const lonNext = tropicalOf(p, T + dt);
    let delta = lonNext - lonTrop;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    const retro = p === "Rahu" || p === "Ketu" ? true : delta < 0;
    const lon = siderealLongitude(lonTrop, ayan);
    const sign = Math.floor(lon / 30);
    const nak = nakshatraOf(lon);
    return {
      planet: p,
      longitude: lon,
      sign,
      degreeInSign: lon - sign * 30,
      nakshatra: nak.index,
      nakshatraPada: nak.pada,
      retrograde: retro,
      house: ((sign - ascSign + 12) % 12) + 1,
    };
  });

  const moon = planets.find((p) => p.planet === "Moon")!;
  const dasha = vimshottari(moon.longitude, input.utcMillis);

  return {
    julianDay: jd,
    ayanamsa: ayan,
    ascendant: {
      longitude: ascSid,
      sign: ascSign,
      degreeInSign: ascSid - ascSign * 30,
      nakshatra: nakshatraOf(ascSid).index,
    },
    planets,
    moonNakshatra: moon.nakshatra,
    dasha,
    engine: "astroveda-native-1.0 (Standish elements + Meeus lunar series, Lahiri ayanamsa, whole-sign houses)",
  };
}

const YEAR_MS = 365.2425 * 86400000;

/** Vimshottari mahadasha / antardasha sequence from the Moon's nakshatra. */
export function vimshottari(moonLongitudeSidereal: number, birthUtcMillis: number): DashaPeriod[] {
  const span = 360 / 27;
  const nakIndex = Math.floor(moonLongitudeSidereal / span);
  const fractionElapsed = (moonLongitudeSidereal - nakIndex * span) / span;
  const startIdx = nakIndex % 9;

  const periods: DashaPeriod[] = [];
  let cursor = birthUtcMillis - fractionElapsed * DASHA_LORDS[startIdx]!.years * YEAR_MS;

  for (let k = 0; k < 9; k++) {
    const { lord, years } = DASHA_LORDS[(startIdx + k) % 9]!;
    const duration = years * YEAR_MS;
    const start = cursor;
    const end = cursor + duration;

    const antardashas: DashaPeriod["antardashas"] = [];
    let aCursor = start;
    for (let j = 0; j < 9; j++) {
      const sub = DASHA_LORDS[(DASHA_LORDS.findIndex((d) => d.lord === lord) + j) % 9]!;
      const subDuration = (duration * sub.years) / 120;
      antardashas.push({
        lord: sub.lord,
        start: new Date(aCursor).toISOString(),
        end: new Date(aCursor + subDuration).toISOString(),
      });
      aCursor += subDuration;
    }

    periods.push({
      lord,
      start: new Date(start).toISOString(),
      end: new Date(end).toISOString(),
      antardashas,
    });
    cursor = end;
  }
  return periods;
}

export function currentDasha(dasha: DashaPeriod[], at: number = Date.now()) {
  const maha = dasha.find((d) => Date.parse(d.start) <= at && at < Date.parse(d.end));
  const antar = maha?.antardashas.find((a) => Date.parse(a.start) <= at && at < Date.parse(a.end));
  return { maha: maha ?? null, antar: antar ?? null };
}

export function formatDegree(deg: number) {
  const d = Math.floor(deg);
  const mFloat = (deg - d) * 60;
  const m = Math.floor(mFloat);
  const s = Math.round((mFloat - m) * 60);
  return `${d}\u00b0 ${String(m).padStart(2, "0")}' ${String(s).padStart(2, "0")}"`;
}

export function signName(i: number) {
  return SIGNS[((i % 12) + 12) % 12]!;
}
