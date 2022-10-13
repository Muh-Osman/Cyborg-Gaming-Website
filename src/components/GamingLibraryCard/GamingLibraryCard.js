import './GamingLibraryCard.css'

import { SecondaryButton } from "../../components";

const GamingLibraryCard = (props) => {
  return (
    <div className='gaming-library-card'>
      <ul>
        <li className='gaming-library-item-image'><img  src={props.image} alt={'game'} /></li>
        <li><h4>{props.title}</h4><span>{props.category}</span></li>
        <li><h4>Data Added</h4><span>{props.data_added}</span></li>
        <li><h4>Hours Played</h4><span>{props.hours_played}</span></li>
        <li><h4>Currently</h4><span>{props.download}</span></li>

        <SecondaryButton LinkTo="/#">Download</SecondaryButton>

      </ul>
    </div>
  )
}

export default GamingLibraryCard