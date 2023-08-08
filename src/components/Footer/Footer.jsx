import { motion } from "framer-motion"
import { footerContent } from "../../constants"
import TextContainer from "../TextContainer/TextContainer"
import { fadeIn } from "../../utils/motion"

const Footer = () => {
  const { heading, socialLinks } = footerContent
  return (
    <footer style={{borderTop: '1px solid #3F464D'}} className='pad--x-default pad--y-default'>
      <div className="flex align--center justify--between">
        <TextContainer>

        <motion.h2 
          variants={fadeIn}
          style={{
            width: '20ch',
          }} 
          className="heading heading--md">
            {heading}
          </motion.h2>
        </TextContainer>

        <ul className="flex flex--col gap--1">
          {
            socialLinks.map((socialLink => (
              <li key={socialLink.id}>
                <a 
                  className="nav-link nav-link--footer" 
                  href={socialLink.id!=='social-link-email' ? socialLink.link : `mailto:${socialLink.link}`}
                >{socialLink.title}</a>
              </li>
            )))
          }
        </ul>

      </div>

    </footer>
  )
}

export default Footer