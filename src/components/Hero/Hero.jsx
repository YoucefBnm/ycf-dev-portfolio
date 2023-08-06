import { Link } from "react-router-dom"
import { heroContent } from "../../constants"

const Hero = () => {
    const { heading, paragraph, socialLinks } = heroContent

  return (
    <section className="hero pad--x-default pad--y-default">
        <div className="hero__text w--25">
            <h3 className="heading heading--md mar--b-2 color--black-3">{heading}</h3>
            <p className="mar--b-4">{paragraph}</p>

            <div className="hero__social flex gap--1">
                {
                    socialLinks.map(socialLink => (
                        <Link to={socialLink.link}>
                            <socialLink.icon />
                        </Link>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Hero