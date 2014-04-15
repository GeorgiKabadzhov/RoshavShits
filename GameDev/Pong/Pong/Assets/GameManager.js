#pragma strict

static var playerScore01 : int = 0;
static var playerScore02 : int = 0;

var TheSkin : GUISkin;

static function Score (wallName : String) {
	if (wallName == "rightWall") {
		playerScore01 += 1; 
	} 
	
	else {
		playerScore02 += 1;
	}
	
	Debug.Log ("PlayerScore01 is " + playerScore01);
	Debug.Log ("PlayerScore02 is " + playerScore02);
}

function OnGUI() {
	GUI.skin = TheSkin;
	GUI.Label (new Rect (Screen.width/2 - 150, 25, 100, 100), "01: " + playerScore01);
	GUI.Label (new Rect (Screen.width/2 + 150, 25, 100, 100), "01: " + playerScore02);

}