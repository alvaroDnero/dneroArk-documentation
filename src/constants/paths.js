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


  

  //todos los endpoint
  endpoint: 'endpoints',
 
  otp: 'endpoints/login/phoneOTP',
  phone: 'endpoints/login/phone',
  updateToken: 'endpoints/login/accessToken',
  logout: 'endpoints/login/logout',
  user: 'endpoints/user/profile',
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



};
