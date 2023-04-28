# Context API - Boilerplate

React Documentation on [context](https://react.dev/learn/passing-data-deeply-with-context)

The idea of this repo is to showcase what Context can do.  That being said, with context the best way to utilize it is to sync it with a DB so that the data persists throughout the whole application with a refresh.

Briefly, context allows data to pass through the tree without having to pass props manually at every level.  Meaning that you can utilize context so that any page could grab the information without having to place it in the parent and pass it down multiple levels.  It can also work via siblings, aunts/uncles, etc.

## Initializing the project

1. Either clone or fork this repo
2. Ensure that you have node 16.17+ and npm 8.15+ (you can utilize nvm to notate which node version you want to use)
3. ```npm i```
4. ```npm start```
   
## Structure

Under ```context```, you can create a context file: usually camelCase with {name}Context.js.  

Within that file, you will need a few things:

1. Initialize context object 
   ```
    const GameContext = createContext();
   ```
2. Create the provider 
   ```
    const GameProvider = ({ children }) => { 
        return ( 
            <GameContext.Provider value={{ whatever you need in here }}>
                {children}
            </GameContext.Provider>)
    }
   ```
3. Export both the provider and context
   ```
    https://reactjs.org/docs/context.htmlexport { GameProvider, GameContext };
   ```

## Utilizing Context

Once you exported the specific items.  You'll need to locate the spot where you'd want to utilize context.  For example, if you have an authContext and want to use it throughout your whole application, you can wrap your provider in App.js.

```
import { GameProvider } from './context/gameContext.js'

function App() {
  return (
    <GameProvider>
     <div>
        Hello World
     </div>
    </GameProvider>
  );
}
```

After you wrapped your app with the provider, then you can go to a specific file and grab the context.

```
import { GameContext } from '../../context/gameContext.js'
const { state: { achievements }, addCounter } = useContext(GameContext);
```

