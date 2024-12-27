import { Box, Text } from "native-base";

const Navbar = () => {
    return (
        <Box  w={"full"} bgColor={"gray.200"}>
            <Box mx={"40"} flexDirection={"row"} justifyContent={"space-between"} alignItems="center">
                <Box flexDirection={"row"} mx={3} gap={10} p={4} >
                    <Text fontWeight={"medium"} fontSize={"sm"}>Franchise Opportunities</Text>
                    <Text fontWeight={"medium"} fontSize={"sm"}>Help</Text>
                    <Text fontWeight={"medium"} fontSize={"sm"}>Feedback</Text>
                </Box>
                <Box flexDirection={"row"} mx={3} gap={10}>
                    <Text fontWeight={"medium"} fontSize={"sm"}>Hello@email.com</Text>
                    <Text fontWeight={"medium"} fontSize={"sm"}>08000222022</Text>
                </Box>
            </Box>
            
        </Box>
    );
};

export default Navbar;