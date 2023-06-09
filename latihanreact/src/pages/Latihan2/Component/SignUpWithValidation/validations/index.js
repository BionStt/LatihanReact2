import React from 'react'
import * as zxcvbn from 'zxcvbn'

export  function minMaxLength(text, minLength, maxLength) {
    let result = !text || text.length < minLength
    if(maxLength)
    result = result || text.length < minLength
    return result
}


export  function validEmail(text) {
    const regex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )

 return !regex.test(text)
}



let registeredUsers = [
    'ravi@kiran.com',
    'mail@myblog.in',
    'contact@lucky.com'
]

export  function userExists(email) {
 return new Promise(resolve => {
        setTimeout(() => {
            if(registeredUsers.findIndex(u => u === email) !== -1) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        })
    })
}

export  function passwordStrength(text) {
    let result = zxcvbn(text);
    return result.score < 3;
}



export  function validateConfirmPassword( 
    password,
    confirmpassword,
    formErrors) 
    {
        formErrors = formErrors || {}
        if (password !== confirmpassword) {
            formErrors.confirmpassword =
              'Confirmed password is not matching with password';
            return false;
          } else {
            delete formErrors.confirmpassword;
            return true;
          }
}

