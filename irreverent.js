/*!
 * pure javascript Irreverent.js v1.0.0
 * https://github.com/asinnema/Irreverent.js
 *
 * Copyright 2016, Anneke Sinnema
 * Released under the MIT license
 */

 function addLinebreaks(tag, amount) {

	/** process the parameters given by the user **/
	var sectionTitle = document.getElementsByTagName(tag);
	var breakAfter = amount;

	/** correct the amount of words to a more human-readable format **/
	var breakPoint = breakAfter - 1;

	/** loop through each instance of the HTML tag within the document **/
	for (i = 0; i < sectionTitle.length; i++) {

		/** get the content of the current HTML tag and split it into words **/
		var sentence = sectionTitle[i].textContent.split(" ");

		/** count how many words there are in the sentence **/
		var words = sentence.length;

		/** if there are more words in the sentence than
		the number of words after the user wants to break... **/
		if (words >= breakPoint) {

			var j = 0;
			sectionTitle[i].innerHTML = " ";
			/** empty the tag from it's HTML as we will rewrite its contents **/

			while (j < words) {
				/** loop through the words until all words of the sentence have been
				replaced within the tag **/
				sectionTitle[i].innerHTML += sentence[j] + " ";
				j++;

				if (j == breakPoint) {
					/** when we have reached the point at which the user wants to
					add a line-break, add a break tag! **/
					sectionTitle[i].innerHTML += sentence[j] + "<br>";
 					j++;
				}
			}
		}
	}
}

/** TL:DR; enter the tag containing text within quotation marks,
add a comma and indicate after how many words you want to insert the break **/
addLinebreaks('h2', 2);
