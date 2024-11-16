 <pre> 
   db.articles.find({ title: { $regex: /mongodb/i } }); // Finds articles with "mongodb" in the title (case insensitive).

  ..

 const express = require("express");
const app = express();
const PORT = 8000;

// In-memory storage for rooms
let rooms = {};

// Middleware to parse JSON
app.use(express.json());

// Route to create a new room
app.post("/create-room", (req, res) => {
  const { roomId } = req.body;
  if (!rooms[roomId]) {
    rooms[roomId] = [];
    res.status(200).send(`Room ${roomId} created`);
  } else {
    res.status(400).send(`Room ${roomId} already exists`);
  }
});

// Route to join a room
app.post("/join-room", (req, res) => {
  const { roomId, userId } = req.body;
  if (rooms[roomId]) {
    if (!rooms[roomId].includes(userId)) {
      rooms[roomId].push(userId);
      res.status(200).send(`User ${userId} joined room ${roomId}`);
    } else {
      res.status(400).send(`User ${userId} is already in room ${roomId}`);
    }
  } else {
    res.status(404).send(`Room ${roomId} not found`);
  }
});

// Route to list users in a room
app.get("/room/:roomId", (req, res) => {
  const { roomId } = req.params;
  if (rooms[roomId]) {
    res.status(200).json({ users: rooms[roomId] });
  } else {
    res.status(404).send(`Room ${roomId} not found`);
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



  package main

import (
    "github.com/gin-gonic/gin"
    "net/http"
)

// Struct to define a simple item
type Item struct {
    ID   int    `json:"id"`
    Name string `json:"name"`
}

var items = []Item{
    {ID: 1, Name: "Item 1"},
    {ID: 2, Name: "Item 2"},
}

func main() {
    r := gin.Default()

    // GET endpoint to fetch all items
    r.GET("/items", func(c *gin.Context) {
        c.JSON(http.StatusOK, items)
    })

    // POST endpoint to create a new item
    r.POST("/items", func(c *gin.Context) {
        var newItem Item
        if err := c.ShouldBindJSON(&newItem); err != nil {
            c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
            return
        }
        items = append(items, newItem)
        c.JSON(http.StatusCreated, newItem)
    })

    // Start the server
    r.Run(":8080")
}


  
</pre>
 
