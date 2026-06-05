import React, { useState } from 'react'
import { motion } from 'framer-motion'
import weddingConfig from '../config'

// SVG Animation Components
const HeartCollision = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <style>{`
        @keyframes heartBounce {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        @keyframes heartBounce2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -20px); }
        }
        .heart1 { animation: heartBounce 2s ease-in-out infinite; }
        .heart2 { animation: heartBounce2 2s ease-in-out infinite; }
      `}</style>
    </defs>
    <path
      className="heart1"
      d="M100 180 Q50 140 30 100 Q10 70 30 50 Q50 30 70 50 L100 80 L130 50 Q150 30 170 50 Q190 70 170 100 Q150 140 100 180"
      fill="#E8B4B8"
      opacity="0.9"
    />
    <path
      className="heart2"
      d="M100 180 Q50 140 30 100 Q10 70 30 50 Q50 30 70 50 L100 80 L130 50 Q150 30 170 50 Q190 70 170 100 Q150 140 100 180"
      fill="#D4AF37"
      opacity="0.7"
      transform="translate(5, 5)"
    />
  </svg>
)

const FloatingHearts = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0) rotateZ(0deg); } 50% { transform: translateY(-15px) rotateZ(5deg); } }
        .heart { animation: float 3s ease-in-out infinite; }
      `}</style>
    </defs>
    <path
      className="heart"
      d="M100 160 Q50 120 30 80 Q10 50 30 30 Q50 10 70 30 L100 60 L130 30 Q150 10 170 30 Q190 50 170 80 Q150 120 100 160"
      fill="#E8B4B8"
      opacity="0.8"
    />
    <circle cx="60" cy="80" r="8" fill="#D4AF37" opacity="0.6" style={{ animation: 'float 2s ease-in-out infinite' }} />
    <circle cx="140" cy="100" r="6" fill="#D4AF37" opacity="0.5" style={{ animation: 'float 2.5s ease-in-out infinite' }} />
  </svg>
)

const RingSparkle = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <style>{`
        @keyframes spin { 0% { transform: rotateZ(0deg); } 100% { transform: rotateZ(360deg); } }
        @keyframes sparkle { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        .ring { animation: spin 4s linear infinite; }
        .sparkle { animation: sparkle 1s ease-in-out infinite; }
      `}</style>
    </defs>
    <circle className="ring" cx="100" cy="100" r="50" fill="none" stroke="#D4AF37" strokeWidth="8" />
    <circle cx="100" cy="100" r="35" fill="none" stroke="#E8B4B8" strokeWidth="4" opacity="0.6" />
    <circle cx="100" cy="50" r="4" fill="#D4AF37" className="sparkle" />
    <circle cx="150" cy="100" r="4" fill="#D4AF37" className="sparkle" style={{ animationDelay: '0.3s' }} />
    <circle cx="100" cy="150" r="4" fill="#D4AF37" className="sparkle" style={{ animationDelay: '0.6s' }} />
  </svg>
)

const DressAnimation = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <style>{`
        @keyframes sway { 0%, 100% { transform: translateX(0) skewX(0deg); } 50% { transform: translateX(10px) skewX(2deg); } }
        .dress { animation: sway 2s ease-in-out infinite; }
      `}</style>
    </defs>
    <circle cx="100" cy="60" r="20" fill="#D4AF37" />
    <path
      className="dress"
      d="M70 80 L70 150 Q70 170 100 170 Q130 170 130 150 L130 80 Q115 75 100 75 Q85 75 70 80"
      fill="#F0E6D2"
      stroke="#E8B4B8"
      strokeWidth="2"
    />
    <circle cx="90" cy="90" r="5" fill="#E8B4B8" />
    <circle cx="110" cy="90" r="5" fill="#E8B4B8" />
  </svg>
)

const CoupleDance = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <style>{`
        @keyframes danceLeft { 0%, 100% { transform: translateX(0) rotateZ(-5deg); } 50% { transform: translateX(-15px) rotateZ(5deg); } }
        @keyframes danceRight { 0%, 100% { transform: translateX(0) rotateZ(5deg); } 50% { transform: translateX(15px) rotateZ(-5deg); } }
        .dancer1 { animation: danceLeft 2s ease-in-out infinite; }
        .dancer2 { animation: danceRight 2s ease-in-out infinite; }
      `}</style>
    </defs>
    <circle className="dancer1" cx="60" cy="60" r="15" fill="#D4AF37" />
    <path className="dancer1" d="M45 80 L60 110 M45 80 L50 100 M75 80 L70 100" stroke="#E8B4B8" strokeWidth="3" fill="none" />
    <circle className="dancer2" cx="140" cy="60" r="15" fill="#E8B4B8" />
    <path className="dancer2" d="M125 80 L140 110 M155 80 L150 100 M125 80 L130 100" stroke="#D4AF37" strokeWidth="3" fill="none" />
  </svg>
)

const InfinityLoop = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <style>{`
        @keyframes traceInfinity {
          0% { stroke-dashoffset: 600; }
          100% { stroke-dashoffset: 0; }
        }
        .infinity { animation: traceInfinity 3s ease-in-out infinite; }
      `}</style>
    </defs>
    <path
      className="infinity"
      d="M50 100 C30 60, 30 60, 100 60 C170 60, 170 60, 150 100 C130 140, 130 140, 60 140 C-10 140, -10 140, 50 100"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="4"
      strokeLinecap="round"
      strokeDasharray="600"
    />
    <circle cx="100" cy="100" r="8" fill="#E8B4B8" style={{ animation: 'traceInfinity 3s ease-in-out infinite' }} />
  </svg>
)

const animationComponents = {
  'hearts-collision': HeartCollision,
  'floating-hearts': FloatingHearts,
  'ring-sparkle': RingSparkle,
  'dress-animation': DressAnimation,
  'couple-dance': CoupleDance,
  'infinity-loop': InfinityLoop,
}

const GalleryCard = ({ item, index }) => {
  const AnimationComponent = animationComponents[item.animationType] || FloatingHearts
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="h-64 bg-gradient-to-br from-blush to-rose flex items-center justify-center overflow-hidden">
        <div className="w-4/5 h-4/5">
          <AnimationComponent />
        </div>
      </div>
      <div className="p-6 bg-gradient-to-br from-white to-light">
        <h3 className="font-serif text-2xl text-emerald mb-2">{item.title}</h3>
        <motion.div
          className="h-1 bg-gradient-to-r from-gold to-blush rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

const Gallery = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-rose to-white">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-serif text-5xl md:text-6xl text-center text-emerald mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {weddingConfig.gallery.title}
        </motion.h2>
        <motion.p
          className="text-center text-xl text-dark/60 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {weddingConfig.gallery.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddingConfig.gallery.items.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Gallery
