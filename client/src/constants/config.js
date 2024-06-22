//this file has all the API notification msgs
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data being loaded'
    },
    success: {
        title: 'Success',
        message: 'Data loaded successfully'
    },
    responseFailure: {
        title: 'Error',
        message: 'error occured while fetching response from server'
    },
    requestFailure: {
        title: 'Error',
        message: 'Error occured while parsing request data'
    },
    networkError:{
        title: 'Error',
        message: 'Unable to connect with the server.Please check internet connectivity'

    }
     
}


//API service calls here
export const SERVICE_URLS ={
    userSignup: { url:'/signup' , method: 'POST'},
    userLogin:{ url:'/login', method: 'POST'} , //this url is end point from routes
    uploadFile: {url: '/file/upload', method: 'POST'},
    createPost: {url:'create', method: 'POST'}
}