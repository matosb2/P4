# Website Performance Optimization Project 4
This marks the fourth project of the Front-End Web Developer Nanodegree.  The 
task was to simply achieve a score of 90 or above in both mobile and Desktop.

### Installation and How to view
1. Download the zip file up at the top
2. Unzip P4-Master to a directory you're comfortable with, perhaps Desktop
3. You can choose to go into either the dist or the src folder
4. You can open the files index.html or pizza.html
5. Each one of those html files will bring up the different sites that were worked on

### Tools Used:
1. Sublime Text 3:
    - HTML/CSS/JS Prettify
    - Markdown Light
    - Markdown Preview
2. Grunt:
    - jshint
    - responsive-images
    - uglify
3. IrfanView 4.41
4. Ngrok
5. Python 3+
6. Node.js
7. Git

### Part One of Project:
##### Optimizations made for PageSpeed Insights on index.html
- Added media type to print.css stylesheet to stop render blocking
- Added Async after google analytics script and perfmatters.js script to prevent blocking
- Resized and compressed with IrfanView but also Grunt as well for more practice
    + This helped raise the score in PageSpeed Insights by a substantial amount
    + IrfanView did a better job at compressing and resizing few images
    + Grunt does a better job at compressing and resizing lots of images
- Inlined css and removed its respective css sheet as there was no need which made it faster
    + Did this by just adding the css in it's own section where the style sheet was and surrounded with open and close style tags
- Minified html using online website [tool](http://www.willpeavy.com/minifier/)
    + This provided a very little improvement compared to the rest

### Part Two of Project:
#####Optimizations made for Rendering Website scrolling and slider at 60fps
- Fixed Up changePizzaSizes function (the slider) to prevent Forced Synchronous Layout (FSL)
    + Was going through the [Browser Rendering Optimization](https://www.udacity.com/course/viewer#!/c-ud860-nd/l-4147498575/e-4154208580/m-4142388616) course and this was one of the quizzes
- Optimized updatePositions functioned which was causing much problems
- Optimized the elements at the end of the file before updatePositions is called
    + Optimized this from 200 pizzas to 30 at first but then it wasn't enough pizzas to fill a portrait display on mobile so changed to a calculation I found from someone else, that fit the pizzas to the browser's window's size
    + 200 pizzas was too much and was causing low framerates on scroll, probably the main culprit in this whole project
- Fixed the css up on .mover so it would change all the paint going on into compositing which ultimately helped increase a bit of fps

###Part Three of Project: 
#####Optimizations done now the markdown, and directory changing fun
- Created dist and src folders like instructions said
- Copied all my work into each of these folders
- The src folder contained everything's full source while dist contained everything minified
- Created all this markdown to look as nice and informative as possible

### References:
1. https://www.udacity.com/course/viewer#!/c-ud860-nd/l-4147498575/e-4154208580/m-4142388616
2. https://discussions.udacity.com/t/project-4-how-do-i-optimize-the-background-pizzas-for-loop/36302
3. https://github.com/uncleoptimus/udacityP4/blob/gh-pages/views/js/main.js