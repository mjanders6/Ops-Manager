import axios from 'axios'

const User = {
    userLogin: input => axios.post('/login', input)
}

export default User