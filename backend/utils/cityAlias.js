// Maps common Indian city name variants to one canonical spelling so that
// city-based lookups don't break when a geocoding provider (Geoapify) returns
// a different name than what was saved earlier (e.g. "Bangalore" vs "Bengaluru").
const CITY_ALIASES = {
    bangalore: "Bengaluru",
    bengaluru: "Bengaluru",
    bombay: "Mumbai",
    mumbai: "Mumbai",
    calcutta: "Kolkata",
    kolkata: "Kolkata",
    madras: "Chennai",
    chennai: "Chennai",
    trivandrum: "Thiruvananthapuram",
    thiruvananthapuram: "Thiruvananthapuram",
    mysore: "Mysuru",
    mysuru: "Mysuru",
    pondicherry: "Puducherry",
    puducherry: "Puducherry",
    baroda: "Vadodara",
    vadodara: "Vadodara",
    gurgaon: "Gurugram",
    gurugram: "Gurugram",
    allahabad: "Prayagraj",
    prayagraj: "Prayagraj",
}

export const normalizeCity = (city) => {
    if (!city) return city
    const key = city.trim().toLowerCase()
    return CITY_ALIASES[key] || city.trim()
}
