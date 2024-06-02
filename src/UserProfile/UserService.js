import axios from "axios"

const BASE_URL = "http://localhost:8080/user";

const checkUser = (email, password) => {
    return axios.get(BASE_URL+'/fetch-user?email='+email+'&password='+password)
    .then((response) => response.data)
    .catch((error) => {
        console.log(error)
    })
}

const createUser = (user) => {
    return axios.post(BASE_URL+'/create-user',
        {
            name: user.name,
            email: user.email,
            password:  user.password,
            dob : user.dob,
        }
    ).then((response) => response.data)
    .catch((error) => {
        console.log(error);
    })
}
export {checkUser, createUser}