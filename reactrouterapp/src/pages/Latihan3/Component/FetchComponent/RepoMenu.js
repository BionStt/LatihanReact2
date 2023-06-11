import React, { useEffect } from 'react'
import { useIterator } from './hooks'


export default function RepoMenu({ repositories, onSelect }) {
    const [{ name }, previous, next] = useIterator(repositories);

    useEffect(() => {
      if (!name) return;
      onSelect(name);
    }, [name]);
  
    return (
        <div>
        <button onClick={previous}>&lt; Previous</button>
        <p>{name}</p>
        <button onClick={next}>&gt; Next</button>
      </div>
  )
}
