import React, {useState, useCallback}   from 'react';
//I'm importing theme here but you can do it anywhere.
import emeth, {themeClass} from 'emeth'
import blue                from './blue';
import red                 from './red'
import {App}               from './App';
import './theme';

const THEMES = {
    blue,
    red
};
console.log(THEMES.red.App.container, THEMES.blue.App.container);
let prev;
const tc = themeClass('Switcher');

export const Switcher = function (props) {
    const [current, setCurrent] = useState('blue');

    const handleTheme = useCallback(({target: {value}}) => {
        setCurrent(value);
        if (prev) {
            prev();
        }
        console.log('Theme', value, THEMES[value], THEMES[value].App, THEMES[value].App.container);
        prev = emeth(THEMES[value]);
    }, [current]);

    return <div className={tc('container')}>
        <h3 className={tc('header')}>Emeth</h3>
        <select onChange={handleTheme} value={current}>
            <option value='blue'>Blue</option>
            <option value='red'>Red</option>
        </select>
        <App name={current}/>
    </div>

}
