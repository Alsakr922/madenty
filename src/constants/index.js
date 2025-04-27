export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact Us", path: "/contact" },
]

import { HomeHero, HomeImg1, HomeImg2, HomeImg3 } from "../assets/home";
import { Brivado1 } from "../assets/projects/Brivado";
import { SouthMed1 } from "../assets/projects/South Med";

export const HERO_DATA = {
  img: HomeHero,
  title: "مجموعة طلعت مصطفي",
  description:
    "مجموعة طلعت مصطفي للعقارات اسم له تاريخ تمتلك شركة طلعت مصطفي العديد من المشاريع ابرزها المشاريع الاتيه",
};

export const PROJECTS_DATA = [
  {
    img: HomeImg1,
    href: "madenty",
    title: "مدينتي",
    rounded: "r",
    description:
      "احد اشهر مشارع طلعت مصطفي البارزة بها العديد من الوحدات السكنية والادارية والتجارية والطبية",
  },
  {
    img: HomeImg2,
    href: "noor",
    reverse: true,
    rounded: "l",
    title: "نور",
    description:
      "تعد نور من اهم المشاريع طلعت مصطفي لانها اول مدينة smart city",
  },
  {
    img: HomeImg3,
    href: "silia",
    rounded: "r",
    title: "سيليا",
    description:
      "سيليا هو احد مشاريع طلعت مصطفي الراقية بالعاصمة الادارية الجديدة",
  },
  {
    img: SouthMed1,
    reverse: true,
    rounded: "l",
    href: "southmed",
    title: "ساوث ميد",
    description:
      "ساوث ميد هي أحد مشاريع طلعت مصطفى جروب وهي واحده من ارقي المدن السياحية المميزة في الساحل",
  },
  {
    img: Brivado1,
    href: "brivado",
    rounded: "r",
    title: "بريڤادو",
    description:
      "بريڤادو هي أحد مشاريع طلعت مصطفى جروب وهي كمبوند داخل مدينتي وبها مرافق سكنية مميزة",
  },
];