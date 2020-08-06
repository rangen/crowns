const API_ROOT = 'https://pile-of-crowns.herokuapp.com'
// const API_ROOT = 'http://localhost:3000'


const addressSearch = (address) => {
    const config = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({address: address})
    }
    return fetch(`${API_ROOT}/addresses`, config)
}

const randomAddress = () => {
    const config = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        }
    }
    return fetch(`${API_ROOT}/random`, config)
}

export default {
    API_ROOT:        API_ROOT,
    search:          addressSearch,
    random:          randomAddress
}