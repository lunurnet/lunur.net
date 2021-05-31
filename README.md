# lunur.net

official website deployed @ [lunur.net](https://lunur.net)

## Development Environment

Install the dependencies:

```bash
yarn install
```

Run the the development server:

```bash
yarn gulp
```

Compile, minify, and/or copy files for distribution:

```bash
yarn gulp build
```

## Files

This very simple project expects only two files `./src/index.html` and `./src/styles.css`. Both of these files get compiled and/or minified during the build process. Any additional assets (such as images) should be placed in `./src/assets`.
