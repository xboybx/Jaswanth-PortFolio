import { motion } from 'framer-motion';
import { ArrowLeft, Award, Calendar, Trophy } from 'lucide-react';

function AchievementDetails({ onBack, achievement }) {
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
          <span>Back to Achievements</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 rounded-xl p-8"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{achievement.title}</h1>
              <div className="flex items-center space-x-4 text-gray-400">
                <span className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{achievement.date}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Trophy size={16} />
                  <span>{achievement.category}</span>
                </span>
              </div>
            </div>
            <div className="text-blue-400">
              <Award size={48} />
            </div>
          </div>

          {achievement.image && (
            <div className="relative h-64 rounded-lg overflow-hidden mb-8">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-300">{achievement.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Impact</h2>
              <p className="text-gray-300">{achievement.impact}</p>
            </div>

            {achievement.recognition && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Recognition</h2>
                <p className="text-gray-300">{achievement.recognition}</p>
              </div>
            )}

            <div className="pt-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full">
                <Trophy size={16} />
                <span>{achievement.category}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AchievementDetails;