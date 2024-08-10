import axios from 'axios';


export const authenticateLogin = async (data) => {
    try {
        return await axios.post('https://localhost:5000/api/login', data)
    } catch (error) {
        console.log('Error while calling login API: ', error);
    }
}

export const authenticateSignup = async (data) => {
    try {
        return await axios.post('https://localhost:5000/api/users,',data)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}

// export const authenticateSignup = async (signupData) => {
//     try {
//       const response = await fetch('http://localhost:5000/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(signupData),
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(`Error ${response.status}: ${errorData.message}`);
//       }
  
//       return await response.json();
//     } catch (error) {
//       console.error('Error during signup:', error);
//       return null;
//     }
//   };