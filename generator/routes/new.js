app.get((req, res) => { 

    res.json({
        req:req.method,
        data: "This is GET"
    })
});

app.put('/test',(req, res) => { 

    res.json({
        req: req.method,
        data: "This is PUT"
    })
});

const db = {
    id : [
    {"Title": "Guardians of the Galaxy Vol. 2"},
]};
