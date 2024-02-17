const User = require('../models/user');
const uuid = require('uuid4');

const insertDetails = async (req, res) => {

    const { name, email, age, country, password } = req.body;
    let code, resBody;
    if (!name || !email || !age || !country || !password) {
        code = 400;
        resBody = {
            message: 'All fields are required'
        };
    } else {
        try {
            const user = new User();
            const userDoc = await User.find({ 'email': email });
            if (userDoc.length > 0) {
                code = 409;
                resBody = { message: "emailId already exist. email: " + email };
            } else {

                user._id = uuid();
                user.name = name;
                user.email = email;
                user.country = country;
                user.age = age
                user.password = password;


                await user.save();

                code = 201;
                resBody = {
                    message: "User created Successfully.",
                    userInfo: {
                        userId: user._id,
                        name: user.name,
                        email: user.email,
                        country: user.country,
                        age: user.age,
                    }
                };
            }

        } catch (e) {
            code = 500;
            resBody = {
                message: "An error has occured.",
                error: e.message,
            };
        }
    }

    res.status(code).json(resBody);

};

const getDetails = async (req, res) => {
    const userId = req.params.userId
    let code, resBody;
    try {
        if (!userId ) {

            const userDocs = await User.find({});
            let userDataOUT = []

            if (userDocs.length > 0) {

                userDocs.forEach((userDoc) => {
                    userDataOUT.push({
                        userId: userDoc._id,
                        name: userDoc.name,
                        email: userDoc.email,
                        country: userDoc.country,
                        age: userDoc.age
                    });
                });

                resBody = {
                    message : "Users Doc fetched successfully."
                };
                
            } else resBody = {
                message : "No user exist in database."
            };
            
            
            resBody.users = userDataOUT;

        } else {
            const userDoc = await User.findOne({ '_id': userId });
            resBody = {
                message: "User info fetched successfully.",
                user: {
                    name: userDoc.name,
                    email: userDoc.email,
                    country: userDoc.country,
                    age: userDoc.age,
                },
            };

        }
        code = 200;
    } catch (e) {
        code = 500;
        resBody = { message: e.message, };
    }


    res.status(code).json(resBody)

};

const updateDetails = async (req, res) => {
    let code, resBody;
    const { name, country, email, password, age } = req.body;
    const userId = req.params.userId;
    if (!name && !country && !email && !age && !password) {
        code = 422;
        resBody = {
            message: 'Atleast one field is required.'
        };

    } else {
        try {
            let filter = { '_id': userId }
            let update = {};

            if (email) {
                const userDocs = await User.find({ 'email': email });
                if (userDocs.length > 0) {
                    code = 409;
                    resBody = {
                        message: "email already exist, please choose different email.",
                    };
                    return res.status(code).json(resBody);
                } else {
                    update.email = email;
                }
            }

            if (name) update.name = name;
            if (password) update.password = password;
            if (country) update.country = country;
            if (age) update.age = age;


            await User.findOneAndUpdate(filter, update);
            let [updatedDoc] = await User.find(filter);
            code = 200;
            resBody = {
                message: "User info updated successfully.",
                updatedUser: {
                    name: updatedDoc.name,
                    email: updatedDoc.email,
                    country: updatedDoc.country,
                    age: updatedDoc.age,
                },
            };

        } catch (e) {
            code = 500;
            resBody = {
                message: "Error occured while updating user doc.",
                error: e.message,
            }
        }
    }
    res.status(code).json(resBody);

};

const deleteDetails = async (req, res) => {
    let code, resBody;
    const userId = req.params.userId;
    try {
        const filter = { '_id': userId };
        let userDocs = await User.find(filter);

        if(userDocs.length > 0){
            await User.deleteOne(filter);
            code = 200;
            resBody = {
                message: `user with userId: ${userId} deleted successfully.`,
            };
        }else{
            code = 404;
            resBody = {
                message: `no user exist with userId: ${userId}, in database`
            };
        }
        
        

    } catch (e) {
        code = 500;
        resBody = {
            message: "Error occured while fetching userDoc.",
            error: e.message,
        };
    }

    res.status(code).json(resBody);

};
module.exports = {
    insertDetails,
    getDetails,
    updateDetails,
    deleteDetails
};

