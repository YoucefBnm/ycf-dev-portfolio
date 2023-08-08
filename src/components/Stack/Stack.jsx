import { motion } from 'framer-motion'
import { stackContent } from '../../constants'
import { TextContainer } from '../'
import './Stack.scss'
import { fadeIn } from '../../utils/motion'

const Stack = () => {
  const { title, heading, paragraph, tools } = stackContent

  return (
    <div className='stack'>
      <div className="flex justify--between align--end">
        <div className="stack__text">
          <TextContainer>
            <h3 className="heading heading--sup color--primary mar--b-1">{title}</h3>
            <motion.h2 
              variants={fadeIn}
              className="heading heading--title"
            >
                {heading}
            </motion.h2>

            <motion.p variants={fadeIn}>{paragraph}</motion.p>
            
          </TextContainer>
        </div>

        <ul className="stack__tools flex flex--wrap gap--2">
          {
            tools.map(tool => (
              <li className='stack__tool' key={tool.id}>
                <span>{tool.tool}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Stack