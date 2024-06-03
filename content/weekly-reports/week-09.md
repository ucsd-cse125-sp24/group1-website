# Week 9 Report

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

Meeting: [Sunday, June 2, 2024](#meeting-notes)

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

<style>
  strong {
    background-color: #ff03;
  }
</style>

Present: Kenzo, Will, Killian, Nick, Sean, Marcelo

- nick: number of things that could be done. nick hasnt worked on the game because unsure what to work on
- nick: we need to all develop at the same time
  - will: on the same computer, same keyboard
    - nick: designate keys. marcelo can get arrow keys
- sean: we have ui. game stages. can choose role
  - next: killian's map
- marcelo: do we have working boss battle?
  - will has combat code on a branch
    - should merge what he has
  - we are doing branching now
- will: after combat is merged, we are done. just need map
- nick: we need screen to show winner
  - sean: we have this on the lobby
  - temporary win condition is make >= 10 weapons
  - tyler was saying there was a crystal that the boss attacks, so heroes defend the crystal
  - nick: meta of the game: boss attacks crystal all the time
  - will have to talk to tyler on tuesday. but boss could win by killing crystals or all heroes
  - nick: having killing is an interesting idea. he thought of it as a party game where there's no death because you'd be sitting there
    - could respawn after 15 seconds
    - sean: could also keep combat stage short
- reminds nick of game _Oh Deer_. shittily made, but like spy party game, social deception, spy has to do something, wheels(?)
  - deer scattered around map, some real players, some fake. players have to eat mushrooms, and it shows up as a thing
  - condition: hunter has to kill all player deer. if they kill too many real deer or run out of time, then the hunter has to escape into a cabin
  - once timer hits zero, boss grows all big and the players have to use weapons, and boss can attack player. when boss small, cant do mcuh but trip players, but in combat stage, boss can smash players, heros have to smack boss
  - feasible
- sean: crafting and combat stages. combat stage should be short enough that players can permanently die. if they die, that's on them. boss should also focus on crystal instead
- nick: discretize damage on armor, as opposed to percentage. eg hit player 3x to get killed
  - if armor broken in battle, can equip real quick
  - need to scramble around find another piece of armor
  - **have armor, healing potions, damage reduction potions**
  - nick: doable. just need to lock in
  - discretization makes it visible the difference between noob and gamer armor
  - sean: could have icons floating above player. wearing armor adds more icons
  - HP bar is less party game, more dark souls
  - nick: **balloons represent health**
    - should not use balloons, would get hit by stalagtites
    - sean: crystal
  - we have armor models, but waiting on gamer model. dont think it's integrated into the game
- killian will be working on map model tomorrow. ideally by tuesday we will have it
  - sean: his models involve a lot of parts drawn one part at a time in series, not efficient. so a more complex map will be slower. need to merge
- we're not using trimeshes for physics map. boxes
  - will says it's very fast to make
- we should split up the work
  - marcelo: sfx
    - sean: upload what you have to the game
    - needs testing to make sure it sounds as intended
    - nick: **reverb**
      - sean: easy. just a convolution filter
      - we need cave
      - voices
        - sean: did want to add that, but wouldnt work for the presentation
  - when killian finishes map, update colliders
  - we need to tweak model sizing (nick can do that)
  - nick: **we need a dev room with every single item and model**
    - people love them as easter eggs
    - warren bear
  - sean: **it's hard to select items. have two shapes, one that ignores physics but raycasting hits it**
    - nick: make use of Cannon ES's collision bits
      - marcelo: we use it for collisions, jumping
        - sean: i removed it 💀, but the player still there
      - collision bits are per body, not per shape
        - but `Shape.collisionResponse`
        - look into this
  - armor system unfinished. **we need a way to equip items**
    - can slap items being held
      - use that to equip items once picked up
      - will removed it because inconvenient to hit things while holding items
      - minecraft has separate keybind for throwing items
    - picking up items is use
      - throwing a held item should be?
        - will: use same key
- nick wants model for making the dev room
  - can use default cube model
  - press key to teleport there
  - they're talking about the binding of isaac
- so nick is working on dev room. and **item offsets**?
  - we have model offsets supported
  - **someone said having both scale + offset specified breaks**
- kenzo can work on the busy work
- for health: discrete and contuous?
  - marcelo: with continuous armor, take damage, will die regardless?
    - discrete. after nth hit, can replace armor?
  - nick: big boss model comes down, hits player, player takes damage
    - assuming discrete, you have 3 health. boss hits you. you lose one health
    - marcelo gets it now
    - it's like isaac
    - oh shi, i took a damage, i will equip an armor. it gives you +2 hits you can survive. so now you have 4 things hovering above you
    - after being hit twice, can equip another piece of armor
    - have two health remaining. if boss hits you 2 more times you're dead
    - took 5 hits (2 hits of armor + 3 hits of health)
  - marcelo: continuous has no advantage of armor
  - it's a game about crafting. gives incentive for crafting more armor
  - can take infinite damage if you want
  - if we have health potions, should be continuous
    - **health potion can give you +1 health**
    - health and armor two separate things
- sean: can the boss die?
  - yes
  - sean thought the objective was to survive for the time given
  - **if boss dies -> heroes win**
  - we want combat stage short so we dont have to worry about players being dead for too long
    - so surviving makes sense. Minecraft warden makes sense
  - each boss attack should be strong
  - how to prevent boss walking to the crystal
  - nick's vision doesn't have a crystal
    - we should tell Killian ASAP if so
    - will: crystal makes it concept
  - filter on screen that makes corners red
    - red vignette
    - could use HTML
    - could use render pipeline
    - **when you get hit. need a lot of visual feedback for getting hit**
      - camera shake
      - as impactful as possible
  - **when boss is big and it moves, shake screen. when boss is closer, client shakes more**
    - shaking is a filter
- so do we have a crystal?
  - could make sense, but we need to formulate what weapons do
  - if can kill boss, then boss
- 3 outcomes for crystal:
  - players try kill boss, boss try kill crystal. if boss trying to kill crystal, can't kill players. boss wants to kill them both
    - marcelo: seems complicated
    - boss has two conflicting goals
    - crystal doesnt add anything new
  - boss can realize kill players first
  - players can do hide and seek
    - there's a lower level
  - crystal forces players to show themselves
  - boss could lose if players go hide
  - boss has meta goal to kill crystal, but not optimal. optimal for boss to kill players.
    - win condition: destroy players or destroy crystal
    - goal of destroy crystal is to make players attack boss
  - marcelo: we just made league of legends
- how to make boss focus on players over crystals
  - boss wont do much damage to crystal. maybe requires a minute of sitting therc
  - will: destroying crystal wont be that hard, but focusing on it will kill boss
  - marcelo: balancing is a later goal
  - inferno damage on the crystal, keep attacking crystal to do more damage, but incentivizes killing the crystal. boss should focus on destroying the players, then destroy crystal if players hiding
  - boss isn't constricted by time. the heroes are
- what if crystal was a crystal drill that the players used to get into the mine
  - for lore
  - explains how players can escape
  - crystal is an escape hatch
- we could have items that can be crafted, and make crystal some absorber of items where players can throw items into it
  - this is a different game
- **lore: narration during crafting stage**
  - "Miners realized that the cave was too small. So they ahd to mjien . But oh no the boss. 10000 kills. galvanized square steel . escape the kids"
- keep it the same, but **change the crystal into a ship that the players can use to escape**
  - because would expect boss to protect crystal
- marcelo: during crafting stage, no crystal. but stealing energy from cave, forming a crystal. so boss is trying to restore energy back to the cave
  - nick: would be hard to convey in the map
  - good crystal lore
- need to finalize this ASAP for Killian
- **boss can die. so it needs health**
  - 30 hits per player, 100 total (ballpark)
    - with gamer swords
    - assuming all 3 heroes have gamer swords
    - the thought behind gamer stuff is that few players will have gamer stuff
  - boss can't heal
  - if can attack every second or 0.5 seconds, should take 30 seconds of spam clicking to take down boss
    - or 20 seconds, or lower
    - hate Minecraft PVP tho
    - boss should be able to withstand 20 seconds of players modding
- for boss smacking, does it have an attack area
  - spore bomb?
  - neat: **bomb that explodes after a few seconds.** after # of ticks, a sphere collider spawns in, and if you're inside it then you're launched in opposite direction and take damage
  - for MVP attack, should it reequire selecting a player
  - **a rectangle in front of a boss. box collider that can hit a player. if hit by boss attack**
  - one attack per 2-3 seconds
  - the box can go through walls?
    - nick: yes?
  - animations?
    - no. just particles and effects
  - nick: would be doable to get animations working by model swapping
    - good MVP
    - **one animation for boss at MVP. swap between models**
- nick: **spore should knock you back**

todo summary:

- sound effects (marcelo)
- reverb (sean or marcelo)
- finished map (killian)
  - update colliders (will)
- health system (sean)
- boss attack
- boss animation
- equipping armor
- dev room with all items (nick)
- adjust item collider sizing/offset (kenzo)
- separate colliders for selecting items (will)
