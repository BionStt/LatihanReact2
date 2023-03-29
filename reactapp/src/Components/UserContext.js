import React from 'react';

// const UserContext = React.createContext()  
const UserContext = React.createContext('Sutanto')  
  
 
const ThemeContext = React.createContext('theme')  

const UserProvider = UserContext.Provider  
  
const UserConsumer = UserContext.Consumer  
  

const ThemeProvider = ThemeContext.Provider    
const ThemeConsumer = ThemeContext.Consumer 

// export {UserProvider,UserConsumer}  

export {UserProvider,UserConsumer,ThemeConsumer,ThemeProvider}  
export default UserContext