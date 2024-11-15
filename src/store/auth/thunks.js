import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./"

export const checkingAuthenticaction = ( email, password ) => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() );
  }
}

export const startGoogleSingIn = () => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() );

    const result = await signInWithGoogle();
    if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

    dispatch( login( result ) )
  }
}

export const startCreatingUserWithEmailPassword = ({ email , password, displayName }) => {
  return async ( dispatch ) => {

    dispatch( checkingCredentials() );

    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
    
    if ( !ok ) return dispatch( logout({ errorMessage }) );

    dispatch( login({ email, displayName, uid, photoURL }) );

  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async ( dispatch ) => {
    
    dispatch( checkingCredentials() );

    const { ok, uid, photoURL, errorMessage } = await loginWithEmailPassword({ email, password });
    
    if ( !ok ) return dispatch( logout({ errorMessage }) );

    dispatch( login({ email, uid, photoURL }) );
  }
}