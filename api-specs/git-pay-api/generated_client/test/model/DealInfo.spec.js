/**
 * GitPay API
 * Is developed as a part of gitpay.ru project by Microbo team 
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: alexandrdavydenko@yandex.ru
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GitPayApi);
  }
}(this, function(expect, GitPayApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GitPayApi.DealInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DealInfo', function() {
    it('should create an instance of DealInfo', function() {
      // uncomment below and update the code to test DealInfo
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be.a(GitPayApi.DealInfo);
    });

    it('should have the property platformDealId (base name: "PlatformDealId")', function() {
      // uncomment below and update the code to test the property platformDealId
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property dealStateId (base name: "DealStateId")', function() {
      // uncomment below and update the code to test the property dealStateId
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "CreateDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property updateDate (base name: "UpdateDate")', function() {
      // uncomment below and update the code to test the property updateDate
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property expireDate (base name: "ExpireDate")', function() {
      // uncomment below and update the code to test the property expireDate
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "Amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property currencyId (base name: "CurrencyId")', function() {
      // uncomment below and update the code to test the property currencyId
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property platformPayerId (base name: "PlatformPayerId")', function() {
      // uncomment below and update the code to test the property platformPayerId
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property payerPhoneNumber (base name: "PayerPhoneNumber")', function() {
      // uncomment below and update the code to test the property payerPhoneNumber
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property payerPaymentToolId (base name: "PayerPaymentToolId")', function() {
      // uncomment below and update the code to test the property payerPaymentToolId
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property platformBeneficiaryId (base name: "PlatformBeneficiaryId")', function() {
      // uncomment below and update the code to test the property platformBeneficiaryId
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property beneficiaryPaymentToolId (base name: "BeneficiaryPaymentToolId")', function() {
      // uncomment below and update the code to test the property beneficiaryPaymentToolId
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "ShortDescription")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property fullDescription (base name: "FullDescription")', function() {
      // uncomment below and update the code to test the property fullDescription
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property dealTypeId (base name: "DealTypeId")', function() {
      // uncomment below and update the code to test the property dealTypeId
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property lastErrorCode (base name: "LastErrorCode")', function() {
      // uncomment below and update the code to test the property lastErrorCode
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

    it('should have the property lastErrorMessage (base name: "LastErrorMessage")', function() {
      // uncomment below and update the code to test the property lastErrorMessage
      //var instane = new GitPayApi.DealInfo();
      //expect(instance).to.be();
    });

  });

}));