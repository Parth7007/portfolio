import project1 from "../assets/projects/pr-2.png";
import project2 from "../assets/projects/pr-3.png";
import project3 from "../assets/projects/pr-4.jpeg";
import project4 from "../assets/projects/pr-1.jpeg";

export const HERO_CONTENT = `I'm a passionate and skilled engineer with expertise in both full-stack development and cutting-edge AI technologies. I specialize in building dynamic web applications using the MERN stack and leveraging the power of Artificial Intelligence, Machine Learning, and Deep Learning to create intelligent solutions.`;

export const ABOUT_TEXT = `I'm Parth Kadoo, a dedicated MERN Stack Developer and AI/ML/DL Engineer with a strong passion for technology and innovation. Currently in my third year of B.Tech in Artificial Intelligence and Data Science, I have honed my skills in both web development and artificial intelligence, allowing me to work on a diverse range of projects. With a solid foundation in JavaScript and the MERN stack (MongoDB, Express.js, React, Node.js), I create responsive, user-friendly web applications that are both functional and visually appealing. My expertise extends beyond web development, as I am also deeply involved in the world of Artificial Intelligence, Machine Learning, and Deep Learning. I enjoy working on projects that challenge me to think critically and push the boundaries of what's possible with technology.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Movie Prediction System",
    image: project4,
    description:
      "A fully functional Movie Prediction Using Machine Learning and hosted through Streamlit. Suggests the similar movies based on user's preferences.",
    technologies: ["Machine Learning", "Streamlit", "Python"],
  },
  {
    title: "Customer Churn Prediction Using ANN",
    image: project1,
    description:
      "A Customer Churn Prediction model using Artificial Neural Network. The model predicts whether a customer will churn or not.",
    technologies: ["Tensorflow", "Keras", "Pandas", "Numpy"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Real Time Chat Application",
    image: project2,
    description:
      "A real-time chat application built with PHP where you create a room and then multiple user can have a chat with each other.",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "Apache Server"],
  },
];

export const CONTACT = {
  address: "Pune, Maharashtra",
  phoneNo: "9588662213",
  email: "parthkadoo007@gmail.com",
};
