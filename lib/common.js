function common(){}
common.random16 = ()=>{var r='1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';var w = '';for(var i=0;i<16;i++){w+=r[Math.floor(r.length*Math.random())];}return w;};
module.exports = common;
