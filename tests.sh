# This file is used to test the backend API's
# You may add "| json_pp" after each cURL request to
# output a formatted JSON data

# Fetch all categories
curl --request GET http://localhost:8000/api/categories/

# Fetch reviews for the product with the id 1
curl --request GET http://localhost:8000/api/reviews/?product=1

# Update vote_count for review with the id 1 using patch
# We change the vote_count to 5
curl --request PATCH http://localhost:8000/api/reviews/1/ \
    -d '{"vote_count":5}' \
    -H 'Content-Type: application/json'