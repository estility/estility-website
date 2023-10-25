import { AiOutlineCheck } from "react-icons/ai";
import './product.css';

interface EstateMgtProps {
    title?: string;
    description?: string;
  }
  
  interface SolutionProps {
    title: string;
    description: string;
    image: string;
  }

export const EstateMgtSoftware:React.FC<EstateMgtProps> = ({title, description}) => (
    <div className='gap-10 custom-col-md-6 mt-1 sora-font'>
     <div style={{float: 'left', borderRadius: '50px', padding: '3px', marginRight: '3px' }} 
     className='d-flex align-items-center sora-font violet-background'><AiOutlineCheck color='#fff' /></div>
     <div style={{ gap: "0.5rem"}} className='d-flex flex-column'>
      <div className='dark-font sora-font bold-600 estate-mgt-product'>{title}</div>
      <div className='font-size-14 dark-font estate-mg-product-desc'>{description}</div>
     </div>
    </div>
  )

  const EstilityRider = ({description}:EstateMgtProps) => (
    <div className='gap-10 mt-1'>
     <div style={{float: 'left', borderRadius: '50px', padding: '3px', marginRight: '3px' }} className='d-flex align-items-center violet-background'><AiOutlineCheck color='#fff' /></div>
     <div className='d-flex justify-content-between'>
      <div className='font-size-14 dark-font estate-mg-product-desc'>{description}</div>
     </div>
    </div>
  )

export const Solutions = ({title, description, image}: SolutionProps) => (
    <div className='custom-row justify-content-between mt-3'>
    <div className='custom-col-md-6'>
      <div className='d-flex flex-column'>
       <div className='violet-color sora-font bold-600 estate-software-title'>{title}</div>
       <div className='dark-color sora-font estate-software-text'>{description}</div>
      </div>
      <div className='custom-row'>
       <EstateMgtSoftware title='RESIDENT DATABASE MANAGEMENT' 
       description="Keep track of all residents effortlessly. Our software centralizes resident data, making communication and record-keeping easy and efficient" />

       <EstateMgtSoftware title='Dues Tracking and Management' 
       description='Say goodbye to manual accounting. Our software automates the calculation and tracking
       of dues, guaranteeing accurate financial management.' />

       <EstateMgtSoftware title='Complaints and Maintenance' 
       description="Simplify the process of handlingproperty maintenance requests and monitor their resolution
       progress, ensuring prompt responses to resident related concerns." />

       <EstateMgtSoftware title='Seamless Communication'
       description='Foster transparent communication between residents and management using our broadcast messaging feature, promoting cohesive living.'/>
      </div>
      <div>
      </div>
    </div>
    <div className='custom-col-md-6 justify-center software-img'>
     <img className='full-width' src={image} alt='software' />
    </div>
    </div>
  )


  export const ResidentApp = ({title, description, image}: SolutionProps) => (
    <div className='custom-row justify-content-between mt-3'>
    <div className='custom-col-md-6'>
      <div className='d-flex flex-column'>
       <div className='violet-color sora-font bold-600 estate-software-title'>{title}</div>
       <div className='dark-color sora-font estate-software-text'>{description}</div>
      </div>
      <div className='custom-row'>
       <EstateMgtSoftware title='DUE PAYMENTS' 
       description='Pay your dues conveniently and instantly through the app.' />

       <EstateMgtSoftware title='Utility Payment' 
       description='Conveniently pay your utility bills from the app, saving you time and effort' />

       <EstateMgtSoftware title='Visitor Passes' 
       description='Generate visitors access codes for your guests through the app.' />

       <EstateMgtSoftware title='Grocery Shopping and Cooking Gas Purchase:'
       description='Don’t leave your house. Tell us what you want on the app and we will bring it to you. No need to carry heavy bags and gas cylinders.' />

      </div>
      <div>
      </div>
    </div>
    <div className='custom-col-md-6 justify-center software-img'>
     <img className='full-width' src={image} alt='software' />
    </div>
    </div>
  )

  export const SecuritySystem = ({title, description, image}: SolutionProps) => (
    <div className='custom-row justify-content-between mt-3 align-center'>
    <div className='custom-col-md-6'>
      <div className='d-flex flex-column'>
       <div className='violet-color sora-font bold-600 estate-software-title'>{title}</div>
       <div className='dark-color sora-font estate-software-text'>{description}</div>
      </div>
      <div className='custom-row'>
       <EstateMgtSoftware title='Visitor Management' 
       description='Control and track who enters and exits your estate. ' />

       {/* <EstateMgtSoftware title='Smart Access Control' 
       description='Grant entry to authorized individuals through our secured OTP code system, reducing unauthorized entry risks.' /> */}
       
       <EstateMgtSoftware title='Access History' 
       description='Keep records of all entries and exits for a life time.' />

       {/* <EstateMgtSoftware title='Ease of Communication'
       description='Facilitate transparent communication among residents and thd management through our broadcast messaging featurecreating a cohesive living environment.' />
       */}
      </div>
      <div>
      </div>
    </div>
    <div className='custom-col-md-6 justify-center software-img'>
     <img className='full-width' src={image} alt='software' />
    </div>
    </div>
  )

  export const VendorMgtSystem = ({title, description, image}: SolutionProps) => (
    <div className='custom-row justify-content-between mt-3'>
    <div className='custom-col-md-6'>
      <div className='d-flex flex-column'>
       <div className='violet-color sora-font bold-600 estate-software-title'>{title}</div>
       <div className='dark-color sora-font estate-software-text'>{description}</div>
      </div>
      <div className='custom-row vendor-content-page'>
       <EstateMgtSoftware title='Efficient Order Processing' 
       description='Seamlessly receive, manage, and process orders from residents through our user-friendly interface.' />
       <EstateMgtSoftware title='Real-time Inventory Updates' 
       description="Track your inventory in real time, ensuring that you're always stocked up and ready to fulfill orders." />
       <EstateMgtSoftware title='Transparent Earnings' 
       description='Gain insights into your earnings, order history, and payment details through a transparent dashboard.' />
       <EstateMgtSoftware title='Simplified Payment MAnagement'
       description='Securely manage earnings and withdrawals, guaranteeing hassle-free financial processes.' />
      </div>
      <div>
      </div>
    </div>
    <div className='custom-col-md-6 justify-center software-img'>
     <img className='full-width' src={image} alt='software' />
    </div>
    </div>
  )


  export const RiderMgtSystem = ({title, description, image}: SolutionProps) => (
    <div className='custom-row justify-content-between mt-3'>
    <div className='custom-col-md-6'>
      <div className='d-flex flex-column'>
       <div className='violet-color sora-font bold-600 estate-software-title'>{title}</div>
       <div className='dark-color sora-font estate-software-text'>{description}</div>
      </div>
      <div className='d-flex flex-column'>
       <EstilityRider
       description="A valid driver's license is your gateway to hitting the road." />
       <EstilityRider 
       description="A smartphone for efficient order management through our delivery app" />
       <EstilityRider
       description='A positive attitude and a dedicated commitment to delivering
       exceptional customer service.' />
      </div>
      <div>
      </div>
    </div>
    <div className='custom-col-md-6 justify-center software-img'>
     <img className='full-width' src={image} alt='software' />
    </div>
    </div>
  )


  export const Career = ({title, description}:EstateMgtProps) => (
    <div className='gap-10 career-items custom-col-md-6 d-flex flex-column mt-1 border-8'>
     <div 
     style={{float: 'left', borderRadius: '50px', padding: '3px', marginRight: '3px', width:'fit-content', alignSelf: 'center' }}
      className='d-flex align-items-center violet-background'>
      <AiOutlineCheck color='#fff' />
      </div>
     <div className='d-flex flex-column'>
      <div className='dark-font sora-font bold-600 estate-mgt-product'>{title}</div>
      <div className='font-size-14 dark-font estate-mg-product-desc'>{description}</div>
     </div>
    </div>
  )


  export const CareerMgtSystem = ({title, description, image}: SolutionProps) => (
    <div className='custom-row justify-content-between mt-3'>
    <div className='custom-col-md-6'>
      <div className='d-flex flex-column gap-10 career-header-description'>
       <div className='violet-color font-size-24 sora-font bold-600 estate-software-title'>{title}</div>
       <div className='dark-color sora-font estate-software-text'>{description}</div>
      </div>
      <div className='custom-row career-items-div'>
       <Career title='Efficient Order Processing' 
       description='Seamlessly receive, manage, and process orders from residents through our user-friendly interface.' />
       <Career title='Real-time Inventory Updates' 
       description="Track of your inventory in real time, ensuring that you're always stocked up and ready to fulfill orders." />
       <Career title='Transparent Earnings' 
       description='Gain insights into your earnings, order history, and payment details through a transparent dashboard.' />
       <Career title='Simplified Payment MAnagement'
       description='Securely manage earnings and withdrawals, guaranteeing hassle-free financial processes.' />
      </div>
      <div>
      </div>
    </div>
    <div style={{ justifyContent: 'end'}} className='mt-3 custom-col-md-6 d-flex align-center career-img'>
     <img className='full-width' src={image} alt='software' />
    </div>
    </div>
  )
