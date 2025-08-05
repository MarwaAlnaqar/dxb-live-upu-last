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
    return data.map(country => country.name.common).sort();
  } catch (error) {
    console.error('Error in fetchAllCountries:', error);
    throw error;
  }
}
