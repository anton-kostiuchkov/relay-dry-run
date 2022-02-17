#!/usr/bin/env bash
set -e

if [[ -z $GITHUB_NPM_TOKEN ]]; then
  echo "❌ missing credentials, you need to log in Github"
else
  npm set //npm.pkg.github.com/:_authToken=$GITHUB_NPM_TOKEN 2>/dev/null

  echo "⚡ npm credentials to Github added"
fi

if [[ -z $NEXUS_NPM_TOKEN ]]; then
  echo "❌ missing credentials, you need to log in Nexus"
else
  npm set //nexus.collibra.com/repository/npm-repository/:_authToken=$NEXUS_NPM_TOKEN 2>/dev/null

  echo "⚡ npm credentials to Nexus added"
fi
