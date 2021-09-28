"use strict"

const home = (req,res) => {
    res.send("여기는 루트입니다.");
};



const login = (req,res) => {
    res.send("여기는 로그인입니다.");
};

module.exports = {
    home,
    login,
};