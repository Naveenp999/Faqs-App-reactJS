import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {btn: false}

  expandevent = () => this.setState(prev => ({btn: !prev.btn}))

  render() {
    const {content} = this.props
    const {id, questionText, answerText} = content
    const {btn} = this.state
    const buttonImageUrl = btn
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = btn ? 'minus' : 'plus'
    return (
      <li className="item-container">
        <div className="btn-container">
          <h1 className="question">{questionText}</h1>
          <button className="button" onClick={this.expandevent}>
            {<img src={buttonImageUrl} alt={altText} className="btn-icon" />}
          </button>
        </div>
        {btn && (
          <div>
            <hr className="line" />
            <p className="answer-text">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
