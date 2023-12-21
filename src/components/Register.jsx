// import React, { useContext, useState } from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';
// import { AuthContext } from '../providers/AuthProvider';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';


const Register = () => {
//   const { createUser } = useContext(AuthContext);
//   const [registerError, setRegisterError] = useState('');
//   const [registerSuccess, setRegisterSuccess] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // setRegisterError('');
    // setRegisterSuccess('');

    // if (password.length < 6) {
    //   setRegisterError('Password should be at least 6 characters or longer');
    //   return;
    // } else if (!/[A-Z]/.test(password)) {
    //   setRegisterError('Your password should have at least one uppercase character');
    //   return;
    // } else if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\]/.test(password)) {
    //   setRegisterError('Your password should have a special character');
    //   return;
    // }

    // createUser(email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //     setRegisterSuccess('Your registration was successful!');
    //     e.target.reset();
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     setRegisterError(error.message);
    //   });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <Typography variant="h3" color="primary" fontWeight="bold">
            Register now!
          </Typography>
        </div>
        <Card sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                required
                margin="normal"
              />
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                required
                margin="normal"
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                required
                margin="normal"
              />
              <Link component={RouterLink} to="#" variant="body2" color="primary">
                Forgot password?
              </Link>
              <Button type="submit" fullWidth variant="contained" color="primary">
                Register
              </Button>
            </form>
            <Typography variant="body2" color="text.primary" mt={2}>
              Already have an account?{' '}
              <Link component={RouterLink} to="/login" variant="underline" color="text.primary">
                Login
              </Link>
            </Typography>
          </CardContent>
        </Card>
        {/* {registerError && <Typography color="error">{registerError}</Typography>}
        {registerSuccess && <Typography>{registerSuccess}</Typography>} */}
      </div>
    </div>
  );
};

export default Register;
