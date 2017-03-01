<img src="https://developers.culqi.com/assets/images/logo.svg?v=dcb8982825" alt="culqi_logo">

# node-culqi

**Culqi API 2.0 wrapper for Node.js, featuring:**

- [All Culqi API v2-Beta methods](https://beta.culqi.com/#/?id=tokens)
- Promises
- ECMAS6

*For more information about Culqi API 2-Beta, read https://beta.culqi.com/#/*

## Example Usage

#### Installation

```bash
npm install culqi2 --save
```

#### Initialize
```javascript
const Culqi = require('culqi2');

const culqi = new Culqi('INSERT_YOUR_PUBLIC_KEY', 'INSERT_YOUR_SECRET_KEY');
```

#### Get a specific Charge
```javascript
'use strict';
var Culqi = require('culqi2');

var culqi = new Culqi('INSERT_YOUR_PUBLIC_KEY', 'INSERT_YOUR_SECRET_KEY');

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
                "id" : "INSERT_A_SPECIFIC_CHARGE_ID"
            }).then(function (res) {
                console.log(res.body);
            }).catch(function (err) {
                console.log('err', err);
            });
    }).catch(function (err) {
        console.log('err',err);
    });
```
*For more examples, see https://github.com/jotarios/culqi-nodejs-wrapper/tree/master/examples*

## API

You must require culqi2 and create an instance

```javascript
// Constructor
const Culqi = require('culqi2');

const culqi = new Culqi('INSERT_YOUR_PUBLIC_KEY', 'INSERT_YOUR_SECRET_KEY');

// Functions
culqi.getToken(params) // Generate a temporal Token, it's represent a credit or debit card

culqi.createCharge(params) // Generate a new charge

culqi.getCharge(params) // Gets an specific charge information

culqi.createRefund(params) // Generate a new refund

culqi.createPlan(params) // Generate a new plan

culqi.createSuscription(params) // Generate a new suscription to an specific plan
```

## Credits

Inspired by Gi Wah <https://github.com/giwiro>


## LICENSE

The MIT License (MIT) - author: Jorge Rios Agurto (@jotarios_) <j29.rios@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


