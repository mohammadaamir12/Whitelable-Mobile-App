import jwt_decode from 'jwt-decode';



const isTokenExpired = (token) => {
  console.log('token',token);
  if (!token) {
    return true; 
  }

  try {
    
    const decodedToken = jwt.decode(token);
    console.log('token',decodedToken);
    const expirationTime = decodedToken.exp * 1000; 
    
    return Date.now() > expirationTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    
  }
};

export { isTokenExpired };
