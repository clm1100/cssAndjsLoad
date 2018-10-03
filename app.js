const express = require('express');
const sleep = require('sleep-promise');
const path = require("path");
const app = express();
const fs = require('fs');
app.use(express.static("./public"));

app.get("/a",async function(req,res){
    await sleep(3000);
    res.send("111")
})
app.get('/ajs',async (req,res)=>{
    await sleep(3000)
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

var concat1 = function(buf1, buf2) {
    var tmp = new Buffer(buf1.length + buf2.length);
    buf1.copy(tmp, 0);
    buf2.copy(tmp, buf1.length);
    return tmp;
  }


app.post('/upload',(req,res)=>{
    var chunks = [];
    var size = 0;
    req.on('data',(chunk)=>{
        console.log(chunk);
        chunks.push(chunk);
         size += chunk.length;
    })
    req.on('end',()=>{
        var buf = Buffer.concat(chunks, size);
        fs.writeFile("./data.jpg",buf,(err)=>{
            if(err) return res.send(err.message);
            res.send("ok")
        })
    })
})


app.get('/page',async (req,res)=>{
    res.type('html')
    // res.writeHead(200,{
    //     "Transfer-Encoding": "chunked"
    // })
    res.write("ok ");
    await new Promise((resolve,reject)=>{
        setTimeout(resolve,3000)
    })
    res.write("ok1111");
    res.end();
})



const sleep1 = ms => new Promise(r => setTimeout(r, ms))

app.get('/page1',async (req,res)=>{
    res.type('html');   
  res.write('loading...<br>')
  
  return sleep1(2000).then(function() {
    res.write(`timer: 2000ms<br>`)
    return sleep1(5000)
  })
  .then(function() {
    res.write(`timer: 5000ms<br>`)
  }).then(function() {
    res.end()
  })
})




app.listen(3000,()=>{
    console.log("ok")
})