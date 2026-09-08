export type Product = {
  name: string;
  price: string;
  size: string;
  gender: string;
  description: string;
  topNotes: string[];
  middleNotes: string[];
  baseNotes: string[];
  image: string;
};

export const company = {
  name: "RAV & CO.",
  tagline: "Your Scent, Your Signature.",
  established: "2024",
  location: "Bekasi, Indonesia",
  instagram: "https://www.instagram.com/rav.parfume/",
  instagramLabel: "@rav.parfume",
  shopee: "https://shopee.co.id/hallorav",
  shopeeLabel: "Rav & Co.",
  story: `RAV & CO. began with two friends and one shared vision: to create fragrances that inspire confidence.

Inspired by the elegance of French perfumery, we aim to bring fresh and distinctive scents to everyday life—fragrances that feel personal, refined, and unforgettable.

Because a great scent isn't just something you wear. It's something that becomes part of you.`,
};

export const products: Product[] = [
  {
    name: "Candy Rush",
    price: "Rp100.000",
    size: "30 ML",
    gender: "Unisex",
    description: "Temukan sensasi manis yang menyegarkan dengan parfum terbaru kami, Candy Rush. Dirancang khusus untuk pria dan wanita, parfum ini menghadirkan aroma yang manis dan memikat, sempurna untuk segala kesempatan.",
    topNotes: ["Candied Violet", "Praline"],
    middleNotes: ["Marshmallow", "Raspberry", "Macaron"],
    baseNotes: ["Sugar Icing", "Silk"],
    image: "/products/candy-rush.webp",
  },
  {
    name: "Nobel",
    price: "Rp100.000",
    size: "30 ML",
    gender: "Unisex",
    description: "Parfum maskulin yang memancarkan kesan modern, elegan, dan percaya diri. Diformulasikan dengan aroma segar, diperkaya nuansa hangat, serta ditutup dengan kesan mewah ",
    topNotes: ["Bergamot", "Rhubarb"],
    middleNotes: ["Cashmerwood", "Heliotrope"],
    baseNotes: ["Leather", "Amber"],
    image: "/products/nobel.webp",
  },
  {
    name: "Scarlet Obsession",
    price: "Rp100.000",
    size: "30 ML",
    gender: "Unisex",
    description: "Temukan sensasi manis yang menyegarkan dengan parfum terbaru kami, Scarlet Obsession. Dirancang khusus untuk pria dan wanita, parfum ini menghadirkan aroma yang manis dan memikat, sempurna untuk segala kesempatan.",
    topNotes: ["Bergamot", "Pear"],
    middleNotes: ["Apple", "Rose"],
    baseNotes: ["Vanilla", "Apricot"],
    image: "/products/scarlet-obsession.webp",
  },
];