"use strict";

var _iyzipay = _interopRequireDefault(require("iyzipay"));
var Card = _interopRequireWildcard(require("./methods/cards.js"));
var Installement = _interopRequireWildcard(require("./methods/installements.js"));
var Payment = _interopRequireWildcard(require("./methods/payments.js"));
var _logs = require("../../utils/logs.js");
var _nanoid = require("nanoid");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const createUserAndCards = () => {
  Card.createUserCard({
    locale: _iyzipay.default.LOCALE.TR,
    conversationId: (0, _nanoid.nanoid)(),
    email: "deneme1@gmail.com",
    externalId: (0, _nanoid.nanoid)(),
    card: {
      cardAlias: "Kredi Kartım",
      cardHolderName: "Ad Soyad",
      cardNumber: "4910050000000006",
      expireMonth: "11",
      expireYear: "2032"
    }
  }).then(result => {
    console.log(result);
    (0, _logs.logFile)("1-kart-olustur", result);
  }).catch(err => {
    console.log(err);
    (0, _logs.logFile)("1-kart-olustur-hata", result);
  });
};

// createUserAndCards();

const createCardAddUser = () => {
  Card.createUserCard({
    locale: _iyzipay.default.LOCALE.TR,
    conversationId: (0, _nanoid.nanoid)(),
    email: "deneme1@gmail.com",
    externalId: (0, _nanoid.nanoid)(),
    cardUserKey: "EOYCXhEodjyCpoXf8ot4dn/kyXg=",
    card: {
      cardAlias: "Kredi Kartım",
      cardHolderName: "Deneme1 Deneme_1",
      cardNumber: "9792030000000000",
      expireMonth: "12",
      expireYear: "2031"
    }
  }).then(result => {
    console.log(result);
    (0, _logs.logFile)("2-kart-olustur-kullanıcıya-ekle", result);
  }).catch(err => {
    console.log(err);
    (0, _logs.logFile)("2-kart-olustur-kullanıcıya-ekle-hata", result);
  });
};

// createCardAddUser();

const readCardsOfAUser = () => {
  Card.getUserCards({
    locale: _iyzipay.default.LOCALE.TR,
    conversationId: (0, _nanoid.nanoid)(),
    cardUserKey: "EOYCXhEodjyCpoXf8ot4dn/kyXg="
  }).then(result => {
    console.log(result);
    (0, _logs.logFile)("3-kullanıcı-karlatını-getir", result);
  }).catch(err => {
    console.log(err);
    (0, _logs.logFile)("3-kullanıcı-karlatını-getir-hata", result);
  });
};

// readCardsOfAUser();

const deleteCardOfAUser = () => {
  Card.deleteUserCard({
    locale: _iyzipay.default.LOCALE.TR,
    conversationId: (0, _nanoid.nanoid)(),
    cardUserKey: "EOYCXhEodjyCpoXf8ot4dn/kyXg=",
    cardToken: "LO1HC/+ySucQW02PxOKqg+gtWN0="
  }).then(result => {
    console.log(result);
    (0, _logs.logFile)("4-kullanıcı-kartini-sil", result);
  }).catch(err => {
    console.log(err);
    (0, _logs.logFile)("4-kullanıcı-kartini-sil-hata", result);
  });
};

// deleteCardOfAUser();

const checkInstallements = () => {
  return Installement.checkInstallement({
    locale: _iyzipay.default.LOCALE.TR,
    conversationId: (0, _nanoid.nanoid)(),
    binNumber: "49100500",
    price: "32000"
  }).then(result => {
    console.log(result);
    (0, _logs.logFile)("5-kullanıcı-kartının-taksitleri", result);
  }).catch(err => {
    console.log(err);
    (0, _logs.logFile)("5-kullanıcı-kartının-taksitleri-hata", result);
  });
};

// checkInstallements();

const createPayment = () => {
  return Payment.createPayment({
    locale: _iyzipay.default.LOCALE.TR,
    conservationId: (0, _nanoid.nanoid)(),
    price: "52000",
    paidPrice: "52000",
    currency: _iyzipay.default.CURRENCY.TRY,
    installment: "1",
    basketId: (0, _nanoid.nanoid)(),
    paymentChannel: _iyzipay.default.PAYMENT_CHANNEL.WEB,
    paymentGroup: _iyzipay.default.PAYMENT_GROUP.PRODUCT,
    paymentCard: {
      cardHolderName: "Aziz Özdemir",
      cardNumber: "4543590000000006",
      expireMonth: "12",
      expireYear: "2030",
      cvc: '123',
      registerCard: '0'
    },
    buyer: {
      id: (0, _nanoid.nanoid)(),
      name: 'Demirhan',
      surname: 'Ozdemir',
      gsmNumber: '+905350000000',
      email: 'demirhanozdemir032@gmail.com',
      identityNumber: "00000000000",
      lastLoginDate: "2020-10-05 12:43:35",
      registrationDate: "2020-10-04 12:43:35",
      registrationAddress: "Nikakule Göztepe, Merdivenköy mah. Bora Sok. No:1",
      ip: "85.34.78.112",
      city: "Istanbul",
      country: "Turkey",
      zipCode: "34732"
    },
    shippingAddress: {
      contactName: "Aziz Özdemir",
      city: "Istanbul",
      country: "Turkey",
      address: "Adress 2",
      zipCode: "34732"
    },
    billingAddress: {
      contactName: "Aziz Özdemir",
      city: "Istanbul",
      country: "Turkey",
      address: "Nikakule Göztepe, Merdivenköy mah. Bora Sok. No:1",
      zipCode: "34732"
    },
    basketItems: [{
      id: "BT101",
      name: "Samsung S10",
      category1: "Telefonlar",
      category2: "Android Telefonlar",
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      price: 32000
    }, {
      id: "BT102",
      name: "Iphone 15 pro max",
      category1: "Telefonlar",
      category2: "IOS Telefonlar",
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      price: 20000
    }]
  }).then(result => {
    console.log(result);
    (0, _logs.logFile)("5-kayitli-olmayan-kartla-odeme-yapma-ve-karti-kaydetme", result);
  }).catch(err => {
    console.log(err);
    (0, _logs.logFile)("5-kayitli-olmayan-kartla-odeme-yapma-ve-karti-kaydetme-hata", result);
  });
};

// createPayment();

const createPaymentAndSaveCard = () => {
  return Payment.createPayment({
    locale: _iyzipay.default.LOCALE.TR,
    conservationId: (0, _nanoid.nanoid)(),
    price: "12000",
    paidPrice: "12000",
    currency: _iyzipay.default.CURRENCY.TRY,
    installment: "6",
    basketId: (0, _nanoid.nanoid)(),
    paymentChannel: _iyzipay.default.PAYMENT_CHANNEL.WEB,
    paymentGroup: _iyzipay.default.PAYMENT_GROUP.PRODUCT,
    paymentCard: {
      cardUserKey: "TY+diHRHi1/TJfVuprqUtkRNKQ8=",
      cardAlias: "Kredi Kartım Ödemeden Sonra",
      cardHolderName: "Aziz Özdemir",
      cardNumber: "5528790000000008",
      expireMonth: "12",
      expireYear: "2030",
      cvc: '123',
      registerCard: '1'
    },
    buyer: {
      id: (0, _nanoid.nanoid)(),
      name: 'Demirhan',
      surname: 'Ozdemir',
      gsmNumber: '+905350000000',
      email: 'demirhanozdemir032@gmail.com',
      identityNumber: "00000000000",
      lastLoginDate: "2020-10-05 12:43:35",
      registrationDate: "2020-10-04 12:43:35",
      registrationAddress: "Nikakule Göztepe, Merdivenköy mah. Bora Sok. No:1",
      ip: "85.34.78.112",
      city: "Istanbul",
      country: "Turkey",
      zipCode: "34732"
    },
    shippingAddress: {
      contactName: "Aziz Özdemir",
      city: "Istanbul",
      country: "Turkey",
      address: "Adress 2",
      zipCode: "34732"
    },
    billingAddress: {
      contactName: "Aziz Özdemir",
      city: "Istanbul",
      country: "Turkey",
      address: "Nikakule Göztepe, Merdivenköy mah. Bora Sok. No:1",
      zipCode: "34732"
    },
    basketItems: [{
      id: "BT101",
      name: "Samsung S10",
      category1: "Telefonlar",
      category2: "Android Telefonlar",
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      price: 10000
    }, {
      id: "BT102",
      name: "Iphone 15 pro max",
      category1: "Telefonlar",
      category2: "IOS Telefonlar",
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      price: 2000
    }]
  }).then(result => {
    console.log(result);
    (0, _logs.logFile)("5-kayitli-olmayan-kartla-odeme-yapma-ve-karti-kaydetme", result);
  }).catch(err => {
    console.log(err);
    (0, _logs.logFile)("5-kayitli-olmayan-kartla-odeme-yapma-ve-karti-kaydetme-hata", result);
  });
};

// createPaymentAndSaveCard();

const createPaymentWithSaveCard = () => {
  return Payment.createPayment({
    locale: _iyzipay.default.LOCALE.TR,
    conservationId: (0, _nanoid.nanoid)(),
    price: "12000",
    paidPrice: "12000",
    currency: _iyzipay.default.CURRENCY.TRY,
    installment: "1",
    basketId: (0, _nanoid.nanoid)(),
    paymentChannel: _iyzipay.default.PAYMENT_CHANNEL.WEB,
    paymentGroup: _iyzipay.default.PAYMENT_GROUP.PRODUCT,
    paymentCard: {
      cardToken: "TcY2azNl58qVp1L/JYtMT7sVZLw=",
      cardUserKey: "EOYCXhEodjyCpoXf8ot4dn/kyXg="
    },
    buyer: {
      id: (0, _nanoid.nanoid)(),
      name: 'Demirhan',
      surname: 'Ozdemir',
      gsmNumber: '+905350000000',
      email: 'demirhanozdemir032@gmail.com',
      identityNumber: "00000000000",
      lastLoginDate: "2020-10-05 12:43:35",
      registrationDate: "2020-10-04 12:43:35",
      registrationAddress: "Nikakule Göztepe, Merdivenköy mah. Bora Sok. No:1",
      ip: "85.34.78.112",
      city: "Istanbul",
      country: "Turkey",
      zipCode: "34732"
    },
    shippingAddress: {
      contactName: "Aziz Özdemir",
      city: "Istanbul",
      country: "Turkey",
      address: "Adress 2",
      zipCode: "34732"
    },
    billingAddress: {
      contactName: "Aziz Özdemir",
      city: "Istanbul",
      country: "Turkey",
      address: "Nikakule Göztepe, Merdivenköy mah. Bora Sok. No:1",
      zipCode: "34732"
    },
    basketItems: [{
      id: "BT101",
      name: "Samsung S10",
      category1: "Telefonlar",
      category2: "Android Telefonlar",
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      price: 10000
    }, {
      id: "BT102",
      name: "Iphone 15 pro max",
      category1: "Telefonlar",
      category2: "IOS Telefonlar",
      itemType: _iyzipay.default.BASKET_ITEM_TYPE.PHYSICAL,
      price: 2000
    }]
  }).then(result => {
    console.log(result);
    (0, _logs.logFile)("8-kayitli-kartla-odeme-yapma", result);
  }).catch(err => {
    console.log(err);
    (0, _logs.logFile)("8-kayitli-kartla-odeme-yapma-hata", result);
  });
};
createPaymentWithSaveCard();