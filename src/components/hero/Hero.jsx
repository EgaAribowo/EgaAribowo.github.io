import './hero.scss'
import { motion } from 'framer-motion'



const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
}

const slideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'mirror',
    }
  }
}


const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrappe">
        <motion.div className="textContain" 
        variants = {textVariants} 
        initial = 'initial' 
        animate = 'animate'>
            <motion.h2 variants = {textVariants}>I'm Aribowo</motion.h2>
            <motion.h1 variants = {textVariants}>I'm a coder and a Student</motion.h1>
            <motion.div className="tombol" variants = {textVariants}>
                <motion.a href="" variants = {textVariants}>Let's Chat</motion.a>
                <motion.a href="" variants = {textVariants}>Hello</motion.a>
            </motion.div>
            <img src="" alt="" variants = {textVariants}/>
        </motion.div>
        </div>
        <motion.div className="slidingText" variants = {slideVariants} initial = 'initial' animate = 'animate'>
          Writer Motivator Learner
        </motion.div>
        <div className="imgContain">
            <img src="/rjs2.png" alt="" />
        </div>
    </div>
  )
}

export default Hero