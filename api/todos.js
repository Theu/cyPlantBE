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
        },
        readTodo: async(id) => {
            return await getDB().get(id);
        },
        updateTodo: async(requestedTitle, requestedId) => {
            const title = requestedTitle;
            const entryToUpdate = await getDB.get(requestedId);

            return getDB().put({
                _id: requestedId,
                _rev: entryToUpdate._rev,
                title: title
            });
        },
        deleteTodo: async(id) => {
            return await getDB().remove(await getDB().get(id));
        }
    };
}
