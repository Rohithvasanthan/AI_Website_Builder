import {motion} from "motion/react"


function LoginModal({open,onClose}) {
  return (
    <>
    {open &&
      <motion.div className="fixed insert-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-xl px-4" 
      initial={{opacity:0}}
      animate={{  opacity:1}} 
      >

      </motion.div>
    }
      
    </>
  )
}

export default LoginModal
