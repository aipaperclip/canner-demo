# gatsby-blog + prisma + canner

Demo of how to use [canner](https://www.canner.io)(CMS) + [gatsby](https://www.gatsbyjs.org/)(Site generator) + [prisma](https://www.prisma.io/)(Database).

To build your Blazing-fast website with Canner CMS, and store in Prisma graphQL.

## 1. Initial your Prisma project

Follow Prisma quick start to start your first project: https://www.prisma.io/docs/quickstart/

After these steps your get two files (`datamodel.graphql` and `prisma.yml`) that is needed in next step.

## 2. Copy Prisma files

Canner needs prisma's `datamodel.graphql` and `prisma.yml` to create a proxy server that deliver requests to your prisma server.

Copy these two files from your prisma project folder to `cert/prisma`

```
$ mkdir -p cert/prisma
$ cp path/to/prisma-project/prisma.yml ./cert/prisma
$ cp path/to/prisma-project/datamodel.graphql ./cert/prisma
```

## 3. Deploy your prisma settings

```
$ cd ./cert/prisma
$ prisma deploy
```

## 4. Serve your Canner CMS & website locally

Install Canner globally:

```
npm i -g @canner/cli
```

You could try your CMS locally, by enter

```
canner script:serve
```

open `http://localhost:9090`

```
npm run dev
```


## 5. Deploy to Canner

Login Canner & create new app:

```
$ canner login
$ canner init
```

Deploy your CMS

```
$ canner script:deploy
```

## 6. Deploy website

https://www.gatsbyjs.org/docs/deploy-gatsby/