# user-crud-server

It's a basic CRUD (Create, Read,
Update, Delete) API(s) implimented using node/express that allows users management. 
Hence, API(s) includes endpoints for creating, reading, updating, and deleting
users.

### How to setup locally:

#### For installing app packages, run following command in root directory of this project:
```
npm i
```
#### For starting app, run following command in root directory of this project:
```
node server.js
```

## Tech Used:

 - Node
 - Express library
 - Mongodb Atlas
 - Render (deploying)
 - npm (package manager)


## API Reference

 ### Inserting a User:

```http
  POST {{serverURL}}/users/
```
#### Request Body
```
{
    "name": "Manish Rana",
    "email": "manish.rana@gmail.com",
    "age": 23,
    "country": "india",
    "password": "ManishRana"
}
```
#### Response Body
```
{
    "message": "User created Successfully.",
    "userInfo": {
        "userId": "7828d659-0eb7-4b0c-b4d4-79bcf1ec181c",
        "name": "Manish Rana",
        "email": "manish.rana@gmail.com",
        "country": "india",
        "age": 23
    }
}
```

 ### Get All Users:

```http
  GET {{serverURL}}/users/
```

#### Response Body
```
{
    "message": "Users Doc fetched successfully.",
    "users": [
        {
            "userId": "7828d659-0eb7-4b0c-b4d4-79bcf1ec181c",
            "name": "Manish Rana",
            "email": "manish.rana@gmail.com",
            "country": "india",
            "age": 23
        }
    ]
}
```


 ### Get Specific User Info:

```http
  GET {{serverURL}}/users/:userId
```

| Parameter | Example Value     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `7828d659-0eb7-4b0c-b4d4-79bcf1ec181c` | uuid to access user Uniquely |


#### Response Body
```
{
    "message": "User info fetched successfully.",
    "user": {
        "name": "Manish Rana",
        "email": "manish.rana@gmail.com",
        "country": "india",
        "age": 23
    }
}
```

 ### Update User Info:

Only update specified field in requestBody, else remain unaffected.

```http
  PUT {{serverURL}}/users/:userId
```

| Parameter | Example Value     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `7828d659-0eb7-4b0c-b4d4-79bcf1ec181c` | uuid to access user Uniquely |


#### Request Body
```
{
    "name": "Manish Rana",
    "email": "manish.rana.engg@gmail.com",
    "age": 24,
    "country": "india new"
}
```

#### Response Body
```
{
    "message": "User info updated successfully.",
    "updatedUser": {
        "name": "Manish Rana",
        "email": "manish.rana.engg@gmail.com",
        "country": "india new",
        "age": 24
    }
}
```

### Delete a User:

```http
  DELETE {{serverURL}}/users/:userId
```
| Parameter | Example Value     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bookId`      | `7828d659-0eb7-4b0c-b4d4-79bcf1ec181c` | uuid to access user Uniquely |

#### Response Body
```
{
    "message": "user with userId: 7828d659-0eb7-4b0c-b4d4-79bcf1ec181c deleted successfully."
}
```






## Authors

- [@mannuR22](https://www.github.com/mannuR22)
