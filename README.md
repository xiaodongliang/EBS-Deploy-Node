# Forge-Viewer-Workshop

## Setup
1. For using this sample, you need an Autodesk developer credentials. Visit the [Forge Developer Portal](https://developer.autodesk.com), sign up for an account, then [create an app](https://developer.autodesk.com/myapps/create). Finally make a copy of client id and client secret. 
2. Please use other ways to translate the source model to the format for Forge Viewer in advance. Get the model base64 urn.

## Local Test

1. Set enviroment variables. 

Mac OSX/Linux (Terminal). 
   
    export FORGE_CLIENT_ID=<<YOUR CLIENT ID FROM FORGE DEVELOPER PORTAL>>
    export FORGE_CLIENT_SECRET=<<YOUR FORGE CLIENT SECRET>>
    export FORGE_TEST_URN=<<YOUR FORGE TEST URN (with urn:)>> 
 
Windows (command line)

    set FORGE_CLIENT_ID=<<YOUR CLIENT ID FROM FORGE DEVELOPER PORTAL>>
    set FORGE_CLIENT_SECRET=<<YOUR FORGE CLIENT SECRET>>
    set FORGE_TEST_URN=<<YOUR FORGE TEST URN (with urn:)>> 

2. Run the project, it will open up a browser page with the model loaded in the page. http://localhost:1234

## Deploy by AWS

1. Make an zip of the source codes.
2. click the button below, and follow the steps in the [video]() to fill in the neccesary parameters of BeanStalk enviroment.

[![Deploy](https://s3.amazonaws.com/deploytomh/button-deploy-aws-mh.png)](https://console.aws.amazon.com/elasticbeanstalk/?region=us-west-2#/newApplication?applicationName=EBS-Deploy-Node&solutionStackName=Node.js) 

3. To deploy this project to AWS, be sure to set your environment variables in the console of BeanStalk.
- `FORGE_CLIENT_ID`
- `FORGE_CLIENT_SECRET`
- `FORGE_TEST_URN`

## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT). 
Please see the [LICENSE](LICENSE) file for full details.


## Written by 

[Xiaodong Liang](https://twitter.com/coldwood) <br />
Developer Advocate <br />
Autodesk Forge Partner Development
=======
![Forge JAVA SDK](https://img.shields.io/badge/Forge%20JAVA%20SDK-1.0.1-orange.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)
>>>>>>> fc4a6e301c3ef59953dd458463c6ba904ccef037
