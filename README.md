# Aidbox app that issues jitsi JWT tokens

## Configuration
Aidbox app settings (example)
```
APP_INIT_CLIENT_ID=root
APP_INIT_CLIENT_SECRET=secret
APP_INIT_URL=http://devbox:8080

APP_ID=jitsi-auth-app
APP_SECRET=secret
APP_URL=http://jitsi-auth:8081
APP_PORT=8081

AIDBOX_URL=http://devbox:8080
```
App settings to issue jitsi token:
```
AUTH_JWT_SECRET
AUTH_JWT_ACCEPTED_ISSUERS
AUTH_JWT_ACCEPTED_AUDIENCES
```
Should be taken from jitsi server configuration:
```
JWT_APP_SECRET
JWT_ACCEPTED_ISSUERS
JWT_ACCEPTED_AUDIENCES
```
AUTH_JWT_ACCEPTED_ISSUERS,AUTH_JWT_ACCEPTED_AUDIENCES,JWT_ACCEPTED_ISSUERS,JWT_ACCEPTED_AUDIENCES
should be a domain name of the EMR.
`emr.beda.software`
Check jitsi settings for more details.


## Docker hub:
https://hub.docker.com/r/bedasoftware/jitsi-auth-backend
