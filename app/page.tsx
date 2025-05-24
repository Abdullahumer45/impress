'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import FlowerAnimation from './components/FlowerAnimation';
import BlossomingFlowers from './components/BlossomingFlowers';
import styles from './page.module.css';

export default function Home() {
  const [showNoFlowers, setShowNoFlowers] = useState(false);
  const [showYesFlowers, setShowYesFlowers] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [hasResponded, setHasResponded] = useState(false);

  const handleNoHover = () => {
    setShowNoFlowers(true);
    const randomX = Math.random() * 100 - 50;
    const randomY = Math.random() * 100 - 50;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYesHover = () => {
    setShowYesFlowers(true);
  };

  const handleYesClick = async () => {
    try {
      await emailjs.send(
        'service_zi2g93s',
        'template_c1aam4l',
        {
          to_email: 'abdullahumer192@gmail.com',
          subject: '💍 She Said YES! 💖',
          message: `
            💖 The most amazing news! 💖
            
            She has accepted your proposal! 
            
            This is the beginning of your beautiful journey together.
            May your love continue to grow and flourish like the flowers in your proposal.
            
            With love and best wishes,
            Your Proposal Website
          `,
          from_name: 'Your Proposal Website',
        },
        'iLvlFF6ebi61bgErl'
      );
      
      setHasResponded(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.night}></div>
      <BlossomingFlowers />
      
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.title}
        >
          Do you like me?
        </motion.h1>

        <div className={styles.buttonContainer}>
          <motion.button
            className={styles.yesButton}
            whileHover={{ scale: 1.1 }}
            onClick={handleYesClick}
            onHoverStart={handleYesHover}
            onHoverEnd={() => setShowYesFlowers(false)}
            style={{
              background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
              boxShadow: '0 0 20px rgba(255, 107, 107, 0.5)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <span className={styles.buttonText}>Yes</span>
            {showYesFlowers && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className={styles.flowerBurst}
              >
                <FlowerAnimation />
              </motion.div>
            )}
          </motion.button>

          <motion.button
            className={styles.noButton}
            whileHover={{ x: noButtonPosition.x, y: noButtonPosition.y }}
            onHoverStart={handleNoHover}
            onHoverEnd={() => setShowNoFlowers(false)}
            style={{
              background: 'linear-gradient(45deg, #4a90e2, #357abd)',
              boxShadow: '0 0 20px rgba(74, 144, 226, 0.5)'
            }}
          >
            <span className={styles.buttonText}>No</span>
            {showNoFlowers && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className={styles.flowerBurst}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1
                }}
              >
                <FlowerAnimation />
              </motion.div>
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {hasResponded && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className={styles.responseMessage}
            >
              <h2>Thank you for saying yes! 💖</h2>
              <p>I&apos;ve sent him a notification!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
