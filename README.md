# WUSTL Logger
Website where runners can log runs and share with others.

## Getting Started
Clone the project
```bash
git clone https://github.com/bradh43/wulogger.git
```
If on mac install homebrew
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
Install NPM
```bash
brew install npm
```

## Architecture
<p align="center">
  <img width="460" height="300" src="wulogger.png">
</p>


# WUXC LogARun

Prat and I have sort of decided that we want to run with the LogARun remake. It will give us a chance to practice on a pretty full-stack project, plus it would be applicable for the team at some point.

# Implementation

Not sure what other people think about for front-end/server/database stuff, but there are a ton of options that we can look towards for different aspects of the project.

## Front-End Stuff

Per usual this is typically HTML/CSS, but there are certainly other frameworks that we can use. React is becoming the new standard, yet it may be sorta confusing for people who aren't totally up to speed with HTML and such. I know that Brad has done stuff in React, I use it at work, and maybe Prat (?) has used it before.

Angular is another option that we could do, although this is starting to become less popular. If we want to learn stuff that will be applicable in a few years, this may not be the route to go.

Vue.JS is new (?) and I'm not that familiar with it at all. I know that it can be used but I recommend this not end up being our mode of front end development.

Of course, we could always default to static HTML pages just to start. I'm getting pretty comfortable converting static HTML stuff into React Components; even if people aren't that comfortable building out everything in React, I would probably be able to convert stuff into the correct framework to make everything look clean.

Prat: I would like to learn to use React since it got brought up in 2 interviews. We should not stick with default static HTML since it doesn't allow for us to learn as Nate and I already have experience with it from classes and such so we should work with something we can't learn in class.

Nate: I did one assignment with React in 204 and would like more work with it. Agree to start with static HTML prob.

## Server-side

We would certainly need to figure out where we're hosting this stuff. We could run a Node.JS server up on an EC2 instance, but this would cost us money if we want full up time. My brother and I are currently running through another project to get used to a bunch of AWS integration, so we might also be able to run stuff through AWS Lambda functions.

We could also host stuff through some other form of server farm or something if anyone has any other ideas concerning this.

Prat: AWS or Microsoft Azure offer some free cloud services

## Database / Data Storage

Loads of ways we could approach this portion. MongoDB has some pretty decent infrastructure for larger data sets (assuming this ends up being used and we need to start storing logs somewhere). Firebase through Google is another option, but I'm not sure if it scales super well. We could also look into something from AWS (DynamoDB through AWS, S3) or other large-scale data storage options (Oracle's MySQL, PostgreSQL).

Prat: MongoDB is free, but space is VERY limited on there. MySQL and old fashion sql servers are always possible. How good is DynamoDB? -Does it offer more space than MongoDB for free?

Nate: Currently working with mysql for work lol. seems old.

## Project Tracking

Not really necessary but it is nice to have something that would help us track what needs to be done/things that people could work on. We use PivotalTracker at work, but we would have to pay if we all want to hop on there (plus it can be a little overwhelming for something that is less serious). GitHub projects is pretty well integrated and would allow us to tie commits/pull requests to specific issues. That's definitely my choice, or at least what I think would fit this project in its current state.

Prat: PivotalTracker allows for 3 free users. Azure's Agile management tool allows for 5 free. Jira sucks.

Nate: lol im worthless on here. but wanna try and help.

## Example

My brothers and I are currently building out another project, so I sort of have an idea of how things should line up for something to be self-sufficient.

- *Front-end:* Using React to build out components, clearly HTML and SCSS off of that.
- *Server-side:* Using AWS API Gateway to handle incoming requests, pushing through AWS Lambda (Python).
- *Database/Storage:* Using AWS DynamoDB for connected users, AWS S3 to store other data.
- *Project Tracking:* Using PivotalTracker, but this is difficult with >3 people
- *Miscellaneous:* Using AWS Cognito to track user profiles, AWS CloudWatch for error logging

This takes a decent amount of setup to get things running, so it's possible that we could move everything over to there once things get off the ground.

## Features

(Zac) - Agree with everything here, I think LogARun had some stuff that seemed silly but actually have pretty great qualities (mileage for shoes, showing the entire team at once, public/private profiles, etc...)

(Nate) - looks dope. Thinking of random things to add (potentially): route ran, be able to link vids/images, tag people in logs that links their profile. With customized workouts, have spot for split times for each rep and display nicely. Add type of run (workout, race, run, etc.) and be able to sort a person's calendar by that type. Profile Pictures! Be able to view an individual by week (aka not having to click everyday to read log). 

So the basic features of the logging app will incorporate a lot of logarun style plus blog style posts.
  - user profiles
    - private profiles
    - public profiles
  - Logging runs
    - calender style
    - title of logs plus description of log
    - ability to view personal calender and team calendar.
    - mileage, distance, shoes
      - set default shoes
      - retire shoes
      - see mileage on shoes
    - customized workouts
      - ability to create workouts and use by name.
      - search by workout
      - workouts should be able to be created by team for individual on team or (lesser idea) by individual for individual.
        The reason by team for individuals is because the workouts are mainly made by the coach so people can search by workouts and
        and see their workouts as well as other who did that workout.
        For example 4-2-2 is a workout name but the workout can be defined by the individual as like 4x(4-2-2) or 3(4-2-2) + 1600s in-outs. This way different variations of the same workouts aren't defined as different workouts. The only issue I see with this is if an individuals use this tool to log without being on a team.
        (Zac) I agree this could be difficult with individual loggers, but easier if we had custom workouts
     - ability to comment on runs
  - Creating/Joining a team
    - private teams
    - public teams (maybe?)
    - leaving/kicking from a team
    - transfer of ownership of team
  - ability to add eomjis in log description (Lia's request)
  - Leaderboard for weekly mileage
  - tag user profiles in description and comments, giving notifications to tagged user
    - i don't know how useful this would be, but just throwing ideas out there
    - (Zac) 100% agree this should be included. Even something similar like **@Prat** or something

 ## Dumb Features - Place for dumb ideas that aren't important but can be used once a year
  - Export data from user profile of runs and average paces by day.
  - Export data from TEAM of runs and average paces
  - Define less than 5 emojis to classify runs  (can't have too many ways to classify runs)
  - ability to flag personal run as pain sensitive. Shows up as red on your calender. Easier to find runs where you felt exceptionally bad or something hurt.
  - (Zac) Depending on how far we get, could do on-the-fly analysis of pace/sentiment/mileage or whatever
