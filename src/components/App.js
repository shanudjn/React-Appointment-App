import React, { Component } from 'react';
import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
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
