# Website for Iowa City Game Dev Meetup

This project is built using the [Jekyll](https://jekyllrb.com/) static site generator, and it is hosted with [Github Pages](https://pages.github.com/). This project is set up to be able run using Docker, to make local development easier (otherwise you need to install Ruby). The instructions here assume you have [Docker Desktop](https://www.docker.com/products/docker-desktop) installed.

## Running locally

To run the project locally, open a command prompt to the project root and run `docker-compose up`. Once this is running, you'll be able to view the website at [http://localhost:4000](http://localhost:4000). The website will also auto-reload as you edit the code.

## Updating dependencies

In order to update the Ruby dependencies, open a command prompt to the project root and run `docker-compose -f docker-compose-update.yml up`. This will update the versions in the `Gemfile.lock` file.
