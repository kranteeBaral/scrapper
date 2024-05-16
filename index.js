const PORT = 8000;
const URL = "https://www.theguardian.com/uk";

const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

axios(URL).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    // console.log(html);
    // $('.dcr-jfeohd').attr(href)
    const newsArray = [];
    $('.dcr-16c50tn', html).each(function(){
        const newsTitle = $(this).text();
        const link = $(this).find('a').attr('href');
        newsArray.push({newsTitle, link})
    })
    console.log(newsArray);   
}).catch(error => console.log(`Error occurred: ${error}`))

app.listen(PORT, () => {console.log(`Server running on PORT: ${PORT}`)})

// anchor class dcr-lv2v9o
