import _ from 'lodash';
import './css/style.scss';
import './css/icomoon.scss';
import printMe from './js/print.js';
import IMG from './img/face.jpg';
//js css img ... all in index.js


if (process.env.NODE_ENV !== 'production') {
   console.log('This is development mode!!');
}



async function getComponent() {
    
    const element = document.createElement('div');
    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
    const btn = document.createElement('button');
    const span = document.createElement('span');
    
    span.innerHTML = _.join(['Gabby\'s', 'webpack'], ' ');
    btn.innerHTML = 'Click and check console';
    btn.onclick = printMe;
    
    element.appendChild(span)
    element.appendChild(btn);
    element.setAttribute('class','hello')
    
    return element;
}
  

getComponent().then(component => {
    document.body.appendChild(component);
})