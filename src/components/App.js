import React, { Component } from 'react';
import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';

import '../css/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      myAppointments : []
    }
  }
  componentDidMount(){
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          return item;
        })
        this.setState({
          myAppointments : apts
        })
      }) 

  }

  render() {
    // notice we are using a parenthesis after item=>. This is because we want it return a JSX expression.
    const listItems = this.state.myAppointments.map(item => 
      (
        <div>
          <div>{item.petName}</div>
          <div>{item.ownerName}</div>
        </div>
      )   
      /*we can use a return statement here in place of this short cut in place of the upper line*/ 
    );
    return (
      <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              {listItems}
              <AddAppointments/>
              <ListAppointments/>
              <SearchAppointments/>
            </div>
          </div>
        </div>
      </div>
    </main>
    );
  }
}

export default App;
