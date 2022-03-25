# React-Firebase-Boilerplate

## Setup Guide

- [x] create a new firebase project, make sure firestore and storage are initialized
- [x] create a new webapp for this project, and update config in `src/components/App.js`
- [x] export admin sdk credentials file from firebase console and upload to folder backend/credentials
- [x] set `credentialFileName` in `init-dev-env.js`
- [x] set `storageBucketName` in `init-dev-env.js` by opening firebase console => storage => copy the storage id
- [x] test if the dev environment loads
- [x] connect firebase: `firebase login`, then run `firebase init` and choose `existing project`.
- [x] replace project name inside `.firebaserc`
- [ ] replace project name inside `package.json`
- [ ] run `npm run deploy` to deploy the frontend.
- [ ] run `firebase deploy --only functions` to deploy testfunctions
- [ ] you are ready to go! 🥳

## Deploy Frontend

```bash
npm run deploy # builds react project and deploys to firebase hosting
```

## Command History
**all bash commands used to create this boilerplate**
(**(CREATED WITH CREATE REACT APP)**)[https://github.com/facebook/create-react-app]
```bash
npx create-react-app react-firebase-boilerplate --use-npm
npm install react-router-dom
npm install react-icons
npm install firebase
npm install node-sass
```
