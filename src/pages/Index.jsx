import { Container, VStack, Text, Button, Input, Box, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaCreditCard, FaPaypal, FaApplePay, FaGooglePay } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.100" p={4}>
      <VStack spacing={6} width="100%">
        <Box width="100%" textAlign="center">
          <Image src="https://images.unsplash.com/photo-1495313857680-4c7141253c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBsb2dvfGVufDB8fHx8MTcxNzU4MjE5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Casino Logo" mb={4} />
          <Text fontSize="3xl" fontWeight="bold">
            Deposit Funds
          </Text>
          <Text fontSize="md" color="gray.600">
            Choose your preferred payment method
          </Text>
        </Box>

        <VStack spacing={4} width="100%">
          <HStack spacing={4} width="100%" justifyContent="center">
            <IconButton aria-label="Credit Card" icon={<FaCreditCard />} size="lg" />
            <IconButton aria-label="PayPal" icon={<FaPaypal />} size="lg" />
            <IconButton aria-label="Apple Pay" icon={<FaApplePay />} size="lg" />
            <IconButton aria-label="Google Pay" icon={<FaGooglePay />} size="lg" />
          </HStack>

          <Box width="100%">
            <Text fontSize="lg" mb={2}>
              Enter Amount
            </Text>
            <Input placeholder="Amount" size="lg" />
          </Box>

          <Button colorScheme="blue" size="lg" width="100%">
            Deposit Now
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
