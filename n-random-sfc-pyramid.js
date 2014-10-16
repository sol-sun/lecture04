#!/usr/local/bin/env node


var nRandomSFCPyramid = function(){
    process.stdout.write("繰り返す回数を入力してください。>> ");
    
    var reader = require('readline').createInterface({
	input : process.stdin,
	output: process.stdout
    });
    
    
    reader.on('line', function(line){
	
	// you can get it with npm.. => $ npm install mersenne
	var r  = require('mersenne');
	var r_num = r.rand(100) + 1;
	
	// or use defaults (Math.rand)
	//var hoge = 1 + parseInt(Math.random() * 100);
	
	if (　isNaN(r_num) ){
            return;
	}
	
	process.stdout.write(r_num+"段のピラミッドを"+line+"回表示します。🍻  \n");
	
	process.stdout.write("\n|\nv\n\n");
	
	
	for(var i=0; i<line;i++){
	    r_num = r.rand(100) + 1;
	    //hoge = 1 + parseInt(Math.random() * 100);
	    sfcPyramid(r_num);
	    process.stdout.write("\n");
	}
	
	reader.close();
	
    });
    reader.on('close', function(){
	process.stdout.write("\n");    
	process.stdout.write("終了");
    });
    
    var sfcPyramid =  function(line){
	
	var join = "";
	
	for(var i=0;i<line;i++){
	    join += "SFC ";
	    process.stdout.write(join);
	    process.stdout.write("\n");
	}
	
    }
    
}


nRandomSFCPyramid();