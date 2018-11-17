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
  }

  handleClick() {
    addingItem(this.state);
    /**
     * DEBUGGING
     * The actionCreator is posting to server and creating a new document, but is not dispatching the actions.
     */
    // addingItem({ name: 'jean Ariza', email: 'jean@jean.com', bags: 4 });
  }

  handleChange(event) {
    event.stopPropagation();
    console.log(event.target.id, this.state);
    // this.setState({ [event.target.id]: event.target.value });
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

export default connect(() => {
  return {}, { addingItem };
})(NewEntry);
