import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const projects = [
  {
    title: "Task Management Website",
    github_link: "https://github.com/AdityaNik/task-management-site",
    description:
      "TaskMaster is a task management website that lets users create an account and manage tasks with ease. Users can add, edit, delete tasks, and organize them on Kanban board for a clear workflow view. With powerful filtering options, TaskMaster helps users quickly find tasks based on priority, due date, and more, making it an ideal tool for staying organized and productive.",
    technologies: [
      "nextjs",
      "nodejs",
      "express",
      "recoil",
      "tailwind css",
      "shadcn/ui",
      "mongodb",
      "typescript",
      "jwt",
    ],
    live_link: "https://task-management-site-orcin.vercel.app",
  },
  {
    title: "Course Selling Application",
    github_link: "https://github.com/AdityaNik/full-stack-course-selling-app",
    description:
      "Developed a mobile-responsive web application using the MERN stack with Recoil for state management. Built a content management system that allows users to easily browse, review, and purchase courses, providing a streamlined experience for efficient course discovery and management.",
    technologies: [
      "react",
      "nodejs",
      "express",
      "recoil",
      "tailwind css",
      "shadcn/ui",
      "mongodb",
      "firebase storage",
      "typescript",
      "jwt",
      "razorpay payment gateway",
    ],
    live_link: "",
  },
];

export const experience = [
  {
    title: "Full Stack Developer Intern",
    company: "Habbinson International",
    location: "Pune, India",
    duration: "June 2024 - July 2024",
    description: [
      "Developed and maintained a responsive website using React, TypeScript, and Tailwind CSS.",
      "Improved application performance with Recoil for state management and SQL for efficient data handling.",
      "Collaborated with cross-functional teams to optimize features and functionalities.",
    ],
    technologies: [
      "react",
      "tailwindcss",
      "nodejs",
      "mysql",
      "jwt",
      "razorpay payment gateway",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "NATARAJ SERVICES",
    location: "Aurangabad, Maharashtra",
    duration: "January 2023 - March 2023",
    description: [
      "Developed a desktop application for an Abacus Academy using .NET Framework 6, C#, and MySQL, improving operational efficiency by 60%.",
      "Streamlined administrative tasks and reduced manual errors, enhancing the student experience.",
      "Gained experience with Git and GitHub for version control.",
    ],
    technologies: [".Net Framework 6", "C#", "mySQL"],
  },
];