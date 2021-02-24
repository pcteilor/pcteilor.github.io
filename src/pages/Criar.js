import React from  'react'
import { Content, Col, Row } from '../modules/Grid'
import { BackButton } from './Detail'
import texture from '../img/texture.jpg'
import FormMonstro from '../modules/FormMonstro'



export default function Criar(){
    document.title = `Criar monstro | Monster Compendium `;

    return(
        <div>
            <Content container='container'>
                <Row row='justify-content-center'>
                    <Col col='col-8 py-3'>
                        <BackButton></BackButton>
                    </Col>
                </Row>
                <Row row='justify-content-center'>
                    <Col col='col-md-8'>
                        <div className='detail-bg'>
                            <div style={{backgroundImage:`url(${texture})`, backgroundPosition: 'center top', backgroundRepeat: 'repeat-x'}} className='p-5 border-radius-32'>

                                <h2 className='detail-titles'>Criar monstro  </h2>
                                
                                <FormMonstro />

                            </div>
                        </div>
                    </Col>
                </Row>
            </Content>
        </div>
    )
}
