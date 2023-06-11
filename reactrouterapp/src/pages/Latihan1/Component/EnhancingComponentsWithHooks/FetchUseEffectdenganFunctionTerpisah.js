import React, { useState, useEffect }  from 'react'

export default function FetchUseEffectdenganFunctionTerpisah({ login }) {
    const [data, setData] = useState();

    async function requestGithubUser(githubLogin) {
        try {
          const response = await fetch(
            `https://api.github.com/users/${githubLogin}`
          );
          const userData = await response.json();
          console.log(userData);
          setData(userData);
        } catch (error) {
          console.error(error);
        }
      }

    // async function requestGithubUser(githubLogin) {
    //     try {
    //         fetch(`https://api.github.com/users/${githubLogin}`)
    //         .then(response => response.json())
    //         .then(setData);
    //         // .catch(console.error);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }

    useEffect(() => {
        if (!login) return;
        requestGithubUser(login);

        // if (!login) return;
        // fetch(`https://api.github.com/users/${login}`)
        //   .then(response => response.json())
        //   .then(setData)
        //   .catch(console.error);

      }, [login]);
    
      if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;
    
      return null;

   
    
}
