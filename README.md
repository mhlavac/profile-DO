# Local Development

To develop locally, first install npm dependencies and then start the application:

```shell
npm install --prefix=backend --include=dev
npm run --prefix=backend start
```

## Code Formatting

We use [Prettier](https://prettier.io/) for code formatting. Run it with:

```shell
npm run --prefix=backend prettier
npm run --prefix=frontend prettier
```

Or, configure your IDE to apply Prettier when saving files.

Prettier also runs in our GitHub pipelines, ensuring consistent code formatting. If it fails, do not merge the Pull Request.
