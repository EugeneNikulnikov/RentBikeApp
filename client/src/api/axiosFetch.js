import Axios from "axios";


export const getBikes = () => Axios({
    method: 'get',
    url: 'http://localhost:4001/bike/get',
});

export const CUDBikes = (URL, data) => Axios.post(URL, data);