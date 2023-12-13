// googleAuth.ts
import { google } from "googleapis";

export const getGoogleAuth = () => {
  const privateKey =
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") || "";
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL || "";

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
};
