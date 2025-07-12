import { motion } from 'framer-motion';
import { Award, Code, Users, Zap } from 'lucide-react';
import { useState } from 'react';
import AchievementDetails from './AchievementDetails';

const achievements = [
  {
    icon: <Code size={32} />,
    title: "Best Web Application 2023",
    date: "December 2023",
    description: "Awarded for innovative use of 3D graphics in web applications",
    impact: "The project showcased groundbreaking techniques in WebGL rendering and set new standards for web-based 3D visualization.",
    recognition: "Recognized by the International Web Development Association",
    category: "Technical Innovation",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon: <Users size={32} />,
    title: "Open Source Contributor of the Year",
    date: "October 2023",
    description: "Top 1% contributor on GitHub in WebGL and Three.js projects",
    impact: "Contributions helped improve performance and accessibility in major open-source 3D visualization libraries.",
    recognition: "Featured in GitHub's annual report",
    category: "Open Source",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon: <Award size={32} />,
    title: "Tech Innovation Award",
    date: "August 2023",
    description: "Recognition for developing innovative AI solutions",
    impact: "Created AI-powered tools that improved developer productivity by 40%",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1553484771-047a44eee27b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon: <Zap size={32} />,
    title: "Developer Excellence",
    date: "June 2023",
    description: "Awarded for exceptional technical leadership",
    impact: "Led a team of 10 developers to successfully deliver a complex enterprise solution",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  if (selectedAchievement) {
    return (
      <AchievementDetails
        achievement={selectedAchievement}
        onBack={() => setSelectedAchievement(null)}
      />
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 relative">
      <div className="blur-dot w-[500px] h-[500px] left-0 top-0" />
      <div className="blur-dot-secondary w-[500px] h-[500px] right-0 bottom-0" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Achievements & Milestones
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300"
              onClick={() => setSelectedAchievement(achievement)}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-[var(--primary)]">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">{achievement.title}</h3>
                  <p className="text-[var(--text)] mb-4">{achievement.description}</p>
                  <div className="flex items-center space-x-2 text-sm text-[var(--muted)]">
                    <span>{achievement.date}</span>
                    <span>•</span>
                    <span className="text-[var(--primary)]">{achievement.category}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;