import React, { useEffect } from 'react'
import {useIterator} from './hook.js'

export default function RepoMenu({ repositories, onSelect = f => f }) {
    const [{ name }, previous, next] = useIterator(repositories);

    useEffect(() => {
      if (!name) return;
      onSelect(name);
    }, [name]);
  
    return (
        <div style={{ display: "flex" }}>
        <button onClick={previous}>&lt; Previous</button>
        <p>{name}</p>
        <button onClick={next}>&gt; Next</button>
      </div>
  )
}
