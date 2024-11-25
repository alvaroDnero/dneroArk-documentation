---
id: Loginsss
---

## Login 



## **CreateOTP**


### Parámetros del endpoint:
- `número de teléfono sin condigo de país`
- `código de país`

### Headers
- `Content-Type` : application/json
- `Accept` : application/json


### Acción del servidor
haga la validación de si el numero existe dentro de los registros, si existe genera un OTP con un periodo de vigencia de pocos minutos, si el usuario repite muchas veces el inicio de sesión, que no se genere un nuevo OTP hasta dentro de unos minutos y que tenga un límite de intentos válidos, luego de ello, que el usuario tenga un periodo de espera, si no se tiene registro de sesión activa en otro dispositivo proceda con el OTP, si se tiene registro de tener la sesión abierta en otro dispositivo, denegar el inicio de sesión. 

### Resultado positivo:
- recibir un mensaje en el dispositivo con el OTP

### Resultado negativo:
Posibles mensajes
- Retorne un mensaje donde especifique que el número no existe dentro de los registros.
- Sesión abierta en otro dispositivo, ciérrala y vuelve a intentarlo.
- A intentado iniciar sesión demasiadas veces en poco tiempo.


---



## **ConfirmOTP**

### Parámetros del endpoint:
- `número de teléfono sin condigo de país`
- `código de país`
- `código OTP`
- ? `ip del dispositivo`

### Headers
- `Content-Type` : application/json
- `Accept` : application/json


### Sugerencias:
Sería ideal Almacenar información de dispositivo, algo así como la ip publica o la dirección física, para así evitar que la sesión sea abierta en más de un dispositivo


### Acción del servidor
Validar el OTP, si es correcto eliminar el código para que no pueda volver a ser usado, validar que OTP no haya expirado, si el usuario coloca incorrectamente el código mas de 5 veces, el usuario tendrá que esperar un cooldown de x minutos, después tendría que generar el OTP de nuevo.

### Resultado positivo:
- cuerpo que contenga: `accessToken`, `refreshToken`, `userID`

### Resultado negativo:
Posibles mensajes:
- código incorrecto
- código ha expirado
- Introdujo el condigo incorrecto muchas veces, espere durante 5 min para volver a intentar
  


---



## **UpdateAccessToken**
### Header del endpoint:
- `accessToken`
- `refreshToken`
  

### Headers
- `Content-Type` : application/json
- `Accept` : application/json
- `Authorization` : Bearer `<token>`


### Acción del servidor
Eliminar el `accessToken` actual y generar uno nuevo


### Resultado positivo:
Retorna un nuevo `accessToken`
### Resultado negativo:
Posibles mensajes
- `accessToken` invalido
- `refreshToken` invalido


---


## **UpdateRefreshToken**

### Headers
- `Content-Type` : application/json
- `Accept` : application/json
- `Authorization` : Bearer `<token>`


### Acción del servidor
Eliminar el `refreshToken` actual y generar uno nuevo

### Resultado positivo:
Retorna un nuevo `refreshToken`


### Resultado negativo:
Posibles mensajes
- `refreshToken ` invalido

---


## **Desconectarse**

### Acción del servidor
Eliminar la informacion de session

### Headers
- `Content-Type` : application/json
- `Accept` : application/json
- `Authorization` : Bearer `<token>`

### Resultado positivo:
- `null`

### Resultado negativo:
Posibles mensajes
- `accessToken` invalido
- `refreshToken` invalido