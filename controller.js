'use strict';

exports.pong = function(req, res) {
  res.json('pong');
};

exports.ping = function(req, res) {
  res.json('ping');
};

exports.pro = function(req, res) {
	let success = Math.random();
	if(success <= .90){
		res.json('pong');
	} else {
		res.status(400);
		res.send('The Pro has failed');
	}
};

exports.am = function(req, res) {
  	if(success <= .70){
		res.json('pong');
	} else {
		res.status(400);
		res.send('The Ametuer has failed');
	}
};