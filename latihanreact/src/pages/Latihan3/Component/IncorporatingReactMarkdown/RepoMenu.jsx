import React from 'react'
import {useIterator} from './hook.js'
import RepositoryReadme from './RepositoryReadme'

export default function RepoMenu({ repositories, login }) {
    const [{ name }, previous, next] = useIterator(repositories);

    return (
        <>
        <div style={{ display: "flex" }}>
          <button onClick={previous}>&lt; Previous</button>
          <p>{name}</p>
          <button onClick={next}>&gt; Next</button>
        </div>
        <RepositoryReadme login={login} repo={name} />
      </>
  )
}
