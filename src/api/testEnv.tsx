// pages/api/testEnv.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({
    clientEmail: process.env.GOOGLE_CLIENT_EMAIL, // Notice no "NEXT_PUBLIC_"
    // other variables to test...
  });
}
