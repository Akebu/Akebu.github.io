var description = "<img class='img-center' src='images/fingerprint.png'></img><br>Sensible lets you use the TouchID sensor as Home button. A simple & free alternative to virtualhome.<br><br><span style='color:#81BEF7'><b><u>Support :</b></u></span><br> - Single touch<br> - Double touch<br> - Triple touch<br> - Single touch and hold<br> - Hold</i><br><br>Sensible support basics assignment like Home button, Sleep, VoiceControl etc... and Activator. Wich mean you can customize Sensible with all the activators listeners.<br>Sensible also include a protection for the ControlCenter, no more accidental touch.<br><br>This project is entierly open source."
addView("Description", "", description)
generateWhatsNew()

var object = ["Author", "Category", "Updated","Version","Compatibility","Languages", "Dependencies"];
var key = ["Tony Ciroussel","Tweaks",lastDate, tweakVersion,"iPhone, iPad, iPod with iOS 9.0 or greater<br>Not tested on iOS 10", "English, Français, العربية", "mobilesubstrate, preferenceloader, activator"];
addViewWithTable("Informations", object, key)

addChangelogButton()
addScreenshotButton()
addButtonWithImage("Sensible on Github", "https://github.com/Akebu/Sensible", "github.png")
addButtonWithImage("Send me a mail", "mailto:tony.ciroussel@riseup.net", "mail.png")
