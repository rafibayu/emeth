Emeth
===


##Demo
See it in action [here]()

Or run it 

```sh
  git clone 
  cd emeth
  npm install
  npm run server &
  open http://localhost:8082
```

##Installation
```sh
 $ npm install emeth
``

##Usage
There are three things at play using emeth.
First CSS modules, it helps with them but, technically you don't need them.
They got "installed" with the theme function.

To access the theme css, pass your class to themeClass and it will return
a function that can be used for injecting your classes

### Installing a theme
theme.js
```js
 import './YourComponent.less';
 import emeth from 'emeth';
 emeth({YourComponent});

```

### Accessing a theme
YourComponent.js
```js

import {themeClass} from 'emeth';

export default class YourComponent extends PureComponent {

    return <div className={tc('your-component')}>
      <span className={tc('something', 'else')}>Theme Me</span>
    </div>

}

const tc = themeClass(YourComponent);


```
