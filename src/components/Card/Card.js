import './Card.css'

import { FaStar, FaDownload } from "react-icons/fa";

const Card = (props) => {
    return (
        <div className='most-popular-item'>
            <div className='card-wrapper'>
                <img className='most-popular-item-image' src={props.image} alt='pic' />

                <div className='most-popular-item-content'>
                    <h4 className='most-popular-item-title'>
                        {props.title} <br />
                        <span>{props.category}</span>
                    </h4>
                    <ul>
                        {/* Two different way to color icons */}
                        <li>
                            <span className='icon star' style={{"color": "gold"}}><FaStar/></span>
                            <span>{props.rate}</span>
                        </li>
                        <li>
                            <span className='icon download'><FaDownload/></span>
                            <span>{props.download}</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Card