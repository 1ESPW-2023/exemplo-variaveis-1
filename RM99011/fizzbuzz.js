for(var fIz = 1; fIz < 101; fIz++ ) {
	if(fIz % 15 == 0) console.log('fizzbuzz');
	else if (fIz % 5 == 0) console.log('fizz');
	else if (fIz % 3 == 0) console.log('buzz');
	else console.log(fIz);
}