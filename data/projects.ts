export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard. Built with Next.js, TypeScript, and Stripe.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["React.js", "Node.js", "Stripe", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/zainrajpootfd/ecormmerce-apps",
    liveUrl: "https://ecormmerce-frontend.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Single Mixer",
    description:
      "Single Mixer is used for connecting people worldwide for dating, chatting, and building relationships through a user-friendly web app experience..",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["Next.js", "Tailwind CSS", "Axios", "MongoDB", "Express"],
    githubUrl: "#",
    liveUrl: "https://singlesmixer.eu/",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current weather conditions, forecasts, and interactive maps using weather APIs.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: [
      "React",
      "TypeScript",
      "Weather API",
      "Chart.js",
      "Tailwind",
    ],
    githubUrl: "https://github.com/zainali/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "An analytics dashboard for social media metrics with data visualization, reporting features, and automated insights generation.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["Next.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/zainali/social-analytics",
    liveUrl: "https://social-analytics-demo.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website with smooth animations, dark mode support, and optimized performance.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/zainali/portfolio",
    liveUrl: "https://zain-ali-portfolio.vercel.app",
    featured: false,
  },
  {
    id: 6,
    title: "Chat Application",
    description:
      "Real-time chat application with private messaging, group chats, file sharing, and emoji support using WebSocket technology.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["React", "Node.js", "Socket.io", "Redis", "MongoDB"],
    githubUrl: "https://github.com/zainali/chat-app",
    liveUrl: "https://chat-app-demo.vercel.app",
    featured: false,
  },
];

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);
export const getAllProjects = () => projects;
