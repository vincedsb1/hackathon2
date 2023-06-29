import glassCategory1 from "../../assets/categories/visionmod1.jpg";
import glassCategory2 from "../../assets/categories/sunmod1.jpg";
import glassCategory3 from "../../assets/categories/sportsmod1.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: "ef1f52f6-4e35-4cd7-ad4a-0a9b52de894f",
    categoryName: "All",
    description:
      "Découvrez notre sélection complète de téléphones avec une vision claire et un design élégant pour une combinaison parfaite de fonctionnalité et de style.",
    categoryImg: glassCategory1,
  },
  {
    _id: "937d27a0-51b7-4005-bb04-4f5f111eac90",
    categoryName: "Android",
    description:
      "Restez concentré et performez au mieux avec notre gamme de téléphones Android haute performance.",
    categoryImg: glassCategory3,
  },
  {
    _id: "1164f45b-1659-4631-88d7-47325bb21eff",
    categoryName: "IOS",
    description:
      "Protégez vos yeux avec style grâce à notre collection de téléphones iOS avec protection anti-UV.",
    categoryImg: glassCategory2,
  },
];
