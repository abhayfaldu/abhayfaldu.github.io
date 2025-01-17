import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";

const TimelineItem = ({ title, role, duration, location, children, icon: Icon }) => (
  <Flex gap={6} mb={12} position="relative">
    <Box
      position="absolute"
      left="24px"
      top="50px"
      width="2px"
      height="calc(100% + 48px)"
      bg="primary.light"
      display={["none", "block"]}
      zIndex={0}
    />
    
    <Flex flexShrink={0} zIndex={1} alignItems="start">
      <Box
        p={3}
        bg="white"
        borderRadius="full"
        border="2px solid"
        borderColor="primary.light"
        color="primary.light"
      >
        <Icon size={24} />
      </Box>
    </Flex>

    <Box flex={1}>
      <Text 
        fontSize={["xl", "2xl"]} 
        fontWeight="600" 
        color="#43BEE5"
        mb={1}
      >
        {title}
      </Text>
      <Text 
        fontSize={["lg", "xl"]} 
        fontWeight="500"
        color="#2D3748"
        mb={1}
      >
        {role}
      </Text>
      <Text 
        fontSize={["sm", "md"]} 
        color="#718096" 
        mb={4}
      >
        {duration} | {location}
      </Text>
      <VStack 
        align="start" 
        spacing={2} 
        fontSize={["sm", "md"]}
        color="#4A5568"
      >
        {children}
      </VStack>
    </Box>
  </Flex>
);

const Experience = () => {
  return (
    <Center id="experience" flexDir="column" py={20} px={[4, 6, 8]}>
      <Heading 
        fontSize={["2xl", "3xl", "4xl"]}
        mb={16}
        textAlign="center"
        color="#2D3748"
      >
        💼 Experience 💼
      </Heading>
      <Box maxW="1000px" w="100%">
        <TimelineItem
          icon={BriefcaseIcon}
          title="Webledger Solutions"
          role="Full Stack Developer"
          duration="January 2024 - Present"
          location="Surat, India"
        >
          <Text>• Improved and managed Webledger Office product using Vue.js, Adonis.js, and TypeScript.</Text>
          <Text>• Solely developed a customizable dashboard with drag-and-drop functionality for resizing and moving components.</Text>
          <Text>• Redesigned and improved the Retail Loan feature within the WebLedger platform.</Text>
          <Text>• Implemented Custom Recurrence Logic for task scheduling in Workboard feature.</Text>
          <Text>• Built and maintained 30+ reusable Vue.js components.</Text>
          <Text>• Delivered responsive user interfaces with Bootstrap and user-friendly workflows.</Text>
        </TimelineItem>

        <TimelineItem
          icon={GraduationCapIcon}
          title="Masai School"
          role="Full-Stack Web Development"
          duration="April 2022 - April 2023"
          location="Remote"
        >
          <Text>• Completed 1200+ hours of training in MERN stack development.</Text>
          <Text>• Built 5 major team projects and multiple solo projects.</Text>
          <Text>• Completed 400+ hours of Data Structures and Algorithms.</Text>
          <Text>• Underwent 100+ hours of soft skills training.</Text>
        </TimelineItem>
      </Box>
    </Center>
  );
};

export default Experience;
