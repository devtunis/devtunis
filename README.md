     https://www.subito.it/annunci-italia/vendita/offerte-lavoro/?q=job

     <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>HTTP Status Codes Cheat Sheet</title>
<style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f7f9fc;
    color: #333;
    padding: 20px;
    max-width: 900px;
    margin: auto;
  }
  h2 {
    border-bottom: 2px solid #4a90e2;
    padding-bottom: 6px;
    color: #4a90e2;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 40px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  }
  th, td {
    text-align: left;
    padding: 12px 15px;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #4a90e2;
    color: white;
    font-weight: 600;
  }
  tr:hover {
    background-color: #e1efff;
  }
  caption {
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 1.2em;
  }
</style>
</head>
<body>

<h2>HTTP Status Codes Cheat Sheet</h2>

<table>
  <caption>2xx Success Responses</caption>
  <thead>
    <tr>
      <th>Code</th>
      <th>Meaning</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>200</td><td>OK</td><td>Everything is fine</td></tr>
    <tr><td>201</td><td>Created</td><td>Resource created successfully</td></tr>
    <tr><td>202</td><td>Accepted</td><td>Request accepted for processing</td></tr>
    <tr><td>203</td><td>Non-Authoritative Information</td><td>Information from another source</td></tr>
    <tr><td>204</td><td>No Content</td><td>Successful but no data to return</td></tr>
    <tr><td>205</td><td>Reset Content</td><td>Reset the document view</td></tr>
    <tr><td>206</td><td>Partial Content</td><td>Partial data returned</td></tr>
    <tr><td>207</td><td>Multi-Status</td><td>Multiple status codes returned</td></tr>
    <tr><td>208</td><td>Already Reported</td><td>The resource has already been reported</td></tr>
    <tr><td>226</td><td>IM Used</td><td>Instance manipulation applied</td></tr>
  </tbody>
</table>

<table>
  <caption>4xx Client Errors</caption>
  <thead>
    <tr>
      <th>Code</th>
      <th>Meaning</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>400</td><td>Bad Request</td><td>Invalid syntax or malformed request</td></tr>
    <tr><td>401</td><td>Unauthorized</td><td>Authentication required</td></tr>
    <tr><td>403</td><td>Forbidden</td><td>Access denied</td></tr>
    <tr><td>404</td><td>Not Found</td><td>Resource not found</td></tr>
    <tr><td>405</td><td>Method Not Allowed</td><td>HTTP method not supported</td></tr>
  </tbody>
</table>

</body>
</html>

