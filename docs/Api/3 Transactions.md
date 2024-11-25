# Transactions

## **GetUserTransactions**

### Positive Result (List):
- `id` : id de la notificacion
- `type` (string) : 2 posibles valores, enviada o recibida
- `userName` : si es enviada
- `date` (DateTime) : fecha de cuando fue creada
- `amount` (string) : cantidad de dinero 

### Negative Result:
Possible messages:
- `userId` invalid
- `accessToken` invalid
- `refreshToken` invalid
