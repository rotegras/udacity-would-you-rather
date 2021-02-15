import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { handleAddQuestion } from '../../actions/shared';
import { Redirect } from 'react-router-dom';
import { CardWrapper } from '../../Theme/Card';
import { ContainerWrapper } from '../../Theme/Container';


function AddQuestion({ dispatch, authedUser }) {

  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');

  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === 'optionOne') {
      setOptionOneText(value);
    }
    if (name === 'optionTwo') {
      setOptionTwoText(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const question = {
      author: authedUser.id,
      optionOneText,
      optionTwoText
    }

    dispatch(handleAddQuestion(question));
    // dispatch(handleAddQuestion(authedUser.id, optionOneText, optionTwoText));
    setRedirect(true);
  }

  if (redirect === true) return <Redirect to='/home' />

  return (
    <ContainerWrapper>
        <h3>Add Question</h3>
      <CardWrapper>
        <div>Would you rather...</div>
        <input placeholder='Set Option One' type='text' name='optionOne' value={optionOneText} onChange={handleChange} />
        <input placeholder='Set Option Two' type='text' name='optionTwo' value={optionTwoText} onChange={handleChange} />
        <button onClick={handleSubmit} disabled={optionOneText === '' || optionTwoText === ''}>Add</button>
      </CardWrapper>
    </ContainerWrapper>
  )
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

AddQuestion.propTypes = {
  dispatch: PropTypes.func.isRequired,
  authedUser: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(AddQuestion);
