import request from 'axios';

export function getActive(token) {
    const reports = {
        url: `https://reds.urbandataanalytics.com/assets/api/v1.0/portfolio/426/asset`,
        data: { 'operation': '1', 'lat': 36.2794, 'lon': -6.08818, 'area': 120, 'simulated': true },
        headers: { 'Content-type': 'application/json', 'Authorization': `Token ${token}` }
    }

    return new Promise((resolve, reject) => {
        request.post(reports.url, reports.data, { headers: reports.headers })
            .then(res => {
                resolve(res)
                console.log(res)
            })
            .catch(e => {
                //resolve(e.response.data.error)
                resolve(e.response)
            })
    })
}
