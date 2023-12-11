function generateStory() {
    // Get user input
    var group = document.getElementById('group').value;
    var verb = document.getElementById('verb').value;
    var adjective = document.getElementById('adjective').value;
    var adjective2 = document.getElementById('adjective2').value;
    var noun = document.getElementById('noun').value;
    var adjective3 = document.getElementById('adjective3').value;
    var noun2 = document.getElementById('noun2').value;
    var plural_noun = document.getElementById('plural_noun').value;
    var adjective4 = document.getElementById('adjective4').value;
    var plural_noun2 = document.getElementById('plural_noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var animal = document.getElementById('animal').value;
    var noun4 = document.getElementById('noun4').value;
    var adjective5 = document.getElementById('adjective5').value;
    var noun5 = document.getElementById('noun5').value;
    var place = document.getElementById('place').value;
    var plural_noun3 = document.getElementById('plural_noun3').value;
    var plural_noun4 = document.getElementById('plural_noun4').value;
    var noun6 = document.getElementById('noun6').value;
    var place2 = document.getElementById('place2').value;
    var adjective6 = document.getElementById('adjective6').value;
    var emotion = document.getElementById('emotion').value;

    // Create the story with user input
    var adventureStory = `In a small town, a group of ${group} decided to embark on an adventure. They were ${verb} about the prospect of ${verb} through the eerie streets on this ${adjective2} night.
    Their journey began when they stumbled upon an ${noun}, covered in ${adjective3}. Inside, they found a box with mysterious ${noun2} in it. The group couldn't resist taking these ${plural_noun} and decided to use them in their adventure.
    As they continued down the winding, narrow streets, they encountered ${adjective4} figures lurking in the shadows. The ${plural_noun2} seemed to follow them, and the group's spines tingled with fear.
    To escape the ${noun3}, they turned into a ${animal}. There, they discovered a hidden ${noun4} adorned with ${adjective5} lights. They decided to go through the ${noun5} and see where it would lead.
    Inside the ${place}, they stumbled upon a world filled with ${plural_noun3} of all shapes and sizes. The group couldn't believe their eyes! They joined in with the ${plural_noun4} and had the time of their lives.
    As the adventure ended, they realized it was time to go home. They left the ${noun6} behind and emerged back into the ${place2}. The ${adjective6} adventure had come to an end, leaving them with ${emotion} full of moments they would cherish forever.`;

    // Display the generated story
    document.getElementById('storyDisplay').innerHTML = '<p>' + adventureStory + '</p>';
}