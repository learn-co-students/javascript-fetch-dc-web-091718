const token = '9afd6f25b65deecdbbe693b16296a3c2cdf3afd9'

fetch('https://api.github.com/users/adigitalnative/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))