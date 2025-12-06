import { motion } from 'framer-motion'

const VisionIcon = () => {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-20"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
    >
      {/* Eye Outline */}
      <motion.ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="25"
        stroke="#f97316"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      {/* Iris */}
      <motion.circle
        cx="50"
        cy="50"
        r="18"
        fill="#8b5cf6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      {/* Pupil */}
      <motion.circle
        cx="50"
        cy="50"
        r="10"
        fill="#1f2937"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      />
      {/* Highlight */}
      <motion.circle
        cx="45"
        cy="45"
        r="4"
        fill="#ffffff"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      />
      {/* Eyelashes */}
      <motion.path
        d="M20 40 Q15 35 20 30"
        stroke="#f97316"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.path
        d="M80 40 Q85 35 80 30"
        stroke="#f97316"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
    </motion.svg>
  )
}

export default VisionIcon

