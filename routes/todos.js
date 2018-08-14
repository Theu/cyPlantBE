import Router from 'koa-router';
import {getDB} from '../helpers/db';
import { createApi } from '../api/todos';

const {
    getTodos,
    createTodo
} = createApi(getDB);

import {
    showTodos,
    storeToDoInDataBase
} from '../handlers/todos';

const router = new Router({prefix: '/todos'});

router.get('/', showTodos(getTodos));
router.post('/', storeToDoInDataBase(createTodo));

export default router;