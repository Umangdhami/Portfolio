//J Queryes....

$(window).on("load", function () {
  $(".loader-wrapper").delay(1000).fadeOut(2000);
});


$(window).on("scroll", function () {
  if ($(window).scrollTop() > 400) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
});

// theme plate

$(document).ready(function () {
  $(".theme-list").click(function () {
    var color = $(this).attr("id");
    console.log(color);

    $("#theme-style").attr("href", "css/" + color + ".css");
  });

  $(".theme-btn").click(function () {
    $(".theme-design").slideToggle();
  });
});


$("#contact_form").validate({
  rules: {
    name: {
      required: true,
      minlength: 4,
      maxlength: 15,
    },
    email: "required",
    company: "required",
    number: {
      required: true,
      minlength: 10,
      maxlength: 10,
    },
    msg: {
      required: true,
      minlength: 10,
      maxlength: 1000,
    },
  },
  messages: {
    name: {
      required: "Please Enter Name",
      minlength: "Enter min 4 character",
      maxlength: "Sorry, Limit is Cross",
    },
    email: "Please Enter Email",
    number: {
      required: "Please Enter Contact",
      minlength: "Enter min 10 number",
      maxlength: "Sorry, Limit is Cross",
    },
    msg: {
      required: "Enter Any Massage...",
      minlength: "Enter min 10 character",
      maxlength: "Sorry, Limit is Cross",
    },
  },
});



$("#home_form").validate({
  rules: {
    name: {
      required: true,
      minlength: 4,
      maxlength: 15,
    },
    email: "required",
    company: "required",
    number: {
      required: true,
      minlength: 10,
      maxlength: 10,
    },
    destination_from: {
      required: true,
      minlength: 3,
    },
    destination_to: {
      required: true,
      minlength: 3,
    },
    shipping : "required",
    msg: {
      required: true,
      minlength: 10,
      maxlength: 1000,
    },
    date: "required",
  },
  messages: {
    name: {
      required: "Please Enter Name",
      minlength: "Enter min 4 character",
      maxlength: "Sorry, Limit is Cross",
    },
    email: "Please Enter Email",
    number: {
      required: "Please Enter Contact",
      minlength: "Enter min 10 number",
      maxlength: "Sorry, Limit is Cross",
    },
    msg: {
      required: "Enter Any Massage...",
      minlength: "Enter min 10 character",
      maxlength: "Sorry, Limit is Cross",
    },
  },
});




$("#shipping_form").validate({
  rules: {
    country: {
      required: true,
      minlength: 3,
    },
    email: "required",
    company: "required",
    number: {
      required: true,
      minlength: 10,
      maxlength: 10,
    },

    address: {
      required: true,
      minlength: 8,
      maxlength: 100,
    },

    zip_code: {
      required: true,
      minlength: 6,
      maxlength: 6,
    },
    city: {
      required: true,
      minlength: 3,
    },

    tel: "required",


  },
  messages: {
    email: "Please Enter Email",
    number: {
      required: "Please Enter Contact",
      minlength: "Enter min 10 number",
      maxlength: "Sorry, Limit is Cross",
    },
  },
});


$("#tracking_form").validate({
  rules: {
    email: "required",
    password: {
      required: true,
      minlength: 8,
      maxlength: 16,
    }
  },
  messages: {
    email: "Please Enter Email",
  },
});
