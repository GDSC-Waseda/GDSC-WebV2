// src/services/googleDocs.ts
import { google, docs_v1 } from "googleapis";
import { getGoogleAuth } from "./googleAuth";

export const getGoogleDocContent = async (docId: string): Promise<string> => {
  const docs = google.docs({ version: "v1", auth: getGoogleAuth() });

  try {
    const response = await docs.documents.get({ documentId: docId });

    // Check if 'body' is defined
    if (!response.data.body) {
      throw new Error("Document content is undefined");
    }

    const content = response.data.body.content;
    if (!content) {
      throw new Error("Document content is empty");
    }

    return parseDocContent(content);
  } catch (error: any) {
    console.error("Error fetching document:", error.message);
    throw error;
  }
};

const parseDocContent = (
  content: docs_v1.Schema$StructuralElement[]
): string => {
  // Implement parsing logic here
  return "";
};
