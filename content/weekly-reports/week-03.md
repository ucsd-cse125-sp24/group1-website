# Week 3 Report

<!-- add at least one of your latest screenshots to your group page -->

<div class="gallery">
  <figure>
    <img src="../../images/dev/sphere-wireframe.png" alt="ALT" style="background-color: black;">
    <figcaption>
      Sphere wireframe around a cube with toon shading.
    </figcaption>
  </figure>
  <figure>
    <img src="../../images/dev/lighting-fish1.png" alt="ALT">
    <figcaption>
      The current point lighting implementation on our fish1 model.
    </figcaption>
  </figure>
  <figure>
    <img src="../../images/dev/lighting-fish2.png" alt="ALT">
    <figcaption>
      The current point lighting implementation on our fish2 model.
    </figcaption>
  </figure>
</div>

## Group status

<!-- include both the week # and the date of the meeting -->

Meeting: [Sunday, April 21, 2024](#meeting-notes)

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

### Killian

### Sean

### Will

1. My goals for the past week were to implement point lighting and camera panning.
2. I implemented camera panning using the mouse and Sean extended it to work on touchscreen devices. I also made an initial point light implementation, but there are some limitations imposed by WebGL (like a small number of lights per draw) and some unresolved questions that depend on other decisions we need to make (like where to store the light objects). For the limitations, whether/how we need to find workarounds will also depend on some game design decisions, like whether we want a darker ambiance.
3. I would have liked to do more testing on the lighting implementation so we can see how many objects and lights it can handle before performance starts suffering. It took a while to iron out all the texture map and shader bugs so I didn’t get to do that as of writing this. I think it’ll end up being easier to do some stress testing anyway after we have a more well-defined client-server interaction, so I can just directly test on real entities instead of fake/temporary ones.
4. Goals for next week include testing the lighting more (make sure shadows look correct and find performance limits), solidifying our shader pipeline (e.g. figuring out how to incorporate the cel shader as a postprocessing step) with the rest of the graphics team, making some placeholder Blender models if needed, and helping Kenzo with a particle system if needed.
5. I learned that WebGL has some stricter limitations than OpenGL, e.g. on the allowed combinations of framebuffer attachments or how we have to make 6 separate draw calls to render a cubic depth map for various reasons. This is a little bit of a pain because it means that some tutorials designed for OpenGL don’t work in WebGL, and it’s not always obvious that the reason is because WebGL doesn’t let you do a particular thing that OpenGL allows. But no one said graphics is easy.
6. I think we’re still making good progress, although it’s taken longer to get client inputs onto the server than maybe we were hoping. But we have a solid graphics foundation shaping up.

### Kenzo

## Meeting notes

Present: Sean, Marcelo, Will, Kenzo, Tyler

Excused: Killian

- Tyler: rn we are only sending are colliders. but only character model is being displayed. so how does client know what colliders belong to what model
  - game state is essentially list of entities
  - marcelo: serialize game info, like phase of the game?
    - tyler: first part of game packet could be game metadata, followed by entities. game data is later problem
    - task for Sean: read model string, display model
- (networking) Update: modified the serialization system so that it correctly serialize from the game object, mild restructurization over the entities to include their own serialzation methods
- Tyler: we will probably have to restructure the team because we are reaching a point where graphics and network are setup
