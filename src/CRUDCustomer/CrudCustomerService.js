import axios from 'axios';
const BASE_URL = 'http://localhost:8080/cust';

const loadCustomers = () => {
    return axios.get(BASE_URL + '/all-customer')
        .then(res => {
            return res.data;
        }).catch((err) => {
            console.log("Fetching Error", err);
        })
}


const createCustomer = (customerData) => {
    return axios.post(BASE_URL + '/create-customer',
        {
            name: customerData.name,
            age: parseInt(customerData.age),
            status: customerData.status
        })
        .then(res => {
            return res.data;
        }).catch((err) => {
            console.log("while creating account ", err);
        })
}

const updateCustomer = (customerData) => {
    return axios.put(BASE_URL + '/update-customer', {
        id: customerData.id,
        name: customerData.name,
        age: parseInt(customerData.age),
        status: customerData.status
    })
        .then((res) => {
            return res.data;
        }).catch((err) => {
            console.log("while updating data : ", err);
        })
}

const deleteCustomer = (id) => {
    return axios.delete(BASE_URL + '/delete-customer?id=' + id)
        .then((res) => {
            return res.data;
        }).catch((err) => {
            console.log("while deleting data : ", err);
        })
}

export { createCustomer, updateCustomer, deleteCustomer, loadCustomers }
