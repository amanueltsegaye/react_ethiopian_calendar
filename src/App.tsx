import React, { useEffect, useState } from 'react';
import './App.css';
import moment from 'moment';
import { EthiopianDateUtil } from './helpers/EthiopianDateUtil';


function App() {

  useEffect(() => {
   
    var calendar = ($ as any).calendars.instance('ethiopian', 'am');
        ($('#id_et_calender')as any).calendarsPicker({
            calendar: calendar,
            onSelect: () => {
                var eth = $('#id_et_calender').val();
                console.log('Selected:: ', eth);
                var toGreg = EthiopianDateUtil.ethToGreg(eth);
                var greg = toGreg ? moment(toGreg).toDate() : null;

                console.log('To Greg :: ', toGreg);
                console.log('Greg Full format:: ', greg);

                alert('Selected on Greg: ' + greg);

            }

        });

  });



  return (
     
    <div className="App">
      <header className="App-header">
       
       <label>Ethiopian Calendar Date-Picker</label><br />
        <input
          type="text"
          id="id_et_calender"
          className="datepicker"
          placeholder="DD-MM-YYYY"
          autoComplete="off"
        />

      </header>
    </div>
  );
}

export default App;
