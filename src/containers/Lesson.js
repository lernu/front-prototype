import React, { Component } from 'react'
import ProgressLesson from '../components/lesson/ProgressLesson'
import QuestionCard from '../components/lesson/QuestionCard'
import ControlPanel from '../components/lesson/ControlPanel'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Lesson extends Component {

  componentWillMount() {
    this.props.loadLesson(this.props.match.params.lessonName)
  }


  render() {
    // console.log(this.props.match.params.lessonName)
    return (
      <div>
        <ProgressLesson />
        <QuestionCard />
        <ControlPanel />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state
})
  
const mapDispatchToProps = dispatch => ({
  loadLesson: (lessonId) => {  dispatch(actions.loadLesson(lessonId)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lesson)