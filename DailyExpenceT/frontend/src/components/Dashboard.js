import React from 'react'

const Dashboard = () => {
  const userName = localStorage.getItem('userName');
  return (
    <div className='container mt-4'>
      <div className='text-center'>
        <h2>Wellcome, {userName}!</h2>
        <p className='text-muted'>Here's your expenses overview</p>
      </div>
      
      
    </div>
  )
}

export default Dashboard
