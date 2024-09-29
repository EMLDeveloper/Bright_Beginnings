(function ($) {
  "use strict";

  // Initiate the wowjs
  new WOW().init();

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 24,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
})(jQuery);

// function emailsend() {
//   const userName = document.getElementById("gname").value;
//   const email = document.getElementById("gmail").value;
//   const childName = document.getElementById("cname").value;
//   const childAge = document.getElementById("cage").value;
//   const message = document.getElementById("message").value;

//   var messageBody =
//     "Guardian Name: " +
//     userName +
//     "<br/> Guardian Email: " +
//     email +
//     "<br/> Child Name: " +
//     childName +
//     "<br/> Child Age: " +
//     childAge +
//     "<br/> Message: " +
//     message;

//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "EnmanuelleML@outlook.com",
//     Password: "9B0E5E8C871D90797F0C7FDB6C3A058A0CF8",
//     To: "childlovers@outlook.com",
//     From: "EnmanuelleML@outlook.com",
//     Subject: "New Inquiry from Daycare Form",
//     Body: messageBody,
//   }).then(function (response) {
//     if (response === "OK") {
//       swal("Message Sent!", "We will get back to you shortly.", "success");
//     } else {
//       swal("Message Failed", "Please try again later.", "error");
//     }
//   });
// }

function SendMail(event) {
  event.preventDefault(); // Prevent form submission and page refresh

  var params = {
    guardian_name: document.getElementById("guardian_name").value,
    guardian_email: document.getElementById("guardian_email").value,
    child_name: document.getElementById("child_name").value,
    child_age: document.getElementById("child_age").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_gnfkzzw", "template_9ea8aad", params)
    .then(function (res) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      document.querySelector("form").reset(); // Clear the form after success
    })
    .catch(function (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an issue sending your message. Please try again.",
        icon: "error",
        showConfirmButton: true,
      });
    });
}

function SendLetter() {
  event.preventDefault(); // Prevent form submission and page refresh

  var params = {
    from_name: document.getElementById("fullName").value,
    email_two: document.getElementById("email_two").value,
    subject_two: document.getElementById("subject_two").value,
    message_two: document.getElementById("message_two").value,
  };

  emailjs
    .send("service_llc2a74", "template_t7wv8es", params)
    .then(function (res) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      document.querySelector("form").reset(); // Clear the form after success
    })
    .catch(function (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an issue sending your message. Please try again.",
        icon: "error",
        showConfirmButton: true,
      });
    });
}
