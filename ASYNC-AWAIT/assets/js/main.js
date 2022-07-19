// change a different api cause the origin, have a CORS issue
const BASE_URL = 'https://api.thecatapi.com/v1/images/search'
const catBtn = document.getElementById("change-cat")
const catImg = document.getElementById("cat")


const getCats = async () => {
	try {
		const data = await fetch(BASE_URL)
		const json = await data.json()

		// add this part cause data.json return a undefined result when i try to get a json.url
		const findObj = json.find((obj) => {
			return obj.url
		})

		return findObj.url
	} catch (err) {
		console.log(err)
	}
}

const loadImg = async () => {
	catImg.src = await getCats()
}

catBtn.addEventListener('click', loadImg)

loadImg()