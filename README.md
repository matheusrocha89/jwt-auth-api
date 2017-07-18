# JWT Auth API

This project is a Microservice that provides a token to authenticate a user.

## How to install

At first, you need to install Docker in your machine. Then run the code bellow on terminal:

```
sudo docker-compose up
```

Just it.

## How to use it

I recommend to install [Postman](https://www.getpostman.com/) to make the requests.

1. Sign up:

Open Postman and choose a POST request. The path is:

```
http://localhost:5000/api/register
```

In the "Body" section, select `x-www-form-urlencoded`. Pass an `email` (write your email) followed by a `password` (choose your password).

2. Auth:

Still in POST request:

```
http://localhost:5000/api/authenticate
```

In the "Body" section, select `x-www-form-urlencoded`. Pass the `email` previously chosen and the `password` in the same way. You will receive in the response body a token. Copy it now.

3. My messages:

Change to a GET request

```
http://localhost:5000/api/chat
```

In the "Header" section, write as key `Authorization` and paste your token in the value field. Probably you will receive an empty array in the response body, because you don't have messages yet.

4. Create some other user as test

5. Open some Mongo GUI like Robomongo or MongoDB Compass and copy the _id of the user created in the previous step

6. Send a message:

Select POST request again

```
http://localhost:5000/api/chat
```

In the "Body" section, select `x-www-form-urlencoded`. Put a `to` key and the id of the user copied in the step 5. Pass too a `message_body` key with the content of message in the value field. In the "Headers" section, put a second key called `Authorization` with your token.

7. Authenticate the user created in the step 4

8. Get the messages of this user as showed in the step 3