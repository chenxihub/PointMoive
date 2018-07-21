/**
 * Created by joe
 * Date: 2018/7/22
 * Time: 上午12:02
 */

const Koa = require('koa');

const app = new Koa();

app.use(async (ctx,next)=>{
	ctx.body = 'hello joe'
});

app.listen(3344);