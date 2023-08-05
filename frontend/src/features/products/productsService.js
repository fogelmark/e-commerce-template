import axios from 'axios'

const getAllAsync = async () => {
  
  try {
    const res = await axios.get('http://localhost:9999/api/products/')
    console.log(res.data);
    return res.data
  } catch (error) {
    console.log('Error when fetching data:', error);
  }

}
const productsService = {
  getAllAsync
}

export default productsService
