const express = require('express');
const sleep = require('sleep-promise');
const path = require("path");
const app = express();

app.use(express.static("./public"));

app.get("/a",async function(req,res){
    await sleep(3000);
    res.send("111")
})
app.get('/ajs',async (req,res)=>{
    await sleep(18000)
    res.sendFile(path.join(__dirname,"./static/a.js"))
})
app.get('/bjs',async (req,res)=>{
    await sleep(9000)
    res.sendFile(path.join(__dirname,"./static/b.js"))
})

app.get('/acss',async (req,res)=>{
    await sleep(6000)
    res.sendFile(path.join(__dirname,"./static/a.css"))
})

app.get('/cjs',async (req,res)=>{
    await sleep(1000)
    res.sendFile(path.join(__dirname,"./static/c.js"))
})
app.get('/djs',async (req,res)=>{
    await sleep(1000)
    res.sendFile(path.join(__dirname,"./static/d.js"))
})
app.get('/ejs',async (req,res)=>{
    await sleep(1000)
    res.sendFile(path.join(__dirname,"./static/e.js"))
})
app.get('/fjs',async (req,res)=>{
    await sleep(1000)
    res.sendFile(path.join(__dirname,"./static/f.js"))
})
app.get('/gjs',async (req,res)=>{
    await sleep(1000)
    res.sendFile(path.join(__dirname,"./static/g.js"))
})
app.get('/hjs',async (req,res)=>{
    await sleep(1000)
    res.sendFile(path.join(__dirname,"./static/h.js"))
})
app.get('/ijs',async (req,res)=>{
    await sleep(1000)
    res.sendFile(path.join(__dirname,"./static/i.js"))
})
app.get('/jjs',async (req,res)=>{
    await sleep(1000)
    res.sendFile(path.join(__dirname,"./static/j.js"))
})
app.get('/kjs',async (req,res)=>{
    await sleep(1000)
    res.sendFile(path.join(__dirname,"./static/k.js"))
})
app.get('/ljs',async (req,res)=>{
    await sleep(1000)
    res.sendFile(path.join(__dirname,"./static/l.js"))
})
app.get('/mjs',async (req,res)=>{
    await sleep(1000)
    res.sendFile(path.join(__dirname,"./static/m.js"))
})
app.get('/njs',async (req,res)=>{
    await sleep(1000)
    res.sendFile(path.join(__dirname,"./static/n.js"))
})



app.listen(3000,()=>{
    console.log("ok")
})