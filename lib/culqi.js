'use strict';

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var baseUrl = 'https://api.culqi.com/v2';

var paths = {
	createToken: '/tokens',
	createCharge: '/charges',
	getCharge: '/charges/',
	createRefund: '/refunds',
	createPlan: '/plans',
	createSuscription: '/suscriptions'
};

var createPromise = function createPromise(url, method, headers, body, validateParams) {
	return new _bluebird2.default(function (resolve, reject) {
		if (validateParams && body) {
			var keys = Object.keys(body);
			for (var i in validateParams) {
				if (keys.indexOf(validateParams[i]) === -1) {
					return reject({
						body: {
							object: 'error',
							type: 'Invalid parameters: ' + validateParams[i],
							code: '422'
						}
					});
				}
			}
		}

		return (0, _request2.default)({ url: url, method: method, headers: headers, json: true, body: body }, function (error, response) {
			if (error) {
				return reject(error);
			}
			return resolve(response);
		});
	});
};

var Culqi = function () {
	function Culqi(codeCommerce, keyCommerce) {
		_classCallCheck(this, Culqi);

		this.codeCommerce = codeCommerce;
		this.keyCommerce = keyCommerce;
		this.baseUrl = baseUrl;
		this.headers = {
			Authorization: 'Bearer ' + this.keyCommerce,
			'Content-Type': 'application/json'
		};
	}

	_createClass(Culqi, [{
		key: 'createToken',
		value: function createToken(params) {
			var url = this.baseUrl + paths.createToken;
			var fields = ['first_name', 'last_name', 'email', 'currency', 'card_number', 'cvv', 'expiration_month', 'expiration_year'];
			var newHeader = Object.assign({}, this.headers, {
				Authorization: 'Bearer ' + this.codeCommerce
			});

			return createPromise(url, 'POST', newHeader, params, fields);
		}
	}, {
		key: 'createCharge',
		value: function createCharge(params) {
			var url = this.baseUrl + paths.createCharge;
			var fields = ['token_id', 'order_id', 'first_name', 'last_name', 'email', 'address', 'address_city', 'phone_number', 'country_code', 'currency_code', 'amount', 'installments', 'product_description', 'cvv'];

			return createPromise(url, 'POST', this.headers, params, fields);
		}
	}, {
		key: 'getCharge',
		value: function getCharge(params) {
			var url = this.baseUrl + paths.getCharge + '/' + (params || {}).id;
			var fields = ['id'];

			return createPromise(url, 'GET', this.headers, params, fields);
		}
	}, {
		key: 'createRefund',
		value: function createRefund(params) {
			var url = this.baseUrl + paths.createPlan;
			var fields = ['alias', 'name', 'amount', 'currency_code', 'interval', 'interval_count', 'trial_days', 'limit'];

			return createPromise(url, 'POST', this.headers, params, fields);
		}
	}, {
		key: 'createPlan',
		value: function createPlan(params) {
			var url = this.baseUrl + paths.createPlan;
			var fields = ['alias', 'name', 'amount', 'currency_code', 'interval', 'interval_count', 'trial_days', 'limit'];

			return createPromise(url, 'POST', this.headers, params, fields);
		}
	}, {
		key: 'createSuscription',
		value: function createSuscription(params) {
			var url = this.baseUrl + paths.createSuscription;
			var fields = ['plan_alias', 'token_id', 'first_name', 'last_name', 'email', 'address', 'address_city', 'country_code', 'phone_number'];

			return createPromise(url, 'POST', this.headers, params, fields);
		}
	}]);

	return Culqi;
}();

module.exports = Culqi;