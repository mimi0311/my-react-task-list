import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem, ListIcon, Flex } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function AboutUs() {
  return (
    <Box p={4} textAlign="justify">
      <Heading as="h2" mb={6} textAlign="center">About our application</Heading>
      <Text my={4}>
        This tool will help you organize and manage your daily tasks efficiently. With this application, you can keep a detailed track of your activities.
      </Text>
      <Text my={4}>Here are the features it offers:</Text>
      <UnorderedList spaceBefore="1em" spaceAfter="1em" styleType="none">
        <ListItem>
          <Flex align="start">
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <Text><b>Task Creation:</b> Creating tasks is easy. You have the option to add a title to identify the task, and you can also include a detailed description for each task. This allows you to include additional information to effectively carry out the task.</Text>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex align="start">
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <Text><b>Task Marking:</b> You can mark tasks as complete or incomplete. This feature helps you visually keep track of how much work you have left to do.</Text>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex align="start">
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <Text><b>Task Editing:</b> You can edit existing tasks at any time. If there are any errors or changes in the tasks, you can make the necessary modifications to keep the information up to date.</Text>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex align="start">
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <Text><b>Task Deletion:</b> If a task is no longer relevant or has been completed, you can delete it from the list. This helps you maintain a clean and organized task list.</Text>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex align="start">
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <Text><b>Pending Task Indicator:</b> The application includes a real-time indicator of pending tasks. This gives you a quick overview of the tasks that still need to be completed.</Text>
          </Flex>
        </ListItem>
      </UnorderedList>
      <Text my={4}>
        This application was created using HTML, CSS, JavaScript, and React.
      </Text>
    </Box>
  );
}

export default AboutUs;
