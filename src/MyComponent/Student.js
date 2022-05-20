import React, { Component } from 'react'

 class Student extends Component 
 {
        state={
            name:"Dixit from India"
        }
  render() {
    return (
      <div>
          <h1>Hi{this.state.name}</h1>
      </div>
    );
  }
}

export default Student;