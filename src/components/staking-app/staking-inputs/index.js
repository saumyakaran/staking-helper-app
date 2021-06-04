import { Stack } from "@chakra-ui/layout"
import React from "react"
import NetworkInput from "./network-input"
import ProxyAccountInput from "./proxy-account-input"
import RealAccountInput from "./real-account-input"
import RiskInput from "./risk-input"
import TransactionButton from "./transaction-button"

const StakingInputs = () => (
	<Stack spacing={4}>
		<NetworkInput />
		<ProxyAccountInput />
		<RealAccountInput />
		<RiskInput />
		<TransactionButton />
	</Stack>
)

export default StakingInputs
