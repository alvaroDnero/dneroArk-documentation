# Login

---
## **Flujo**
- el usuario es un número de teléfono.
- no existe una contraseña como tal, al iniciar sesión con el número, recibirá un SMS con un código de verificación.
- luego de recibir el código se ingresará inmediatamente después.
- si el OTP es correcto inicia sesión.
---

## Generar OTP
### Acción de usuario:
Introducir un número de teléfono.

### Acción del servidor
haga la validación de si el numero existe dentro de los registros, si existe genera un OTP con un periodo de vigencia de pocos minutos, si el usuario repite muchas veces el inicio de sesión, que no se genere un nuevo OTP hasta dentro de unos minutos y que tenga un limite de intentos válidos, luego de ello, que el usuario tenga un periodo de espera, si no se tiene registro de sesión activa en otro dispositivo proceda con el OTP, si se tiene registro de tener la sesión abierta en otro dispositivo, denegar el inicio de sesión. 

### Resultado positivo:
- recibir un mensaje en el dispositivo con el OTP

### Resultado negativo:
Posibles mensajes
- Retorne un mensaje donde especifique que el numero no existe dentro de los registros.
- Sesión abierta en otro dispositivo, ciérrala y vuelve a intentarlo.
- A intentado iniciar sesión demasiadas veces en poco tiempo.



