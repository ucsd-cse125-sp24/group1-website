# Week X Report

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

Meeting: [Sunday, May 26, 2024](#meeting-notes)

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

### Kenzo

## Meeting notes

Today's meeting was moved online because four of us are sick.

Present: Sean, Tyler, Will, Kenzo, Killian

- it's week 9. two weeks left. no playable demo yet. probably no combat
  - sean: currently there's punching, but that's probably more sabotage than combat
  - for combat, we'd need inventory, potions, armor, bows, which can't rotate in your hand
  - need big boss model, crafting table models
- we need: win condition, new map and that's it
  - and playtest
    - hard to select items
- models a little scuffed
  - need to give each item a different collider
- rn there are sound effects,
  - marcelo said he wanted to. not sure where he's been
    - he's playing minecraft
- game is a bit laggy
  - probably with many items/meshes
- playtesting
  - sound effects are funny
  - we have spawner now, but it's buggy (need to throw axe at it but it currently works without it)
    - player collisions also spawn item
  - hit reach distance is very far
  - lag is an issue
  - kenzo's PC has same issue as Nick's, with weird buggy rendering
  - reticle not being rendered
  - crafters work, spawners work
  - standing on players/crafters makes you really slow, and can't jump on players
  - need timer
  - options menu, an actual UI
    - mouse sensitivity
- killian: do we need big/little boss
  - not as important. just need crafting models (furnace and crafting table and potion station)
    - forest for wood
    - ore vein for ore
    - spiderwebs for string
    - mushrooms
    - crafting stations: anvil for making knife, sword, armor, ingot. bow and magic sauce at their own tables. furnace to combine wood + ore for ingot
- killian: map idea for two levels:
  - top level is abandoned living area: crafters and wood source (forest/broken furniture)
  - lower level is darker, abandoned work area: mushrooms, iron, spiderweb
  - tyler: have holes from top to bottom, can throw items down and accidentally fall. and prevents people from clashing with e/o on the stairs
  - tyler: need to double size of the map
    - killian: will make upper level larger
  - tyler: need menu/UI for showing tutorial page
- divy up work instead of making it free-for-all
  - sean: performance
  - will: win condition, fix crosshair
  - kenzo: still trying to work on blind sabotage, unsure how to move camera
    - will already did that. boss can spore player to reduce vision
    - tyler: just keep what you're doing
  - we need particles
    - can implement it like sound. server plays particles at position, `this.game.playParticle`
  - combat could be free for all since it's not MVP
    - will could do it soon
  - tyler: fix spawner, populate crafters. after that, implement combat, like sword or bow shoot arrows
- tyler: doesn't seem like people are passionate about this anymore. it's week 9. some people have been absent
  - will: people are sick
- marcelo and nick not here. cringe
- can playtest on tuesday. game is at playtestable state
- will tried to fix reticle but still doesn't work. sean might work on it since will can't reproduce it
- killian will be back in SD tomorrow
