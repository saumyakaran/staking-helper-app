import { web3FromAddress } from "@polkadot/extension-dapp"
import { decodeAddress, encodeAddress } from "@polkadot/util-crypto"

const stake = async ({ proxy, real, targets }, api) => {
	const sender = encodeAddress(decodeAddress(proxy), 42)
	const injector = await web3FromAddress(sender)
	api.setSigner(injector.signer)

	const nominationTx = api.tx.staking.nominate(targets)

    console.log('nominationTx')
    console.log(nominationTx)
    await api.tx.proxy
		.proxy(real, null, nominationTx)
		.signAndSend(sender)

}

export default stake
