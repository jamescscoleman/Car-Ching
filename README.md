# Car-ching

https://www.figma.com/files/project/98076376/Team-project?fuid=1289659447150892822

Expo - react framework

npx create-expo-app

#npx create-react-app test-react-app

to run the app, cd in to directory and npm start

src/app.js contains the application code

store images in public



screen to work on :

let's get started page
enter 4 digit code screen


## True Setup 

Install VS code 
Install Bash 
Install Nodejs 
Install react native  - npm install -g react-native-cli



## react native 

react-native @@ 0.73.0 -install in ubuntu 20.04
npx react-native doctor 
need to install and set JAVA_HOME in ubuntu 

get nvm 
nvm install 18 
nvm use 18
https://github.com/nvm-sh/nvm

wsl --setdefault Ubuntu-20.04 # in powershell
NODE 18+ non LTS requires Ubuntu 20.04
REACT NATIVE REQUIRES NODE 18+ (using 20.10.0) # v14.17.3 (v18.19.0)

Ubu

get android studio - Android 13 (Tiramisu) SDK required 
https://developer.android.com/studio/index.html

settings for SDK manager:
Android SDK Platform 33
Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image


Update environment variable

configure AVD in android studio 

step 1:
Start Metro (JS build tool for React Native) - use npm start 
step 2:
start app in separate terminal 
npm run android 

run NPM start

npx react-native@latest init ReactNativeCarChingProject

cd into project directory and run 
npx react-native run-android



https://reactnative.dev/docs/environment-setup?guide=native&platform=android
https://reactnative.dev/docs/running-on-device


## react 

Success! Created new-react-app at ~/car-ching/new-react-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd new-react-app
  npm start



## Errors 

npm start not working, sh: 1: react-scripts: not found
soln: remove package-lock.json, run 
npm install react-scripts
then 
npm install 
then 
npm run start  (localhost:3000)


## Security Vulnerabilities
1 fixed with npm update @adobe/css-tools --depth 2
1 fixed updated postcss >=8.4.31 - npm install postcss@8.4.31
1 fixed updated nth-check >=2.0.1 - npm install nth-check@2.0.1

npm install npm@latest -g

$ npm audit 

                       === npm audit security report ===                              
                                                                                      
# Run  npm update @adobe/css-tools --depth 2  to resolve 1 vulnerability
┌───────────────┬──────────────────────────────────────────────────────────────┐      
│ Moderate      │ @adobe/css-tools Improper Input Validation and Inefficient   │      
│               │ Regular Expression Complexity                                │      
├───────────────┼──────────────────────────────────────────────────────────────┤      
│ Package       │ @adobe/css-tools                                             │      
├───────────────┼──────────────────────────────────────────────────────────────┤      
│ Dependency of │ @testing-library/jest-dom                                    │      
├───────────────┼──────────────────────────────────────────────────────────────┤      
│ Path          │ @testing-library/jest-dom > @adobe/css-tools                 │      
├───────────────┼──────────────────────────────────────────────────────────────┤      
│ More info     │ https://github.com/advisories/GHSA-prr3-c3m5-p7q2            │      
└───────────────┴──────────────────────────────────────────────────────────────┘      


┌──────────────────────────────────────────────────────────────────────────────┐      
│                                Manual Review                                 │      
│            Some vulnerabilities require your attention to resolve            │      
│                                                                              │      
│         Visit https://go.npm.me/audit-guide for additional guidance          │      
└──────────────────────────────────────────────────────────────────────────────┘      
┌───────────────┬──────────────────────────────────────────────────────────────┐      
│ Moderate      │ PostCSS line return parsing error                            │      
├───────────────┼──────────────────────────────────────────────────────────────┤      
│ Package       │ postcss                                                      │      
├───────────────┼──────────────────────────────────────────────────────────────┤      
│ Patched in    │ >=8.4.31                                                     │      
├───────────────┼──────────────────────────────────────────────────────────────┤      
│ Dependency of │ react-scripts                                                │      
├───────────────┼──────────────────────────────────────────────────────────────┤      
│ Path          │ react-scripts > resolve-url-loader > postcss                 │      
├───────────────┼──────────────────────────────────────────────────────────────┤      
│ More info     │ https://github.com/advisories/GHSA-7fh5-64p2-3v2j            │      
└───────────────┴──────────────────────────────────────────────────────────────┘      
┌───────────────┬──────────────────────────────────────────────────────────────┐      
│ High          │ Inefficient Regular Expression Complexity in nth-check       │      
├───────────────┼──────────────────────────────────────────────────────────────┤      
│ Package       │ nth-check                                                    │      
├───────────────┼──────────────────────────────────────────────────────────────┤      
│ Patched in    │ >=2.0.1                                                      │      
├───────────────┼──────────────────────────────────────────────────────────────┤      
│ Dependency of │ react-scripts                                                │      
├───────────────┼──────────────────────────────────────────────────────────────┤      
│ Path          │ react-scripts > @svgr/webpack > @svgr/plugin-svgo > svgo >   │      
│               │ css-select > nth-check                                       │      
├───────────────┼──────────────────────────────────────────────────────────────┤      
│ More info     │ https://github.com/advisories/GHSA-rp65-9cf3-cjxr            │      
└───────────────┴──────────────────────────────────────────────────────────────┘      
found 3 vulnerabilities (2 moderate, 1 high) in 1542 scanned packages
  run `npm audit fix` to fix 1 of them.
  2 vulnerabilities require manual review. See the full report for details.

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/ali113/car-ching.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/ali113/car-ching/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thanks to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
