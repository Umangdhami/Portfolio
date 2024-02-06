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

$("#registered").validate({
  rules: {
    name: {
      required: true,
      minlength: 4,
      maxlength: 15,
    },
    email: "required",
    number: {
      required: true,
      minlength: 10,
      maxlength: 10,
    },
    url: "required",
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


//Java Scripts...

const timer = () => {
  let day = 3;
  let hour = 2;
  let minut = 1;
  let second = 55;

  setInterval(() => {
    if (second == 0) {
      second = 59;
      minut--;
    } else {
      second--;
    }

    if (minut == 0) {
      minut = 59;
      hour--;
    }

    if (hour == 0) {
      hour = 24;
      day--;
    }

    if (day == 0) {
      second = 55;
      minut = 1;
      hour = 2;
      day = 2;
    }

    if (minut < 10) {
      document.getElementById("minut").innerHTML = "0" + minut;
    } else {
      document.getElementById("minut").innerHTML = minut;
    }

    if (hour < 10) {
      document.getElementById("hour").innerHTML = "0" + hour;
    } else {
      document.getElementById("hour").innerHTML = hour;
    }

    if (second < 10) {
      document.getElementById("second").innerHTML = "0" + second;
    } else {
      document.getElementById("second").innerHTML = second;
    }

    if (day < 10) {
      document.getElementById("day").innerHTML = "0" + day;
    } else {
      document.getElementById("day").innerHTML = day;
    }
  }, 1000);
};

timer();
