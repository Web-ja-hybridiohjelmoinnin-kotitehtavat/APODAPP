
const fetchApod = async () => {
    try {
        const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${process.env.EXPO_PUBLIC_APOD_API_KEY}`
        )

        if (!response.ok) {
            throw new Error('Failed to fetch APOD')
        }

        const data = await response.json()

        // Check if the 'hdurl' property exists, otherwise use 'url'
        const imageUrl = data.hdurl || data.url

        if (imageUrl) {
            // Handle the API response and set the data
            return { ...data, imageUrl }
        } else {
            throw new Error('Invalid APOD data format')
        }
    } catch (error) {
        console.error('Error fetching APOD:', error)
    }
}

const fetchDateApod = async (date) => {

    const formatDate = (date) => {
        const year = date.getFullYear()
        let month = date.getMonth() + 1
        month = month < 10 ? `0${month}` : month
        let day = date.getDate()
        day = day < 10 ? `0${day}` : day
        return `${year}-${month}-${day}`
    }

    const dateStr = formatDate(date)

    try {
        const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${process.env.EXPO_PUBLIC_APOD_API_KEY}&date=${dateStr}`
        )
        const data = await response.json()

        // Check if the 'hdurl' property exists, otherwise use 'url'
        const imageUrl = data.hdurl || data.url

        if (imageUrl) {
            // Handle the API response and set the data
            return { ...data, imageUrl }
        } else {
            throw new Error('Invalid APOD data format')
        }
    } catch (error) {
        console.error('Error fetching APOD:', error)
    }
}

export { fetchApod, fetchDateApod }

