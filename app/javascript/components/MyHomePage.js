import React from "react"
import PropTypes from "prop-types"
import styles from "../styles/application.css";

class MyHomePage extends React.Component {
  render() {
    return (
      <React.Fragment>

        <div className={[styles.calis].join(' ')} style={{ backgroundColor: 'red',marginTop:'20%' }}>ddd</div>


      </React.Fragment>
    );
  }
}

MyHomePage.propTypes = {
  tagline: PropTypes.string
};
export default MyHomePage
