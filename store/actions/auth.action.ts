import { URL_AUTH_API } from "../../constants/dataBase";

export const SIGNUP = 'SIGNUP';
export const LOOKUP = 'LOOKUP';

export const signup = (name: string, email: string, password: string) => {
  return async (dispatch: any) => {
    const response = await fetch(URL_AUTH_API, {
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

    const data = await response.json();

    const updateResponse = await fetch(URL_AUTH_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idToken: data.idToken,
        displayName: name,
      }),
    });

    const userData = await updateResponse.json();

    dispatch({
      type: SIGNUP,
      token: data.idToken,
      userId: data.localId,
    });
  }
}

export const lookupUser = () => {
  return async (dispatch: any) => {
    const response = await fetch(URL_AUTH_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idToken: token,
      }),
    });
    const data = await response.json();

    dispatch({
      type: LOOKUP,
      data,
    });
  }
}