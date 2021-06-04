import create from "zustand"
import { getNetworkInfo } from "../app.config"

const useSelectedNetwork = create((set) => ({
	selectedNetwork: getNetworkInfo("Polkadot"),
	setSelectedNetwork: (selectedNetwork) => set(() => ({ selectedNetwork })),
}))

const useAccounts = create((set) => ({
	accounts: null,
	setAccounts: (newAccounts) => set(() => ({ accounts: newAccounts })),
}))

const useWalletConnectionState = create((set) => ({
	isWalletConnected: false,
	setIsWalletConnected: (connectionState) =>
		set(() => ({ isWalletConnected: connectionState })),
}))

const useTransaction = create((set) => ({
	proxy: null,
	real: null,
	targets: null,
	setProxy: (proxy) => set(() => ({ proxy })),
	setReal: (real) => set(() => ({ real })),
	setTargets: (targets) => set(() => ({ targets })),
}))

const usePolkadotApi = create((set) => ({
	apiInstance: null,
	setApiInstance: (apiInstance) => set(() => ({ apiInstance })),
}))

export {
	useAccounts,
	useWalletConnectionState,
	useSelectedNetwork,
	useTransaction,
	usePolkadotApi,
}
