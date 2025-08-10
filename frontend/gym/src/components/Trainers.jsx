import React from 'react'
import trainersData from '../data/trainers';
import Trainercard from './Trainercard';

const Trainers = () => {
  return <>
  <div className='row'>
    {
      trainersData.map(y=>(
        <div className='col-md-4'>
          <Trainercard trainers={y}/>
          </div>
      ))
    }
  </div>
  </>
}

export default Trainers;