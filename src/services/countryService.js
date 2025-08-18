// services/countryService.js
const API_URL = 'https://restcountries.com/v3.1/all?fields=name';
export async function fetchAllCountries() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    const data = await response.json();
    // Optional: sort and map country names

      // Extract only the short "common" names
  let countryNames = data.map(country => country.name.common);

  // Optional: clean up long names by taking first word(s) only
  countryNames = countryNames.map(name => {
    if (name.includes("and")) {
      return name.split("and")[0].trim(); // Keep only before "and"
    }
    return name;
  });
    return countryNames.sort();
  } catch (error) {
    console.error('Error in fetchAllCountries:', error);
    throw error;
  }
}
