import { Button } from "@chakra-ui/button"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { useDisclosure } from "@chakra-ui/hooks"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box, Text } from "@chakra-ui/layout"
import {
	Menu,
	MenuButton,
	MenuItemOption,
	MenuList,
	MenuOptionGroup,
} from "@chakra-ui/menu"
import { decodeAddress, encodeAddress } from "@polkadot/util-crypto"
import { get } from "lodash"
import React, { useEffect } from "react"
import { getAllNetworksInfo, getNetworkInfo } from "../../../app.config"
import {
	useAccounts,
	usePolkadotApi,
	useSelectedNetwork,
} from "../../../lib/store"
import createPolkadotAPIInstance from "../../resources/polkadot-api"

const DisplayButton = ({ selectedNetwork, onOpen }) => (
	<MenuButton
		as={Button}
		onClick={onOpen}
		w="full"
		fontSize="lg"
		textAlign="left"
		fontWeight="normal"
		rightIcon={<ChevronDownIcon />}
	>
		<Box as="span" w="full" flex>
			<Text display="inline">{selectedNetwork}</Text>
		</Box>
	</MenuButton>
)

const NetworkInput = () => {
	const networks = getAllNetworksInfo()
	const { accounts, setAccounts } = useAccounts()
	const { selectedNetwork, setSelectedNetwork } = useSelectedNetwork()
	const { isOpen, onClose, onOpen } = useDisclosure()
	const { apiInstance, setApiInstance } = usePolkadotApi()

	const networkHandler = (network) => {
		setSelectedNetwork(getNetworkInfo(network))
		ss58Convert(network)
		setApiInstance(null)
		onClose()
	}

	const ss58Convert = (network) => {
		const { addressPrefix } = getNetworkInfo(network)
		accounts.forEach((x) => {
			x.address = encodeAddress(
				decodeAddress(x.address.toString()),
				addressPrefix
			)
		})
		setAccounts(accounts)
	}

	useEffect(() => {
		createPolkadotAPIInstance(selectedNetwork, apiInstance).then((api) => {
			setApiInstance(api)
		})
		console.log(get(selectedNetwork, "name"))
		// eslint-disable-next-line
	}, [selectedNetwork])

	return (
		<FormControl>
			<FormLabel>Network</FormLabel>
			<Menu w="full" isOpen={isOpen} onClose={onClose}>
				<DisplayButton
					selectedNetwork={get(selectedNetwork, "name") || "Select network"}
					onOpen={onOpen}
				/>
				<MenuList>
					<MenuOptionGroup type="radio" onChange={networkHandler}>
						{networks.map(({ id, name }) => (
							<MenuItemOption key={id} value={name}>
								{name}
							</MenuItemOption>
						))}
					</MenuOptionGroup>
				</MenuList>
			</Menu>
		</FormControl>
	)
}

export default NetworkInput
