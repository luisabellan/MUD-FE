import axios from 'axios';
// axios.defaults.xsrfHeaderName = "X-CSRFToken"
// axios.defaults.xsrfCookieName = 'csrftoken'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    console.log(token)

    return axios.create({
        baseURL: 'https://build-week-mud.herokuapp.com/',
        headers: {
            "Content-Type": 'application/json',
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers": "*",

            "Authorization": `Token ${token}`,
        },
    });
};