# Commons

Project common library shared among the projects

## How to use it?

Import and check how to use it.


```
import Gcp from "@myjunior/gcp-appengine";
const keyFile = "service-account-key.json"
const gcpProjectId = "project-xyz";
const gcp = new Gcp(keyFile);

// create AppEngine Application
gcp.createInstance(gcpProjectId).then((resp)=>{
  console.log(resp);
}).catch(err=>{
  console.log(err);
});

// Get AppEngine Application
gcp.getInstance(gcpProjectId).then((resp)=>{
  console.log(resp);
}).catch(err=>{
  console.log(err);
});


```

## NPM publish 

* create a access token with read+publish permission
* set access token as environment variable `export NPM_TOKEN="000-000-0000-00000"`
* run `npm run push` command 

