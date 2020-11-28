# Adada - Client

Goals of the project :

- Provide an interface for adada-server
- Test NextJS
- Test StyleLint
- Test Webpack/Babel

## Stack

- React
- Axios
- NextJS
- Styled Components
- Typescript + type coverage check
- Eslint/prettier, stylelint
- Jest, TS-Jest, testing-library

### About linters

- `eslint` use `prettier` as code formatter
- `eslint` rules who are in conflict with `prettier` where disabled
- `prettier` check format
- `eslint` check style
- `stylelint` check css rules

## Project management

### Current sprint

#### Sprint 1
- [ ] Setup UI Library: storybook ?
- [x] Button component
- [x] Input component
- [x] Search form
- [x] Create API Types  
- [x] Create Fetch Utils
- [ ] Add type coverage
- [ ] Setup global stylesheet

### Backlog

### Completed sprints

#### Sprint 0

- [x] Setup GitHub repository : dev, gitignore
- [x] Setup Typescript
- [x] Setup NextJS
- [x] Setup StyledComponent
- [x] Setup StyleLint
- [x] Setup Eslint with prettier
- [x] Setup package.json
- [x] Setup UT framework : jest
- [x] Setup env variables : backend url
- [x] Deploy : Vercel / Netlify ?
- [x] Create Git precommit : eslint, stylelint and types check

## Notes & Ideas
- IDE linters integration on save: who provide configuration ? Lint report with hooks ?
- Is babel/webpack needed on Next projects ?
- Tets formik2 ? 
- Add typecoverage
- Remove Unit Tests : is Unit Tets usefull ? Test writing time vs debug time ? :/ 