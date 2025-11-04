import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import {
  Leaf,
  Truck,
  Home,
  UserCheck,
  MapPin,
  Bell,
  LayoutDashboard,
  Award,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MoveRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Reusable Animation Variants ---

/**
 * Variant for a container that staggers its children's animations.
 * @example
 * <motion.div variants={staggerContainer} initial="hidden" animate="show">
 * <motion.div variants={fadeInUp}>Item 1</motion.div>
 * <motion.div variants={fadeInUp}>Item 2</motion.div>
 * </motion.div>
 */
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between each child animating in
    },
  },
};

/**
 * Variant for an element to fade in and move up.
 * Used as a child of staggerContainer.
 */
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

/**
 * Variant for an element to fade in from a scaled-down state.
 * Triggered when in view.
 */
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};


// --- Individual Components ---

/**
 * FloatingLeaf Component
 * Creates a leaf SVG that floats and drifts infinitely.
 * @param {object} props - Component props.
 * @param {string} props.className - Additional classes for positioning and styling.
 * @param {number} props.duration - Animation duration for variation.
 */
const FloatingLeaf = ({ className, duration = 10 }) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -20, 0, 10, 0], // Bobbing motion
        x: [0, 10, 0, -10, 0], // Drifting motion
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Leaf className="text-green-300/60" size={60} />
    </motion.div>
  );
};

/**
 * Header Component
 * A sticky header that animates in on load.
 */
const Header = () => {
  return (
    <motion.header
      // Light theme changes: bg-white/90, border-gray-200, dark text
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
    >
      <nav className="container mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">
          NeatSeed 
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">How it Works</a>
          <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
          <a href="#community" className="text-gray-600 hover:text-green-600 transition-colors">Community</a>
        </div>
        <Link to="/login">
        <motion.button
          className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
         Login
        </motion.button>
        </Link>
      </nav>
    </motion.header>
  );
};

/**
 * HeroSection Component
 * The main "wow" section with staggered text and floating leaves.
 */
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-neutral-50">
      {/* Background shapes (subtle light-theme shapes) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100/50 rounded-full filter blur-3xl opacity-50 -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100/50 rounded-full filter blur-3xl opacity-50 translate-x-20 translate-y-20"></div>
      
      {/* Floating Leaves */}
      <FloatingLeaf className="top-1/4 left-1/4" duration={12} />
      <FloatingLeaf className="top-1/2 left-1/5" duration={8} />
      <FloatingLeaf className="bottom-1/4 right-1/4" duration={10} />
      <FloatingLeaf className="top-1/3 right-1/3 z-20" duration={9} />

      <div className="container mx-auto max-w-6xl px-4 text-center z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            Building Cleaner Cities
            <br />
            with <span className="text-green-600">Smarter Tech</span> 🌱
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            variants={fadeInUp}
          >
            NeatSeed connects residents, drivers, and admins to create a truly
            efficient and eco-friendly waste management system.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            variants={fadeInUp}
          > 
          <Link to="/signup "> 
          <motion.button
              className="bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
           </Link>
            
            <motion.button
              className="bg-transparent text-green-600 px-8 py-3 rounded-full font-semibold text-lg border border-green-600 hover:bg-green-50 transition-colors"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * AboutCard Component
 * A reusable card for the "How it Works" section.
 */
const AboutCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      // Light theme: bg-white, shadow, light border
      className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex-1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02, borderColor: '#34d399' /* green-400 hover for visual pop */ }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: delay, ease: 'easeOut' }}
    >
      <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

/**
 * AboutSection Component
 * Explains the system for different user types.
 */
const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-green-600 font-semibold">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            A Simple Loop for a Clean Sweep
          </h2>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <AboutCard
            icon={<Home size={32} />}
            title="For Residents"
            description="Easily report waste, track collection trucks in real-time, and get notified of your pickup schedule."
            delay={0}
          />
          <AboutCard
            icon={<Truck size={32} />}
            title="For Drivers"
            description="Access optimized routes, receive instant alerts for new pickups, and update collection status with one tap."
            delay={0.2}
          />
          <AboutCard
            icon={<UserCheck size={32} />}
            title="For Admins"
            description="Oversee the entire operation from a central dashboard, manage routes, and analyze data for better insights."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

/**
 * FeatureCard Component
 * A reusable card for the "Features" section.
 */
const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      // Light theme: bg-white, shadow, light border
      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: delay, ease: 'easeOut' }}
    >
      <div className="bg-green-100 text-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

/**
 * FeaturesSection Component
 * Highlights the key features with a grid layout.
 */
const FeaturesSection = () => {
  const features = [
    {
      icon: <MapPin size={24} />,
      title: "Smart Tracking",
      description: "Live GPS tracking of all collection vehicles for full transparency."
    },
    {
      icon: <Bell size={24} />,
      title: "Real-Time Alerts",
      description: "Instant notifications for residents on pickup times and delays."
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: "Admin Dashboard",
      description: "A powerful hub to monitor all activities, drivers, and user reports."
    },
    {
      icon: <Award size={24} />,
      title: "Eco NFT Rewards",
      description: "Earn digital rewards for consistent and responsible waste disposal."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-green-600 font-semibold">Our Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Smarter Waste, Cleaner Future
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.15} // Staggered delay for each card
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * AnimatedCounter Component
 * Animates a number from 0 to a target value when in view.
 * @param {object} props - Component props.
 * @param {number} props.toValue - The target number to animate to.
 * @param {string} props.postfix - A string to append after the number (e.g., "+", "Kg").
 */
const AnimatedCounter = ({ toValue, postfix = "" }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(0, toValue, {
        duration: 2,
        ease: 'easeOut',
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, toValue]);

  return (
    <span className="flex items-center justify-center">
      <span ref={nodeRef}>0</span>
      <span>{postfix}</span>
    </span>
  );
};

/**
 * StatsSection (Community) Component
 * Shows animated stats and an environmental impact bar.
 */
const StatsSection = () => {
  return (
    <section id="community" className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/50 rounded-full filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto max-w-6xl px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-green-600 font-semibold">Our Community</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Join a Growing Movement
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-around items-center text-center gap-12 mb-16">
          <motion.div
            className="text-center"
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-5xl font-extrabold text-green-600">
              <AnimatedCounter toValue={500} postfix="+" />
            </h3>
            <p className="text-gray-600 text-lg">Active Users</p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-5xl font-extrabold text-green-600">
              <AnimatedCounter toValue={2000} postfix="+ Kg" />
            </h3>
            <p className="text-gray-600 text-lg">Waste Collected</p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-5xl font-extrabold text-green-600">
              <AnimatedCounter toValue={15} postfix="+" />
            </h3>
            <p className="text-gray-600 text-lg">Neighborhoods Covered</p>
          </motion.div>
        </div>

        {/* Environmental Impact Progress Bar */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-xl font-semibold text-gray-900 text-center mb-4">
            Environmental Impact Goal
          </h4>
          <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
            />
          </div>
          <p className="text-center text-gray-600 mt-2">75% towards our quarterly collection target</p>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Footer Component
 * A simple footer that fades in.
 */
const Footer = () => {
  const socialIcons = [
    { icon: <Facebook />, href: "#" },
    { icon: <Twitter />, href: "#" },
    { icon: <Instagram />, href: "#" },
    { icon: <Linkedin />, href: "#" },
  ];

  return (
    <motion.footer
      // Dark footer for high contrast against the light body
      className="bg-gray-800 text-gray-400 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.0 }}
    >
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold text-green-400 mb-2">NeatSeed 🌱</h3>
          <p>&copy; {new Date().getFullYear()} NeatSeed. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 mt-6 md:mt-0">
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="text-gray-400 hover:text-green-400 transition-colors"
              whileHover={{ scale: 1.2, y: -5 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};


/**
 * Main App Component
 * This is the entry point that renders all sections.
 */
export default function LandingPage() {
  return (
    <div className="bg-neutral-50 font-sans text-gray-800 antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
}
