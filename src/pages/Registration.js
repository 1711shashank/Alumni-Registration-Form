import React from 'react'
import './Registration.css'
import RegistrationHeader from '../components/RegistrationHeader'
import RegistrationNavbar from '../components/RegistrationNavbar'
import RegistrationForm from '../components/RegistrationForm'
import RegistrationFooter from '../components/RegistrationFooter'


const Registration = () => {
    return (
        <>
            <div className='Registration'>
                <RegistrationHeader />
                <RegistrationNavbar />
                <RegistrationForm />
                <RegistrationFooter />
            </div>
        </>
    )
}

export default Registration