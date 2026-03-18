// All asset imports from Figma
import imgBannerImage from "figma:asset/7f33aec3aae1c2d17e8a5d8745730c93cc8be882.png";
import img1Mab0621Wht1EcommJpgJpg from "figma:asset/09fb593b58ce47a657426a3c8e1ef94348b69c58.png";
import imgA45732Q11341EcommJpg from "figma:asset/be35ed9f50de8a4af4ad2bd9e8fa44aee3514eeb.png";
import imgA460740Hbl1EcommJpg from "figma:asset/04263c9987de94d31e0abe95252bd207b863915f.png";
import imgA45855C06601EcommJpgJpg from "figma:asset/dd46b17336f519547f307335e71e9c491526c16f.png";
import img1Maa1904Mbu1EcommJpgJpg from "figma:asset/c5932e253ee1f1a181a3c548955b2d467365a442.png";
import imgA466090Blk1EcommJpgJpg from "figma:asset/427e55283c3583e0d253b727dcb89303b02e0b64.png";
import imgShopMensOuterwear from "figma:asset/e631f37e095731f772cc26f18e161eaaf5f90413.png";
import imgShopMensPolos from "figma:asset/265cf083f7bff66143aab7729d2b05385cbc056e.png";
import imgShopMensPants from "figma:asset/3656899e775dee3c0ddbdd26f5b56c5214ae34ea.png";
import imgShopMensFootwear from "figma:asset/7ed16ebe234f76c31bbe2b6e1ccd7b7a5b7a8444.png";
import imgShopMensTees from "figma:asset/708586a967736d21332b9c4be538908a01b3eadd.png";
import imgBannerImage1 from "figma:asset/72a7ad6030711f415ca64da9cb76471e83760a56.png";
import imgMoveKnitSleevelessPrintedDressImage1 from "figma:asset/ba0d47bd673d7fdde9cf149da03346a4f1a4c9ba.png";
import imgMoveKnitSleevelessPrintedDressImage2 from "figma:asset/49dbbb98d4239926f3108ea82861326149d74dd3.png";
import imgMoveknitRibLimitlessTopImage1 from "figma:asset/fdf76104bd2d5ac991815d6359d67c2bffd4f9f9.png";
import imgMoveknitRibLimitlessTopImage2 from "figma:asset/1d9052244f9e3301866e9e5b4e55248626dda77d.png";
import imgMoveknitRibLimitlessSkortImage1 from "figma:asset/e1063d875bc57efc0063464938ac6fb1e9810be0.png";
import imgMoveknitRibLimitlessSkortImage2 from "figma:asset/69aa78da09b2b601285f577759e3ff9f755f22fa.png";
import imgMoveknitGameSetMatchSkort20Image1 from "figma:asset/3998677c9fa75269b798e62e1637ff27881182f3.png";
import imgMoveknitGameSetMatchSkort20Image2 from "figma:asset/53843761df0d06836fedc191047d8f94a297ef94.png";
import imgBreezeBlendTravelDayJacketImage1 from "figma:asset/de7bfc1cbc20a2842849b3c84d179a970ef22a42.png";
import imgBreezeBlendTravelDayJacketImage2 from "figma:asset/b5d8370bf42d33170864d0f9a532836617ef18ce.png";
import imgBannerImage2 from "figma:asset/b25e4f0e6f24dc4b1f610a7e528d515814b68973.png";
import imgPolosYoullActuallyWear from "figma:asset/11770ec716312f0159b6333e4b26312da21cd190.png";
import imgTheNewOpenToClose20Jogger from "figma:asset/bb07c8767851221401bedf9129abcad27293bc4a.png";
// Men's product images (real Ivy Crew product photos)
import imgBlueBotanicalPolo1 from '../../assets/mens/blue-botanical-polo-1.webp';
import imgBlueBotanicalPolo2 from '../../assets/mens/blue-botanical-polo-2.webp';
import imgBlueBotanicalPolo3 from '../../assets/mens/blue-botanical-polo-3.webp';
import imgBlueBotanicalPolo4 from '../../assets/mens/blue-botanical-polo-4.webp';
import imgWhitePatternedPolo1 from '../../assets/mens/white-patterned-polo-1.webp';
import imgWhitePatternedPolo2 from '../../assets/mens/white-patterned-polo-2.webp';
import imgWhitePatternedPolo3 from '../../assets/mens/white-patterned-polo-3.webp';
import imgWhitePatternedPolo4 from '../../assets/mens/white-patterned-polo-4.webp';
import imgRosePatternedPolo1 from '../../assets/mens/rose-patterned-polo-1.webp';
import imgRosePatternedPolo2 from '../../assets/mens/rose-patterned-polo-2.webp';
import imgRosePatternedPolo3 from '../../assets/mens/rose-patterned-polo-3.webp';
import imgRosePatternedPolo4 from '../../assets/mens/rose-patterned-polo-4.webp';
import imgBlueLeafPolo1 from '../../assets/mens/blue-leaf-polo-1.webp';
import imgBlueLeafPolo2 from '../../assets/mens/blue-leaf-polo-2.webp';
import imgBlueLeafPolo3 from '../../assets/mens/blue-leaf-polo-3.webp';
import imgBlueLeafPolo4 from '../../assets/mens/blue-leaf-polo-4.webp';
import imgSageClassicPolo1 from '../../assets/mens/sage-classic-polo-1.webp';
import imgSageClassicPolo2 from '../../assets/mens/sage-classic-polo-2.webp';
import imgSageClassicPolo3 from '../../assets/mens/sage-classic-polo-3.webp';
import imgBannerImage3 from "figma:asset/f61dedfe26be2f509ad0d3de39d775c80c7da4de.png";
import imgIcon from "figma:asset/bebc00b59b077c5e59b6bd8f62b979701b2aa4d0.png";
import imgYourPrivacyChoicesIcon from "figma:asset/ed35f48a9fd142447684c5717a326546a5588b38.png";

export interface Product {
  id: number;
  name: string;
  price: string;
  image?: string;
  image1?: string;
  image2?: string;
  images?: string[];
  franchise?: string;
  badge?: string;
  colors: string[];
  sizes?: string[];
  description?: string;
}

export interface Category {
  name: string;
  image: string;
}

export const newArrivals: Product[] = [
  {
    id: 101,
    name: 'Heater Pro Color Block Polo',
    price: '$109.95',
    image: img1Mab0621Wht1EcommJpgJpg,
    colors: ['#d8ccbb', '#6478c6', '#1d3f43'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Engineered with 4-way stretch and moisture-wicking fabric, the Heater Pro Color Block Polo keeps you cool and comfortable from the first tee to the 19th hole.',
  },
  {
    id: 102,
    name: 'Clubside Varsity Bomber',
    price: '$249.95',
    image: imgA45732Q11341EcommJpg,
    colors: ['#333b42'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A modern take on the classic varsity bomber. Premium materials and a tailored fit make this jacket the perfect layer for any occasion.',
  },
  {
    id: 103,
    name: 'Cloud Crew Long Sleeve T-Shirt',
    price: '$69.95',
    image: imgA466090Blk1EcommJpgJpg,
    colors: ['#333b42', '#dcdbd9', '#1d3f43'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Ultra-soft cloud fabric meets a relaxed crew neck silhouette. The perfect everyday layer that moves with you.',
  },
  {
    id: 104,
    name: 'Performance Quarter Zip',
    price: '$89.95',
    image: imgA45855C06601EcommJpgJpg,
    colors: ['#525449', '#bccbcf'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Lightweight performance fabric with UPF 50 sun protection. A versatile quarter zip built for layering on and off the course.',
  },
];

export const womenProducts: Product[] = [
  {
    id: 201,
    name: 'MoveKnit Sleeveless Printed Dress',
    price: '$98.95',
    image1: imgMoveKnitSleevelessPrintedDressImage1,
    image2: imgMoveKnitSleevelessPrintedDressImage2,
    franchise: "WOMEN'S",
    colors: ['#2e3652', '#cddeed'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'A sleeveless printed dress featuring MoveKnit fabric for all-day comfort and effortless style on or off the court.',
  },
  {
    id: 202,
    name: 'Moveknit Rib Limitless Top',
    price: '$69.95',
    image1: imgMoveknitRibLimitlessTopImage1,
    image2: imgMoveknitRibLimitlessTopImage2,
    franchise: "WOMEN'S",
    colors: ['#3a3c3f', '#dcdbd9'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Ribbed MoveKnit fabric creates a flattering, body-skimming fit that stretches and recovers with every movement.',
  },
  {
    id: 203,
    name: 'Moveknit Rib Limitless Skort',
    price: '$79.95',
    image1: imgMoveknitRibLimitlessSkortImage1,
    image2: imgMoveknitRibLimitlessSkortImage2,
    franchise: "WOMEN'S",
    colors: ['#1d3f43', '#447ca0'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'The Limitless Skort pairs the look of a skirt with built-in shorts for confident coverage during any activity.',
  },
  {
    id: 204,
    name: 'Moveknit Game Set Match Skort 2.0',
    price: '$79.95',
    image1: imgMoveknitGameSetMatchSkort20Image1,
    image2: imgMoveknitGameSetMatchSkort20Image2,
    franchise: "WOMEN'S",
    badge: 'NEW',
    colors: ['#000000', '#ffffff'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Upgraded with softer MoveKnit fabric and a refined waistband, the Game Set Match Skort 2.0 is ready for match day.',
  },
  {
    id: 205,
    name: 'BreezeBlend Travel Day Jacket',
    price: '$149.95',
    image1: imgBreezeBlendTravelDayJacketImage1,
    image2: imgBreezeBlendTravelDayJacketImage2,
    franchise: "WOMEN'S",
    colors: ['#cdcbcc', '#66676d', '#bfada8', '#525449'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Lightweight BreezeBlend fabric makes this the ideal travel companion — packable, breathable, and endlessly versatile.',
  },
];

export const menProducts: Product[] = [
  {
    id: 301,
    name: 'Botanical Print Polo',
    price: '$89.95',
    image1: imgBlueBotanicalPolo1,
    image2: imgBlueBotanicalPolo2,
    images: [imgBlueBotanicalPolo1, imgBlueBotanicalPolo2, imgBlueBotanicalPolo3, imgBlueBotanicalPolo4],
    franchise: "MEN'S",
    badge: 'NEW',
    colors: ['#4a6e8a', '#1d3f43'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A refined botanical print polo crafted from premium cotton blend. Subtle floral detail with the Ivy Crew signature for effortless everyday style.',
  },
  {
    id: 302,
    name: 'Marble Texture Polo',
    price: '$84.95',
    image1: imgWhitePatternedPolo1,
    image2: imgWhitePatternedPolo2,
    images: [imgWhitePatternedPolo1, imgWhitePatternedPolo2, imgWhitePatternedPolo3, imgWhitePatternedPolo4],
    franchise: "MEN'S",
    badge: 'BEST SELLER',
    colors: ['#f0ede8', '#cdcbcc'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Lightweight marble-textured polo with a clean silhouette. Soft-touch fabric and a tailored fit you can wear anywhere.',
  },
  {
    id: 303,
    name: 'Rose Garden Polo',
    price: '$89.95',
    image1: imgRosePatternedPolo1,
    image2: imgRosePatternedPolo2,
    images: [imgRosePatternedPolo1, imgRosePatternedPolo2, imgRosePatternedPolo3, imgRosePatternedPolo4],
    franchise: "MEN'S",
    colors: ['#c27a8a', '#8b4d5e'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Make a statement in this rose-toned textured polo. All-over botanical pattern with moisture-wicking performance fabric.',
  },
  {
    id: 304,
    name: 'Tropical Leaf Polo',
    price: '$94.95',
    image1: imgBlueLeafPolo1,
    image2: imgBlueLeafPolo2,
    images: [imgBlueLeafPolo1, imgBlueLeafPolo2, imgBlueLeafPolo3, imgBlueLeafPolo4],
    franchise: "MEN'S",
    colors: ['#4a6e8a', '#2d4a6b', '#3a5c7a'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Bold tropical leaf print with contrast navy collar and cuffs. Premium stretch fabric for comfort on and off the course.',
  },
  {
    id: 305,
    name: 'Classic Sage Polo',
    price: '$79.95',
    image1: imgSageClassicPolo1,
    image2: imgSageClassicPolo2,
    images: [imgSageClassicPolo1, imgSageClassicPolo2, imgSageClassicPolo3],
    franchise: "MEN'S",
    colors: ['#8fa68a', '#6b8a66'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Timeless solid sage polo with the Ivy Crew emblem. Clean, minimal design in ultra-soft piqué cotton for all-day comfort.',
  },
];

export const categories: Category[] = [
  { name: "Shop Men's Outerwear", image: imgShopMensOuterwear },
  { name: "Shop Men's Polos", image: imgShopMensPolos },
  { name: "Shop Men's Pants", image: imgShopMensPants },
  { name: "Shop Men's Footwear", image: imgShopMensFootwear },
  { name: "Shop Men's Tees", image: imgShopMensTees },
];

export const allProducts: Product[] = [...newArrivals, ...womenProducts, ...menProducts];

export function getProductById(id: number): Product | undefined {
  return allProducts.find(p => p.id === id);
}

export {
  imgBannerImage,
  imgBannerImage1,
  imgBannerImage2,
  imgBannerImage3,
  imgIcon,
  imgYourPrivacyChoicesIcon,
  imgPolosYoullActuallyWear,
  imgTheNewOpenToClose20Jogger,
  imgA460740Hbl1EcommJpg,
  img1Maa1904Mbu1EcommJpgJpg,
};
