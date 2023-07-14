import React,{FC} from 'react';
import useStore from './store';
import {shallow} from 'zustand/shallow';
import styles from './App.css';
import {Routes,Route,Link,BrowserRouter} from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipePage from './components/RecipePage';

const App:FC=()=>{

    const fetchData=useStore((state:any)=>state.fetchData)
    const [recipes] = useStore((state:any)=>([state.recipes]),shallow)

    return(
        <BrowserRouter basename='/'>
            <div style={styles}>
            </div>
            <Routes>
                <Route path={'/'} element={ !recipes.length
                    ?   fetchData()
                    :   <HomePage/>}
                />
                <Route path={'/:id'} element={<RecipePage/>} />
            </Routes>
            
        </BrowserRouter>
    )
}

export default App;