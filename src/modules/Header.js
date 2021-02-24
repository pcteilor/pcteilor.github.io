import { React, useState } from 'react'
import { Content, Row, Col } from '../modules/Grid'
import logo from '../img/logo.png'
import { Link, useHistory } from 'react-router-dom'



export default function Header(props){


    const [searchTerm, setSearchTerm] = useState('');
    let history = useHistory()
    
    const handleChange = (e) => setSearchTerm(e.target.value);

    const handleKeyPress = e => {
        if (e.key === 'Enter' && searchTerm !== ''){
            localStorage.setItem('busca', JSON.stringify(searchTerm))
            return (
                history.push({pathname:'/search'} )
            )
        } 
    } 

    
    return(
        <Content container='container-fluid bg-support'>
            <Content container='container'>
                <Row>
                    <Col col='col-2 py-3 align-self-center'>
                        <Link to='/'>
                            <img src={logo} alt='Monster Compendium' className='img-fluid px-3' />
                        </Link>
                    </Col>
                    <Col col='col-8 py-3 align-self-center'>
                        <div className='search-header py-3'>
                            <span className='px-4'><i className='fas fa-search'></i></span>
                            <input 
                            className='input-searchbar h-100' 
                            id='searchbar' 
                            type='text' 
                            placeholder='Pesquise aqui...' 
                            value={searchTerm}
                            onKeyPress={handleKeyPress}
                            onChange={handleChange}
                            
                            
                            />
                        </div>
                    </Col>
                    <Col col='col-2 py-3 align-self-center'>
                        <Link to='/criar' className=''>
                            <button className='btn btn-support'>
                                
                                    <i class='fas fa-plus-circle'></i> Criar monstro

                            </button>
                        </Link>
                    </Col>
                </Row>
            </Content>
        </Content>
    )
}
