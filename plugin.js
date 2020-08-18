module.exports = (options, webpack, om) => {
    const emeth = `${__dirname}`
    Object.assign(webpack.resolve.alias || (webpack.resolve.alias = {}), {emeth});
}