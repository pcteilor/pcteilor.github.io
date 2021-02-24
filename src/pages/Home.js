import React from 'react'

import { Content, Row, Col } from '../modules/Grid'
import { Card } from '../modules/Card'
import monsters from '../monstersdata.json'



//const strmonsters =JSON.stringify(monsters)
const cardRender = monsters.map(
    (monster)=>
    <Col col='col-md-3' key={monster.id}>
      <Card 
        id={monster.id}
        key={monster.id}
        name={monster.name} 
        type={monster.type} 
        size={monster.size} 
        cr={monster.cr} 
        aligment={monster.aligment} 
        imgSrc={monster.imgSrc} 
      /> 
    </Col>
  )

function Home(props){
  document.title = `Home | Monster Compendium `;
    return (
        
        <div>
          
          <div style={{height: 20}}></div>
    
          <Content container='container'>
            <Row>
    
              {cardRender}
    
            </Row>
          </Content>
        </div>
      );
}

export default Home ;