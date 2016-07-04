# 公告板 (./bc)

get: {
  null
}

return (
  {
    'state': 'hello world!'
  }
)

# 欢迎页 (./wp)

get: {
  'name': { name },
  'gender': ['m'|'f']
}

post: {
  'name': { name },
  'gender': ['m'|'f']
}

return (
  {
    'state': 'hello, [Mr|Ms]. {name}!'
  }
)

# 注册 (./signup)

get: {
  'token': { token }
}

return (
  suc:{
    'code' : '1'
    'id' : { id }
  }
  fail:{
    'code' : '0'
    'codeState' : { ...codeState }
  }
)

# 登陆 (./signin)

post: {
  'id': { id }
  'token': { token }
}

return (
  suc:{
    'code' : '1'
    'notes' : { [noteid] }
  }
  fail:{
    'code' : '0',
    'codeState' : { ...codeState }
  }
)


# 记事本 (./note)

## (./note/add)

post: {
  'id' : { id },
  'note' : {
    'title': { title },
    'content': { content },
    'time' : { db.time() }
  },
}

return: (
  suc: {
    'code': '1',
    'noteid': { noteid },
  }
)

## (./note/query)

post: {
  'noteid': { id },
  'token': { token }
}

return: (
  suc: {
    'code': '1',
    'note' : {
      'title': { title },
      'content': { content },
      'time' : { time }
    },
  }
)

## (./note/del)

post: {
  'id': { id }
  'noteid': { noteid },
  'token': { token }
}

return: (
  suc: {
    'code': '1',
  }
)
