// src/services/driveApi.ts
import { google, drive_v3 } from "googleapis";
import { getGoogleAuth } from "./googleAuth";

export const listDriveFiles = async (): Promise<
  drive_v3.Schema$File[] | null
> => {
  const drive = google.drive({ version: "v3", auth: getGoogleAuth() });
  const folderId = "1W_SzAGayKMgycr0AAGLbUtIql34laDDo"; // Replace with  folder ID

  try {
    const response = await drive.files.list({
      q: `'${folderId}' in parents and mimeType='application/vnd.google-apps.document'`,
      fields: "files(id, name)",
    });
    const files = response.data.files || [];
    return files;
  } catch (error: any) {
    console.error("Error fetching files:", error.message);
    return null;
  }
};
