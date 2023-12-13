// pages/api/drive.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { listDriveFiles } from "../../src/services/driveApi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const files = await listDriveFiles();
    res.status(200).json(files);
  } catch (error: any) {
    console.error("API Error:", error.message);
    res.status(500).json({ error: error.message });
  }
}
