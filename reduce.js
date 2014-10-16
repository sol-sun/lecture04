#!/usr/local/bin/env node


var frac = function(bunsi, bunbo){
    var bunsu = {
	bunsi:bunsi,
	bunbo:bunbo
    };
    return bunsu;
}

var reduce = function(bunsu){

    if(bunsu["bunsi"] == 0){

	bunsu["bunsi"] = 0;
	bunsu["bunbo"] = 0;

	return bunsu;

    }else if( bunsu["bunbo"] == 0){

	bunsu["bunsi"] = Infinity;
	bunsu["bunbo"] = Infinity;
	
	return bunsu;
	
    }else{

	var reduce_bunsi = bunsu["bunsi"]
	var reduce_bunbo = bunsu["bunbo"];


	var roop = bunsu["bunsi"]%bunsu["bunbo"];

	var amari = bunsu["bunbo"];

	while(roop > 0){

	    amari = roop;
	    bunsu["bunsi"] = bunsu["bunbo"];
	    bunsu["bunbo"] = roop;

	    roop =  bunsu["bunsi"]%bunsu["bunbo"];

	}
	

	reduce_bunsi = reduce_bunsi/amari;
	reduce_bunbo = reduce_bunbo/amari;
	var reduce_bunsu = {
	    bunsi:reduce_bunsi,
	    bunbo:reduce_bunbo
	};

	return reduce_bunsu;
	    
    }

}


var bunsi;
var bunbo;

process.stdout.write("分子の値を入力してください >> ");
var reader = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout
});


reader.on('line', function(line){
    process.stdout.write("\n");

    if(bunsi == null){
	bunsi = line;
	process.stdout.write("分母の値を入力してください >> ");

    }else if( bunbo == null){
	bunbo = line;
	var bunsu = frac(bunsi, bunbo);
	var reduce_bunsu = reduce(bunsu);

	console.log("分子 => "+reduce_bunsu["bunsi"]);
	console.log("分母 => "+reduce_bunsu["bunbo"]);

	process.stdout.write("\n");
	process.stdout.write("終了");
    
	
	reader.close();
    }
    
});
