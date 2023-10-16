import { useState } from 'react'
import { Box, Checkbox, Text, Button, Input } from '@chakra-ui/react'


function Task({ name, status, onStatusChange, onDelete, onUpdate, description}) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTaskName, setUpdatedTaskName] = useState(name);

  const handleCheckboxChange = () => onStatusChange();
  
  const handleDelete = () => onDelete();

  const handleEditClick = () => setIsEditing(true);

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedTaskName(name)
  }

  const handleSaveClick = () => {
    if (updatedTaskName.trim() !== '' && updatedTaskName.length >3)  {
      onUpdate(updatedTaskName);
      setIsEditing(false);
    }
  }
  
  const handleInputChange = (e) => {
    setUpdatedTaskName(e.currentTarget.value);
  }

  return (
    <Box display="flex" alignItems="center">
      <Checkbox isChecked={status} onChange={handleCheckboxChange} mr={3}/>
      {isEditing ? (
        <Input 
          type='text' 
          value={updatedTaskName} 
          onChange={handleInputChange} 
          size="sm"
        />
      ) : (
        <Text as="p" flex="1" textDecoration={status ? 'line-through' : 'none'}>
          <b>{name}</b> <br /> {description}
        </Text>
      )}
      {isEditing ? (
        <>
          <Button size="xs" onClick={handleSaveClick} ml={2} 
            bg="green.600" 
            _hover={{
              bg: "green.500",
            }} 
            color="white" >
            Save
          </Button>
          <Button size="xs" onClick={handleCancelClick} ml={2}
            bg="pink.600" 
            _hover={{
              bg: "pink.500",
            }} 
            color="white">
            Cancel
          </Button>
        </>
      ) : (
        <>
          <Button size="xs" onClick={handleEditClick} ml={2} 
            bg="teal.600" 
            _hover={{
              bg: "teal.500",
            }} 
            
            color="white">
            Edit
          </Button>
          <Button size="xs" onClick={handleDelete} ml={2} 
            bg="pink.600" 
            _hover={{
              bg: "pink.500",
            }} 
            color="white">
            Delete
          </Button>
        </>
      )}
    </Box>
  )
}

export default Task