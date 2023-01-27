# Website for Iowa City Game Dev Meetup

## Development

### Tech stack

This project is built with the following technologies:

- **[Jekyll](https://jekyllrb.com/)**, for generating static site content from HTML templates and Markdown files.
- **[OCI Containers](https://opencontainers.org/)**, for running the project locally.
- **[EditorConfig](https://editorconfig.org/)**, for maintaining consistent code formatting between different editors.
- **[GitHub Pages](https://pages.github.com/)**, for free website hosting.

### Prerequisites

In order to run the project on your local machine, you'll need the following:

- **[Docker Desktop](https://www.docker.com/products/docker-desktop), or an equivalent tool that supports the Docker CLI:** This project is set up to run in development mode inside a container, to avoid having to manually install Ruby and Jekyll.
- **[EditorConfig](https://editorconfig.org/):** This is a tool for helping maintain consistent code formatting between different editors. Some editors/IDEs come with it preinstalled, but for others, you'll need to download it as an extension. When it's installed, it will automatically read the project's `.editorconfig` file and use the settings it specifies.

### Running locally

To run the project locally, open a command prompt to the project root and run `docker compose up --build`. Once this is running, you'll be able to view the website at [http://localhost:4000](http://localhost:4000). The website will also auto-reload as you edit the code.

### Updating dependencies

In order to update the Ruby dependencies to their latest versions, open a command prompt to the project root and run `docker compose -f docker-compose-update.yml up --build`. This will update the versions in the `Gemfile.lock` file.

### Deploying the website

Each time a new commit is pushed to the `master` branch, it will trigger the website to be built by Jekyll and then deployed to [https://iowacitygamedev.org](https://iowacitygamedev.org). To prevent changes from prematurely going live, all work should be done on the `develop` branch. Once it is ready to go live, it can then be merged into the `master` branch.

## Content

(Not yet written.)
