import React from 'react'
import { useParams } from 'react-router-dom'
import { jobs } from '../careers/careers'
import { GrLocation } from 'react-icons/gr';
import { CiClock2 } from 'react-icons/ci';
import { BiBriefcaseAlt, BiCartAlt } from 'react-icons/bi'

import { GoShareAndroid } from 'react-icons/go';
import './job.css';

interface Props {
  icon: React.ReactNode;
  title: string | any;
}
const Job = () => {
    const param = useParams()
    console.log({param})
    const filteredJob = jobs?.find((job) => Number(job?.id) === Number(param?.id))

    const JobDetails:React.FC<Props> = ({title, icon}) => (
      <div>
        <button className='d-flex align-center job-details bg-white'>{icon} {title}</button>
      </div>
    )

    const jobdetails = [
      {
        id: 1,
        title: filteredJob?.location,
        icon: <GrLocation />
      },

      {
        id: 2,
        title: 'Full Time',
        icon: <CiClock2 />
      },

      {
        id: 3,
        title: 'Design',
        icon: <BiBriefcaseAlt />
      }
    ]

    const responsibilities = [
      {
        id: 1,
        title: 'Responsibilities and titles of the job',
      },

      {
        id: 2,
        title: 'Responsibilities and titles of the job',
      },

      
      {
        id: 3,
        title: 'Responsibilities and titles of the job',
      },

      
      {
        id: 4,
        title: 'Responsibilities and titles of the job',
      },

      
      {
        id: 5,
        title: 'Responsibilities and titles of the job',
      }
    ]

  return (
    <div className='d-flex flex-column job-details-container'>
        <div className='full-width d-flex justify-content-between'>
          <div className='sora-font bold-600 job-details-title sora-font'>{filteredJob?.title}</div>
          <div className='d-flex align-center gap-10'>
            <button className='d-flex align-center job-share violet-color bold-500 bg-white'><GoShareAndroid size={20} />Share job</button>
            <button className='apply-now-button bg-white sora-font bold-500 violet-color'>Apply now</button>
          </div>
        </div>
        <div className='d-flex gap-10 mt-1'>
         {jobdetails.map((job, index) =>(
            <JobDetails key={index} title={job.title} icon={job.icon} />
         ))}
        </div>
        <div className='d-flex flex-column sora-font job-description mt-1'>
          <div className='sora-font job-personnel'>
          We are looking for a Product Designer to work on various products we develop for our customers.
Product Designer responsibilities include defining product specifications, creating digital or print drawings and designing fully-functional products. To be successful in this role, you should have an eye for color and shape and be able to translate requirements into practical product features.
Ultimately, you will help us build products that are easy to use and visually appealing to our potential customers.
          </div>
          <div className='dark-color bold-600 font-size-24 sora-font mt-1'>Responsibilities</div>
          <div>
            <ul className='job-responsibilities mt-1'>
              {responsibilities.map((responsibility, index) => (
                <li className='sora-font' key={index}>{responsibility.title}</li>
              ))}
            </ul>
          </div>
          <div className='dark-color bold-600 font-size-24 sora-font mt-1'>Requirements and skills</div>
          <div>
            <ul className='job-responsibilities mt-1'>
              {responsibilities.map((responsibility, index) => (
                <li className='sora-font' key={index}>{responsibility.title}</li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Job