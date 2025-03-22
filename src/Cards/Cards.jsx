import React from 'react'
import data from "../data.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fruit } from '../Img';

const Cards = () => {
  return (
    <>
      <div className='flex items-center justify-center'>
      <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-2 sm:grid-cols-1 sm:gap-1">
        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src={fruit.mango} alt='mango' className='m-auto w-full h-full'/>
          <Card.Body>
                  <Card.Title>Mango</Card.Title>
                  <Card.Text>Mango alphanzo</Card.Text>
                  <Card.Text>200</Card.Text>
                  <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>

        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src={fruit.apple} alt='apple' className='m-auto w-full h-full'/>
          <Card.Body>
                  <Card.Title>Apple</Card.Title>
                  <Card.Text>Kashmiri Apple</Card.Text>
                  <Card.Text>100</Card.Text>
                  <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>

        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src={fruit.lemon3} alt='apple' className='m-auto w-full h-full'/>
          <Card.Body>
                  <Card.Title>Lemon</Card.Title>
                  <Card.Text>Full of Vitamin C</Card.Text>
                  <Card.Text>50</Card.Text>
                  <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>

        <Card className='w-3xs text-center m-2'>
          <Card.Img variant="top" src={fruit.grapes} alt='grapes' className='m-auto w-full h-full'/>
          <Card.Body>
                  <Card.Title>Grapes</Card.Title>
                  <Card.Text>Rich Grapes</Card.Text>
                  <Card.Text>150</Card.Text>
                  <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
        </div>
      </div>
    </>
  )
}

export default Cards
