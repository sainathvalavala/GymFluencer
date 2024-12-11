import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const plans = [
  {
    name: "Basic",
    price: "29",
    features: [
      "Access to gym floor",
      "Basic equipment usage",
      "Locker room access",
      "Free WiFi"
    ]
  },
  {
    name: "Premium",
    price: "59",
    features: [
      "All Basic features",
      "Group fitness classes",
      "Personal trainer consultation",
      "Nutrition guidance",
      "Access to spa area"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "99",
    features: [
      "All Premium features",
      "Unlimited personal training",
      "Private locker",
      "Massage therapy sessions",
      "Priority class booking"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Membership Plans</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className={`bg-black/50 rounded-lg p-8 relative ${
                plan.popular ? 'border-2 border-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-3xl text-gray-400">$</span>
                  <span className="text-5xl font-bold text-white mx-2">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <FaCheck className="text-primary mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-full text-white font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;