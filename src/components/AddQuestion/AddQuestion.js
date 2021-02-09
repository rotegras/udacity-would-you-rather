import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { handleAddQuestion } from '../../actions/questions';
import { Redirect } from 'react-router-dom';


function AddQuestion({ dispatch,authedUser }) {

  const [question, setQuestion] = useState({
    optionOneText: '',
    optionTwoText: '',
    author: authedUser.authedUser
  })

  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => setQuestion({...question, [e.target.name]: e.target.value})

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(question);
    dispatch(handleAddQuestion(question));

    setQuestion({
      ...question,
      optionOne: {
        ...question.optionOne,
        text: question.optionOneText,
      },
      optionTwo: {
        ...question.optionTwo,
        text: question.optionTwoText,
      },
    })
    setRedirect(true);
  }


  if (redirect === true) return <Redirect to='/home' />

  return (
    <div>
      <h3>Add Question</h3>
      <div>Would you rather...</div>
      <input placeholder='Set Option One' type='text' name='optionOneText' value={question.optionOneText} onChange={handleChange} />
      <input placeholder='Set Option Two' type='text' name='optionTwoText' value={question.optionTwoText} onChange={handleChange} />
      <button onClick={handleSubmit} disabled={question.optionOneText === '' || question.optionTwoText === ''}>Add</button>
    </div>

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
