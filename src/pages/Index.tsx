
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };
  
  const scaleUpVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  // Handle iframe load
  useEffect(() => {
    const handleIframeLoad = () => {
      setIsVideoLoaded(true);
    };

    const iframe = videoRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
      return () => {
        iframe.removeEventListener('load', handleIframeLoad);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Navigation Bar */}
      <motion.nav 
        className="py-4 px-6 lg:px-20 flex items-center justify-between"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center">
          <img 
            src="https://payouts.com/wp-content/uploads/2024/02/Payoutscom-logo-light.svg" 
            alt="Payouts.com" 
            className="h-8" 
          />
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-accent transition-colors duration-300">Products</a>
          <a href="#" className="hover:text-accent transition-colors duration-300">Use cases</a>
          <a href="#" className="hover:text-accent transition-colors duration-300">Integrations</a>
          <a href="#" className="hover:text-accent transition-colors duration-300">Company</a>
          <a href="#" className="hover:text-accent transition-colors duration-300">Resources</a>
          <a href="#" className="hover:text-accent transition-colors duration-300">Pricing</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-accent transition-colors duration-300 text-sm font-medium hidden md:block">
            Sign In
          </button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-accent hover:bg-accent/90 text-primary font-semibold py-2 px-4 rounded-md text-sm transition-colors duration-300"
          >
            Book a demo
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Unlock Seamless Global Creator Payouts:</span>{" "}
              <span className="text-accent">Brainlabs x Payouts.com</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-white/80 mb-8 leading-relaxed"
            >
              Automate Tax Compliance, Financial Reconciliation, and Scalable Growth for Your Global Creator Network.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent hover:bg-accent/90 text-primary font-semibold py-3 px-6 rounded-md transition-colors duration-300"
              >
                Request a Demo
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border border-accent/50 hover:border-accent text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
              >
                Get a Customized Quote
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={scaleUpVariants}
            initial="hidden"
            animate="visible"
            className="order-1 md:order-2 relative aspect-video rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-xl transform -translate-x-4 translate-y-4 z-0"></div>
            <div className="relative z-10 rounded-xl overflow-hidden">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
                <iframe 
                  ref={videoRef}
                  src="https://player.vimeo.com/video/1060857995?badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '12px' }} 
                  title="Brainlabs x Payouts"
                  className={`transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                ></iframe>
                {!isVideoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/80 rounded-xl">
                    <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <motion.section 
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 px-6 lg:px-20 max-w-4xl mx-auto text-center"
      >
        <p className="text-xl leading-relaxed text-white/90">
          As a global leader in digital marketing, Brainlabs understands the importance of efficient and reliable creator payments. Payouts.com offers a transformative solution, designed to integrate seamlessly with your existing workflows, eliminating manual effort, reducing costs, and empowering your global creator network to thrive.
        </p>
      </motion.section>
      
      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Key Benefits
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1.5 bg-accent mx-auto rounded-full"
          ></motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-accent text-3xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-white/70 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Solution Details */}
      <section className="py-16 md:py-24 px-6 lg:px-20 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Solution Details
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="w-24 h-1.5 bg-accent mx-auto rounded-full"
            ></motion.div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={scaleUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
              >
                <h3 className="text-2xl font-semibold mb-6 text-accent">{solution.title}</h3>
                <ul className="space-y-4">
                  {solution.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-3 mt-1">•</span>
                      <p className="text-white/80">{point}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What to Expect */}
      <section className="py-16 md:py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            What Brainlabs Can Expect
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Our platform transforms payment processes, giving you more time to focus on growth
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {expectations.map((expectation, index) => (
            <motion.div 
              key={index}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-2xl">{expectation.icon}</span>
              </div>
              <h3 className="font-medium">{expectation.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA Section - Updated with #f9f6ed background */}
      <motion.section 
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 md:py-24 px-6 lg:px-20"
        style={{ backgroundColor: "#f9f6ed" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Ready to Transform Your Creator Payouts?</h2>
          <p className="text-xl text-primary/80 mb-10 max-w-2xl mx-auto">
            Contact us today to learn how Payouts.com can revolutionize your global creator payout process!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent hover:bg-accent/90 text-primary font-semibold py-3 px-8 rounded-md transition-colors duration-300 text-lg"
            >
              Request a Demo
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border border-primary/30 hover:border-primary text-primary font-semibold py-3 px-8 rounded-md transition-colors duration-300 text-lg"
            >
              Get a Customized Quote
            </motion.button>
          </div>
        </div>
      </motion.section>
      
      {/* Footer */}
      <footer className="py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <img 
              src="https://payouts.com/wp-content/uploads/2024/02/Payoutscom-logo-light.svg" 
              alt="Payouts.com" 
              className="h-8 mb-6 md:mb-0" 
            />
            
            <div className="flex space-x-6">
              <a href="#" className="text-white/70 hover:text-accent transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between">
            <div className="text-white/50 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Payouts.com. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#" className="text-white/50 hover:text-accent text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-accent text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-white/50 hover:text-accent text-sm transition-colors duration-300">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Add script for Vimeo player */}
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};

// Data
const benefits = [
  {
    icon: "🏦",
    title: "Banking Infrastructure with Full Control",
    description: "Dedicated accounts with Tier-1 banking partners provide 100% control. No third-party payment agent fees."
  },
  {
    icon: "📄",
    title: "Automated Self-Invoicing and Tax Compliance",
    description: "Eliminate manual invoice generation with our system that automatically generates compliant invoices based on campaign data."
  },
  {
    icon: "🔄",
    title: "Scalable Integration with Brainlabs' Systems",
    description: "Streamline operations via direct integration into your existing systems for maximum efficiency."
  },
  {
    icon: "🌐",
    title: "End-to-End Global Payout Efficiency",
    description: "Leverage local banking in 14 countries to manage funds in over 30 currencies, to over 160 countries."
  },
  {
    icon: "📊",
    title: "Simplified Financial Tracking and Reporting",
    description: "Maintain clear audit trails and ensure transparency with comprehensive tracking and reporting tools."
  },
  {
    icon: "🔐",
    title: "Vendor Card with Full Control",
    description: "Complete control over prepayments, balance tracking and adjustments with our sophisticated vendor card system."
  }
];

const solutions = [
  {
    title: "Banking Made Simple",
    points: [
      "Local banking capabilities in 14 countries for seamless global operations",
      "Manage funds in over 30 currencies with real-time conversion",
      "Send payments to over 160 countries, leveraging local rails & SWIFT transfers",
      "Real-time balances dashboard for complete financial visibility"
    ]
  },
  {
    title: "Self-Invoicing & Tax Compliance",
    points: [
      "Automatic invoice generation, linking payouts to campaigns",
      "Complete tax compliance automation for VAT/GST requirements",
      "Simplified regulatory compliance across multiple jurisdictions",
      "Reduced risk of errors with automated document generation"
    ]
  },
  {
    title: "Seamless Connector Integrations",
    points: [
      "Integrate with over 30 currencies including Creatoriq, Zero and Hubspot",
      "Easy API connections with your existing financial systems",
      "Custom integration capabilities for unique workflow requirements",
      "Continuous updates to maintain compatibility with evolving platforms"
    ]
  },
  {
    title: "Full Financial Transparency",
    points: [
      "Easy reconciliation by filtering campaign, name or transaction",
      "Create a single vendor profile that tracks all prepayments",
      "Comprehensive reporting for internal and external stakeholders",
      "Clear audit trails for regulatory compliance"
    ]
  }
];

const expectations = [
  {
    icon: "⚡",
    title: "Eliminate Manual Workload"
  },
  {
    icon: "🚀",
    title: "Faster Predictable Payouts"
  },
  {
    icon: "👁️",
    title: "Enhanced Transparency"
  },
  {
    icon: "📈",
    title: "Scalable Solution"
  },
  {
    icon: "🤝",
    title: "Improved Creator Relations"
  }
];

export default Index;
