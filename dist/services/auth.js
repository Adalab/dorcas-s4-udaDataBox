import request from 'axios';

export function getToken(user, pwd) {
    var reports = {
        url: 'https://reds.urbandataanalytics.com/management/api/v1.0/login',
        data: { 'username': user, 'password': pwd },
        headers: { 'Content-Type': 'application/json' }
    };

    return new Promise(function (resolve, reject) {
        request.post(reports.url, reports.data, { headers: reports.headers }).then(function (res) {
            resolve(res);
        }).catch(function (e) {
            //resolve(e.response.data.error)
            resolve(e.response);
        });
    });
}