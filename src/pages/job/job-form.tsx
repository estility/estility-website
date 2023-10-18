import { useState, useRef, useEffect } from "react"; // new
import './job-form.css';

const JobForm = () => {
    const fileRef: any = useRef(null);

    const uploadImage = () => {
        console.log('button clicked')
        // try {
        // setLoading(true)
        const formData: any = new FormData();
        // formData.append('PhotoUpload', selectedFile);
        // formData.append('UserId', AuthData.getUserId().toString());
        // const upload = await UserService.uploadProfilePicture(AuthData.getUserId(), selectedFile)
        // if (upload && upload.status) {
        //     setLoading(false)
        //     showToastSuccess(upload?.message);
        //     setSelectedFile(null)
        //     setButtonText('Change photo');

        //     // TODO: Display the new uploaded picture
        //     setProfilePicture(upload.data);
        // } else {
        //     showToastError(upload?.message);
        //     setLoading(false)
        //     setButtonText('Change photo');
        // }

        // } catch (error) {
        //     let response = handleHttpError(error);
        //     showToastError(response.message);
        // }
    };


    const handleSubmit = (event: any) => {
        event.preventDefault();
        triggerOnChange()
        // buttonText === 'Change photo' ? triggerOnChange() : uploadImage();
    };

    const triggerOnChange = () => {
        fileRef && fileRef.current.click();
    };
    const [profilePicture, setProfilePicture] = useState<string>();
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [buttonText, setButtonText] = useState<string>("Drag and drop your files here or browse");
    const [loading, setLoading] = useState<boolean>(false);

    const handleFileChange = (e: any) => {
        const uploadedFile = e.target.files[0];
        const allowedExtensions = ["jpeg", "jpg", "png"];

        if (!uploadedFile) return;

        const extension = uploadedFile.name.split(".").pop().toLowerCase();

        if (!allowedExtensions.includes(extension)) {
            e.target.value = "";
        } else {
            setSelectedFile(uploadedFile);
            setButtonText('Save photo');
        }
    };

    return (
        <div className='d-flex flex-column gap-10 align-center full-width application-form sora-font'>
            <div className="violet-color bold-600 apply-text">Apply for this job</div>
            <div className="dark-color fill-in-form">Please fill the details below</div>
            <form className='gap-10 d-flex flex-column form-container font-size-14'>

                <div className='custom-row gap-10 justify-center'>
                    <div className='d-flex flex-column custom-col-md-6 sora-font input-div'>
                        <div className='form-label sora-font'>First Name</div>
                        <input className='flexgrow-1' placeholder='first name' type='text' />
                    </div>

                    <div className='d-flex custom-col-md-6 flex-column sora-font input-div'>
                        <div className='form-label sora-font'>Last Name</div>
                        <input className='flexgrow-1' placeholder='first name' type='text' />
                    </div>
                </div>

                <div className='custom-row gap-10  justify-center'>
                    <div className='d-flex flex-column custom-col-md-6 sora-font input-div'>
                        <div className='form-label sora-font'>Email</div>
                        <input className='flexgrow-1' placeholder='first name' type='text' />
                    </div>

                    <div className='d-flex custom-col-md-6 flex-column sora-font input-div'>
                        <div className='form-label sora-font'>Phone number</div>
                        <input className='flexgrow-1' placeholder='first name' type='text' />
                    </div>
                </div>

                <div className='custom-row gap-10  justify-center'>
                    <div className='d-flex flex-column custom-col-md-6 sora-font input-div'>
                        <div className='form-label sora-font'>LinkedIn url (Optional)</div>
                        <input className='flexgrow-1' placeholder='first name' type='text' />
                    </div>

                    <div className='d-flex custom-col-md-6 flex-column sora-font input-div'>
                        <div className='form-label sora-font'>Portfolio url (Optional)</div>
                        <input className='flexgrow-1' placeholder='first name' type='text' />
                    </div>
                </div>

                <div className='textarea-input' style={{ width: '93%', alignSelf: 'center' }}>
                    <div className='d-flex flex-column sora-font'>
                        <div className='form-label sora-font'>Cover Letter</div>
                        <textarea className='full-width flexgrow-1' placeholder='first name'></textarea>
                    </div>
                    <div className='char-count sora-font'>0/500 Characters</div>
                    
                    <div className="mt-1">Resume</div>
                    <div className="mt-1">
                        <button style={{ height: '250px'}} type="button" className="btn btn-primary p-2 mb-3 full-width" onClick={handleSubmit}>
                            {loading ? 'sending...' : buttonText}
                        </button>
                        <input style={{ display: 'none' }} type="file" ref={fileRef} className="d-none" id="fileInput" onChange={handleFileChange} />
                    </div>
                    <div className="d-flex align-center gap-10">
                        <input type='checkbox' />
                        <div>By submitting this form: You agree to the processing of the submitted personal data in accordance with Estility’s Privacy Policy.</div>
                    </div>
                    <button className="full-width submit-application violet-background sora-font text-white mt-2">Submit Application</button>
                </div>
            </form>
        </div>
    )
}

export default JobForm