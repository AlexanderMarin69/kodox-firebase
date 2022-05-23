"use strict";

import axios from "axios";

export default {
    getRoles: () => {
        return axios.get('/api/' + baseControllerAddress + "GetRoles/")
            .then(result => {
                return result.data;
            }).catch(function (error) {
                alert(error);
            });
    },
   
    bulkRemoveUserGateMapping: (vm) => {
        return axios.put('/api/' + baseControllerAddress + "bulkRemoveUserGateMapping/", vm)
            .then(result => {
                return result.data;
            }).catch(function (error) {
                alert(error);
            });
    },
    resetInAppAuthenticationCode: (id) => {
        return axios.post('/api/' + baseControllerAddress + "resetInAppAuthenticationCode" + "/" + id)
            .then(result => {
                return result.data;
            });
    },
}