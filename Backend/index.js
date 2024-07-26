// write basic express boiler plate code.
//write express.json() middleware

const express = require("express");
const { createTodo } = require("./types");
const { updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrond inputs",
        })
        return;
    }
    //put it in mongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function (req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrond inputs",
        })
        return;
    }
    //update = { {condition} ,{which thing to update}}
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.delete("/todos/:id", async function (req, res) {
    const { id } = req.params;
    let delTodo = await todo.findByIdAndDelete(id);

    console.log(delTodo);
    if (!delTodo) {
        return res.status(404).json({
            msg: "Todo not found"
        });
    }
    res.json({
        msg: "Todo marked as completed"
    })
});

app.listen(3000);
