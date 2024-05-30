build:
	docker compose build

up:
	docker compose up --detach --remove-orphans --force-recreate

exec:
	docker compose exec --user=app php-fpm bash

stop:
	docker compose stop

perm:
	docker compose run php-fpm bash -c \
		"/set_perm.sh app"