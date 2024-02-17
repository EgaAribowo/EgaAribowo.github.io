import './parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Parallax = ({type}) => {

    const ref = useRef()



    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })

    const yText = useTransform(scrollYProgress, [0, 1], ['0%', '600%'])
    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className='parallax' 
    ref= {ref}
    style={{
        background:type === 'About' ? 
        'linear-gradient(180deg, #1111, #0c0c1d)' : 
        'linear-gradient(180deg, #111132, #505064)'
        }} >
        <motion.h1 style = {{y: yText}}>{type === 'About' ? 'What We Do?' : 'What We Did?'}</motion.h1>
        <motion.div className="mountain"></motion.div>
        <motion.div className="planet" 
        style = {{
          y: yBg,
          backgroundImage: `url(${type === 'About' ? '/planets.png' : '/sun.png'})`
          }}></motion.div>
        <motion.div className="star" style = {{x: yBg}}></motion.div>
    </div>
  )
}

export default Parallax