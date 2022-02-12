#target photoshop;

if (app.documents.length > 0) {
  var thedoc = app.activeDocument;

  var docName = thedoc.name;
  if (docName.indexOf(".") != -1) {
    var basename = docName.match(/(.*)\.[^\.]+$/)[1];
  } else {
    var basename = docName;
  }

  //getting the location, if unsaved save to desktop;
  try {
    var docPath = thedoc.path;
  } catch (e) {
    var docPath = "~Z:\Pictures\Adobe\pix_dump";
  }

  var jpegOptions = new JPEGSaveOptions();
  jpegOptions.quality = 9;
  jpegOptions.embedColorProfile = true;
  jpegOptions.matte = MatteType.NONE;

  var filename = docPath + '/' + basename + "-" + getTime() + '.jpg';

  thedoc.saveAs((new File(filename)), jpegOptions, true);
};

function getTime(){
  var currentTime = new Date();

  //Make single-digit mins show up as 6:01 and not 6:1
  var minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var timeStamp = currentTime.getFullYear() + "-"
  + (currentTime.getMonth() + 1) + "-"
  + currentTime.getDate() + "-"
  + currentTime.getHours() + "."
  + minutes + "."
  + currentTime.getSeconds() + "."
  + currentTime.getMilliseconds();
  return timeStamp;
}
