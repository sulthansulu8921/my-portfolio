import zplusImg from "../assets/zplus.png";
import connectImg from "../assets/connect.png";
import shophubImg from "../assets/shophub.png";
import shopcoImg from "../assets/shopco.png";
import bmwImg from "../assets/bmw-project.png";

export interface Project {
    id: number;
    title: string;
    description: string;
    image?: string;
    github_link?: string;
    live_link?: string;
    tags?: string[];
    isProtected?: boolean;
}

export const staticProjects: Project[] = [
    {
        id: 1,
        title: "ZPlus Sureksha",
        description: "A premium manufacturer of WPC Doors & Frames, providing durable and high-quality construction solutions.",
        image: zplusImg,
        github_link: "https://github.com/sulthansulu8921/zplussureksha",
        live_link: "https://zplussureksha.com",
        tags: ["Business", "Manufacturing", "WPC Doors"],
        isProtected: true
    },
    {
        id: 2,
        title: "Connect Groups",
        description: "A comprehensive IT and infrastructure solutions provider specializing in technical services and network management.",
        image: connectImg,
        github_link: "https://github.com/sulthansulu8921/companybase",
        live_link: "https://connectgroups.co.in",
        tags: ["IT Solutions", "Infrastructure", "Technical Services"],
        isProtected: true
    },
    {
        id: 3,
        title: "ShopHub E-Commerce",
        description: "A modern e-commerce platform with a clean UI and seamless shopping experience for global customers.",
        image: shophubImg,
        github_link: "https://github.com/sulthansulu8921/shophub",
        live_link: "https://shophub-gmyk.vercel.app",
        tags: ["React", "Vercel", "E-Commerce"]
    },
    {
        id: 4,
        title: "ShopCo Full Stack",
        description: "A robust full-stack application with detailed product catalogs and dynamic user interactions.",
        image: shopcoImg,
        github_link: "https://github.com/sulthansulu8921/full-stack",
        live_link: "https://shopco-frontend.onrender.com",
        tags: ["Full Stack", "React", "Node.js"]
    },
    {
        id: 5,
        title: "BMW 5 Series Landing Page",
        description: "A high-end cinematic landing page for the BMW 5 Series, featuring immersive 3D animations and luxury design.",
        image: bmwImg,
        github_link: "https://github.com/sulthanshafeer/bmw-landingpage",
        live_link: "https://bmw-landingpage-gamma.vercel.app/",
        tags: ["Three.js", "React", "Cinematic"]
    }
];
