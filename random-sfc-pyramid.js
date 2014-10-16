#!/usr/local/bin/env node



var randomSFCPyramid = function(){
// you can get it with npm.. => $ npm install mersenne
var r  = require('mersenne');
var r_num = r.rand(100) + 1;

// or use defaults (Math.rand)
//var hoge = 1 + parseInt(Math.random() * 100);

    if ( isNaN(r_num) ){
	return;
    }
    
    var join = "";

    for(var i=0;i<r_num;i++){
        join += "SFC ";
        process.stdout.write(join);
        process.stdout.write("\n");
    }

    
}

randomSFCPyramid();