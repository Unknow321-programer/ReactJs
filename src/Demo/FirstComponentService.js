import axios from "axios";



const LoadData = () => {
    console.log('just called function');
    return axios.get('http://localhost:8080/cust/all-customer')

    .then((res) => {
        return res.data;
    }).then((data) => {
        return data;
    }).catch((err) => {
        console.log('error occured', err);
    });
}

export { LoadData }