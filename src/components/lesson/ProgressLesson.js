import React, { Component } from 'react'
import closeSvg from '../../assets/close-test.svg'

class ProgressLesson extends Component {

  render() {
    return (
      <div className="progress-box">
        <div className="progress p0"></div>
        <button className="close-test-btn">
          <img src={closeSvg} alt="close" />
        </button>
      </div>
    )
  }
}

export default ProgressLesson
