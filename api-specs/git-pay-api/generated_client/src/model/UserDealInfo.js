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

import ApiClient from '../ApiClient';
import DealState from './DealState';

/**
 * The UserDealInfo model module.
 * @module model/UserDealInfo
 * @version 0.0.1
 */
class UserDealInfo {
    /**
     * Constructs a new <code>UserDealInfo</code>.
     * @alias module:model/UserDealInfo
     */
    constructor() { 
        
        UserDealInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserDealInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserDealInfo} obj Optional instance to populate.
     * @return {module:model/UserDealInfo} The populated <code>UserDealInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserDealInfo();

            if (data.hasOwnProperty('PlatformDealId')) {
                obj['PlatformDealId'] = ApiClient.convertToType(data['PlatformDealId'], 'String');
            }
            if (data.hasOwnProperty('DealStateId')) {
                obj['DealStateId'] = DealState.constructFromObject(data['DealStateId']);
            }
            if (data.hasOwnProperty('CreateDate')) {
                obj['CreateDate'] = ApiClient.convertToType(data['CreateDate'], 'Date');
            }
            if (data.hasOwnProperty('UpdateDate')) {
                obj['UpdateDate'] = ApiClient.convertToType(data['UpdateDate'], 'Date');
            }
            if (data.hasOwnProperty('ExpireDate')) {
                obj['ExpireDate'] = ApiClient.convertToType(data['ExpireDate'], 'Date');
            }
            if (data.hasOwnProperty('Amount')) {
                obj['Amount'] = ApiClient.convertToType(data['Amount'], 'Number');
            }
            if (data.hasOwnProperty('CurrencyId')) {
                obj['CurrencyId'] = ApiClient.convertToType(data['CurrencyId'], 'Number');
            }
            if (data.hasOwnProperty('PlatformPayerUserId')) {
                obj['PlatformPayerUserId'] = ApiClient.convertToType(data['PlatformPayerUserId'], 'String');
            }
            if (data.hasOwnProperty('PlatformBeneficiaryUserId')) {
                obj['PlatformBeneficiaryUserId'] = ApiClient.convertToType(data['PlatformBeneficiaryUserId'], 'String');
            }
            if (data.hasOwnProperty('ShortDescription')) {
                obj['ShortDescription'] = ApiClient.convertToType(data['ShortDescription'], 'Number');
            }
            if (data.hasOwnProperty('FullDescription')) {
                obj['FullDescription'] = ApiClient.convertToType(data['FullDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} PlatformDealId
 */
UserDealInfo.prototype['PlatformDealId'] = undefined;

/**
 * @member {module:model/DealState} DealStateId
 */
UserDealInfo.prototype['DealStateId'] = undefined;

/**
 * @member {Date} CreateDate
 */
UserDealInfo.prototype['CreateDate'] = undefined;

/**
 * @member {Date} UpdateDate
 */
UserDealInfo.prototype['UpdateDate'] = undefined;

/**
 * @member {Date} ExpireDate
 */
UserDealInfo.prototype['ExpireDate'] = undefined;

/**
 * @member {Number} Amount
 */
UserDealInfo.prototype['Amount'] = undefined;

/**
 * @member {Number} CurrencyId
 */
UserDealInfo.prototype['CurrencyId'] = undefined;

/**
 * @member {String} PlatformPayerUserId
 */
UserDealInfo.prototype['PlatformPayerUserId'] = undefined;

/**
 * @member {String} PlatformBeneficiaryUserId
 */
UserDealInfo.prototype['PlatformBeneficiaryUserId'] = undefined;

/**
 * @member {Number} ShortDescription
 */
UserDealInfo.prototype['ShortDescription'] = undefined;

/**
 * @member {String} FullDescription
 */
UserDealInfo.prototype['FullDescription'] = undefined;






export default UserDealInfo;
