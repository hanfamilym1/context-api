import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameContext } from '../../context/gameContext.js'
import Form from '../form/Form.js'

const Home = () => {
  const navigate = useNavigate();
  const { state: { achievements }, addCounter } = useContext(GameContext);

  const showAchievements = achievements.map( ({ id, type, counter}) => (
    <div key={id} className='container bg-slate-400 p-4 rounded-xl text-center'>
      <h3 className='text-3xl text-white'>{type}</h3>
      <p className='text-white text-2xl'>{counter}</p>
      <button className='p-4 m-2 text-white bg-slate-500 hover:bg-slate-600 rounded-full' onClick={() => addCounter(id)}>+ Add</button>
      <button className='p-4 m-2 text-white bg-slate-500 hover:bg-slate-600 rounded-full' onClick={() => navigate(`/achievement/${id}`)} >Go to achievement: {type}</button>
    </div>
  ));


  return (
    <div>
      <Form />
      <div className='grid grid-cols-3 gap-5 m-4'>
        {showAchievements}
      </div>
    </div>
  )
}

export default Home