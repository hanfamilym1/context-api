import React, { useContext } from 'react'
import { GameContext } from '../../context/gameContext.js'
import { useParams } from 'react-router-dom'

const Achievement = () => {
  const { state: { achievements }, addCounter } = useContext(GameContext);
  const { id } = useParams();
  const showAchievement = achievements
                              .filter(achievement => achievement.id === Number(id))
                              .map(({id, type, counter}) => (
                                <div key={id} className='container bg-slate-400 p-4 text-center rounded-xl'>
                                  <h1 className='text-3xl text-white'>{type}</h1>
                                  <p className='text-white'>{counter}</p>
                                  <button className='p-4 m-2 text-white bg-slate-500 hover:bg-slate-600 rounded-full' onClick={()=> addCounter(id)}>+ Add</button>
                                </div>
                              ))
  return (
    <div className='flex justify-center'>
      {showAchievement}
    </div>
  )
}

export default Achievement