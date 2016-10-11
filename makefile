start:
	@supervisor bin/www
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
nd:
	@curl -d 'userid=Yvo1D5X9p4c58GAJ&noteid=SrD4p6qbrL9JGEdv' 'http://localhost:3000/note/del'
ns:
	@curl -d 'userid=Yvo1D5X9p4c58GAJ' 'http://localhost:3000/note/show'
nq:
	@curl -d 'noteid=E5z3Szl0PMDbxGSY' 'http://localhost:3000/note/query'
ip:
		@ifconfig | grep "inet " | grep -v 127.0.0.1
lcj:
		@ssh ubuntu@myfickle.cn 
ssh:
		@ssh root@139.129.24.151
