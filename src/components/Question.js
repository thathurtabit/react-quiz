import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
	return (
		<h2>{props.content}</h2>
	);
}

Question.propTypes = {
	content: PropTypes.number.isRequired
};

export default Question;