fetch('https://api.github.com/user', {
  method: 'GET',
  headers: {
    'Authorization': `token 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`, 
  }
})
.then(response => response.json())
.then(data => {

  if (data.login && data.location ) {
    console.log(`Github user name is ${data.login} who lives in ${data.location}`);
  } else {
    console.log("undefined");
  }
})
.catch(error => console.error('ผิดพลาด:', error));
