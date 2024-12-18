import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [invalidPrinciple, setInvalidPrinciple] = useState(false)
  const [invalidRate, setInvalidRate] = useState(false)
  const [invalidYear, setInvalidYear] = useState(false)

  const validateInputs = (inputTag) =>{
    console.log(inputTag);
    const {name, value} = inputTag

    // console.log(name,value);
    // console.log(!!value.match(/^\d+(\.\d+)?$/)); // !! by default the match expression gives either an array or null as output// we use the !! to make it true or false output

    if(name == 'principle'){
      setPrinciple(value)
      if( !!value.match(/^\d+(\.\d+)?$/) ){
        setInvalidPrinciple(false) 
      }else{
        setInvalidPrinciple(true)
      }
    }else if(name == 'rate'){
      setRate(value)
      if( !!value.match(/^\d+(\.\d+)?$/) ){
        setInvalidRate(false) 
      }else{
        setInvalidRate(true)
      }
    }else{
      setYear(value)
      if( !!value.match(/^\d+(\.\d+)?$/) ){
        setInvalidYear(false) 
      }else{
        setInvalidYear(true)
      }
    }
  
  }

  const handleCalculate = (e) =>{
    e.preventDefault()
    if(principle && rate && year){
      setInterest((principle*rate*year)/100)
    }else{
      alert("Please enter values in all the boxes")
    }
  }

  const handleReset = () =>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(false)


  }


  return (
    <>
      <div style={{width: '100%', minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
          <div style={{width : '600px'}} className='bg-light rounded p-5'> 
              <h1>Simple Interest Calculator</h1>
              <p>Calculate Your simple Intrest easily !!</p>

              <div className='bg-warning p-3 text-light text-center rounded'>
                  <h1>₹ {interest}</h1>
                  <p>Total Simple Interest</p>
              </div>

              <form className='mt-5'>
                {/* Principle */}
                <div className='mb-3'>
                    <TextField value={ principle || "" } name='principle' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-principle" label="Principle" variant="outlined" />
                </div>

                {/* invalid principle */}
                {invalidPrinciple && <div className='mb-3 text-danger fw-bolder'>
                    *Invalid Principle amount!
                </div>}

                {/* Rate */}
                <div className='mb-3'>
                    <TextField value={ rate || "" } name='rate' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-rate" label="Rate" variant="outlined" />
                </div>

                {/* invalid rate */}
                {invalidRate && <div className='mb-3 text-danger fw-bolder'>
                    *Invalid Rate amount!
                </div>}

                {/* year */}
                <div className='mb-3'>
                    <TextField value={ year || "" } name='year' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-year" label="year" variant="outlined" />
                </div>

                {/* invalid year */}
                {invalidYear && <div className='mb-3 text-danger fw-bolder'>
                    *Invalid Year amount!
                </div>}
                
                <Stack direction="row" spacing={2}>
                  <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{width :'50%', height :'70px'}} className='rounded bg-dark'>Calculate</Button>
                  <Button onClick={handleReset} variant="outlined" style={{width :'50%', height :'70px'}}>Reset</Button>
                </Stack>

              </form>

          </div>
      </div>
    </>
  )
}

export default App
