# InterceptorService

## **Overview**
`InterceptorService` is an abstract class designed to handle HTTP requests in applications. It provides a coroutine-based implementation for sending requests and processing responses, including support for authorization headers and timeout handling.

---

## **Attributes**

### Constants
- **`POST_METHOD`** (string): Represents the HTTP method `"POST"`.
- **`GET_METHOD`** (string): Represents the HTTP method `"GET"`.
- **`TIMEOUT_DURATION`** (float): Maximum allowed time for a request to complete, in seconds (default: 45s).

### Private Variables
- **`_sessionOperations`** (`ISessionOperations`): Interface that provides session-related operations, such as retrieving authorization tokens.

---

## **Methods**

### **Constructor**
```csharp
protected InterceptorService(ISessionOperations sessionOperations)


``` 

### **Function SendRequest**
```csharp
protected IEnumerator SendRequest(string url, string method, bool attachesHeader = false, string jsonData = null, Action<string> onSuccess = null, Action<string> onError = null)
``` 

#### Parámetros
- **`url`**: URL to which the request will be sent.

- **`method`**: HTTP method such as "GET" or "POST".

- **`attachesHeader`**:  Indicates whether authorization headers should be added to the request. Default is false.

- **`jsonData`**:  (Optional) JSON-formatted data for POST requests (body).

- **`onSuccess`**:  Callback executed in case of success. Receives the server's response as a parameter.

- **`onError`**:  Callback executed in case of error. Receives the error message as a parameter.


#### Functionality
1. Internet connection validation:

2. If no connection is available, invokes the onError callback with the corresponding message and terminates execution.



3. If the method is POST, configures the request body with the JSON data and adjusts the headers.

4. If the method is GET, initializes the request with the appropriate method.
   



