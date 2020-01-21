# Webpack-EJS-Boilerplate
Webpack static boilerplate, with EJS + SCSS

### [DEMO](https://gabbylin.github.io/Webpack-EJS-Boilerplate/dist/index.html)

## Basic Usage

Use `npm i` installation.

Use `npm run dev` to run in localhost.

Use `npm run build` to package static HTML page.

## File Tree

```
├── src                                      
│   ├── css                                     
│   │   ├── style.scss 
│   │   ├── icomoon.scss                       
│   ├── fonts
│   │   ├── icomoon.eot 
│   │   ├── icomoon.woff                                     
│   │   ├── icomoon.ttf    
│   │   └── icomoon.svg   
│   ├── images                                  
│   │   ├── face.jpg                         
│   ├── js                                      
│   │   ├── print.js 
│   ├── include                                      
│   │   ├── _header.ejs   
│   ├── index.js 
│   ├── page1.ejs                           
│   └── index.ejs    
├── package.json                                                                                              
├── package-lock.json                                
├── webpack.common.js 
├── webpack.dev.js                           
├── webpack.prod.js                            
```

## EJS Layout

Common component like `<header>` & `<footer>` in the `include` folder.

Use `<%- include('./include/_header') %>` put them on page that you want.

The `.ejs` out of `include` folder will be independent HTML page.

**As you need to create more independent HTML page, remember to fix `webpack.common.js`.**

This will be optimized in the future.

## SCSS

Every independent `.scss` need to be imported in `index.js`.

Such as:
```no-highlight
import './css/style.scss';
import './css/icomoon.scss';
```
You can also import `.scss` to another `.scss` file, and only import one `.scss` to `index.js`.

## Assets

### images

All images in `img` folder, when you `build` it will copy same folder under in `dist`, they could be used in HTML page and css background.

### fonts

This boilerplate use [icomoon](https://icomoon.io/) as default font icon, it will be extend by yourself when you need more icons, go one step further to [icomoon](https://icomoon.io/).

## Todo

* ejs layout optimized

* add babel

* add Jquery or other libraries

* add GA or GTM

* google structured data
```
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "http://www.example.com",
  "name": "Unlimited Ball Bearings Corp.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-401-555-1212",
    "contactType": "Customer service"
  }
}
</script>
```

* enhance Lighthouse score

