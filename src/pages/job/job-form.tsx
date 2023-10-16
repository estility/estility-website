import { useState, useRef, useEffect } from "react"; // new
import './job-form.css';

const JobForm = () => {
    const fileRef = useRef(null);
    
    return (
        <div className='d-flex flex-column gap-10 align-center full-width application-form'>
            <div>Apply for this job</div>
            <div>Please fill the details below</div>
            <form className='gap-10 d-flex flex-column form-container'>

                <div className='custom-row gap-10 justify-center'>
                    <div className='d-flex flex-column custom-col-md-6 sora-font input-div'>
                        <div className='form-label sora-font'>First Name</div>
                        <input className='flexgrow-1' placeholder='first name' type='text' />
                    </div>

                    <div className='d-flex custom-col-md-6 flex-column sora-font input-div'>
                        <div className='form-label sora-font'>First Name</div>
                        <input className='flexgrow-1' placeholder='first name' type='text' />
                    </div>
                </div>

                <div className='custom-row gap-10  justify-center'>
                    <div className='d-flex flex-column custom-col-md-6 sora-font input-div'>
                        <div className='form-label sora-font'>First Name</div>
                        <input className='flexgrow-1' placeholder='first name' type='text' />
                    </div>

                    <div className='d-flex custom-col-md-6 flex-column sora-font input-div'>
                        <div className='form-label sora-font'>First Name</div>
                        <input className='flexgrow-1' placeholder='first name' type='text' />
                    </div>
                </div>

                <div className='custom-row gap-10  justify-center'>
                    <div className='d-flex flex-column custom-col-md-6 sora-font input-div'>
                        <div className='form-label sora-font'>First Name</div>
                        <input className='flexgrow-1' placeholder='first name' type='text' />
                    </div>

                    <div className='d-flex custom-col-md-6 flex-column sora-font input-div'>
                        <div className='form-label sora-font'>First Name</div>
                        <input className='flexgrow-1' placeholder='first name' type='text' />
                    </div>
                </div>
                  
                  <div className='textarea-input' style={{ width: '93%', alignSelf: 'center'}}>
                    <div className='d-flex flex-column sora-font'>
                        <div className='form-label sora-font'>First Name</div>
                        <textarea className='full-width flexgrow-1' style={{ width: '93%'}} placeholder='first name'></textarea>
                    </div>
                    <div className='char-count sora-font'>0/500 Characters</div>

                    <div></div>
                    </div>
            </form>
        </div>
    )
}

export default JobForm