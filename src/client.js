import { createClient } from "@sanity/client";
const sanityClient = createClient({
  projectId: "07nafcst",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-07-09",
});

export default sanityClient;
