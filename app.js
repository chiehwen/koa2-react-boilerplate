// 載入 koa v2.x
import Koa from 'koa';
import serve from 'koa-static';

const path = require('path');
const port = process.env.PORT || 3000;

// 初始化 Koa
const app = new Koa();

// 處理在 public/ 下的靜態檔案
app.use(serve(path.join(__dirname + '/public')));

// 監聽 3001 埠口
app.listen(port, (err) => {
  if (err)
    throw err;
  console.log('server is listening on port', port);
});
