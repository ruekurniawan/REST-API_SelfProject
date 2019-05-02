# REST-API_SelfProject

# server

List of basic routes role Admin:

| ROUTE             | HTTP | HEADER(S) |     BODY     |   DESCRIPTION   |
| ----------------- | ---- | --------- | ------------ | --------------- |
| `api/users/register'` | **POST** | `none` | `firstName: String (`**`Required`**`), lastName: String (`**`Required`**`), email: String (`**`Required`**`), password: String (`**`Required`**`), role: String (`**`Required`**`)` | Create a New User |
| `api/users/login` | **POST** | `none` | `email: String (`**`Required`**`), password: String (`**`Required`**`)` | Login user |
| `api/users'` | **POST** | `token` | `firstName: String (`**`Required`**`), lastName: String (`**`Required`**`), email: String (`**`Required`**`), password: String (`**`Required`**`)` | Create a New User |
| `api/users` | **GET** | `token` | `none` | List user |
| `api/users/:id'` | **GET** | `token` | `none` | Get One User |
| `api/users/:id` | **PUT** | `token` | `firstName: String, lastName: String` | Updated user |
| `api/users/:id` | **DELETE** | `token` | `none` | Updated user |

### POST api/users/register
Success (201)
```
{
    "userCreate": {
        "id": 1,
        "firstName": "Rudy",
        "lastName": "Kurniawan",
        "email": "rudykurniawan@gmail.com",
        "password": "$2b$08$deNdnMmYaA4hKNmGUD73YO3iA.UZC6Jc8V96NSD8k/YyzS2ftSBWu",
        "role": "admin"
    },
    "message": "Success Create User"
}
```
Error (500)
```
{
    "name": "SequelizeValidationError",
    "errors": [
        {
            "message": "Email has been used",
            "type": "Validation error",
            "path": "email",
            "value": "rudykurniawan@gmail.com",
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "firstName": "Rudy",
                "lastName": "Kurniawan",
                "email": "rudykurniawan@gmail.com",
                "password": "$2b$08$vUesezAnB.l.MxfBQCqxhuVboweG1IbbVkECxXjrNu6VisR6hbrBu",
                "role": "admin"
            },
            "validatorKey": "isUnique",
            "validatorName": null,
            "validatorArgs": [],
            "original": {}
        }
    ]
}
```
Error (500)
```
{
    "name": "SequelizeValidationError",
    "errors": [
        {
            "message": "Please enter your First Name",
            "type": "notNull Violation",
            "path": "firstName",
            "value": null,
            "origin": "CORE",
            "instance": {
                "id": null,
                "role": "User"
            },
            "validatorKey": "is_null",
            "validatorName": null,
            "validatorArgs": []
        },
        {
            "message": "Please enter your Last Name",
            "type": "notNull Violation",
            "path": "lastName",
            "value": null,
            "origin": "CORE",
            "instance": {
                "id": null,
                "role": "User"
            },
            "validatorKey": "is_null",
            "validatorName": null,
            "validatorArgs": []
        },
        {
            "message": "Please enter your email",
            "type": "notNull Violation",
            "path": "email",
            "value": null,
            "origin": "CORE",
            "instance": {
                "id": null,
                "role": "User"
            },
            "validatorKey": "is_null",
            "validatorName": null,
            "validatorArgs": []
        },
        {
            "message": "Please enter your Password",
            "type": "notNull Violation",
            "path": "password",
            "value": null,
            "origin": "CORE",
            "instance": {
                "id": null,
                "role": "User"
            },
            "validatorKey": "is_null",
            "validatorName": null,
            "validatorArgs": []
        }
    ]
}
```
### POST api/users/login
Success(200)
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJydWR5a3Vybmlhd2FuQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NjczNjgwOX0.enALEMD5fknR85fNew92RH5DuK6v1mS5w0FuoYzOTpY",
    "role": "admin"
}
```
Error(500) if email & password empty AND if email & password wrong 
```
{
    "message": "Invalid Email/ Password"
}
```

### POST api/users
Success(201)
```
{
    "person": {
        "role": "User",
        "id": 12,
        "firstName": "Arief",
        "lastName": "Rachman",
        "email": "arief@gmail.com",
        "password": "$2b$08$TO1ES00PvMNsUv8df1sLXOkrvZtQeJe444qArVeCXMGBNtl1EAzpe"
    },
    "message": "Create Success"
}
```
Error(500) if email & password empty AND if email & password wrong 
```
{
    "name": "SequelizeValidationError",
    "errors": [
        {
            "message": "Please enter your First Name",
            "type": "notNull Violation",
            "path": "firstName",
            "value": null,
            "origin": "CORE",
            "instance": {
                "role": "User",
                "id": null
            },
            "validatorKey": "is_null",
            "validatorName": null,
            "validatorArgs": []
        },
        {
            "message": "Please enter your Last Name",
            "type": "notNull Violation",
            "path": "lastName",
            "value": null,
            "origin": "CORE",
            "instance": {
                "role": "User",
                "id": null
            },
            "validatorKey": "is_null",
            "validatorName": null,
            "validatorArgs": []
        },
        {
            "message": "Please enter your email",
            "type": "notNull Violation",
            "path": "email",
            "value": null,
            "origin": "CORE",
            "instance": {
                "role": "User",
                "id": null
            },
            "validatorKey": "is_null",
            "validatorName": null,
            "validatorArgs": []
        },
        {
            "message": "Please enter your Password",
            "type": "notNull Violation",
            "path": "password",
            "value": null,
            "origin": "CORE",
            "instance": {
                "role": "User",
                "id": null
            },
            "validatorKey": "is_null",
            "validatorName": null,
            "validatorArgs": []
        }
    ]
}
```

Error(404)
```
{
    "message": "You Must be Login"
}
```

### GET api/users
Success(200)
```
[
    {
        "id": 1,
        "firstName": "Rudy",
        "lastName": "Kurniawan",
        "email": "rudykurniawan@gmail.com",
        "password": "$2b$08$deNdnMmYaA4hKNmGUD73YO3iA.UZC6Jc8V96NSD8k/YyzS2ftSBWu",
        "role": "admin"
    },
    {
        "id": 11,
        "firstName": "Rudy",
        "lastName": "Kurniawan",
        "email": "rudy@gmail.com",
        "password": "$2b$08$v4ZyF22PgHfVx9Gvvv6U1ejHQ6pbGBRtg/HFi01Ah24vD9tFIfnsi",
        "role": "admin"
    },
    {
        "id": 12,
        "firstName": "Arief",
        "lastName": "Rachman",
        "email": "arief@gmail.com",
        "password": "$2b$08$TO1ES00PvMNsUv8df1sLXOkrvZtQeJe444qArVeCXMGBNtl1EAzpe",
        "role": "User"
    }
]
```

Error(404)
```
{
    "message": "You Must be Login"
}
```

### GET api/users/:id
Success(200)
```
{
    "id": 12,
    "firstName": "Arief",
    "lastName": "Rachman",
    "email": "arief@gmail.com",
    "password": "$2b$08$TO1ES00PvMNsUv8df1sLXOkrvZtQeJe444qArVeCXMGBNtl1EAzpe",
    "role": "User"
}
```
Error (404)
```
{
    "message": "You Must be Login"
}
```

### PUT api/users/:id
Success(200)
```
{
    "updateUser": [
        1
    ],
    "message": "Success updated"
}
```

Error (404)
```
{
    "message": "You Must be Login"
}
```

### DELETE api/users/:id
Success(200)
```
{
    "deleteUser": 1,
    "message": "Success deleted"
}
```

Error (404)
```
{
    "message": "You Must be Login"
}
```

## Usage

Make sure you have **Node.js** and **npm** installed in your computer, and then run these commands:
```
$ npm install
$ npm run start
```

Access apps on `http://localhost:8080`