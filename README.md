# Temtem NPC Map 
Temtem NPC map is a fan-made map for the game [Temtem](https://crema.gg/games/temtem/). In Temtem patch 0.6.12, the game introduced a **Postal Service** mechanic in which the player is given 1-3 parcels and tasked with delivering them to NPCs all over the game world! The goal of this interactive map is to make it a little easier to find these NPCs.

This site is in no way an official Temtem or Crema website. All images, styles, and design choices are inspired by and/or belong to Crema.

## Links
* [Live Website](https://susanpallmann.github.io/temtem-npc-map/)
* [Editable Spreadsheet](https://docs.google.com/spreadsheets/d/1tjUlRZD72A1JmnQWcZm6yOo3EEuqh2xkVtv_SIXWFOg/edit?usp=sharing)

## Notice
Currently, this website only displays Kisiwa. Other islands still need to be mapped and set up with their own coordinate systems. The idea is to get the functionality working for this island, and then start filling in the others. This website is maintained in its entirety by one person, so please have patience. Hopefully the rest will be coming soon!

## Reading the Map
![npc](https://susanpallmann.github.io/temtem-npc-map/images/icons/npc.png)

**Normal NPC**
Any NPC that doesn't fit into the following categories will have this icon.

---

![npc moving](https://susanpallmann.github.io/temtem-npc-map/images/icons/npc-moving.png)

**Moving NPC**
NPCs that walk around the world within certain areas are marked with a blue icon to indicate that their location might not be entirely precise. However, the icon should be more or less along the path this NPC walks.

---

![vendor](https://susanpallmann.github.io/temtem-npc-map/images/icons/npc-vendor.png)

**Vendor**
NPCs from which you can buy or sell goods will have this icon.

---

![clothing vendor](https://susanpallmann.github.io/temtem-npc-map/images/icons/npc-clothing.png)

**Clothing Vendor**
The NPC behind the counter at clothing stores will be marked with this icon.

---

![furniture vendor](https://susanpallmann.github.io/temtem-npc-map/images/icons/npc-furniture.png)

**Furniture Vendor**
The NPC behind the counter at furniture stores will be marked with this icon.

---

![Post Office Manager](https://susanpallmann.github.io/temtem-npc-map/images/icons/npc-mail.png)

**Post Office Manager**
The NPC at the post office that you speak to to get daily mail delivery quests will have this icon.

---

![Main character](https://susanpallmann.github.io/temtem-npc-map/images/icons/professor-konstantinos.png)

**Main Characters**
Special main characters (especially those that have their own image in the wiki) will have unique icons with their picture. Most NPCs will not receive this treatment.

## Contribute
The best way you can help is to contribute to the [editable spreadsheet](https://docs.google.com/spreadsheets/d/1tjUlRZD72A1JmnQWcZm6yOo3EEuqh2xkVtv_SIXWFOg/edit?usp=sharing) of locations. We are presently only inputing info for Kisiwa (as maps for the other islands have not been created yet). If you would like to add to the spreadsheet, please follow the steps below.

### 1. Identify an NPC in Temtem
First, find a non-player character (NPC) in Temtem. You'll want to talk to this NPC to find out their name.


![step 1](https://susanpallmann.github.io/temtem-npc-map/images/steps/step-1.png)

### 2. Locate NPC on the in-game map
While standing as close as possible to the NPC, look at the in-game map and note its location carefully. If the NPC walks around an area, just stand somewhere in the path the NPC walks.


![step 2](https://susanpallmann.github.io/temtem-npc-map/images/steps/step-2.png)

### 3. Pinpoint the same location on the interactive map with your mouse cursor
Next, point your mouse to the same location on the interactive map and look to the lower left corner to identify the coordinates for that map. Tip: zooming in will help you get more accurate coordinates and locations.


![step 3](https://susanpallmann.github.io/temtem-npc-map/images/steps/step-3.png)

Note: the spreadsheet tries to have 1 or more decimal places on the coordinates for accuracy. However, if the point you selected does not display more accurate coordinates, that is fine. In the example below, we will want to remember the values "647" and "295.13".


![step 4](https://susanpallmann.github.io/temtem-npc-map/images/steps/step-4.png)

### 4. Enter as much information as you can into the spreadsheet
Now, with all that you gathered, head over to the [editable spreadsheet](https://docs.google.com/spreadsheets/d/1tjUlRZD72A1JmnQWcZm6yOo3EEuqh2xkVtv_SIXWFOg/edit?usp=sharing) of NPC locations and enter on a new row:
* **Name** - this is the in-game name of the NPC you saw when you spoke to the NPC

* **Island** - the island the NPC is found on (Kisiwa, Tucma, Deniz, etc.)

* **X** - this is the first coordinate listed on the online interactive map (in our example, "647")

* **Y** - this is the second coordinate listed on the online interactive map (in our example, "295.13")

* **Wandering?** - type "yes" in this box is the NPC is walking around. If the NPC is not walking around (moving), type "no"

* **Special Role** - type a special role in this box if the NPC has one. For example, if you buy temcards from this NPC, you would type "vendor". If the NPC does not have a special role, just leave this box blank

* **Fightable** - this notes that there is a temtem battle with this NPC. If you do not know if this NPC has a battle (perhaps because you already completed it before now), you can leave this blank. However, if there is a temtem battle with this NPC, write "yes" in this box

* **Added** - this is for developer reference to note if the NPC has been added to map already, please do not edit this section


![step 5](https://susanpallmann.github.io/temtem-npc-map/images/steps/step-5.png)

### 5. Wait!
The developer(s) will take it from here to review your contribution, and hopefully add it to the site soon. Thank you for helping out with this project, it's a big undertaking!

## Developer To Do
- [X] Added search feature
- [X] Added role filters (vendors)
- [X] Added custom icons for notable NPCs
- [X] Restructured to prepare for future pages featuring maps of other islands
- [X] Considered how to handle NPCs whose locations change with the storyline (we're just adding all instances to the map)
- [X] Created homepage
- [X] Created page navigation system
- [X] Wrote script to automate data entry for map (see [here](https://codepen.io/susanpallmann/full/eYzbOyJ))
- [X] Replace spreadsheet with a Google Form
- [X] Create maps for other islands
- [ ] Add fightable info for existing NPCs
- [ ] Add alt text everywhere
- [ ] Move to own github account
