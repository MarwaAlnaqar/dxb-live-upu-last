
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
  
}
 const { oid, secretToken, identifier } = ELECTION_BUDDY_CONFIG;

export async function getTheElectionDetail(id) {



   try {
    const response = await fetch(`http://localhost:4000/api/votes/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch votes");
    }
    const data = await response.json(); // parse JSON
    return data;
  } catch (error) {
    console.error(error);
    return [];
}
}
export async function getElectionList() {
 
 
    try {
    const response = await fetch("http://localhost:4000/api/votes");
    if (!response.ok) {
      throw new Error("Failed to fetch votes");
    }
    const data = await response.json(); // parse JSON
    return data;
  } catch (error) {
    console.error(error);
    return [];
  
}
}

export async function getElectionResultsList(id) {
 
 
    try {
      const response = await fetch(`http://localhost:4000/api/votes/${id}/results`);
    if (!response.ok) {
      throw new Error("Failed to fetch votes");
    }
    const data = await response.json(); // parse JSON
    return data;
  } catch (error) {
    console.error(error);
    return [];
  
}
}
export async function getParams(){
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
    return queryValues.toString()
}