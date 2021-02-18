import React, { useState } from 'react'
import styles from './styles.module.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { motion } from 'framer-motion'

const buttonVariants = {
  tap: {
    scale: 0.97
  },
  rotate: { rotate: 180 }
}

const containerVariants = {
  active: {
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 1,
      when: 'beforeChildren',
      staggerChildren: 0.03
    }
  }
}

const headerVariants = {
  active: {
    opacity: 1
  },
  inactive: {
    opacity: 0
  }
}

export const ExampleComponent = ({ text }) => {
  const [pressed, isPressed] = useState(false)
  return (
    <motion.div className={styles.main}>
      <motion.div drag>
        <motion.div
          onClick={() => isPressed(!pressed)}
          variants={buttonVariants}
          animate={pressed ? 'rotate' : ''}
          whileTap='tap'
          className={styles.round_botton}
        >
          <ExpandMoreIcon
            style={{ color: 'white', width: '60px', height: '60px' }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          animate={pressed ? 'active' : 'initial'}
          initial='inactive'
          className={styles.dropdown}
        >
          <motion.div variants={headerVariants}>Menu Link 1</motion.div>
          <motion.div variants={headerVariants}>Menu Link 2</motion.div>
          <motion.div variants={headerVariants}>Menu Link 3</motion.div>
          <motion.div variants={headerVariants}>Menu Link 4</motion.div>
          <motion.div variants={headerVariants}>Menu Link 3</motion.div>
          <motion.div variants={headerVariants}>Menu Link 4</motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
