import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'reactstrap';
import BagSelector from './BagSelector/BagSelector';
import { addingItem } from '../../actions/actionCreators';
import Inputs from './Inputs/Inputs';
import Button from './Button/Button';

class NewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      bags: 0,
      email: '',
      classes: {
        name: '', // '' || valid' || 'no-valid'
        email: '', // '' || valid' || 'no-valid'
      },
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  handleClick() {
    const { addingItem } = this.props;
    addingItem(this.state);
  }

  handleChange(event) {
    event.stopPropagation();

    const { id, value } = event.target;

    const validationClass = this.validateInput(id, value)
      ? 'valid'
      : 'no-valid';

    const newClasses = { ...this.state.classes, [id]: validationClass };

    this.setState({ [id]: value, classes: newClasses });
  }

  validateInput(field, value) {
    return {
      email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
        value,
      ),
      name: /^[A-Za-z]+\s{1}[A-Za-z]+/.test(value),
    }[field];
  }

  render() {
    const { name, email, classes } = this.state;

    return (
      <div className="container">
        <Form onChange={this.handleChange}>
          <Inputs name={name} email={email} classes={classes} />
          <BagSelector value={this.state.bags} />
          <Button
            text="Create new"
            data={this.state}
            handleClick={this.handleClick}
          />
        </Form>
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
