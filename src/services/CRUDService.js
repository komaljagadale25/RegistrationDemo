import * as config from "../config/config.js"

export class CRUDService {

    addNewRecord = (encrypted_data, Param) => {
        return fetch(`${config.baseUrl}/Save` + Param, {
            method: "POST",
            body: encrypted_data,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.text())
            .then(res => {
                return res;
            })
            .catch(error => {
                window.location.href = "/invalidUrl";
            });
    };
}

export default CRUDService;