import React from 'react'
import { Link } from 'react-router-dom'

export function Card(props){

    return(
    <Link to={`/monster/${props.id}`} className='text-decoration-none'>
        <div className='py-3 card-main h-100' >
            <div className='text-white border-radius-16 card-height text-left h-100' style={{backgroundImage:`url(${props.imgSrc})`, backgroundPosition: 'center top'}}>
                <div className='bg-dark-card-75 border-radius-16 card-height h-100'>

                    <div className='card-header-custom pt-3'>

                    </div>

                    <div className='card-content p-4'>
                        <p className='monster-category p-0 m-0'>{props.type}  .  {props.size}</p>
                        <h2 className='monster-name'>{props.name}</h2>
                        <p className='monster-quote'>ND {props.cr}  .  {props.aligment}</p>
                    </div>


                </div>
            </div>
        </div>
    </Link>
    )
}