function common(){
}

common.random16 = ()=>{var r='1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';var w = '';for(var i=0;i<16;i++){w+=r[Math.floor(r.length*Math.random())];}return w;};

// NOTE: this to show the dbs ErrorCode
common.ErrorCode = {
  userNotExisted:       {'code': '-1', 'codeState': 'user not existed'},
  useridEmpty:          {'code': '-2', 'codeState': 'userid empty'},
  usernameEmpty:        {'code': '-3', 'codeState': 'username empty'},
  usernameExisted:      {'code': '-4', 'codeState': 'username is existed'},
  noteNotExisted:       {'code': '-6', 'codeState': 'note not existed'},
  noteidEmpty:          {'code': '-7', 'codeState': 'noteid empty'},
  titleEmpty:           {'code': '-8', 'codeState': 'title can\'t be empty'}
}




module.exports = common;
