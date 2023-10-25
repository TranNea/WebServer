
//chạy trên 1 port
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   // Read the HTML file
//   fs.readFile('index.html', (err, data) => {
//     if (err) {
//       res.writeHead(404, { 'Content-Type': 'text/html' });
//       res.end('404 Not Found');
//     } else {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(data);
//     }
//   });
// });

// const port = 3000;

// server.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

/////////////////////////////////////
//chạy trên 1 port có nhiều file html
// const express = require('express');
// const app = express();
// const path = require('path');

// // Đường dẫn tới thư mục chứa các file HTML
// const publicDirectoryPath = path.join(__dirname, 'public');

// // Cấu hình đường dẫn tĩnh để phục vụ các file HTML
// app.use(express.static(publicDirectoryPath));

// // Khởi động máy chủ và lắng nghe cổng 3000
// app.listen(3000, () => {
//   console.log('Máy chủ đang chạy trên cổng 3000!');
// });
/////////////////////////////////////
//chạy nhiều website trên nhiều port

// const express = require('express');
// const path = require('path');

// // Website 1 - Cổng 3000
// const app1 = express();
// const publicDirectoryPath1 = path.join(__dirname, 'public1');
// app1.use(express.static(publicDirectoryPath1));

// app1.listen(3000, () => {
//   console.log('Website 1 đang chạy trên cổng 3000!');
// });

// // Website 2 - Cổng 4000
// const app2 = express();
// const publicDirectoryPath2 = path.join(__dirname, 'public2');
// app2.use(express.static(publicDirectoryPath2));

// app2.listen(4000, () => {
//   console.log('Website 2 đang chạy trên cổng 4000!');
// });
////////////////////////////////////
//CHAY WEB TREN GIAO THUC HTTPS
// const express = require('express');
// const path = require('path');
// const https = require('https');
// const fs = require('fs');
// // Certificate
// const privateKey = fs.readFileSync('localhost.key');
// const certificate = fs.readFileSync('localhost.crt');

// const credentials = {
//   key: privateKey,
//   cert: certificate,
// };
// // Website 1 - Cổng 3000
// const app1 = express();
// const publicDirectoryPath1 = path.join(__dirname, 'public1');
// app1.use(express.static(publicDirectoryPath1));
// const server1 = https.createServer(credentials, app1);
// server1.listen(3000, () => {
//   console.log('Website 1 đang chạy trên cổng 3000 với HTTPS!');
// });
// // Website 2 - Cổng 4000
// const app2 = express();
// const publicDirectoryPath2 = path.join(__dirname, 'public2');
// app2.use(express.static(publicDirectoryPath2));
// const server2 = https.createServer(credentials, app2);
// server2.listen(4000, () => {
//   console.log('Website 2 đang chạy trên cổng 4000 với HTTPS!');
// });
/////////////////////////
const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

// Certificate
const privateKey = fs.readFileSync('localhost.key');
const certificate = fs.readFileSync('localhost.crt');

const credentials = {
  key: privateKey,
  cert: certificate,
};

// Thêm đoạn domain đã sửa
const domain1 = 'www.NamNhanKhoi.com';
const domain2 = 'www.NamNhanKhoi2.com';

// Website 1 - Cổng 3000 và Tên miền ảo
const app1 = express();
const publicDirectoryPath1 = path.join(__dirname, 'public1');
app1.use(express.static(publicDirectoryPath1));

const server1 = https.createServer(credentials, app1);
server1.listen(3000, domain1, () => {
  console.log(`Website 1 đang chạy trên https://${domain1}:3000!`);
});

// Website 2 - Cổng 4000 và Tên miền ảo
const app2 = express();
const publicDirectoryPath2 = path.join(__dirname, 'public2');
app2.use(express.static(publicDirectoryPath2));

const server2 = https.createServer(credentials, app2);
server2.listen(4000, domain2, () => {
  console.log(`Website 2 đang chạy trên https://${domain2}:4000!`);
});
