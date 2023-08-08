import { motion, useInView } from "framer-motion"
import { textContainerVariants } from "../../utils/motion"
import { useRef } from "react"

const TextContainer = ({ children }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}
            variants={textContainerVariants}
            initial='hidden'
            whileInView='visible'
            animate={ inView ? 'visible' : 'hidden'}

        >
            {children}
        </motion.div>
    )
}

export default TextContainer