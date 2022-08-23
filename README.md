# PipedriveHomework
Hello!

Description of the task: This is a Readme file for the Pipedrive QA engineer interview. As part of the assignment I should choose a feature to create a test plan, test the feature, report bugs and build an automation framework.

## Definition of the feature and test plan

I chose the adding new deals as my main task for this the scenarios as can be seen in the test plan, it consists in 2 test scenarios: 1 for a inclusion of a new deal and checking if the data is consistent with the data the was inputed in the file, the second test cases consists in try to add a new deal and getting an error message for the missing mandatory field. For this task I'm using the gherkin syntax, the reason for that is since I have to create the test plan and also the automation, using the test plan as an asset for the automation is an efficient way to better manage time.
#### [Test plan](https://github.com/filipeferreira86/PipedriveHomework/blob/main/cypress/e2e/features/deal.feature)

## Bugs

### [BugReport]()

## Automation framework
### Installations

1) Install the node https://nodejs.org/en/download/ for your operational system
2) Instal mpn:
  ```
  npm install -g npm
  ```
3) clone this project local

Obs: check if you have the browser that you want to run this automation instaled on the machine

### Runing the automation local
To run this automation framework you need to go to the folder of this project and type one of the command below in the terminal:

open cypress ```mpn run cypress:open```

Electron headless ```mpn run cypress:runDefault```

Chrome ```mpn run cypress:runChrome```

Chrome headless mode ```mpn run cypress:runChromeHeadless```

Edge ```mpn run cypress:runEdge```

Edge headless mode ```mpn run cypress:runEdgeHeadless```

Firefox ```mpn run cypress:runFirefox```

Firefox headless mode ```mpn run cypress:runFirefoxHeadless```

### Configuration for running on Jenkins pipeline
Below is an example of how to build a basic pipeline for this automation on jenkins, in this I'm using Chrome as the browser but you can use any other browser that you have in the machine, VM or docker that is running this.

1) Add the adress of this repository to the repository list in pipeline
2) On the build step in the "execute windows batch command" input this: ```npm i```
3) Add a new step for "execute windows batch command" and input this: ```npx run cypress run --headless --browser chrome```
