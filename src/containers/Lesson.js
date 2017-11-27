import React, { Component } from 'react'
import ProgressLesson from '../components/lesson/ProgressLesson'
import QuestionCard from '../components/lesson/QuestionCard'
import ControlPanel from '../components/lesson/ControlPanel'
// import { Link } from 'react-router-dom'

class Lesson extends Component {


  render() {
    console.log(this.props.match.params.lessonName)
    return (
      <div>
        <ProgressLesson />
        <QuestionCard />
        <ControlPanel />
      </div>
    )
  }
}

export default Lesson