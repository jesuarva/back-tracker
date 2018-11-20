import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <FormGroup>
        <Label for="bags">Select</Label>
        <Input type="select" name="bags" id="bags" value={value}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
    );
  }
}
