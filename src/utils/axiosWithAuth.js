import axios from 'axios';
// axios.defaults.xsrfHeaderName = "X-CSRFToken"
// axios.defaults.xsrfCookieName = 'csrftoken'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    console.log(token)

    return axios.create({
        baseURL: 'https://lambda-mud-test.herokuapp.com/',
        headers: {
            "Content-Type": 'application/json',
            // "Access-Control-Allow-Origin": "*",
            "Authorization": `Token ${token}`,
        },
    });
};