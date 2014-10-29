/**
 *
 *
 *
 *
*/

module.exports=newClient;

var jsdom=require("jsdom");
var fs=require("fs");
var scripts=[
  fs.readFileSync(__dirname+"/lib/jquery.js"),
  fs.readFileSync(__dirname+"/lib/jolokia-1.2.2.js"),
  fs.readFileSync(__dirname+"/lib/jolokia-simple-1.2.2.js")
];

function newClient(param,cb){
  jsdom.env("<html><body></body></html>",[],{
    src:scripts
  },function(errors,window){
    window.$.support.cors = true;
    if (errors){
      cb(errors);
    }else{
      cb(null,new window.Jolokia(param));
    }
  });
}
