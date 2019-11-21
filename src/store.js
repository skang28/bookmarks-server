const uuid = require('uuid/v4')

const bookmarks = [
    {
        title: 'yelp',
        url: 'https://www.yelp.com',
        description: 'website to rate businesses',
        rating: 5,
        id: uuid()
    },
    {
        title: 'youtube',
        url: 'https://www.youtube.com',
        description: 'video website',
        rating: 1,
        id: uuid()
    }
]


module.exports = {bookmarks}