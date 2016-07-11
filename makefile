start:
	@npm start
test:
	curl -d 'name=(haha=ha)' 'http://localhost:3000/test'
bc:
	@curl http://localhost:3000/bc
wpg:
	@curl http://localhost:3000/wp?name=Ruri\&gender=f
wpp:
	@curl -d 'name=Ayase&gender=f' 'http://localhost:3000/wp'
su:
	@curl -d 'name=Ruri' 'http://localhost:3000/signup'
si:
	@curl -d 'name=Ruri' 'http://localhost:3000/signin'
na:
	@curl -d 'userid=Yvo1D5X9p4c58GAJ&title=imodo&content=hmm!' 'http://localhost:3000/note/add'
