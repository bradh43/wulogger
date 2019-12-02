# WuLogger Website
## Getting Started
1. Download node, if on mac
    ```bash
    brew install node
    ```
2. Change directories into the react app
    ```bash
    cd react-app
    ```
3. Start the react app, and loaclhost:3000 will open up
    ```bash
    npm start
    ```

## Deploying React App to AWS
```bash
npm run build
aws s3 sync build s3://wulogger-hosting-react-bucket
```
