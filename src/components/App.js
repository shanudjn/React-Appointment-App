import React, { Component } from 'react';
import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';

import '../css/App.css';

import {without} from 'lodash';

class App extends Component {
  constructor(){
    super();
    this.state = {
      myAppointments : [],
      formDisplay : true,
      lastIndex : 0
    }
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }
  componentDidMount(){
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.aptId = this.state.lastIndex;
          this.setState({
            lastIndex : this.state.lastIndex + 1
          })
          return item;
        })
        this.setState({
          myAppointments : apts
        })
      }) 

  }
  toggleForm(){
    this.setState({
      formDisplay : !this.state.formDisplay,
    })
  }
  deleteAppointment(apt){
    //we can never directly call the state, we always need to use a varible to assign that state to it.
    let tempApts = this.state.myAppointments;
    tempApts = without(tempApts, apt);//lodash function.
    this.setState({
      myAppointments : tempApts
    })
  }

  render() {

    return (
      <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              
              <AddAppointments formDisplay={this.state.formDisplay} toggleForm={this.toggleForm}/>
              <SearchAppointments/>
              <ListAppointments appointments={this.state.myAppointments} deleteAppointment={this.deleteAppointment}/>

            </div>
          </div>
        </div>
      </div>
    </main>
    );
  }
}

export default App;
