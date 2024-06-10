import React from 'react';

import axios from 'axios';
import {API_NOTIFICATION_MESSAGES, SERVICE_URLS} from '../constants/config';
const API_URL=' http://localhost:3000';
const axiosInstance=axios.create({
    baseURL:API_URL,
    timeout: 10000,
    headers: {
        "content-type": "application/json"
    }
})
axiosInstance.interceptors.request.use(
    function (config){
        return config; 
    },
    function (error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response){
        //global loader stopped here
        return processResponse(response);
    },
    function(error){
        //stop global leader here
        return Promise.reject(processError(error)) ;

    }
)
//if success ---return {isSuccess: true,data: Object} 
//if failure ---return {isFailure: true, status: string,msg: string, code: int}
const processResponse=(response) =>{
    if(response?.status ===200){
        return{ isSuccess: true, data: response.data}
    }else{
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }

    }
}
const processError = (error) => {
    if(error.response){ // request sent successfully but servers response falls out of range 
        console.log('Error in response: ',error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code: error.response.status
        }
    }else if(error.request){ //request sent but no response received
        console.log('Error in request: ',error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""  //no req sent to backend
        }


    }else{ //error on the frontend
        console.log('Error in network: ',error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkFailure,
            code: "" //no req sent to backend
        }

    }
}
const API= {};

for(const [key,value] of Object.entries(SERVICE_URLS)){
    API[key]=(body,showUploadProgress,showDownloadProgress) => // to show the progress loader bar
        axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            onUploadProgress: function (progressEvent){
                if(showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100 )/ progressEvent.total)
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress: function (progressEvent){
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100 )/ progressEvent.total)
                    showDownloadProgress(percentageCompleted);
                }
            }

        })

    }

export {API};