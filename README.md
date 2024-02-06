# Description
This is a simple GraphQL API server that allows a user to access associated data of a game which include `Game`, `Author` and `Reviews`.   
Here, a file system was used as a database to keep it simple and focus on learning GraphQL but any database of choice can be used. 

## Query Samples
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

### Query Result
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
### Query Result
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
### Query Result
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