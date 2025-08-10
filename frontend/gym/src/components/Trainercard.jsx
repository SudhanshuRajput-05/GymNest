import React from 'react'
import { Card } from 'react-bootstrap'

const Trainercard = ({trainers}) => {
  return <>
  <Card className='mt-5' style={{ width: '30rem'}}>
    <Card.Img src={trainers.Image} variant='top'/>
    <Card.Body>
      <Card.Title>Name: {trainers.name}</Card.Title>
      <Card.Text>Email: {trainers.email}</Card.Text>
      <Card.Text>Contact: {trainers.contact}</Card.Text>
      <Card.Text>City: {trainers.city}</Card.Text>
      <Card.Text>Experience: {trainers.experience}</Card.Text>
      <Card.Text>Specialiation: {trainers.specialiation}</Card.Text>
      <Card.Text>Status-Mode: {trainers.statusMode}</Card.Text>
      <Card.Text>Working-Hours: {trainers.WorkingHours}</Card.Text>
    </Card.Body>
  </Card>
  </>
}

export default Trainercard;