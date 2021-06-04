import { Button } from "@chakra-ui/button"
import { get } from "lodash"
import React from "react"
import { usePolkadotApi, useTransaction } from "../../../lib/store"
import stake from "../../resources/stake"

const TransactionButton = () => {
	const { proxy, real, targets } = useTransaction()
	const { apiInstance } = usePolkadotApi()

	const transactionHandler = () => {
		const txData = { proxy: get(proxy, "address"), real, targets }
		console.log(txData)
		stake(txData, apiInstance)
	}

	return (
		<Button colorScheme="purple" size="lg" onClick={transactionHandler} isDisabled={!apiInstance}>
			Stake now
		</Button>
	)
}

export default TransactionButton
