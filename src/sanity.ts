import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "heq0maho",
  dataset: "blogs",
  apiVersion: "2024-04-29",
  useCdn: true,
});
