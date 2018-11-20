import React from 'react';
import './BagSelector.css';

export default class BagSelector extends React.Component {
  bagsUnitHandler = (e) => {
    e.stopPropagation();
    const { id } = e.target;
    const { value, updateBags } = this.props;

    switch (id) {
      case 'substract':
        value > 1 && updateBags(value - 1);
        break;
      case 'add':
        value < 5 && updateBags(value + 1);
        break;
      default:
    }
  };

  render() {
    const { value } = this.props;
    return (
      <div className="bag-selector">
        <h3>BAGS</h3>
        <div className="bag-controller" onClick={this.bagsUnitHandler}>
          <span id="substract">-</span>
          {value}
          <span id="add">+</span>
        </div>
      </div>
    );
  }
}
