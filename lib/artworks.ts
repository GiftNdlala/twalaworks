export type PrintOption = {
  size: string;
  price: number;
};

export type Artwork = {
  slug: string;
  title: string;
  image: string;
  originalSize?: string;
  originalPrice?: number;
  medium: string;
  prints: PrintOption[];
  note?: string;
};

export const artworks: Artwork[] = [
  {
    slug: "to-pimp-a-tembisa-series",
    title: "To Pimp a Tembisa series",
    image: "/artworks/source-image-01.jpeg",
    originalSize: "29.7 × 42 cm",
    originalPrice: 3999.99,
    medium: "Acrylic, coffee and ballpoint pen",
    prints: [
      { size: "A3 · 29.7 × 42 cm", price: 599.99 },
      { size: "A2 · 42 × 59.7 cm", price: 1199.99 },
      { size: "A1", price: 2999.99 },
    ],
    note: "Prints are made on true fibre matt paper.",
  },
  {
    slug: "institionalized",
    title: "Institionalized",
    image: "/artworks/source-image-02.png",
    originalSize: "29.7 × 42 cm (A3)",
    originalPrice: 4999.99,
    medium: "Acrylic, coffee and ballpoint pen",
    prints: [
      { size: "A3 · 29.7 × 42 cm", price: 799.99 },
      { size: "A2 · 42 × 59.7 cm", price: 2199.99 },
      { size: "A1", price: 3499.99 },
    ],
  },
  {
    slug: "blackboy-fly",
    title: "Blackboy fly",
    image: "/artworks/source-image-03.png",
    medium: "Illustration",
    prints: [
      { size: "A3 · 29.7 × 42 cm", price: 799.99 },
      { size: "A2 · 42 × 59.7 cm", price: 2199.99 },
      { size: "A1", price: 3999.99 },
      { size: "A0", price: 7999.99 },
    ],
    note: "5 limited-edition prints left.",
  },
  {
    slug: "uthando-nenjabulo",
    title: "uThando neNjabulo",
    image: "/artworks/source-image-04.jpeg",
    originalSize: "29.7 × 42 cm (A3)",
    originalPrice: 5999.99,
    medium: "Acrylic, coffee and ballpoint pen",
    prints: [
      { size: "A2 · 42 × 59.7 cm", price: 2199.99 },
      { size: "A1", price: 3499.99 },
    ],
  },
  {
    slug: "ubuhle-bendalo",
    title: "Ubuhle bendalo",
    image: "/artworks/source-image-05.jpeg",
    originalSize: "29.7 × 42 cm (A3)",
    originalPrice: 5000,
    medium: "Acrylic, coffee and ballpoint pen",
    prints: [
      { size: "A3 · 29.7 × 42 cm", price: 799.99 },
      { size: "A2 · 42 × 59.7 cm", price: 2199.99 },
      { size: "A1", price: 3499.99 },
    ],
  },
  {
    slug: "umpefumulo-ka-gogo",
    title: "uMpefumulo ka gogo",
    image: "/artworks/source-image-06.png",
    originalSize: "A2",
    originalPrice: 2500,
    medium: "Acrylic",
    prints: [
      { size: "A3 · 29.7 × 42 cm", price: 499.99 },
      { size: "A2 · 42 × 59.7 cm", price: 1299.99 },
      { size: "A1", price: 2999.99 },
    ],
  },
  {
    slug: "untitled-1",
    title: "Untitled 1",
    image: "/artworks/source-image-07.png",
    originalSize: "A2",
    originalPrice: 2500,
    medium: "Acrylic",
    prints: [
      { size: "A3 · 29.7 × 42 cm", price: 499.99 },
      { size: "A2 · 42 × 59.7 cm", price: 1299.99 },
      { size: "A1", price: 2999.99 },
    ],
    note: "Title to be confirmed.",
  },
  {
    slug: "umdeni-1",
    title: "Umdeni",
    image: "/artworks/source-image-08.png",
    originalSize: "A2",
    originalPrice: 2500,
    medium: "Acrylic",
    prints: [
      { size: "A3 · 29.7 × 42 cm", price: 499.99 },
      { size: "A2 · 42 × 59.7 cm", price: 1299.99 },
      { size: "A1", price: 2999.99 },
    ],
  },
  {
    slug: "umdeni-2",
    title: "Umdeni",
    image: "/artworks/source-image-09.png",
    originalSize: "A2",
    originalPrice: 2500,
    medium: "Acrylic",
    prints: [
      { size: "A3 · 29.7 × 42 cm", price: 499.99 },
      { size: "A2 · 42 × 59.7 cm", price: 1299.99 },
      { size: "A1", price: 2999.99 },
    ],
  },
  {
    slug: "the-boy-child-is-still-a-child",
    title: "The boy child is still a child",
    image: "/artworks/source-image-10.jpeg",
    originalSize: "A3",
    originalPrice: 3500,
    medium: "Acrylic and ballpoint pen",
    prints: [
      { size: "A3 · 29.7 × 42 cm", price: 699.99 },
      { size: "A2 · 42 × 59.7 cm", price: 2499.99 },
    ],
  },
  {
    slug: "untitled-2",
    title: "Untitled 2",
    image: "/artworks/source-image-11.jpeg",
    originalSize: "A4",
    originalPrice: 2500,
    medium: "Acrylic and ballpoint pen",
    prints: [
      { size: "A3 · 29.7 × 42 cm", price: 699.99 },
      { size: "A2 · 42 × 59.7 cm", price: 2299.99 },
    ],
    note: "Title to be confirmed.",
  },
  {
    slug: "ekasi",
    title: "Ekasi",
    image: "/artworks/source-image-12.jpeg",
    originalSize: "A3",
    originalPrice: 2999.99,
    medium: "Acrylic",
    prints: [
      { size: "A3 · 29.7 × 42 cm", price: 799.99 },
      { size: "A2 · 42 × 59.7 cm", price: 1499.99 },
    ],
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 2,
  }).format(price);
}

export function getArtwork(slug: string) {
  return artworks.find((artwork) => artwork.slug === slug);
}
