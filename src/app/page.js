import React from 'react'
import connectDb from './api/dbConnect/route'

const page = () => {
  connectDb();
  return (
    <div>page</div>
  )
}

export default page