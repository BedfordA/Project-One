# Project 1 - Peer Code Review Checklist

### Developer: Amber Bedford
### Reviewer: Daniel Scott
---

## Minimum Requirements

### Features
- [X] Game has at least the minimum set of features required to play.
- [X] All minimum features are working.
- [X] As applicable, does the game handle "winning", "losing" and "ties"?

### Code Style & Best Practices
- [ ] No "dead" code (code that is commented out code or is never executed) exists.
    _There appears to be commented out code inside of index.html_
- [X] There are separate CSS & JS files put in appropriate sub-folders.

#### JavaScript
- [X] Function names accurately express their purpose (usually verbs).
- [X] Variable names are clear and expressive (usually nouns).
- [X] Identifiers used for variables and functions (except constructors) use camel-casing.
- [X] Constructor functions use upper-camel-casing.
- [X] JavaScript code blocks, nested functions, etc., are consistently indented using 2 or 4 spaces per level of indentation.
- [X] Vertical white spacing is consistent.
- [] Use of single vs. double quotes for strings is consistent (lean toward single 
quotes).
    _There seems to be a mix of both single and double quotes_
- [ ] No leftover logging to the console.
     _console logs found on lines 1, 69, 72_

#### HTML Markup
- [X] The HTML is properly indented according to its nesting level.
- [X] Lower-case is used for all tag names, attributes, classes & ids.
- [X] Kebob-casing is used for names of classes, ids, and custom attributes (if any).
- [X] No spaces exist between HTML attributes, the equal sign and the value.
 _On line 19 of index.html, there's a space character between the class name and the closing quotation mark_
- [X] HTML attributes use double quotes.
- [X] Inline styling is not used.

#### CSS
- [ ] The CSS is properly indented.
 _There were a few css rules that didn't follow indentation guidelines_
- [X] Vertical white space is consistent.
- [X] There is an opening curly brace after the selector(s) and a closing brace on the last line by itself.
- [X] CSS properties contain a space after, but not before, the : character.

### Documentation & Deployment
- [X] Game is deployed online (GH Pages).
- [X] Repo contains a _readme.md_
- [X] _readme_ has a _Description_ section for the game.
- [X] _readme_ has a _Technologies Used_ section.
- [X] _readme_ has a _Getting Started_ section which includes a link to the deployed game.
- [X] _readme_ has an _Next Steps_ section to explain unsolved problems and future plans.

## Other Conventions & Best Practices

### Files
- [X] File names are lowercased and use either snake or kebob-casing.

### JavaScript
- [X] Functions rarely contain more than 10 lines and do so for good reason.
- [X] Code is DRY by ensuring there are not sections of similar code.  Repetitive code is put into more general purpose functions defined with parameters as necessary to differentiate their behavior.
- [ ] The main script file is commented into major sections for:
	- Application-wide Variables & cached DOM Element Variables
	- Constants (all upper-case identifier is used by convention)
	- Event Listeners
	- Functions
- [ ] Application-wide scoped variables are declared at the top of the main script file.
    _These conventions were never used_
- [X] An _initialize_ or similar function is used to "reset" the variables of the game to their starting state.  Variables are not also being initialized when defined.

### HTML
- [X] HTML passes [w3c validation](https://validator.w3.org/)

### CSS
- [X] CSS is kept DRY by breaking out common CSS properties into separate classes.


### Final Remarks

Congratualtions on creating your first Project in the SEI program, Amber! I'm a huge fan of Tekken and played it very often back in the day, so it was nice getting an opportunity to play with this game. Great job implementing bootstrap to set up your rows and columns. Also, excellent work setting up the win/lose logic! I hope you were able to walk away from this with a little more confidence writing JavaScript. 

As developers, we strive to improve our style everyday. With that, here's some suggestions for you: 

Be sure to remove all console logs before "shipping" your code to production, or deploying...if you will. Also, be sure to remove all dead code, or commented out code from your files. For your file names, the README.md file is usally spelled in all uppercase characters by convention. Also be sure you're following good indentation guidelines. There's a really good extension you can download for VS code that can help you with this. https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify Let me know if you have any questions or would like a demo on using it! (I use it sometimes, especially when I'm in a hurry!). Be careful when writing your CSS rules, that for each property, you set a value for. (check our the comment I left on line 46 in style.css)

Also, for browser games, it's never a bad idea to "section" your code as we've done for Rock Paper Scissors, Tic Tac Toe, and Connect Four. For example, a commented section for application-wide variables & cached DOM element eariables, constants (all upper-case identifier is used by convention), event listeners, functions, and having your application-wide scoped variables are declared at the top of the main script file.

In closing, these are things you'll naturally internalize with practice. Nonetheless, I hope you've taken pride in what you've accomplished as I have. I look forward to seeing what you create in future units! Keep up the hard work, Amber!


