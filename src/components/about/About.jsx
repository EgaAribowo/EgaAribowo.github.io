import './about.scss'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'



const variants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
}



const About = () => {

    const ref = useRef()

    const isInView = useInView(ref, {margin: '-100px'})

  return (
    <motion.div 
    className='about'
    variants = {variants}
    initial = 'initial'
    ref = {ref}
    animate = {'animate'}>
        <motion.div className="text" variants = {variants}>
            <p>
                I'm focus on helping your Tech skill up
                <br /> and move forward
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContain" variants = {variants}>
            <motion.div className="title">
                <img src="" alt="" />
                <h1><b>Unique</b> Idea</h1>
            </motion.div>

            <motion.div className="title">
                <h1><b>For Your</b> Tech Skill.</h1>
                <button>What We Do?</button>
            </motion.div>
        </motion.div>
        <motion.div className="list" variants = {variants}>
            <motion.div className="box" 
            whileHover = {{background: 'lightGrey', color: 'black', borderRadius: '10px'}}>
                <h2>Hard Skill</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nulla!</p>
                <button>Find Now</button>
            </motion.div>
            <motion.div className="box"
            whileHover = {{background: 'lightGrey', color: 'black', borderRadius: '10px'}}>
                <h2>Soft Skill</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nulla!</p>
                <button>Find Now</button>
            </motion.div>
            <motion.div className="boxT"
            whileHover = {{background: 'lightGrey', color: 'black', borderRadius: '10px'}}>
                <h2>Charac ter</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nulla!</p>
                <button>Find Now</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About