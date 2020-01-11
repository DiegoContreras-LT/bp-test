import axios from 'axios'
import { loadStorage } from '../tools/storage'

export const axiosInstance = async (url = null) => {
  
  const Authorization = await loadStorage('token'),
   Instance = axios.create({
    headers: {
      'baseURL': `${process.env.REACT_APP_BASE_URL}`,
      'content-type': 'application/json',
      'Authorization': Authorization && `Bearer ${Authorization}`
    }
  })

  if(url){
    Instance.defaults.baseURL = url
  }

return Instance;
}
