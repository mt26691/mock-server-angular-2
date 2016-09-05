/**
* Post Controller
*
* @module      :: Post Controller
* @description	:: Auth Controller for CRUD Post
*/

module.exports = {

    //get posts data
    'getPosts': function (req, res) {
        var posts = [
            {
                id: "1",
                title: "post 1",
                content: "content 1",
            },
            {
                id: "2",
                title: "post 2",
                content: "content 2",
            },
            {
                id: "2",
                title: "post 2",
                content: "content 2",
            },
        ]
        //return data to client
        return res.json({ data: posts });
    },

    //let user logout
    'getPost': function (req, res) {
        return null;
    },
    'savePost': function (req, res) {
        return null;
    }
};