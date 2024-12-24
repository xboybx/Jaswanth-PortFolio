import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectDetails from './ProjectDetails';

const projects = [

  {
    title: 'Gen AI',
    description: 'Generative Ai, a clone of OpenAI',
    image: "https://a.storyblok.com/f/202591/7680x3000/f839a18e22/what-is-generative-ai2-1.jpg/m/1920x750/filters:format(webp):quality(90)",
    tags: ['Html', 'Css', 'JavaScript', 'React'],
    longDescription: "The Gemini AI Clone simulates AI-powered functionalities like text generation and summarization. It provides a seamless and interactive user interface for exploring AI capabilities."
    , challenges: [
      'Real-time Interactions: Ensuring accurate and      responsive AI functionalities.',
      'API Integration: Managing real-time API calls and data exchange.',
      'User Experience: Designing an intuitive and visually appealing interface.',
    ],
    solutions: [
      'Efficient API Handling: Integrated Gemini API for smooth AI operations.',
      'Performance Optimization: Used React for modular and reusable components.',
      'Responsive Design: Ensured cross-device compatibility for a better user experience.'
    ],
    githubUrl: 'https://github.com/xboybx/GEN-AI_Clone',
    liveUrl: 'https://xboybx.github.io/GEN-AI_Clone/',
  },

  {
    title: 'Student Attendance System',
    description: 'Real-timeStudent Attendance System to mark attendance online',
    image: "https://img.freepik.com/free-vector/appointment-booking-with-calendar_23-2148556782.jpg ",
    tags: ['Html', 'Css', 'JavaScript', 'React'],
    longDescription:
      'The College Student Attendance System allows teachers to mark attendance online. It simplifies the attendance tracking process, providing a user-friendly interface for teachers to mark attendance and for students to view their records.',
    challenges: [
      'Real-time Updates: Ensuring immediate updates and notifications for both teachers and students.',
      'Security: Protecting sensitive data and maintaining access control.',
      'Usability: Creating an intuitive interface for teachers and students alike.',
    ],
    solutions: [
      'Database Integration: Used a database to manage real-time attendance updates.',
      'Authentication: Implemented secure login mechanisms to protect data.',
      'Responsive Design: Designed a user-friendly interface that adapts to different devices.',
    ],
    githubUrl: 'https://github.com/xboybx/Students-Attendance-System',
    liveUrl: 'https://example.com',
  },

  {
    title: 'Gps track',
    description: 'It Tracks the User\'s Location on a Map',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/022/966/737/small_2x/urban-city-map-town-streets-gps-navigation-downtown-map-with-roads-parks-and-river-abstract-roadmap-navigations-scheme-illustration-vector.jpg',
    tags: ['Html', 'Css', 'JavaScript', 'Express'],
    longDescription:
      'The Map Locator is a web-based application that identifies and displays the user\'s current location on a map using GPS and geolocation APIs.',
    challenges: [
      'Geolocation Accuracy: Ensuring precise location tracking.',
      'API Integration: Integrating map services for real-time visualization.',
      'Cross-Browser Compatibility: Handling geolocation features across various browsers.',
    ],
    solutions: [
      'Geolocation API: Used to fetch the user\'s current coordinates.',
      'Leaflet.js Integration: Displayed location on an interactive map.',
    ],
    githubUrl: 'https://github.com/xboybx/GpsTrack',
    liveUrl: 'https://xboybx.github.io/GpsTrack/',
  },
  {
    title: 'Minimal Wallet',
    description:
      'The Minimal Wallet is a simple financial tracker that allows users to simulate deposits and withdrawals',
    image:
      "https://designtemplate.tech/tue-jan-10-2023-2-28-pm29917.webp",
    tags: ['Html', 'Css', 'JavaScript'],
    longDescription:
      'The project is a lightweight financial tracker allowing users to simulate deposits, withdrawals, and view balances. It has a simple, user-focused interface with clear input fields and interactive buttons',
    challenges: [
      'Dynamic Calculation: Ensuring accurate updates to balances based on user actions.',
      'Error Handling: Managing invalid inputs or negative balances effectively.',
      'User Engagement: Creating a visually appealing and intuitive UI.',
    ],
    solutions: [
      'Interactive JavaScript Logic: Handles deposits/withdrawals seamlessly.',
      'Input Validation: Could be improved to handle user errors.',
      'Minimal Design: Focuses on simplicity and usability.',
    ],
    githubUrl: 'https://github.com/xboybx/Minimal-Wallet',
    liveUrl: 'https://xboybx.github.io/Minimal-Wallet/',
  },

  {
    title: 'Notes App',
    description: 'Notes app to create, edit, and delete notes',
    image: 'https://c7.alamy.com/comp/2JTAKG6/young-woman-uses-digital-planner-creates-pins-notes-tables-and-personal-calendar-sits-at-her-desk-at-home-uses-note-taking-app-on-her-notebook-2JTAKG6.jpg',
    tags: ['Html', 'Css', 'JavaScript', 'React', 'MongoDB'],
    longDescription:
      'The Notes App is a React-based application inspired by Google Keep. It allows users to create, edit, and delete notes with an intuitive and minimalistic design.',
    challenges: [
      'State Management: Handling dynamic addition and deletion of notes.',
      'User Interaction: Providing a seamless editing experience.',
      'Design Consistency: Mimicking Google Keep\'s visual simplicity.',
    ],
    solutions: [
      'Dynamic Components: Used React state and props to manage note interactions.',
      'Local Storage: Implemented data persistence for user convenience.',
    ],
    githubUrl: 'https://github.com/xboybx/Notes-App',
    liveUrl: 'https://xboybx.github.io/Notes-App/',
  },
  {
    title: 'To-Do List',
    description:
      'The To-Do List app helps users manage tasks by allowing them to add, edit, and track completed items in a simple and user-friendly interface.',
    image:
      'https://marketplace.canva.com/EAFOPn_pKEM/1/0/1600w/canva-purple-pink-cute-bright-playful-organiser-desktop-wallpaper-VtqMkDdt_JA.jpg',
    tags: ['Html', 'Css', 'JavaScript'],
    longDescription:
      'The project is a simple and user-friendly To-Do List app. Users can add tasks, manage their daily activities, and keep track of completed items. The interface is clean and minimalistic, focusing on usability.',
    challenges: [
      'Dynamic Task Management: Ensuring smooth addition, deletion, and management of tasks.',
      'Responsive Design: Making the interface adaptable across different screen sizes.',
      'State Persistence: Retaining tasks when the page is refreshed.',
    ],
    solutions: [
      'Efficient Event Handling: Used JavaScript to handle user interactions dynamically.',
      ' Simple Styling: CSS ensured clarity and responsiveness.',
      ' Local Storage: Could be implemented for task persistence.',
    ],
    githubUrl: 'https://github.com/xboybx/To-Do',
    liveUrl: 'https://xboybx.github.io/To-Do/',
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    return (
      <ProjectDetails
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div className="min-h-screen py-50 px-6 lg:px-16 relative">
      <div className="blur-dot w-[500px] h-[500px] left-0 top-0" />
      <div className="blur-dot-secondary w-[500px] h-[500px] right-0 bottom-0" />

      <div className="max-w-7xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl xs:text-5xl font-black mb-12 gradient-text"
        >
          MY WORK
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl cursor-pointer group hover:bg-white/20 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <h3 className="text-xl font-bold mb-2 gradient-text">
                {project.title}
              </h3>
              <p className="text-[var(--text)] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm font-medium bg-white/5 border border-white/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
