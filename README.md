
Quality Hub Core BE

[![Maintainability](https://api.codeclimate.com/v1/badges/b8ab95377b571cceb25e/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/quality-hub-core-be/maintainability)  

[![Test Coverage](https://api.codeclimate.com/v1/badges/b8ab95377b571cceb25e/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/quality-hub-core-be/test_coverage)

Deployed on Heroku at [link].
[Deployment used by Labs19](https://qhub-core.herokuapp.com/)

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

For dynamic deployment, env-cmd is recommended. in the ./config directory you may specify different environment files for different purposes. For local development, the development.env file can be created and used. See Docker information below to more details.

- PRISMA_ENDPOINT - specifies prisma service endpoint.
- PRISMA_SECRET - specifies secret to access prisma.
- PRISMA_MANAGEMENT_API_SECRET - not in use. Specifies the secret to manage Prisma.
- PRISMA_PORT - Port on which Prisma service Runs
- APOLLO_PORT - Port on which Apollo Server Runs
- PG_USER - Postgres DB username.
- PG_PASSWORD - Postgres DB password.
  
 _ STAGING_DB - optional development db for using functionality not available in SQLite
_ NODE_ENV - set to "development" until ready for "production"
_ JWT_SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;_(-_=+)') for i in range(50)])
_ SENDGRID_API_KEY - this is generated in your Sendgrid account \* stripe_secret - this is generated in the Stripe dashboard

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.

# Local Development

Requirements: NodeJS, Prisma CLI, and Docker (Docker Desktop was used)

### Initialization

cd to src directory, check out a new feature branch using `git checkout -b <feature-name>`, make sure new feature branch is even with functional master branch (may be production in some cases).

Run `npm i` to install dependencies, check package.json to verify that `env-cmd` has been added.

Run `docker-compose up` to start a Docker container from `docker-compose.yml`

`docker-compose.yml` contains information which docker-compose will use to build the Prisma and Postgres services for this repository.

An .env file is needed at the root directory with the following variables defined:

- `PRISMA_ENDPOINT`, `PRISMA_SECRET`, `PG_USER`, `PG_PASSWORD`

cd to src/prisma and run `prisma deploy -e ..config/development.env`

This will build a Prisma service from prisma.yml and datamodel.prisma and deploy it according to the environment variables contained in src/config/development.env listed below

- `PRISMA_ENDPOINT`, `PRISMA_SECRET`, `PG_USER`, `PG_PASSWORD`, `JWT_SECRET`

cd to the parent directory `cd ..`

Run `npm run development` This executes the development script which assigns the .env variables to those contained in /config/development.env and will start an instance of node at the assigned port. _This endpoint will be specified in the Gateway's environment variable and assigned to its corresponding service._

### Updating Prisma Service

If changes are made to datamodel.prisma, the service will need to be deployed using `prisma deploy -e ../config/development.env` following that, the Prisma client will need to be generated. Run `prisma generate -e ../config/development.env` This updates src/generated with the latest version of Prisma Client.

### Seeding Data for Development

To add users from seed data to the database, run the following command from the /prisma directory: `prisma seed -e ../config/development`.
Seed data needs to be added for each database in the Federation and cannot be added across the Federation in one operation. InterviewQ and ResumeQ _reference_ users by id, but neither has any way to look up users. Additionally, user_ids cannot be hardcoded in the Core seed, as Prisma assigns the ID automatically. This means seed data needs to be extracted from the User table on the Core backend. The npm script `save_seeded_users` can be used to extract a JSON file from Prisma. This file will be used to provide needed user information for seeding data in ResumeQ and InterviewQ.
