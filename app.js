// var express = require('express')
// var bodyparser = require('body-parser')
// var mysql = require('mysql')
// var app = express()

// app.use(bodyparser.urlencoded({}))
// var pool = mysql.createPool({
// 	host:'127.0.0.1',
// 	user:'root',
// 	password:'123456789',
// 	database:'1705a',
// 	port:3306
// }) 

// app.post('/',(req,res) => {
// 	res.setHeader('Access-Control-Allow-Origin','*')
// 	pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 			return
// 		}
// 		var sql = 'select * from moban'
// 		connection.query(sql,function(err,data){
// 			if(err){
// 				console.log(err)
// 				return
//             }
            
// 			res.send(data)
//             connection.end()
            
// 		})
// 	})
// })



// app.listen(3000,function(){
// 	console.log('ok')
// })










var express = require('express')
var bodyparser = require('body-parser')
var mysql = require('mysql')
var app = express()

app.use(bodyparser.urlencoded({}))
var pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456789',
	database:'students',
	port:3306
})

app.post('/',(req,res) => {
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		var sql = `select * from moban where state=${req.body.state}`
		connection.query(sql,function(err,data){
			if(err){
				console.log(err)
				return
		    }
			res.send(data)
			connection.end()
		})
	})
})
app.post('/del',(req,res) => {
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		var sql = `delete from moban where id=${req.body.state}`
		connection.query(sql,function(err,data){
			if(err){
				console.log(err)
				return
		    }
			res.send(data)
			connection.end()
		})
	})
})
app.post('/add',(req,res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    var json=req.body
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		var sql = `insert into moban(name,sex,state) values(?,?,?)`
		connection.query(sql,[json.name,json.sex,json.state],function(err,data){
			if(err){
				console.log(err)
				return
		    }
			res.send(data)
			connection.end()
		})
	})
})
app.listen(3000)
