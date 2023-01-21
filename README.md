# NLW SETUP EDITION

## Dependencies to Install

- 


## Configurations to Lint and Commits

### commitizen
````
- npm i commitizen -g
- commitizen init cz-conventional-changelog --save-dev --save-exact

command: git cz
````

### husky (https://typicode.github.io/husky/#/)
````
- npm install husky -D
- npm pkg set scripts.prepare="husky install"
- npm run prepare
- npx husky add .husky/pre-commit "npm test"
````

### lint-stage (https://www.npmjs.com/package/lint-staged)
- verify all changed files by user
````
- npm i lint-staged -D

"lint-staged": {
  "*.js": [
    "es-lint --fix"
  ]
} 
````