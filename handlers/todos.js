export function showTodos(getTodos) {
    return async function showTodosHandler(ctx) {
        ctx.body = await getTodos();
        ctx.status = 200;
    }
}

export function storeToDoInDataBase(createTodo) {
    return async function storeToDoInDataBaseHandler(ctx) {
        await createTodo(ctx.request.body);
        ctx.status = 201;
    }
}