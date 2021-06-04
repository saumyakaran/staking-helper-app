import React from "react"
import { Box, Link } from "@chakra-ui/react"

import Header from "../header"

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<Box maxW="960px" m="auto">
				<main>{children}</main>
				<Box as="footer" my={16}>
					© {new Date().getFullYear()}, Built by
					{` `}
					<Link href="https://saumyakaran.com" isExternal>
						Saumya Karan
					</Link>
				</Box>
			</Box>
		</>
	)
}

export default Layout
