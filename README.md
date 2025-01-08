  
   
 <pre>  const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

app.all('/api/go/*', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:8080' });
});

app.all('/api/express/*', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
});

 // this code should see all people join in this github this code is able   to expose both servers under one domain 
 express js + go  <33
 </pre>
