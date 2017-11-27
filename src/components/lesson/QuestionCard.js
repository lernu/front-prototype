import React, { Component } from 'react'

class QuestionCard extends Component {


  render() {
    return (
      <div className="content-box">
        <div className="centered-block">
          <div className="condition">Мощ..</div>
          <div className="explanation">В конце слова в женсом роде пишется мягкий знак</div>
          <ul className="options-list">
            <button className="option option-clickable">—</button>
            <button className="option option-clickable">ь</button>
          </ul>
        </div>
	  </div>
    )
  }
}

export default QuestionCard