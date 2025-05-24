'use client';

import { motion } from 'framer-motion';

const FlowerAnimation = () => {
  const petals = Array.from({ length: 12 }, (_, i) => i);
  const colors = ['#FF69B4', '#FF1493', '#FFB6C1', '#FFC0CB', '#FF69B4'];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {petals.map((i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            opacity: 0,
            scale: 0,
            x: '50vw',
            y: '50vh',
            rotate: i * 30
          }}
          animate={{
            opacity: [0, 1, 0.8, 0],
            scale: [0, 1.2, 1, 0],
            x: [
              '50vw',
              `${Math.cos(i * Math.PI / 6) * 100 + 50}vw`,
              `${Math.cos(i * Math.PI / 6) * 150 + 50}vw`,
              `${Math.cos(i * Math.PI / 6) * 200 + 50}vw`
            ],
            y: [
              '50vh',
              `${Math.sin(i * Math.PI / 6) * 100 + 50}vh`,
              `${Math.sin(i * Math.PI / 6) * 150 + 50}vh`,
              `${Math.sin(i * Math.PI / 6) * 200 + 50}vh`
            ],
            rotate: [i * 30, i * 30 + 180, i * 30 + 360, i * 30 + 540]
          }}
          transition={{
            duration: 4,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          <motion.div
            className="w-6 h-6 rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${colors[i % colors.length]}, ${colors[(i + 1) % colors.length]})`,
              boxShadow: '0 0 10px rgba(255, 105, 180, 0.3)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
      ))}

      {/* Center flower */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </div>
  );
};

export default FlowerAnimation; 