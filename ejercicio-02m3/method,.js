'use strict'

let message = 'HTTP/1.0 200 OK'

let message1 = message.split(' ');
alert(message1)  //HTTP/1.0,200,OK

let[protocolo,code,description] = message1

alert(protocolo);
alert(code);
alert(description);