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
import CalenderFin from '../components/calender/calenderfin'

const Booking = () => {
  const user = useAuthUser()

  return (
    <>
      <React.Fragment>
        <Headerbooking />
        <Breadcrumb pageTitle="Reservación " />

        <div className="container">
        <h2 className="section-title mb-35"></h2>
        </div>
        <div className="container">
          <div
            className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="section-title-wrapper mb-25">
             
              <p>
              Hola! {user.email ? user.email : 'inexistente'}   Selecciona  tu posible fecha de reserva
              </p>
            </div>
            
          </div>

          <Calender  />
          <br></br>
          <br></br>
          

       
        </div>

        <div className="container">
          <br></br>
          <br></br>
          <br></br>
        </div>
        <Footer />
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
