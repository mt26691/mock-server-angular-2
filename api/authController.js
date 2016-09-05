/**
* Auth Controller
*
* @module      :: Auth Controller
* @description	:: Auth Controller for log in, check user is login
*/

module.exports = {

    // login by username and password
    'login': function (req, res) {
        var data = req.body;
        data.accessToken = "demo access token";
        console.log(req.body);
        return res.json({ data: data });
    },

    //check is loggin by access token
    'isloggedin': function (req, res) {
        return res.json({ username: "abc", "accessToken": "access token demo" });
    }
};