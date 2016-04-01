/*
	TuxFamily - WTFPL \o/
*/

CatMovePix = 20;
AlertVsts = 6;
LeapVsts = 2;
RdyVsts = 3;
RestVsts = 4;
YawnVsts = 11;
var PPth;
var RUp = 0;
var FrmDelay = 0;
CatInLeap=0;
CatInRdy=0;
CatResting = 1;
CatAlert = 0;
CatInYawn = 0;
CatOff=0;
cx = 50;
cy = 50;
dx = 1;
dy = 1;
ox = 1;
oy = 1;
tmpc = "a110";
isie = 0;
isns = 0;
var ismCM = 0;
var mstmCM = 40;
var MouseVisCM = 0;
var MPxCM = -1;
var MPyCM = -1;
var isieCM = 0;
var isnsCM = 0;
var isdomCM = 0;
var alternzzz = 0;
var img_ext = 'png';
function cltCM() {
	var agt=navigator.userAgent.toLowerCase();
	if( (agt.indexOf("mozilla") != -1) && (agt.indexOf("spoofer") == -1) && (agt.indexOf("compatible") == -1) ) {
		return(10);
	}
	if( agt.indexOf("msie") != -1 ) {
		return(1);}
	else if(agt.indexOf("opera") != -1) {
		return(20);
	}
	return(1);
}

function MouseXCM() {
	if(ismCM != 1) {
		msuCM();
	}
	if(MPxCM < 0) return(100);
	return(MPxCM);
}

function MouseYCM() {
	if(ismCM == 0) { msuCM();}
	if(MPyCM < 0) return(100);/*r*/
	return(MPyCM);
}
function msuCM() {
	var CMtmp = 0;
	if(ismCM == 1) return;
	tmpCM = cltCM();
	if(tmpCM == 1) { isieCM = 1;}
	if(tmpCM == 10) { isnsCM = 1;}
	if(isnsCM || isdomCM) { window.onMouseMove = misrCM;}
	MouseVisCM = 1; ismCM = 1; mthCM();
}

function mthCM() {
	if(MouseVisCM == 1) {
		MouseVisCM = 0;
		if(isnsCM == 1 && isdomCM == 0) {
			window.captureEvents(Event.MOUSEMOVE);
		} else {
			document.body.onmousemove = misrCM;
		}
	}
	setTimeout("mthCM()",mstmCM);
}

function misrCM(evnt) {
	if(isnsCM && !isdomCM) {
		window.releaseEvents(Event.MOUSEMOVE);
		MPxCM = evnt.pageX;/*e*/
		MPyCM = evnt.pageY;
	} else {
		document.body.onmousemove = null;
		if(isieCM) {
			MPxCM = window.event.clientX; MPyCM = window.event.clientY;
		} else {
			MPxCM = evnt.clientX; MPyCM = evnt.clientY;
		}
	}
	MouseVisCM = 1;
}

function CatMs(Path, FrameDelay, LeapVisits, RdyVisits) {
	var tmpCM = 0;
	var TmpPath = "";
	PPth = Path;
	TmpPath = " " + Path;
	if(!Path) { PPth = './';}
	if(FrameDelay > 50 && FrameDelay <= 2000/*(*/) {
		FrmDelay = FrameDelay;
	} else {
		FrmDelay = 100;
	}
	tmpCM = cltCM();
	if(tmpCM == 1) { isieCM = 1;}
	if(tmpCM == 10) { isnsCM = 1;}
	if(tmpCM == 30) { isieCM = 1;}
	if(document.getElementById) { isdomCM = 1;}
	setTimeout("CatMsPL()",20);/*P*/
	setTimeout("RampUp()",(600 + 20)); setTimeout("RunCatMs()",FrmDelay);/*)*/
	TCBodyGifs();
}

function TCBodyGifs() {
	var i;
	var c;
	var lp;
	for(i = 0;i < 3;i++/*I*/) {
		for(c = 0; c < 3;c++) {
			for(lp = 0; lp < 2;lp++) {
				document.write('<div id="a' + i + c + lp + '"><img src="' + PPth + 'C' + i + c + lp + '.' + img_ext + '" /></div>' + "\n");
			}
		}
	}
	document.write('<div id="sleep"><img src="'  + PPth + 'sleep1.' + img_ext + '" /></div>' + "\n"); // xav
	document.write('<div id="sleep2"><img src="' + PPth + 'sleep2.' + img_ext + '" /></div>' + "\n"); // xav
}

function TCHeadStyles() {
	var i;
	var p;
	var e;
	document.write('<style type="text/css">' + "\n");
	for(i = 0;i < 3;i++) {
		for(p = 0;p < 3;p++) {
			for(e = 0;e < 2;e++) {
				document.write('#a' + i + p + e + ' {position:absolute; left:' + (30 + (40 * i)) + '; top:325; width:100; height:100;' +  "\n" + '  clip:rect(0 100 100 0); visibility:hidden; z-index: 9999; }' + "\n");
			}
		}
	}/*c*/
	document.write('#sleep {position:absolute; left:' + (30 + (40 * 4)) + '; top:325; width:100; height:100; ' + "\n" + '  clip:rect(0 100 100 0); visibility:hidden; z-index: 9999; }' + "\n"); // xav
	document.write('#sleep2 {position:absolute; left:' + (30 + (40 * 5)) + '; top:325; width:100; height:100; ' + "\n" + '  clip:rect(0 100 100 0); visibility:hidden; z-index: 9999; }' + "\n"); // xav
	document.write("</style>\n");
}

function CatMsPL() {
	var r;
	var i;
	var j;
	var k;
	if(document.images) {
		preloads = new Array(20); // xav
		r = 0;
		for(i = 0;i < 3;i++) {
			for(j = 0;j < 3;j++/*i*/) {
				for(k = 0;k < 2;k++) {
					preloads[r] = new Image();
					preloads[r].src = ((PPth) ? PPth : "") + "C" + i + j + k + "." + img_ext;
					r++;
				}
			}
		}
	}
	preloads[r] = new Image(); // xav
	preloads[r].src = ((PPth) ? PPth : "") + "sleep1." + img_ext; // xav
	preloads[r+1] = new Image(); // xav
	preloads[r+1].src = ((PPth) ? PPth : "") + "sleep2." + img_ext; // xav
	if(isdomCM) {
		da000 = document.getElementById("a000");
		da001 = document.getElementById("a001");
		da010 = document.getElementById("a010");
		da011 = document.getElementById("a011");
		da020 = document.getElementById("a020");
		da021 = document.getElementById("a021");
		da100 = document.getElementById("a100");
		da101 = document.getElementById("a101");
		da110 = document.getElementById("a110");
		da111 = document.getElementById("a111");
		da120 = document.getElementById("a120");
		da121 = document.getElementById("a121");
		da200 = document.getElementById("a200");
		da201 = document.getElementById("a201");
		da210 = document.getElementById("a210");
		da211 = document.getElementById("a211");
		da220 = document.getElementById("a220");
		da221 = document.getElementById("a221");
		dsleep= document.getElementById("sleep"); // xav
		dsleep2= document.getElementById("sleep2"); // xav
	}
}

function RampUp() {
	if( RUp < 6 ) {
		RUp++; setTimeout("RampUp()", 1000 );
	}
}

function RunCatMs() {
	if(RUp < 3) { RCMH(); return;}
	if(CatInLeap > 0) {
		CatInLeap++;
		if(CatInLeap > LeapVsts) {
			GetDirection();
			if(CatOff > 0) {
				ToInRdy();
			} else {
				ToInYawn();
			}
		} else {
			RCMH();
			return;
		}
	}
	if(CatInRdy > 0/*j*/) {
		CatInRdy++;
		if(CatInRdy > RdyVsts) {
			GetDirection();
			if(CatOff > 0) {
				ToInLeap();
			} else {
				ToInYawn();
			}
		} else {
			RCMH();
			return;
		}
	}
	if(CatResting > 0) {
		CatResting++;
		if(CatResting > RestVsts) {
			alternzzz = (alternzzz == 0) ? 1 : 0; // xav
			CatResting = 1;
			GetDirection();
			if(CatOff > 0) {
				ToInAlert();
			} else { //xav
				ToInRest(); //xav
			} //xav
		} else {
			RCMH();
			return;
		}
	}
	if(CatAlert > 0) {
		CatAlert++;
		if(CatAlert > AlertVsts) {
			GetDirection();
			if(CatOff > 0) {
				ToInLeap();
			} else {
				ToInRest();
			}
		}
	}
	if(CatInYawn > 0/*o*/) {
		CatInYawn++;
		if(CatInYawn > YawnVsts) {
			GetDirection();
			if(CatOff > 0) {
				ToInLeap();
			} else {
				ToInRest();
			}
		}
	}
	RCMH();
}

function RCMH() {
	setTimeout("RunCatMs()", FrmDelay) ;
}

function GetDirection() {
	var mx;
	var my;
	var x = 20;
	mx = MouseXCM();
	my = MouseYCM();
	ox = dx;
	oy = dy;
	if((cx - mx) < 0) {
		if( (cx + x - mx) >= 0) {
			dx = 1;
		} else {
			dx = 0;
		}
	} else {
		if((cx - x - mx) <= 0) {
			dx = 1;
		} else {
			dx = 2;
		}
	}
	if((cy - my) < 0) {
		if( (cy + x - my) >= 0) {
			dy = 1;
		} else {
			dy = 0;
		}
	} else {
		if((cy - x - my) <= 0) {
			dy = 1;
		} else {
			dy = 2;
		}
	}
	if(dx == 1 && dy == 1) {
		CatOff = 0;
	} else {
		CatOff = 1;
	}
}

function ToInRdy() { var tdv; tdv = "a" + dx + dy + "0"; ClrCat(); CatInLeap = 0; ShowCat(tdv); CatInRdy = 1;}
function ToInLeap() { var tdv; tdv = "a" + dx + dy + "1"; ClrCat(); CatInRdy = 0; CatAlert = 0; CatInYawn = 0; ShowCat(tdv); CatInLeap = 1;}
function ToInAlert() { var tdv; tdv = "a111"; ClrCat(); CatResting = 0; ShowCat(tdv); CatAlert = 1;}

function ToInRest() {
	var tdv; // xav
	if (alternzzz == 0) {// xav
		tdv = "sleep"; // xav
	} else {// xav
		tdv = "sleep2"// xav
	}// xav
// 	tdv = "sleep"; // xav
	ClrCat();
	CatAlert = 0;
	CatInYawn = 0;
	ShowCat(tdv); // xav
	CatResting = 1;
}

function ToInYawn() {
	var tdv;
	tdv = "a110";
	ClrCat();
	CatInRdy = 0;
	CatInLeap = 0;
	ShowCat(tdv);
	CatInYawn = 1;
}

function ClrCat() {
	if(isdomCM) {
		eval("d" + tmpc + ".style.visibility='hidden'");
		eval("d" + tmpc + ".style.top=0");
		eval("d" + tmpc + ".style.left=0");
	} else if(isnsCM) {
		document.layers[tmpc].visibility = "hidden";
		document.layers[tmpc].top = 0;
		document.layers[tmpc].left = 0;
	} else if(isieCM) {
		eval("document.all." + tmpc + ".style.visibility='hidden'");
		eval("document.all." + tmpc + ".style.top=0");
		eval("document.all." + tmpc + ".style.left=0");
	}
}

function ShowCat(tmpn) {
	var tnx;
	var tny;
	var mvby;
	if(dx == 1 || dy == 1/*h*/) {
		mvby = CatMovePix;
	} else {
		mvby = (CatMovePix / 4) * 3;
	}
	tnx = cx;
	if(dx < 1) {
		tnx = cx + mvby;
	}
	if(dx > 1) { tnx = cx - mvby;}
	tny = cy;
	if(dy < 1) { tny = cy + mvby;}
	if(dy > 1) { tny = cy - mvby;}
	cx = tnx; cy = tny; /*n*/
	/*if (tpmn == 'sleep' || tpmn == 'sleep2') {
		tnx 
	}*/
	if(isdomCM) {
		eval("d" + tmpn + ".style.left='" + tnx + "px';");
		eval("d" + tmpn + ".style.top='" + tny + "px';");
		eval("d" + tmpn + ".style.visibility='visible';");
		tmpc = tmpn;
	} else if(isnsCM) {
		document.layers[tmpn].left = tnx;
		document.layers[tmpn].top = tny;
		document.layers[tmpn].visibility = "visible";
		tmpc = tmpn;
	} else if(isieCM) {
		eval("document.all." + tmpn + ".style.left=" + tnx);
		eval("document.all." + tmpn + ".style.top=" + tny);
		eval("document.all." + tmpn + ".style.visibility='visible'");
		tmpc = tmpn;
	}
}

TCHeadStyles();

/*
   = CatMs() function should be called at the very
   = END of the body section (just before the
   = </BODY> tag).
*/

/**
 * @return An array holding known staff members
 */
function TFStaffMembers() {
    return [
        'slavik',
		'gribo',
		'paunch',
		'bx1',
		'krotreal'
    ];
}

/**
 * Pick a random staff member, unless one is provided through the "victim" GET
 * parameter.
 */
function TFOhGodNo(prefix) {
    if (typeof(prefix) === 'undefined') prefix = ''
    var queryDict = {}
    // See? This is why I consider JavaScript to be even worse than PHP...
    location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})
    var known_staff_members = TFStaffMembers();
    var random_staff_member = known_staff_members[Math.floor(Math.random() * known_staff_members.length)];
    staff_member = (queryDict['victim'] !== undefined) ? queryDict['victim'] : random_staff_member;
    CatMs(prefix + staff_member + '/')
}
