  import { motion } from 'framer-motion';

  export function SkillTag({ skill }) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className="relative group"
      >
        {/* Decorative elements */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] opacity-20 blur-sm rounded-lg group-hover:opacity-30 transition-opacity" />
        <div className="absolute inset-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] opacity-10 group-hover:opacity-20 rounded-lg transition-opacity" />
        
        {/* Main content */}
        <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
          <span className="relative z-10 font-medium text-[var(--gray-800)]">{skill}</span>
          
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[var(--primary)] opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[var(--primary)] opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[var(--primary)] opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[var(--primary)] opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
      </motion.div>
    );
  }