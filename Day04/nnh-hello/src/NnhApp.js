import './App.css';

import NnhExample from './components/NnhExample';

function App() {
  // const users = {
  //   fullname: 'Nguyen Ngoc Hieu',
  //   age: '20',
  //   phone: '0966141414',
  // }

  return (
  <div className="container border mt-3 bg-red">  
    <div className="inner-container">
      <NnhExample name="Nguyen Ngoc Hieu" address="24 Nguyen Xien" company="CTYTRACHNHIEM1MINHTAO"/>
    </div>
      <hr/>
    <div className="inner-container">
      <NnhExample name="Nguyen Dep Trai" address="124 Nguyen Xien" company="CTY TOP 1 THE G"/>
    </div>
    <hr/>
  </div>
  )
}
export default App;
