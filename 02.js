var request=require('request');


var r = request.post({
  url: "http://file.api.weixin.qq.com/cgi-bin/media/upload?access_token=" + access_token + "&type=image",
  // json: true,
  headers: {
    'accept': '*/*'
  }
}, function (err, res, body) {
  console.log(body);
});
var form = r.form();
form.append('media', fs.createReadStream("/usr/share/pixmaps/debian-logo.png"));
form.append('hack', '');