import React, {useCallback, useState} from 'react';
//I'm importing theme here but you can do it anywhere.
import emeth, {themeClass} from 'emeth'
import blue from './blue';
import red from './red'
import {App} from './App';
import './theme';

const THEMES: Record<string, Record<string, Record<string, string>>> = {
    blue,
    red
};

let prev: () => void;
const tc = themeClass('Switcher');

export const Switcher: React.FC = () => {
    const [current, setCurrent] = useState('blue');

    const handleTheme = useCallback(({target: {value}}: React.ChangeEvent<HTMLSelectElement>): void => {
        setCurrent(value);
        if (prev) {
            prev();
        }
        if (THEMES[value])
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
