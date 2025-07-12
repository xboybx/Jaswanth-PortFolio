import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) {
      alert("Please enter a message before sending.");
      return;
    }
    const mailtoLink = `mailto:jeswanth012@gmail.com?subject=Message from ${encodeURIComponent(
      name || "Anonymous"
    )}&body=${encodeURIComponent(
      message + (email ? `\n\nFrom: ${email}` : "")
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen py-50 px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-lavender-600 to-lavender-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Have a project in mind? Let's work together to create something
            amazing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm 
                           border-2 border-lavender-200 focus:border-lavender-400
                           focus:ring-4 focus:ring-lavender-400/20
                           transition-all duration-200 outline-none"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm 
                           border-2 border-lavender-200 focus:border-lavender-400
                           focus:ring-4 focus:ring-lavender-400/20
                           transition-all duration-200 outline-none"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm 
                           border-2 border-lavender-200 focus:border-lavender-400
                           focus:ring-4 focus:ring-lavender-400/20
                           transition-all duration-200 outline-none h-32 resize-none"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-xl hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-lavender-500/10 border border-lavender-500/20">
                    <Mail className="text-lavender-600" />
                  </div>
                  <span className="text-gray-600">j.jaswanth@icloud.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-lavender-500/10 border border-lavender-500/20">
                    <Phone className="text-lavender-600" />
                  </div>
                  <span className="text-gray-600">+919701445846</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-lavender-500/10 border border-lavender-500/20">
                    <MapPin className="text-lavender-600" />
                  </div>
                  <span className="text-gray-600">Kothagudem</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
