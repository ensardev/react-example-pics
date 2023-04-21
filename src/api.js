import axios from 'axios';

const baseUrl = 'https://api.unsplash.com';

const searchImages = async (term) => {
    const response = await axios.get(baseUrl + '/search/photos', {
        headers:{
            Authorization:"Client-ID UVJcEIS6eYbfGS8dSu1bu6LI_awqO0Qa8GCnXe9Lfs4"
        },
        params:{
            query: term,
        }
    });

    console.log(response.data.results);
    return response.data.results;
};

export default searchImages;