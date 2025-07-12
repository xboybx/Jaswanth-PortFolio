import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

function ProjectDetails({ onBack, project }) {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{project.title}</h1>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-black-100 text-lg">{project.longDescription}</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
                <ul className="list-disc list-inside space-y-2 text-black-300">
                  {project.challenges?.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Solutions</h2>
                <ul className="list-disc list-inside space-y-2 text-black-300">
                  {project.solutions?.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-500 bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
                  style={{ color: "#ea4c89" }}
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-500 bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDetails;
