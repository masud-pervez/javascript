<!-- commend: -->

## docker import commond

    systemctl status docker.service
    systemctl start docker.service
    systemctl stop docker.service

## docker ps all:

    docker ps --help

## docker node version check:

    docker run -it node

## docker build:

    docker build .

## build docker with tag name:

    docker build -t learn-docker:01 . (t means tag)

## all container show:

    docker ps -a

## running container show:

    docker ps

## docker run:

    docker run -p 3900:3900 imageId

    docker run gowtamkumar/learn-docker

## docker run background and create container and image

docker run -d -p 3900:4100 --name nodecontainer node

## docker container start:

    docker start containername

## docker container stop:

    docker stop containername

## docker container Delete:

    docker rm containername

## docker all image show:

    docker images

## docker all image delete:

    docker rmi imageId

## attach and detach container:

## docker single image details show:

    docker image inspect imageId

## docker tag and name:

    docker build -t learn_docker(name):21(tag)

## docker image push:

    docker push image_name;

## docker image pull:

    docker pull image_name;

## docker repository tag and name chnage and prepare push docker hub:

    docker tag name:tag gowtamkumar/learn-docker(fast local name and tag second docker hub name dite hobe)
    then rename korer por: docker push repositoryname:tagname(gowtamkumar/learn-docker:21)
    node: also you can same name build as like docker hub repository moto:

## docker build -t gowtamkumar/learn-docker:tagname

## all local image delete:

    docker image prune -a

## docker volume:

    docker volume --help

## docker unnecssery file remove

docker system prune -a

## pwd is route:

pwd

## check ip

ip a

## docker commands

    docker -version
    docker images
    docker ps
    docker ps -a
    docker run -d -p 3900:3900 image
    docker stop container_id
    docker rm container_id
    docker rmi image_id
    docker start cotnainer_id
    docker logs -f container_id
    docker logs -since=2h -f container_id
    docker exec -it container_id bash
    docker pull imagename

## docker compose commond

    docker-compose up
    docker-compose up -d
    docker-compose rm
    docker-compose down

## docker architecture

## docker volumes
    docker volume create volume name
