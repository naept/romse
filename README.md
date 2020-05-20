# romse
This package allows sending the same request to multiple search engines and open a browser tab for each engine

## Function parameters
### request
This is the string of the request

### engine
For exemple, if you want to parameter the following request : "jules verne island of mystery"

On the following search engine : Qwant

That would have generate the following url : "https://www.qwant.com/?q=jules%20verne%20island%20of%20mystery&t=web"

Therfore you have to parameter engine as follow

```js
engine = {
          name: "Qwant",                        // the name of the engine (optional)
          prefix: "https://www.qwant.com/?q=",  // the prefix of the request url
          union: "%",                           // the linking caracter inbetween every word of your request
          suffix: "&t=web",                     // the suffix of the request
          search: true,                         // if you set search on false, romse won't launch the request on Qwant
        }
```