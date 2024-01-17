import React, { Component } from 'react'

export default class QuizComponent extends Component {
  render() {
    return (
      <div className='quizContainer'>
        <div className='quizBox'>
            <h1>Question</h1>
            <p>1 of 15</p>
            <h3>Which is the only mammal that can jump?</h3>

            <div className='options'>
                <div className="choices">Dog</div>
                <div className="choices">Elephant</div>
                <div className="choices">Goat</div>
                <div className="choices">Lion</div>    
            </div>

            <div className='controls'>
                <div className="controlButtons previous">previous</div>
                <div className="controlButtons next">next</div>
                <div className="controlButtons quit">quit</div>
            </div>

        </div>
      </div>
    )
  }
}
