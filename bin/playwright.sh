#! /bin/bash

# todo: find a way to make this portable for Windows users so it can be used for the package.json script

export PLAYWRIGHT_VERSION=$(pnpm ls --dev --depth=0 | grep playwright | awk '{print $2}')
TEST_TYPE=$1 docker-compose -f docker-compose.playwright.yml up \
    --abort-on-container-exit \
    --exit-code-from playwright
