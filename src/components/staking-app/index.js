import React from "react"
import { Box, Heading } from "@chakra-ui/react"
import { Fragment } from "react"
import Disclaimer from "./disclaimer"
import StakingInputs from "./staking-inputs"
import ConnectWalletButton from "./wallet-connection/connect-wallet-button"
import {
	useWalletConnectionState,
} from "../../lib/store"

const StakingApp = () => {
	const { isWalletConnected } = useWalletConnectionState()

	return (
		<Fragment>
			<Heading as="h1" my={8}>
				Staking helper for YieldScan
			</Heading>
			<Disclaimer />
			<Box mt={12}>
				{isWalletConnected ? (
					<StakingInputs />
				) : (
					<ConnectWalletButton />
				)}
			</Box>
		</Fragment>
	)
}

export default StakingApp
