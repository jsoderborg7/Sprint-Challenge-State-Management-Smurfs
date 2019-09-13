import React, {useState} from 'react';

const AddSmurf2 = ({addSmurf}) =>{
  const [smurf, setSmurf] = useState('');

  const handleSubmit = e =>{
    e.preventDefault();
    addSmurf(smurf);
    setSmurf('');
  };

  return(
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input 
          type= 'text'
          placeholder= 'Name'
          name = 'name'
          onChange= {e => setSmurf(e.target.value)}
          value= {smurf}
        />
        <input 
          type= 'text'
          placeholder= 'Age'
          name = 'age'
          onChange= {e => setSmurf(e.target.value)}
          value= {smurf}
        />
        <input 
          type= 'text'
          placeholder= 'Height'
          name = 'height'
          onChange= {e => setSmurf(e.target.value)}
          value= {smurf}
        />

        <div className="buttons">
          <button type= 'submit'>Add Smurf</button> 
        </div>
      </form>
    </div>
  )
}

export default AddSmurf2;

