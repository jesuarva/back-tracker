import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { fetchingItems } from '../../actions/actionCreators';
import NavBar from '../NavBar/NavBar';
import List from '../List/List';
import Footer from '../Footer/Footer';
import Terms from '../Terms/Terms';
import NewEntry from '../NewEntry/NewEntry';

class App extends Component {
  componentDidMount() {
    const { fetchingItems } = this.props;
    fetchingItems();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/new" component={NewEntry} />
          <Route path="/term" component={Terms} />
          <Route exact path="/" component={List} />
        </Switch>
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
