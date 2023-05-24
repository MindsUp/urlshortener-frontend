# Url shortener

Frontend repo for the url shortener project

## Local setup

This project will use node as a build tool, consider using [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating) for setting up your node version to 18

```shell
nvm i 18
```

This project will use `yarn` for dependencies management.
To download them run the command below:

```shell
yarn install
```

After that you can already start the app locally with:

```shell
yarn dev
```

## Code style

This project contains a `.prettierrc` file to ensure formmating, but also contains an `.editorconfig` to help with your IDE setup.

Consider installing a plugin for your IDE (if available) for Prettier and Editorconfig, so they will automatically comply with the defined rules.

The build pipeline will evaluate if the files are correctly formmated, you can always run the command below if you want all of your files to be automatically updated to the formatting rules:

```shell
yarn format
```

## Building

To create a production version of your app:

```bash
yarn build
```

You can preview the production build with `yarn preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

to Format yarn format
