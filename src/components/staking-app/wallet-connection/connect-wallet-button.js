import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import React from "react"
import { Fragment } from "react"
import WalletConnectionModal from "./wallet-connection-modal"

const ConnectWalletButton = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Fragment>
			<Button colorScheme="purple" size="lg" onClick={onOpen}>
				Connect Wallet
			</Button>
			{isOpen && <WalletConnectionModal isOpen={isOpen} onClose={onClose} />}
		</Fragment>
	)
}

export default ConnectWalletButton
