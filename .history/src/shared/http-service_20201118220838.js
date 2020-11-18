export const baseUrl = "https://lit-wave-93937.herokuapp.com/";
export const baseUrl = "http://127.0.0.1:8080/ozonics/";

export function refreshCookies() {
    return document.cookie.split(/;\s/g).reduce((acc = {}, val) => {
        acc[val.split("=")[0]] = val.split("=")[1];
        return acc;
    }, {});
}
export const get = (url, options = null) => {
    const response = new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open("GET", url);
        req.onreadystatechange = result => {
            if (req.readyState === 4) {
                if (req.status === 200) resolve(JSON.parse(req.response));
                else if (req.status === 401 || req.status === 403) {
                    handleReject(reject, "Unauthorised", { refresh: true });
                }
                else {
                    handleReject(reject, "Something went wrong. Code: " + req.status);
                }
            }
        };
        if (options) setRequestProperties(req, options);
        req.send();
    });
    return response;
}

export const post = (url, body, options = null) => {
    const response = new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open("POST", url);
        req.onreadystatechange = result => {
            if (req.readyState === 4) {
                console.log("stata:"+req.status);
                
                if (req.status === 200) resolve(JSON.parse(req.response));
                else if (req.status === 401 || req.status === 403) {
                    handleReject(reject, "Unauthorised", { refresh: true });
                }
                else {
                    handleReject(reject, "Something went wrong. Code: " + req.status);
                }
            }
        };
        if (options) setRequestProperties(req, options);
        req.send(JSON.stringify(body));
    });
    return response;
};
export const login = (username, password, callback, ...args) => {

    post(baseUrl + "admin/login", { username, password })
        .then(res => {
            console.log(args);
            callback(...args);
        })
        .catch(err => {
            alert(err);
        });
};

function setRequestProperties(req, { headers }) {
    if (headers) {
        req.headers = {
            ...headers
        };
    }
}
function handleReject(reject, msg, { refresh, redirect } = { refresh: false, redirect: false }) {
    reject(msg);
    if (refresh) {
        localStorage.clear();
        window.location.reload();
    } else if (redirect) {
        localStorage.clear();
        window.location.href = redirect;
    }
}