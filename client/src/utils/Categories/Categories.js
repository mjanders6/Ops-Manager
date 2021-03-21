import axios from 'axios'

const Categories = {
    getCategories: _ => axios.get('/category'),
    getCategory: name => axios.get(`/category${name}`)
}

export default Categories