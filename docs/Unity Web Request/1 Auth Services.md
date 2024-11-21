# AuthService

## **Overview**
`AuthService` is an internal class that inherits from the `InterceptorService` class and handles authentication-related API calls and requests. This includes generating One Time Passwords (OTPs), confirming OTPs, refreshing authentication tokens, and performing account pings.

---

## **Attributes**
- **`BASE_URL`** (string): A constant that represents the base URL for API requests.
---

## **Constructor**
```csharp
public AuthService(ISessionOperations sessionOperations) : base(sessionOperations)
```



Parameter:

`sessionOperations`: An interface that provides session-related operations. 

 ---

 ## **Methods**

  ### Generals
  each method had this parameters.

  - Parameters:
  
    - `body` (json): Request body containing necessary data.

    - `onError` (Action string): Callback executed on error with the error message as a parameter.

    - `onSuccess` (Action string): (Optional) Callback executed on success.


  ### GenerateOTP

  Generates a One Time Password (OTP) for authentication.

  ``` csharp
  public IEnumerator GenerateOTP(string body, Action<string> onError, Action onSuccess = null)
  ```

  - **`URL`** (string): `BASE_URL` + "generate-otp";

  
  ### ConfirmationOTP

   Confirms the One Time Password (OTP) for authentication.

   ``` csharp
   public IEnumerator ConfirmationOTP(string body, Action<string> onError, Action onSuccess = null)
  ```

  - **`URL`** (string): `BASE_URL` + "confirmation-otp";


  ### RefreshOTP

   Refreshes the authentication token.

   ``` csharp
   public IEnumerator RefreshOTP(string body, Action<string> onError, Action onSuccess = null)
  ```

  - **`URL`** (string): `BASE_URL` + "refreshtoken";

## **Necessary Features**
A new or modified: `RefreshOTP`

The `RefreshOTP` endpoint currently returns two values in its response: `accessToken` and `refreshToken`.

#### Behavior:
- The **`accessToken`** is updated successfully upon invoking the endpoint.
- The **`refreshToken`** remains unchanged and is returned as is in the response.

#### Requirement:
- Both the **`accessToken`** and the **`refreshToken`** need to be updated in the response to ensure that the client always operates with the latest tokens and keys. This is critical for maintaining secure and seamless session management.


#### Example Input:
```json
{
  "userID": "xxxx",
  "accessKey": "old token",
  "refreshToken": "c9c3cf26afbb436d93d40ae2ed77fab3"
}
```

#### Example Output JSON (Response)
```json
{  
  "accessKey": "new token",
  "refreshToken": "c9c3cf26afbb436d93d40ae2ed77fab3"
}
```

