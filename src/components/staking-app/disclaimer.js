import React from "react"
import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Box,
	Link,
} from "@chakra-ui/react"

const Disclaimer = () => (<Alert status="warning" variant="left-accent">
<AlertIcon />
<Box>
    <AlertTitle>DISCLAIMER - Please read carefully</AlertTitle>
    <AlertDescription>
        This tool is meant for a very specific use-case, which is to update nominations
        using{" "}
        <Link href="https://yieldscan.app/" textDecor="underline" isExternal>
            YieldScan
        </Link>
        's validator recommendations with a correctly configured staking
        proxy. This tool doesn't have any checks to prevent you from making invalid transactions, so you are solely responsible for verifying the transaction details. Please ONLY use this if you know what you're doing, the author
        of this website bears no liability or responsibility for any actions made through this
        tool.
    </AlertDescription>
</Box>
</Alert>)

export default Disclaimer