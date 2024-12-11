import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaClock, FaHeart } from 'react-icons/fa';

const featuresList = [
  {
    icon: <FaDumbbell />,
    title: "Modern Equipment",
    description: "State-of-the-art fitness equipment for optimal results"
  },
  {
    icon: <FaUsers />,
    title: "Expert Trainers",
    description: "Professional trainers to guide your fitness journey"
  },
  {
    icon: <FaClock />,
    title: "24/7 Access",
    description: "Work out on your schedule with round-the-clock access"
  },
  {
    icon: <FaHeart />,
    title: "Wellness Programs",
    description: "Comprehensive programs for total body wellness"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-black/50 p-8 rounded-lg text-center group hover:bg-primary/10 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-4xl text-primary mb-4 inline-block group-hover:text-white"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;