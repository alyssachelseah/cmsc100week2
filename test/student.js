var should = require('should-http'),
	request = require('supertest');

describe('student',function(){
	var url = "http://localhost:5000";
	var studRec = {
		'name': 'Maria',
		'studno': '2013-11111'
	};

	describe('find()',function(){
		it('should retrieve all student record', function(done){
			request(url)
			.get('/students')
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array);
				done();
			})
		});
	})

	describe('findOne()', function(){
		it('should retrieve a specific student record', function(done){
			request(url)
			.get('/students/1')
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				done();
			})
		})
	})

	describe('insert()', function(){
		it('should add a specific student record', function(done){
			request(url)
			.post('/students')
			.send(studRec)
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				done();
			})
		});
	})
});