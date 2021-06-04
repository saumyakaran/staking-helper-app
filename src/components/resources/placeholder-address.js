import { decodeAddress, encodeAddress } from "@polkadot/util-crypto"
import { useEffect, useState } from "react"
import { useSelectedNetwork } from "../../lib/store"

const usePlaceholderAddress = () => {
	const PLACEHOLDER = "14tyL4aVvfsvziV1CM5KgzjnAz8XvwvmtrPvVL8i9nPJQnHR"
	const {
		selectedNetwork: { addressPrefix },
	} = useSelectedNetwork()
	const [state, setState] = useState(null)

	useEffect(() => {
		const decoded = decodeAddress(PLACEHOLDER)
		const encoded = encodeAddress(decoded, addressPrefix)
		setState(encoded)
	}, [addressPrefix])
	return state
}

export default usePlaceholderAddress
