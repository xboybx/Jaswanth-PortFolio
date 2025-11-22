import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import ProjectDetails from "./ProjectDetails";
import {
  FaTasks,
  FaRobot,
  FaExchangeAlt,
  FaUsers,
  FaUserGraduate,
  FaMapMarkerAlt,
  FaPiggyBank,
  FaStickyNote,
  FaListUl,
} from "react-icons/fa";

const projects = [
  {
    title: "AI CollabSphere",
    description:
      "CollabSphere is a collaborative development platform designed to help developers connect, create projects, and work together efficiently.",
    image:
      "https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-30428.jpg?semt=ais_hybrid&w=740",
    tags: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Socket.io"],
    longDescription:
      "CollabSphere is a collaborative development platform designed to help developers connect, create projects, and work together efficiently. It integrates AI capabilities within a group chat environment to assist developers in their tasks and its a Mini bolt.new..",
    challenges: [
      "Real-time Interactions: Ensuring accurate and      responsive AI functionalities.",
      "API Integration: Managing real-time API calls and data exchange.",
      "User Experience: Designing an intuitive and visually appealing interface.",
    ],
    solutions: [
      "Efficient API Handling: Integrated Gemini API for smooth AI operations.",
      "Performance Optimization: Used React for modular and reusable components.",
      "Responsive Design: Ensured cross-device compatibility for a better user experience.",
    ],
    githubUrl: "https://github.com/xboybx/CollabSphere",
    liveUrl: "https://github.com/xboybx/CollabSphere",
  },
  {
    title: "Skills Exchange Frelance",
    description:
      "The Student Freelancing Platform is a web-based application project is to create a platform where students can share and monetize their skills while learning from peers.",
    image:
      "https://metrocsg.com/wp-content/uploads/2023/04/istockphoto-1359879029-612x612-1.jpg",
    tags: ["JavaScript", "React", "Express", "MongoDB", "Socket.io"],
    longDescription:
      "The Student Freelancing Platform is a web-based application designed to connect students for skill-sharing and freelancing opportunities. It allows students to act as both mentors and learners, enabling them to share their skills, book sessions, and communicate in real-time This platform is designed for students to act as both mentors and learners. It includes features like skill sharing, booking, real-time chat, and notifications.",
    challenges: [
      "Real-time Interactions: Ensuring accurate and      responsive AI functionalities.",
      "API Integration: Managing real-time API calls and data exchange.",
      "User Experience: Designing an intuitive and visually appealing interface.",
    ],
    solutions: [
      "Efficient API Handling: Integrated Gemini API for smooth AI operations.",
      "Performance Optimization: Used React for modular and reusable components.",
      "Responsive Design: Ensured cross-device compatibility for a better user experience.",
    ],
    githubUrl: "https://github.com/xboybx/GEN-AI_Clone",
    liveUrl: "https://gen-ai-clone.netlify.app/",
  },
  {
    title: "Employee Management System",
    description: "Employee Management System to track & manage employee tasks",
    image:
      "https://media.istockphoto.com/id/1438427655/vector/flat-business-team-at-scrum-board-with-sticky-notes.jpg?s=612x612&w=0&k=20&c=zQH-y42R0hC-LWmuTwsBCn70Kj35GpCdsCQmwheonNo=",
    tags: ["Html", "Css", "JavaScript", "React"],
    longDescription:
      "The Employee Management System allows administrators to manage employee tasks and track their progress. It simplifies the task management process, providing a user-friendly interface for administrators to assign tasks and for employees to view their task records. The system also includes a robust login system, task analytics, and task details.",
    challenges: [
      "Task Assignment: Assigning tasks to employees and tracking their progress in real-time.",
      "Security: Protecting sensitive data and maintaining access control.",
      "Scalability: Ensuring the system can handle a large number of users and tasks.",
    ],
    solutions: [
      "Task Assignment Algorithm: Implemented a task assignment algorithm to assign tasks to employees based on their availability and skill set.",
      "Secure Authentication: Used a secure authentication library to authenticate users and protect data.",
      "Scalable Architecture: Designed a scalable architecture to handle a large number of users and tasks.",
    ],
    githubUrl: "https://github.com/xboybx/Employee-Managment-System",
    liveUrl: "https://employe-mangment-system.netlify.app/",
  },
  {
    title: "Student Attendance System",
    description: "Real-timeStudent Attendance System to mark attendance online",
    image:
      "https://img.freepik.com/free-vector/appointment-booking-with-calendar_23-2148556782.jpg ",
    tags: ["Html", "Css", "JavaScript", "React"],
    longDescription:
      "The College Student Attendance System allows teachers to mark attendance online. It simplifies the attendance tracking process, providing a user-friendly interface for teachers to mark attendance and for students to view their records.",
    challenges: [
      "Real-time Updates: Ensuring immediate updates and notifications for both teachers and students.",
      "Security: Protecting sensitive data and maintaining access control.",
      "Usability: Creating an intuitive interface for teachers and students alike.",
    ],
    solutions: [
      "Database Integration: Used a database to manage real-time attendance updates.",
      "Authentication: Implemented secure login mechanisms to protect data.",
      "Responsive Design: Designed a user-friendly interface that adapts to different devices.",
    ],
    githubUrl: "https://github.com/xboybx/Students-Attendance-System-V2",
    liveUrl: "https://students-attendance-systems.netlify.app/",
  },
  {
    title: "Manage Team Tasks App",
    description:
      "Full-stack task management application with real-time updates",
    image:
      "https://au.steelcase.com/cdn/shop/articles/manage_a_team_2000x600_crop_center.jpg?v=1601021296",
    tags: ["Next.js", "Node.js", "Express", "MongoDB"],
    longDescription:
      "The app is designed for teams to manage their tasks collaboratively. Users can create tasks, assign them to team members, update task status and priority, and track overdue tasks. Notifications keep users informed about new assignments and updates.",
    challenges: [
      "Real-time Updates: Implementing WebSocket for live task updates",
      "User Authentication: Secure role-based access control",
      "Performance: Optimizing for large datasets and concurrent users",
    ],
    solutions: [
      "Socket.io Integration: Real-time task updates and notifications",
      "JWT Authentication: Secure user sessions and role management",
      "MongoDB Indexing: Optimized database queries for better performance",
    ],
    githubUrl: "https://github.com/xboybx/GEN-AI_Clone",
    liveUrl: "https://gen-ai-clone.netlify.app/",
  },
  {
    title: "Gps track",
    description: "It Tracks the User's Location on a Map",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/022/966/737/small_2x/urban-city-map-town-streets-gps-navigation-downtown-map-with-roads-parks-and-river-abstract-roadmap-navigations-scheme-illustration-vector.jpg",
    tags: ["Html", "Css", "JavaScript", "Express"],
    longDescription:
      "The Map Locator is a web-based application that identifies and displays the user's current location on a map using GPS and geolocation APIs.",
    challenges: [
      "Geolocation Accuracy: Ensuring precise location tracking.",
      "API Integration: Integrating map services for real-time visualization.",
      "Cross-Browser Compatibility: Handling geolocation features across various browsers.",
    ],
    solutions: [
      "Geolocation API: Used to fetch the user's current coordinates.",
      "Leaflet.js Integration: Displayed location on an interactive map.",
    ],
    githubUrl: "https://github.com/xboybx/GpsTrack",
    liveUrl: "https://xboybx.github.io/GpsTrack/",
  },
  {
    title: "Wallet-piggyBank",
    description:
      "The Wallet is a simple financial tracker that allows users to simulate deposits and withdrawals and acts as PiggyBank",
    image:
      "https://unblast.com/wp-content/uploads/2022/08/Piggy-Bank-Illustration.jpg",
    tags: ["Html", "Css", "JavaScript"],
    longDescription:
      "The project is a lightweight financial tracker allowing users to simulate deposits, withdrawals, and view balances. It has a simple, user-focused interface with clear input fields and interactive buttons",
    challenges: [
      "Dynamic Calculation: Ensuring accurate updates to balances based on user actions.",
      "Error Handling: Managing invalid inputs or negative balances effectively.",
      "User Engagement: Creating a visually appealing and intuitive UI.",
    ],
    solutions: [
      "Interactive JavaScript Logic: Handles deposits/withdrawals seamlessly.",
      "Input Validation: Could be improved to handle user errors.",
      "Minimal Design: Focuses on simplicity and usability.",
    ],
    githubUrl: "https://github.com/xboybx/Wallet-PiggyBank",
    liveUrl: "https://piggy-wallet.netlify.app/",
  },
  {
    title: "Notes App",
    description: "Notes app to create, edit, and delete notes",
    image:
      "https://img.freepik.com/free-vector/letter-concept-illustration_114360-27243.jpg?semt=ais_hybrid&w=740",
    tags: ["Html", "Css", "JavaScript", "React", "MongoDB"],
    longDescription:
      "The Notes App is a React-based application inspired by Google Keep. It allows users to create, edit, and delete notes with an intuitive and minimalistic design.",
    challenges: [
      "State Management: Handling dynamic addition and deletion of notes.",
      "User Interaction: Providing a seamless editing experience.",
      "Design Consistency: Mimicking Google Keep's visual simplicity.",
    ],
    solutions: [
      "Dynamic Components: Used React state and props to manage note interactions.",
      "Local Storage: Implemented data persistence for user convenience.",
    ],
    githubUrl: "https://github.com/xboybx/Notes-App",
    liveUrl: "https://xboybx.github.io/Notes-App/",
  },
  {
    title: "To-Do List",
    description:
      "The To-Do List app helps users manage tasks by allowing them to add, edit, and track completed items in a simple and user-friendly interface.",
    image:
      "https://marketplace.canva.com/EAFOPn_pKEM/1/0/1600w/canva-purple-pink-cute-bright-playful-organiser-desktop-wallpaper-VtqMkDdt_JA.jpg",
    tags: ["Html", "Css", "JavaScript"],
    longDescription:
      "The project is a simple and user-friendly To-Do List app. Users can add tasks, manage their daily activities, and keep track of completed items. The interface is clean and minimalistic, focusing on usability.",
    challenges: [
      "Dynamic Task Management: Ensuring smooth addition, deletion, and management of tasks.",
      "Responsive Design: Making the interface adaptable across different screen sizes.",
      "State Persistence: Retaining tasks when the page is refreshed.",
    ],
    solutions: [
      "Efficient Event Handling: Used JavaScript to handle user interactions dynamically.",
      " Simple Styling: CSS ensured clarity and responsiveness.",
      " Local Storage: Could be implemented for task persistence.",
    ],
    githubUrl: "https://github.com/xboybx/To-Do",
    liveUrl: "https://xboybx.github.io/To-Do/",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleBack = () => setSelectedProject(null);

  if (selectedProject) {
    return <ProjectDetails project={selectedProject} onBack={handleBack} />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen py-20 px-6 bg-bg-primary"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-text-secondary">
            Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-bg-secondary rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              style={{ boxShadow: "0 0 0 rgba(59, 130, 246, 0)" }}
              whileHover={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden hidden sm:block">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent opacity-60"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-text-secondary group-hover:text-accent transition-colors flex items-center gap-2">
                  <span className="sm:hidden text-accent">
                    {project.title.includes("Manage Team") ? (
                      <FaTasks />
                    ) : project.title.includes("AI CollabSphere") ? (
                      <FaRobot />
                    ) : project.title.includes("Skills Exchange") ? (
                      <FaExchangeAlt />
                    ) : project.title.includes("Employee Management") ? (
                      <FaUsers />
                    ) : project.title.includes("Student Attendance") ? (
                      <FaUserGraduate />
                    ) : project.title.includes("Gps track") ? (
                      <FaMapMarkerAlt />
                    ) : project.title.includes("Wallet-piggyBank") ? (
                      <FaPiggyBank />
                    ) : project.title.includes("Notes App") ? (
                      <FaStickyNote />
                    ) : project.title.includes("To-Do List") ? (
                      <FaListUl />
                    ) : (
                      <FaListUl />
                    )}
                  </span>
                  {project.title}
                </h3>
                <p className="text-text-primary line-clamp-2 hidden sm:block">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:hidden">
                  <p className="text-text-primary">{project.description}</p>
                </div>
                <div className="hidden sm:flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-bg-primary text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
