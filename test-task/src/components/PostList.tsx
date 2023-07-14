import React,{FC} from 'react';
import PostItem from './PostItem';
import useStore from '../store';


const PostList:FC = () => {
    const recipes = useStore((state:any)=>state.recipes)
    return (
        <div className='PostList'>
            
            
            {recipes.map((post:any, index:number)=>{
                if(index<15){
                    return <PostItem
                        num={index + 1}
                        post={post}
                        key={post.id}
                        hidden={index<5?false:true}
                    />
                }
            }
            )}
        </div>
    );
};

export default PostList;