const designImages = import.meta.glob("./designs/*", {
  eager: true,
  import: "default",
});

const getImage = (fileName) => designImages[`./designs/${fileName}`] ?? "";

export const designItems = [
  {
    id: 1,
    title: "Billionaire Paradise",
    type: "Logo Design",
    img: getImage("billionaire-paradise-logo.png"),
  },
  {
    id: 2,
    title: "Ceytra - Gym Mat",
    type: "Social Media Post",
    img: getImage("ceytra-gym-mat.png"),
  },
  {
    id: 3,
    title: "Mr. Dhammika - Tutor",
    type: "Social Media Post",
    img: getImage("dhammika-commerce.png"),
  },
  {
    id: 4,
    title: "Mr. Dhammika - Tutor",
    type: "Social Media Post",
    img: getImage("dhammika-english-1.png"),
  },
  {
    id: 5,
    title: "Mr. Dhammika - Tutor",
    type: "Social Media Post",
    img: getImage("dhammika-english-2.png"),
  },
  {
    id: 6,
    title: "Dittany PVT LTD. - Business Card",
    type: "Print Design",
    img: getImage("dittany-biz-card.png"),
  },
  {
    id: 7,
    title: "Dittany PVT LTD.",
    type: "Logo Design",
    img: getImage("dittany-logo-1.png"),
  },
  {
    id: 8,
    title: "E-Sales Facebook Cover",
    type: "Social Media Banner",
    img: getImage("esales-fbcover.png"),
  },
  {
    id: 9,
    title: "Helakadapila - Bags",
    type: "Social Media Post",
    img: getImage("helakadapila-bags-1.png"),
  },
  {
    id: 10,
    title: "Helakadapila - Bags",
    type: "Social Media Post",
    img: getImage("helakadapila-bags-2.png"),
  },
  {
    id: 11,
    title: "Helakadapila - Facebook Cover",
    type: "Social Media Banner",
    img: getImage("helakadapila-fbcover.png"),
  },
  {
    id: 12,
    title: "Helakadapila - Laptop Bags",
    type: "Social Media Post",
    img: getImage("helakadapila-laptop-bags.png"),
  },
  {
    id: 13,
    title: "Helakadapila",
    type: "Logo Design",
    img: getImage("helakadapila-logo.png"),
  },
  {
    id: 14,
    title: "Hiru Music Academy",
    type: "Social Media Post",
    img: getImage("hma-guitar-post.png"),
  },
  {
    id: 15,
    title: "Homelife",
    type: "Logo Design",
    img: getImage("homelife-logo.png"),
  },
  {
    id: 16,
    title: "IB Consultant",
    type: "Social Media Banner",
    img: getImage("ibconsultant-fbcover.png"),
  },
  {
    id: 17,
    title: "Kandy Media Academy - Business Card",
    type: "Print Design",
    img: getImage("kma-biz-card.jpg"),
  },
  {
    id: 18,
    title: "Mr. Niroshan - Physics Tutor",
    type: "Book Cover Design",
    img: getImage("niroshan-short-note.png"),
  },
  {
    id: 19,
    title: "Oranda",
    type: "Social Media Banner",
    img: getImage("oranda-fbcover.png"),
  },
  {
    id: 20,
    title: "Oranda - Tea",
    type: "Social Media Post",
    img: getImage("Oranda Tea Post 01.2 - 01.png"),
  },
  {
    id: 21,
    title: "Sambashana",
    type: "Branding Design",
    img: getImage("Sambashana2.png"),
  },
  {
    id: 22,
    title: "Sambhashana",
    type: "Logo Design",
    img: getImage("sambhashana.png"),
  },
  {
    id: 23,
    title: "Mr. Shanaka - Combined Maths Tutor",
    type: "Social Media Post",
    img: getImage("shanaka-combined-maths.png"),
  },
  {
    id: 24,
    title: "Mr. Shanaka - Combined Maths Tutor",
    type: "Social Media Post",
    img: getImage("shanaka-sandaruwan-1.png"),
  },
  {
    id: 25,
    title: "Ms. Shanika - Chess Tutor",
    type: "Social Media Post",
    img: getImage("shanika-chess-class-1.png"),
  },
  {
    id: 26,
    title: "Ventina",
    type: "Social Media Post",
    img: getImage("ventina-post.png"),
  },
  {
    id: 27,
    title: "Viheli Battery Center",
    type: "Merch Mockup",
    img: getImage("viheli-cap.png"),
  },
  {
    id: 28,
    title: "Viheli Battery Center",
    type: "Logo Design",
    img: getImage("viheli-logo.png"),
  },
  {
    id: 29,
    title: "Viheli Battery Center",
    type: "Social Media Post",
    img: getImage("viheli-new-year.png"),
  },
  {
    id: 30,
    title: "Viheli Battery Center",
    type: "Merch Mockup",
    img: getImage("viheli-tshirt.png"),
  },
];

export const devProjects = [
  {
    id: 1,
    title: "Eya Defence - Andoid Mobile Game",
    stack: ["Kotlin", "SQLite"],
    description:
      "A casual strategy and tactics game developed using Kotlin for Android devices.",
    link: "https://github.com/Chinthana-Weligamage/Eya-Defence",
  },
  {
    id: 2,
    title: "Tickplus",
    stack: ["React", "Node.js", "Mongo DB"],
    description:
      "Modern ticketing marketplace designed to streamline the process of event launching",
    link: "https://github.com/Tickplus-Online-Ticketing-Market",
  },
  {
    id: 3,
    title: "G7-SIMS",
    stack: ["Java", "Servlet", "MySQL"],
    description:
      "Fast, lightweight Student Information Management System for a school and other educational institutes",
    link: "https://github.com/Chinthana-Weligamage/G7-SIMS",
  },
  {
    id: 4,
    title: "Perspectra - Website",
    stack: ["Next.js", "MongoDB", "Tailwind CSS"],
    description:
      "Unifying market intelligence, brand strategy, experience design, and commercial performance into one sentient ecosystem.",
    link: "https://perspectra.app",
  },
];
