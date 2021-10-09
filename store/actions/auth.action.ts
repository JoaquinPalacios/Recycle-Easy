import { URL_AUTH_API, URL_LOGIN_API } from "../../constants/dataBase";
import { init, userDetails } from "../../db";

// import { userDetails } from "../../db";

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (name: string, email: string, password: string) => {
  return async (dispatch: any) => {
    const response = await fetch(URL_AUTH_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorID = errorResponse.error.message;

      let message = 'You could not sign up, please try again';
      if (errorID === 'EMAIL_EXISTS') message = 'This email is already register';

      throw new Error(message);
    }

    const data = await response.json();
    console.log('data', data);
    
    userDetails(name, email, password)
    .then(() => response)
    .catch(err => {
      console.log('Database failed to connect / auth.action');
      console.log(err.message);
    })
    console.log('data userDetails', response)
    console.log('userDetails after data in auth.action - name', userDetails(name, email, password))


    dispatch({
      type: SIGNUP,
      token: data.idToken,
      userId: data.localId,
    });
  }
}

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    const response = await fetch(URL_LOGIN_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorID = errorResponse.error.message;

      let message = 'Can not log in';
      if (errorID === 'EMAIL_NOT_FOUND') message = 'We do not have this email in our data base';

      throw new Error(message);
    }

    const data = await response.json();

    dispatch({
      type: LOGIN,
      token: data.isToken,
      userId: data.localId,
    });
  }
}