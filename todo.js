const todoList = () => {
    let all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    let today = new Date().toLocaleDateString("en-CA");
  
    const overdue = () => {
      return all.filter((todos) => todos.dueDate < today);
    };
  
    const dueToday = () => {
      return all.filter((todos) => todos.dueDate === today);
    };
  
    const dueLater = () => {
      return all.filter((todos) => todos.dueDate > today);
    };
  
    function toDisplayableList(list) {
      return list
        .map(
          (todos) =>
            `${todos.completed ? `[x]` : `[ ]`} ${todos.title} ${
              todos.dueDate != today ? todos.dueDate : " "
            }`
        )
        .join("\n");
    }
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  
  module.exports = todoList;