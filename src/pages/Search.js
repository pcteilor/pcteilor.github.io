import { React } from 'react'

import { Content, Row, Col } from '../modules/Grid'
import { Card } from '../modules/Card'
import monsters from '../monstersdata.json'



function Search(props){
  document.title = `Busca | Monster Compendium `;
  
  const searchTerm = JSON.parse(localStorage.getItem('busca'))
  
  const results = monsters.filter(value =>
    value.name.toLowerCase().includes(searchTerm.toLowerCase()) || value.type.toLowerCase().includes(searchTerm.toLowerCase()) || value.size.toLowerCase().includes(searchTerm.toLowerCase())
 );


   const cardRender = results.map(
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

    return (
        
        <div>
          
          <div style={{height: 20}}></div>
    
          <Content container='container'>
            <Row>
    
              <p className='monster-quote'><span className='monster-name' style={{fontSize:'1.4rem'}}>{results.length}</span> resultados por<span className='monster-name' style={{fontSize:'1.4rem'}}> {searchTerm} </span></p>
              
              {cardRender}

    
            </Row>
          </Content>
        </div>
      );
}

export default Search ;