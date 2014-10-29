#Jolokia Node Client
This project is a port version of Jolokia official [Javascript client](http://www.jolokia.org/client/javascript.html) for Node.JS

Current version of ported Jolokia JS client is 1.2.2.
#Installation
Install using npm
```bash
npm install --save node-jolokia
```

#Usage
##Simple Demo
```js
var jolokia=require("node-jolokia");
jolokia("http://localhost:8181/jolokia",function(err,client){
    if (err){
      //err handle
    }else{
      //perform a request
      client.request({type:"version"},{
        success:function(res, idx){
          //responsed as JSON
        },
        ajaxError:function(statusCode,error,errorText){
          //web request error handling
        },
        error:function(errorRes, idx){
          // response error handling
        }
      });
    }
});
```
In code above, it retrieves a Jolokia client with given url and performs a request to retrieve the version.

##Client Retrieve
In demo above, jolokia function takes two parameters:

1. The first parameter can be either a url to Jolokia server or a JSON object containing following fields:
  * url: the url to Jolokia server
  * username: the username of Jolokia server HTTP basic authentication
  * password: the password of Jolokia server HTTP basic authentication
  * type: POST or GET
  * jsonp: Whether the request should be sent via JSONP
2. The second parameter is a callback function which has two parameters:
  1. errors: If client creating failed, errors will be returned.
  2. client: the client Object. See [here](client-usage) for the usage of client.

##Client Usage
As this lib is just a port of Jolokia official JS library, the client usage is the same as [this](http://www.jolokia.org/reference/html/clients.html) document.

##Synchronous Request
Although the JS lib supports synchronous request, it is highly recomment **NOT** to use it.
In Node.JS environment, keep everything async.
