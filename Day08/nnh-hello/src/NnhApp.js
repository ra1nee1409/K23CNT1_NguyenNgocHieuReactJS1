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
import NnhControl from './components/NnhControl';
import NnhStudenList from './components/NnhStudenList';
import NnhForm from './components/NnhForm';

class NnhApp extends Component {
  constructor(props){ 
    super(props);
    this.state = {
      nnhStudents:[
        {nnhId:"SV001",nnhStudentName:"Nguyen Ngoc Hieu",nnhAge:20,nnhGender:"Nam",nnhBirthday:"14/09/2005",nnhBirthPlace:"HN",nnhAddress:"123 Nguyen Xien"},
        {nnhId:"SV002",nnhStudentName:"Tran Tien Anh",nnhAge:20,nnhGender:"Nam",nnhBirthday:"5/12/2005",nnhBirthPlace:"NB",nnhAddress:"124 Nguyen Xien"},
        {nnhId:"SV003",nnhStudentName:"Le Ngoc Son",nnhAge:21,nnhGender:"Nam",nnhBirthday:"03/09/2005",nnhBirthPlace:"HD",nnhAddress:"125 Nguyen Xien"},
        {nnhId:"SV004",nnhStudentName:"Le Ngoc Son",nnhAge:21,nnhGender:"Nam",nnhBirthday:"03/09/2005",nnhBirthPlace:"HD",nnhAddress:"126 Nguyen Xien"},
      ],
    }
  }s

  render() {
    return (
      <div>
        <h1 className='text-center'>K23CNT1 Miniproject</h1>
        <hr />
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* header */}
              <NnhControl />
              {/* danh sach sien vien */}
              <NnhStudenList  renderNnhStudents={this.state.nnhStudents} />
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/* form */}
            <NnhForm />
          </div>
        </div>

      </div>
    );
  }
}

export default NnhApp;