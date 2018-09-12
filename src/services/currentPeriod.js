import request from 'axios';

export function getPeriod() {
    const reports = {
        url: 'https://reds.urbandataanalytics.com/reds/api/v1.0/period',
        headers: { 'Content-type': 'application/json', 'Authorization': 'Token ac7f1614-4d2e-48e7-90a1-1e33e32346ac' }
    }

    return new Promise((resolve, reject) => {
        request.get(reports.url, { headers: reports.headers })
            .then(res => {
                resolve(res)
            })
            .catch(e => {
                //resolve(e.response.data.error)
                resolve(e.response)
            })
    })
}