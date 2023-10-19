import React, { useEffect, useState } from 'react';
import './request-demo.css';
import { useDisplayForm } from '../../hooks/hook';
import { useDispatch, useSelector } from 'react-redux';
import { showForm, hideForm } from '../../redux/reducers/display-form-reducer'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import SecondSuccess from '../success/success';
import { FaTimes } from 'react-icons/fa';

const validationSchema = Yup.object({
    name: Yup.string().required('name is required').min(3, 'name must be at least 3 characters').max(30, 'name must not exceed 30 characters'),
    EstateName: Yup.string().required('Last Name is required').min(3, 'Last Name must be at least 3 characters').max(30, 'Last Name must not exceed 30 characters'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string()
    .required('Phone Number is required')
    .matches(/^[0-9]*$/, 'Phone Number must contain only numeric characters')
    .test('is-exactly-11-digits', 'Phone Number must be exactly 11 digits', (value) => {
      if (!value) return true; // If the value is empty, it's not a validation failure.
      return value.length === 11;
    }),
    address: Yup.string().required('address is required'),
    city: Yup.string().required('city is required').min(3, 'city must be at least 3 characters').max(30, 'city must not exceed 30 characters'),
    state: Yup.string().required('state is required').min(3, 'state must be at least 3 characters').max(30, 'state must not exceed 30 characters'),
    estateName: Yup.string().required('estateName is required').min(3, 'estateName must be at least 3 characters').max(30, 'estate Name must not exceed 30 characters'),
    additionalComments: Yup.string().required('additionalComments is required').min(3, 'additionalComments must be at least 3 characters').max(500, 'additionalComments must not exceed 500 characters'),
  });

  const Requestdemo = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL || 'https://node-backend-landing-page.herokuapp.com';
    const [ onFinish, setOnFinish ] = useState(false);
    const dispatch = useDispatch();
    const display = useSelector((state: any) => state?.displayForm);
    const [loading, setLoading] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [ data, setData ] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        estateName: '',
        address: '',
        city: '',
        state: '',
        additionalComments: '',
        })
  
  const toggle = () => {
    dispatch(hideForm())
  }

  const handleSubmit = async(userdata:any) => {
    setLoading(true);
    setData(userdata)

    const info = {
        type: selectedTopic,
        name: userdata.name,
        email: userdata.email,
        mobile: userdata.phoneNumber,
        estateName: userdata.estateName,
        address: userdata.address,
        city: userdata.city,
        state: userdata.state,
        message: userdata.additionalComments,
    }

    try {
        const response = await axios.post(`${baseUrl}estility/v1/3231/website/demo`, info);
        // Handle the response data as needed
        setLoading(false)
        console.log(response.data);
        setOnFinish(true);
        // setTimeout(() => {
        //     dispatch(hideForm());
        // }, 2000)
      } catch (error) {
        setLoading(false)
        console.error('Axios request error:', error);
      }
  };

  const [ selectedTopic, setSelectedTopic ] = useState('');

  const purposeForm = [
    {
        id: 1,
        title: 'Estate Management Software',
    },

    {
        id: 2,
        title: 'Estate Security Software'
    },

    {
        id: 3,
        title: 'Resident App'
    },

    {
        id: 4,
        title: 'Vendor Management Software'
    }
]
  
    // if (!isOpen) return null;
    if(display === false) return null;
    return (
    <div className='modal-overlay'>
        <div className='modal-content-body' >
    <div className='d-flex flex-column sora-font' >
      <div className='d-flex justify-content-between'>
         <div className='dark-font bold-600 font-size-24 sora-font'>Schedule Demo</div>
         <button className='bold-500 close-form bg-transparent' onClick={toggle}><FaTimes /></button>
      </div>
      <div className='mt-1 text-heading'>We are always on the look out to partner with indigenous brands and vendors to help serve our customers</div>
      <Formik
      initialValues={{
        name: '',
        email: '',
        phoneNumber: '',
        estateName: '',
        address: '',
        city: '',
        state: '',
        additionalComments: '',

        // Initialize other form fields here
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log('hi')
        console.log(values)
        actions.resetForm();
      }}
      >
        {(formikProps:any) => (
      <form onSubmit={() => handleSubmit(formikProps.values)} className='gap-10 d-flex mt-1 flex-column form-container font-size-14'>

                <div className='custom-row justify-content-between'>
                    <div className='d-flex flex-column custom-col-md-6 sora-font input-div'>
                        <div className='form-label sora-font'>Name</div>
                        <input 
                         onChange={formikProps.handleChange("name")}
                         value={formikProps.values.name}
                         onBlur={formikProps.handleBlur('name')}
                        placeholder='first name' 
                        type='text' />
                <p className='fw-bold text-danger'>{formikProps.touched.name  && formikProps.errors.name}</p>
                    </div>

                    <div className='d-flex custom-col-md-6 flex-column sora-font input-div'>
                        <div className='form-label flexgrow-1 sora-font'>Email</div>
                        <input 
                         onChange={formikProps.handleChange("email")}
                         value={formikProps.values.email}
                         onBlur={formikProps.handleBlur('email')}
                        className='flexgrow-1' 
                        placeholder='Email' type='email' />
                <p className='fw-bold text-danger'>{formikProps.touched.email  && formikProps.errors.email}</p>

                    </div>
                </div>

                <div className='custom-row gap-10  justify-content-between'>
                    <div className='d-flex flex-column custom-col-md-6 sora-font input-div'>
                        <div className='form-label sora-font'>Phone Number</div>
                        <input 
                         onChange={formikProps.handleChange("phoneNumber")}
                         value={formikProps.values.phoneNumber}
                         onBlur={formikProps.handleBlur('phoneNumber')}
                        className='flexgrow-1' 
                        placeholder='Phone Number'
                         type='text' />
                <p className='fw-bold text-danger'>{formikProps.touched.phoneNumber  && formikProps.errors.phoneNumber}</p>

                    </div>

                    <div className='d-flex custom-col-md-6 flex-column sora-font input-div'>
                        <div className='form-label sora-font'>Estate Name</div>
                        <input 
                        onChange={formikProps.handleChange("estateName")}
                        value={formikProps.values.estateName}
                        onBlur={formikProps.handleBlur('estateName')}
                        className='flexgrow-1' 
                        placeholder='Estate Name' type='text' />
                <p className='fw-bold text-danger'>{formikProps.touched.estateName  && formikProps.errors.estateName}</p>

                    </div>
                </div>

                <div className=''>
                    <div className='d-flex flex-column sora-font input-div'>
                        <div className='form-label sora-font'>Address</div>
                        <input 
                        onChange={formikProps.handleChange("address")}
                        value={formikProps.values.address}
                        onBlur={formikProps.handleBlur('address')}
                        className='flexgrow-1' 
                        placeholder='address' type='text' />
        <p className='fw-bold text-danger'>{formikProps.touched.address  && formikProps.errors.address}</p>

                    </div>
                </div>

                <div className='custom-row gap-10  justify-content-between'>
                    <div className='d-flex flex-column flexgrow-1 custom-col-md-6 sora-font input-div'>
                        <div className='form-label sora-font'>City</div>
                        <input 
                        onChange={formikProps.handleChange("city")}
                        value={formikProps.values.city}
                        onBlur={formikProps.handleBlur('city')}
                        className='flexgrow-1' 
                        placeholder='city' 
                        type='text' />
                <p className='fw-bold text-danger'>{formikProps.touched.city  && formikProps.errors.city}</p>
                    </div>

                    <div className='d-flex custom-col-md-6 flex-column sora-font input-div'>
                        <div className='form-label sora-font'>State</div>
                        <input 
                        onChange={formikProps.handleChange("state")}
                        value={formikProps.values.state}
                        onBlur={formikProps.handleBlur('state')}
                        className='flexgrow-1' 
                        placeholder='state' 
                        type='text' />
                <p className='fw-bold text-danger'>{formikProps.touched.state  && formikProps.errors.state}</p>

                    </div>
                </div>
               
               <div className='sora-font font-size-14 what-intersts-you'>Which product are you interested in?</div>
                <div className='d-flex flex-wrap justify-content-between interest mt-1'>
                    {purposeForm?.map((purpose) => (
                        <button type='button' onClick={() => setSelectedTopic(purpose?.title)} className={`sora-font flexgrow-1 ${selectedTopic === purpose?.title ? 'selected' : ''}`} key={purpose?.id}>{purpose?.title}</button>
                    ))}
                </div>

                <div className='textarea-input'>
                    <div className='d-flex flex-column sora-font'>
                        <div className='form-label sora-font'>Additional Comments</div>
                        <textarea 
                        onChange={formikProps.handleChange("additionalComments")}
                        value={formikProps.values.additionalComments}
                        onBlur={formikProps.handleBlur('state')}
                        className='full-width flexgrow-1' 
                        placeholder='first name'></textarea>
                <p className='fw-bold text-danger'>{formikProps.touched.additionalComments  && formikProps.errors.additionalComments}</p>
                    </div>
                    
                    <div className='char-count sora-font mt-1'>0/500 Characters</div>
                                       
                    <div className="d-flex align-center gap-10 mt-1">
                        <input type='checkbox'/>
                        <div className='agreement font-size-14 sora-font'>By submitting this form: You agree to the processing of the submitted personal data in accordance with Estility’s Privacy Policy.</div>
                    </div>
                    <button disabled={loading} 
                    onClick={() => handleSubmit(formikProps.values)} type="button" 
                    className="full-width submit-application violet-background sora-font text-white mt-2">
                        {loading===true ? 'Sending...' : 'Submit' }</button>
                </div>
            </form>
        )}
            </Formik>

    </div>
    </div>
    <SecondSuccess title='Request Sent' text='Your request has been sent successfully' isModalOpen={onFinish} handleModalOpen={setOnFinish} />
    </div>
  )
}

export default Requestdemo