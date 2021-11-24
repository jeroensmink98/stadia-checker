// HTTP Library
const axios = require('axios');

const mailController = require('../controllers/mail.controller')

const stadiaPremiereEditionUrl = "https://store.google.com/config/stadia_premiere_edition?hl=nl"
const stadiaControllerUrl = "https://store.google.com/product/stadia_controller?hl=nl"

const getStadiaPage = function(){
    return new Promise((resolve) => {
        axios({
            method: 'get',
            url: stadiaPremiereEditionUrl
        }).then((response) => {
            checkIfInStock(response).then((inStock) => {
                if(inStock){
                    mailController.sendEmail().then(
                        resolve(`Quick, go to <a href="${stadiaPremiereEditionUrl}" target="_blank">Stadia Premiere Edition</a>`)
                    )
                }else{
                    resolve('Out of stock atm.. 😥')
                }
            })
        });
    });
}

const checkIfInStock = (responseBody) => {
    return new Promise((resolve, reject) => {
        if(responseBody.data.includes("Niet op voorraad")){
            resolve(false);
        }else{
            resolve(true);
        } 
    });
}


module.exports = {
    checkIfInStock,
    getStadiaPage
}