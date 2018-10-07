$(document).ready(function () {

  var queryUrl = "https://app.ticketmaster.com/discovery/v1/events.json?size=1&apikey=ARVAbVWi1XKqLAPewmww6hBzzgwiFPhZ"
  var rootURl = "https://app.ticketmaster.com/discovery/v2/";
  var discoveryUrlTest1 = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&keyword=tennis&size=2&apikey=ARVAbVWi1XKqLAPewmww6hBzzgwiFPhZ"
  var eventid = "3B00550AD6887A40";
  var eventDetailUrlTest1 = "https://app.ticketmaster.com/discovery/v2/events/" + eventid + ".json?apikey=ARVAbVWi1XKqLAPewmww6hBzzgwiFPhZ"
  var keyword = "lion+king";
  var attactionsUrlTest = "https://app.ticketmaster.com/discovery/v2/attractions.json?size=1&keyword=" + keyword + "&apikey=ARVAbVWi1XKqLAPewmww6hBzzgwiFPhZ";
  var attractionId = "K8vZ9175gR0";
  var attactionsEventDetailUrlTest = "https://app.ticketmaster.com/discovery/v2/attractions/" + attractionId + ".json?apikey=ARVAbVWi1XKqLAPewmww6hBzzgwiFPhZ";
//image link will look like this: http://s1.ticketm.net/dam/a/e72/a1498932-2e83-4033-acdb-2c9024885e72_485461_EVENT_DETAIL_PAGE_16_9.jpg
  $('.leftmenutrigger').on('click', function (e) {
    $('.side-nav').toggleClass("open");
    e.preventDefault();
  });

  // searchEvent();
  //works
  function searchEvent() {
    $.ajax({
      type: "GET",
      url: discoveryUrlTest1,
      async: true,
      dataType: "json",
      success: function (json) {
        console.log((json));
        // Parse the response.
        // Do other things.
      },
      error: function (xhr, status, err) {
        // This time, we do not end up here!
      }
    });
  }

  // eventOffers(); 
  //works
  function eventOffers() {
    $.ajax({
      type: "GET",
      url: "https://app.ticketmaster.com/commerce/v2/events/3B00550AD6887A40/offers.json?apikey=ARVAbVWi1XKqLAPewmww6hBzzgwiFPhZ",
      async: true,
      dataType: "json",
      success: function (json) {
        console.log(JSON.stringify(json, null, 4));
        // Parse the response.
        // Do other things.
      },
      error: function (xhr, status, err) {
        console.log(xhr);
        // This time, we do not end up here!
      }
    });
  }

  // attactions();
  //works
  function attactions() {
    $.ajax({
      type: "GET",
      url: attactionsUrlTest,
      async: true,
      dataType: "json",
      success: function (json) {
        console.log(JSON.stringify(json, null, 4));
        // Parse the response.
        // Do other things.
      },
      error: function (xhr, status, err) {
        console.log(xhr);
        // This time, we do not end up here!
      }
    });
  }

  // attractionsDetail();
  //works
  function attractionsDetail() {
    $.ajax({
      type: "GET",
      url: attactionsEventDetailUrlTest,
      async: true,
      dataType: "json",
      success: function (json) {
        console.log(JSON.stringify(json, null, 4));
        // Parse the response.
        // Do other things.
      },
      error: function (xhr, status, err) {
        console.log(xhr);
        // This time, we do not end up here!
      }
    });
  }

  // // getEventDetail(); 

  // function getEventDetail() {
  //   $.ajax({
  //     type: "GET",
  //     url: eventDetailUrlTest1,
  //     async: true,
  //     dataType: "json",
  //     success: function (json) {
  //       console.log(JSON.stringify(json, null, 4));
  //       // Parse the response.
  //       // Do other things.
  //     },
  //     error: function (xhr, status, err) {
  //       // This time, we do not end up here!
  //     }
  //   });
  //   // $.ajax({
  //   //   type:"GET",
  //   //   url:"https://app.ticketmaster.com/discovery/v2/events/G5diZfkn0B-bh.json?apikey=ARVAbVWi1XKqLAPewmww6hBzzgwiFPhZ",
  //   //   async:true,
  //   //   dataType: "json",
  //   //   success: function(json) {
  //   //     console.log(JSON.stringify(json, null, 4));
  //   //               // Parse the response.
  //   //               // Do other things.
  //   //            },
  //   //   error: function(xhr, status, err) {
  //   //               // This time, we do not end up here!
  //   //            }
  //   // });
  // }

  // // getEventImage(); 
  // function getEventImage() {
  //   $.ajax({
  //     type: "GET",
  //     url: "https://app.ticketmaster.com/discovery/v2/events/" + eventid + "/images.json?apikey=ARVAbVWi1XKqLAPewmww6hBzzgwiFPhZ",
  //     async: true,
  //     dataType: "json",
  //     success: function (json) {
  //       console.log(JSON.stringify(json, null, 4));
  //       // Parse the response.
  //       // Do other things.
  //     },
  //     error: function (xhr, status, err) {
  //       // This time, we do not end up here!
  //     }
  //   });
  // }

});