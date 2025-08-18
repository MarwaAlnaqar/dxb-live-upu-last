
// const params = {
//   title: 'election',
//   run_type: 'live',
//   start_date: 'December 20, 2021 1:15 PM',
//   start_date_max: 'March 20, 2022, 10:30 AM',
//   types: ['election'],
//   statuses: [ 'running'],
//   page: 2,
//   per_page: 3
// }

// const headers = { authorization: 'i89V-AH5V2Qyk7zaYNHt8fyZNRNwPQAZDUVzozRt' }

// export const fetchAllVotes = async () => {
//   const url = new URL("https://secure.electionbuddy.com/api/v2/votes");

//   // ✅ Add query params like in your Ruby code
//   const params = {
//     title: "election",
//     run_type: "live",
//     start_date: "December 20, 2021 1:15 PM",
//     start_date_max: "March 20, 2022, 10:30 AM",
//     types: ["election"], // Array will be repeated in query string
//     statuses: ["created", "completed"], // Array will be repeated in query string
//     page: 2,
//     per_page: 3
//   };

//   // Append params to the URL
//   Object.entries(params).forEach(([key, value]) => {
//     if (Array.isArray(value)) {
//       value.forEach(v => url.searchParams.append(key, v));
//     } else {
//       url.searchParams.append(key, value);
//     }
//   });

//   try {
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         Authorization: "i89V-AH5V2Qyk7zaYNHt8fyZNRNwPQAZDUVzozRt",
//         "Content-Type": "application/json"
//       }
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching votes:", error);
//     throw error;
//   }
// };
// electionService.js
import axios from "axios";
import CryptoJS from "crypto-js";
// import {apiClient} from "./config";
import { ELECTION_BUDDY_CONFIG  } from "./configService.js";
import { apiClient } from "./configService.js";


/**
 * Fetch Election List from ElectionBuddy
 * @param {string} identifier - Voter identifier
 * @returns {Promise<string>} - HTML response
 */
/**
 * Fetch Election List from ElectionBuddy
 * @param {string} oid - Organization ID
 * @param {string} identifier - Voter identifier
 * @param {string} secretToken - Organization Secret Token
 * @returns {Promise<string>} - HTML response body
 */

export async function fetchAllVotes() {
  const url =
    "https://secure.electionbuddy.com/api/v2/votes" 
    +
    "?title=election" +
    "&run_type=live" +
    "&start_date=December+20%2C+2021+1%3A15+PM" +
    "&start_date_max=March+20%2C+2022%2C+10%3A30+AM" +
    "&types=election" +
    "&statuses=created" +
    "&statuses=completed" +
    "&page=2" +
    "&per_page=3";

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "sec-ch-ua-platform": '"Windows"',
        Authorization: "i89V-AH5V2Qyk7zaYNHt8fyZNRNwPQAZDUVzozRt",
        Referer: "http://localhost:5173/",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        "Content-Type": "application/json",
        "sec-ch-ua-mobile": "?0",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Votes:", data);
    return data;
  } catch (err) {
    console.error("Fetch error:", err);
    throw err;
  }
}


export async function getElectionList() {
  const { oid, secretToken, identifier } = ELECTION_BUDDY_CONFIG;

  try {
    const exp = Math.floor(Date.now() / 1000); // Unix epoch seconds

    // Build query string
    const queryValues = new URLSearchParams({
      exp,
      identifier,
      oid,
    });

    const message = queryValues.toString();

    // Generate HMAC-SHA256 signature
    const hash = CryptoJS.HmacSHA256(message, secretToken);
    const signature = CryptoJS.enc.Base64.stringify(hash)
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, ""); // URL-safe

    queryValues.append("signature", signature);

    const url = `/elections?${queryValues.toString()}`; // relative to baseURL

    const response = await apiClient.get(url);

    return response.data;
  } catch (error) {
    console.error("Error fetching election list:", error);
    throw error;
  }
}
