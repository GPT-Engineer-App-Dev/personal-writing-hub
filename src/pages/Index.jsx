import { Container, VStack, Heading, Text, Box, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="/images/profile.jpg"
            alt="Profile Image"
            mb={4}
          />
          <Heading as="h1" size="xl" mb={2}>
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Full Stack Developer | Tech Enthusiast | Blogger
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md" color="gray.700">
            Hello! I'm John, a passionate developer with a love for creating dynamic and user-friendly web applications. I enjoy writing about technology, programming, and my personal experiences in the tech industry.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest Blog Posts
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                Understanding React Hooks
              </Heading>
              <Text fontSize="sm" color="gray.600">
                March 10, 2023
              </Text>
              <Text fontSize="md" mt={2}>
                React Hooks have revolutionized the way we write React components. In this post, we'll dive deep into the most commonly used hooks and how they can simplify your code.
              </Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                A Guide to Modern JavaScript
              </Heading>
              <Text fontSize="sm" color="gray.600">
                February 25, 2023
              </Text>
              <Text fontSize="md" mt={2}>
                JavaScript has come a long way since its inception. This guide covers the latest features and best practices for writing clean and efficient JavaScript code.
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Connect with Me
          </Heading>
          <VStack spacing={4}>
            <Link href="https://twitter.com/johndoe" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://github.com/johndoe" isExternal>
              <FaGithub size="24px" />
            </Link>
            <Link href="https://linkedin.com/in/johndoe" isExternal>
              <FaLinkedin size="24px" />
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;