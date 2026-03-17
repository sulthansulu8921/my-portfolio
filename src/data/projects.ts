export interface Project {
    id: number;
    title: string;
    description: string;
    image?: string;
    github_link?: string;
    live_link?: string;
    tags?: string[];
}

export const staticProjects: Project[] = [
    {
        id: 1,
        title: "ShopHub E-Commerce",
        description: "A modern e-commerce platform with a clean UI and seamless shopping experience.",
        image: "/src/assets/e-com.png",
        github_link: "https://github.com/sulthansulu8921/shophub",
        live_link: "https://shophub-gmyk.vercel.app",
        tags: ["React", "Vercel", "E-Commerce"]
    },
    {
        id: 2,
        title: "ShopCo Full Stack",
        description: "A comprehensive full-stack application with robust backend integration and dynamic frontend.",
        image: "/src/assets/full-stack.png",
        github_link: "https://github.com/sulthansulu8921/full-stack",
        live_link: "https://shopco-frontend.onrender.com",
        tags: ["Full Stack", "React", "State Management"]
    }
];
