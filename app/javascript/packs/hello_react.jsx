// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import MyHomePage from '../components/MyHomePage'
import styles from "../styles/application.css";

const Hello = props => (
  <MyHomePage />
)

Hello.defaultProps = {
  restaurants: [],
  
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello className={styles.body} name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
