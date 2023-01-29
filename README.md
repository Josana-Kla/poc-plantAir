# Base URL:
```
https://localhost:4000/
```

# POST: /plants
body: 
    Example:
```json
{
    "plantName": "Dionae", // must be unique
    "grownPlantSize": "small",  // the options are: "small", "medium" or "large" 
    "image": "https://sitenamewithphoto.jpg",
    "donorId": 1, // only one donorId is allowed for each plant
    "plantCategoryId": 1,
    "description": "Love insects"  // it's optional
}
```     

# GET: /plants 
Or you can use query string for 3 options (small, medium or large), for example:
**GET: /plants?grownPlantSize=medium** 

# PATCH: /plants/:id
To change the status from "available" to "donated":

# DELETE: /plants/:id

# POST: /categories
body:
    Example: 
```json
{
    "name": "carnivorous"           
}
```

# POST: /users
body:
    Example: 
```json
{
    "name": "Mary",           
    "photo": "https:profilephoto.jpg",
    "email": "ma@gmail.com",      
    "phone": "2345677532"        
}
```