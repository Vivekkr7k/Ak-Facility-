import { motion } from 'framer-motion'

const MissionIcon = () => {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-20"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
    >
      {/* Target Circles */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke="#f97316"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="35"
        stroke="#eab308"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="25"
        stroke="#f97316"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="15"
        stroke="#eab308"
        strokeWidth="2"
        fill="#f97316"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      {/* Dart Arrow */}
      <motion.path
        d="M50 20 L50 45 L45 40 L50 45 L55 40 Z"
        fill="#3b82f6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="8"
        fill="#3b82f6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      />
    </motion.svg>
  )
}

export default MissionIcon

