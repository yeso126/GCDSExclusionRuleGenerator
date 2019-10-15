# GCDSExclusionRuleGenerator
This webapp generates exclusion rules for Google Cloud Directory Sync using a plain text email list. 


## Steps to run app locally using cli

Clone the repository, run the command: 

```
git clone https://github.com/yeso126/GCDSExclusionRuleGenerator.git

```
Install NodeJS 
Run the following commands 

```
npm install
node index.js 
```

If you're running from a chromebox you will need to install NodeJS using the following commands:

```
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
```
```
sudo apt-get install nodejs
```

## TODO

Webapp version in progress, refer to first commit for pseudo-cli tool, you need to add email addressses on the csv constant on the index file. 