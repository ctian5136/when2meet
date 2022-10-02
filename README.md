# Description:
This is an implementation of the When2Meet scheduler, focusing on a user's experience in selecting which times work for them.

## Key Distinguishing Features:
- When2Meet consists of two time tables in a side by side column layout.
- It allows for users to click and drag on the left time table to select their own availablity and displays it in real time on the time table to the right.
- The left time table starts out red to show "unavailability" and the user selection marks the slots available as green. 
- Though my implementation only shows one person entering in their availability, if the next person were to also enter theirs in, the time table on the right would show the quantity of people available at a certain time slot using differences in opacity of the green color. 

## To Access:
- The website is deployed on Github, click this link to play: https://ctian5136.github.io/when2meet/.
- You can also download the repo and run npm start in your terminal after cd-ing to the folder. 

## To Play:
- Click and drag to select your availability!

### Sources:
- To implement the dragging function I modified: https://github.com/mcjohnalds/react-table-drag-select
