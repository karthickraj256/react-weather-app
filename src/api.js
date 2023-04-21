import url from './Data/weather.json';
export async function fetchWeather(city, setError) {
    try{
        // fetch(url)
        // .then(response => response.json())
        // .then(json => console.log(json))
        // .catch(error => console.error(error));
        if(!city){
            setError('City Not Found');
            return 0;
        }
        var data = url.find((item, i) => {
            return item.query.location.name.toLowerCase().indexOf(city.toLowerCase()) !== -1;    
        });
        if(!data){
            setError('City Not Found');
            return 0;
        }
        setError("");
        return data;  
    }
    catch (error) {
        setError('City Not Found');
        return error;
    }
}