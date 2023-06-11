import React from 'react'
import Fetch  from './Fetch'
import { UserRepositories } from './UserRepositories'


function GitHubUser({ login }) {
    return (
      <Fetch
        uri={`https://api.github.com/users/${login}`}
        renderSuccess={UserDetails}
      />
    );
  }
  
  function UserDetails({ data }) {
    return (
      <div className="githubUser">
        <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
        <div>
          <h1>{data.login}</h1>
          {data.name && <p>{data.name}</p>}
          {data.location && <p>{data.location}</p>}
        </div>
        <p>disini ada repo Menu dgn button dengan UseIterator custom hook</p>
        <UserRepositories
          login={data.login}
          onSelect={(repoName) => console.log(`${repoName} selected`)}
        />
      </div>
    );
  }

  
export default function FetchOutput() {
  return <GitHubUser login="bionstt" />
}
