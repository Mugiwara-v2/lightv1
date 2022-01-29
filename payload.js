function awaitpl() {
window.msgs.innerHTML="<h1 style=color:#87FF33>"+LoadedMSG+"</h1>";
}

function load_platinum(){
msgs.innerHTML="Loading Jailbreak + PlatinumHen-Unofficial v1.4b... Please Wait !!!";
LoadedMSG="PlatinumHen-Unofficial v1.4b Loaded... Press OK Now !!!";
PLfile = "henplatinum1b.bin";
exec_type = "payload";
toogle_payload();
}

function load_goldhen2b2(){
msgs.innerHTML="Loading Jailbreak + GoldHEN v2.0b2... Please Wait !!!";
LoadedMSG="GoldHEN v2.0b2 Loaded... Press OK Now !!!";
PLfile = "goldhen_2.0b2.bin";
exec_type = "payload";
toogle_payload();
}

function load_otoolbox(){
msgs.innerHTML="Loading Jailbreak + Orbis-Toolbox... Please Wait !!!";
LoadedMSG="Orbis-Toolbox Loaded... Press OK Now !!!";
PLfile = "Orbis-Toolbox.bin";
exec_type = "payload";
toogle_payload();
}

function load_gtabeef138(){
msgs.innerHTML="Loading Jailbreak + Gta Beefqueef Mod Menu 1.38c... Please Wait !!!";
LoadedMSG="Beefqueef Mod Menu 1.38c Loaded... Press OK Now !!!";
PLfile = "BeefQueefMod138.bin";
exec_type = "payload";
toogle_payload();
}

function load_rdr2129(){
msgs.innerHTML="Loading Read Dead Redemption II OystersMod 1.29 ... Please Wait !!!";
LoadedMSG="Read Dead Redemption II OystersMod 1.29 Loaded";
PLfile = "OystersMenu129.bin";
exec_type = "payload";
toogle_payload();
}

function load_dumper(){
msgs.innerHTML="Loading Jailbreak + Dumper... Please Wait !!!";
LoadedMSG="Dumper Loaded... Press OK Now !!!";
PLfile = "gamedumper.bin";
exec_type = "payload";
toogle_payload();
}

function load_webrte(){
msgs.innerHTML="Loading Jailbreak + WebRte... Please Wait !!!";
LoadedMSG="WebRte Loaded... Press OK Now !!!";
PLfile = "webrte.bin";
exec_type = "payload";
toogle_payload();
}

function load_ps4debug(){
msgs.innerHTML="Loading Jailbreak + Ps4Debug... Please Wait !!!";
LoadedMSG="Ps4Debug Loaded... Press OK Now !!!";
PLfile = "ps4debug.bin";
exec_type = "payload";
toogle_payload();
}

function load_disableUpdates(){
msgs.innerHTML="Loading Jailbreak + Disable Updates... Please Wait !!!";
LoadedMSG="Disable Updates Loaded... Press OK Now !!!";
PLfile = "disableupdates.bin";
exec_type = "payload";
toogle_payload();
}

function load_fanthreshold(){
var script = document.createElement('script');script.src = "fanthreshold.js";localStorage.setItem('fanthreshold', tempC.value);document.getElementsByTagName('head')[0].appendChild(script);
msgs.innerHTML="Loading Jailbreak + Fan Threshold... Please Wait !!!";
LoadedMSG="Fan Threshold Loaded... Press OK Now !!!";
exec_type = "payload";
setTimeout(poc,1500);
}

function load_webactivator(){
var script = document.createElement('script');script.src = "webactivator.js";document.getElementsByTagName('head')[0].appendChild(script);
msgs.innerHTML="Loading Jailbreak + Web Activator... Please Wait !!!";
LoadedMSG="Web Activator Loaded... Press OK Now !!!";
exec_type = "payload";
setTimeout(poc,1500);
}

var exec_type = "";

function toogle_payload(){
var req = new XMLHttpRequest();
req.responseType = "arraybuffer";
req.open("GET",PLfile,true);
req.send();
req.onreadystatechange=function(){
if (req.readyState == 4){
  var tmp0 = new Uint8Array(req.response.byteLength);
  tmp0.set(new Uint8Array(req.response), 0);
  var payload = new Uint32Array(tmp0);
  the_payload = payload;
  setTimeout(poc, 1500);
  }
};
}