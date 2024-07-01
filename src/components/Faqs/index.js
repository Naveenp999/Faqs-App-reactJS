import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(element => (
              <FaqItem content={element} key={element.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
