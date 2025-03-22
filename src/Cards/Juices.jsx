import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { juice } from '../Img';

const Juices = () => {
  return (
    <>
      <div className='flex items-center justify-center'>
      <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-2 sm:grid-cols-1 sm:gap-1">
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src={juice.pineapplejuice} alt='Pineapple' className='m-auto w-full h-full'/>
          <Card.Body>
                  <Card.Title>Pineapple Juice</Card.Title>
                  <Card.Text>pineapplejuice for better health</Card.Text>
                  <Card.Text>200</Card.Text>
                  <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card> 

        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src={juice.bananajuice} alt='Banana' className='m-auto w-full h-full'/>
          <Card.Body>
                  <Card.Title>Banana Juice</Card.Title>
                  <Card.Text>Rich Banana juice for better health</Card.Text>
                  <Card.Text>100</Card.Text>
                  <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>

        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src={juice.strawberryjuice} alt='strawberry' className='m-auto w-full h-full'/>
          <Card.Body>
                  <Card.Title>Strawberry Juice</Card.Title>
                  <Card.Text>strawberryjuice for better health</Card.Text>
                  <Card.Text>50</Card.Text>
                  <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>

        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src={juice.orangejuice} alt='orange' className='m-auto w-full h-full'/>
          <Card.Body>
                  <Card.Title>Orange Juice</Card.Title>
                  <Card.Text>Orange Juice for better health</Card.Text>
                  <Card.Text>150</Card.Text>
                  <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
        </div>
      </div>
    </>
  )
}

export default Juices
