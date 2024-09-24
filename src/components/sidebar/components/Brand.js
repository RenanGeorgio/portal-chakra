import React from "react";

// Chakra imports
import { Flex, Image } from "@chakra-ui/react";

// Custom components
import LogoDb from "assets/img/layout/icon.png";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  return (
    <Flex align="center" direction="column">
      <Image src={LogoDb} alt="Logo" mb="20px" w="250px" h="100px"/>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
