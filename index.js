const token = '68ccea9f8e05dd691032f244a2505c54e7c5d207'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
