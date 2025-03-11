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
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import NnhUseEffect from './components/NnhUseEffect';
import NnhuseStateoficel from './components/NnhuseStateoficel';

class NnhApp extends Component {
  render() {
    return (
      <div>
        <h1>Nguyen Ngoc Hieu K23CNT1 Hooks</h1>
        <div>
          <h1>Test1</h1>
          <Test1 />
        </div>
        <hr />
        <div className='alert alert-danger mx2'>
          <h1>Test2</h1>
          <Test2 />
        </div>

        <hr />
        <div>
          <NnhuseStateoficel />
        </div>
        <h1>NnhUseEffect</h1>
        <NnhUseEffect/>
      </div>
    );
  }
}

export default NnhApp;
