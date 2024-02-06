# Description
This is a simple GraphQL PI server that allows a user to access data of a game which include `Game`, `Author` and `Reviews`.   
Here, a file system was used as a database but any database can ne used. 

## Query Sample
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

## Query Result
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

Response 
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