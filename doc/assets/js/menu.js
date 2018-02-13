var menuPages = {
    "lunch": ["lunch.jpg"],
    "apps": ["apps.jpg", "salads.jpg"],
    "dinner": ["dinner.jpg", "combo.jpg"],
    "rolls": ["rolls1.jpg", "rolls2.jpg"],
    "bevs": ["drinks.jpg"]
}

function placeMenus(){
    $("#theMenus").empty();
    var page = $(this).attr("id");
    for(i = 0; i < menuPages[page].length; i++){
        var img = $("<img>");
        img.attr({"src": "../assets/images/" + menuPages[page][i], "class": "menuImages"});
        $("#theMenus").append(img);
    }
}

$(document).on("click", ".menuCategories", placeMenus);
