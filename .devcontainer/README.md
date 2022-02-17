# Dev container

## Setup

This project dev environment can be automatically setup in a container by following those simple steps:

1. Run docker on your local OS
2. Open repository folder in [vscode](https://code.visualstudio.com/)
3. Install [remote development plugin](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
4. Duplicate **`.env`** template to **`.env.local`**
5. Fill your credentials in **`.env.local`**
6. Use the command palette or the bottom left corner button to execute **Remote-Containers: Reopen in Container**

**✨ Wait for the container to start, open a terminal and start coding**

☕ _The first setup can take quite some time, be patient_

## Credentials

[**Github Personal Access Token**](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

```
GITHUB_NPM_TOKEN
```

**Collibra Nexus npm token:** in your **`$HOME/.npmrc`** after a **`npm login --registry=https://nexus.collibra.com/repository/npm-repository/`**

```
NEXUS_NPM_TOKEN
```
