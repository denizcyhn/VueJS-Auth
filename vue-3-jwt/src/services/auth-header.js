export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken }; 
      // node.js express için
    } else {
      return {};
    }
  }
  