import React from 'react'
import { HeaderBanner } from '../terms-and-conditions/terms-and-conditions'
import { BiBriefcaseAlt, BiCartAlt } from 'react-icons/bi'
import { MdAccessibilityNew } from 'react-icons/md'
import { GrLocation } from 'react-icons/gr';
import { BsArrowUpRight } from 'react-icons/bs';
import { CareerMgtSystem, RiderMgtSystem } from '../Products/product-items'
import VendorContent from '../Vendors/vendor-content'
import careersImg from '../../assets/careers-img.png';
import './careers.css';
import { CiClock2 } from 'react-icons/ci';

const offers = [
  {
    id: 1,
    title: 'Innovation ',
    text: "Be a part of a dynamic environment that encourages creative thinking and problem-solving.",
    icon: <BiBriefcaseAlt size={20} />
  },

  {
    id: 2,
    title: 'Impact ',
    text: "Contribute to meaningful solutions that directly enhance the lives of estate residents.",
    icon: <MdAccessibilityNew size={20} />
  },

  {
    id: 3,
    title: 'Collaboration ',
    text: "Work with a diverse and talented team, fostering a culture of shared growth.",
    icon: <BiCartAlt size={20} />
  },

  {
    id: 4,
    title: 'Growth ',
    text: "Access to continuous learning and development opportunities to enhance your skills.",
    icon: <BiCartAlt size={20} />
  },
]

const jobs = [
  {
    id: 1,
    title: 'Product Designer',
    text: 'We are looking for a product designer to join our team',
    location: 'Lagos, Nigeria',
    type: 'Full Time'
  },

  {
    id: 2,
    title: 'Software Engineer',
    text: 'We are looking for a product designer to join our team',
    location: 'Lagos, Nigeria',
    type: 'Full Time'
  },

]

interface JobProps {
  jobTitle: string,
  description: string,
  location: string,
  type: string
}

const Careers = () => {
  const JobView :React.FC<JobProps>= ({jobTitle, description, location, type}) => (
    <div className='d-flex justify-content-between align-center border-8 job-item sora-font mt-1'>
      <div className='d-flex flex-column gap-10 job-desc-buttons'>
        <div className='job-item-title font-size-24 sora-font violet-color bold-500'>{jobTitle}</div>
        <div className='dark-color sora-font'>{description}</div>
        <div className='d-flex gap-10 violet-color sora-font'>
          <button className='job-location sora-font violet-color d-flex align-center'><GrLocation size={20} />{location}</button>
          <button className='job-type d-flex align-center violet-color sora-font'><CiClock2 size={20} />{type}</button>
        </div>
      </div>
      <div style={{ justifyContent: 'end'}} className='d-flex flex-column apply-button-div'><button className='violet-background bold-500 sora-font text-white apply-button'>Apply <BsArrowUpRight /> </button></div>
    </div>
  )

  return (
    <div className='d-flex flex-column'>
      <HeaderBanner
        title='Careers'
        subText="At Estility, we believe that our team is our greatest asset, and we're always on the lookout for passionate individuals who share our vision. Join us in creating seamless living experiences for residents across Nigeria."
        hasSubText={true}
        hasButton={true}
        buttonText='Apply Now'
      />
      <div className='careers-container'>
        <VendorContent items={offers} heading='Why Estility?' />
        <CareerMgtSystem
          title='Software Engineer'
          description="At Estility, we're not just offering a job – we're providing a platform for growth and an opportunity to make a meaningful impact and we reward good work with oue amazing offerings."
          image={careersImg}
        />
        <div className='sora-font bold-600 current-openings text-center mt-3'>Our Current Openings</div>
        <div className='d-flex flex-column gap-10'>
          {jobs.map(job => (
            <JobView
              key={job.id}
              jobTitle={job.title}
              description={job.text}
              location={job.location}
              type={job.type}
              />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Careers