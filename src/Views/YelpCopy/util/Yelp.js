const apiKey = 'ygfUp26QYKgRyniAV545l_7JDk69JYq7Z2L1v10pNntcCP9o_Ue6vRaMOeoHYvyL8y5r0N4IKZZQY_N15kZ0WeNBR1lI0Wkj6XEbJXp7Qb3UDbX6B_7jPE2OdsKuXnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: { 
                Authorization: `Bearer ${apiKey}` 
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        gmapsAddressLink: `https://maps.google.com/?q=${business.name}, ${business.location.address1}, ${business.location.city}, ${business.location.state != null ? business.location.state : ''} ${business.location.zip_code}, ${business.location.country}`,
                        url: business.url,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    }
};

export default Yelp;