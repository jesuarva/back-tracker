import React, { Component } from 'react';
import { connect } from 'react-redux';
import BagSelector from './BagSelector/BagSelector';
import { addingItem } from '../../actions/actionCreators';
import Inputs from './Inputs/Inputs';
import Button from './Button/Button';
import './NewEntry.css';

class NewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      bags: 1,
      email: '',
      classes: {
        name: '', // '' || valid' || 'no-valid'
        email: '', // '' || valid' || 'no-valid'
      },
      butonActive: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.updateBags = this.updateBags.bind(this);
  }

  handleClick() {
    const { addingItem } = this.props;
    addingItem(this.state);
  }

  handleChange(event) {
    event.stopPropagation();

    const { id, value } = event.target;
    let validationClass;

    if (value === '') {
      validationClass = '';
    } else {
      validationClass = this.validateInput(id, value) ? 'valid' : 'no-valid';
    }

    const newClasses = { ...this.state.classes, [id]: validationClass };

    const buttonActive =
      newClasses.name === 'valid' && newClasses.email === 'valid'
        ? true
        : false;

    this.setState({ [id]: value, classes: newClasses, buttonActive });
  }

  validateInput(field, value) {
    return {
      email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
        value,
      ),
      name: /^[A-Za-z]+\s{1}[A-Za-z]+/.test(value),
    }[field];
  }

  updateBags(value) {
    this.setState({ bags: value });
  }

  render() {
    const { name, email, classes, buttonActive } = this.state;

    return (
      <div className="new-entry">
        <h1>Add new passenger and bags</h1>
        <form onChange={this.handleChange}>
          <Inputs name={name} email={email} classes={classes} />
          <BagSelector value={this.state.bags} updateBags={this.updateBags} />
          <Button
            text="Create new"
            data={this.state}
            buttonActive={buttonActive}
            handleClick={this.handleClick}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(
  mapStateToProps,
  { addingItem },
)(NewEntry);
