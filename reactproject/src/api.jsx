import axios from 'axios';
const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID xeQmrsPl1XidCgh-YhzeaRXec_d2odRL92LCQjibREA',
        },
        params: {
            query: term,
        },
    });
    return response.data.results;
};

export default searchImages;

