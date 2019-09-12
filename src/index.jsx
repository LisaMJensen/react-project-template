import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid'; //for assigning ID's
import Moment from 'moment'; //for working with dates/time

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <HashRouter>
                <Component />
            </HashRouter>
        </AppContainer>,
        document.getElementById('react-app-root')
    );
};

render(App);
/*eslint-disable */
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App);
    });
}
/*eslint-enable */