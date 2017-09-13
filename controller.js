'use strict';

exports.pong = function(req, res) {
  res.json('pong');
};

exports.ping = function(req, res) {
  res.json('ping');
};

exports.pro = function(req, res) {
	var success = Math.random();
	if(success <= .90){
		res.json('pong');
	} else {
		res.status(400);
		res.send('The Pro has failed');
	}
};

exports.ametuer = function(req, res) {
	var success = Math.random();
  	if(success <= .70){
		res.json('pong');
	} else {
		res.status(400);
		res.send('The Ametuer has failed');
	}
};

exports.chance = function(req, res) {
	var success = Math.random();
  	if(success <= .50){
		res.json('ping');
	} else {
		res.json('pong');
	}
};