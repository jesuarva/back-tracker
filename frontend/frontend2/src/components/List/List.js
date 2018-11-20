import React from 'react';
import { connect } from 'react-redux';
import ListDetails from '../ListDetails.js/ListDetails';

const List = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map((d, i) => (
          <ListDetails
            key={Math.random(Math.random()) + Date.now()}
            details={d}
          />
        ))}
      </div>
    </div>
  );
};

const mapStatToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(
  mapStatToProps,
  {},
)(List);
