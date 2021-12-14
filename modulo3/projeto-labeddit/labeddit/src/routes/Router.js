import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from '../components/Header'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Feed from '../pages/Feed/Feed'
import Post from '../pages/Post/Post'
import NotFound from '../pages/NotFound/NotFound'

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={'/'} element={<Feed />} />
                <Route path={'/post'} element={<Post />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/signup'} element={<Signup />} />
                <Route path={'*'} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
