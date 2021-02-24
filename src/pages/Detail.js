import React, { useState } from 'react'
import { Content, Row, Col } from '../modules/Grid'
import monsters from '../monstersdata.json'
import { useHistory } from 'react-router-dom'
import texture from '../img/texture.jpg'


const modifiers = (attribute) => Math.floor((attribute/2)+(-5));
const sign = (num) => num >= 0 ? '+' : '';

export const BackButton = () => {
    let history = useHistory();
    return (
        <>
          <button className='btn btn-main' onClick={() => history.goBack()}> <i className='fas fa-arrow-left'></i>&nbsp;&nbsp;&nbsp; Voltar</button>
        </>
    );
};

export default function Detail({match, props}) {
    
    const [ monster ] = useState(monsters[`${match.params.id - 1}`]);

    document.title = `${monster.name} | Monster Compendium `;
    

    return (
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
                            <div style={{backgroundImage:`url(${monster.imgSrc})`, backgroundPosition: 'center top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className='detail-header'>
                                
                            </div>
                            <div style={{backgroundImage:`url(${texture})`, backgroundPosition: 'center top', backgroundRepeat: 'repeat-x'}} className='p-5'>
                                <h1 className='detail-titles'>
                                    {monster.name}
                                </h1>
                                <h3 className='detail-titles'>
                                    Nível {monster.D20.monsterLevel}&nbsp;&nbsp;&nbsp; .&nbsp;&nbsp;&nbsp; {monster.type}&nbsp;&nbsp;&nbsp; .&nbsp;&nbsp;&nbsp; {monster.aligment}&nbsp;&nbsp;&nbsp; .&nbsp;&nbsp;&nbsp; ND {monster.cr}&nbsp;&nbsp;&nbsp; .&nbsp;&nbsp;&nbsp; Tamanho {monster.size}
                                </h3>
                                <p className='detail-text py-5'>
                                    {monster.desc}
                                </p>

                                 {/* Atributos Básicos (abilities) */}
                                
                                <Row row='gx-5 p-2'>
                                    <Col col='col-md attributes text-center p-3'>
                                        <p>FOR</p>
                                        <h2>{monster.D20.abilities.STR}</h2>
                                        <p>({sign(modifiers(monster.D20.abilities.STR)) + modifiers(monster.D20.abilities.STR)})</p>
                                    </Col>
                                    <Col col='col-md attributes text-center p-3'>
                                        <p>DES</p>
                                        <h2>{monster.D20.abilities.DEX}</h2>
                                        <p>({sign(modifiers(monster.D20.abilities.DEX)) + modifiers(monster.D20.abilities.DEX)})</p>
                                    </Col>
                                    <Col col='col-md attributes text-center p-3'>
                                        <p>RES</p>
                                        <h2>{monster.D20.abilities.CON}</h2>
                                        <p>({sign(modifiers(monster.D20.abilities.CON)) + modifiers(monster.D20.abilities.CON)})</p>
                                    </Col>
                                    <Col col='col-md attributes text-center p-3'>
                                        <p>INT</p>
                                        <h2>{monster.D20.abilities.INT}</h2>
                                        <p>({sign(modifiers(monster.D20.abilities.INT)) + modifiers(monster.D20.abilities.INT)})</p>
                                    </Col>
                                    <Col col='col-md attributes text-center p-3'>
                                        <p>SAB</p>
                                        <h2>{monster.D20.abilities.WIS}</h2>
                                        <p>({sign(modifiers(monster.D20.abilities.WIS)) + modifiers(monster.D20.abilities.WIS)})</p>
                                    </Col>
                                    <Col col='col-md attributes text-center p-3'>
                                        <p>CAR</p>
                                        <h2>{monster.D20.abilities.CHA}</h2>
                                        <p>({sign(modifiers(monster.D20.abilities.CHA)) + modifiers(monster.D20.abilities.CHA)})</p>
                                    </Col>
                                </Row>

                                {/* HP, MP e outros*/}

                                <Row>
                                    <Col col='col-md text-center p-2'>
                                        <Row row='d-flex align-items-center h-100'>
                                            <Col col='col'><p>Pontos de Vida</p><h2 className='detail-titles'>{monster.D20.hp}</h2></Col>
                                            <Col col='col'><p>Pontos de Magia</p><h2 className='detail-titles'>{monster.D20.mp}</h2></Col>
                                        </Row>
                                    </Col>
                                    <Col col='col-md p-2'>
                                        <p><span className='strong dest'>Defesa:</span> {monster.D20.armorClass}</p>
                                        <p><span className='strong dest'>Deslocamento:</span> {monster.D20.speed}</p>
                                        <p><span className='strong dest'>Percepção:</span> {monster.D20.senses}</p>
                                        <p><span className='strong dest'>Exp:</span> {monster.D20.xp}</p>
                                        <p><span className='strong dest'>Percepção:</span> {monster.D20.senses}</p>
                                        <p><span className='strong dest'>Idiomas:</span> {monster.D20.languages.join(', ')}</p>
                                        <p><span className='strong dest'>Perícias:</span> {
                                        Object.entries(monster.D20.skills).map(
                                            ([key, value]) => { return key + ' ' + value + '; ' })}</p>
                                    </Col>
                                </Row>
                                
                                {/* Ações */}
                                <div className='brd-bottom'>
                                    <h2 className='detail-titles'>Ações </h2>
                                </div>

                                <div className='p-4'>
                                    
                                    <ul>
                                            {
                                            monster.D20.actions.normalActions.map( function a(i) {
                                                return (
                                                    <li key={i.actionId}><span className='strong dest'>{i.actionName}:</span> {i.actionDesc}</li>
                                                )
                                            }
                                            )}
                                    </ul>
                                    
                                </div>
                                {/* Ações Lendárias */}
                                <div className='brd-bottom'>
                                    <h2 className='detail-titles'>Ações Lendárias</h2>
                                </div>

                                <div className='p-4'>
                                    
                                    <ul>
                                            {
                                            monster.D20.actions.legendaryActions.map( function a(i) {
                                                return (
                                                    <li key={i.legActionId}><span className='strong dest'>{i.legActionName}:</span> {i.legActionDesc}</li>
                                                )
                                            }
                                            )}
                                    </ul>
                                    
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Content>
        </div>
    )
}