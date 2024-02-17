import {motion} from 'framer-motion'


const FramerMotion = () => {
  return (
    <div className="test">
        <motion.div className="box" 
        initial={{opacity: 0, scalele: 0.5}}
        animate={{opacity: 0, scale: 1}} 
        transition={{duration: 2, delay: 2}}>

        </motion.div>
    </div>
  )
}

export default FramerMotion