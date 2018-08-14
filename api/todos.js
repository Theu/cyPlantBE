import todos from "../routes/todos";

export function createApi(getDB) {
    return {
        getTodos: async () => {
            const objectOfTodosFromDb = await getDB().allDocs({ include_docs: true});
            const arraysOfTods = Object.entries(objectOfTodosFromDb.rows).map(([key,value]) => {
                return {title:value.doc.title, id:value.doc._id}
        });

        return arraysOfTods;
        },
        createTodo: async (request) => {
            const todo = {
                ...request,
                _id: new Date().toISOString(),
                isCompleted: false
            };

            return await getDB().put(todo);
        }
    }
}
