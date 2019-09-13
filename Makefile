install:
	npm install

start:
	npx babel-node src/bin/brain-even.js
	npx babel-node src/bin/brain-games.js
	npx babel-node src/bin/brain-calc.js

test:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .