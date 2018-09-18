import request from 'axios';

function getIndicator(token, currentPeriod) {
    const reports = {
        url: `https://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=o_pm,o_pu_qq&operations=1&geo_json={%22type%22:%22FeatureCollection%22,%22features%22:[{%22type%22:%22Feature%22,%22geometry%22:{%22type%22:%22Point%22,%22coordinates%22:[-6.08818,36.2794]},%22properties%22:{%22admin_levels%22:[3,5]}}]}&period_codes=${currentPeriod}`,
        headers: { 'Content-type': 'application/json', 'Authorization': `Token ${token}` }
    }

    return new Promise((resolve, reject) => {
        request.get(reports.url, { headers: reports.headers })
            .then(res => resolve(res))
            .catch(e => {
                //resolve(e.response.data.error)
                resolve(e.response)
            })
    })
}

export function getActive(token, portfolioId, data) {
    const reports = {
        url: `https://reds.urbandataanalytics.com/assets/api/v1.0/portfolio/${portfolioId}/asset`,
        headers: { 'Content-type': 'application/json', 'Authorization': `Token ${token}` }
    }

    return new Promise((resolve, reject) => {
        request.post(reports.url, data, { headers: reports.headers })
            .then(res => {
                resolve(res)
            })
            .catch(e => {
                resolve(e.response)
            })
    })
}

export function getPeriod(token) {
    const reports = {
        url: 'https://reds.urbandataanalytics.com/reds/api/v1.0/period',
        headers: { 'Content-type': 'application/json', 'Authorization': `Token ${token}` }
    }

    return new Promise((resolve, reject) => {
        request.get(reports.url, { headers: reports.headers })
            .then(resp => {
                getIndicator(token, resp.data.period.code)
                    .then(res => resolve(res))
            })
            .catch(e => {
                //resolve(e.response.data.error)
                resolve(e.response)
            })
    })
}