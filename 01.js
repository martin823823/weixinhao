var weixin      = require('weixin-api');  
var express     = require('express');  
var app         = express(); 

// 接入验证
app.get('/', function(req, res) {

    // 签名成功
    if (weixin.checkSignature(req)) {
        res.status(200).send(req.query.echostr);
    } else {
        res.status(200).send('fail');
    }
});

// config 根据自己的实际配置填写
weixin.token = 'treefog';

// 监听文本消息
weixin.textMsg(function(msg) {  
    console.log("textMsg received");
    console.log(JSON.stringify(msg));

    var resMsg = {};

    switch (msg.content) {
        
        case "图片":
        

             
           
         break;

        case "音乐" :
            // 返回音乐消息
            resMsg = {
                fromUserName : msg.toUserName,
                toUserName : msg.fromUserName,
                msgType : "music",
                title : "音乐标题",
                description : "http://img.lenovomm.com/crawler@cluster-1/ams/fileman/img/icon/2013-08-07013655-_1375853815850_0843.png",
                musicUrl : "http://img.lenovomm.com/crawler@cluster-1/ams/fileman/img/icon/2013-08-07013655-_1375853815850_0843.png",
                HQMusicUrl : "http://mp3.sogou.com/tiny/song?tid=5925009e741ebfac&query=%D5%E2%A3%AC%BE%CD%CA%C7%B0%AE&song_name=%D5%E2%A3%AC%BE%CD%CA%C7%B0%AE&album_name=%D5%E2%A3%AC%BE%CD%CA%C7%B0%AE&singer_name=%D5%C5%BD%DC&play=http%3A%2F%2Fcc.stream.qqmusic.qq.com%2FC1000016QvHh2d3agi.m4a%3Ffromtag%3D52",
                funcFlag : 0
            };
            break;
            case "位置":
             resMsg={
             	fromUserName:msg.toUserName,
             	toUserName:msg.fromUserName,
             	msgType:"location",
             	locationx:23,
             	locationy:35,
             	scale:2,
             	lable:"",
             	funcFlag:0
             } ;
             break;  

        case "图片" :

            var articles = [];
            articles[0] = {
                title : "PHP依赖管理工具Composer入门",
                description : "轿车",
                picUrl : "http://a.hiphotos.baidu.com/image/pic/item/738b4710b912c8fcd38475dbff039245d68821b4.jpg",
                url : "http://weizhifeng.net/manage-php-dependency-with-composer.html"
            };

      
            // 返回图文消息
            resMsg = {
                fromUserName : msg.toUserName,
                toUserName : msg.fromUserName,
                msgType : "news",
                articles : articles,
                funcFlag : 0
            }
    }

    weixin.sendMsg(resMsg);
});

// 监听图片消息
weixin.imageMsg(function(msg) {  
    console.log("imageMsg received");
    console.log(JSON.stringify(msg));
});



// 监听位置消息
weixin.locationMsg(function(msg) {  
    console.log("locationMsg received");
    console.log(JSON.stringify(msg));
});



// 监听链接消息
weixin.urlMsg(function(msg) {  
    console.log("urlMsg received");
    console.log(JSON.stringify(msg));
});

// 监听事件消息
weixin.eventMsg(function(msg) {  
    console.log("eventMsg received");
    console.log(JSON.stringify(msg));
});

// Start
app.post('/', function(req, res) {

    // loop
    weixin.loop(req, res);

});

app.listen(8080);  
