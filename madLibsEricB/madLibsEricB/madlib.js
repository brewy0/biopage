// Variable to track whether a story is already displayed
var storyDisplayed = false;

function generateStory() {
    // Check if a story is already displayed
    if (storyDisplayed) {
        alert("Please clear the current story before generating a new one.");
        return;
    }

 
    var madlibGroup = document.getElementById('madlib-group').value;
    var madlibAdjective1 = document.getElementById('madlib-adjective1').value;
    var madlibVerb = document.getElementById('madlib-verb').value;
    var madlibAdjective2 = document.getElementById('madlib-adjective2').value;
    var madlibNoun1 = document.getElementById('madlib-noun1').value;
    var madlibAdjective3 = document.getElementById('madlib-adjective3').value;
    var madlibNoun = document.getElementById('madlib-noun').value;
    var madlibPluralNoun = document.getElementById('madlib-plural-noun').value;
    var madlibAdjective4 = document.getElementById('madlib-adjective4').value;
    var madlibPluralNoun2 = document.getElementById('madlib-plural-noun2').value;
    var madlibNoun3 = document.getElementById('madlib-noun3').value;
    var madlibAnimal = document.getElementById('madlib-animal').value;
    var madlibNoun4 = document.getElementById('madlib-noun4').value;
    var madlibAdjective5 = document.getElementById('madlib-adjective5').value;
    var madlibNoun5 = document.getElementById('madlib-noun5').value;
    var madlibPlace = document.getElementById('madlib-place').value;
    var madlibPluralNoun3 = document.getElementById('madlib-plural-noun3').value;
    var madlibPluralNoun4 = document.getElementById('madlib-plural-noun4').value;
    var madlibNoun6 = document.getElementById('madlib-noun6').value;
    var madlibPlace2 = document.getElementById('madlib-place2').value;
    var madlibAdjective6 = document.getElementById('madlib-adjective6').value;
    var madlibEmotion = document.getElementById('madlib-emotion').value;


    var adventureStory = `In a small town, a group of ${madlibGroup} decided to embark on an adventure. They were ${madlibVerb} about the prospect of ${madlibVerb} through the eerie streets on this ${madlibAdjective2} night.
        Their journey began when they stumbled upon an ${madlibNoun1}, covered in ${madlibAdjective3}. Inside, they found a box with mysterious ${madlibNoun} in it. The group couldn't resist taking these ${madlibPluralNoun} and decided to use them in their adventure.
        As they continued down the winding, narrow streets, they encountered ${madlibAdjective4} figures lurking in the shadows. The ${madlibPluralNoun2} seemed to follow them, and the group's spines tingled with fear.
        To escape the ${madlibNoun3}, they turned into a ${madlibAnimal}. There, they discovered a hidden ${madlibNoun4} adorned with ${madlibAdjective5} lights. They decided to go through the ${madlibNoun5} and see where it would lead.
        Inside the ${madlibPlace}, they stumbled upon a world filled with ${madlibPluralNoun3} of all shapes and sizes. The group couldn't believe their eyes! They joined in with the ${madlibPluralNoun4} and had the time of their lives.
        As the adventure ended, they realized it was time to go home. They left the ${madlibNoun6} behind and emerged back into the ${madlibPlace2}. The ${madlibAdjective6} adventure had come to an end, leaving them with ${madlibEmotion} full of moments they would cherish forever.`;

    // Display the generated story
    var generatedStoryElement = document.getElementById('storyDisplay');
    generatedStoryElement.innerHTML = `<p>${adventureStory}</p>`;

  
    storyDisplayed = true;
}

function clearForm() {
  
    var inputFields = document.querySelectorAll('input[type="text"]');
    inputFields.forEach(function (input) {
        input.value = '';
    });


    storyDisplayed = false;
}