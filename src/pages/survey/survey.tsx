import { useEffect, useState } from 'react';
import './survey.css';
import { useDisplayForm } from '../../hooks/hook';
import { useDispatch, useSelector } from 'react-redux';

import { showForm, hideForm } from '../../redux/reducers/display-form-reducer'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import SecondSuccess from '../../modals/success/success';

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

  const Survey = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL || 'https://node-backend-landing-page.herokuapp.com';
    const [ onFinish, setOnFinish ] = useState(false);
    const dispatch = useDispatch();
    const display = useSelector((state: any) => state?.displayForm);
    const [loading, setLoading] = useState(false);
    const [ agreed, setAgreed ] = useState(false);
    const [ selectedTopic, setSelectedTopic ] = useState('');

    useEffect(() => {
        // Facebook Pixel Code
        const script = document.createElement('script');
        script.innerHTML = `
          (function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
              n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
          })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
          // Initialize Facebook Pixel
          window.fbq('init', '1480389659224721');
          window.fbq('track', 'PageView');
        `;
        document?.head?.appendChild(script);
        
        return () => {
          document?.head?.removeChild(script);
        };
      }, []);

  const handleSubmit = async(userdata:any, e:any) => {
    e.preventDefault();
    if(selectedTopic === '' ){
        toast.error('Please select a product of interest')
        return 
    }
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
   
    setLoading(true);
    try {
        const response = await axios.post(`${baseUrl}estility/v1/3231/campaign/website/demo`, info);
        // Handle the response data as needed
        setLoading(false)
        setOnFinish(true);
        // setTimeout(() => {
        //     dispatch(hideForm());
        // }, 2000)
      } catch (error) {
        setLoading(false)
        console.error('Axios request error:', error);
        toast.error('Something went wrong, please try again');
      }
  };

  const purposeForm = [
    {
        id: 1,
        title: 'Estate Grocery / Gas Delivery service',
    },

    {
        id: 2,
        title: 'Estate Management Software',
    }
]
  
    return (
    <>

    <div className='d-flex flex-column sora-font survey-form' >
         <div className='dark-font bold-600 font-size-24 sora-font text-center'>Invite Us to Your Estate</div>
      <div className='mt-1 text-heading text-center'>Please fill out the form below to invite Estility to your estate</div>
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
        type: selectedTopic,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
      }}
      >
        {(formikProps:any) => (
      <form onSubmit={(e) => handleSubmit(formikProps.values, e)} className='gap-10 d-flex mt-1 flex-column form-container font-size-14'>

                <div className='custom-row justify-content-between'>
                    <div className='d-flex flex-column custom-col-md-6 sora-font input-div'>
                        <div className='form-label sora-font'>Full Name</div>
                        <input 
                         onChange={formikProps.handleChange("name")}
                         value={formikProps.values.name}
                         onBlur={formikProps.handleBlur('name')}
                        placeholder='Full Name' 
                        required
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
                        required 
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
                        required
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
                        required
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
                        required
                        placeholder='Address' type='text' />
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
                        placeholder='City'
                        required 
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
                        placeholder='State'
                        required 
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
                        required
                        // readOnly={formikProps.values.additionalComments.length >= 500} 
                        placeholder='Type your comment'></textarea>
                <p className='fw-bold text-danger'>{formikProps.touched.additionalComments  && formikProps.errors.additionalComments}</p>
                    </div>
                    
                    <div className='char-count sora-font mt-1'>{formikProps.values.additionalComments.length}/500 Characters</div>
                                       
                    <div className="d-flex align-center gap-10 mt-1">
                        <input type='checkbox' checked={agreed} required onChange={() => setAgreed(!agreed)}/>
                        <div className='agreement font-size-14 sora-font'>By submitting this form: You agree to the processing of the submitted personal data in accordance with Estility’s <a href='/privacy-policy'>Privacy Policy</a>.</div>
                    </div>
                    <div className='survey-button'>
                    <button disabled={loading} 
                    type="submit" 
                    className="submit-application violet-background sora-font text-white mt-2">
                        {loading===true ? 'Sending...' : 'Submit' }</button></div>
                </div>
            </form>
        )}
            </Formik>

    </div>
    <SecondSuccess title='Invitation sent!' 
    text="We've received your invitation request. A member of our team will be in touch with you shortly. Thank you for reaching out." 
    isModalOpen={onFinish} handleModalOpen={setOnFinish} />
    </>
  )
}

export default Survey