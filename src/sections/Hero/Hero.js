import './Hero.css'

import { PrimaryButton } from "../../components/index";

const Hero = (props) => {
  return (
    <div className='hero-main'>

        <div className='hero-text'>
            <h6 className='hero-subtitle'>Welcome To Cyborg</h6>
            <h4 className='hero-title'><span>Browse</span> Our Popular Games Hero</h4>


            <PrimaryButton>Browse Now</PrimaryButton>

            {/* <div className='main-button'>
                <a href='/#'>Download</a>
            </div> */}

        </div>
        
    </div>
  )
}

export default Hero