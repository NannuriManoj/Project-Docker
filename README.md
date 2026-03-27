# Dockerized Fastify App with PostgreSQL

## Project Overview

This project demonstrates how to containerize a simple Node.js (Fastify) backend application and run it along with a PostgreSQL database using Docker and Docker Compose. The goal of this project is to understand how multi-container applications work and how Docker is used in real-world backend development.

## Tech Stack

* Node.js (Fastify)
* PostgreSQL
* Docker
* Docker Compose

## What This Project Includes

* Dockerfile for building the Node.js application
* Docker Compose to run multiple containers
* PostgreSQL container for database
* Docker volume for database persistence
* Docker network for container communication
* Environment variables for configuration

## Project Structure

```
project-root
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── package.json
├── src/
│   └── app.js
└── README.md
```

## How to Run the Project

1. Build and start containers:

```
docker compose up --build
```

2. Run in detached mode:

```
docker compose up --build -d
```

3. Stop containers:

```
docker compose stop
```

4. Start existing containers:

```
docker compose start
```

5. Stop and remove containers:

```
docker compose down
```

## Container Communication

The application container communicates with the database container using the service name defined in Docker Compose.

Example:

* Database Host: `db`
* Database Port: `5432`

## Data Persistence

PostgreSQL data is stored using Docker volumes, so data will not be lost even if the container is removed.

## Key Learnings

* How to write a Dockerfile
* How to use Docker Compose
* Multi-container setup
* Docker volumes for persistence
* Docker networks for communication
* Environment variables in Docker
