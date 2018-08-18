export function showTodos(getTodos) {
    return async function showTodosHandler(ctx) {
        ctx.body = await getTodos();
        ctx.status = 200;
    };
};

export function storeToDoInDataBase(createTodo) {
    return async function storeToDoInDataBaseHandler(ctx) {
        await createTodo(ctx.request.body);
        ctx.status = 201;
    };
};

export function showTodo(readTodo) {
    return async function showTodoHandler(ctx) {
        ctx.body = await readTodo(ctx.params.id);
        ctx.status = 200;
    };
};

export function storeTodoToDataBase(createTodo) {
    return async function storeTodoToDataBaseHandler(ctx) {
        await createTodo(ctx.request.body);
        ctx.status = 201;
    };
};

export function updateTodoInDataBase(updateTodo) {
    return async function updateTodoInDataBaseHandler(ctx) {
        await updateTodo(ctx.request.body.title, ctx.params.id)
        ctx.status = 200;
    };
};

export function removeTodoFromDataBase(deleteTodo) {
    return async function removeTodoFromDataBaseHanlder(ctx) {
        await deleteTodo(ctx.params.id);
        ctx.status = 204;
    };
};
