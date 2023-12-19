const BASE_URL = "http://localhost:3001";

export const fetcher = async (url) => {
    let responseObject = {errormessage: '', data: []};
    try {
        const response = await fetch(BASE_URL + url);
        if (!response.ok){
            throw new Error('HTTP Error ${response.status}'); {/*This displays the error on the screen with
        the exact error status */}
        }
        const responseData = await response.json();
        responseObject.errormessage = '';
        responseObject.data = responseData;
        
    } catch (err) {
        responseObject.errormessage = err.message;
    }

    return responseObject;
}

{/*fetcher() could also be done as shown below:
        export const fetcher = (url) => {
            fetch(BASE_URL + url)
            .then(response => response.json())
            .then(data => {
                return data});
-> This method however does not account for the asynchronous working of the fetch function. So when we will run
the build like this, it will return no value if the fetch function does not complete fetching before useState([])
calls for the value.
        } */}

export const getCategories = () =>
{
    return fetcher('\categories');
}
export const getProducts = () =>
{
    return fetcher('\products?catId=' + id);
}