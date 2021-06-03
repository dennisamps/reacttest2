import React from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from "shards-react";

class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    //window.history.pushState(this.state.value,this.state.value,)
    window.location.hash=this.state.value;
    event.preventDefault();
    window.location.reload();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input  placeholder="Search Student ID" style={{height: "100px"}} style={{width: "1000px"}} type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input style={{height: "27px"}} type="submit" value="Submit"/>
      </form>
    );
  }
}

export default NavBarSearch
