import React, { useContext, useState } from 'react'
import { GameContext } from '../../context/gameContext.js'

const Form = () => {
  const [ achievementType, setAchievementType ] = useState('')
  const { state: { achievements }, createAchievement } = useContext(GameContext);

  const create = () => { 
    const obj = {
      id: achievements.length,
      type: achievementType,
      counter: 0
    }
    createAchievement(obj)
    setAchievementType('');
  }

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      create()
    }
  }

  return (
    <div className='container grid bg-slate-400 p-4 m-4 rounded-xl'>
      <label className="block">
        <span className="block text-3xl font-medium text-white">Achievement Name:</span>
        <input 
            type="text" 
            value={achievementType} 
            onChange={({ target: { value }}) => setAchievementType(value)} 
            onKeyPress={onEnter} 
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "/>
      </label>
      <button className='p-4 m-4 text-white bg-slate-500 hover:bg-slate-600 rounded-full' onClick={create}>Create Achievement</button>
    </div>
  )
}

export default Form