const getAllTask = async (req, res) => {
    try {
      const allTodo = await pool.query("SELECT *  FROM todo");
      res.status(200).json(allTodo.rows);
    } catch (error) {
      res.status(500).json({msg: error})
    }
  };
  
  const getTask = async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await pool.query("SELECT *  FROM todo WHERE todo_id = $1")[id];
      res.status(200).json(todo.rows);
    } catch (error) {
      res.status(500).json({msg: error})
    }
  };
  
  const createTask = async (req, res) => {
    try {
      const { description } = req.body;
      const newTodo = await pool.query(
        "INSERT INTO todo (description) VALUES($1) RETURNING *"
      )[description];
      res.status(201).json(newTodo.rows[0]);
    } catch (error) {
      res.status(500).json({msg: error})
    }
  };
  
  const deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTask = await pool.query("DELETE FROM todo WHERE todo_id = $1")[id];
      res.status(200).json(deleteTask);
    } catch (error) {
      res.status(500).json({msg: error})
    }
  };
  
  const updateTask = async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const updateTask = await pool.query(
        "UPDATE todo SET description = $1 WHERE todo_id=$2"
      )[(description, id)];
      res.status(200).json(updateTask);
    } catch (error) {
      res.status(500).json({msg: error})
    }
  };
  module.exports = {
    getAllTask,
    getTask,
    createTask,
    deleteTask,
    updateTask,
  };
  