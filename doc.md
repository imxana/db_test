# 公告板 (./bc)

```
get: {
  null
}

return (
  {
    'state': 'hello world!'
  }
)
```

# 欢迎页 (./wp)

```
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
```
# 注册 (./signup)

```
post: {
  'name' : { name },
}

return (
  suc:{
    'code' : '1',
    'userid' : { userid }
  }
  fail:{
    'code' : { ErrorCode }
    'codeState' : { ...codeState }
  }
)
```

# 登陆 (./signin)

```
post: {
  'name' : { name },
}

return (
  suc:{
    'code' : '1'
    'userid' : { userid }
  }
  fail:{
    'code' : { ErrorCode },
    'codeState' : { ...codeState }
  }
)
```

# 记事本 (./note)


## (./note/add)

```
post: {
  'userid' : { userid },
  'title': { title },
  'content': { content },
}

return: (
  suc: {
    'code': '1',
    'noteid': { noteid },
  }
  fail:{
    'code': { ErrorCode },
    'codeState' : { ...codeState }
  }
)
```

## (./note/update)

```
post: {
  'userid' : { userid },
  'noteid': { noteid },
  'title': { title },
  'content': { content },
}

return: (
  suc: {
    'code': '1',
    'noteid': { noteid },
  }
  fail:{
    'code': { ErrorCode },
    'codeState' : { ...codeState }
  }
)
```

## (./note/show)

```
post: {
  'userid': { userid },
}

return: (
  suc: {
    'code': '1',
    'noteid': [ ...noteid ]
  }
  fail:{
    'code': { ErrorCode },
    'codeState' : { ...codeState }
  }
)
```

## (./note/query)

```
post: {
  'noteid': { noteid },
}

return: (
  suc: {
    'code': '1',
    'userid': { userid },
    'title': { title },
    'content': { content },
    'time' : { add-time }
  }
  fail:{
    'code': { ErrorCode },
    'codeState' : { ...codeState }
  }
)
```

## (./note/del)

```
post: {
  'userid': { userid },
  'noteid': { noteid },
}

return: (
  suc: {
    'code': '1',
  }
  fail:{
    'code': { ErrorCode },
    'codeState' : { ...codeState }
  }
)
```
