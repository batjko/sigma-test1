const axios = require('axios')

exports.handler = (event, context, callback) => {
    axios.get('https://api.chucknorris.io/jokes/random')
        .then(({ data: { icon_url, value: joke } }) => {
            callback(null, { joke, icon_url });
        })
        .catch(callback)
}
