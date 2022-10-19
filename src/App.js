import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './App.css';

function App() {
   const [temperatureName, setTemperatureName] = useState([]);
   const [temperature, setTemperature] = useState("");
   const [firstTemperature, setFirstTemperature] = useState(0);
   const [temperature2, setTemperature2] = useState("");
   const [secondTemperature2, setSecondTemperature2] = useState(0);
  useEffect(()=>{
    fetch("http://localhost:2000/temperature")
    .then(res=>res.json())
    .then(data=>{
      setTemperatureName(data);
    })
  },[])
 
  function handleSelect1(e){
    setTemperature(e.target.value);
    if(e.target.value === temperature2){
      setSecondTemperature2(firstTemperature);
    }
    else if(e.target.value === "celsius" && temperature2 === "faherheit"){
      setSecondTemperature2(((9*Number(firstTemperature)+160)/5).toFixed(2));
    }
    else if(e.target.value === "faherheit" && temperature2 === "celsius"){
      setSecondTemperature2((((Number(firstTemperature)-32)/9)*5).toFixed(2));
    }
    else if(e.target.value === "kalvin" && temperature2 === "celsius"){
      setSecondTemperature2((Number(firstTemperature)-273).toFixed(2));
    }
    else if(e.target.value === "celsius" && temperature2 === "kalvin"){
      setSecondTemperature2((Number(firstTemperature)+273).toFixed(2));
    }
    else if(e.target.value === "faherheit" && temperature2 === "kalvin"){
      setSecondTemperature2(((Number(firstTemperature)*5 + 2297)/9).toFixed(2));
    }
    else if(e.target.value === "kalvin" && temperature2 === "faherheit"){
      setSecondTemperature2((((Number(firstTemperature) - 273)/5)*9+32).toFixed(2));
    }
    
  }
  function handleSelect2(e){
    setTemperature2(e.target.value);
    if(e.target.value === temperature){
      setSecondTemperature2(firstTemperature);
    }
    else if(e.target.value === "celsius" && temperature === "faherheit"){
      setSecondTemperature2(((9*Number(firstTemperature)+160)/5).toFixed(2));
    }
    else if(e.target.value === "faherheit" && temperature === "celsius"){
      setSecondTemperature2((((Number(firstTemperature)-32)/9)*5).toFixed(2));
    }
    else if(e.target.value === "kalvin" && temperature === "celsius"){
      setSecondTemperature2((Number(firstTemperature)-273).toFixed(2));
    }
    else if(e.target.value === "celsius" && temperature === "kalvin"){
      setSecondTemperature2((Number(firstTemperature)+273).toFixed(2));
    }
    else if(e.target.value === "faherheit" && temperature === "kalvin"){
      setSecondTemperature2(((Number(firstTemperature)*5 + 2297)/9).toFixed(2));
    }
    else if(e.target.value === "kalvin" && temperature === "faherheit"){
      setSecondTemperature2((((Number(firstTemperature) - 273)/5)*9+32).toFixed(2));
    }
    
 

  
  }


  return (
    <div className="body">
      <div className="App">
     <div className="container">
      <h2>Currency Converter</h2>
     <InputGroup className="mt-5 mb-3">
     <Form.Select aria-label="Default select example" onChange={handleSelect1}>
      <option>Select the currency</option>
      {temperatureName.map(c=><option key={c._id} value={c.temp}>{c.temp}</option>)}
    </Form.Select>
        <Form.Control aria-label="Text input with dropdown button"
        onChange={(event)=>setFirstTemperature(event.target.value)}
        />
      </InputGroup>

      <InputGroup className="">
      <Form.Select aria-label="Default select example" onChange={handleSelect2}>
      <option>Select the currency</option>
      {temperatureName.map(c=><option key={c._id} value={c.temp}>{c.temp}</option>)}
    
      
      </Form.Select>
        <Form.Control aria-label="Text input with 2 dropdown buttons"
        disabled={true}
         value={secondTemperature2}
        />
        
      </InputGroup>
     </div>
    </div>
    </div>
  );
}

export default App;
