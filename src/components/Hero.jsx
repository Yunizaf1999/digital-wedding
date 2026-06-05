import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import weddingConfig from '../config'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-rose to-blush"
      variants={containerVariants}
      initial="hidden"
      animate={isLoaded ? 'visible' : 'hidden'}
    >
      {/* Background Decorations */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-radial from-gold/10 to-transparent rounded-full -top-20 -right-20"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-gradient-radial from-blush/10 to-transparent rounded-full -bottom-10 -left-10"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <motion.div className="relative z-10 text-center" variants={containerVariants}>
        <motion.h1
          className="font-script text-7xl md:text-8xl text-emerald mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          Our Love Story
        </motion.h1>

        <motion.div className="space-y-4" variants={itemVariants}>
          <motion.div
            className="font-serif text-4xl md:text-5xl font-bold text-dark tracking-wide"
            whileHover={{ scale: 1.05 }}
          >
            {weddingConfig.bride.name}
          </motion.div>
          <motion.div
            className="font-script text-5xl text-gold"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            &
          </motion.div>
          <motion.div
            className="font-serif text-4xl md:text-5xl font-bold text-dark tracking-wide"
            whileHover={{ scale: 1.05 }}
          >
            {weddingConfig.groom.name}
          </motion.div>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-emerald mt-12 italic opacity-80"
          variants={itemVariants}
        >
          {weddingConfig.greetings.subtitle}
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-sm text-gold mb-2">Scroll Down</p>
          <svg
            className="w-6 h-6 text-gold mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero
