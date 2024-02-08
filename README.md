# Description
This is a simple GraphQL API server that allows a user to access associated data of a game which includes `Game`, `Author` and `Review`.   
Here, a file system was used as a database to keep it simple and focus on learning GraphQL but any database of choice can be used. 

## Installation
Fork this repo to have the repository in your GitHub account  
Clone the repository and cd into the project directory  
Run `npm install` or `yarn install` to install all project dependencies    
Run `npm start` or `yarn start` to start local server which will run on http://localhost:4000/

##
To run test, run:  
`NODE_OPTIONS="$NODE_OPTIONS --experimental-vm-modules" npx jest`

## Usage

### Query Samples
```
query ExampleQuery {
  authors {
    name
    verified
    reviews {
      rating
      content
    }
  }
  games {
    title
    platform
    reviews {
      rating
      content
    }
  }
  reviews {
    rating
    content
    game {
      platform
    }
    author {
      id
      name
    }
  }
}
```

#### Query Result
```
{
  "data": {
    "authors": [
      {
        "name": "Charles",
        "verified": true,
        "reviews": [
          {
            "rating": 2,
            "content": "Was good"
          }
        ]
      },
      ...
    ],
    "games": [
      {
        "title": "My title one",
        "platform": [
          "Switch"
        ],
        "reviews": [
          {
            "rating": 5,
            "content": "I loved it"
          }
        ]
      },
      ...
    ],
    "reviews": [
      {
        "rating": 5,
        "content": "I loved it",
        "game": {
          "platform": [
            "Switch"
          ]
        },
        "author": {
          "id": "3",
          "name": "Angela"
        }
      },
      ...
    ]
  }
}
```

```
query SingleQuery ($id: ID!){
  author(id: $id) {
    name
    verified
    reviews {
      rating
      content
    }
  }
}
```
#### Query Result
```
{
  "data": {
    "author": {
      "name": "Charles",
      "verified": true,
      "reviews": [
        {
          "rating": 2,
          "content": "Was good"
        }
      ]
    }
  }
}
```

```
mutation SingleMutation ($author: AddAuthorInput!){
  addAuthor(author: $author) {
    name
    verified
    reviews {
      rating
      content
    }
  }
}
```
#### Query Result
```
{
  "data": {
    "addAuthor": {
      "name": "John Doe",
      "verified": true,
      "reviews": []
    }
  }
}
```

## Built With
Node.js - The web tool used  
@apollo/server - To create GraphQL API seamlessly 

## Contributing: 
To contribute, raise an issue and it will be reviewed

## Author
[Amarachi Goodness](https://amarachigoodness74.vercel.app)

## License
This project is licensed under the ISC License