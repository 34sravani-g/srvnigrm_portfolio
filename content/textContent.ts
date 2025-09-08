import { StaticImageData } from "next/image";
import sortingVisualizer from "../public/sorting-visualizer.png";
import bookCart from "../public/bookcart.png";
import duoMeet from "../public/duomeet.png";
import promptopia from "../public/promptopia.png"

interface Experience {
  company: string;
  duration: string;
  role: string;
  responsibilities: string[];
}
interface Project {
  name: string;
  techStack: string;
  img: StaticImageData;
  sourceCodeLink: string;
  hostedURL?: string;
  description: string[];
}
interface TextContent {
  about: {
    heyText: string;
    name: string;
    title: string;
    downloadText: string;
    sectionTitle: string;
    description: string;
  };
  skills: {
    sectionTitle: string;
    mySkills: string[];
  };
  experience: {
    sectionTitle: string;
    experiences: Experience[];
  };
  projects: {
    sectionTitle: string;
    sourceCodeText: string;
    techUsedText: string;
    project: Project[];
  };
  contact: {
    sectionTitle: string;
    name: string;
    email: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submitText: string;
    toastSuccess: string;
    toastFail: string;
  };
  email: {
    nameTitle: string;
    emailTitle: string;
    subjectTitle: string;
    messageTitle: string;
    headerText: string;
    footerText: string;
  };
  navbar: {
    aboutLabel: string;
    skillsLabel: string;
    experienceLabel: string;
    projectsLabel: string;
    contactLabel: string;
  };
  footer: {
    builtUsingText: string;
    copyrightText: string;
    linkedInURL: string;
    githubURL: string;
    gmailURL: string;
    instaURL: string;
  };
}

export const textContent: TextContent = {
  about: {
    heyText: "Hey there 👋 I'm,",
    name: "Sravani Gurram,",
    title: "Full Stack Web Developer",
    downloadText: "Download CV",
    sectionTitle: "About me",
    description:
    "As a seasoned 🚀 React JS Developer over 2.5 years of experience, I specialize in tackling complex challenges, including security, performance optimization, and workflow improvements. My expertise lies in building and maintaining intricate web applications, consistently learning and delivering high-quality tasks on time in dynamic, fast paced environments. I completed Bachelors of Engineering in Computer Science at Matrusri Engineering College, Hyderabad with CGPA of 8.70 in 2023. ",
      //"As a seasoned 🚀 React JS Developer with nearly 1 year of experience, I specialize in tackling complex challenges, including security, performance optimization, and workflow improvements. My expertise lies in building and maintaining intricate web applications, consistently delivering high-quality projects on time in dynamic, fast-paced environments.",
  },
  skills: {
    sectionTitle: "Skills",
    mySkills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "SASS",
      "Bootstrap",
      "Tailwind CSS",
      "Next.js",
      "Git",
      "Redux.js",
      "Unit Testing (Jest, RTL)",
      "TypeScript",
      "ShadCN",
      "API Integration",
      "PWA",
      "Material UI",
      "Node.js",
      "Express.js",
      "Microsoft Azure",
      "MongoDB",
      "OOPS",
      "Problem Solving"
    ],
  },
  experience: {
    sectionTitle: "Work Experience",
    experiences: [
      {
        company: "Accenture",
        duration: "Feb 2024 - Present",
        role: "Software Developer Analyst",
        responsibilities: [
          "Working in Qatar project, Developing high end features and reusable components mainly using React, Nextjs, Javascript, API Integration, Graphql and Jest.",
          "Led efforts to enhance app performance, resulting in a 100% reduction in page load times, greatly improving user satisfaction.",
          "Achieved 90% above code coverage with comprehensive unit tests, leading to a 40% decrease in critical defects.",
          "Actively participated in client presentations and architectural walk-throughs across different teams.",
          "Trained and certified in MERN Application Engg School",
        ],
      },
      {
        company: "Avegen",
        duration: "Aug 2023 - Feb 2024",
        role: "Software Engineer",
        responsibilities: [
          "Optimized client-facing homepage by achieving zero latency in card load times, greatly enhancing performance and user satisfaction.",
          "Developed UI components for template applications, streamlining development and ensuring consistency across projects in same codebase.",
          "Documented processes and updates in confluence to improve knowledge sharing and team collaboration."
        ],
      },
      {
        company: "Cognizant",
        duration: "May 2023 - Aug 2024",
        role: "Programmer Trainee Intern",
        responsibilities: [
          "Designed and implemented user dashboard, authentication pages, writing comprehensive unit tests.",
          "Trained and certified in React Full stack development.",
        ],
      },
    ],
  },
  projects: {
    sectionTitle: "Projects",
    sourceCodeText: "View Source Code",
    techUsedText: "Techstack : ",
    project: [
      {
        name: "Promptopia",
        techStack: "Next.js, Tailwind CSS, Jest. ",
        img: promptopia,
        sourceCodeLink: "https://github.com/34sravani-g/Promptopia",
        description: [
          "A go-to application for generating AI prompts efficiently.",
          "Hosted on Vercel with a streamlined build pipeline",
        ],
      },
      {
        name: "Sorting Visualizer",
        techStack: "React.js, Redux, Algorithms.",
        img: sortingVisualizer,
        sourceCodeLink: "https://github.com/34sravani-g/Sorting-Visualizer",
        hostedURL: "https://61248896b5745b7d011c67ea--awesome-mestorf-b3ba6b.netlify.app/",
        description: [
          "Implemented an application for visualizing sorting algorithms like mergesort, quicksort, bubblesort etc.",
          "Visualizing pathfinding algorithms are also added.",
        ],
      },
      {
        name: "Duo Meet",
        techStack: "HTML, CSS-flexbox, React.js, Express.js, MongoDB",
        img: duoMeet,
        sourceCodeLink: "https://github.com/34sravani-g/DuoMeet",
        hostedURL: "https://duomeet355.web.app/",
        description: [
          "Peer to Peer video calling web application with the functionality of Screen Sharing and text chatting.",
          "Used WebRTC for peer to peer connection.",
        ],
      },
      {
        name: "BookCart",
        techStack: "React.js, MongoDB, Express.js, Node.js.",
        img: bookCart,
        sourceCodeLink: "https://github.com/34sravani-g/BookCart",
        hostedURL: "https://bookcart-1.web.app/",
        description: [
          "Built a fully authenticated Ecommerce site which allows users for buying books with conditional searching",
          "Integrated payment gateway with paypal and card payment.",
        ],
      },
    ],
  },
  contact: {
    sectionTitle: "Get in touch",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    subjectPlaceholder: "Enter subject here",
    messagePlaceholder: "Enter your message here",
    submitText: "Submit",
    toastSuccess: "Email sent successfully!",
    toastFail: "Something went wrong :(",
  },
  email: {
    nameTitle: "Name:",
    emailTitle: "Email:",
    subjectTitle: "Subject:",
    messageTitle: "Message:",
    headerText: "New Portfolio Enquiry",
    footerText: "You can respond to this inquiry by replying to this email.",
  },
  navbar: {
    aboutLabel: "About",
    skillsLabel: "Skills",
    experienceLabel: "Experience",
    projectsLabel: "Projects",
    contactLabel: "Contact",
  },
  footer: {
    builtUsingText: "Built with 🩵 using Next.js & Tailwind CSS",
    copyrightText: "© 2025 Sravani. All Rights Reserved.",
    linkedInURL: "https://www.linkedin.com/in/sravani-g-1193131b0/",
    githubURL: "https://github.com/34sravani-g",
    gmailURL: "mailto:gurramsravani19@gmail.com",
    instaURL: "https://www.instagram.com/sravanigurram8/",
  },
};
