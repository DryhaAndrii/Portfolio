import musicShopImage from "@/public/images/projects/musicShop.png";
import quickDropImage from "@/public/images/projects/quickDrop.png";

export const projects = [
  {
    title: "Music Shop",
    period: "07.2024 — 08.2024",
    description:
      "Music Shop - a fullstack web application for selling music-related products. Features include a product showcase with custom categories, shopping cart, and an admin panel for managing products and orders. Built with Next.js (frontend), Express.js (backend), and MongoDB. Fully styled UI.",
    image: musicShopImage,
    liveUrl: "https://music-shop-jade.vercel.app",
    githubUrl: "https://github.com/DryhaAndrii/music-shop",
  },
  {
    title: "Quick Drop",
    period: "03.2025 — 04.2025",
    description:
      "QuickDrop – a file-sharing web app where users can create a temporary room by ID, upload files, and share them with others without registration. All files and user data are deleted once the room is empty. Built with Next.js, Nest.js, and PostgreSQL.",
    image: quickDropImage,
    liveUrl: "https://quick-drop-beige.vercel.app",
    githubUrl: "https://github.com/DryhaAndrii/quickdrop",
  },
];
