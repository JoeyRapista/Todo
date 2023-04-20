 
document.addEventListener('alpine:init', () => {
    Alpine.data('todoData', function() {
        return {
            todos: this.$persist([]).as('joey_todos'),
            get todosActive(){
                return this.todos.filter(
                   (todo) => todo.isDone === false
                )
            },
            get todosDone(){
                return this.todos.filter(
                   (todo) => todo.isDone === true
                )
            },
            newTodoTitle: "",
            addTodo(){ 
                this.todos.push({
                    id : this.generateUniqueID(),
                    title: this.newTodoTitle,
                    isDone: false
                })
                this.newTodoTitle = ""
            },
            updateTodo(id){  
                const todo = this.todos.find((todo) => todo.id === id) 
                todo.isDone = !todo.isDone
            },
            deleteTodo(id){ 
                let filteredTodos = this.todos.filter((todo) => todo.id !== id)  
                this.todos = filteredTodos
            },
            generateUniqueID(){
                const dateString = Date.now().toString(36);
                const randomness = Math.random().toString(36).substring(2);
                return dateString + randomness;
            }
        }
    })
})