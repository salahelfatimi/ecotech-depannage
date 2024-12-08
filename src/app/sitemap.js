export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const imageCount = 28; // Total number of images

  const imageEntries = Array.from({ length: imageCount }, (_, i) => ({
    url: `${baseUrl}/realisations/${i + 1}.jpeg`,
    title: `Realisation ${i + 1}`, // Optional
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      images: imageEntries,
    },
  ];
}
