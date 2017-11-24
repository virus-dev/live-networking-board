var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/rst_networking');
var Schema = mongoose.Schema;

//메모 모델을 정의합니다.
var Invest = new Schema({
	user_name: String,
	user_position: String,
	user_interest: String,
	user_email: String,
	user_description: String,
	date: Date
});

var investModel = mongoose.model('Invest', Invest);

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};

//모든 메모 목록을 반환합니다.
exports.load = function(req, res) {
	investModel.find({}, function(err, data) {
		console.log(data);

		res.json(data);
	});
};

//메모 쓰기 요청을 처리합니다.
exports.login = function(req, res) {
	var user_name = req.body.user_name;
	var user_phone = req.body.user_phone;

	var login = new loginModel();

	login.user_name = user_name;
	login.user_phone = user_phone;

	login.save(function (err) {
		if (err) {
			throw err;
		}
		else {
			res.json({status: "SUCCESS"});
		}
	});
};

exports.invest = function(req, res) {
	var user_name = req.body.user_name;
	var user_position = req.body.user_position;
	var user_interest = req.body.user_interest;
	var user_email = req.body.user_email;
	var user_description = req.body.user_description;

	var date = Date.now();

	var invest = new investModel();

	invest.user_name = user_name;
	invest.user_position = user_position;
	invest.user_interest = user_interest;
	invest.user_email = user_email;
	invest.user_description = user_description;
	invest.date = date;

	invest.save(function (err) {
		if (err) {
			throw err;
		}
		else {
			res.json({status: "SUCCESS"});
		}
	});
};

//메모 삭제 요청을 처리합니다.
exports.del = function(req, res) {
	var _id = req.body._id;

	investModel.remove({_id: _id}, function(err, result) {
		if (err) {
			throw err;
		}
		else {
			res.json({status: "SUCCESS"});
		}
	});
};
