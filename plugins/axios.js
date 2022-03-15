import Cookies from "js-cookie";

export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        common: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
      },
      baseURL: 'http://localhost:3001/',
      
    })
  
    // Set baseURL to something different
  
    // Inject to context as $api
    inject('api', api)
  }
  