import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import weddingConfig from '../config'

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime()
      const weddingTime = weddingConfig.weddingDate
      const difference = weddingTime - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setIsComplete(true)
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const CountdownUnit = ({ value, label }) => (
    <motion.div
      className="bg-white/90 px-6 py-8 rounded-2xl shadow-lg border-2 border-gold hover:shadow-2xl transition-all"
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        key={value}
        className="font-serif text-4xl md:text-5xl font-bold text-gold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {String(value).padStart(2, '0')}
      </motion.div>
      <div className="text-sm md:text-lg font-semibold text-emerald uppercase tracking-widest mt-2">
        {label}
      </div>
    </motion.div>
  )

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-white to-gold/20">
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
          Hitung Mundur Menuju Hari Istimewa
        </motion.h2>
        <motion.p
          className="text-center text-xl text-dark/60 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Waktu terus berlanjut menghampiri momen bahagia kami
        </motion.p>

        {isComplete ? (
          <motion.div
            className="text-center text-5xl md:text-6xl font-bold text-gold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            🎉 Hari Istimewa Telah Tiba! 🎉
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <CountdownUnit value={timeLeft.days} label="Hari" />
            <CountdownUnit value={timeLeft.hours} label="Jam" />
            <CountdownUnit value={timeLeft.minutes} label="Menit" />
            <CountdownUnit value={timeLeft.seconds} label="Detik" />
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default Countdown
