import { Box, Button, HStack, Image, Input, ScrollView, Text, FlatList, Center, Select } from "native-base";
import Navbar from "../components/navbar";

import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = () => {
    const featuredProducts = [
        {
          id: 1,
          name: "HP 62 Black Ink Cartridge",
          price: "$9.49",
          serial: "HPC2P04AE",
          model: "MF-3110",
          image: "https://siplah-oss.tokoladang.co.id/merchant/17600/product/oSEOdgkXrLHLt3p3Hz1sslHN0AHnVaE8wR3gEcwW.jpg",
        },
        {
          id: 2,
          name: "Canon MF-3110 Toner",
          price: "$36.45",
          serial: "C2P04AE",
          model: "MF-3110",
          image: "https://siplah-oss.tokoladang.co.id/merchant/17600/product/oSEOdgkXrLHLt3p3Hz1sslHN0AHnVaE8wR3gEcwW.jpg",
        },
        {
          id: 3,
          name: "HP 62 Black Ink Cartridge",
          price: "$5.99",
          serial: "HPC2P04AE",
          model: "MF-3110",
          image: "https://siplah-oss.tokoladang.co.id/merchant/17600/product/oSEOdgkXrLHLt3p3Hz1sslHN0AHnVaE8wR3gEcwW.jpg",
        },
        {
            id: 4,
            name: "HP 62 Black Ink Cartridge",
            price: "$5.99",
            serial: "HPC2P04AE",
            model: "MF-3110",
            image: "https://siplah-oss.tokoladang.co.id/merchant/17600/product/oSEOdgkXrLHLt3p3Hz1sslHN0AHnVaE8wR3gEcwW.jpg",
          },
          {
            id: 5,
            name: "HP 62 Black Ink Cartridge",
            price: "$5.99",
            serial: "HPC2P04AE",
            model: "MF-3110",
            image: "https://siplah-oss.tokoladang.co.id/merchant/17600/product/oSEOdgkXrLHLt3p3Hz1sslHN0AHnVaE8wR3gEcwW.jpg",
          },
          {
            id: 6,
            name: "HP 62 Black Ink Cartridge",
            price: "$5.99",
            serial: "HPC2P04AE",
            model: "MF-3110",
            image: "https://siplah-oss.tokoladang.co.id/merchant/17600/product/oSEOdgkXrLHLt3p3Hz1sslHN0AHnVaE8wR3gEcwW.jpg",
          },
      ];

        const [currentPage, setCurrentPage] = useState(0);
        const [selectedProduct, setSelectedProduct] = useState(null);

        const itemsPerPage = 3;

        const displayedProducts = featuredProducts.slice(
            currentPage * itemsPerPage,
            (currentPage + 1) * itemsPerPage
        );

        const nextPage = () => {
            if ((currentPage + 1) * itemsPerPage < featuredProducts.length) {
            setCurrentPage(currentPage + 1);
            }
        };

        const prevPage = () => {
            if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
            }
        };

    return (
        <>
        <Navbar />
        <ScrollView>
        <Box >
            {/* Section 1 */}
            <HStack mx={"40"} p={4} justifyContent={"space-between"}>
                <Box flexDirection={"row"}>
                    <Text fontSize={40} fontWeight={"bold"}>CATRIDGE KINGS</Text>
                </Box>
                <Box flexDirection={"row"} gap={4}>
                    <Input w={200} h={10} my="auto" placeholder="Search" />
                    <Button bgColor={"orange.400"} w={32} h={10} my="auto">
                        <Text fontWeight={"medium"} color={"white"}>Cart</Text>
                    </Button>
                </Box> 
            </HStack>
            <HStack mx={"40"} space="3" flex={1} bgColor={"blue.500"}>
                <Button bgColor={"blue.500"} flex={1} color={"white"}>Home</Button>
                <Button bgColor={"blue.500"} flex={1} color={"white"}>Ink Cartridges</Button>
                <Button bgColor={"blue.500"} flex={1} color={"white"}>Toner Cartridges</Button>
                <Button bgColor={"blue.500"} flex={1} color={"white"}>Contact Us</Button>
                <Button bgColor={"blue.500"} flex={1} color={"white"}>Login / Register</Button>
            </HStack>
            
            {/* Section 2 */}
            <Box
                bgImage="url('https://png.pngtree.com/thumb_back/fw800/background/20230521/pngtree-colorful-paper-swirled-around-in-3d-image_2664477.jpg')"
                bgSize="cover" 
                bgPosition="center" 
                px="6"
                py="16"
                mt={10}
                >
                <Text mx={"40"}  p={4} fontSize="2xl" bold textAlign="center" color="white">
                    FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER
                </Text>
                <Box bgColor={"white"} mx={"40"} >
                    <Box bgColor={"gray.100"} flex={1} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Box  w={"full"} bgColor={"gray.200"} p={4} flex={1}>
                            <Text fontSize="lg" bold textAlign="center">
                                Search by Printer
                            </Text>
                        </Box>
                        <Box  w={"full"} bgColor={"gray.200"} p={4} flex={1}>
                            <Text fontSize="lg" bold textAlign="center">
                                Search By Serial Number
                            </Text>
                        </Box>
                    </Box>
                    <HStack p={4} mb={4} mx={"16"} space="3" mt="4" justifyContent="center">
                        <Select
                            placeholder="Select Printer Brand"
                            selectedValue={selectedProduct}
                            onValueChange={(value) => setSelectedProduct(value)}
                            width="200"
                            h={"50"}
                            >
                            {featuredProducts.map((product) => (
                                <Select.Item
                                key={product.id}
                                label={product.name}
                                value={product.id.toString()}
                                />
                            ))}
                        </Select>
                        <Select 
                            placeholder="Select Printer Serial" 
                            width="200"
                            h={"50"}>
                            {featuredProducts.map((product) => (
                                <Select.Item
                                key={product.id}
                                label={product.serial}
                                value={product.serial}
                                />
                            ))}
                        </Select>
                        <Select 
                            placeholder="Select Printer Model" 
                            width="200"
                            h={"50"}>
                            {featuredProducts.map((product) => (
                                <Select.Item
                                key={product.id}
                                label={product.model}
                                value={product.model}
                                />
                            ))}
                        </Select>
                        <Button bg="orange.400" px="6">Find Cartridges</Button>
                    </HStack>
                </Box>
                
            </Box>

             {/* Section 3 */}
             <Box mx={"40"} mt={10} p={4} >
                <Text fontSize="2xl" mb={4} bold textAlign="center">
                    Featured Products
                </Text>
                <Box px="6" py="6" alignItems={"center"} >
                    <FlatList
                    data={displayedProducts}
                    renderItem={({ item }) => (
                        <Box bg="white" shadow="1" rounded="md" p="4" w="30%" m="4">
                            <Center>
                                <Image height={300} alignItems={"center"} source={{ uri: item.image }} alt={item.name} size="lg" />
                            </Center>
                            
                            <Text mt="2" bold>{item.name}</Text>
                            <Text color="gray.500" fontSize={"sm"} mb={10}>({item.serial})</Text>
                            <Box flexDirection={"row"} justifyContent={"space-between"}>
                                <Text color="gray.500" my={"auto"}>{item.price}</Text>
                                <Button  my={"auto"} bg="orange.400" size="sm">
                                    Add to Cart
                                </Button>
                            </Box>
                            
                        </Box>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    />
                </Box>

                <HStack justifyContent="space-between" mt={-48} px={6}>
                    <Button 
                        onPress={prevPage} 
                        isDisabled={currentPage === 0}
                        bgColor="white"
                    >
                        <Ionicons size={48} name="arrow-back-circle-outline"></Ionicons>
                    </Button>
                    <Button
                        onPress={nextPage}
                        isDisabled={(currentPage + 1) * itemsPerPage >= featuredProducts.length}
                        bgColor="white"
                    >
                        <Ionicons size={48} name="arrow-forward-circle-outline"></Ionicons>
                    </Button>
                </HStack>
            </Box>

        </Box>
        </ScrollView>
        </>
    );
};

export default Home;