const btnSearch = document.getElementById('btnBuscar')
const inputCity = document.getElementById('searchCity')

btnSearch.addEventListener('click', () => {
    if (inputCity.value.trim().length > 0) {
        console.log('@@ input value => ', inputCity.value)
        buscarCiudad(inputCity.value)

    }
})

const buscarCiudad = async (ciudad) => {
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${ciudad}&language=en`;
    const options = {
	    method: 'GET',
	    headers: {
	    	'X-RapidAPI-Key': 'bf8d17ce4amsh8fc500f384c7217p1c265cjsn2646ea4303ca',
    		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	    }
    };

    try {
	    const response = await fetch(url, options);
	    const result = await response.json();
	    console.log(result);
    } catch (error) {
	console.error(error);
    }
}