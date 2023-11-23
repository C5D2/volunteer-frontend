export const setLocalStorage = (provider: string, email: string) => {
	if (provider) {
		
		localStorage.setItem(`${provider}`, JSON.stringify({ provider, email }));
	}
};

export const getLocalStorage = (provider: string) => {
	
	const getLocalStorageByGetItem = localStorage.getItem(`${provider}`)
	console.log(getLocalStorageByGetItem)
	if (getLocalStorageByGetItem) {
		const localStorageParse = JSON.parse(getLocalStorageByGetItem);
		return {
			provider: localStorageParse.provider,
			email: localStorageParse.email
		}
  }
}