// const app = "I don't do much.";
const token = 'bd96451c846bbc16af227bd189d0f552c0652d65'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
