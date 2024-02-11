# lit-ts-monorepo-template

## Introduction and Purpose
Just had a mare getting it working, but this should be a good starting point. I find most template/starters give you way too much 'magic' and I like to understand everything that's going on. You can use this as your starting point than make your own decisions fairly easily.

There's proboally fancier ways of doing this but I like that I can easily see what's going on.

## Getting Started
### Installation
- Install PNPM globally. https://pnpm.io/installation
- Install Turbo Globally `pnpm install turbo --global`

### Running
You can run an individual component in demo mode or an app site by using
```
pnpm start
```

## Developing
You can automatically rebuild any components on change by running this command at the root-level of your project.
```
turbo dev
```
You will likely want to run this in addition to `pnpm start` on whichever component/site you are updating using two terminals.

### Create a New Lit Component
Copy the example component and rename the folder and 'name' in `package.json`.

### Bundling & Deployment
Using [parcel](#parcel) to bundle web apps. I think this allows you to deploy whereever you want but do you own research.

## Tooling
### PNPM
You will need to install this globally

Using [pnpm](https://pnpm.io/) as a package manager. My understanding is that this stops duplication in our node_modules directories for each workspace by symlinking to the top-level. This template is designed to work with PNPM so is a requirement.

### TurboRepo
You will need to install this globally

Using [TurboRepo](https://turbo.build/) feels like it might be overkill for what this template does, but I imagine it will be very easy to switch this tooling if desired. This template uses it to be able to run `turbo dev` at the root level of the project, which will re-build any TS into JS on change providing the `dev` script `tsc --watch"` is added to relevant workspace package.json files.

I believe we could replace Turbo by just adding relevant `references` entry into TSConfig files (So that TSC knows to also build those workspaces on change). But I didn't try this because I want to avoid duplicate dependency entry (i.e in package.json and in tsconfig).
```
"references": [
    { "path": "../dependent-package" }
  ]
```

### Parcel
Using [ParcelJS](https://parceljs.org/) to bundle. I just wanted something that would bundle easily from a HTML file, so that I wouldn't have to install lit apps that use the components (see [test site](apps/my-site/index.html)).

### Web Dev Server
[web dev server](https://modern-web.dev/docs/dev-server/overview/) just feels like the standard and seems to work well. Essentially it allows us to serve our sites or demo sites using `pnpm start` command: `wds --node-resolve --open --watch`. Running this on the relevant site alongside `turbo dev` at the root level allows you to see any updates in realtime.

### TSConfig
TSConfig might be a bit all over the place but I've added a system to [keep it consistent](packages/tsconfig/base.json) across different wporkspaces however you descide to configure it yourself.

## Lit
Can we all just use web components yet please?