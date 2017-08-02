'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (diffTheme) {
    themes.unshift(diffTheme);
    themeMap = {};
    return function () {
        var idx = themes.indexOf(diffTheme);
        if (idx > -1) {
            themes.splice(1, 0);
            themeMap = {};
        }
    };
};

var themes = [];
var themeMap = {};
/**
 * Adds a theme to the list of themes, returns a function that will remove said
 * theme
 *
 * @param diffTheme
 */


/**
 * Looks in the props for both ThemeClassName
 * and ClassName of the corresponding list of names.
 *
 * @param props
 * @param names
 * @returns {string}
 */
var settings = exports.settings = {
    debug: process.env.NODE_ENV != 'PRODUCTION',
    warn: function warn() {
        if (this.debug) {
            var _console;

            (_console = console).warn.apply(_console, arguments);
        }
    }
};
/**
 * Takes a class you want to style
 * @param Clazz
 * @returns {function(...[*])}
 */
var themeClass = exports.themeClass = function themeClass(Clazz) {
    var displayName = Clazz.displayName;

    if (!displayName) {
        settings.warn('no display name for themed class %s', Clazz);
    }

    return function () {
        for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
            names[_key] = arguments[_key];
        }

        var cacheKey = displayName + '/' + names.join('.');
        if (cacheKey in themeMap) {
            return themeMap[cacheKey];
        }
        var notfound = [];
        var ret = [];
        var themeLength = themes.length;
        for (var i = 0, r = 0, l = names.length; i < l; i++) {
            var name = names[i];
            if (name == null || name === false || name === true || String(name).trim() == '') {
                continue;
            }
            var found = false;
            for (var t = 0; t < themeLength; t++) {
                var current = themes[t][displayName];
                if (current && current[name]) {
                    ret[r++] = current[name];
                    found = true;
                }
            }
            //if no matching classes are found pass it through.
            if (!found) {
                notfound.push(name);
                ret[r++] = name;
            }
        }
        if (notfound.length) {
            settings.warn('could not find a className for \'%s\' for \'%s\' ', displayName, notfound.join(', '));
        }

        return themeMap[cacheKey] = ret.join(' ');
    };
};
//# sourceMappingURL=index.js.map