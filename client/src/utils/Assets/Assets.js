import axios from 'axios'

const Assets = {
    getAssets: _ => axios.get('/assets'),
    getAsset: (id) => axios.get(`/asstes/${id}`),
    createAsset: _ => axios.post('/asstes')
}

export default Assets