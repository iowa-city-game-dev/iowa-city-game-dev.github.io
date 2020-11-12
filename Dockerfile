FROM jekyll/jekyll:3.8.6

COPY --chown=jekyll:jekyll ./Gemfile ./Gemfile.lock ./
RUN bundle install

COPY --chown=jekyll:jekyll . .
CMD jekyll serve --force_polling --livereload
