"use strict";var a=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var o=a(function(D,q){
var v=5;function E(t,r,e,s,_){var i,n,u;if(t<=0||r===0)return e;if(i=_,s===1){if(n=t%v,n>0)for(u=0;u<n;u++)e[i]-=r,i+=s;if(t<v)return e;for(u=n;u<t;u+=v)e[i]-=r,e[i+1]-=r,e[i+2]-=r,e[i+3]-=r,e[i+4]-=r,i+=v;return e}for(u=0;u<t;u++)e[i]-=r,i+=s;return e}q.exports=E
});var c=a(function(F,d){
var M=require('@stdlib/strided-base-stride2offset/dist'),O=o();function b(t,r,e,s){return O(t,r,e,s,M(t,s))}d.exports=b
});var j=a(function(G,m){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),k=o();g(y,"ndarray",k);m.exports=y
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=j(),f,R=z(w(__dirname,"./native.js"));A(R)?f=B:f=R;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
