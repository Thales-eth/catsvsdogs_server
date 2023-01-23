| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/catfacts               | GET               | [catfacts]                           | Get all cat facts from the DB     |
| /api/catfacts/random        | GET               | {fact}                           | Get random cat fact from the DB     |
| /api/dogfacts               | GET               | [dogfacts]                           | Get all dog facts from the DB     |
| /api/dogfacts/random        | GET               | {fact}                           | Get random dog fact from the DB     |
| /api/users/list             | GET               | [users]                           | Get all users from the DB     |
| /api/users/getOneUser/:user_id    | GET               | {user}                            | Get single user from DB       |
| /api/users/editUser/:user_id      | PUT               | {user}                            | Edit one user from DB         |
| /api/users/deleteUser/:user_id     | DELETE            | {message: 'User deleted'}         | Delete a user                 |
| /api/auth/create            | POST              | {message: 'New User created!'}    | Create a new user             |
| /api/auth/login             | POST              | `Token`    | Log user in             |