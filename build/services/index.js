"use strict";

var _iyzipay = _interopRequireDefault(require("iyzipay"));
var Card = _interopRequireWildcard(require("./methods/cards.js"));
var _logs = require("../utils/logs.js");
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