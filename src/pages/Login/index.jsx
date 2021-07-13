import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import './Login.less'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
      display: 'flex',
      marginLeft: '60px',
      justifyContent: 'space-between'
    },
  },
}));
export const Login = () => {
  const classes = useStyles();
  return (
    <div className='login-00'>
      <Container maxWidth="sm" className='login-001'>
        <h2 className='login-004'>Welcome to login page! <br />
        <h3>Test</h3>
        please, verify yourself</h2>
        <form  className={classes.root} noValidate autoComplete="off">
            <TextField
              className='login-002'
              id="outlined-email-input"
              label="Email"
              type="email"
              autoComplete="current-email"
              variant="outlined"
              placeholder='type your email'
            />
            <TextField
              className='login-003'
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              placeholder='type your password'
            />
            <Button variant="contained" color="primary" className='login-005'>
              Login
            </Button>
          </form>
      </Container>
    </div>
  )
}