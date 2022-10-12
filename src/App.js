import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import './App.css'


import { Header, Footer } from './sections'
import { Container } from './components'
import { Home, Profile } from "./Pages";

const App = () => {
    return (
        <>
            <Router basename={'/react-project'}>
                <Header />
                <Container>
                    <Routes>

                        <Route path='/' element={<Home />} />
                        <Route path='/profile' element={<Profile />} />
                        
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </>
    )
}

export default App