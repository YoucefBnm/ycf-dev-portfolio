import { heroContent } from '../../constants'
import { TextContainer, CustomBtn } from '../'
import { fadeIn } from '../../utils/motion'
import './Hero.scss'

import { motion } from 'framer-motion'

const Hero = () => {
  const { paragraph, headings } = heroContent
  return (
    <div className="hero pad--x-default pad--y-default">
      
      <TextContainer>
        <div className="hero__text flex align--center">
          <div className="hero__headings">
            {
              headings.map((heading, index) => (
                <motion.h1 
                  key={heading} 
                  variants={fadeIn}
                  className={`${index===1 ? 'inline' : 'block'} heading heading--hero`}
                >
                  {heading}
                </motion.h1>
              ))
            }
          </div>
          <motion.p 
            className='hero__paragraph text--sm color--light'
            variants={fadeIn}
          >
            {paragraph}
          </motion.p>
        </div>
        <motion.div variants={fadeIn} className="hero__btn mar--t-4">
          <CustomBtn
            text='Learn More'
            btnStyles='shadow customBtn__shadow--light'
          />
        </motion.div>
      </TextContainer>
    </div>
  )
}

export default Hero