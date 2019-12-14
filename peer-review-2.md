## P3 Peer Review (#2)

+ Reviewer's name: Gerald Derrick (gaderrick)
+ Reviwee's name: Claudio Bustamante
+ URL to reviewee's Github repo: *<https://github.com/claudiomanuelboston/e28/tree/master/p31>* *<http://p31.pabideas.com>*

*Answer the following questions in regards to the student's project you are reviewing. Include context and code examples in your answers when relevant.*

### Are you able to produce any errors or unexpected results?
1. Two css files threw 404 errors: fullcalendar.min.css and fullcalendar.print.css (in the console)
2. Adding a new show redirected me to a calendar for the month, but there was no indication of why, and the calendar did not display the show I entered.

### Were there any parts of the interface that you found confusing or unclear?
1. There was not much in the way of instruction on how to use the site (aside from the create a new show). 
2. Maybe breaking the site into different sections for admin and user would help. 
3. There is a favorites section, but it doesn't really indicate what to do or how to load items into it.
4. While not anything wrong, several of column names in his data source had extra characters (n, s, d) in front of them. I'm guessing this was for knowing the type of data being stored in them, but not sure since not all columns had them.
```
"post": [
{
    "sName": "CARMINHO",
    "sDescription": "<p>Chick Corea: In the Mind of a Master is an exclusive documentary special, taking viewers behind the scenes with jazz legend Chick Corea during the making of his album Antidote with the Spanish Heart Band. </p>",
    "dDate": "2019-11-26T19:30:00+05:30",
    "nTicketPrice": "39.5",
    "nGenreId": 1,
    "nArtistId": 5,
    "start": "2019-11-26T19:30:00+05:30",
    "title": "CARMINHO",
    "id": 1
},
```

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
He used regex in a function, but doesn't really explain what it is for. A single line comment would be good.

### Are there any parts of the code that you found interesting or taught you something new?
1. He created a "shows.service.js" file that setup functions to handle all of the various data retreival operations for his app. Very easy to read and I love the idea!
```javascript
getPosts() {
    return axios.get(baseurl + "post");
}

getGenre() {
    return axios.get(baseurl + "genre");
}

getPostByGenre(Id) {
    if (Id == 0) {
        return axios.get(baseurl + "post");
    } else {
        return axios.get(baseurl + "post?nGenreId=" + Id);
    }
}
```

### Are there any best practices discussed in course material that you feel were not addressed in the code?
The author used a different naming conven for folders than we went over. Not wrong, just different.

### Do you have any additional comments not covered in the above questions?
1. Very well laid out website overall. 
2. The CSS used works well for the site. 
3. Nice job implementing the error checking in P3 - I tried, but could not break it. 
4. Excellent use of terniary operators to keep code compact. 
5. The menu page has room for further automation that would make it awesome (ie making the menu items a data source).