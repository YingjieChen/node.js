//usage of assert
const assert	=	require('assert');
assert.equal(1,1);
assert.deepEqual("This is a game","This is a game");
assert.deepStrictEqual("a","a");
//assert.fail(1,2,undefined,"<");
//ifError true=0
assert.ifError(0);//不是error
assert.notEqual(1,2);
assert.ok(1);
//Usage of Buffer
const buf1	=	Buffer.alloc(10);
const buf2	=	Buffer.alloc(10,1);
const buf3	=	Buffer.allocUnsafe(10);
const buf4	=	Buffer.from([1,2,3]);
const buf5	=	Buffer.from("tést");
const buf6	=	Buffer.from('tést','latin1');
//console.log(buf1,buf2,buf3,buf4,buf5,buf6);
//Usage of Child Process
const { spawn }		=	require('child_process');
//const ls		=	spawn('ls',['-lh','/usr']);
/*ls.stdout.on('data',(data)=>{
	console.log(`stdout:${data}`);
});
ls.stderr.on('data',(data)=>{
	console.log(`stderr:${data}`);
});
ls.on('close',(code)=>{
	console.log(`child process exited with code ${code}`);
});*/
const ps		=	spawn('ps',['ax']);
const grep		=	spawn('grep',['ssh']);
/*ps.stdout.on('data',(data)=>{
        //console.log(`stdout:${data}`);
	grep.stdin.write(data);
});*/
//console.log("Hello world!");
//console.error(new Error('这是一个错误'));
const	name	=	'描述';
//console.warn(`这个到底是什么鬼？${name}`);
//console.assert(1==2,'什么鬼');
//Crypto
const crypto	=	require('crypto');
const secret	=	'this is string key';
const hash	=	crypto.createHmac('sha256',secret).update('I love you...').digest('hex');
console.log(hash);
const fs = require('fs');
const { URL } = require('url');
/*fs.unlink('/tmp/hello', (err) => {
	if (err) throw err;
	console.log('成功删除 /tmp/hello');
});
fs.rename('/tmp/hello', '/tmp/world', (err) => {
	if (err) throw err;
	fs.stat('/tmp/world', (err, stats) => {
		if (err) throw err;
		console.log(`文件属性: ${JSON.stringify(stats)}`);
	});
});*/
const fileUrl = new URL('file:///tmp/hello');
fs.readFileSync(fileUrl);
