# Base URL:
```
https://localhost:4000/
```

# POST: /plants
body: 
    Example:
```json

{
    "plantName": "Dionae", 
    "grownPlantSize": "small",  // the options are: "small", "medium" or "large"
    "plantCategory": "Carnivora", 
    "image": "https://nomedositeefotoaqui.jpg",
    "donor": "Ana",
    "description": "Ama insetos"  // it's optional
}

```     

# GET: /plants 
Or you can use query string for 3 options (small, medium or large):
**GET: /plants?"grownPlantSize"=medium** 

# PATCH: /plants/:id
To change the status from "available" to "donated":

# DELETE: /plants/:id