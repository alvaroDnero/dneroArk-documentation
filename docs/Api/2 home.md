# Home

## **GetUser**

### Positive Result:
- `userName` (string): the format is a last name first followed by a first name.
- `cashBalance` (string): amount of money in the wallet in dollars (format: 0.00).
- `CryptoBalance` (string): amount of money in the crypto wallet (format: 0.00).
- `pendingCoins` (int): information only about the number of coins not yet collected.

### Negative Result:
Possible messages:
- `userId` invalid
- `accessToken` invalid
- `refreshToken` invalid
