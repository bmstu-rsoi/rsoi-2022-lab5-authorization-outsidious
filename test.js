var request = require("request");

var options = {
  method: "POST",
  url: "https://dev-81hplz7s136q0s6b.us.auth0.com/oauth/token",
  headers: { "content-type": "application/json" },
  body: '{"client_id":"WXCZ5ceGSqKilqDmrmpgn6u0olifIoq0","client_secret":"SIagYCxdVknPL14xsp94XQOUYht-4swW4lbS4xyP2R9DFR-RQvkjVro2IjeXvqxZ","audience":"http://127.0.0.1:8080","grant_type":"password", "username": "artem2000vlas@mail.ru", "password": "75ImabodTest", "scope": "openid"}',
};

//"scope": "openid"

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
