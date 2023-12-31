const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./server2.html', (err, data) => {
        if (err) {
            throw err;
        }
        res.end(data);
    })
});
server.listen(3500);
server.on('listening', () => {
    console.log('3500번 포트에서 서버 대기 중입니다.');
});
server.on('error', (error) => {
    console.error(error);
})