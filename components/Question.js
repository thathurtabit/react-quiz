import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
	return (
		<h2>{props.content}</h2>
	);
}

Question.propTypes = {
	optionalString: PropTypes.string
}

export default Question;