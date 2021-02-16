# Assignment OMDb API

> The simple application I have developed a `Full-stack` project where has two part one backend and last one frontend. Backend used `Django` frontend used `React-redux` and `JWT` token based authentication system.

## Setup

The following steps will walk you thru installation on a Mac. I think Linux should be similar. It's also possible to develop on a Windows machine, but I have not documented the steps. If you've developed django & react app on Windows, you should have little problem getting up and running.

### Prerequisites

- Python 3.8.5
- Django 3.1.6

###### Backend API
```base
git clone https://github.com/mbrsagor/assignment.git
cd assignment
virtualenv venv --python=python3.8.5
source venv/bin/activate
./manage.py migrate
./manage.py createsuperuser
./manage.py runserver
```

###### Frontend React-redux
- NPM 6.14.8
- Node v14.4.0

```base
cd omdbapi-frontend
npm install
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


#### Table of content:
- User login
- User Registration
- Dashboard list of movies.
- Search movie by title
- Follow best practices
- Well documenation :-)
