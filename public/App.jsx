import React from 'react';
//I'm importing theme here but you can do it anywhere.
import './theme';
import { themeClass } from 'emeth'
import blue from './blue';
import theme from 'emeth';

const THEMES = {
    blue
};
export default class App extends React.Component {
    state = {};

    handleTheme = ({ target: { value } }) => {
        //remove the current theme - default will not be removed.
        this.state.theme && this.state.theme();
        //its ok if its null, theme does not do anything then.
        this.setState({ theme: theme(THEMES[value]) });
    };

    render() {
        return <div className={tc('container')}>
            <h3 className={tc('header')}>Emeth</h3>
            <select onChange={this.handleTheme}>
                <option value='default'>Default</option>
                <option value='blue'>Blue</option>
            </select>
            <p className={tc(
                'example-of-class-that-does-not-exist-check-console',
                'content')}>
                A really interesting paragraph of text. Or at least a sentence.
                Or two. Or three.

                Check the console.log for a warning for the class that is not
                defined.
            </p>

        </div>
    }
}
const tc = themeClass(App);
