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
                id: "3",
                title: "post 3",
                content: "content 3",
            },
        ]
        //return data to client
        return res.json({ data: posts });
    },

    //let user logout
    'getPost': function (req, res) {
        let id = req.params.id;
        var data = { id: id, title: "post " + id, content: "content " + id }
        return res.json({ data: data });
    },
    'savePost': function (req, res) {
        var data = req.body;
        if (req.body.id == null) {
            data.id = "new";
            data.title = "Create post";
        }
        else {
            data.id = "update";
            data.title = "Update post";
        }

        return res.json({ data: data });
    },
    'delete': function (req, res) {
        let id = req.params.id;
        var data = { id: id, message: "Post deleted" };
        console.log('post deleted');
        return res.json({ data: data });
    }
};