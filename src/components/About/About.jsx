import { aboutContent } from "../../constants"
import { TextContainer } from "../"
import { motion } from "framer-motion"
import { fadeIn } from "../../utils/motion"

const About = () => {
  const { title, paragraph, expertises } = aboutContent
  return (
    <div 
      className="pad--y-defalut"
      style={{
        margin: '0 10rem',
        borderBottom: '1px solid #3F464D',
        paddingBottom: '2rem'
      }}
    >
      <TextContainer>
        <div className="mar--b-4">
          <h3 className="heading heading--sup color--primary mar--b-2">{title}</h3>
          <motion.p 
            style={{ width: '80ch'}} 
            variants={fadeIn} 
          >
            {paragraph}
          </motion.p>
        </div>

        <ul className="flex flex--col gap--1">
          {expertises.map(expertise => (
            <motion.li 
              key={expertise}
              variants={fadeIn}
            >
              <h2 className="heading heading--title">{expertise}</h2>
            </motion.li>
          ))}
        </ul>

      </TextContainer>
    </div>
  )
}

export default About