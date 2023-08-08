import { CustomBtn, TextContainer } from '../'
import { motion } from 'framer-motion'
import './Contact.scss'
import { fadeIn } from '../../utils/motion'

const ContactInputGroup = ({ inpuType, label, handleChange}) => {

  return (
    <div className="inputGroup flex flex--col align--start">
      <label htmlFor={label}>{label}</label>
      <input 
        type={inpuType}
        label={label}
        onChange={handleChange}
        placeholder={`type your ${label}`}
        name={label}
      />
    </div>
  )
}
const Contact = () => {
  return (
    <div className="contact flex pad--x-default pad--y-default">
      <TextContainer>
        <motion.h2
          variants={fadeIn}
          className='heading heading--title mar--b-1'
        >
          Let's Talk 
        </motion.h2>
        <motion.p variants={fadeIn}>
          Get in touch to see how I can help you put your business on the
          map or scale and improve it.
        </motion.p>
      </TextContainer>

      <div className="contact__form bg--linear-black">
        <form className='flex flex--col gap--2'>
          <ContactInputGroup
            inpuType='text'
            label='name'
          />

          <ContactInputGroup
            inpuType='email'
            label='email'
          />

          <div className="inputGroup flex flex--col align--start gap--1">
            <label htmlFor='message'>message</label>
            <textarea name="message" id="messge" cols="30" rows="4" placeholder='your message...'></textarea>
          </div>

          <CustomBtn
            btnStyles='customBtn__bg customBtn__bg--primary mar--t-1'
            btnType='submit'
            text='Send'
          />
        </form>
      </div>

      
    </div>
  )
}

export default Contact