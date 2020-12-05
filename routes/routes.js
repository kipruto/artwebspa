/** @format */

const router = require("express").Router();
const User = require("../model/User");
const Post = require("../model/Post");
const jwt = require("jsonwebtoken");
const verify = require("./auth");
var fs = require("fs");
var path = require('path');
const multer = require("multer");


router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
        return res.status(401).json({
            title: "User not found",
            err: "Invalid user/password combination",
        });
    //incorrect password
    if (req.body.password !== user.password)
        res.status(401).json({
            title: "password",
            err: "Invalid password",
        });

    //Successful  login

    if (res.status === 200) {
        return res.status(200).json({
            title: "login success",
            token: token,
        });
    }

    const token = jwt.sign({ userId: user._id }, "privatekey");
    res.header("auth-token", token).send(token);

    console.log(token);
});

router.post("/register", async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        phone: req.body.phone,
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        console.log(error);
    }
    res.redirect("/login");
});

//add new post

router.post("/gallery", async (req, res) => {

    //upload image
const imgfile = req.body.Imagefile
console.log(imgfile)
    const storage = multer.diskStorage({
        destination: function (req, file, next) {
            next(null, ".././public/uploads/images/");
        },
    
        //add back the extension
        filename: function (req, file, next) {
            next(null, file.originalname);
            console.log(file)
        },
    });
    
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 1024 * 1024 * 3,
        },
    });
    upload.single(imgfile);

    const post = new Post({
        arttitle: req.body.arttitle,
        artcategory: req.body.artcategory,
        artdescription: req.body.artdescription,
        arttags: req.body.arttags,
        likes: req.body.likes,
        comments: req.body.comments,
        // Imagefile: {
        //     data: fs.readFileSync(path.join(__dirname + '.../../public/uploads/images/' + req.body.Image)),
        //     contentType: "image/jpg",
        // },
    });
    try {
        const savedPost = await post.save();
        res.send(savedPost);
        console.log(savedPost);
    } catch (error) {
        res.status(400).send(error);
    }
});

//get post

router.get("/gallery", async (req, res) => {
    try {
        const posts = await Post.find();
        if (!posts) {
            res.write("No posts found");
        }
        const sorted = posts.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        res.status(200).json(sorted);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});
//get a specific post

router.get("/gallery/:id", async (req, res) => {
    try {
        var id = req.params.id;
        const post = await Post.findOne({ _id: id });

        if (!post) {
            res.write("No posts found");
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

//edit  post
router.patch("/gallery/:id", async (req, res) => {
    var id = req.params.id;
    const update = req.body;

    try {
        await Post.findByIdAndUpdate({ _id: id }, update);

        const posts = await Post.find();
        if (!posts) {
            res.write("No posts found");
        }
        const sorted = posts.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        res.status(200).json(sorted);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

// delete post

router.delete("/gallery/:id", async (req, res) => {
    try {
        const posts = await Post.deleteOne({ _id: req.params.id });
        res.status(200).json("post deleted");
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});
//private route

router.get("/portfolio", verify, (req, res) => {
    res.send("you need to be logged in to view");
    console.log(res);
});

module.exports = router;
