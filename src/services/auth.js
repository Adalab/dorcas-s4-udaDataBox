import request from 'axios';

export function getToken(user, pwd) {
    const reportsGetToken = {
        url: 'https://reds.urbandataanalytics.com/management/api/v1.0/login',
        data: { 'username': user, 'password': pwd },
        headers: { 'Content-Type': 'application/json' }
    };

    return new Promise((resolve, reject) => {
        request.post(reportsGetToken.url, reportsGetToken.data, { headers: reportsGetToken.headers })
            .then(res => {
                resolve(res)
            })
            .catch(e => {
                //resolve(e.response.data.error)
                resolve(e.response)
            })
    })
}