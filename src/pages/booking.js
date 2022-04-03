import {
  AuthAction,
  useAuthUser,
  withAuthUser, // High Order Component -> función que devuelve un componente
  withAuthUserTokenSSR, // High Order Function -> función que devuelve una función
} from 'next-firebase-auth'
import Headerbooking from '../components/Layout/Header/Headerbooking';
import React from 'react'
import Footer from '../components/Layout/Footer/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import Link from 'next/link';



const Demo = () => {
  const user = useAuthUser()
  console.log({ user })

  return (
    <>
      <React.Fragment>       
      <Headerbooking />
      <Breadcrumb pageTitle="Mis reservas " />
     
       

        <div className='container'>

          <h2 className='titulobooking'>Hola! {user.email ? user.email : "inexistente"}</h2>
          
          <section className="pricing-area pt-120 pb-90 fix">
                <div className="container">
                    <nav className="text-center wow fadeInUp mb-40" data-wow-delay=".4s">

                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-wrapper text-center mb-30">
                                        <div className="pricing-icon mb-25">
                                           
                                        </div>
                                        <div className="pricing-price mb-25">
                                           
                                        </div>
                                        <div className="pricing-list-bg" id='divimgfurgos'>

                                            
                                            <div className="pricing-btn">
                                                
                                            </div>

                                        </div>
                                    </div>
                                </div>
                              

                            </div>
                        </div>


                    </div>
                </div>
            </section>


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
    props: {}
  }
})

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,

})(Demo) 