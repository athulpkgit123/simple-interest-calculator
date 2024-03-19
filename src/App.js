import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css';
import { useState } from 'react';

function App() {


  const [principle, setPerinciple] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [intrest, setIntrest] = useState(0)


  console.log(principle, rate, year);

  const calculateInterest = (e) => {
    e.preventDefault()
    console.log(principle, rate, year);

    if (!principle || !rate || !year) {
      alert("please fill the values completely")
    }
    else{
      setIntrest(principle*rate*year/100)
    }
  }



  const resetForm=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setInterest(0)

  }

  return (
    <>

      <div className='app'>

        <div className='container'>

          <div className='heading-text'>

            <h1 className='title'>Simple Intrest Calculator</h1>

            <p className='title-para'>Calculate Your Simple Interest Easily</p>
          </div>

          <div className='amount-card'>
            <div className='card-text'>
              <h3 className='total-amount'>₹{intrest}</h3>
              <p className='total-para'>Total Simple Intrest</p>
            </div>
          </div>


          <form onSubmit={calculateInterest}>

            <div className='text-field'>

              {/* principle amount */}
              <div className='output'>

                <TextField value={principle||""} onChange={e => setPerinciple(e.target.value)} id="outlined-basic" label="₹ Principle Amount" variant="outlined" />

              </div>

              {/* rate of intrest */}
              <div className='output'>

                <TextField value={rate||""} onChange={e => setRate(e.target.value)} id="outlined-basic" label="Rate of Intrest(P.A)%" variant="outlined" />

              </div>

              {/* Time period */}

              <div className='output'>

                <TextField value={year||""} onChange={e => setYear(e.target.value)} id="outlined-basic" label="Time Period(Yearly)" variant="outlined" />

              </div>

            </div>
            {/* button div */}

            <div className='btn-group'>
              <Stack direction="row" spacing={2}>

                <Button type='submit' className='btn' style={{ backgroundColor: 'black' }} variant="contained">Calculate</Button>
                <Button onClick={resetForm} className='btn' style={{ backgroundColor: 'red' }} variant="contained">Reset</Button>

              </Stack>

            </div>



          </form>

        </div>

      </div>






    </>
  );
}

export default App;
