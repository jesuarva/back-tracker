import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { fetchingItems } from '../../actions/actionCreators';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

import MainContent from '../MainContent/MainContent';

class App extends Component {
  componentDidMount() {
    const { fetchingItems } = this.props;
    fetchingItems();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect(
    () => {
      return {};
    },
    { fetchingItems },
  )(App),
);
