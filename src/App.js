import React from "react"
import { ChakraProvider, theme } from "@chakra-ui/react"
import Layout from "./components/resources/layout"
import StakingApp from "./components/staking-app"

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<StakingApp />
			</Layout>
		</ChakraProvider>
	)
}

export default App
