import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from '../components/Header'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Feed from '../pages/Feed/Feed'
import PostDetail from '../pages/PostDetail/PostDetail'
import NotFound from '../pages/NotFound/NotFound'

export default function Router(props) {
    return (
        <BrowserRouter>
            <Header 
                searchFor={props.searchFor}
                handleSearchBar={props.handleSearchBar}
            />
            <Routes>
                <Route path={'/'} element={<Feed searchFor={props.searchFor} />} />
                <Route path={'/post/:page/:postsPerPage/:id/:uservote'} element={<PostDetail />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/signup'} element={<Signup />} />
                <Route path={'*'} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
