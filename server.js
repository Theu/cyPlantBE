import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';
import slow from 'koa-slow';
import todos from './routes/todos';

const app = new Koa();
app.use(bodyparser());
app.use(logger());
app.use(todos.routes());

app.listen(3000);