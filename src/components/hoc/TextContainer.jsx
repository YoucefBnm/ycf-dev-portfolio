
const TextContainer = (Component) => 
    function HOC() {

        return (
            <motion.div
                className="inline overflow--hidden"
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
            >
                {Component}
            </motion.div>
        )
    }

    export default TextContainer