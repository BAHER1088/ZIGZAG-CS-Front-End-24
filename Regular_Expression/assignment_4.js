let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// "/http" to match "http"
// "s?" to allow the appearance of the "s" in "https" so the URL can start with "http" or "https"
// ":" to match ":"
// "\/\/" to match "//"
// "(?:...)" to group the included pattern without capturing it for later
// "[-\w]+" to match one or more "-" or letter
// "\." to match the dot "."
// "?" makes matching the previous group "(?:[-\w]+\.)" optional
// "(...)" to group the included pattern and capture it for later
// "[-\w]+" to match one or more "-" or letter
// "\." to match the dot "."
// "\w+" to match one or more letters
// "(?:...)" to group the included pattern without capturing it for later
// "\." to match the dot "."
// "\w+" to match one or more letters
// "?" makes matching the previous group "(?:\.\w+)" optional
// "\/" to match "/"
// "?" to allow the appearance of the previous "/" or not
// ".*" to match any char
// "i" to make the pattern case insensitive