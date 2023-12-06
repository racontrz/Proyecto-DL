import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Productos from './Productos';


const Home = () => {
  return (
    <div className='container wm-30 mt-5 w-50'>
      <Form className="d-flex me-auto my-2 my-lg-0">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-secondary">Search</Button>
      </Form>
      <div>
        <Productos />
      </div>
    </div>
  )
}

export default Home