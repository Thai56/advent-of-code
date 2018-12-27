const frequencyAdjuster = (x) => {
    return x.reduce((acc, curr) => {
        return acc + Number(curr);
    }, 0);
}

module.exports = frequencyAdjuster;
