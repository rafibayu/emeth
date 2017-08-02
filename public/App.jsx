import React from 'react';
//I'm importing theme here but you can do it anywhere.
import './theme';
import { themeClass } from 'emeth'

export default class App extends React.Component {
    render() {
        return <div className={tc('container')}>
            <h3 className={tc('header')}>Emeth</h3>
            <p className={tc(
                'example-of-class-that-does-not-exist-check-console',
                'content')}>
                A really interesting paragraph of text. Or at least a sentence.
                Or two. Or three.

                Check the console for a warning for the class that is not defined.
            </p>

        </div>
    }
}
const tc = themeClass(App);
