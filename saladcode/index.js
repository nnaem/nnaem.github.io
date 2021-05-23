function copy() {
    var copyText = document.getElementById("inputcopy");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    document.execCommand("copy");
  
    swal({
        title: "Code copied: " + copyText.value,
        icon: "success",
        button: "Okay",
      });
  } 