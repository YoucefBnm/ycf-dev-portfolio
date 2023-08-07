import TextContainer from '../hoc/TextContainer'
import { heroContent } from '../constants/'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <TextContainer>
          {
            heroContent
          }
        </TextContainer>
      </div>
    </div>
  )
}

export default Hero