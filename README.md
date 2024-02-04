# Description
This is a simple GraphQL PI server that allows a user to access data of a game which include `Game`, `Author` and `Reviews`.   
Here, a file system was used as a database but any database can ne used. 

## Query Sample
```
query ExampleQuery($authorId: ID!) {
  authors {
    id
    reviews {
      id
      rating
    }
  }
  games {
    id
    reviews {
      id
      rating
    }
  }
  reviews {
    id
    game {
      id
      platform
    }
    author {
      id
      name
    }
  }
  author(id: 2) {
    id
    name
  }
}
```

## Query Result
```
{
  "data": {
    "authors": [
      {
        "id": "1",
        "reviews": [
          {
            "id": "2",
            "rating": 2
          }
        ]
      },
      {
        "id": "2",
        "reviews": [
          {
            "id": "3",
            "rating": 4
          }
        ]
      },
      {
        "id": "3",
        "reviews": [
          {
            "id": "1",
            "rating": 5
          }
        ]
      }
    ],
    "games": [
      {
        "id": "1",
        "reviews": [
          {
            "id": "1",
            "rating": 5
          }
        ]
      },
      {
        "id": "2",
        "reviews": [
          {
            "id": "3",
            "rating": 4
          }
        ]
      },
      {
        "id": "3",
        "reviews": [
          {
            "id": "2",
            "rating": 2
          }
        ]
      }
    ],
    "reviews": [
      {
        "id": "1",
        "game": {
          "id": "1",
          "platform": [
            "Switch"
          ]
        },
        "author": {
          "id": "3",
          "name": "Angela"
        }
      },
      {
        "id": "2",
        "game": {
          "id": "3",
          "platform": [
            "Netflix, AZE",
            "Youtube"
          ]
        },
        "author": {
          "id": "1",
          "name": "Charles"
        }
      },
      {
        "id": "3",
        "game": {
          "id": "2",
          "platform": [
            "KCC, Switch"
          ]
        },
        "author": {
          "id": "2",
          "name": "Andrew"
        }
      }
    ],
    "author": {
      "id": "2",
      "name": "Andrew"
    }
  }
}
```
