content = (
    <>
    {sortedTodos.map((todo) => {
        <TodoItem key={todo.id} {...todo} />
    })}
    </>
);

content = (
    <>
    {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
    ))}
    </>
);