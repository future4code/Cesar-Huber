import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup'
import Header from '../components/Header'

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path={'/'} element={<Home />} />
                <Route exact path={'/login'} element={<Login />} />
                <Route exact path={'/signup'} element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}
