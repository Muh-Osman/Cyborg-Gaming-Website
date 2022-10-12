import './Home.css'

import { Hero, MostPopular, GamingLibrary } from '../../sections'


const Home = () => {
    return (
        <>
            <h1>Home Page</h1>
            <Hero />
            <MostPopular />
            <GamingLibrary />
        </>
    )
}

export default Home