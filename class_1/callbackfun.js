function findSquare(num,cb){
	const result=num*num;
	cb(result);
}
function cb(res){
	console.log("Square of the number is :"+res);
}

findSquare(10,cb);
