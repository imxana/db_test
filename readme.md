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

post: {
  'name' : { name }
  'token': { token }
}

return (
  suc:{
    'code' : '1',
    'userid' : { userid }
  }
  fail:{
    'code' : '0'
    'codeState' : { ...codeState }
  }
)



# 登陆 (./signin)

post: {
  'name' : { name }
  'token': { token }
}

return (
  suc:{
    'code' : '1'
    'userid' : { userid }
  }
  fail:{
    'code' : '0',
    'codeState' : { ...codeState }
  }
)


# 记事本 (./note)


## (./note/add)

post: {
  'userid' : { userid },
  'title': { title },
  'content': { content },
  'time' : { time }
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
    'title': { title },
    'content': { content },
    'time' : { time }
  }
  fail:{
    'code': '0',
    'codeState' : { ...codeState }
  }
)


## (./note/del)

post: {
  'userid': { userid }
  'noteid': { noteid },
  'token': { token }
}

return: (
  suc: {
    'code': '1',
  }
  fail:{
    'code': '0',
    'codeState' : { ...codeState }
  }
)
