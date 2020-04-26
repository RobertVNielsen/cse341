const http = require("http")
function requestHandler(req, res) {
    const url = req.url
    const method = req.method
    
    if (url === '/') {
        res.write('<html>');
        res.write('<body>');
        
        res.write('<form action="./display" method="POST">');
        res.write('<input type="text" name="input1">');
        res.write('<input type="text" name="input2">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        
        res.write('<html>');
        res.write('<body>');
        return res.end(); 
    }
    
    if (url === "/display" && method === 'POST') {
        
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        const values = [];
        req.on('end', (chunk) => {
            let parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            parsedBody = parsedBody.split('&'); 

            for (let key_and_pair of parsedBody) {
                values.push(key_and_pair.split('=')[1]); 
            }
            console.log(values[1])
            res.write('<html>');
            res.write('<body>');
            res.write('<p>' + values[0] + ' ' + values[1] + '<p>')
            res.write('<html>');
            res.write('<body>');
            return res.end();
        })
        
    }
}

const server = http.createServer(requestHandler)

server.listen(3000)