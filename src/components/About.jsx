import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaDumbbell, FaHeartbeat, FaMedal } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const stats = [
    { icon: <FaDumbbell />, value: "5,000+", label: "Square Feet" },
    { icon: <FaHeartbeat />, value: "500+", label: "Happy Members" },
    { icon: <FaMedal />, value: "50+", label: "Expert Trainers" }
  ];

  return (
    <section id="about" className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ scale, opacity }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
              alt="Gym Interior"
              className="rounded-lg shadow-xl"
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="absolute -bottom-10 -right-10 bg-primary p-6 rounded-lg shadow-xl hidden lg:block"
            >
              <p className="text-4xl font-bold text-white">10+</p>
              <p className="text-white">Years of Experience</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">
              Transform Your Body With Professional Touch
            </h2>
            <div className="w-24 h-1 bg-primary"></div>
            <p className="text-gray-400">
              At GymFlex, we believe in providing more than just a workout space. 
              Our state-of-the-art facility is designed to inspire and motivate, 
              while our expert trainers are dedicated to helping you achieve your fitness goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-secondary p-6 rounded-lg text-center group hover:bg-primary transition-colors duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl text-primary mb-3 inline-block group-hover:text-white"
                  >
                    {stat.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-400 group-hover:text-white">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors mt-8"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;