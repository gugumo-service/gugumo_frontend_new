const fetchBookmarks = async ()=>{
    const response = await fetch(`${process.env.API_URL}/api/v1/bookmark`,{
        headers : {
            // "Authorization" : session?.accessToken
        }
    });
    return response.json();
}