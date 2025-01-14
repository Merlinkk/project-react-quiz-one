import React, { Component } from 'react'

export default class ResultComponent extends Component {
  render() {
    return (
      <div className='resultContainer'>
        <h1 className='headingResult'>Result</h1>
        <div className='quizBox result'>
            <h2>You need more practice!</h2>
            <h1 className='scoreLine'>Your Score is 20%</h1>

            <div className='quizStats'>
                <div className='statElement'>
                    <span>Total number of questions</span>
                    <span>15</span>
                </div>
                <div className='statElement'>
                    <span>Number of attempted questions</span>
                    <span>5</span>
                </div>
                <div className='statElement'>
                    <span>Number of correct answers</span>
                    <span>2</span> 
                </div>
                <div className='statElement'>
                    <span>Number of wrong answers</span>
                    <span>3</span>
                </div>
            </div>
        </div>

        <div className='controls resultControls'>
            <div className="controlButtons playAgain">Play Again</div>
            <div className="controlButtons home">Back to Home</div>
        </div>

    </div>

    )
  }
}
