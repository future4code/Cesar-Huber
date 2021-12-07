import { Switch, Route, BrowserRouter } from 'react-router-dom'
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage'
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <HomePage />
                </Route>

                <Route exact path={'/listtrips'}>
                    <ListTripsPage />
                </Route>

                <Route exact path={'/application/:id'}>
                    <ApplicationFormPage />
                </Route>

                <Route exact path={'/login'}>
                    <LoginPage />
                </Route>

                <Route exact path={'/admin'}>
                    <AdminHomePage />
                </Route>

                <Route exact path={'/createtrip'}>
                    <CreateTripPage />
                </Route>

                <Route exact path={'/tripdetail/:id'}>
                    <TripDetailsPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}