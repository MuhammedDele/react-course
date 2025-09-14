import { useState } from 'react';
import './App.css';
import Header from './Header';
import Post from './Post';
import Tasks from './tasks';
import MyButton from './MyButton';
import MyInputs from './MyInputs';
import MyForm from './MyForm';
import LoanForm from './LoanForm';

function App() {
  let title = "Comunicating using props";
  const[count,setCount] = useState(0);
  function handlePlusClick(){
    //التحديث المتتالي 
    setCount((c) =>{
      return c + 1;
    });
    setCount((c) =>{
      return c + 2;
    });

  }

  let nextId = 5;
  const [deviceNameInputValue,setDeviceInputValue] = useState("");
  const[devices,setDevices] = useState([
    {id:1,name:"laptop"},
    {id:2,name:"mobile"},
    {id:3,name:"tablet"},
    {id:4,name:"desktop"}
  ])
  function handleDeleteClick(id){
    alert("delete clicked "+id);
    const newDevices = devices.filter((device) => device.id !== id);
    setDevices(newDevices);
  }

  function handleModifyClick(id){
    const deviceIndex = devices.findIndex((device) => device.id === id);
    const newDevices = devices.map((device) =>{
      if(device.id === id){
       let newDevice = {...device, name: device.name + "!"};
        return newDevice;
      }else{
        return device;
      }
    })
    setDevices(newDevices);
    alert("modify clicked "+id + " index is "+deviceIndex);
  }

  const devicesList = devices.map((device) => {
    return <li key={device.id}>{device.name}</li>
  })
  const devicesList2 = devices.map((device) => {
    return <li key={device.id}>{device.name} <button onClick={() =>{
      handleDeleteClick(device.id);
    }}>Delete</button> <span><button onClick={() =>{handleModifyClick(device.id)}}>modify</button></span></li>
  })
  function handleAddClick(){
    // const newDevice = [...devices];
    // newDevice.push(deviceNameInputValue);
    // setDevices(newDevice);
    // setDeviceInputValue("");
    setDevices([...devices,{id: nextId++, name: deviceNameInputValue}]);
    setDeviceInputValue("");
  }
  
  const post = [
    {id:1,postName:"My first post",postBody:"This is the body of my first post"},
    {id:2,postName:"My second post",postBody:"This is the body of my second post"},
    {id:3,postName:"third post",postBody:"learning props"},
    {id:4,postName:"conditional rendering",postBody:"nos body"}
  ]
  const myPosts = post.map((p) => <Post key={p.id} postName={p.postName} postBody={p.postBody}>
    {/* <p>This is the child content</p> */}
  </Post>);
  return (
    <div className="App">
        <Header />
        {myPosts}
        <Tasks />
        
        {/* displaying posts without using map function */}
        {/* <Post postName="My first post" postBody="This is the body of my first post"/>
        <Post postName="My second post" postBody="This is the body of my second post"/>
        <Post postName='third post' postBody='learning props'>
          <p>This is the child content</p>
        </Post>
        <Post postName='conditional rendering' /> 
        <Tasks />   */}
        <div>State management</div>
        <MyButton />
        <div>state management with inputs</div>
        <MyInputs />
        <div>state with forms</div>
        <MyForm />
        <hr />
        <div>using arrays as state in teh component</div>
          {devicesList}
          <input value={deviceNameInputValue} onChange={(event) =>{
            setDeviceInputValue(event.target.value);
          }} type="text" placeholder='Enter device name' />
          <button onClick={handleAddClick}>Add device</button>
          <hr />
        <div>delete and modify in the array state</div>
        {devicesList2}
          <input value={deviceNameInputValue} onChange={(event) =>{
            setDeviceInputValue(event.target.value);
          }} type="text" placeholder='Enter device name' />
          <button onClick={handleAddClick}>Add device</button>
          <hr />
          <div>continus refresh in react</div>
          <h1>Count is : {count}</h1>
          <button onClick={handlePlusClick}>+</button>
          <hr />
          <div>summary of first 40 video</div>
          <div style={{marginTop:"200px"}}>
            <LoanForm title={title}/>
          </div>
          

    </div>
    
  );
}

export default App;
