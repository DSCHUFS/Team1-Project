const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const mysql = require("mysql"); // << 새로 추가된 부분

var connection = mysql.createConnection({
  /// 새로 추가된 부분
  host: "localhost",
  user: "root", // mysql에 아이디를 넣는다.
  password: "1q2w3e4r", // mysql의 비밀번호를 넣는다.
  database: "recycle_allimi", //위에서 만든 데이터베이스의 이름을 넣는다.
});

connection.connect();

app.use(cors());

app.use(bodyParser.json());
app.get('/',function(req,res) {
    res.send({greeting:'hello react'});
});
app.get('/query', function(req,res) {
    const name = req.param('name');
    connection.query("SELECT * FROM main where item = " + "'" + name + "'", function (err, rows, fields) {
        if (err) {
          res.redirect('http://localhost:3000/search/1');
          console.log(err);
          throw err;
        } else {
          if(rows[0].class == '종이류')
            res.redirect('http://localhost:3000/paper');
          else if(rows[0].class == '종이컵, 종이팩')
            res.redirect('http://localhost:3000/paper-cup');
          else if(rows[0].class == '캔류, 고철류')  
            res.redirect('http://localhost:3000/can');
          else if(rows[0].class == '유리병류')  
            res.redirect('http://localhost:3000/glass');
          else if(rows[0].class == '플라스틱')  
            res.redirect('http://localhost:3000/plastic');
          else if(rows[0].class == '비닐류')  
            res.redirect('http://localhost:3000/plastic-bag');
          else if(rows[0].class == '형광등')  
            res.redirect('http://localhost:3000/lamp');
          else if(rows[0].class == '건전지')  
            res.redirect('http://localhost:3000/battery');
          else if(rows[0].class == '섬유류')  
            res.redirect('http://localhost:3000/fiber');
          else if(rows[0].class == '전자제품')  
            res.redirect('http://localhost:3000/electronics');
          else if(rows[0].class == '폐식용유')  
            res.redirect('http://localhost:3000/search');
          else if(rows[0].class == '기타')
            res.redirect('http://localhost:3000/search');                                            
        }
    console.log(name);
    });
});
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})