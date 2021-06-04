import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Stack } from "@chakra-ui/layout"
import { Radio, RadioGroup } from "@chakra-ui/radio"
import { get } from "lodash"
import React, { useEffect, useState } from "react"
import { useTransaction } from "../../../lib/store"
import useRiskSets from "../../resources/risk-sets"

const RiskInput = () => {
	const [risk, setRisk] = useState("med")
	const { setTargets } = useTransaction()
	const riskSets = useRiskSets()

	useEffect(() => {
		const rawTargets = get(riskSets, `${risk}`)
		const targets =
			rawTargets && rawTargets.map((validator) => get(validator, "stashId"))
		setTargets(targets)
	}, [risk, riskSets, setTargets])

	return (
		<FormControl>
			<FormLabel>Risk level</FormLabel>
			<RadioGroup onChange={setRisk} value={risk}>
				<Stack direction="row">
					<Radio value="low">Low</Radio>
					<Radio value="med">Medium</Radio>
					<Radio value="high">High</Radio>
				</Stack>
			</RadioGroup>
		</FormControl>
	)
}

export default RiskInput
