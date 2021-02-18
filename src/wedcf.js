import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import SvgComponent from './CanvasSVG'
export const ExampleComponent = ({ text }) => {
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => setIsOn(!isOn)

  return (
    // <div className={styles.switch} data-isOn={isOn} onClick={toggleSwitch}>

    //   <motion.div
    //     className={styles.handle}
    //     variants={knobVariants}
    //     whileHover='hover'
    //     transition={spring}
    //     layout
    //   ></motion.div>
    // </div>
    <div className={styles.main}>Hello</div>
  )
}

const knobVariants = {
  hover: {
    scale: [1, 1.1],
    opacity: 0.8,
    transition: { duration: 1, yoyo: Infinity }
  },
  active: {}
}

const spring = {
  type: 'spring',
  stiffness: 400,
  damping: 30
}
