import React,{FC, useState, useEffect} from 'react'
import {NavLink,useParams} from 'react-router-dom'
import axios from 'axios'


const RecipePage:FC=()=> { 
    const [info, setInfo] = useState<any>([])
    const { id } = useParams();

    useEffect(() => {
        fetchByID()
    }, [])
    
        const fetchByID:() => Promise<void> = async () => {
            const result = await axios(`https://api.punkapi.com/v2/beers/${id}`);
            setInfo(result.data[0]);
        }
    console.log(info);
    return ( 
        <div className='BeerPage'>
            <div className='link-title'>
                <NavLink to='/' className='homeLink'>HOME PAGE</NavLink>
                <h1>Beer PAGE</h1>
            </div>
            <div className='info'>
                {/* image */}
                <img src={info.image_url} className='image' alt={`image ${info.image_url}`}/>

                {/* Main info */}
                <div className='main-info'>
                    {/* Name */}
                    <h2 className='beer-name'>{info.name}</h2>

                    {/* Tagline */}
                    <div className='tagline'>
                        <i>"{info.tagline}"</i>
                    </div>

                    {/* First brewed */}
                    <div className='first-brewed'>
                        <h3>First brewed</h3>
                        <p>{info.first_brewed}</p>
                    </div>

                    {/* Contributed by */}
                    <div>
                        <h3>Contributed by</h3>
                        <p>{info.contributed_by}</p>
                    </div>
                </div>

                {/* Desc */}
                <div className='desc'>
                    <h3>Description</h3>
                    <p>{info.description}</p>
                </div>
        <div>
 {/* ABV PH SRM*/}
 <div className='abv-ph-srm'>
                    {/* ABV */}
                    <div className='abv'>
                        <h3>ABV</h3>
                        <p>{info.abv}</p>
                    </div>

                    {/* PH */}
                    <div className='ph'>
                        <h3>PH</h3>
                        <p>{info.ph}</p>
                    </div>

                    {/* SRM */}
                    <div className='srm'>
                        <h3>SRM</h3>
                        <p>{info.srm}</p>
                    </div>
                </div>
                {/* Food pairing */}
                <div className='food-pairing'>
                    <h3>Food pairing</h3>
                    <ul>
                        {info.food_pairing?.map(
                            (item:any)=>
                            <li>
                                {item}
                            </li>
                        )}
                    </ul>
                </div>
                    
        </div>
               
                {/* Recipe ...i mean */}
                <div className='recipe'>
                    {/* Ingredients */}
                    <div className='ingredients'>
                        <h3>Ingredients</h3>
                        <ul><h4>Hops:</h4>
                            <li>
                                 <p> {info.ingredients?.hops[0].name} ( {info.ingredients?.hops[0].amount.value} {info.ingredients?.hops[0].amount.unit})</p> 
                            </li> <h5>Malts:</h5>
                                <ul className='malts-ul'> {
                                        info.ingredients?.malt.map(
                                            (item:any)=>
                                            <li>
                                                <p>{item.name} ({item.amount.value} {item.amount.unit})</p>
                                            </li>
                                        )
                                    } 
                                </ul>
                            <li>
                                <h4>Yeast: </h4>{ info.ingredients?.yeast}
                            </li>
                        </ul>
                    </div>

                    {/* Method */}
                    <div className='method'>
                        <h3>Method</h3>
                        <ul>
                            <li>
                                <p>Fermentation: ({info.method?.fermentation.temp.value} {info.method?.fermentation.temp.unit})</p> 
                            </li>
                                <ul>
                                    <h4>Mesh temp:</h4>
                                    {
                                        info.method?.mash_temp.map(
                                            (item:any)=>
                                            <li>
                                                <p>Duration {item.duration}</p>
                                                <p>Temp: {item.temp.value} {item.temp.unit}</p>
                                            </li>
                                        )
                                    } 
                                </ul>
                        </ul>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default RecipePage;