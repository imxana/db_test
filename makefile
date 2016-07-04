bc:
	@curl http://localhost:3000/bc
wpg:
	@curl http://localhost:3000/wp?name=Ruri\&gender=f
wpp:
	@curl -d 'name=Ayase&gender=f' 'http://localhost:3000/wp'
