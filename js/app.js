window.CodeClubWorld = {};

CodeClubWorld.api = 'https://api.codeclubworld.org';
CodeClubWorld.token = 'ZTA0YjgyMTZmODljODJhNzA4MzdlYWEyYTY2NGRkNTk=';

CodeClubWorld.makeMap = function() {
  var el = document.getElementById('map');
  if (!el) return;

  $.getJSON(CodeClubWorld.api + '/clubs').then(function(data) {
    var clubs = data.clubs,
        markers = [];

    var map = new google.maps.Map(el, {
      zoom: 2,
      center: new google.maps.LatLng(40, 5),
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    $.each(clubs, function(i, club) {
      var loc = club.venue.location,
          lat = loc[0],
          lng = loc[1];

      if (lat === null || lng === null) return;

      var latLng = new google.maps.LatLng(lat, lng),
          marker = new google.maps.Marker({
            position: latLng,
            icon: '/img/map/marker.png'
          });

      markers.push(marker);

      google.maps.event.addListener(marker, 'click', function() {
        var infobox = CodeClubWorld.infobox;

        infobox.close();

        var content = [];

        content.push('<h5 class="name">' + club.venue.name  +'</h5>');

        if (club.venue.city) {
          content.push('<p class="city">' + club.venue.city + '</p>');
        }

        content.push(
          '<p class="date">Since ' +
            moment(club.activated_at).format('Do MMMM YYYY') +
          '</p>'
        );

        if (club.venue.website) {
          content.push(
            '<a class="wubsite" href="' + club.venue.website + '">' +
              club.venue.website +
            '</a>'
          );
        }

        if (club.contact && club.contact.skype) {
          content.push(
            '<a class="skype" href="skype:' + club.contact.skype + '">' +
              'Skype: ' + club.contact.skype +
            '</a>'
          );
        }

        content = content.join('');

        infobox.setContent(content);
        infobox.open(map, marker);
      });
    });

    $('.counter').append(clubs.length);

    var mcOptions = {
      styles: [{
        textColor: 'white',
        url: '/img/map/cluster.png',
        height: 42,
        width: 42
      }, {
        textColor: 'white',
        url: '/img/map/cluster.png',
        height: 42,
        width: 42
      }, {
        textColor: 'white',
        url: '/img/map/cluster.png',
        height: 42,
        width: 42
      }]
    };

    var markerCluster = new MarkerClusterer(map, markers, mcOptions);
  });
}

CodeClubWorld.infobox = new InfoBox({
  disableAutoPan: false,
  maxWidth: 150,
  pixelOffset: new google.maps.Size(-140, -250),
  zIndex: null,
  boxStyle: {
    background: '#fff',
    width: '280px',
    height: '200px',
    padding: '0 10px'
  },
  infoBoxClearance: new google.maps.Size(1, 1),
  closeBoxURL: '/img/map/close.png',
  closeBoxMargin: '10px 0 0 0'
});

CodeClubWorld.startClubButton = function() {
  $('.start-club a').click(function() {
     $('html, body').animate({
         scrollTop: $('#register').offset().top - 20
     }, 700);
  });
}

CodeClubWorld.interceptForm = function() {
  $('#register form')
  .parsley({
    successClass: 'success',
    errorClass: 'error',
    onFormSubmit: function(isFormValid, event, parsleyForm) {
      var data = $(this).serializeHash();
      delete data.contact.agreed;
      CodeClubWorld.register(data);
    }
  });
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

      CodeClubWorld.sendForm(data);
    } else {
      $('#register').find('.panel').remove();
      $('#register').prepend('<div class="panel alert"><strong>Unable to locate your club</strong></div>');
    }
  });
}

CodeClubWorld.sendForm = function(data) {
  alert('no!');
  $.ajax({
    type        : 'POST',
    url         : CodeClubWorld.api + '/clubs',
    data        : JSON.stringify(data),
    dataType    : 'json',
    contentType : 'application/json',
    headers     : { 'Authorization': 'Bearer ' + CodeClubWorld.token }
  })
  .done(function() {
    location.href = '/welcome';
  })
  .fail(function() {
    $('#register').find('.panel').remove();
    $('#register').prepend(
      '<div class="panel alert">' +
        '<strong>Unable to register your club</strong>' +
      '</div>'
    );
  });
}

CodeClubWorld.customPlaceholders = function() {
  function hideLabel() {
    $(this).closest('.custom-placeholder').find('label').hide();
  }

  function showIfEmpty() {
    if ($(this).val() || $(this).find('option:selected').val()) return;
    $(this).closest('.custom-placeholder').find('label').show();
  }

  var fields = $('.custom-placeholder');

  fields
    .find('input, textarea, select')
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
