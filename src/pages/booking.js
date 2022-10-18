import {
  AuthAction,
  useAuthUser,
  withAuthUser, // High Order Component -> función que devuelve un componente
  withAuthUserTokenSSR, // High Order Function -> función que devuelve una función
} from 'next-firebase-auth'
import Headerbooking from '../components/Layout/Header/Headerbooking'
import React from 'react'
import Footer from '../components/Layout/Footer/Footer'
import Breadcrumb from '../components/Common/Breadcrumb'
import Calender from '../components/calender/calender'

const Booking = () => {
  const user = useAuthUser()

  return (
    <>
      <React.Fragment>
        <Headerbooking />
        <Breadcrumb pageTitle="Reservación " />

        <div className="container">
          <h2 className="titulobooking">
            Hola! {user.email ? user.email : 'inexistente'}
          </h2>

          <div className="container">
            <h3 className="titulobooking">Selecciona tu fecha de reserva</h3>
            <Calender />
          </div>
        </div>
        <div className="container">
          <br></br>
          <br></br>
          <br></br>
          </div>
        <Footer/>
      </React.Fragment>
    </>
  )
}

// Note that this is a higher-order function.
export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(() => {
  return {
    props: {},
  }
})

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Booking)
