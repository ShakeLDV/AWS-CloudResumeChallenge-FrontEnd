fetch ("https://iqpdf0dszb.execute-api.us-west-1.amazonaws.com/myapi/visitorcount")
.then(res => res.json())
.then(data => document.getElementById('visitor-count').innerText=data)