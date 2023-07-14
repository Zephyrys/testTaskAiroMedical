import {create} from 'zustand';
import axios from 'axios';



const useStore = create((set)=>({
    recipes:[],
        removeRecipes:(recipeId:any)=>
            set((state:any)=>({
                recipes:state.recipes.filter((r:any)=>r.id!==recipeId)
            }))
        ,
        fetchData:():void=>{
            axios.get('https://api.punkapi.com/v2/beers?page=1').then((response)=> set({recipes: response.data})  );
        }
    }))

export default useStore
