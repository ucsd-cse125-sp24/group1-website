# Week 7 Report

<!-- add at least one of your latest screenshots to your group page -->

<div class="gallery">
  <figure>
    <img src="../../images/concept/little-guys.png" alt="ALT">
    <figcaption>
      8 little guys
    </figcaption>
  </figure>
  <figure>
    <video src="../../images/dev/first-wireframe.mp4" controls preload="none" poster="../../images/dev/first-wireframe-poster.png"></video>
    <figcaption>
      the camera is moving on the client side, and all the boxes are being moved on the server side. the server only moves everything at 25 fps which is why it looks choppy
    </figcaption>
  </figure>
</div>

## Group status

<!-- include both the week # and the date of the meeting -->

Meeting: [Sunday, May 19, 2024](#meeting-notes)

<!-- summarize your overall status for the week -->

<!-- add a statement summarizing the group morale (feel free to be creative in expressing your morale) -->

## Individual statuses

1. what were your concrete goals for the week?
1. what goals were you able to accomplish?
1. if the week went differently than you had planned, what were the reasons? note that this happens regularly...I would prefer you to be aggressive in what you want to try accomplish rather than limit yourself to goals you know you’ll easily achieve. so answering this question is more of a reflection on the development process and the surprises you encounter, it’s not at all an evaluation.
1. what are your specific goals for the next week?
1. what did you learn this week, if anything (and did you expect to learn it?)
1. what is your individual morale (which might be different from the overall group morale)?

### Nick

### Marcelo

### Tyler

1) what were your concrete goals for the week?
My concrete goals for the week were to:

1. Finish the recipe system
2. create some model-less crafting tables and test that they work with a variety of resources
3. create a small variety of resources
4. Maybe have the white box test complete, so we can all play the game together? that would be really cool

2) what goals were you able to accomplish?

The recipe system is fully finished, all resources are able to be modularly created, I tested that they work (they do), and created a creation and deletion system to make deleting and creating items smoothing and without game breaking bugs!

also did a small smidgen of work on like models n stuff.

We got some basic white box testing! We were all able to get on and fuck around with it in 3D, which is great.


3) if the week went differently than you had planned, what were the
reasons? note that this happens regularlyâ€¦I would prefer you to
be aggressive in what you want to try accomplish rather than limit
yourself to goals you know youâ€™ll easily achieve. so answering
this question is more of a reflection on the development process
and the surprises you encounter, itâ€™s not at all an evaluation.

Things went wonderfully tbh. Finally pushed myself out of the slump and we're back in it


4) what are your specific goals for the next week?


1. Iron out a bug or two in the creation system
2. Create a spawner class (should be so simple)
3. bug fixes! We've got a list now


5) what did you learn this week, if anything (and did you expect to learn it?)

I don't know that I learned a ton?
I managed to get a good amount of work done which is good! 
I'm much more comfortable with tyepscript now, and I'm able to actually create in the system without pair programming.

6) what is your individual morale (which might be different from the
overall group morale)?

9/10, regarding the project! We're definitely going to finish in time. We're a little sad that we won't be able to actually create a combat system, which is definitely annoying, but we are going to have a workable product super soon, I know it. 

### Killian

1. My concrete goals for this week was to make all the weapons, craftable items, and resources for the game.
2. This week I was able to finish the weapons, resources, and most of the craftable items, with the exception of the armor.
3. For this week, I mostly met my goals from last week except for the armor.
4. Next week, I want to focus on designing a finalize version of the map so when I get back from my trip I can model it.
5. Like last week, I've also gotten more comfortable with the Blender workflow and am able to make models a little faster.
6. I feel alright this week since I mostly accomplished my goal. However, I’m a little nervous for taking a week off from modeling for my trip since we’re getting close to the deadline.

### Sean

### Will

1. Revamp map collision to use boxes instead of a triangle mesh (because the cannon.js Trimesh only collided with spheres and was easy to clip through), revamp player movement to feel better.
2. I updated our server-side map parsing algorithm to generate a list of Box shapes instead of one Trimesh shape for map collision. This requires a special collider model separate from the map model itself. It should be pretty easy to quickly make one in the same Blender file or perhaps we can find a way to generate it automatically. I then rewrote our player movement code to apply impulses instead of forces, which feels a lot nicer to play (and closer to other games). I also fixed a couple minor issues such as not updating the look direction server-side until a new input event.
3. Things generally went according to plan this week. I said that last week and then had to rewrite the map colliders, so maybe next week we’ll find some game breaking problem with the movement code.
4. My goal for next week is to work on the boss experience. Specifically, figure out how the boss player will actually control the boss—this might require us to return the boss to first-person instead of the top-down perspective it currently has, given the ways we want the boss to interact with other entities. Along with that I will actually implement some of those interactions. If I have time, I might also try to implement the QTE in the second stage which will stand in for an actual boss fight if we don’t complete it.
5. I didn’t really learn anything that I can recall. I guess I saw why most games probably have a custom character controller that doesn’t rely on the physics engine for movement.
6. Still feeling pretty good. On Sunday four of us got on the demo server and jumped around, which both showed that we now have something tangible and revealed several issues which we then fixed. I do hope that we can get an actual combat stage by the demo day.

### Kenzo

what were your concrete goals for the week?

My concrete goals for the week is to implement the Boss entity.

what goals were you able to accomplish?

I was able to implement the boss entity file where the hit boxes of the boss is smaller than the player and it moves faster. Then the boss entity also has a top down pov that allows the boss player to oversee the map while moving.

if the week went differently than you had planned, what were the reasons? note that this happens regularly…I would prefer you to be aggressive in what you want to try accomplish rather than limit yourself to goals you know you’ll easily achieve. so answering this question is more of a reflection on the development process and the surprises you encounter, it’s not at all an evaluation.

At first my plan is to implement the collision of the map but it was taken care by William, so I changed my goal for the week which is to implement the boss entity, but I think this week went well.
what are your specific goals for the next week?

My goals for next week is to implement the interaction between the boss and the player where the boss can blind the player.

what did you learn this week, if anything (and did you expect to learn it?)
I learned more about the networking code and I found out that by doing the code instead of just looking it I was able to understand more.


what is your individual morale (which might be different from the overall group morale)?

I am excited to see how our games will go in the next few weeks, kinda nervous because there are a lot of things to do, but we are almost there!

## Meeting notes

Present:
