# Personas Con Discapacidad (Disabled People)
This project is made for disabled people including people with mobility difficulties and blind people. Althougth every one can play as is not a restriction. 

The idea of this project is to create an adventure game using only the voice, so our good friend Google Assistant will help the player to complete the game.


## Setting up Dialogflow

Download the ZIP with the agent from [here](https://raw.githubusercontent.com/amerinoo/PersonasConDiscapacidad/master/agent/Agent_GDGxGood.zip) and import it to Dialogflow. As you will see, there is a link to my webhook in it, so you can change it for yours or just use mine to play with it.

This is the link to the official Dialogflow documentation, you can check it if you do not know how to import the agent in Dialogflow.

https://dialogflow.com/docs/agents/export-import-restore

## Setting up Cloud Functions (Webhook)
To get up and running quickly, do the following:

- [Sign up for a Firebase account](https://www.firebase.com/signup/)
- Install the Firebase CLI

```bash
$ npm install -g firebase-tools
```

- Set up firebase in your app

```bash
$ firebase init
```

- Change the default folder for the fuctions
```
echo {"functions": {"source": "."}} > firebase.json
rm -rf functions
```
- Run the pipeline

```bash
$ firebase deploy --only functions
```

- Open the Firebase function link in your browser to check whether you can get any response. Using the browser you will should get a reponse saying an intent is required. If so, everything is ok!!

- Put the link to your Cloud Function as a webhook in Dialogflow.

- Enjoy playing with it :)


