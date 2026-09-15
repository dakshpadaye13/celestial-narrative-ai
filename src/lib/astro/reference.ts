import type { PlanetId } from "./ephemeris";

export const HOUSE_MEANINGS: { house: number; name: string; theme: string; detail: string }[] = [
  { house: 1, name: "Lagna / Tanu Bhava", theme: "Self, vitality, temperament", detail: "Traditionally read for physical constitution, outlook and the overall tone of the chart." },
  { house: 2, name: "Dhana Bhava", theme: "Resources, speech, family", detail: "Associated with accumulated wealth, nourishment, voice and early family environment." },
  { house: 3, name: "Sahaja Bhava", theme: "Effort, courage, siblings", detail: "Read for initiative, communication, short journeys and self-driven effort." },
  { house: 4, name: "Sukha Bhava", theme: "Home, mother, inner comfort", detail: "Linked to emotional security, property, vehicles and formal schooling." },
  { house: 5, name: "Putra Bhava", theme: "Intellect, creativity, children", detail: "Traditionally connected to higher intelligence, learning capacity, romance and creative output." },
  { house: 6, name: "Ripu Bhava", theme: "Service, obstacles, discipline", detail: "Associated with daily work, competition, debts, health routines and problem solving." },
  { house: 7, name: "Kalatra Bhava", theme: "Partnership, marriage, contracts", detail: "The classical house of spouse, business partners and one-to-one agreements." },
  { house: 8, name: "Ayur Bhava", theme: "Transformation, depth, shared resources", detail: "Read for research, inheritance, sudden change and matters kept private." },
  { house: 9, name: "Dharma Bhava", theme: "Belief, fortune, mentors", detail: "Linked to guidance, higher study, long journeys, ethics and guiding principles." },
  { house: 10, name: "Karma Bhava", theme: "Career, status, public role", detail: "The primary house of profession, visible achievement and responsibility." },
  { house: 11, name: "Labha Bhava", theme: "Gains, networks, aspirations", detail: "Associated with income streams, friendships, communities and fulfilled desires." },
  { house: 12, name: "Vyaya Bhava", theme: "Release, retreat, foreign lands", detail: "Read for expenditure, solitude, travel abroad, rest and inner life." },
];

export const PLANET_NOTES: Record<PlanetId, { sanskrit: string; keywords: string; detail: string }> = {
  Sun: { sanskrit: "Surya", keywords: "Authority, vitality, self", detail: "Traditionally signifies confidence, leadership, father and the will to act." },
  Moon: { sanskrit: "Chandra", keywords: "Mind, emotion, receptivity", detail: "The Moon's sign and nakshatra form the basis of Vimshottari Dasha and describe the emotional nature." },
  Mars: { sanskrit: "Mangala", keywords: "Drive, courage, conflict", detail: "Associated with energy, competition, technical skill and decisiveness." },
  Mercury: { sanskrit: "Budha", keywords: "Intellect, speech, commerce", detail: "Read for analysis, communication, trade, study and adaptability." },
  Jupiter: { sanskrit: "Guru", keywords: "Wisdom, expansion, guidance", detail: "Classically benefic; linked to teachers, ethics, growth, children and higher knowledge." },
  Venus: { sanskrit: "Shukra", keywords: "Harmony, relationships, art", detail: "Signifies attraction, comfort, aesthetics, partnership and refinement." },
  Saturn: { sanskrit: "Shani", keywords: "Discipline, time, endurance", detail: "Read for structure, delay, responsibility and results earned through sustained effort." },
  Rahu: { sanskrit: "Rahu", keywords: "Ambition, novelty, intensity", detail: "A shadow point associated with unconventional paths, foreign matters and strong desire." },
  Ketu: { sanskrit: "Ketu", keywords: "Detachment, insight, release", detail: "A shadow point associated with letting go, specialised skill and inward focus." },
};

export const ZODIAC_INFO: {
  sign: string;
  sanskrit: string;
  glyph: string;
  element: string;
  lord: PlanetId;
  blurb: string;
}[] = [
  { sign: "Aries", sanskrit: "Mesha", glyph: "\u2648", element: "Fire", lord: "Mars", blurb: "Initiative and directness; traditionally read as a cardinal fire sign led by Mars." },
  { sign: "Taurus", sanskrit: "Vrishabha", glyph: "\u2649", element: "Earth", lord: "Venus", blurb: "Stability and sensory comfort; a fixed earth sign associated with Venus." },
  { sign: "Gemini", sanskrit: "Mithuna", glyph: "\u264A", element: "Air", lord: "Mercury", blurb: "Curiosity and exchange; a dual air sign associated with Mercury." },
  { sign: "Cancer", sanskrit: "Karka", glyph: "\u264B", element: "Water", lord: "Moon", blurb: "Protection and memory; a cardinal water sign led by the Moon." },
  { sign: "Leo", sanskrit: "Simha", glyph: "\u264C", element: "Fire", lord: "Sun", blurb: "Presence and self-expression; a fixed fire sign led by the Sun." },
  { sign: "Virgo", sanskrit: "Kanya", glyph: "\u264D", element: "Earth", lord: "Mercury", blurb: "Discernment and craft; a dual earth sign associated with Mercury." },
  { sign: "Libra", sanskrit: "Tula", glyph: "\u264E", element: "Air", lord: "Venus", blurb: "Balance and relationship; a cardinal air sign associated with Venus." },
  { sign: "Scorpio", sanskrit: "Vrischika", glyph: "\u264F", element: "Water", lord: "Mars", blurb: "Depth and resilience; a fixed water sign associated with Mars." },
  { sign: "Sagittarius", sanskrit: "Dhanu", glyph: "\u2650", element: "Fire", lord: "Jupiter", blurb: "Meaning and exploration; a dual fire sign led by Jupiter." },
  { sign: "Capricorn", sanskrit: "Makara", glyph: "\u2651", element: "Earth", lord: "Saturn", blurb: "Structure and perseverance; a cardinal earth sign led by Saturn." },
  { sign: "Aquarius", sanskrit: "Kumbha", glyph: "\u2652", element: "Air", lord: "Saturn", blurb: "Systems and community; a fixed air sign associated with Saturn." },
  { sign: "Pisces", sanskrit: "Meena", glyph: "\u2653", element: "Water", lord: "Jupiter", blurb: "Imagination and compassion; a dual water sign associated with Jupiter." },
];
