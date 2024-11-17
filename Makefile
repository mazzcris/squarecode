watch:
	npx tailwindcss -i ./style/squarecode.css -o ./style/style.css --watch

install:
	npm install -D tailwindcss
	npx tailwindcss init