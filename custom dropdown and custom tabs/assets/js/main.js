$("#content1").show();
$(document).ready(function () {
  function updateTabs() {
    if ($("#checkbox1").is(":checked")) {
      $("#label1").addClass("bg-highlighter");
      $("#content1").show();
    } else {
      $("#label1").removeClass("bg-highlighter");
      $("#content1").hide();
    }

    if ($("#checkbox2").is(":checked")) {
      $("#label2").addClass("bg-highlighter");
      $("#content2").show();
    } else {
      $("#label2").removeClass("bg-highlighter");
      $("#content2").hide();
    }
  }

  $('input[type="checkbox"]').change(function () {
    $('input[type="checkbox"]').not(this).prop("checked", false);
    updateTabs();
  });
  updateTabs();
});

$(document).ready(function () {
  $(".contain-popup button").click(function () {
    var elmId = $(this).attr("id");
    // alert(elmId);
    var dropdownButton = "." + elmId;
    // alert(dropdownButton);
    $(dropdownButton).toggleClass("hidden");
  });
  $("#close-dropy").click(function () {
    $("#dropdownMenu").toggleClass("hidden");
  });
  // $(document).click(function (e) {
  //     if (!$(e.target).closest('#dropdownButton, #dropdownMenu').length) {
  //         $('#dropdownMenu').addClass('hidden');
  //     }
  // });
  $(".contain-popup a").click(function (e) {
    e.preventDefault();
    var selectedText = $(this).data("value");
    var selectedImage = $(this).data("image");
    var dropdown = $(this).closest(".contain-popup");
    dropdown.find('span[id^="selectedText"]').text(selectedText);
    dropdown.find('img[id^="selectedImage"]').attr("src", selectedImage);
    $(this).closest("#dropdownMenu").addClass("hidden");
  });
  // Set default option on load
  // $('#selectedText').text($('#dropdownMenu a').data('value'));
});
