// NOTE: source files were mis-labelled. Re-mapped below so each product shows the correct picture.
import fileSingle from "@/assets/product-single.png"; // actually a DOUBLE cover spacer
import fileDouble from "@/assets/product-double.png"; // actually a TRIPLE cover spacer
import fileTriple from "@/assets/product-triple.webp"; // actually a SINGLE cover spacer
import wheelImg from "@/assets/product-wheel.png";
import rebarImg from "@/assets/product-rebar-cap.png";

const singleImg = fileTriple;
const doubleImg = fileSingle;
const tripleImg = fileDouble;

export type SpecRow = { code: string; ref: string; cover: string };

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  image: string;
  specHeaders: [string, string, string];
  specs: SpecRow[];
};

export const products: Product[] = [
  {
    slug: "single-cover-spacer",
    name: "Single Cover Spacer",
    tagline: "The simplest, most cost-effective spacer.",
    image: singleImg,
    description: [
      "Single Cover Spacers represent the simplest type of spacers in use, known for their ease of installation and identification.",
      "They also offer the most cost-effective solution among all spacer options.",
    ],
    specHeaders: ["Art no.", "Ref.", "Concrete Cover"],
    specs: [
      { code: "1001", ref: "TS/S-20", cover: "20mm" },
      { code: "1002", ref: "TS/S-25", cover: "25mm" },
      { code: "1003", ref: "TS/S-30", cover: "30mm" },
      { code: "1004", ref: "TS/S-40", cover: "40mm" },
      { code: "1005", ref: "TS/S-50", cover: "50mm" },
      { code: "1006", ref: "TS/S-75", cover: "75mm" },
      { code: "1007", ref: "TS/S-100", cover: "100mm" },
    ],
  },
  {
    slug: "double-cover-spacer",
    name: "Double Cover Spacer",
    tagline: "Built for infrastructure & precasting.",
    image: doubleImg,
    description: [
      "Double Cover Spacers find extensive application in infrastructure and precasting projects.",
      "They are a preferred choice for projects aiming to manage inventory effectively.",
    ],
    specHeaders: ["Art no.", "Ref.", "Concrete Cover"],
    specs: [
      { code: "2001", ref: "TS/D-15.20", cover: "15/20mm" },
      { code: "2002", ref: "TS/D-20.30", cover: "20/30mm" },
      { code: "2003", ref: "TS/D-30.40", cover: "30/40mm" },
      { code: "2004", ref: "TS/D-40.50", cover: "40/50mm" },
      { code: "2005", ref: "TS/D-50.60", cover: "50/60mm" },
    ],
  },
  {
    slug: "triple-cover-spacer",
    name: "Triple Cover Spacer",
    tagline: "Three covers, one precision block.",
    image: tripleImg,
    description: [
      "Triple Cover Spacers are commonly employed in infrastructure and precasting projects.",
      "They are the recommended choice for projects that prioritize inventory management.",
    ],
    specHeaders: ["Art no.", "Ref.", "Concrete Cover"],
    specs: [
      { code: "3001", ref: "TS/T-20.25.30", cover: "20/25/30mm" },
      { code: "3002", ref: "TS/T-35.40.50", cover: "35/40/50mm" },
      { code: "3003", ref: "TS/T-45.55.60", cover: "45/55/60mm" },
    ],
  },
  {
    slug: "wheel-spacer",
    name: "Wheel Spacer",
    tagline: "Engineered for vertical applications.",
    image: wheelImg,
    description: [
      "Circular Spacers are highly effective in vertical applications, such as in columns, piles, and pile caps.",
      "Specifically designed for vertical structural elements, minimizing contact with formwork.",
    ],
    specHeaders: ["Art no.", "Ref.", "Concrete Cover"],
    specs: [
      { code: "4001", ref: "TS/C-25", cover: "25mm" },
      { code: "4002", ref: "TS/C-50", cover: "50mm" },
      { code: "4003", ref: "TS/C-75", cover: "75mm" },
      { code: "4004", ref: "TS/C-100", cover: "100mm" },
    ],
  },
  {
    slug: "rebar-end-safety-cap",
    name: "Rebar End Safety Cap",
    tagline: "OSHA-grade site safety, in vivid orange.",
    image: rebarImg,
    description: [
      "Rebar End Safety Caps protect site workers from harm caused by the pointed ends of exposed rebar.",
      "Crafted in vibrant orange for high visibility — the perfect choice for OSHA compliance on construction sites.",
    ],
    specHeaders: ["Product code", "Size", "Packing per Bag"],
    specs: [
      { code: "RC0816", ref: "For 8–16 mm dia. bars", cover: "200 nos." },
      { code: "RC1632", ref: "For 16–32 mm dia. bars", cover: "100 nos." },
      { code: "RF2032", ref: "For 20–32 mm dia. bars", cover: "200 nos." },
      { code: "RF3240", ref: "For 32–40 mm dia. bars", cover: "50 nos." },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const WHATSAPP_NUMBER = "919048711001";
export const whatsappLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
