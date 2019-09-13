import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';



const AddSmurf = ({ getSmurfs, errors, touched, status }) => {
  
  const [smurf, setSmurf] = useState([])
  useEffect(() => {
    if (status) {
      setSmurf(smurf => status) 
    }
  }, [status])

  return (
    <div className="addSmurfContainer">
      <span className='addSmurfTitle'>Add New Smurf!</span>
      <Form className="addForm">
        <Field 
          className="input"
          type="text"
          name="name"
          placeholder="Smurf's Name"

        />
        {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <Field
            className="input"
            type="text"
            name="age"
            placeholder="Age"

            />
            {touched.age && errors.age && (
          <p className="error">{errors.age}</p>
            )}

        <Field 
          className="input"
          type="text"
          name="height"
          placeholder="Height"
          
        />
        {touched.height && errors.height && (
          <p className="error">{errors.height}</p>
        )}
        <button  type='submit' className='AddButton'>Add Smurf</button>
      </Form>
    </div>
  )
}

const FormikAddSmurf = withFormik({
  mapPropsToValues({ name, age, height}) {
    return {
      name: name || '',
      age: age || '',
      height: height || ''
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please enter a name!'),
    age: Yup.string().required('Please enter age!'),
    height: Yup.string().required('Please enter height!'),
  }),

  handleSubmit(values, {props, setStatus}) {
    axios 
      .post('http://localhost:3333/smurfs', values)  // ENTER REGISTRATION ENDPOINT
      .then(res => {
        console.log('register', res.data)
        setStatus(res.data)
        localStorage.setItem(res.token)
        props.history.push('/smurfs')
      })
      .catch(err => console.log(err.response))
  }
})(AddSmurf)

export default FormikAddSmurf;