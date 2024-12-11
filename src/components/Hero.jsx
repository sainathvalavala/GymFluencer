import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren, buttonVariants } from '../utils/animations';
import { HERO_BG } from '../constants/images';

const Hero = () => {
  return (
    <section id="home" className="h-screen relative overflow-hidden bg-black">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={HERO_BG}
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeInUp}
            className="overflow-hidden"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Transform Your Body,
              <motion.span
                className="text-primary inline-block"
                whileHover={{ 
                  scale: 1.1,
                  color: "#ff6b4f",
                  transition: { duration: 0.2 }
                }}
              > Transform Your Life</motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-8"
          >
            Join our state-of-the-art facility and start your fitness journey today.
            Expert trainers, premium equipment, and a supportive community await you.
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            className="flex gap-4"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Get Started
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white text-4xl cursor-pointer"
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;