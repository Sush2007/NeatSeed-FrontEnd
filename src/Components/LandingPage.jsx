import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Home, Truck, Users, Activity, Bell, MapPin, Smile, Leaf, Globe, Code, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
// --- Helper Components for Animation ---

// Component for staggering child elements on scroll reveal
const ScrollReveal = ({ children, delay = 0.1, duration = 0.6, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// --- Navbar Component ---
const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <div className="text-2xl font-extrabold text-green-600 flex items-center">
        NeatSeed <Leaf className="w-5 h-5 ml-2 text-lime-500" />
      </div>
      <nav className="hidden md:flex space-x-8 font-medium">
        {['About', 'How It Works', 'Features', 'Vision'].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-gray-600 hover:text-green-600 transition duration-300">
            {item}
          </a>
        ))}
      </nav>
      <a href="#cta-section">
        <Link to="/login">
        <motion.button
          className="px-4 py-2 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
        </Link>
      </a>
    </div>
  </header>
);

// --- Hero Section ---
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Parallax effects
  const truckY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const leafRotate = useTransform(scrollYProgress, [0, 1], ['0deg', '90deg']);

  // Initial load animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} id="hero-section" className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-green-50 text-gray-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 text-green-800 leading-tight"
          >
            NeatSeed <span className="text-lime-500 text-6xl md:text-8xl lg:text-9xl">🌱</span>
            <br />
            A Smarter Way to Keep Our City Clean
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-green-700 font-medium mb-10 max-w-2xl"
          >
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
            >
              Because every clean street starts with a smart system.
            </motion.span>
          </motion.p>
         <Link to="/signup"> 
          <motion.button
            variants={itemVariants}
            className="px-8 py-4 bg-green-600 text-white text-lg font-bold rounded-full shadow-xl hover:bg-green-700 transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(16, 185, 129, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            New User? Register Here
          </motion.button>
          </Link>
        </motion.div>
        
      </div>

      {/* Motion-Based Visuals (Parallax/Looping) */}
      <motion.div
        className="absolute top-1/4 right-0 md:right-10 w-48 h-48 md:w-64 md:h-64 opacity-30 text-green-500"
        style={{ y: truckY }}
      >
        <Truck className="w-full h-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20 opacity-50 text-lime-400"
        style={{ rotate: leafRotate }}
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <Leaf className="w-full h-full" />
      </motion.div>
    </section>
  );
};

// --- About Section ---
const AboutSection = () => {
  const roles = [
    { title: 'Households', icon: Home, color: 'text-blue-500', description: 'Facilitate easy registration and real-time tracking of their collection schedule.' },
    { title: 'Drivers', icon: Truck, color: 'text-yellow-500', description: 'Empower them with optimized routes and digital collection status updates.' },
    { title: 'Administrators', icon: Users, color: 'text-red-500', description: 'Monitor live analytics and track overall waste collection efficiency.' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            The NeatSeed Story
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            This project is the result of a Hackathon initiative by first-year students of Veer Surendra Sai University of Technology (VSSUT), Burla. NeatSeed was designed to streamline the waste management process across three core pillars of the community.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              className="p-8 border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2 bg-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 * index }}
            >
              <motion.div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${role.color} bg-opacity-10`}
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: index }}
              >
                <role.icon className={`w-8 h-8 ${role.color}`} />
              </motion.div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">{role.title}</h3>
              <p className="text-gray-600 text-center">{role.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- How It Works Section ---
const HowItWorksSection = () => {
  const steps = [
    { num: '1', title: 'User Registers & Tracks', text: 'Households sign up, access the collection schedule, and receive smart reminders. They can instantly report missed collections.' },
    { num: '2', title: 'Driver Updates Status', text: 'Drivers use a mobile interface to view optimized routes and mark bin collections as complete in real-time.' },
    { num: '3', title: 'Admin Monitors Analytics', text: 'Municipal administrators gain access to a live dashboard showing route completion, efficiency, and resource allocation data.' },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
            How NeatSeed Connects Everyone
          </h2>
        </ScrollReveal>

        <div className="relative flex flex-col items-center">
          {/* Timeline Connector Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-200" />

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`flex w-full mb-16 md:mb-24 ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className={`w-full md:w-1/2 flex ${isLeft ? 'md:pr-12' : 'md:pl-12 justify-end'}`}>
                  <div className={`p-8 bg-white border border-green-300 rounded-xl shadow-xl max-w-md ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="flex items-center mb-4 justify-center md:justify-start">
                      {/* Step Circle */}
                      <motion.div
                        className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {step.num}
                      </motion.div>
                      <h3 className="text-2xl font-semibold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.text}</p>
                  </div>
                </div>

                {/* Dot at the center line */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-green-600 w-5 h-5 rounded-full ring-8 ring-green-50 z-20" style={{ top: `${index * 33.33}%` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Features Section ---
const FeaturesSection = () => {
  const features = [
    { icon: Activity, title: 'Real-time Tracking', text: 'Monitor collection status and truck location instantly.' },
    { icon: Bell, title: 'Smart Notifications', text: 'Automated alerts for households about scheduled collection times.' },
    { icon: MapPin, title: 'Driver-Route Optimization', text: 'AI-driven routing reduces fuel consumption and operational time.' },
    { icon: Users, title: 'Complaint Management', text: 'Seamless platform for citizens to report issues and track resolution.' },
    { icon: Zap, title: 'Reward System', text: 'Gamified rewards for responsible waste segregation (Token/NFT integration via Verbwire API coming soon!).' },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
            Core Features That Drive Change
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 bg-green-50 rounded-2xl shadow-lg border border-green-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 * index }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(16, 185, 129, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <feature.icon className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Hackathon Spirit Section ---
const HackathonSpiritSection = () => (
  <section className="py-20 md:py-32 bg-gray-900 text-white overflow-hidden relative">
    {/* Animated Gradient Background */}
    <motion.div
      className="absolute inset-0 z-0 opacity-50"
      initial={{ backgroundPosition: '0% 0%' }}
      animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
      transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      style={{
        background: 'linear-gradient(45deg, #10b981, #3b82f6, #8b5cf6, #10b981)',
        backgroundSize: '400% 400%',
      }}
    />

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <ScrollReveal>
        <div className="text-6xl mb-6">
          <motion.span
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            💡
          </motion.span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-green-300">
          Built by Team Synapse. Driven by Passion.
        </h2>

        <motion.p
          className="text-2xl font-medium text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          NeatSeed was born in the result of a Hackathon — built from scratch with creativity, teamwork, and caffeine! ☕
        </motion.p>
      </ScrollReveal>

      {/* Coding Themed Timeline/Icon */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Code className="w-20 h-20 text-blue-400 opacity-80" />
      </motion.div>
    </div>
  </section>
);

// --- Vision Section ---
const VisionSection = () => (
  <section id="vision" className="py-20 md:py-32 bg-green-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <ScrollReveal>
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Our Global Vision
        </h2>
        <p className="text-2xl font-medium text-green-800 max-w-4xl mx-auto mb-16">
          "Our mission is to bring technology and responsibility together — creating cleaner neighborhoods and smarter cities, one seed of change at a time."
        </p>
      </ScrollReveal>

      {/* Looping Animation: Rotating Earth/Globe */}
      <motion.div
        className="w-40 h-40 mx-auto text-green-500 shadow-2xl rounded-full p-4 bg-white"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(16, 185, 129, 0.7)' }}
      >
        <Globe className="w-full h-full" />
      </motion.div>
    </div>
  </section>
);

// --- Meet the Team Section (Optional but included) ---
const TeamSection = () => {
    const teamMembers = [
        { name: 'Developer A', role: 'UI/UX & Frontend', emoji: '💻' },
        { name: 'Developer B', role: 'Database & Backend', emoji: '⚙️' },
        { name: 'Developer C', role: 'Algorithm & Logic', emoji: '🧠' },
    ];
    return (
        <section id="team" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
                        Meet the VSSUT Team
                    </h2>
                </ScrollReveal>
                <div className="flex flex-wrap justify-center gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="w-full sm:w-64 p-6 bg-gray-50 rounded-xl shadow-lg border-t-4 border-green-500 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                        >
                            <div className="text-4xl mb-4">{member.emoji}</div>
                            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                            <p className="text-green-600 font-medium">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Call to Action Section ---
const CTASection = () => (
  <section id="cta-section" className="py-20 bg-blue-600">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-8">
        Ready to Plant the Seed for a Cleaner Future?
      </h2>

      <motion.a
        href="/" // Links back to the hypothetical homepage
        className="inline-block px-12 py-4 text-xl font-bold rounded-full shadow-2xl bg-white text-blue-600"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        whileHover={{ scale: 1.1, backgroundColor: '#f0f9ff' }}
        whileTap={{ scale: 0.95 }}
      >
        Join the Movement 🌍
      </motion.a>
    </div>
  </section>
);

// --- Footer Component ---
const Footer = () => (
  <footer className="bg-gray-800 text-gray-400 py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} NeatSeed 🌱. Built with Spirit at VSSUT Hackathon.</p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white transition">Privacy</a>
        <a href="#" className="hover:text-white transition">Terms</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---
export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans antialiased bg-white text-gray-900">
      {/* Load Inter font via Tailwind config (assumed) */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          /* Custom scrollbar for better aesthetic */
          ::-webkit-scrollbar {
              width: 8px;
          }
          ::-webkit-scrollbar-track {
              background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
              background: #34d399; /* Green-400 */
              border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
              background: #10b981; /* Green-600 */
          }
        `}
      </style>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <FeaturesSection />
        <HackathonSpiritSection />
        <VisionSection />
       
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}