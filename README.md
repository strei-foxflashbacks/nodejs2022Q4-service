# Home Library Service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone https://github.com/strei-foxflashbacks/nodejs2022Q4-service.git
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm run test
```

To run only one of all test suites

```
npm run test -- <path to suite>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization

```
npm run test:auth -- <path to suite>
```

### Auto-fix and format

```
npm run lint
```

```
npm run format
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging

## Usage

### GET Users

Returns json data of users database.

* **URL**

    `/user`

* **Method**

    `GET`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    None

* **Data Params**

    None

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    [
      {
        "id": "string", // uuid v4
        "login": "string",
        "version": "number", // integer number, increments on update
        "createdAt": "number", // timestamp of creation
        "updatedAt": "number" // timestamp of last update
      }
    ]
    ```

* **Error Response**

    None


### GET User

Returns json data of specified user by id.

* **URL**

    `/user/:id`

* **Method**

    `GET`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    {
      "id": "string", // uuid v4
      "login": "string",
      "version": "number", // integer number, increments on update
      "createdAt": "number", // timestamp of creation
      "updatedAt": "number" // timestamp of last update
    }
    ```

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "User id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "User not found",
      "error": "Not Found"
    }
    ```

### POST User

Adds a new user to database and returns json data of it.

* **URL**

    `/user`

* **Method**

    `POST`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    None

* **Data Params**

    ```JSON
    {
      "login": "string",
      "password": "string"
    }
    ```

* **Sucess Response**

    **Code:** 201 <br />
    **Content:**
    ```JSON
    {
      "id": "string", // uuid v4
      "login": "string",
      "version": "number", // integer number, increments on update
      "createdAt": "number", // timestamp of creation
      "updatedAt": "number" // timestamp of last update
    }
    ```

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 400,
      "message": "User is missing required fields",
      "error": "Bad Request"
    }
    ```

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 400,
      "message": "Invalid input",
      "error": "Bad Request"
    }
    ```

### Update User

Updates a user specified by id and returns data of it.

* **URL**

    `/user/:id`

* **Method**

    `PUT`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    `:id`

* **Data Params**

    ```JSON
    {
      "oldPassword": "string", // previous password
      "newPassword": "string" // new password
    }
    ```

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    {
      "id": "string", // uuid v4
      "login": "string",
      "version": "number", // integer number, increments on update
      "createdAt": "number", // timestamp of creation
      "updatedAt": "number" // timestamp of last update
    }
    ```

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "User id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "User not found",
      "error": "Not Found"
    }
    ```

    **Code:** 403 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 403,
      "message": "Old password is incorrect",
      "error": "Forbidden"
    }
    ```

### DELETE User

Deletes a user specified by id and returns success confirmation.

* **URL**

    `/user/:id`

* **Method**

    `DELETE`

* **Headers**

    None

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 204 <br />
    **Headers**

    None

    **Content:**

    None

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "User id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "User not found",
      "error": "Not Found"
    }
    ```

### GET Artists

Returns json data of artists database.

* **URL**

    `/artist`

* **Method**

    `GET`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    None

* **Data Params**

    None

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    [
      {
        "id": "string", // uuid v4
        "name": "string",
        "grammy": "boolean"
      }
    ]
    ```

* **Error Response**

    None


### GET Artist

Returns json data of specified artist by id.

* **URL**

    `/artist/:id`

* **Method**

    `GET`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    {
      "id": "string", // uuid v4
      "name": "string",
      "grammy": "boolean"
    }
    ```

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Artist id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Artist not found",
      "error": "Not Found"
    }
    ```

### POST Artist

Adds a new artist to database and returns json data of it.

* **URL**

    `/artist`

* **Method**

    `POST`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    None

* **Data Params**

    ```JSON
    {
      "name": "string",
      "grammy": "boolean"
    }
    ```

* **Sucess Response**

    **Code:** 201 <br />
    **Content:**
    ```JSON
    {
      "id": "string", // uuid v4
      "name": "string",
      "grammy": "boolean"
    }
    ```

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 400,
      "message": "Artist is missing required fields",
      "error": "Bad Request"
    }
    ```

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 400,
      "message": "Invalid input",
      "error": "Bad Request"
    }
    ```

### Update Artist

Updates an artist specified by id and returns data of it.

* **URL**

    `/artist/:id`

* **Method**

    `PUT`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    `:id`

* **Data Params**

    ```JSON
    {
      "name": "string",
      "grammy": "boolean"
    }
    ```

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    {
      "id": "string", // uuid v4
      "name": "string",
      "grammy": "boolean"
    }
    ```

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Artist id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Artist not found",
      "error": "Not Found"
    }
    ```

### DELETE Artist

Deletes an artist specified by id and returns success confirmation.

* **URL**

    `/artist/:id`

* **Method**

    `DELETE`

* **Headers**

    None

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 204 <br />
    **Headers**

    None

    **Content:**

    None

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Artist id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Artist not found",
      "error": "Not Found"
    }
    ```

### GET Albums

Returns json data of albums database.

* **URL**

    `/album`

* **Method**

    `GET`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    None

* **Data Params**

    None

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    [
      {
        "id": "string", // uuid v4
        "name": "string",
        "year": "number",
        "artistId": "string | null" // refers to Artist
      }
    ]
    ```

* **Error Response**

    None


### GET Album

Returns json data of specified album by id.

* **URL**

    `/album/:id`

* **Method**

    `GET`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    {
      "id": "string", // uuid v4
      "name": "string",
      "year": "number",
      "artistId": "string | null" // refers to Artist
    }
    ```

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Album id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Album not found",
      "error": "Not Found"
    }
    ```

### POST Album

Adds a new album to database and returns json data of it.

* **URL**

    `/album`

* **Method**

    `POST`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    None

* **Data Params**

    ```JSON
    {
      "name": "string",
      "year": "number",
      "artistId": "string | null" // refers to Artist
    }
    ```

* **Sucess Response**

    **Code:** 201 <br />
    **Content:**
    ```JSON
    {
      "id": "string", // uuid v4
      "name": "string",
      "year": "number",
      "artistId": "string | null" // refers to Artist
    }
    ```

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 400,
      "message": "Album is missing required fields",
      "error": "Bad Request"
    }
    ```

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 400,
      "message": "Invalid input",
      "error": "Bad Request"
    }
    ```

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Artist id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Artist not found",
      "error": "Not Found"
    }
    ```

### Update Album

Updates an album specified by id and returns data of it.

* **URL**

    `/album/:id`

* **Method**

    `PUT`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    `:id`

* **Data Params**

    ```JSON
    {
      "name": "string",
      "year": "number",
      "artistId": "string | null" // refers to Artist
    }
    ```

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    {
      "id": "string", // uuid v4
      "name": "string",
      "year": "number",
      "artistId": "string | null" // refers to Artist
    }
    ```

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Album id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Album not found",
      "error": "Not Found"
    }
    ```

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Artist id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Artist not found",
      "error": "Not Found"
    }
    ```

### DELETE Album

Deletes an album specified by id and returns success confirmation.

* **URL**

    `/album/:id`

* **Method**

    `DELETE`

* **Headers**

    None

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 204 <br />
    **Headers**

    None

    **Content:**

    None

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Album id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Album not found",
      "error": "Not Found"
    }
    ```

### GET Tracks

Returns json data of tracks database.

* **URL**

    `/track`

* **Method**

    `GET`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    None

* **Data Params**

    None

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    [
      {
        "id": "string", // uuid v4
        "name": "string",
        "year": "number",
        "artistId": "string | null", // refers to Artist
        "albumId": "string | null", // refers to Album
        "duration": "number"
      }
    ]
    ```

* **Error Response**

    None


### GET Track

Returns json data of specified track by id.

* **URL**

    `/track/:id`

* **Method**

    `GET`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    {
      "id": "string", // uuid v4
      "name": "string",
      "year": "number",
      "artistId": "string | null", // refers to Artist
      "albumId": "string | null", // refers to Album
      "duration": "number"
    }
    ```

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Track id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Track not found",
      "error": "Not Found"
    }
    ```

### POST Track

Adds a new track to database and returns json data of it.

* **URL**

    `/track`

* **Method**

    `POST`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    None

* **Data Params**

    ```JSON
    {
      "name": "string",
      "year": "number",
      "artistId": "string | null", // refers to Artist
      "albumId": "string | null", // refers to Album
      "duration": "number"
    }
    ```

* **Sucess Response**

    **Code:** 201 <br />
    **Content:**
    ```JSON
    {
      "id": "string", // uuid v4
      "name": "string",
      "year": "number",
      "artistId": "string | null", // refers to Artist
      "albumId": "string | null", // refers to Album
      "duration": "number"
    }
    ```

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 400,
      "message": "Track is missing required fields",
      "error": "Bad Request"
    }
    ```

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 400,
      "message": "Invalid input",
      "error": "Bad Request"
    }
    ```

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Artist id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Artist not found",
      "error": "Not Found"
    }
    ```

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Album id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Album not found",
      "error": "Not Found"
    }
    ```

### Update Track

Updates a track specified by id and returns data of it.

* **URL**

    `/track/:id`

* **Method**

    `PUT`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    `:id`

* **Data Params**

    ```JSON
    {
      "name": "string",
      "year": "number",
      "artistId": "string | null", // refers to Artist
      "albumId": "string | null", // refers to Album
      "duration": "number"
    }
    ```

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    {
      "id": "string", // uuid v4
      "name": "string",
      "year": "number",
      "artistId": "string | null", // refers to Artist
      "albumId": "string | null", // refers to Album
      "duration": "number"
    }
    ```

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Track id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Track not found",
      "error": "Not Found"
    }
    ```

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Artist id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Artist not found",
      "error": "Not Found"
    }
    ```

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Artist id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Artist not found",
      "error": "Not Found"
    }
    ```

### DELETE Track

Deletes a track specified by id and returns success confirmation.

* **URL**

    `/track/:id`

* **Method**

    `DELETE`

* **Headers**

    None

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 204 <br />
    **Headers**

    None

    **Content:**

    None

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Track id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Track not found",
      "error": "Not Found"
    }
    ```

### GET Favorites

Returns json data of favorites database.

* **URL**

    `/favs`

* **Method**

    `GET`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    None

* **Data Params**

    None

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    {
      "artists": [
        {
          "id": "string", // uuid v4
          "name": "string",
          "grammy": "boolean"
        }
      ],
      "albums": [
        {
          "id": "string", // uuid v4
          "name": "string",
          "year": "number",
          "artistId": "string | null" // refers to Artist
        }
      ],
      "tracks": [
        {
          "id": "string", // uuid v4
          "name": "string",
          "artistId": "string | null", // refers to Artist
          "albumId": "string | null", // refers to Album
          "duration": "number" // integer number
        }
      ],
    }
    ```

* **Error Response**

    None

### Add Artist to Favorites

Adds an artist id to favorite artists database.

* **URL**

    `/favs/artist/:id`

* **Method**

    `POST`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 201 <br />
    **Content:**
    ```JSON
    {
      "message": "Artist added to favorites"
    }
    ```

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Artist id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 422 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 422,
      "message": "Artist with this id doesn't exist",
      "error": "Unprocessable Entity"
    }
    ```

### DELETE Artist from Favorites

Deletes an artist from favorite artists database.

* **URL**

    `/favs/artist/:id`

* **Method**

    `DELETE`

* **Headers**

    None

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 204 <br />
    **Headers**

    None

    **Content:**

    None

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Artist id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Artist not found",
      "error": "Not Found"
    }
    ```

### Add Album to Favorites

Adds an album id to favorite albums database.

* **URL**

    `/favs/album/:id`

* **Method**

    `POST`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 201 <br />
    **Content:**
    ```JSON
    {
      "message": "Album added to favorites"
    }
    ```

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Album id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 422 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 422,
      "message": "Album with this id doesn't exist",
      "error": "Unprocessable Entity"
    }
    ```

### DELETE Artist from Favorites

Deletes an album from favorite albums database.

* **URL**

    `/favs/album/:id`

* **Method**

    `DELETE`

* **Headers**

    None

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 204 <br />
    **Headers**

    None

    **Content:**

    None

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Album id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Album not found",
      "error": "Not Found"
    }
    ```
### Add Track to Favorites

Adds a track id to favorite tracks database.

* **URL**

    `/favs/track/:id`

* **Method**

    `POST`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 201 <br />
    **Content:**
    ```JSON
    {
      "message": "Track added to favorites"
    }
    ```

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Track id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 422 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 422,
      "message": "Track with this id doesn't exist",
      "error": "Unprocessable Entity"
    }
    ```

### DELETE Track from Favorites

Deletes a track from favorite tracks database.

* **URL**

    `/favs/track/:id`

* **Method**

    `DELETE`

* **Headers**

    None

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 204 <br />
    **Headers**

    None

    **Content:**

    None

* **Error Response**

    **Code:** 400 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statuscode": 400,
      "message": "Track id is invalid (or not UUID)",
      "error": "Bad Request"
    }
    ```

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'application/json`

    **Content:** <br />
    ```JSON
    {
      "statusCode": 404,
      "message": "Track not found",
      "error": "Not Found"
    }
    ```