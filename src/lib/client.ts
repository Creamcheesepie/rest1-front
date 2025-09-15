export function fetchApi(url: String){
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`).then((res) => res.json());        
}