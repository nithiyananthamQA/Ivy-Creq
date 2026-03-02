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
import imgTransatlanticQuarterZipImage1 from "figma:asset/0e40a0c28a524da44b6ad808f61c6647e6eb7739.png";
import imgTransatlanticQuarterZipImage2 from "figma:asset/2f0327a5c471b668a8158a21b893897b90e25b56.png";
import imgTheHeaterPoloImage1 from "figma:asset/00947901b6c5fc4b245840f30c5dbfdfb5602c34.png";
import imgTheHeaterPoloImage2 from "figma:asset/8331ef4de3532ac14071e5e1160745e6cba9f4e6.png";
import imgLegacyFeatherweightJeansImage1 from "figma:asset/4d1e9c1f73ece946338d815443a652ca0c918b81.png";
import imgLegacyFeatherweightJeansImage2 from "figma:asset/1a5095baa558279452cbd886a7659ff4f1285ab9.png";
import imgWanderlustShort9InImage1 from "figma:asset/479fc1dd28b59f7ec52e37da7f59718f5806081c.png";
import imgWanderlustShort9InImage2 from "figma:asset/c792cb6c5f84b8a34d1d77d67e97fa4bf48f62e2.png";
import imgCloudWaffleShirtJacketImage1 from "figma:asset/3fc2bd94d2c4c5dd47c705b670fbbaa4ad40789a.png";
import imgCloudWaffleShirtJacketImage2 from "figma:asset/8cc678619a56669ac839b8781f3d2345737e3752.png";
import imgBannerImage3 from "figma:asset/f61dedfe26be2f509ad0d3de39d775c80c7da4de.png";
import imgTravisMathew from "figma:asset/f144d5585eb10670a3323e1d954d06b6137cfe98.png";
import imgIcon from "figma:asset/bebc00b59b077c5e59b6bd8f62b979701b2aa4d0.png";
import imgYourPrivacyChoicesIcon from "figma:asset/ed35f48a9fd142447684c5717a326546a5588b38.png";

export interface Product {
  id: number;
  name: string;
  price: string;
  image?: string;
  image1?: string;
  image2?: string;
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
    name: 'Transatlantic Quarter Zip',
    price: '$109.95',
    image1: imgTransatlanticQuarterZipImage1,
    image2: imgTransatlanticQuarterZipImage2,
    franchise: "MEN'S",
    colors: ['#2d313d', '#637a7b', '#447ca0'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium midweight quarter zip with a clean, modern silhouette. Built with 4-way stretch for comfort that travels.',
  },
  {
    id: 302,
    name: 'The Heater Polo',
    price: '$84.95',
    image1: imgTheHeaterPoloImage1,
    image2: imgTheHeaterPoloImage2,
    franchise: "MEN'S",
    badge: 'BEST SELLER',
    colors: ['#000000', '#ffffff'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Our best-selling polo for a reason. Moisture-wicking Heater fabric and a tailored fit you can wear anywhere.',
  },
  {
    id: 303,
    name: 'Legacy Featherweight Jeans',
    price: '$129.95',
    image1: imgLegacyFeatherweightJeansImage1,
    image2: imgLegacyFeatherweightJeansImage2,
    franchise: "MEN'S",
    colors: ['#2e3652'],
    sizes: ['30', '32', '34', '36', '38'],
    description: 'Jeans that feel like sweats. Featherweight denim with incredible stretch and a modern slim fit.',
  },
  {
    id: 304,
    name: 'Wanderlust Short 9in',
    price: '$74.95',
    image1: imgWanderlustShort9InImage1,
    image2: imgWanderlustShort9InImage2,
    franchise: "MEN'S",
    colors: ['#3a3c3f', '#dcdbd9'],
    sizes: ['30', '32', '34', '36', '38'],
    description: 'A 9-inch inseam short built for adventure. Quick-dry fabric with hidden zip pockets keeps essentials secure.',
  },
  {
    id: 305,
    name: 'Cloud Waffle Shirt Jacket',
    price: '$119.95',
    image1: imgCloudWaffleShirtJacketImage1,
    image2: imgCloudWaffleShirtJacketImage2,
    franchise: "MEN'S",
    colors: ['#333b42', '#cdcbcc'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A textured waffle-knit shirt jacket that layers effortlessly. Soft cloud fabric for all-day wearability.',
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
  imgTravisMathew,
  imgIcon,
  imgYourPrivacyChoicesIcon,
  imgPolosYoullActuallyWear,
  imgTheNewOpenToClose20Jogger,
  imgA460740Hbl1EcommJpg,
  img1Maa1904Mbu1EcommJpgJpg,
};
