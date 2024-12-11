import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { fadeInUp } from '../utils/animations';
import { TRAINER_IMAGES } from '../constants/images';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const trainers = [
  {
    name: "John Doe",
    specialty: "Strength Training",
    image: TRAINER_IMAGES.JOHN_DOE,
  },
  {
    name: "Jane Smith",
    specialty: "Yoga & Pilates",
    image: TRAINER_IMAGES.JANE_SMITH,
  },
  {
    name: "Mike Johnson",
    specialty: "CrossFit Expert",
    image: TRAINER_IMAGES.MIKE_JOHNSON,
  },
  {
    name: "Sarah Wilson",
    specialty: "Nutrition Coach",
    image: TRAINER_IMAGES.SARAH_WILSON,
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Expert Trainers</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {trainers.map((trainer, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-80 object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      whileHover={{ scale: 1.2, color: "#E1306C" }}
                      href="#"
                      className="text-white text-xl"
                    >
                      <FaInstagram />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                      href="#"
                      className="text-white text-xl"
                    >
                      <FaTwitter />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, color: "#0A66C2" }}
                      href="#"
                      className="text-white text-xl"
                    >
                      <FaLinkedin />
                    </motion.a>
                  </motion.div>
                </div>
                <motion.div
                  whileHover={{ backgroundColor: "#FF4C2C" }}
                  className="p-6 transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{trainer.name}</h3>
                  <p className="text-primary group-hover:text-white">{trainer.specialty}</p>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Trainers;