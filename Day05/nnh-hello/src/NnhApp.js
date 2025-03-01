// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import NnhclasscompEventState from './components/NnhclasscompEventState';
import Nnhclasscomprops2 from './components/Nnhclasscomprops2';
import NnhclassfuncEven from './components/NnhclassfuncEven';

class NnhApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      nnhNoiDung:"Chua co noi dungggg "
    }
  }
// Ham xu ly su kien khi compornen con chuyen du lieu len 
NnhhandelonTtaDatatoapp = (content) => {
  alert(content);
  this.setState()
}
  render() {
    return (
      <div className="container border mt-3 bg-red">
        <div>
            <h2> Class components even state</h2>
            <NnhclasscompEventState/>
          </div>
          <hr/>
          
          <div>
            <h2> Class components even props</h2>
              <Nnhclasscomprops2  NnhEventHandleclick1 ="welcome to Ngoc Hieu" />
          </div>
        <hr/>
        
        <div>
            <h1>{this.state.nnhNoiDung}</h1>
            <h2>class component even post data to app</h2>
            <NnhclassfuncEven NnhonNnhDatatoapp = {this.NnhhandelonTtaDatatoapp}/>
          </div>
      </div>
    );
  }
}

export default NnhApp;

