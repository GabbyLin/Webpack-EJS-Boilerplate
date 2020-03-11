# Webpack-EJS-Boilerplate

Webpack static boilerplate, with EJS + SCSS, multiple pages.

### [DEMO](https://gabbylin.github.io/Webpack-EJS-Boilerplate/dist/index.html)

## Basic Usage

Use `npm i` installation.

Use `npm run dev` to run in localhost.

Use `npm run build` to package static HTML page.

## File Tree

```
├── src  
│   ├── api (xxx.json)  
│   ├── common
│   │   ├── _head.ejs 
│   │   ├── _header.ejs
│   │   ├── _footer.ejs
│   ├── include (application/ld+json)
│   │   ├── index.ejs
│   │   ├── page2.ejs
│   ├── css                                     
│   │   ├── style.scss 
│   │   ├── icomoon.scss
│   │   ├── header.scss 
│   │   ├── footer.scss                       
│   ├── fonts
│   │   ├── icomoon.eot 
│   │   ├── icomoon.woff                                     
│   │   ├── icomoon.ttf    
│   │   └── icomoon.svg   
│   ├── img                                  
│   │   ├── index.jpg 
│   │   ├── page2.jpg                         
│   ├── js                                      
│   │   ├── _FirebaseConfig.js 
│   │   ├── DataSend.js 
│   │   ├── Ajax.js 
│   │   ├── Share.js 
│   ├── tpls                                      
│   │   ├── index.ejs  
│   │   ├── page2.ejs   
│   ├── entry.js                          
│   └── entry.ejs (template)
├── pages.json    
├── package.json                                                                                              
├── package-lock.json                                
├── webpack.common.js 
├── webpack.dev.js                           
├── webpack.prod.js                            
```

## Page

### pages.json

Recording every page and page's meta for webpack render.

### enter.js & entry.ejs

`entry.ejs` is the main template of web, just like `layout`. Webpack will combine the different content from `tpls` to the multiple html pages.

It render content by `namne` of `pages.json`, you can also use `<% if %>` or `<% for %>` to generate html.

All css and js should be put in `entry.js`.

JQuery plugin also be used as `Ajax.js`.


### common
Web common component included in `entry.ejs`.

### tpls
Main content of every web page, the part will be rendered in the `container` of `entry.ejs`.

Images sould be required as `<img src="<%= require('../img/index.jpg').default %>" alt="">`, read more in [this](https://stackoverflow.com/questions/59070216/webpack-file-loader-outputs-object-module/59075858#59075858)

### include
The Google Structured Data included in head of every page.

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

## Assests

### fonts

This boilerplate use [icomoon](https://icomoon.io/) as default font icon, it will be extend by yourself when you need more icons, go one step further to [icomoon](https://icomoon.io/).

### images

All of images will be optimized, use `[hash:8].[ext]` to replace their origin path.

## Firebase

The project connect with [Firebase](https://firebase.google.com/) Database.

Set your own Firebase project, and edit config in `_FirebaseConfig.js`.

You can also connect other product from firebase.

If you don't need firebase, just delete it.


## Proxy

`proxy` can be useful when you have separate API backend development server and you want to send API requests on the same domain.

In the `webpack.dev.js`, you fill `target` with domain and you can use API.

But the `localhost` will display in **unsafe browsing site status**, it won't cause any problem when using API.

## DefinePlugin

If your project need someting different between development mode and production mode, `DefinePlugin` is useful.

Edit `DefinePlugin` in `webpack.dev.js` and `webpack.prod.js`, you can use different variable in different mode.

More detail about how to use `DefinePlugin` jsut read [official document](https://webpack.js.org/plugins/define-plugin/#root)


## Reference

Thanks for many developers provide their idea.
* a Chinese project [sdgzc](https://coding.net/u/tuhui/p/sdgzc/git)
* a segmentfault [article](https://segmentfault.com/a/1190000007126268)
* [webpack official document](https://webpack.js.org/)









