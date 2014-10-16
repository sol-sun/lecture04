#!/usr/local/bin/env node


var centeringSFcPyramid = function(){

    process.stdout.write("段数を入力してください。>> ");
    var reader = require('readline').createInterface({
	input : process.stdin,
	output: process.stdout
    });
    
    reader.on('line', function(line){
	
	process.stdout.write("\n");
	
	process.stdout.write(line+"段のピラミッド。🍻  \n");
	
	process.stdout.write("\n|\nv\n\n");
	
	sfcPyramid(line);
	
	reader.close();
	
    });
    reader.on('close', function(){
	process.stdout.write("\n");    
	process.stdout.write("終了");
    });
    
    var sfcPyramid =  function(line){
	
	var join = "";
	
	for(var z=1;z<=line;z++){
	    
	    for(var i=(line - z);i>0;i--){
		process.stdout.write("  ");
	    }
	    for(var j=0;j<z;j++){
		join += "SFC ";	    
	    }
	    process.stdout.write(join);
	    process.stdout.write("\n");
	    join = "";
	}
	
    }
}

centeringSFcPyramid();