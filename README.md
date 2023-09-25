# Welcome to Mouse Eyes!
Mouse Eyes is a project that explores the fascinating subject of the proximity hover effect. In this project, you'll see the character's eyes (Mob from Mob Psycho 100) following your mouse cursor as it goes across the screen.

## Introduction
The Mouse Eyes project is a fun and engaging method to learn about the proximity effect in a web-based environment. The proximity effect is a perceptual phenomenon that occurs when items appear to be influenced or drawn to other objects as they approach. This project uses this notion to give the illusion that Mob's eyes are drawn to your mouse cursor, resulting in a compelling visual experience.

## Demo
Before diving into the technical details, let's see Mouse Eyes in action! Check out our demo



https://github.com/NischalShakyacc/Mouse-Eyes/assets/95970505/b2a2486f-b5a3-4929-bec6-a3bea5b7efa0




## How It Works
Here's a brief overview of how it works:

 **HTML Structure**
    
The HTML structure consists of a container for Mob's eyes and an invisible element that follows the mouse cursor.
    
    `<div  class="charater-area">

	<div  class="face"  id="face">

		<img  class="shape blend"  src="./face.png"/>

		<div  id="eyes"  class="blend">

			<img  class="eye1 eye"  src="./eye.png"/>

			<img  class="eye2 eye"  src="./eye.png"/>

		</div>

		</div>

	</div>`
	
> **Note:** You can add more characters and eyes. **All eyes** Must have **eye** class
> 
**CSS Styling**

CSS is used to position Mob and his eyes.

	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	/* placecharacter */
	/*Use bottom, top, left, right to position your character*/
	.face{
		position: fixed;
		bottom: 0;
		left: 10%;
	}

	.shape{
		margin-bottom: -1rem;
		height: 12rem;
		background-position: center;
		background-size: contain;
	}



	.eye1{
		z-index: 100;
		position: absolute;
		width: 0.55rem;
		top: 69px;
		left: 74px;
	}

	.eye2{
		z-index: 100;
		position: absolute;
		width: 0.55rem;
		top: 69px;
		left: 108px;
	}

# Happy Coding!

Enjoy exploring the fascinating world of the proximity effect with Mouse Eyes! Feel free to open an issue or reach out if you have any questions or suggestions.
