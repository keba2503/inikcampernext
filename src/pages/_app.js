import './index.scss';
import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
import withRedux from "next-redux-wrapper";
import store from '../redux/store';
import { loadIcons } from '../utils/IconLoader';
import { createWrapper } from 'next-redux-wrapper';
import initAuth from '../initAuth'
// date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// or for Day.js
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// or for Luxon
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
// or for Moment.js
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import {Calendar} from '../components/calender/calender'

loadIcons();
initAuth();

class MyApp extends App  {
    
componentDidMount(){
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
}
    static async  getInitialProps({Component, ctx}) {
        const pageProps = Component. getInitialProps ? await Component. getInitialProps(ctx) : {};

        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }

    render() {
        //Page props that were returned  from ' getInitialProps' are stored in the props i.e. pageprops
        const {Component, pageProps} = this.props;

        return (
            <Provider store={store} dateAdapter={AdapterDayjs}>
                <Component {...pageProps}/>
                {Calendar}
            </Provider>
        );
    }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;
const wrapper = createWrapper(makeStore);


//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);

