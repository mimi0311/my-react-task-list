import { useState, useEffect } from 'react';
import useTaskManager from '../hooks/useTaskManager';
import Task from './Task';
import { 
  VStack, HStack, Input, Textarea, Button, Text, Box, List, ListItem, FormControl, FormErrorMessage
} from '@chakra-ui/react';

function TaskList() {
  const { tasks, createTask, deleteTask, updateTask, updateTaskStatus } = useTaskManager();
  const [taskName, setTaskName] = useState('');
  const [pendingTasks, setPendingTasks] = useState(0);
  const [taskDescription, setTaskDescription] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    setPendingTasks(tasks.filter((task) => !task.status).length)}, [tasks])

  const handleTaskStatusChange = (index) => updateTaskStatus(index)

  const addTask = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      if (taskName.trim().length <= 3) {
        setIsFormValid(false);
        return;
      }
      createTask(taskName, taskDescription);
      setTaskName('');
      setTaskDescription('');
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }

  const handleDeleteTask = (index) => deleteTask(index)

  const handleUpdateTask = (index, updateName) => updateTask(index, {name: updateName})

  const handleInputChange = (e) => setTaskName(e.target.value)

  const handleDescriptionChange = (e) => setTaskDescription(e.target.value)

  const handleClearAll = () =>{
    const completedTaskIndexes = tasks.reduce((indexes, task, index) => {
      if(task.status)
        indexes.push(index)
      return indexes
    }, [])
    completedTaskIndexes.reverse().forEach((index) => {
      deleteTask(index)
    })
  }

  return (
    <VStack spacing={4} width="100%">
      <form onSubmit={addTask}>
        <VStack>
          <FormControl isInvalid={!isFormValid}>
            <Input 
              type="text" 
              placeholder='Add new task'
              value={taskName}
              onChange={handleInputChange}
              borderColor="gray.300"
              focusBorderColor="blue.500"
              w="500px"
            />
            <FormErrorMessage>
              {isFormValid ? null : "The task must have more than 3 characters"}
            </FormErrorMessage>
          </FormControl>

          <Textarea
            placeholder='Description (optional)'
            value={taskDescription}
            onChange={handleDescriptionChange}
          />

          <Button 
            bg="purple.700" 
            color="white" 
            _hover={{
              bg: "purple.600",
            }}
            type="submit" 
            w="200px">Add</Button>
        </VStack>
      </form>

      <List width="100%" spacing={3}>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <Task 
              name={task.name} 
              description={task.description}
              status={task.status}
              onStatusChange={() => handleTaskStatusChange(index)}
              onDelete={()=> handleDeleteTask(index)}
              onUpdate={(updatedName) => handleUpdateTask(index, updatedName)}
            />
          </ListItem>
        ))}
      </List>

      <Box alignSelf="stretch">
        <Text textAlign="center" my={4}>You have {pendingTasks} pending tasks.</Text>
      </Box>

      <Box d="flex" justifyContent="center">
        <Button 
          bg="purple.700" 
          color="white" 
          _hover={{
            bg: "purple.600",
          }}
          w="200px"
          onClick={handleClearAll}>Clear completed tasks</Button>
      </Box>
    </VStack>
  );
}


export default TaskList