import axios from "./axios"
import { get } from "lodash"
import { useEffect, useState } from "react"
import { useSelectedNetwork } from "../../lib/store"

const useRiskSets = () => {
	const [state, setState] = useState(null)
	const { selectedNetwork } = useSelectedNetwork()

	useEffect(() => {
		if (get(selectedNetwork, "network") !== "westend") {
			axios
				.get(`/${get(selectedNetwork, "network")}/rewards/risk-set-only`)
				.then(({ data }) => {
					setState({
						low: get(data, "lowriskset"),
						med: get(data, "medriskset"),
						high: get(data, "highriskset"),
					})
				})
				.catch((error) => {
					throw new Error("Couldn't fetch risk sets from API")
				})
		} else
			setState({
				low: [{ stashId: "5FZoQhgUCmqBxnkHX7jCqThScS2xQWiwiF61msg63CFL3Y8f" }],
				med: [{ stashId: "5G1ojzh47Yt8KoYhuAjXpHcazvsoCXe3G8LZchKDvumozJJJ" }],
				high: [{ stashId: "5HYYWyhyUQ7Ae11f8fCid58bhJ7ikLHM9bU8A6Ynwoc3dStR" }],
			})
	}, [selectedNetwork])

	return state
}

export default useRiskSets
