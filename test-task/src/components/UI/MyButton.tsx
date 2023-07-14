import React, { FC } from 'react'

interface MyButtonProps{
    choose:boolean;
    text:string;
    onclick?:any;
    classname:string;
    
}

const MyButton:FC<MyButtonProps>=({choose, text,onclick,classname })=> {
    return ( 
        <button className={(!choose?'hiddenBtn':classname)} onClick={onclick} >
            {text}
        </button>
        

    );
}

export default MyButton;