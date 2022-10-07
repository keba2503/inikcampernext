import './index.scss';
import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
import withRedux from "next-redux-wrapper";
import store from '../redux/store';
import { loadIcons } from '../utils/IconLoader';
import { createWrapper } from 'next-redux-wrapper';
import initAuth from '../initAuth'


loadIcons();
initAuth();

class MyApp extends App {
componentDidMount(){
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
}
    static async  getServerSideProps({Component, ctx}) {
        const pageProps = Component. getServerSideProps ? await Component. getServerSideProps(ctx) : {};

        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }

    render() {
        //Page props that were returned  from ' getServerSideProps' are stored in the props i.e. pageprops
        const {Component, pageProps} = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        );
    }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;
const wrapper = createWrapper(makeStore);


//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);

