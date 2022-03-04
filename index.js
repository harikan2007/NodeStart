const http = reqire("http")
const server = createServer((req, res) => {
    console.log(req.url)
    res.end("hello node.js!")
})
server.listen(3000)