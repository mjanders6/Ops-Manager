import axios from 'axios'

const Categories = {
    getCategories: _ => axios.get('/category')
}

export default Categories