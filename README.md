# This WIP project is a frist try with a masonry, based on the CSS Grid course from Wes Bos

_First step is based on Wes Bos CSS Grid Course (for which you can sign up for free) but I've already started to tweak the original Wes Bos code so it already looks different._

[Wes Bos courses](https://wesbos.com/courses)  
[CSS Grid course](https://cssgrid.io/)  
[Course video 20 - Image Gallery](https://courses.wesbos.com/account/access/5aeb2ed1477d322f9967f8fd/view/249560994)  
[Wes Bos Image Gallery code on GitHub](https://github.com/wesbos/css-grid/tree/master/20%20-%20CSS%20Grid%20Image%20Gallery)  

## Wes Bos 

This is what Wes Bos created, how it should look like.
  
No padding, yellow overlay with button:  

![Grid](screenshots/Screenshot-grid.png)  

Overlay which shows the whole image:  
![Overlay](screenshots/screenshot-overlay.png)

## Tech

Up until now, nothing fancy:  
HTML  
CSS  
JavaScript (even though that's a bit fancier)  
No build workflow yet  

More to follow when I get there.  

## Findings for CSS Grid course from Wes Bos
### Pro
- I really like how he auto-generates the images on the page via JavaScript, and have them refreshed via reload  
- I also kinda like the transitioning item-overlay, even though I did not get it to work how he got it to work (atm I'm not sure if I absolutely need to get it to work how he does)  
### Con
- It's not mobile first  
- Due to in the end fixed image sizes, only halfway properly displays images, depending on (pixel width of) view  
### Outcome / Work in progress
- I'm going to fiddle a bit more with this to find out how to make it a bit more resposive and prettier when it comes to delivering images on site  
- If I don't get far, I will then try another CSS Grid masonry approach within another project  
