const mdbConn = require('./mariaDBConn.js')
const express = require('express');
const { urlencoded } = require('body-parser');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : false}));
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
const { response } = require('express');
var jsonParser = bodyParser.json()

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('./main.html');
});
app.post('/search' ,async function(req,res){
// req로 입력을 받는다
// 쿼리를 전달한다
// 응답으로 쿼리 결과를 보내 출력한다
// 버튼 형식으로 보낸다
    console.log(req.body);
    var param = req.body.search;
    console.log(req.body.search);
    try{
        var result = await mdbConn.GetSearchList(param);
    }catch(err) {
        var result = '검색 결과가 존재하지 않습니다'
    }
    console.log(result);
    res.render('./search.ejs',{param:result});
});
app.get('/result', function(req,res){
    res.render('./result.ejs');
// 버튼을 눌렀을 때 어떻게 할지 더 생각해보자
});
app.listen(port, () => {
  console.log(`listening on ${port}`);
});