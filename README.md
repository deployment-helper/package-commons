# Commons

Project common library shared among the projects

## Installation 
`npm install @myjunior/commons`

## How to use it?

Import and check how to use it.


```
import { JwtRequest, hasPermission,PermissionTemplates, Permissions } from "@myjunior/commons";
if (hasPermission(['WRITE],'WRITE)) {
  console.log("Approved")
}else{
  console.log("Rejected");
}
```

## NPM publish 

* create a access token with read+publish permission
* create `.npmrc` file with content `//registry.npmjs.org/:_authToken=${NPM_TOKEN}` 
* set access token as environment variable `export NPM_TOKEN="000-000-0000-00000"`
* run `npm run push` command 

