import { Image } from "@chakra-ui/image"
import React from "react"

const InlineLogo = (network) => (
	<Image
		display="inline"
		mr={2}
		boxSize="2rem"
		borderRadius="full"
		src="https://placekitten.com/100/100"
		alt="network"
	/>
)

export default InlineLogo