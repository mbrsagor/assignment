# Assignment


## Setup

The following steps will walk you thru installation on a Mac. I think Linux should be similar. It's also possible to develop on a Windows machine, but I have not documented the steps. If you've developed django app on Windows, you should have little problem getting up and running.

### Prerequisites

- Python 3.8.5
- Django 3.1.6
- postgres  12.5

###### Backend API
```
git clone https://github.com/mbrsagor/assignment.git
cd assignment
virtualenv venv --python=python3.8.5
source venv/bin/activate
./manage.py migrate
./manage.py createsuperuser
./manage.py runserver
```
