// const API_ROOT = 'https://ancient-thicket-66765.herokuapp.com'
const API_ROOT = 'http://localhost:3000'


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

export default {
    API_ROOT:        API_ROOT,
    search:          addressSearch
}
