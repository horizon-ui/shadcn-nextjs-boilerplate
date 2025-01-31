nuclear:
	- docker stop $$(docker ps -a -q)
	- docker kill $$(docker ps -q)
	- docker rm $$(docker ps -a -q)
	- docker rm $$(docker ps -a -q)
	- docker rmi $$(docker images -q)
	- docker system prune --all --force --volumes

dcup-dev:
	docker compose up

dcup-prod:
	docker compose -f ./docker-compose.prod.yaml up

dcup-prod-d:
	docker compose -f ./docker-compose.prod.yaml up -d

dc-down:
	docker compose down

dc-clear:
	docker compose down