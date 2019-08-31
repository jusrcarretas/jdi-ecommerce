# JDI Ecommerce
Come, on. Just do it! Shop now, regret later!

JDI Ecommerce is an open source project built on React and Django. Its main purpose is to deliver a simple, yet elegant, and easy to deploy ecommerce web application.

![JDI Homepage](https://i.imgur.com/dthwe2q.png)

## Features
It's features are really simple, too! It couldn't get any more complicated.
- Add Product Review
- Upvote or Downvote Product Reviews

We provided these basic functionalities because we understand that customer reviews are highly important to businessmen. Their feedbacks could be studied to improve services.

## Installation and Setup
As we have adertised, it is very easy to deploy. Just follow these steps!
1. Clone the repository: `https://github.com/jusrcarretas/jdi-ecommerce.git`
2. Run `docker-compose build` in the directory root
3. Then run `docker-compose up`
4. Finally, initialize the database by running `docker exec -it jdi_django python manage.py migrate`

The application will then run at:
- [http://localhost:3000](http://localhost:3000)

Want some dummy data? Run this!
- `docker exec -it jdi_django python manage.py loaddata shop`

## Starting And Stopping The App
To stop the application properly, run:
- `docker-compose stop`

To start the application the next time, run:
- `docker-compose up`

## Tests
Tests are done via cURL commands. It makes it a lot easier to execute the same piece of API Calls over and over again.
1. Fetch all categories
```
curl --request GET http://localhost:8000/api/categories/
```
2. Fetch reviews by product_id
```
curl --request GET http://localhost:8000/api/reviews/?product=1
```
3. Update vote_count for a review
```
curl --request PATCH http://localhost:8000/api/reviews/1/ \
    -d '{"vote_count":5}' \
    -H 'Content-Type: application/json'
```
Running the bash script `tests.sh` will execute all three of the commands for you.
## Credits
Special thanks to the following:
- [Ant Design](https://ant.design/)
- [Materialize](https://materializecss.com/)
