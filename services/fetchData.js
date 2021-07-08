export default class FetchData {
	static async getData(){
		try {
			let res = await fetch('http://jsonplaceholder.typicode.com/users')
			res = await res.json()
			return res
		} catch(e) {
			return false
		}
	}
}