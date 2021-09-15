import { URL_AUTH_API } from "../../constants/dataBase";

export const SIGNUP = 'SIGNUP';

export const signup = (email: string, password: string) => {
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

    dispatch({
      type: SIGNUP,
      token: data.idToken,
      userId: data.localId,
    });
  }
}