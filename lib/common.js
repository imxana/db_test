function common(){
}

common.random16 = ()=>{var r='1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';var w = '';for(var i=0;i<16;i++){w+=r[Math.floor(r.length*Math.random())];}return w;};

// NOTE: this to show the dbs ErrorCode
common.ErrorCode = {
  userNotExisted: {'code': '-1', 'codeState': 'user not existed'},
  useridEmpty:    {'code': '-2', 'codeState': 'userid empty'},
  usernameEmpty:  {'code': '-3', 'codeState': 'username empty'},
  noteNotExisted: {'code': '-4', 'codeState': 'note not existed'},
  noteidEmpty:    {'code': '-5', 'codeState': 'noteid empty'},
}




module.exports = common;
