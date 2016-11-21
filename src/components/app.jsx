import React, {PropTypes} from 'react';
import AppStyles from '../styles/index.scss';

class App extends React.Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;
