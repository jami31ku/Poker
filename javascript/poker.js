var obet = 0;
var InerHTML = "";
var c = new Array();
c[1] = "c-2c.gif";
c[2] = "c-2d.gif";
c[3] = "c-2h.gif";
c[4] = "c-2s.gif";
c[5] = "c-3c.gif";
c[6] = "c-3d.gif";
c[7] = "c-3h.gif";
c[8] = "c-3s.gif";
c[9] = "c-4c.gif";
c[10] = "c-4d.gif";
c[11] = "c-4h.gif";
c[12] = "c-4s.gif";
c[13] = "c-5c.gif";
c[14] = "c-5d.gif";
c[15] = "c-5h.gif";
c[16] = "c-5s.gif";
c[17] = "c-6c.gif";
c[18] = "c-6d.gif";
c[19] = "c-6h.gif";
c[20] = "c-6s.gif";
c[21] = "c-7c.gif";
c[22] = "c-7d.gif";
c[23] = "c-7h.gif";
c[24] = "c-7s.gif";
c[25] = "c-8c.gif";
c[26] = "c-8d.gif";
c[27] = "c-8h.gif";
c[28] = "c-8s.gif";
c[29] = "c-9c.gif";
c[30] = "c-9d.gif";
c[31] = "c-9h.gif";
c[32] = "c-9s.gif";
c[33] = "c-10c.gif";
c[34] = "c-10d.gif";
c[35] = "c-10h.gif";
c[36] = "c-10s.gif";
c[37] = "c-jc.gif";
c[38] = "c-jd.gif";
c[39] = "c-jh.gif";
c[40] = "c-js.gif";
c[41] = "c-qc.gif";
c[42] = "c-qd.gif";
c[43] = "c-qh.gif";
c[44] = "c-qs.gif";
c[45] = "c-kc.gif";
c[46] = "c-kd.gif";
c[47] = "c-kh.gif";
c[48] = "c-ks.gif";
c[49] = "c-ac.gif";
c[50] = "c-ad.gif";
c[51] = "c-ah.gif";
c[52] = "c-as.gif";

var ca = new Array();
var tmp = 0;
for (var w=1;w<=52;w++) {ca[w]=w;}
var my = new Array();
var his = new Array();

var ante = 10;
var cmoney = 1000;
var ymoney = 1000;
var thebet = 10;
var sets = 0;

// Start Set Your Bet 
var betm = 0;
var zb=0;
function SetMyBet(form, BetValue) 
{
	if (sets!=2) 
	{
		alert("You Can Raise The Bet Only After Drawing Cards And Before Calling..");
		zb=0;
		for (var k=0;k<=200;k+=50) 
		{
			if (betm==k) 
			{
				document.forms[0].elements[11+zb].click()
			}
			zb++
		}
		return;
	}
	betm = BetValue;
} 
// End Set Your Bet 

// Start Replace Card
function RePlaceCard(form , cardIndex) 
{
	if (sets!=1) {return;}
	draw--;
	if (cs[cardIndex]==1) 
	{
		alert("You Have Already Replaced The Card");
		draw++;
		return;
	}
	if (draw<0) 
	{
		draw++;
		alert("only up to 4 cards can be drawn");
		return;
	}
	ccount++;
	if (ccount>52) {ccount=1;}
	my[cardIndex]=ca[ccount];
	cs[cardIndex]=1;
}
// End Replace Card

var bin = new Array();
var v=0;
var mybin = new Array();
var cd = new Array();
cd[1]="2";
cd[2]="3";
cd[3]="4";
cd[4]="5";
cd[5]="6";
cd[6]="7";
cd[7]="8";
cd[8]="9";
cd[9]="10";
cd[10]="Jack";
cd[11]="Queen";
cd[12]="King";
cd[13]="Ace";

var mybest = new Array();
var hisbest = new Array();
var win = 0;
//Start Draw Card
function DrawCard(form) 
{
	if (sets==0) 
	{
		alert("Deal Cards"); 
		return;
	}
	if (sets>=2) 
	{
		alert("You Can Only Bet Or Call Now"); 
		return;
	}
	sets = 2;
	var mydraw = draw;
	draw = 4-draw;
	if (draw>1) 
	{
		var card=" CARDS";
	} 
	else 
	{
		var card=" CARD";
	}

	if (mydraw==4) 
	{
		return;
	}
	
	InerHTML = "<HTML><HEAD><TITLE></TITLE></HEAD><BODY BGCOLOR='#FFFFFF'><TABLE BORDER='1' BGCOLOR='#F3E2A9'><TR><TD COLSPAN='5' ALIGN='center'><FONT COLOR='#0000FF'><STRONG>YOU DRAW "+draw+" "+card+"</STRONG></FONT></TD></TR><TR>";
	for (var w=1;w<=5;w++) 
	{
		InerHTML += "<TD><IMG SRC='cards/" + c[my[w]] + "' ALIGN=LEFT BORDER=1 WIDTH=69 HEIGHT=95></TD>";
	}
	InerHTML += "</TABLE></BODY></HTML>";
	top.frames[2].document.open();
	top.frames[2].document.write(InerHTML);
	top.frames[2].document.close();
}
//End Draw Card

function compot(form) 
{
	cmoney+=thebet;
	ymoney-=thebet;
	document.forms[0].elements["ComputerBalance"].value = cmoney;
	document.forms[0].elements["yourBalance"].value = ymoney;
}

function yourpot(form) 
{
	cmoney-=thebet;
	ymoney+=thebet;
	document.forms[0].elements["ComputerBalance"].value = cmoney;
	document.forms[0].elements["yourBalance"].value = ymoney;
}


function CheckDrawAndShowResult(form) 
{
	if (sets!=2) 
	{
		alert("You Can't Click Call Now..");
		return;
	}
	
	sets=0
	InerHTML = "<HTML><HEAD><TITLE></TITLE></HEAD><BODY BGCOLOR='#FFFFFF'><TABLE BORDER='1' BGCOLOR='#F3E2A9'><TR><TD COLSPAN='5' ALIGN='center'><FONT COLOR='#0000FF'><STRONG>COMPUTER DRAWING [THINKING]</STRONG></FONT></TD></TR><TR>";
	for (var w=1;w<=5;w++) 
	{
		InerHTML += "<TD><IMG SRC='cards/" + c[his[w]] + "' ALIGN=LEFT BORDER=1 WIDTH=69 HEIGHT=95></TD>";
	}
	InerHTML += "</TR></TABLE></BODY></HTML>";
	top.frames[0].document.open();
	top.frames[0].document.write(InerHTML);
	top.frames[0].document.close();

	for (v=1;v<=13;v++) { bin[v]=0;}
	for (var w=1;w<=5;w++) 
	{
		v=0;
		for (var k=4;k<=52;k+=4) 
		{
			v++;
			if (his[w]<=k) 
			{
				bin[v]++;
				break;
			}
		} //end for
	} //end for
	
	//if straight or flush leave alone
	// flush
	var u=0;
	for (var k=0;k<=3;k++) 
	{
		u=0;
		for (var w=1;w<=13;w++) 
		{
			for (var z=1;z<=5;z++) 
			{
				if (his[z]==w*4-k){u++;}
			}
			if (u==5) {break;}
		}
		if (u==5) {break;}
	}
	//straight
	if (u!=5) 
	{
		var r=0;
		for (var w=13;w>=5;w--) 
		{
			if (bin[w]>0) 
			{
				if (bin[w-1]>0 && bin[w-2]>0 && bin[w-3]>0 && bin[w-4]>0) 
				{
					r=w;
				} 
			}
		} 
	}

	draw=4
	if (u!=5 && r==0) 
	{
		for (w=1;w<=13;w++) 
		{
			if (bin[w]==1) 
			{
				draw--;
				if (draw<0) 
				{
					draw++;
					break;
				}
				for (var z=1;z<=5;z++) 
				{
					if (his[z]<=w*4 && his[z]>(w-1)*4) 
					{
						ccount++;
						if (ccount>52) {ccount=1;}
						his[z]=ca[ccount];
					} 
				} //end for z
			} //end if bin[w]
		} //end for w
	}
	delay = setTimeout("FinalResult()",5000);
}

function FinalResult(form) 
{
	draw = 4-draw;
	if (draw>1) 
	{
		var card="CARDS";
	}
	else 
	{
		var card="CARD";
	}
	sets=0
	thebet = ante + betm

	InerHTML = "<HTML><HEAD><TITLE></TITLE></HEAD><BODY BGCOLOR='#FFFFFF'><TABLE BORDER='1' BGCOLOR='#F3E2A9'><TR><TD COLSPAN='5' ALIGN='center'><FONT COLOR='#0000FF'><STRONG>COMPUTER DRAW "+draw+" "+card+"</STRONG></FONT></TD></TR><TR>";
	for (var w=1;w<=5;w++) 
	{
		InerHTML += "<TD><IMG SRC='cards/" + c[his[w]] + "' ALIGN=LEFT BORDER=1 WIDTH=69 HEIGHT=95></TD>";
	}
	InerHTML += "</TR></TABLE></BODY></HTML>";
	top.frames[0].document.open();
	top.frames[0].document.write(InerHTML);
	top.frames[0].document.close();

//Start To Check Result
	for (var v=1;v<=13;v++) { bin[v]=0; }
	for (var w=1;w<=5;w++) 
	{
		v=0;
		for (var k=4;k<=52;k+=4) 
		{
			v++;
			if (his[w]<=k) 
			{
				bin[v]++;
				break;
			}
		} //end for
	} //end for

	for (var v=1;v<=13;v++) { mybin[v]=0;}
	for (var w=1;w<=5;w++) 
	{
		v=0;
		for (var k=4;k<=52;k+=4) 
		{
			v++;
			if (my[w]<=k) 
			{
				mybin[v]++;
				break;
			}
		} //end for
	} //end for

	for (var v=0;v<=4;v++) 
	{
		hisbest[v]=0;
		mybest[v]=0;
	}

	// Flush
	var t=0;
	for (var k=0;k<=3;k++) 
	{
		t=0;
		for (var w=1;w<=13;w++) 
		{
			for (var z=1;z<=5;z++) 
			{
				if (my[z]==w*4-k) {t++;}
			}
			if (t==5) {break;}
		}
		if (t==5) {break;}
	}

	var u=0;
	for (var k=0;k<=3;k++) 
	{
		u=0;
		for (var w=1;w<=13;w++) 
		{
			for (var z=1;z<=5;z++) 
			{
				if (his[z]==w*4-k) {u++;}
			}
			if (u==5) {break;}
		}
		if (u==5) {break;}
	}

	//Straight
	var r=0;
	var g=0;
	for (var w=13;w>=5;w--) 
	{
		if (bin[w]>0) 
		{
			if (bin[w-1]>0 && bin[w-2]>0 && bin[w-3]>0 && bin[w-4]>0) 
			{
				r=w;
			} 
		}
		if (mybin[w]>0) 
		{
			if (mybin[w-1]>0 && mybin[w-2]>0 && mybin[w-3]>0 && mybin[w-4]>0) 
			{
				g=w;
			} 
		}
	} //end for

	for (var v=1;v<=13;v++) 
	{
		if (bin[v]==4) {hisbest[4]=v;}
		if (mybin[v]==4) {mybest[4]=v;}
		if (bin[v]==3) {hisbest[3]=v;}
		if (mybin[v]==3) {mybest[3]=v;}
		if (bin[v]==2) 
		{
			if (hisbest[2]==0) 
			{
				hisbest[2]=v;
			}
			else 
			{
				hisbest[1]=v;
			}
		}
		if (mybin[v]==2) 
		{
			if (mybest[2]==0) 
			{
				mybest[2]=v;
			}
			else 
			{
				mybest[1]=v;
			}
		}	
		//highest single card
		if (bin[v]==1) {hisbest[0]=v;}
		if (mybin[v]==1) {mybest[0]=v;}
	} //end for

	//more bets
	if (hisbest[4]>0 || hisbest[3]>0 || u==5 || r>0) 
	{
		obet=200; 
		thebet+=obet;
	}
	else 
	{
		if (hisbest[2]>0 && hisbest[1]>0) 
		{
			obet=150; 
			thebet+=obet;
		}
		else 
		{
			if (hisbest[2]>0 && hisbest[1]==0) 
			{
				if (hisbest[2]>8) 
				{
					obet=100; 
					thebet+=obet;
				}
				else 
				{
					obet=50; 
					thebet+=obet;
				}
			}
			else 
			{        
				if (hisbest[0]>10) 
				{
					obet=50; 
					thebet+=obet;
				}
				else 
				{
					obet=0; 
					thebet+=obet;
              }
          }
      }
	}	
	//bet of other player
	document.forms[0].elements["obet"].value = "$"+obet

	//straight flush
	if (u==5 && t==5 && r>=5 && g>=5) 
	{
		if (r>g) 
		{
			document.forms[0].elements["win"].value = "Computer Won - straight flush, "+cd[hisbest[0]]+" high";
			compot(this.form);
			return;
		}
		if (r>g)
		{
			document.forms[0].elements["win"].value = "You Won - straight flush, "+cd[mybest[0]]+" high";
			yourpot(this.form);
			return;
		}
	}
	if (u==5 && r>=5) 
	{
		document.forms[0].elements["win"].value = "Computer Won with a straight flush!";
		compot(this.form);
		return;
	}
	if (t==5 && g>=5) 
	{
		document.forms[0].elements["win"].value = "You Won with a straight flush!";
		yourpot(this.form);
		return;
	}

	//4 of kind + highest
	if (hisbest[4]>mybest[4]) 
	{
		document.forms[0].elements["win"].value = "Computer Won, best four "+cd[hisbest[4]];
		compot(this.form);
		return;
	}
	if (mybest[4]>hisbest[4]) 
	{
		document.forms[0].elements["win"].value = "You Won, best four "+cd[mybest[4]];
		yourpot(this.form);
		return;
	}
	if (hisbest[4]==mybest[4] && hisbest[4]!=0) 
	{
		if (hisbest[0]>mybest[0]) 
		{
			document.forms[0].value = "Computer Won, equal four "+cd[hisbest[4]]+" but highest single "+cd[hisbest[0]];
			compot(this.form);
			return;
		}
		if (mybest[0]>hisbest[0]) 
		{
			document.forms[0].elements["win"].value = "You Won, equal four "+cd[mybest[4]]+" but highest single"+cd[mybest[0]];
			yourpot(this.form);
			return;
		} 
		else 
		{
			document.forms[0].elements["win"].value = "You Tied, equal four "+cd[mybest[4]]+", same single"+cd[mybest[0]];
			return;
		}
	}

	//3 of kind + 1 pair + highest = full house
	if (hisbest[3]>0 && hisbest[2]>0 && mybest[2]==0) 
	{
		document.forms[0].elements["win"].value = "Computer Won, three "+cd[hisbest[3]]+"s + 1 pair of "+cd[hisbest[2]]+"s";
		compot(this.form);
		return;
	}
	if (mybest[3]>0 && mybest[2]>0 && hisbest[2]==0) 
	{
		document.forms[0].elements["win"].value = "You Won, three "+cd[mybest[3]]+"s + 1 pair of "+cd[mybest[2]]+"s";
		yourpot(this.form);
		return;
	}
	if (hisbest[3]>0 && mybest[3]==0 && hisbest[2]>0) 
	{
		document.forms[0].elements["win"].value = "Computer Won, three "+cd[hisbest[3]]+"s + 1 pair of "+cd[hisbest[2]]+"s";
		compot(this.form);
		return;
	}
	if (mybest[3]>0 && hisbest[3]==0 && mybest[2]>0) 
	{
		document.forms[0].elements["win"].value = "You Won, three "+cd[mybest[3]]+"s + 1 pair of "+cd[mybest[2]]+"s";
		yourpot(this.form);
		return;
	}
	
	//both have full house
	if (mybest[3]>0 && mybest[2]>0 && hisbest[3]>0 && hisbest[2]>0) 
	{
		if (hisbest[3]>mybest[3]) 
		{
			document.forms[0].elements["win"].value = "Computer Won, best three "+cd[hisbest[3]]+"s + 1 pair of "+cd[hisbest[2]]+"s";
			compot(this.form);
			return;
		}
		if (hisbest[3]==mybest[3]) 
		{
			if (hisbest[2]>mybest[2]) 
			{
				document.forms[0].elements["win"].value = "Computer Won, three "+cd[hisbest[3]]+"s + best pair of "+cd[hisbest[2]]+"s";
				compot(this.form);
				return;
			}
			if (mybest[2]>hisbest[2]) 
			{
				document.forms[0].elements["win"].value = "You Won, three "+cd[mybest[3]]+"s + best pair of "+cd[mybest[2]]+"s";
				compot(this.form);
				return;
			}
			if (mybest[2]==hisbest[2]) 
			{
				if (mybest[1]>hisbest[1]) 
				{
					document.forms[0].elements["win"].value = "You Won, three "+cd[mybest[3]]+"s + pair of "+cd[mybest[2]]+ " best "+cd[mybest[1]]+"s";
					compot(this.form);
					return;
				}
				if (hisbest[1]>mybest[1]) 
				{
					document.forms[0].elements["win"].value = "Computer Won, three "+cd[hisbest[3]]+"s + pair of "+cd[hisbest[2]]+"s + best "+cd[hisbest[1]];
					compot(this.form);
					return;
				}
				document.forms[0].elements["win"].value = "You Tied, three equal "+cd[mybest[3]]+"s + 1 pair of "+cd[mybest[2]]+"s + equal "+cd[hisbest[1]];
				return;
			}
		}
	}
	//flush (same suit) check club, heart etc. if out of sequence forget
	if (u==5 && t!=5) 
	{
		document.forms[0].elements["win"].value = "Computer Won with a flush";
		compot(this.form);
		return;
	}
	if (u!=5 && t==5) 
	{
		document.forms[0].elements["win"].value = "You Won with a flush";
		yourpot(this.form);
		return;
	}

	if (u==5 && t==5) 
	{
		for (var w=13;w>=1;w--) 
		{
			if (bin[w]>0 && mybin[w]==0) 
			{
				document.forms[0].elements["win"].value = "Computer Won with highest flush";
				compot(this.form);
				return;
			}
			if (mybin[w]>0 && bin[w]==0) 
			{
				document.forms[0].elements["win"].value = "You Won with highest flush";
				yourpot(this.form);
				return;
			}
		}
	}

	//straight 23456 need bins and no gap once start, did above
	if (r>0 && g==0) 
	{
		document.forms[0].elements["win"].value = "Computer Won with a straight";
		compot(this.form);
		return;
	} 
	if (g>0 && r==0) 
	{
		document.forms[0].elements["win"].value = "You Won with a straight";
		yourpot(this.form);
		return;
	} 
	if (r>0 && g>0 && r>g) 
	{
		document.forms[0].elements["win"].value = "Computer Won with a higher straight";
		compot(this.form);
		return;
	} 
	if (r>0 && g>0 && g>r) 
	{
		document.forms[0].elements["win"].value = "You Won with a higher straight";
		yourpot(this.form);
		return;
	} 
	if (r==g && g>0) 
	{
		document.forms[0].elements["win"].value = "You Tied with equal straights";
		return;
	} 

	//3 of a kind + highest
	if (hisbest[3]>mybest[3]) 
	{
		document.forms[0].elements["win"].value = "Computer Won, three "+cd[hisbest[3]]+"s";
		compot(this.form);
		return;
	}
	if (mybest[3]>hisbest[3]) 
	{
		document.forms[0].elements["win"].value = "You Won, three "+cd[mybest[3]]+"s";
		yourpot(this.form);
		return;
	}
	if (mybest[3]==hisbest[3] && mybest[3]>0) 
	{
		if (hisbest[0]>mybest[0]) 
		{
			document.forms[0].elements["win"].value = "Computer Won, three equal "+cd[mybest[3]]+"s, best single "+cd[hisbest[0]];
			compot(this.form);
			return;
		}
		if (mybest[0]>hisbest[0]) 
		{
			document.forms[0].elements["win"].value = "You Won, three equal "+cd[mybest[3]]+"s, best single "+cd[mybest[0]];
			yourpot(this.form);
			return;
		}
		else 
		{
			document.forms[0].elements["win"].value = "You Tied, three equal "+cd[mybest[3]]+"s and single "+cd[mybest[0]];
			return;
		}
	}

	//2 pair + highest
	if (hisbest[2]>0 && hisbest[1]>0 && mybest[1]==0) 
	{
		document.forms[0].elements["win"].value = "Computer Won, 2 pairs of "+cd[hisbest[2]]+"s and "+cd[hisbest[1]]+"s";
		compot(this.form);
		return;
	}
	if (mybest[2]>0 && mybest[1]>0 && hisbest[1]==0) 
	{
		document.forms[0].elements["win"].value = "You Won, 2 pairs of "+cd[mybest[2]]+"s and "+cd[mybest[1]]+"s";
		yourpot(this.form);
		return;
	}
	if (mybest[2]>0 && mybest[1]>0 && hisbest[2]>0 && hisbest[1]>0) 
	{
		if (hisbest[1]>mybest[1]) 
		{
			document.forms[0].elements["win"].value = "Computer Won, 2 pairs, pair of "+cd[hisbest[1]]+"s is highest";
			compot(this.form);
			return;
		}
		if (hisbest[1]==mybest[1] && hisbest[2]>mybest[2]) 
		{
			document.forms[0].elements["win"].value = "Computer Won, 2 pairs, 1 equal, pair of "+cd[hisbest[2]]+"s is highest";
			compot(this.form);
			return;
		} 
		if (hisbest[1]==mybest[1] && mybest[2]>hisbest[2]) 
		{
			document.forms[0].elements["win"].value = "You Won, 2 pairs, 1 equal, pair of "+cd[mybest[2]]+"s is highest";
			yourpot(this.form);
			return;
		} 
		
		// both 2 pair but one is highest [2] is lower pair than [1]
		if (hisbest[1]>mybest[1]) 
		{
			document.forms[0].elements["win"].value = "Computer Won, 2 pairs with "+cd[hisbest[1]]+"s high";
			compot(this.form);
			return;
		}
		if (mybest[1]>hisbest[1]) 
		{
			document.forms[0].elements["win"].value = "You Won, 2 pairs with "+cd[mybest[1]]+"s high";
			yourpot(this.form);
			return;
		}
		if (hisbest[1]==mybest[1] && mybest[2]==hisbest[2]) 
		{
			if (hisbest[0]>mybest[0]) 
			{    
				document.forms[0].elements["win"].value = "Computer Won, 2 equal pair of "+cd[hisbest[1]]+"s, single highest "+cd[hisbest[0]];
				compot(this.form);
				return;
			}
			if (mybest[0]>hisbest[0]) 
			{    
				document.forms[0].elements["win"].value = "You Won, 2 equal pair of "+cd[mybest[1]]+"s, single highest "+cd[mybest[0]];
				yourpot(this.form);
				return;
			}
			else 
			{
				document.forms[0].elements["win"].value = "You Tied, 2 equal pair of "+cd[hisbest[1]]+"s, no card highest, see next one etc.";
			}
		}
	}

	//1 pair
	if (hisbest[2]>mybest[2]) 
	{
		document.forms[0].elements["win"].value = "Computer Won, pair of "+cd[hisbest[2]]+"s";
		compot(this.form);
		return;
	}
	if (mybest[2]>hisbest[2]) 
	{
		document.forms[0].elements["win"].value = "You Won, pair of "+cd[mybest[2]]+"s";
		yourpot(this.form);
		return;
	}
	if (hisbest[2]==mybest[2] && mybest[2]>0) 
	{
		if (hisbest[0]>mybest[0]) 
		{    
			document.forms[0].elements["win"].value = "Computer Won, equal pair of "+cd[hisbest[2]]+"s, best single "+cd[hisbest[0]];
			compot(this.form);
			return;
		} 
		if (mybest[0]>hisbest[0]) 
		{    
			document.forms[0].elements["win"].value = "You Won, equal pair of "+cd[mybest[2]]+"s, best single "+cd[mybest[0]];
			yourpot(this.form);
			return;
		}
		else  //find highest card below highest card
		{
			for (w=mybest[0]-1;w>=1;w--) 
			{
				if (bin[w]>mybin[w]) 
				{
					document.forms[0].elements["win"].value = "Computer Won, after ties, highest single is "+cd[w];
					compot(this.form);
					return;
				}
				if (mybin[w]>bin[w]) 
				{
					document.forms[0].elements["win"].value = "You Won, after ties, highest single is "+cd[w];
					yourpot(this.form);
					return;
				}
			}
		}
	}

	//highest card wins
	if (hisbest[0]>mybest[0]) 
	{
		document.forms[0].elements["win"].value = "Computer Won, best single "+cd[hisbest[0]];
		compot(this.form);
		return;
	}
	if (mybest[0]>hisbest[0]) 
	{
		document.forms[0].elements["win"].value = "You Won, best single "+cd[mybest[0]];
		yourpot(this.form);
		return;
	}
	
	//find highest card, all are singles
	for (w=13;w>=1;w--) 
	{
		if (bin[w]>mybin[w]) 
		{
			document.forms[0].elements["win"].value = "Computer Won, after ties, highest single is "+cd[w];
			compot(this.form);
			return;
		}
		if (mybin[w]>bin[w]) 
		{
			document.forms[0].elements["win"].value = "You Won, after ties, highest single is "+cd[w];
			yourpot(this.form);
			return;
		}
	}
	document.forms[0].elements["win"].value = "There Is No Winner!";
} 


// Start Start New Game
var ccount = 1;
function StartNewGame(form) 
{
	document.forms[0].elements["win"].value = "";
	document.forms[0].elements["obet"].value = "";
	ccount = 0;
	//shuffle 20 times
	for (var w=1;w<=20;w++) 
	{
		var q1=Math.floor(Math.random()*52)+1;
		var q2=Math.floor(Math.random()*52)+1;
		if (q1==q2) 
		{
			w--;
		} 
		else 
		{
			tmp = ca[q1];
			ca[q1]=ca[q2];
			ca[q2]=tmp;
		}
	}

	InerHTML = "<HTML><HEAD><TITLE></TITLE></HEAD><BODY BGCOLOR='#FFFFFF'><TABLE WIDTH='100%' BORDER='1' BGCOLOR='#F3E2A9'><TR><TD COLSPAN='5' ALIGN='center'><FONT COLOR='#0000FF'><STRONG>COMPUTER</STRONG></FONT></TD></TR></TABLE></BODY></HTML>";
	top.frames[0].document.open();
	top.frames[0].document.write(InerHTML);
	top.frames[0].document.close();
	
	InerHTML = "<HTML><HEAD><TITLE></TITLE></HEAD><BODY BGCOLOR='#FFFFFF'><TABLE WIDTH='100%' BORDER='1' BGCOLOR='#F3E2A9'><TR><TD COLSPAN='5' ALIGN='center'><FONT COLOR='#0000FF'><STRONG>YOU</STRONG></FONT></TD></TR></TABLE></BODY></HTML>";
	top.frames[2].document.open();
	top.frames[2].document.write(InerHTML);
	top.frames[2].document.close();
	sets = 0;
} 
//End Start New Game

var draw = 4;
var cs = new Array();
cs[1]=0;
cs[2]=0;
cs[3]=0;
cs[4]=0;
cs[5]=0;

//Start Deal Cards
function GetDealCards(form) 
{
	if (sets!=0) 
	{
		alert("Improper Time To Deal! You Should: Draw, Bet, or Call...");
		return
	}
	document.forms[0].elements["win"].value = "";
	document.forms[0].elements["obet"].value = "";
	sets = 1;
	draw = 4;
	for (var w=0;w<=5;w++)
	{
		cs[w]=0;
	}

	InerHTML = "<HTML><HEAD><TITLE></TITLE></HEAD><BODY BGCOLOR='#FFFFFF'><TABLE BORDER='1' BGCOLOR='#F3E2A9'><TR><TD COLSPAN='5' ALIGN='center'><FONT COLOR='#0000FF'><STRONG>YOU</STRONG></FONT></TD></TR><TR>";
	for(index=1; index<=5; index++)
	{
		//First Card To You
		ccount++;
		if (ccount>52) {ccount=1;}
		InerHTML += "<TD><IMG SRC='cards/" + c[ca[ccount]] + "' ALIGN=LEFT BORDER=1 WIDTH=69 HEIGHT=95></TD>";
		my[index]=ca[ccount];
		//Second Card To Computer
		ccount++;
		if (ccount>52) {ccount=1;}
		his[index]=ca[ccount];	
	}
	InerHTML += "</TR></TABLE></BODY></HTML>";
	top.frames[2].document.open();
	top.frames[2].document.write(InerHTML);
	top.frames[2].document.close();

	InerHTML = "<HTML><HEAD><TITLE></TITLE></HEAD><BODY BGCOLOR='#FFFFFF'><TABLE BORDER='1' BGCOLOR='#F3E2A9'><TR><TD COLSPAN='5' ALIGN='center'><FONT COLOR='#0000FF'><STRONG>COMPUTER</STRONG></FONT></TD></TR><TR>";
	for (var w=1;w<=5;w++) 
	{
		InerHTML += "<TD><IMG SRC='cards/c-card.gif' ALIGN=LEFT BORDER=1 WIDTH=69 HEIGHT=95></TD>";
	}
	InerHTML += "</TR><TABLE></BODY></HTML>";
	top.frames[0].document.open();
	top.frames[0].document.write(InerHTML);
	top.frames[0].document.close();
} 
//End Deal Cards