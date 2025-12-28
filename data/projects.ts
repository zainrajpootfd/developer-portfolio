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
    image: "/ecom.png?height=250&width=400",
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
    image: "/single.png?height=250&width=400",
    technologies: ["Next.js", "Tailwind CSS", "Axios", "MongoDB", "Express"],
    githubUrl: "#",
    liveUrl: "https://singlesmixer.eu/",
    featured: true,
  },
  {
    id: 3,
    title: "Travel App",
    description:
      "A responsive, modern web application built for exploring and booking travel destinations. It features destination browsing, booking forms, and dynamic content display. The tech stack includes Next.js, Tailwind CSS.",
    image: "/travel.png?height=250&width=400",
    technologies: ["Next.js", "TypeScript", "Tailwind", "React Query"],
    githubUrl: "https://github.com/zainrajpootfd/travel_app",
    liveUrl: "https://travel-app-puce-nu.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "The Wild Oasis",
    description:
      "The Wild Oasis is a modern hotel and cabin booking website offering seamless reservations for cozy stays in nature. It features real-time availability.",
    image: "/paradise.png",
    technologies: ["Next.js", "Google Service", "FastAPI", "Supabase"],
    githubUrl: "https://github.com/zainrajpootfd/the-wild-oasis-website",
    liveUrl: "https://the-wild-oasis-website-rouge.vercel.app/",
    featured: false,
  },
  {
    id: 5,
    title: "Encore Billing System",
    description:
      "Encore Billing System is a modern billing system for businesses to manage their billing and payments. It features a modern UI/UX, a responsive design, and a modern design.",
    image: "/encore.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/zainali/portfolio",
    liveUrl: "https://www.encorebillinggroup.com/",
    featured: false,
  },
  {
    id: 6,
    title: "Job Guarder",
    description:
      "Job Guarder is a job portal for businesses to manage their jobs and candidates. It features a modern UI/UX, a responsive design, and a modern design.",
    image: "/job.png",
    technologies: ["React", "Node.js", "Acios", "MUI", "MongoDB","Devisakit"],
    githubUrl: "https://github.com/zainali/chat-app",
    liveUrl: "https://www.jobguarder.com/",
    featured: false,
  },
];

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);
export const getAllProjects = () => projects;
