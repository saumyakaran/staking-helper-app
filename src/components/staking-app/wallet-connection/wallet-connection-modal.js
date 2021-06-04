import { Text } from "@chakra-ui/layout"
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/modal"
import { decodeAddress, encodeAddress } from "@polkadot/util-crypto"
import { get } from "lodash"
import React, { useEffect, useMemo, useState } from "react"
import getWallet from "../../../lib/polkadot-extension"
import {
	useAccounts,
	useSelectedNetwork,
	useWalletConnectionState,
} from "../../../lib/store"

const WalletConnectionModal = ({ isOpen, onClose }) => {
	const { selectedNetwork } = useSelectedNetwork()
	const { setIsWalletConnected } = useWalletConnectionState()
	const { setAccounts } = useAccounts()

	const [extensionEvent, setExtensionEvent] = useState()

	const walletEventHandler = useMemo(
		() => ({
			onEvent: (eventInfo) => {
				setExtensionEvent(eventInfo.message)
			},
		}),
		[setExtensionEvent]
	)

	useEffect(() => {
		let isMounted = true
		getWallet(walletEventHandler)
			.then(({ isExtensionAvailable, accounts = [] }) => {
				if (isMounted) {
					if (isExtensionAvailable) {
						setIsWalletConnected(true)

						if (accounts.length) {
							accounts.forEach((x) => {
								x.address = encodeAddress(
									decodeAddress(x.address.toString()),
									get(selectedNetwork, "addressPrefix")
								)
							})
							setAccounts(accounts)
						}
					} else {
						setIsWalletConnected(false)
					}
				}
			})
			.catch((error) => {
				console.error(error)
			})
		return () => {
			isMounted = false
		}
	}, [selectedNetwork, setAccounts, setIsWalletConnected, walletEventHandler])

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalBody>
					<Text>Waiting for you to allow...</Text>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default WalletConnectionModal
