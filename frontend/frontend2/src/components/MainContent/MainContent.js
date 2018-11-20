import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from '../List/List';
import Terms from '../Terms/Terms';
import NewEntry from '../NewEntry/NewEntry';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <Switch>
        <Route path="/new" component={NewEntry} />
        <Route path="/term" component={Terms} />
        <Route exact path="/" component={List} />
      </Switch>
    </div>
  );
};

export default MainContent;
