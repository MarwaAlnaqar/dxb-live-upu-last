// apiClient.js
import axios from "axios";

export const ELECTION_BUDDY_CONFIG = {
  oid: "107592",            // Replace with your Organization ID
  secretToken: "CYn4ydvs7d594EFFzbuN8413GAM6RzgDCxkQsZth", // ⚠️ Do NOT expose this in production frontend
  identifier:"103925",
  authorization: "hrYMyU7rRPec3oaKMZ2Wu2xzZqiB4DGDXXNGKb-U"
};



export const apiClient = axios.create({
  baseURL: "https://secure.electionbuddy.com/integrations/v2",
  headers: {
    "Authorization": `Bearer ${ELECTION_BUDDY_CONFIG.authorization}`,
    "Content-Type": "application/json"
  }
});

