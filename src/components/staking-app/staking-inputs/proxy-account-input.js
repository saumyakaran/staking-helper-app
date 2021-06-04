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
import { get } from "lodash"
import React from "react"
import { useAccounts, useTransaction } from "../../../lib/store"

const DisplayButton = ({ account, onOpen }) => (
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
			{/* <Identicon size="32px" address={get(account, "address")} /> */}
			<Text display="inline">
				{account
					? get(account, "meta.name") + " - " + get(account, "address")
					: "Select your proxy account"}
			</Text>
		</Box>
	</MenuButton>
)

const ProxyAccountInput = () => {
	const { isOpen, onClose, onOpen } = useDisclosure()
	const { accounts } = useAccounts()
	const { proxy, setProxy } = useTransaction()

	const proxyHandler = (account) => {
		setProxy(account)
		onClose()
	}

	return (
		<FormControl>
			<FormLabel>Proxy Account Address</FormLabel>
			<Menu w="full" isOpen={isOpen} onClose={onClose}>
				<DisplayButton onOpen={onOpen} account={proxy} />
				<MenuList>
					<MenuOptionGroup type="radio" onChange={proxyHandler}>
						{accounts &&
							accounts.map((account) => (
								<MenuItemOption key={get(account, "address")} value={account}>
									{get(account, "meta.name")} - {get(account, "address")}
								</MenuItemOption>
							))}
					</MenuOptionGroup>
				</MenuList>
			</Menu>
		</FormControl>
	)
}

export default ProxyAccountInput
