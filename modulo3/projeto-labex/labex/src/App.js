import AdminHomePage from './pages/AdminHomePage'
import ApplicationFormPage from './pages/ApplicationFormPage'
import CreateTripPage from './pages/CreateTripPage'
import HomePage from './pages/HomePage'
import ListTripsPage from './pages/ListTripsPage'
import LoginPage from './pages/LoginPage'
import TripDetailsPage from './pages/TripDetailsPage'
import { useState } from 'react'

function App() {

  const [currentPage, setCurrentPage] = useState('HomePage')
  const [applicationId, setApplicationId] = useState('')

  const showPage = () => {
    switch (currentPage) {
      case 'HomePage':
        return (
          <HomePage
            goToListTrips={goToListTrips}
            goToLogin={goToLogin}
          />
        )
      case 'ListTripsPage':
        return (
          <ListTripsPage
            goToHome={goToHome}
            goToApplicationForm={goToApplicationForm}
          />
        )
      case 'LoginPage':
        return (
          <LoginPage 
            goToHome={goToHome}
            goToAdminHome={goToAdminHome}
          />
        )
      case 'AdminHomePage':
        return (
          <AdminHomePage 
            goToHome={goToHome}
            goToCreateTrip={goToCreateTrip}
          />
        )
      case 'ApplicationFormPage':
        return (
          <ApplicationFormPage
            goToListTrips={goToListTrips}
            applicationId={applicationId}
          />
        )
      case 'CreateTripPage':
        return (
          <CreateTripPage 
            goToAdminHome={goToAdminHome}
            // enviar componente de criação de nova viagem
          />
        )
      case 'TripDetailsPage':
        return <TripDetailsPage />
      default:
        return (
          <HomePage 
            goToListTrips={goToListTrips}
            goToLogin={goToLogin}
          />
        )
    }
  }

  const goToHome = () => {
    setCurrentPage('HomePage')
  }

  const goToListTrips = () => {
    setCurrentPage('ListTripsPage')
  }

  const goToLogin = () => {
    setCurrentPage('LoginPage')
  }

  const goToAdminHome = () => {
    setCurrentPage('AdminHomePage')
  }

  const goToApplicationForm = (id) => {
    setApplicationId(id)
    setCurrentPage('ApplicationFormPage')
  }

  const goToCreateTrip = () => {
    setCurrentPage('CreateTripPage')
  }

  const goToTripDetails = () => {
    setCurrentPage('TripDetailsPage')
  }

  return (
    <>
      {showPage()}
    </>
  );
}

export default App;
