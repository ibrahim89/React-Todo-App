import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // let person = this.personList.map(p=>{p.id},{p.name})

    return (
      <div>
        <h2>Parent Component</h2>
        {this.props.persons.map((person) => {
          return <ChildComponent key={person.id} person={person} />;
        })}
      </div>
    );
  }
}

export default ParentComponent;
