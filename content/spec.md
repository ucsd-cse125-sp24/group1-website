# Undercooked - Game Concept

We will build a fantasy game about having to frantically craft weapons and armor to defeat the boss pressing down on the protective bubble surrounding them! _Frantic_ is a key term for the Heroes —when in doubt, we would like our gameplay elements to contribute to a feeling of franticness. We want the Boss to feel Powerful, Sneaky and In Control of The Chaos.

The game is asymmetric, meaning that one player plays a different role against the others:

- The Heroes will craft powerful weapons and armor to attack the dastardly Boss!
- The Boss, which only has its Severed Hand inside the protective bubble, will attempt to sabotage the players at every step!

In the second phase of the game, when the protective bubble breaks, guarding the irreplaceable Crystal, the Boss and the Heroes fight! If the Heroes can defeat the Boss before the Boss can destroy the Crystal, they win! If the Boss can destroy the Crystal before the Heroes can defeat him, the Boss wins!

The game will be a frantic multiplayer experience, where two teams of players will compete to come out on top. The Heroes will have three players, and the Boss will be alone.

The Boss, being only one person, will attempt to sabotage the player's creation at every step, doing things like locking doors, destroying machinery, and tripping heroes, making them drop everything they're holding.

The Heroes will be running around a very confined space trying to bring different materials to different stations, crafting weapons, armor, consumables like potions and other magical artifacts to help them defeat the Boss!

## Gameplay Specifics

The game consists of two phases, and two roles:

1. Preparation phase: Heroes make weapons and armor inside a crowded base in preparation for the second phase, while the Boss, which controls a Severed Hand, tries to sabotage the Heroes. This is the main part of the gameplay, and falls under our “must have” list of features.

   This stage is largely inspired by _Overcooked_, where a sense of franticness is created from a lack of room. However, in _Overcooked_, each player can focus on making one item at a time. In this game, each Hero must depend on other teammates to do their job, and there are more steps to be done than Heroes, so Heroes cannot easily divy up tasks.

   1. The Heroes' goal is to make as many weapons and armor pieces as they can under a given time limit. To make products, they need to combine resources and process them through a series of steps, and many weapons will share the same prerequisite resources. Heroes may experience frustrations such as waiting on one teammate to finish an input, or fighting over another teammate for a shared resource.

      Objects such as raw inputs, crafted weapons, and debris can be picked up and thrown around by players. They have a hitbox and can be stacked on the floor, and Heroes must push, kick, or move them out of the way to walk around. Therefore, keeping the workspace clean in the small space adds to the challenge.

      Heroes will experience the game in the first person or third person limited—Heroes can only see the part of the map in front of them, as well as any fires or damage caused by the Boss.

   1. The Boss's hand will try to sabotage the development of the weapons that the players are working on. Slowing down or ruining the progress of the players.

      For example, the Severed Hand can disable or break machines required for the Heroes to craft, or close doors and move objects into pathways, so the Heroes must address these distractions and issues. The Severed Hand cannot be killed by the Heroes.

      The Boss will experience the game with a Top Down view of the map (akin to a third person omniscient perspective). In the game, this is because the Boss is viewing the Heroes from outside the protective bubble, and can only control its Severed Hand inside.

1. Battle Phase: Using the weapons that the Heroes crafted during the Preparation Phase, they fight the Boss in the final fight of the round! We have hopes to make this a more dynamic style bossfight, with longer animations, big attacks, dodge rolling, and more. However, our MVP only requires that the weapons, armor, and other craftables can affect the final fight, so the temporary solution that we have is a QTE where the group's mashing is related to the equipment the Heroes crafted.

We believe our game idea is interesting and cool—we cannot think of an existing game like the one we present above.

1. Asymmetrical boss fights are interesting.
1. It combines the frantic “cooperation” from _Overcooked_ with the opportunity of sabotage from _Among Us_.
1. Each round of the game contains multiple phases.

## Feature priority

By the end of the quarter, our game must have the following elements:

- Two Phase Design
- Crafting of Items
- Sabotage

To implement this, we also need to have a game engine that can support these features:

- A WebGL renderer that can render:

  - Models produced by our artist

  - Multiple perspectives (first person, top-down view, etc.)

  - While not essential, it would be very helpful to draw outlines of collision boxes during development in some sort of debug view

- A server that can simulate the below game logic

- Player movement

- Player collisions with the environment

- Objects that can be:

  - Selected and picked up by players (raycasting)

  - Thrown by players

  - Collide with the environment (the player can't just look at a wall and have their held object clip through the wall)

  - Collide with each other and stack

  - Impede players' movement (Trip the players, and slow/stun them for a few seconds)

- A way to easily define and add new objects that can be collected, combined, crafted

- A way to add interactions that the Severed Hand can use to sabotage the Heroes

- A (relatively) simple key-mashing game for the second phase

For object collisions, we would like to roll our own physics engine. However, a fully fledged physics engine is outside the scope of our minimum viable product. Instead, objects can be treated as non-rotatable boxes. For example, one object can seemingly float in the air because the corner of its hitbox is sitting right on the edge of another object's hitbox. This behavior should be acceptable for our MVP.

The following features would be nice to have:

- Actual Bossfight in second phase
- More types of things to craft
- Conflicting and limited resources
- Consumables in the fight
- More opportunities for sabotage
- Audience participation (BOONS???)
- Support for More Players

The following features, man, this would be cool if we could have it:

- Different Themes and Levels
- Customizable Heroes and Weapons
- Different Bosses
- Story

## Timeline

Bolded milestones represent key milestones.

- Week 2: Develop a Client. Set up the client file structure and draw something with WebGL on the screen.

- Week 3: Develop the Server. Set up the server file structure, settle on the specific architecture (e.g. libraries) for the server, and create a basic server.

- **Week 4: Client connect to the server and vice versa (moving cube).** The client connects to the server and sends it movement requests. The server then broadcasts the new location of the cube to all connected clients. The client draws a cube.

- Week 5: Importing Blender models onto the server. Our artist exports a Blender model to some file format. The client renders the model.

- **Week 6: White box map done, players walking.** Define collision planes to represent a box, and have clients walk inside the box. Clients should not be able to escape the box, but they can pass through each other. Clients should be able to see a wireframe model of the box.

- Week 7: Collision, 2 Phase system. Add objects with collisions. Define and implement a barebones second phase boss battle (keymashing game).

- **Week 8: Basic Crafting.** Create game logic for registering types of objects and how they can be spawned in, combined, etc.

- **Week 9: MVP complete.** All ["must haves" defined above](#feature-priority) should be implemented.

- Week 10: Final presentation.

## Group management

Based on past meetings, we do not need to formalize our group management. However, if issues and disagreements arise in our group and we realize that our current system is unproductive, we are free to return to this and reevaluate how to best organize our group.

For game-wide decisions, we will meet as a group and come to a consensus. If we cannot come to a consensus, we will let whoever is most enthusiastic about the issue decide. In general, our team members have been chill about what others want and are more than willing to compromise.

For specific approaches to the game's implementation, consensus will be left up to the individual team. For example, decisions about the architecture to use for the server can be left up to the network team.

We will communicate and collaborate online over Discord. Online meetings will be held on Discord, but we will otherwise prefer meeting in person.

Our [timeline above](#timeline) is designed to give ample room for delays and procrastination. However, if we fall behind schedule, we will re-evaluate our timeline, and if necessary, re-evaluate our vision for the game and cut down the requirements for our minimum viable product.

Sean will produce our weekly reports. Our weekly meetings will be decided by a When2Meet.

## Development

We will divide our team members into the following roles as listed below.

- Sean: Graphics
- Will: Graphics
- Killian: Artwork
- Nick: Networking
- Tyler: Game Design
- Marcelo: Network
- Kenzo: Graphics

However, these assignments are flexible and team members may end up working different or several roles depending on project needs.

Architecturally, our project will likely be written entirely in TypeScript (whose types and tooling promote working with each others' code). This allows our client and server to share code, which gives us the option to simulate the game on the client while waiting on the server.

The client will be written in HTML/CSS, and 3D graphics will be rendered with WebGL. The server will be written using NodeJS, and it will communicate with the clients over WebSockets.

Our team has opted not to write unit tests. Instead, we will test each others' features as they are written. Our project being web-based facilitates easily testing the game on any device, as well as getting playtesters from outside our group.

Our code will be documented—any potentially unclear lines of code or functions should have comments explaining why it was used—and the network team will write comprehensive documentation on the interface between the server and client. Game documentation for players will be drafted on Google Docs and eventually published on our website.
