//import { Endpoint } from "./endpointPath";

export const Paths = {
  overview: 'Overview', 
  parameters: 'parameters',
  paginator: 'paginator',
  coinStatuses: 'coinsStatuses',  
  
//objetos basicos para el funcionamiento

  userObject: 'Objects/userObject',
  phoneObject: 'Objects/phoneObject',
  genericResponse: 'Objects/genericResponse',
  balanceObject: 'Objects/balanceObject',

//Esquemas
  dto: 'DTO/dto',

  userDto:'DTO/Objects/userDTO',
  deviceInfoDto: 'DTO/Objects/deviceInfoDto',
  genericResponseDto: "DTO/Objects/genericResponseDTO",
  balanceDto: "DTO/Objects/balanceDTO",

  otpDtoBody: 'DTO/login/generateOTP/body',
  otpDtoResponse: 'DTO/login/generateOTP/response',

  phoneDtoBody: 'DTO/login/confirmOTP/body',
  phoneDtoResponse: 'DTO/login/confirmOTP/response',
  phoneDtoBody: 'DTO/login/confirmOTP/body',
  phoneDtoResponse: 'DTO/login/confirmOTP/response',
  updateTokenDtoBody: 'DTO/login/accessToken/body',
  updateTokenDtoResponse: 'DTO/login/accessToken/response',

  userProfileDto: 'DTO/user/userProfile',
  contactDtoBody: 'DTO/user/contacts/body',
  contactDtoResponse: 'DTO/user/contacts/response',

  transactionsAllDto: 'DTO/transactions/allTransactions',
  transactionIndividualDto: 'DTO/transactions/transactionIndividual',

  coinsAllDtoNormal: 'DTO/coins/allCoins/normal',
  coinsAllDtoVerbose: 'DTO/coins/allCoins/verbose',

  coinsIndividualDtoNormal: 'DTO/coins/single/normal',
  coinsIndividualDtoVerbose: 'DTO/coins/single/verbose',
  coinsNumberToCollectDto: 'DTO/coins/numberOfCoinsToCollect', 
  

  

  //todos los endpoint
  endpoint: 'endpoints',
 
  otp: 'endpoints/login/phoneOTP',
  phone: 'endpoints/login/phone',
  updateToken: 'endpoints/login/accessToken',
  logout: 'endpoints/login/logout',
  user: 'endpoints/user/profile',
  balance: 'endpoints/user/balance',
  contact: 'endpoints/user/contacts',
  transactionsAll: 'endpoints/transactions/TransactionsAll',
  transactionIndividual: 'endpoints/transactions/TransactionsIndividual',
  notificationsAll: 'endpoints/notifications/NotificationsAll',
  notificationsIndividual: 'endpoints/notifications/NotificationsIndividual',
  coinsAll: 'endpoints/Coins/coinsAll',
  coinsIndividual: 'endpoints/Coins/coinsIndividual',
  coinsRedeem: 'endpoints/Coins/coinsRedeem',
  coinsDrop: 'endpoints/Coins/coinDrop', 
  coinsPending: 'endpoints/Coins/coinPending', 
  coinsNumberToCollect: 'endpoints/Coins/coinsNumberToCollect', 
  coinRecieveWebhook: 'endpoints/Coins/CoinRecieveWebhook',




};
