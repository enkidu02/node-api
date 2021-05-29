## How to run this project

enter the project directory and run the following command

```
yarn install
yarn db:create
yarn db:migrate
yarn db:seeds
yarn dev // for development environment.
```

## Set environment

Please copy `.env.dist` file and rename to `.env` then override your environment value.

```
PORT=server_port
DB_HOST=database_host
DB_USERNAME=database_username
DB_PASSWORD=database_password
DB_PORT=database_port
```
