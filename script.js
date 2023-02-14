var characters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var characters1 = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var characters2 = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '@', '#', '!', '$', '^', '&', '*', '+', '-', '_', '='];
var characters3 = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '@', '#', '!', '$', '^', '&', '*', '+', '-', '_', '='];
var mwords = ['arch', 'area', 'army', 'atom', 'atop', 'aunt', 'aura', 'auto', 'avid', 'away', 'axis', 'baby', 'bach', 'back', 'bail', 'bait', 'bake', 'bald', 'ball', 'band', 'bang', 'bank', 'bare', 'bark', 'barn', 'base', 'bass', 'bath', 'bats', 'beam', 'bean', 'bear', 'beat', 'beck', 'beef', 'been', 'beer', 'bell', 'belt', 'bend', 'bent', 'best', 'beta', 'beth', 'bias', 'bike', 'bill', 'bind', 'bird', 'bite', 'blew', 'bloc', 'blog', 'blow', 'blue', 'blur', 'boat', 'body', 'boil', 'bold', 'bolt', 'bomb', 'bond', 'bone', 'book', 'boom', 'boon', 'boot', 'bore', 'born', 'boss', 'both', 'bout', 'bowl', 'brad', 'bred', 'brew', 'brow', 'buck', 'bulb', 'bulk', 'bull', 'bump', 'burn', 'bury', 'bush', 'bust', 'busy', 'butt', 'buzz', 'cafe', 'cage', 'cake', 'calf', 'call', 'calm', 'came', 'camp', 'cane', 'cape', 'card', 'care', 'carl', 'carr', 'cart', 'case', 'cash', 'cast', 'cave', 'cell', 'cent', 'chad', 'chap', 'chat', 'chef', 'chic', 'chin', 'chip', 'chop', 'cite', 'city', 'clad', 'clan', 'clay', 'clip', 'club', 'clue', 'coal', 'coat', 'coca', 'code', 'coil', 'coin', 'coke', 'cola', 'cold', 'cole', 'come', 'cone', 'conn', 'cook', 'cool', 'cope', 'copy', 'cord', 'core', 'cork', 'corn', 'cost', 'coup', 'cove', 'crap', 'crew', 'crop', 'crow', 'cube', 'cult', 'curb', 'cure', 'cute', 'dale', 'dame', 'damn', 'damp', 'dare'];
var sel = "Alphabet";
let range;
$(function () {
  $("#check1").click(function(){
    $("#type").change();
  });
  $('#check2').click(function(){
    $('#type').change();
  })
  $("#type").change(function () {
    $("#lbl").text("Password not copied !");
    $("#lbl").css("background-color", "red");
    $("#customrange").val("0");
    $("#num").text("4");
    var sel = $("#type option:selected").val();
    console.log(sel);
    if (sel == "Alphabet") {
      if ($("#check1").prop("checked") == false && $("#check2").prop("checked") == false) {
        $("#check1").show(); $("#check2").show(); $("#label1").show(); $("#label2").show(); $("#pass").val(" ");
        var word = "";
        range = 4;
        for (let i = 1; i <= range; i++) {
          word += characters[Math.floor(Math.random() * characters.length)];
          console.log(word);
        }
        $("#pass").val(word);
        $("#customrange").change(function () {
          word = "";
          range = $("#customrange").val();
          console.log(range);
          document.getElementById("num").innerHTML = range;
          for (let i = 1; i <= range; i++) {
            word += characters[Math.floor(Math.random() * characters.length)];
            console.log(word);
          }
          $("#pass").val(word);
        });
        $("#btn").click(function () {
          range = $("#customrange").val();
          word = "";
          $("#pass").val(word);
          for (let i = 1; i <= range; i++) {
            word += characters[Math.floor(Math.random() * characters.length)];
            console.log(word);
          }
          $("#pass").val(word);
        });
      }
      if ($("#check1").prop("checked") == true) {
        $("#check1").show();  $("#check2").show();  $("#label1").show();  $("#label2").show();  $("#pass").val(" ");
        var word = "";
        range = 4;
        for (let i = 1; i <= range; i++) {
          word += characters1[Math.floor(Math.random() * characters1.length)];
          console.log(word);
        }
        $("#pass").val(word);
        $("#customrange").change(function () {
          word = "";
          range = $("#customrange").val();
          console.log(range);
          document.getElementById("num").innerHTML = range;
          for (let i = 1; i <= range; i++) {
            word += characters1[Math.floor(Math.random() * characters1.length)];
            console.log(word);
          }
          $("#pass").val(word);
        });
        $("#btn").click(function () {
          range = $("#customrange").val();
          word = "";
          $("#pass").val(word);
          for (let i = 1; i <= range; i++) {
            word += characters1[Math.floor(Math.random() * characters1.length)];
            console.log(word);
          }
          $("#pass").val(word);
        });
      }
      if ($("#check2").prop("checked") == true) {
        $("#check1").show(); $("#check2").show(); $("#label1").show(); $("#label2").show(); $("#pass").val(" ");
        var word = "";
        range = 4;
        for (let i = 1; i <= range; i++) {
          word += characters3[Math.floor(Math.random() * characters3.length)];
          console.log(word);
        }
        $("#pass").val(word);
        $("#customrange").change(function () {
          word = "";
          range = $("#customrange").val();
          console.log(range);
          document.getElementById("num").innerHTML = range;
          for (let i = 1; i <= range; i++) {
            word += characters3[Math.floor(Math.random() * characters3.length)];
            console.log(word);
          }
          $("#pass").val(word);
        });
        $("#btn").click(function () {
          range = $("#customrange").val();
          word = "";
          $("#pass").val(word);
          for (let i = 1; i <= range; i++) {
            word += characters3[Math.floor(Math.random() * characters3.length)];
            console.log(word);
          }
          $("#pass").val(word);
        });
      }
      if ( $("#check1").prop("checked") == true && $("#check2").prop("checked") == true ) {
        $("#check1").show(); $("#check2").show(); $("#label1").show(); $("#label2").show(); $("#pass").val(" ");
        var word = "";
        range = 4;
        for (let i = 1; i <= range; i++) {
          word += characters2[Math.floor(Math.random() * characters2.length)];
          console.log(word);
        }
        $("#pass").val(word);
        $("#customrange").change(function () {
          word = "";
          range = $("#customrange").val();
          console.log(range);
          document.getElementById("num").innerHTML = range;
          for (let i = 1; i <= range; i++) {
            word += characters2[Math.floor(Math.random() * characters2.length)];
            console.log(word);
          }
          $("#pass").val(word);
        });
        $("#btn").click(function () {
          range = $("#customrange").val();
          word = "";
          $("#pass").val(word);
          for (let i = 1; i <= range; i++) {
            word += characters2[Math.floor(Math.random() * characters2.length)];
            console.log(word);
          }
          $("#pass").val(word);
        });
      }
    }
    if (sel == "Memorable-Words") {
      $("#pass").val(" "); $("#check1").hide(); $("#check2").hide(); $("#label1").hide(); $("#label2").hide();
      var mword = "";
      range = 4;
      for (let i = 1; i <= range; i++) {
        mword += mwords[Math.floor(Math.random() * mwords.length)] + "-";
        console.log(mword);
      }
      mword = mword.split("-").join(" - ");
      mword = mword.slice(0, range * 7 - 3);
      $("#pass").val(mword);
      $("#customrange").change(function () {
        mword = "";
        range = $("#customrange").val();
        console.log(range);
        document.getElementById("num").innerHTML = range;
        for (let i = 1; i <= range; i++) {
          mword += mwords[Math.floor(Math.random() * mwords.length)] + "-";
          console.log(mword);
        }
        mword = mword.split("-").join(" - ");
        mword = mword.slice(0, range * 7 - 3);
        $("#pass").val(mword);
      });
      $("#btn").click(function () {
        range = $("#customrange").val();
        mword = "";
        $("#pass").val(mword);
        for (let i = 1; i <= range; i++) {
          mword += mwords[Math.floor(Math.random() * mwords.length)] + "-";
          console.log(mword);
        }
        mword = mword.split("-").join(" - ");
        mword = mword.slice(0, range * 7 - 3);
        $("#pass").val(mword);
      });
    }
    if (sel == "PIN") {
      range = 4;
      $("#pass").val(" "); $("#check1").hide(); $("#check2").hide(); $("#label1").hide(); $("#label2").hide();
      let min = 10 ** parseInt(range - 1);
      let max = 10 ** parseInt(range) - 1;
      let value = Math.floor(Math.random() * (max - min + 1) + min) + " ";
      console.log(value);
      value = value.split("").join(" ");
      $("#pass").val(value);
      $("#customrange").change(function () {
        range = $("#customrange").val();
        console.log(range);
        document.getElementById("num").innerHTML = range;
        min = 10 ** parseInt(range - 1);
        max = 10 ** parseInt(range) - 1;
        value = Math.floor(Math.random() * (max - min + 1) + min) + " ";
        console.log(value);
        value = value.split("").join(" ");
        $("#pass").val(value);
      });
      $("#btn").click(function () {
        let value = Math.floor(Math.random() * (max - min + 1) + min) + " ";
        console.log(value);
        value = value.split("").join(" ");
        $("#pass").val(value);
      });
    }
  });
  $("#btn2").click(function () {
    var copy = document.getElementById("pass").value;
    console.log(copy);
    parseInt(copy);
    navigator.clipboard.writeText(copy);
    $("#lbl").text("Password Copied !");
    $("#lbl").css("background-color", "green");
  });
});
