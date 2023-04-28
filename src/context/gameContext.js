import React, { createContext, useReducer } from 'react';

// https://reactjs.org/docs/context.html

// This initiates context object.   
const GameContext = createContext();

const GameProvider = ({ children }) => {
    // create the initial state
    const initialState = {
        achievements: []
    }

    function reducer (state, action) {
        // create pure statements where the different types return with the given payload
        switch (action.type) {
            case 'ADD': 
                return { ...state, achievements: action.payload };
            case 'CREATE':
                return { ...state, achievements: action.payload };
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    // Items that dispatch the reducer that we created
    const addCounter = (id) => {
        const updatedAchievements = state.achievements.map(ach => {
          if (ach.id === id) ach.counter+=1;
          return ach;
        });
        dispatch({type: 'ADD', payload: updatedAchievements})
      }
    
    const createAchievement = (achievement) => {
        const newAchievements = [...state.achievements, achievement]
        dispatch({ type: 'CREATE', payload: newAchievements })
    }

    return (
        <GameContext.Provider value={{ state, dispatch, addCounter, createAchievement}} >
            {children}
        </GameContext.Provider>
    )
}

// This is if a component isn't necessarily wrapped in the provider anyways.
const withGame = (Child) => (props) => (
    <GameContext.Consumer>
        {(context) => <Child {...props} {...context} />}
    </GameContext.Consumer>
)

export { GameProvider, withGame, GameContext };