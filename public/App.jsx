import React        from 'react';
import {themeClass} from 'emeth';


const tc = themeClass({displayName: 'App'});
/**
 * The idea here is that we can statically call tc
 * and it will resolve the className.   There is no __direct__ link
 * between the theme and css.
 *
 * @param name
 * @return {JSX.Element}
 * @constructor
 */
export const App = ({name}) =>{
    const className = tc('container');
    console.log('App', className);
    return (<p className={className}>
        A really interesting paragraph of text. Or at least a sentence.
        Or two. Or three.

        Check the console.log for a warning for the class that is not
        defined.
        {name} of theme
    </p>);
}
