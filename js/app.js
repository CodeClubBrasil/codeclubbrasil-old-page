window.CodeClubWorld = {};

CodeClubWorld.api = 'http://codeclubworld.apiary.io';

CodeClubWorld.makeMap = function() {

  $.getJSON('/api' + '/clubs.json').then(function(data) {
    var clubs = data.clubs;

    var center = new google.maps.LatLng(54.559323, -4.174805);
    var image = '../img/map/marker-6c4ba1e0ffb35772220dc5917d98ec85.png';

    var el = document.getElementById('map');

    if (!el) return;

    var map = new google.maps.Map(el, {
      zoom: 5,
      center: center,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var markers = [];

    $.each(clubs, function(i, club) {

      var loc = club.location;
      var latLng = new google.maps.LatLng(loc.lat, loc.lng);
      var marker = new google.maps.Marker({ 
        position: latLng,
        icon: image
      });

      markers.push(marker);

      infobox = new InfoBox({
        content: document.getElementById('infobox'),
        disableAutoPan: false,
        maxWidth: 150,
        pixelOffset: new google.maps.Size(-140, -205),
        zIndex: null,
        boxStyle: {
          background: "#fff",
          width: "280px",
          padding: "0 10px"
        },
        infoBoxClearance: new google.maps.Size(1, 1),
        closeBoxURL: "../img/map/close.png",
        closeBoxMargin: "10px 0 0 0"
      });

      google.maps.event.addListener(marker, 'click', function() { 

        var clubName        = ('<h5 class="name">'+club.name+'</h5>');
        var clubCity        = ('<p class="city">'+club.location.city+'</p>');
        var clubActivated   = ('<p class="date">Activated: '+moment(club.activated_at).format("Do MMMM YYYY")+'</p>');
        var skype           = ('<a class="skype" href="skype:'+club.contact.skype+'">S</a>')
        var $clubContent = clubName+clubCity+clubActivated+skype;

        infobox.open(map, marker);
        infobox.setContent($clubContent);

      });

    });

    $('.counter').append(clubs.length);

    var mcOptions = {styles: 
      [
        {
          textColor: 'white',
          url: '../img/map/small-cluster.png',
          height: 40,
          width: 40
        },
       {
          textColor: 'white',
          url: '../img/map/medium-cluster.png',
          height: 40,
          width: 40
        },
       {
          textColor: 'white',
          url: '../img/map/large-cluster.png',
          height: 40,
          width: 40
        }
      ]
    };

    var markerCluster = new MarkerClusterer(map, markers, mcOptions);
    
  });

}

CodeClubWorld.startClubButton = function() {
  $('.start-club a').click(function() {
     $('html, body').animate({
         scrollTop: $('#register').offset().top - 20
     }, 700);
  });
}

CodeClubWorld.interceptForm = function() {
  $('#register form')
    .on('submit', function(e) {
      e.preventDefault();

      var data = $(this).serializeHash();
      CodeClubWorld.register(data);
    })
    .parsley({ successClass: 'success', errorClass: 'error' })
}

CodeClubWorld.register = function(data) {
  var address = [
    data.venue.name,
    data.venue.address_1,
    data.venue.address_2,
    data.venue.region,
    data.venue.city,
    data.venue.postcode
  ].join(', ');
  
  var region = data.country.code;
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: address, region: region }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      data.venue.location = {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng()
      };

      CodeClubWorld.sendForm({ club: data });
    } else {
      $('#register').find('.panel').remove();
      $('#register').prepend('<div class="panel alert"><strong>Unable to locate your club</strong></div>');
    }
  });
}

CodeClubWorld.sendForm = function(data) {

  var post = $.ajax({
    type: 'POST',
    url: CodeClubWorld.api + '/clubs',
    data: JSON.stringify(data),
    success: function(data) {
      $('#register').replaceWith('<div class="panel notice"><strong>Thanks for registering your club</strong></div>');
    },
    dataType: 'json',
    contentType: 'application/json'
  }).fail(function() {
    $('#register').find('.panel').remove();
    $('#register').prepend('<div class="panel alert"><strong>Unable to register your club</strong></div>');
  });

}

CodeClubWorld.customPlaceholders = function() {
  function hideLabel() {
    $(this).closest('.custom-placeholder').find('label').hide();
  }

  function showIfEmpty() {
    if ($(this).val()) return;
    $(this).closest('.custom-placeholder').find('label').show();
  }

  var fields = $('.custom-placeholder');

  fields
    .find('input, textarea')
      .on('keydown change', hideLabel)
      .on('blur keyup', showIfEmpty)
      .each(hideLabel).each(showIfEmpty);
};


$(function() {
  CodeClubWorld.makeMap();
  CodeClubWorld.startClubButton();
  CodeClubWorld.customPlaceholders();
  CodeClubWorld.interceptForm();
});