var winWidth = $(window).width();
$('.containerMain').css({"width" : winWidth}); 
var allUrl = "https://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157645079323413&+description+&api_key=814796ef7eee08b0534ae009b71b62aa&jsoncallback=?";
var jsUrl = "https://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157691750682445&+description+&api_key=814796ef7eee08b0534ae009b71b62aa&jsoncallback=?";
var visualUrl = "https://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157690113942221&+description+&api_key=814796ef7eee08b0534ae009b71b62aa&jsoncallback=?";


function flickrAPI(url){
    //create a var that makes a call to the flickr API
    var getIMG = url;//pass the getIMG var through the getJSON function
    $.getJSON(getIMG, function(data){
        //Loop through each of the photos
        $.each(data.photoset.photo, function(index, photo){ 
        //Create a variable that creates an img src tag for each photo returned
        var img_src = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "c.jpg";
        //Create a variable that creates an href tag for each photo returned
        var a_href = "http://www.flickr.com/photos/" + data.photoset.owner + "/" + photo.id + "/";  
        var folio = $("<div></div>", {"class": "folioDiv20"}).appendTo(".folioCenter");
        //Create a container for the image and then append to folio
        var img_box = $("<div></div>", {"class": "folioImage20"}).appendTo(folio);
        //Create an image tag and append to each img_box
        $("<img/>").attr("src", img_src).appendTo(img_box).wrap("<a href='" + a_href + "'' target=\"'_blank'\" ></a>"); 
            //Create a variable that looks up each individual photo and stores the description from each photo 
            var getPhotoInfo = "https://api.flickr.com/services/rest/?format=json&method=flickr.photos.getInfo&photo_id=" + photo.id + "&api_key=814796ef7eee08b0534ae009b71b62aa&jsoncallback=?";
            //Create a function that parses the info
            $.getJSON(getPhotoInfo, function(data){
                //Loop through the info and sort through key-value pairs
                $.each(data.photo.title, function(key, title){
                    //create a div that stores each title for each photo
                    $("<div/>", {"class": "folioTitle", "text": title }).appendTo(folio);
                     //Create a horizontal orange line
                    $("<hr></hr>", {"background": "#f7b321", "border": "0", "height": "3px", "width": "90%"}).appendTo(folio);
                });
               

                $.each(data.photo.description, function(key, desc){
                    //create a variable that stores each description for each photo
                    $("<div></div>", {"class": "folioDescription20", "text": desc, "width": "90%"}).appendTo(folio);
                });

                $.each(data.photo.tags.tag, function(index, object){
                    //Create a variable that stores each of the tags
                    var tagString = object.raw; 
                    
                    var regex = /www/i;
                    var testregex = regex.test(tagString);
                    var a_href = 'http://' + tagString;

                    if (tagString === 'www.tvapocalypse.herokuapp.com'){
                        a_href = 'http://' + 'tvapocalypse.herokuapp.com';
                    }

                    if (testregex == true) {
                        
                        //Create a JQuery div whose class is folioTag
                        var folioFooter = $("<div></div>", {"class": "folioTag"}).appendTo(folio);
                        //Create a variable called valueLink that creates an href incorporating tagString
                        $('<a/>', {
                            href : a_href,
                            text : "Visit Site",
                            target : "_blank"
                        }).appendTo(folioFooter);
                        //Wrap valueLink with class tagWhite
                        //Append to folio
                        }
         
                 });

            });

               
        });

    });//end

}

 

function socialMediaList() { 
        var socialLinks = {
            youtube : "http://www.youtube.com/channel/UC3OP9LlHNujCfuX6DAV_uXA",
            github : "http://github.com/onagus",
            flickr : "http://www.flickr.com/photos/68642514@N06/"
        }; 
        $.each(socialLinks, function(key, value){
            var a_href = ' <a href="' + value + '" target="_blank">';
            var icons  = '<img class="iconImg"  src="images/'+key+'.gif"/>';
            var social = $("<div></div>", {"id": "socialContainer"}).appendTo("#social");
            $(icons).appendTo(social).wrap(a_href);
            console.log(icons); 
        });
}  

function checkVerticalOffset() {
	var mediaQuery = window.matchMedia( "(min-width: 640px)" );
	if (mediaQuery.matches) {
		return -70; 
	}
	else {
		return -70;
	}
} 

function scrollToElement(selector, time, verticalOffset) {
var time = typeof(time) != 'undefined' ? time : 600;
var verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
var element = $(selector);
var offset = element.offset();
var offsetTop = offset.top + verticalOffset;
$('html, body').animate({scrollTop: offsetTop}, time);

}
  
$('#contact-button').on('click touchstart',function(e){
    e.preventDefault();
    var contactOBJ = {};
    $(':input').each(function(i, data){
        console.log(data);
        var that = $(this);
        var key = that.attr('name');
        var value = that.val();
        console.log(value);
        contactOBJ[key] = value;
    }); 
    $.ajax({
        type: 'POST',
        url: 'contact.php',
        data: contactOBJ,
        success: function(response){
            alert("Message Delivered");
        },
        error: function(xhr){
            console.log(xhr);
        }
    });
});


$(document).ready(function() {
/* scroll to #containerX */ 

$('#buttonAll').on('click', function(e){
    e.preventDefault();
    $('.folioCenter').empty();
    window.location = 'http://www.designertoshi.com';
    flickrAPI (allUrl);
});

$('#buttonJS').on('click', function(e){
        e.preventDefault(); 
        $('#container1').empty();
        $('#deviconContainer').html('<div class="icon">' +
                                        '<img id="devicon" src="images/developericon.jpg"/>' +
                                        '<h1 id="devH1">| Development Projects |</h1>' +
                                        '</div>');    
        $('#container4').html('<div class="folioWrapper">' + 
                                '<div class="folioCenter"></div>' +           
                              '</div>').css("height", "100%");
        $('#container2').html('<div class="wrapper">' +
                '<img id="designdevelopdeploy" src="images/designdevelopdeploy.jpg"/>' +     
                '<h3 id="tagHeader">My Technical Skills</h3>' + 
                '<hr style="background:white; border:0; height:1px" />' +
                '<p class="tag">React.js</p>' + 
                '<p class="tag">Redux</p>' +
                '<p class="tag">Node.js</p>' + 
                '<p class="tag">CSS/SASS</p>' +
                '<p class="tag">Babel</p>' +
                '<p class="tag">Webpack</p>' +
                '<p class="tag">MongoDB</p>' +
                '<p class="tag">Javascript-ES6</p>' +
                '<p class="tag">Jquery</p>' +
                '<p class="tag">Gulp.js</p>' +
                '<p class="tag">Backbone.js</p>' +
                '<p class="tag">Underscore.js</p>' +
                '<p class="tag">Lodash</p>' +
                '<h3 id="tagHeader">My Creative Skills</h3>' +
                '<hr style="background:white; border:0; height:1px" />' +
                '<p class="tag">UI Design</p>' +
                '<p class="tag">Graphic Design</p>' +
                '<p class="tag">Illustration</p>' +   
                '<p class="tag">Photography</p>' +
                '<p class="tag">Video Animation</p>');
        $('#container3').html('<ul>'+  
                    '<li class="social">' +    
                        '<a href="http://github.com/toshisugano" target="blank" class="fa-stack fa-2x icon-github ">' +
                          '<i class="fa fa-square fa-stack-2x"></i>' +
                          '<i class="fa fa-github fa-stack-1x"></i>' +
                        '</a>' +
                        '<p class="links">@ Github</p>' + 
                    '</li>' +  
                    '<li class="social">' +
                        '<a href="mailto:onagususa@gmail.com" class="fa-stack fa-2x icon-envelope-o">' + 
                          '<i class="fa fa-square fa-stack-2x"></i>' +
                          '<i class="fa fa-envelope-o fa-stack-1x"></i>' + 
                        '</a>' +
                          '<p class="links">onagususa@gmail.com</p>' +
                    '</li>' +
                    '<li class="social">' + 
                        '<a href="tel:+1-770-568-1348" class="fa-stack fa-2x icon-phone">' +
                          '<i class="fa fa-square fa-stack-2x"></i>' +
                          '<i class="fa fa-phone fa-stack-1x"></i>' +
                        '</a>' + 
                        '<p class="links">#Cell </p>' +    
                    '</li>' +
                '</ul>');
        $('#buttonJS').css("pointer-events", "none");
        $('#buttonVisual').css("pointer-events", "auto");
        flickrAPI(jsUrl, 'folioCenter');
        window.scrollTo(0, 0); 
    });

$('#buttonVisual').on('click', function(e){
    e.preventDefault(); 
    $('.folioCenter').empty();
    flickrAPI(visualUrl); 
});
 
 
}); 


 




 
