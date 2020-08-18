module.exports = (options, webpack, om) => {
    const emeth = `${__dirname}/lib`
    Object.assign(webpack.resolve.alias || (webpack.resolve.alias = {}), {emeth});
}