import { Flex, IconButton, useColorMode } from "@chakra-ui/react"
import { CgDarkMode } from "react-icons/cg"

import React from "react"

const Header = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <header>
      <Flex maxW="960px" mx="auto" justifyContent="flex-end" py={4}>
        <IconButton
          icon={<CgDarkMode size="40px" />}
          onClick={toggleColorMode}
          cursor="pointer"
          background="none"
          rounded="4rem"
        />
      </Flex>
    </header>
  )
}

export default Header
