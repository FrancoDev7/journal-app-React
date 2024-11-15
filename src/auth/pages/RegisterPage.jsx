import { useState } from "react"
import { useDispatch } from "react-redux"
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { startCreatingUserWithEmailPassword } from "../../store/auth"
import { useSelector } from "react-redux"
import { useMemo } from "react"


const formData = {
  displayName: '',
  email: '',
  password: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El coreo debe contener un @'],
  password: [ (value) => value.length >= 6, 'La contraseña debe tener màs de 6 caracteres'],
  displayName: [ (value) => value.length >= 1, 'El nombre es Obligatorio']
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useSelector( state => state.auth )
  const isCheckingAuthentication = useMemo(() => status === 'checking', [ status ])

  const { 
    displayName, email, password, onInputChange, formState, 
    isFormValid, emailValid, passwordValid, displayNameValid, 
  } = useForm( formData, formValidations );

  
  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true)

    if ( !isFormValid ) return;
    dispatch( startCreatingUserWithEmailPassword( formState ) )
  }

  return (
    <AuthLayout title='Crear Cuenta'>
      <form onSubmit={ onSubmit }>
        <Grid container>
          
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Nombre Completo" 
              type="text" 
              placeholder='Jhon Doe' 
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Correo" 
              type="email" 
              placeholder='correo@google.com' 
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña" 
              type="password" 
              placeholder='Contraseña' 
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
            />
          </Grid>
          
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid 
              item 
              xs={ 12 }
              display={ !!errorMessage ? '' : 'none' } 
            >
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={ 12 } >
              <Button  
                disabled={ isCheckingAuthentication }
                type="submit" 
                variant='contained' 
                fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={ RouterLink } color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
