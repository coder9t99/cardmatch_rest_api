
#### Operation : Lock

creates a lock/batch number as client's token to submit highscore data

endpoint: `/highscore/lock`

method: `GET`

sample output:
```javascript
{
    "error": false,
    "message": {
        "__v": 0,
        "lock": 2,
        "_id": "572dcce7a44b7fce4913f2a0"
    }
}
```


#### Operation : Locks

shows list of lock/batch numbers

endpoint: `/highscore/locks`

method: `GET`

sample output:
```javascript
{
    "error": false,
    "message": [
        {
            "_id": "572d8a37e7026e0c4e07f4cf",
            "lock": 1,
            "__v": 0
        },
        {
            "_id": "572d8a56e7026e0c4e07f4d0",
            "lock": 2,
            "__v": 0
        }
    ]
}
```


#### Operation : List Scores

shows all scores

endpoint: `/highscore`

method: `GET`

sample output:
```javascript
{
    "error": false,
    "message": [
        {
            "_id": "572d97008d4cc8a04ee41c41",
            "name": "quentin",
            "score": 15,
            "batch_tag": 1,
            "__v": 0
        },
        {
            "_id": "572d978460551ab14eb8b0ca",
            "name": "quentin",
            "score": 10,
            "batch_tag": 2
        },
        {
            "_id": "572d978460551ab14eb8b0cb",
            "name": "quentin",
            "score": 12,
            "batch_tag": 2
        },
        {
            "_id": "572d978460551ab14eb8b0cc",
            "name": "quentin",
            "score": 9,
            "batch_tag": 2
        }
    ]
}
```


#### Operation : Add Score

add a single score

endpoint: `/highscore`

method: `POST`

sample input:
```javascript
{
    "name" : "quentin",
    "score" : 15,
    "batch_tag" : 1
}
```

sample output:
```javascript
{
    "error": false,
    "message": "Data added"
}
```


#### Operation : Add Multiple Scores

add a single score

endpoint: `/highscore`

method: `POST`

sample input:
```javascript
[
    {
        "name" : "quentin",
        "score" : 10,
        "batch_tag" : 2
    },
    {
        "name" : "quentin",
        "score" : 12,
        "batch_tag" : 2
    },
    {
        "name" : "quentin",
        "score" : 9,
        "batch_tag" : 2
    }
]
```

sample output:
```javascript
{
    "error": false,
    "message": "Data added"
}
```


#### Operation : List Scores

shows all scores

endpoint: `/highscore/from_batch/:batch_number/take/:take/skip/:skip`

method: `GET`

sample url:
```
/highscore/from_batch/2/take/100/skip/300
```

sample output:
```javascript
{
    "error": false,
    "message": {
        "scores": [
            {
                "_id": "572d978460551ab14eb8b0cb",
                "name": "quentin",
                "score": 12,
                "batch_tag": 2
            },
            {
                "_id": "572d978460551ab14eb8b0cc",
                "name": "quentin",
                "score": 9,
                "batch_tag": 2
            }
        ],
        "totalCount": 302,
        "skip": 300
    }
}
```

