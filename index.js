module.exports = {
    roll: function () {
        let result = Math.floor(Math.random()*6)+1;
        console.log(`---> ${result}`);
        return result
    }
};