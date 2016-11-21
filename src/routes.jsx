import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app.jsx';
import Home from './components/views/home/home.jsx';
// import AboutPage from './components/about/AboutPage';
// <Route path="about" component={AboutPage}/>

export default(
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
	</Route>
);
