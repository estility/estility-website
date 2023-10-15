import React from 'react'
import { useParams } from 'react-router-dom'
import { jobs } from '../careers/careers'

const Job = () => {
    const param = useParams()
    console.log({param})
    const filteredJob = jobs?.find((job) => Number(job?.id) === Number(param?.id))

  return (
    <div>
        <div>{filteredJob?.title}</div>
        <div>{filteredJob?.location}</div>
    </div>
  )
}

export default Job