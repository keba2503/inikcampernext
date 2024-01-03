import './index.scss';
import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
import {createWrapper} from "next-redux-wrapper";
import store from '../redux/store';
import {loadIcons} from '../utils/IconLoader';

loadIcons();

class MyApp extends App {

    componentDidMount() {
        if (typeof document !== 'undefined' && document) {
            require('bootstrap/dist/js/bootstrap');
        }
    }


    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps: pageProps};
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        );
    }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);

