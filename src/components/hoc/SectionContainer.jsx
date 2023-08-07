import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"

const SectionContainer = (Component, id) => 
    function HOC() {

        return (
            <motion.section 
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className="padding--x-default padding--y-default"
            >
                <span className="hash-span" id={id}>&nbsp;</span>
                <Component />
            </motion.section>
        )
    }

    export default SectionContainer