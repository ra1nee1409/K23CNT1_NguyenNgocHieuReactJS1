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
import NnhEventFrom1 from './components/NnhEventFrom1';
import NnhEventFrom2 from './components/NnhEventFrom2';
import NnhEventFrom3 from './components/NnhEventFrom3';
import NnhEventFrom4 from './components/NnhEventFrom4';
import NnhEventFrom5 from './components/NnhEventFrom5';

class NnhApp extends Component {
  render() {
    return (
      <div className='container border my-3 bg-while'>
        <hr/>
        <div>
          <h1> </h1>
          <NnhEventFrom1/>
        </div>
        <hr/>
        <div>
          <h1> </h1>
          <NnhEventFrom2/>
        </div>
        <hr/>
        <div>
          <h1> </h1>
          <NnhEventFrom3/>
        </div>
        <hr/>
        <div>
          <h1> </h1>
          <NnhEventFrom4/>
        </div>
        <hr/>
        <div>
          <h1> </h1>
          <NnhEventFrom5 />
        </div>
        <hr/>
      </div>
    );
  }
}

export default NnhApp;