'use strict';
var Culqi = require('../lib/culqi');

var culqi = new Culqi('INSERT_YOUR_PUBLIC_KEY','INSERT_YOUR_SECRET_KEY');

culqi.createToken(
    {
        "first_name": "Jorge",
        "last_name": "Rios",  
        "email": "j29.rios@gmail.com",
        "currency": "PEN",
        "card_number": 4444333322221111,  
        "cvv": 123,
        "expiration_month": 12,
        "expiration_year": 2020
    }
    ).then(function (res) {
        culqi.getCharge({
                "id" : "INSERT_YOUR_CHARGE_ID"
            }).then(function (res) {
                console.log(res.body);
            }).catch(function (err) {
                console.log('err', err);
            });
    }).catch(function (err) {
        console.log('err',err);
    });