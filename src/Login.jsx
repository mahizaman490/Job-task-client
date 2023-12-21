import  { useContext, useState } from 'react';
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';



const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setLoginError('');
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire('You logged in successfully!');
        e.target.reset();
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire('You logged in successfully!');
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <Typography variant="h3" color="primary" fontWeight="bold">
            Login now!
          </Typography>
        </div>
        <Card sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
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
                Login
              </Button>
            </form>
            <Typography variant="body2" color="text.primary" mt={2}>
              New here?{' '}
              <Link component={RouterLink} to="/register" variant="underline" color="text.primary">
                Register
              </Link>
            </Typography>
            <Button onClick={handleGoogleSignIn} fullWidth variant="outlined" color="primary" mt={2}>
              Google
            </Button>
          </CardContent>
        </Card>
        {loginError && <Typography color="error">{loginError}</Typography>}
      </div>
    </div>
  );
};

export default Login;
