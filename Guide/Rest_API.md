# REST API

Below are a set of example request that you can run on this restapi:

## Get list of Word Types

### Request

`GET /wordTypes`

### Response

```JSON
[
    {
        "id": 1,
        "title": "Noun"
    },
    {
        "id": 2,
        "title": "Verb"
    },
    {
        "id": 3,
        "title": "Adjective"
    },
    {
        "id": 4,
        "title": "Adverb"
    },
    {
        "id": 5,
        "title": "Pronoun"
    },
    {
        "id": 6,
        "title": "Preposition"
    },
    {
        "id": 7,
        "title": "Conjunction"
    },
    {
        "id": 8,
        "title": "Determiner"
    },
    {
        "id": 9,
        "title": "Exclamation"
    }
]
```

## Get list of Word Under Word Typer

> Using the id we get from the Word Type request to fetch all the words for that type

### Request

`GET /words/:id`

> Using the following request `/words/8` for the response shown below

### Response

```JSON
[
    {
        "id": 3711,
        "title": "a",
        "fk_type_id": 8
    },
    {
        "id": 3712,
        "title": "an",
        "fk_type_id": 8
    },
    {
        "id": 3713,
        "title": "the",
        "fk_type_id": 8
    },
    {
        "id": 3714,
        "title": "this",
        "fk_type_id": 8
    },
    {
        "id": 3715,
        "title": "that",
        "fk_type_id": 8
    },
    {
        "id": 3716,
        "title": "these",
        "fk_type_id": 8
    },
    {
        "id": 3717,
        "title": "those",
        "fk_type_id": 8
    },
    {
        "id": 3718,
        "title": "my",
        "fk_type_id": 8
    },
    {
        "id": 3719,
        "title": "your",
        "fk_type_id": 8
    },
    {
        "id": 3720,
        "title": "his",
        "fk_type_id": 8
    },
    {
        "id": 3721,
        "title": "her",
        "fk_type_id": 8
    },
    {
        "id": 3722,
        "title": "its",
        "fk_type_id": 8
    },
    {
        "id": 3723,
        "title": "our",
        "fk_type_id": 8
    },
    {
        "id": 3724,
        "title": "their",
        "fk_type_id": 8
    },
    {
        "id": 3725,
        "title": "many",
        "fk_type_id": 8
    },
    {
        "id": 3726,
        "title": "much",
        "fk_type_id": 8
    },
    {
        "id": 3727,
        "title": "more",
        "fk_type_id": 8
    },
    {
        "id": 3728,
        "title": "most",
        "fk_type_id": 8
    },
    {
        "id": 3729,
        "title": "some",
        "fk_type_id": 8
    }
]
```

## Create a new sentence

### Request

`POST /sentence`

#### Params

> Note: this POST requst object was randomly created to test if the request is successful

```JSON
{
    "sentence": "Wow! Easter Saturday"
}
```

### Response

```JSON
{
    "id": 2,
    "sentence": "Wow! Easter Saturday"
}
```

## Get list of Sentences

### Request

`GET /sentences`

### Response

```JSON
[
    {
        "id": 1,
        "sentence": "Wow! Easter Saturday"
    }
]
```
