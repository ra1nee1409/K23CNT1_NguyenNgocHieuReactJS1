import './App.css';
// import { render } from '@testing-library/react';
import NnhExample from './components/NnhExample';
import NnhFunComponents from './components/NnhFunComponents';
import NnhFunComponents2 from './components/NnhFunComponents2';
import Nnhclasscon from './components/Nnhclasscon';

function App() {
  const users = {
    fullname: 'Nguyen Ngoc Hieu',
    age: '20',
    phone: '0966141414',
  }

  return (
  <div className="container border mt-3 bg-red">  
    <div className="inner-container">
      <NnhExample name="Nguyen Ngoc Hieu" address="24 Nguyen Xien" company="CTYTRACHNHIEM1MINHTAO"/>
    </div>
      <hr/>
    <div className="inner-container">
      <NnhExample name="Nguyen Dep Trai" address="124 Nguyen Xien" company="CTY TOP 1 THE GIOI"/>
    </div>
    <hr/>
    <div className='alert alert-info'>
      <NnhFunComponents renderInfo={users}/>
    </div>
    <hr/>
      <div className='alert alert-primary'>
      <NnhFunComponents2/>
      </div>
      {/* chuyen du lieu tu state ve components */}
      <NnhFunComponents2 renderName ="K23CNT1" renderUsers = {users}/>
      <hr/>
      <div className='alert alert-primary'>
        <Nnhclasscon renderTest={users}/>
      </div>
  </div>
  );
}
export default App;
