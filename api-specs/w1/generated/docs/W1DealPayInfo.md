# W1P2PApi.W1DealPayInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**platformId** | **String** | Идентификатор площадки | 
**platformDealId** | **String** | Идентификатор сделки на стороне площадки | 
**authData** | **String** | Некоторые способы оплаты поддерживают передачу авторизационных данных из площадки, позволяя плательщику миновать платежные страницы и сразу инициировать оплату. | [optional] 
**returnUrl** | **String** | Урл возврата пользователя | 
**redirectToCardAddition** | **String** | Перейти сразу к добавлению нового инструмента оплаты. Происходит при передаче значения &#39;True&#39;. | [optional] 
**paymentTypeId** | **String** | Способ оплаты. Перейти к добавлению/выбору инструмента оплаты конкретного способа. Если не передан выбирается способ по умолчанию. | 
**signature** | **Blob** | Подпись запроса | 
**timestamp** | **Date** | Дата формирования запроса в часовом поясе UTC+0 | 
**language** | **String** | Язык интерфейса платежных страниц. Доступны ru, en. | [optional] 


