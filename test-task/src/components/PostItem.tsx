import React, { useState} from 'react';
import MyButton from './UI/MyButton';
import useStore from '../store';
import {NavLink} from 'react-router-dom'
    interface PostItemProps{
        num:number;
        post:any;
        key:number;
        hidden?:boolean;
    }

    const PostItem=({num,post,hidden}:PostItemProps)=> {
        const [choose,setChoose]=useState(false);
        const removeRecipes=useStore((state:any)=>state.removeRecipes)
        const toggleClass=():void=>{
            setChoose(!choose)
        }

        return (
        <div onContextMenu={(e)=>{e.preventDefault();toggleClass();}} className={(hidden?'hidden':'') +' PostItem '+(choose?'Choose ':'')} > 
            <NavLink to={`/${post.id}`} >
                <img src={post.image_url} className='icon' alt={`${post.image_url} icon`}/>
                <div>
                    <strong>{num}. {post.name}</strong>
                    <p>{post.contributed_by}</p>
                    <p>{post.tagline}  {post.first_brewed}</p>
                </div>
            </NavLink> 
            <MyButton choose={choose} text='Remove recipe' onclick={() => removeRecipes(post.id)} classname={'removeBtn'}/>
        </div>
            );
    }


    export default PostItem;