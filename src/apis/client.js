import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "9nbqsnds",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skBCBWWq9XdoqY4oAsMUVBcgNxpzh3wdROnuBAJSTcpyhw4xGMFmSB100Ki6joXVvUuqy5QbK1X0Dw2AfSwYv1T7D6qHwgUl4C6cDPaXcnCfBjorBVoQHPr1BHu0xa0KvlpUKkWBb1heZ73shBYaOoUWN9Dwv06BAWW8yWpaA8CTwLpGkkZZ",
});
// will add this token and project id in .env after clone is done

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
