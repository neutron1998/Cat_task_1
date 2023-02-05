#leon_Problems : 
> Outline

    1- space between img and container 
    2
    3

*************************************************************
-------------------------------------------------------------
# 1- img and container : 
-------------------------------------------------------------
> problem : 

    - The problem is that the above isn't necessarily true. The browser up- or down-scales the image to maintain proportions when you set a width, in this case width:100%. For instance, if your picture is 100x100, but the box it is in is 300px wide, the picture will be upscaled to be 300x300, thus higher than the container.

> Solve : 

    - only change display for img for display block.