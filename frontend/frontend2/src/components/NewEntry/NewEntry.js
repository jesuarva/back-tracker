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
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    const { addingItem } = this.props;
    addingItem(this.state);
  }

  handleChange(event) {
    event.stopPropagation();
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { name, email } = this.state;

    return (
      <Form onChange={this.handleChange}>
        <Inputs name={name} email={email} />
        <BagSelector value={this.state.bags} />
        <Button
          text="Create new"
          data={this.state}
          handleClick={this.handleClick}
        />
      </Form>
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
