import logo from './logo.svg';
import './App.css';
//import Employee from './Components/FunctionComponent/Employee';
//import {Employee,Manager} from './Components/FunctionComponent/Employee'
//import Student from './Components/ClassComponent/Student';
import { Student, Faculty } from './Components/ClassComponent/Student'
import { JSXDemo } from './Components/JSX/JSXDemo';
//import Employee from './Components/Constructor/Employee';
import Eventhandling from './Components/EventHandling/Eventhandling';
import Greeting from './Components/ConditionalRendering/Greeting'
import Product from './Components/LifeCycleOfComponent/Product';
import Employee from './Components/PropType/Employee';
import HookDemo from './Components/ReactHook/HookDemo';
import Stepper from './Components/ReactHook/CustomHook';
import StudentList from './Components/MapFunction/StudentList';
import FormDemo from './Components/ControlleredComponent/FormDemo';
import UserForm from './Components/ControlleredComponent/UserForm';
//import Demo from './Components/UnControlleredComponent/Demo';
import UserList from './Components/Filter/UserList';
import RoutingDemo from './Components/ReactRouting/RoutingDemo';
import BootStrapDemo from './Components/ReactBootstrap/BootStrapDemo';
import Rahul from './Components/ReactHOC/Rahul';
import Neha from './Components/ReactHOC/Neha';
import Parent from './Components/ParenttoChildPassData/Parent';
import Parent1 from './Components/PassDataFromChildToParent/Parent1'
import Demo from './Components/LiftingStateUp/Demo'
import { Provider } from 'react-redux'
//import Store from './Components/ReactRedux/Store';
import Medical from './Components/ReactRedux/Medical';
import { MedicalHook } from './Components/ReactRedux/MedicalHook';
import Store from './Components/ReduxThunk/Store';
import Users from './Components/ReduxThunk/Users';
import ButtonDemo from './Components/UnitTesting/ButtonDemo';
import CustomerLogin from './Components/ReduxThunk/CustomerLogin';

const studentRecord = {
  name: "Rahul Sharma",
  rollno: 2323,
  course: "BCA",
  fees: 34567.34
}

function App() {

  // const getData1 = Stepper();
  // const getData2 = Stepper();

  return (
    <Provider store={Store}>
      <div className="App">
        {/* <CustomerLogin /> */}
        {/* <ButtonDemo /> */}
        <UserForm/>
      </div>
    </Provider>
  );
}

export default App;
{/* <Medical/>
        <MedicalHook/> */}
{/* <Users/> */ }
{/* <ButtonDemo /> */ }
{/* <Demo/> */ }
{/* <StudentList/> */ }
{/* <h1>Welcome to React Sessions!!!!</h1> */ }
{/* <Rahul course="iOS Development" address="Indore M.P"/> */ }
{/* <Neha course="React Native Development" address="Barwani M.P"/> */ }
{/* <Parent1/> */ }
{/* <FormDemo/> */ }
{/* <UserForm/> */ }
{/* <Demo/> */ }
{/* <UserList /> */ }
{/* <RoutingDemo/> */ }
{/* <BootStrapDemo/> */ }
{/* <h1>Count:{getData.counter}</h1> */ }
{/* <button onClick={getData1.handleCounterIncrement}
        style={{ fontSize: 32, width: 50, height: 50 }}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{ fontSize: 32, width: 50, height: 50 }}>{getData1.counter}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={getData1.handleCounterDecrement}
        style={{ fontSize: 32, width: 50, height: 50 }}>-</button>
        <hr></hr>
        <button onClick={getData2.handleCounterIncrement}
        style={{ fontSize: 32, width: 50, height: 50 }}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{ fontSize: 32, width: 50, height: 50 }}>{getData2.counter}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={getData2.handleCounterDecrement}
        style={{ fontSize: 32, width: 50, height: 50 }}>-</button> */}
{/* <HookDemo /> */ }
{/* <Eventhandling/> */ }
{/* <Greeting isLoggedIn={true}/> */ }
{/* <Product price={21000.0} getStudent={studentRecord}/> */ }
{/* <Employee name="Neha Sharma" salary={23000.0} depart="Accountant"/> */ }
{/* calling Component */ }
{/* <JSXDemo/> */ }
{/* <Employee setName="Rahul"/> */ }
{/* <Manager name="Manoj Verma" id={2323} salary={54567.343} exp={5} />
      <Employee name="Rahul Sharma" id={2323} salary={34567.343} department="IT"/>
      <Employee name="Neha Sharma" id={45454} salary={44567.343} department="HR"/>
      <Employee name="Priya Sharma" id={2452} salary={32567.343} department="Accounts"/>
      <Employee name="Vijay Kumar" id={5655} salary={45567.343} department="IT"/> */}
{/* <Faculty name="Vishal Verma" id={343} salary={34567.34} subject="Math"/>
      <Student name="Raj Sharma" rollno={343} course="BCA" fees={34567.34}/> */}