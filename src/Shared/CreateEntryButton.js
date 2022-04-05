import React from 'react'
import { Button } from 'react-bootstrap';


const CreateEntryButton = () => {
  return (
    <div>
        <Button variant="primary" size="lg" block> 
            Bootstrap Button
        </Button>
        <div> </div>
        <Button> Non Bootstrap Button </Button>
    </div>
  )
}

export default CreateEntryButton