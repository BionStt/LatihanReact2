import React from 'react'
import Recipe from './Component/Recipe'
import './Menu.css'
export default function Menu({recipes=[]}) {
  return (
    <article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <div className='recipes'>
            {recipes.map((props,i)=>(
                <Recipe key={i} {...props} />
            ))}
        </div>
    </article>
  )
}
