import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import React from "react"
import { useTransaction } from "../../../lib/store"
import usePlaceholderAddress from "../../resources/placeholder-address"

const RealAccountInput = () => {
	const placeholder = usePlaceholderAddress()
	const { setReal } = useTransaction()

	const realAccountHandler = (e) => {
		const {
			target: { value },
		} = e
		setReal(value)
	}
	return (
		<FormControl>
			<FormLabel>Real Account Address</FormLabel>
			<Input
				variant="outline"
				placeholder={placeholder}
				size="lg"
				onChange={realAccountHandler}
			/>
		</FormControl>
	)
}

export default RealAccountInput
