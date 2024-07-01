init: build up perm init-backend-env composer-install key-generate passport-keys docs-install docs perm db-migrate

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

composer-install:
	docker compose run --user=app php-fpm bash -cl \
		"composer install"

init-backend-env:
	cp ../backend/.env.docker ../backed/.env

key-generate:
	docker compose run --user=app php-fpm bash -cl \
		"php artisan key:generate"

passport-keys:
	docker compose run --user=app php-fpm bash -cl \
		"php artisan passport:keys"

docs:
	docker compose run --user=app php-fpm bash -cl \
		"php artisan apiato:apidoc"

db-migrate:
	docker compose run --user=app php-fpm bash -cl \
		"php artisan migrate"

node-exec:
	docker compose exec node bash

test:
	docker compose exec --user=app php-fpm bash -cl \
		"./vendor/bin/phpunit --stop-on-failure --stop-on-error --display-skipped ./app/"