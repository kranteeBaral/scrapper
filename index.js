const PORT = 8000;
const URL = "https://www.google.com/maps/search/hotels+in+pokhara/@28.207006,83.921482,13z/data=!4m2!2m1!6e3?entry=ttu";

const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()


// axios(URL).then(response => {
//     const html = response.data;
//     const $ = cheerio.load(html);
//     console.log(html);
//     const listOfHotels = [];
//     $('.TFQHme', html).each(function() {
//         // const name = $(this).find('a').attr('aria-label');
//         const detail = $(this).find('a').attr('href');
//         listOfHotels.push({ detail})
//     })
//     console.log('The list of hotels ', listOfHotels);


    // $('.dcr-jfeohd').attr(href)
    // const newsArray = [];
    // $('.dcr-16c50tn', html).each(function(){
    //     const newsTitle = $(this).text();
    //     const link = $(this).find('a').attr('href');
    //     newsArray.push({newsTitle, link})
    // })
    // console.log(newsArray);   


// }).catch(error => console.log(`Error occurred: ${error}`))

app.listen(PORT, () => {console.log(`Server running on PORT: ${PORT}`)})


