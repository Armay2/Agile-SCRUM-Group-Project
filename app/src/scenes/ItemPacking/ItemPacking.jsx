import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './ItemPacking.css';

function BoxForm({updateBoxes}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    
    console.log(form)
    updateBoxes((oldBoxes) => [...oldBoxes, {
      weight: form.BoxFormWeight.value,
      height: form.BoxFormHeight.value,
      width: form.BoxFormWidth.value,
      depth: form.BoxFormDepth.value
    }]);
    
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="BoxFormWeight">
        <Form.Label>Weight</Form.Label>
        <Form.Control defaultValue={1} type="number" placeholder="Weight of your box" />
      </Form.Group>

      <Form.Group controlId="BoxFormHeight">
        <Form.Label>Height</Form.Label>
        <Form.Control defaultValue={1} type="number" placeholder="Height of your box" />
      </Form.Group>

      <Form.Group controlId="BoxFormWidth">
        <Form.Label>Width</Form.Label>
        <Form.Control defaultValue={1} type="number" placeholder="Width of your box" />
      </Form.Group>

      <Form.Group controlId="BoxFormDepth">
        <Form.Label>Depth</Form.Label>
        <Form.Control defaultValue={1} type="number" placeholder="Depth of your box" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add box
      </Button>
    </Form>
  )
}

function ItemsInformations({index, items, updateItems}) {
  return (
    <Row>
      <Col>
      <Form.Group controlId="BoxFormWeight">
        <Form.Control value={items[index].weight} type="number" placeholder="Weight" onChange={(value) => {
          let newArr = [...items];
          newArr[index].weight = parseInt(value.target.value, 10);
          updateItems(newArr);
        }} />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group controlId="BoxFormHeight">
        <Form.Control value={items[index].height} type="number" placeholder="Height" onChange={(value) => {
          let newArr = [...items];
          newArr[index].height = parseInt(value.target.value, 10);
          updateItems(newArr);
        }} />
      </Form.Group></Col>
      <Col>
      <Form.Group controlId="BoxFormWidth">
        <Form.Control value={items[index].width} type="number" placeholder="Width" onChange={(value) => {
          let newArr = [...items];
          newArr[index].width = parseInt(value.target.value, 10);
          updateItems(newArr);
        }} />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group controlId="BoxFormDepth">
        <Form.Control value={items[index].depth} type="number" placeholder="Depth" onChange={(value) => {
          let newArr = [...items];
          newArr[index].depth = parseInt(value.target.value, 10);
          updateItems(newArr);
        }} />
      </Form.Group>
      </Col>
      <Col>
        <Button onClick={() => {
          let newArr = [...items];
          newArr.splice(index, 1);
          updateItems(newArr);
        }}>Delete</Button>
      </Col>
    </Row>
  );
}

function ItemPacking() {

  const [boxes, updateBoxes] = React.useState([]);
  const [items, updateItems] = React.useState([]);

  console.log(boxes)

  return (
    <div className="ItemPacking">
      <h1>Item Packing</h1>
        <Container fluid>
          <Row>
            <Col>
              <h3>Add new box</h3>
              <BoxForm updateBoxes={updateBoxes}/>
              <Row>
                <Col>
                <div style={{marginTop: '20px', border: '2px solid grey'}} />
                </Col>
                <Col>
                <p>Your boxes</p>
                </Col>
                <Col>
                <div style={{marginTop: '20px', border: '2px solid grey'}} />
                </Col>
              </Row>
              {
                boxes.map((box, index) => {
                  return (
                    <Row key={index}>
                      <Col><p>Weight</p><p>{box.weight}</p></Col>
                      <Col><p>Height</p><p>{box.height}</p></Col>
                      <Col><p>Width</p><p>{box.width}</p></Col>
                      <Col><p>Depth</p><p>{box.depth}</p></Col>
                      <Col><Button onClick={() => {
                        let newArr = [...boxes];
                        newArr.splice(index, 1);
                        updateBoxes(newArr);
                      }}>Delete</Button></Col>
                    </Row>
                  );
                })
              }
            </Col>
            <Col>
              <p>Number of items:</p>
              <Row>
                <Col><p>{items.length}</p></Col>
                <Col><Button onClick={() => updateItems(olditems => [...olditems, {weight: 1, height: 1, width: 1, depth: 1}])}>New item</Button></Col>
              </Row>
              {
                items.map((item, index) => {
                  return (
                    <ItemsInformations key={index} index={index} items={items} updateItems={updateItems} />
                  )
                })
              }
            </Col>
          </Row>
          
        </Container>
    </div>
  );
}

export default ItemPacking;
