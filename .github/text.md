on:
push:
branches:

develop

jobs:
build:
runs-on: ubuntu-latest

    steps:


name: Checkout source code.
uses: actions/checkout@v3

name: Set up Node.js
uses: actions/setup-node@v3
with:
node-version: '16'

name: Install dependencies
run: npm install

name: Build
run: npm run build

name: Deploy
env:
AWS_ACCESS_KEY_ID: ${{ secrets.AKIA33L6M6KD6CX34A7W }}
AWS_SECRET_ACCESS_KEY: ${{ secrets.Yhn9Uxz45ElGUOlVvdaBc6nY6M+OI1uPvyz8BWaZ }}
run: |
aws s3 cp --recursive --region ap-northeast-2 dist s3://[mapletown]
