build:
	docker compose build

up:
	docker compose up --detach --remove-orphans --force-recreate

exec:
	docker compose exec --user=app php-fpm bash

stop:
	docker compose stop

perm:
	docker compose run php-fpm bash -cl \
		"/set_perm.sh app"

docs-install:
	docker compose run --user=app php-fpm bash -cl \
		"npm install"

docs:
	docker compose run --user=app php-fpm bash -cl \
		"php artisan apiato:apidoc"
