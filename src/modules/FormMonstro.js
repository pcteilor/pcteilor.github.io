import React, { useState } from 'react'


export default function FormMonstro(){

    const [ data, setData ] = useState({
        'name':'',
        'type':'',
        'size': '',
        'cr': '',
        'aligment': '',
        'imgSrc': '',
        'desc': '',
        'D20': {
            'abilities': {
              'STR': '',
              'DEX': '',
              'CON': '',
              'INT': '',
              'WIS': '',
              'CHA': ''
            },
           'actions': {
              'normalActions': [
                 {
                    'actionId': '',
                    'actionName': '',
                    'actionDesc': ''
                 }
              ],
              'legendaryActions': [
                 {
                    'legActionId': '',
                    'legActionName': '',
                    'legActionDesc': ''
                 }
              ]
           },
           'languages': [],
           'skills': {
              'Iniciativa': '',
              'Escalar': ''
           },
           'monsterLevel': '',
           'senses': '',
           'armorClass': '',
           'hp': '',
           'mp': '',
           'speed': '',
           'xp': ''
        }

    })

    const handleChange = (e) => {
        const value = e.target.value
        setData({ ...data, [e.target.name]: value })
        console.log(data)
    }



    return (
        <div className='form-group'>

            <form>
                <div className='p-3'>

                    <h2 className='detail-titles'>Dados Básicos</h2>
                    <div>
                        <label className='p-2'>Nome</label>
                        <input className='form-control p-2' name='name' value={data.name} onChange={handleChange} type='text' placeholder='Nome' />
                    </div>
                    <div>
                        <label className='p-2'>Descrição</label>
                        <div>
                            <textarea name='desc' value={data.desc} onChange={handleChange} className='form-control p-2' rows='3'></textarea>
                        </div>
                    </div>
                    
                    <div>
                        <label>Link da Imagem</label>
                        <input className='form-control p-2' name='imgSrc' value={data.imgSrc} onChange={handleChange} type='text' placeholder='http://...' />
                    </div>

                    <h2 className='detail-titles'>Atributos</h2>
                    <div>
                        <label>FOR</label>
                        <input className='form-control p-2' name='STR' value={data.D20.STR} onChange={handleChange} type='text' placeholder='...' />
                    </div>


                </div>
            </form>
        </div>
    )
}