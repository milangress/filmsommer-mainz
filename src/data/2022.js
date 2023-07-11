const dates = [
	{
		date: '2022-08-16',
		name: 'Eröffnungsabend',
		events: [
			{
				time: '16:00:00',
				type: 1,
				title: 'Ballhaus Miezen',
				fskHidden: false,
				content:
					'\u003Cp class="p2"\u003EGrammophonesk scheppernder Swing. Rotzig und musikalisch kunstvoll geschrammelt, geknarzt, getr&ouml;tet und gegrowlt. Tanzbar und geradeheraus.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp class="p3"\u003EFlorian Wehse, Gesang &amp; Trompete, Jens Mackenthun, Banjo und Gitarre und Jonathan Sell am Kontrabass.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E'
			},
			{
				time: '17:00:00',
				type: 'Komödie',
				title: 'Das schwarze Quadrat',
				fsk: true,
				content:
					'\u003Cp class="p2"\u003EBei dem Versuch, ein millionenschweres Gem&auml;lde auf einer Kreuzfahrt zu verkaufen, geraten die Kunstdiebe Vincent (Bernhard Sch&uuml;tz) und Nils (Jacob Matschenz) in eine wilde Katz-und-Maus-Jagd. Auch Martha (Sandra H&uuml;ller), die vermeintlich arglose Bekanntschaft von der Bordbar, will nur eines: Das &bdquo;Schwarze Quadrat&ldquo;.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003E\u003Cstrong\u003EBuch und Regie \u003C\u002Fstrong\u003EPeter Meister \u003Cbr \u002F\u003E\u003Cstrong\u003ERedaktion \u003C\u002Fstrong\u003EChristian Cloos (\u003Cstrong\u003E\u003Cem\u003EZDF\u002FDas kleine Fernsehspiel\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E), Olaf Grunert (\u003Cstrong\u003E\u003Cem\u003EZDF\u002FARTE\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E), Daniela Muck (\u003Cstrong\u003E\u003Cem\u003EARTE\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E) \u003Cbr \u002F\u003E\u003Cstrong\u003EFSK \u003C\u002Fstrong\u003Eab 12 \u003Cbr \u002F\u003E\u003Cstrong\u003E97 Min.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E',
				pathText: 'test'
			}
		],
		image: 'DSQ_Schuetz_Hueller_Matschenz_Copyright_GordonATimpen.jpg'
	},
	{
		id: 2,
		date: '2022-08-17',
		name: 'Kurzfilm Abend „ZU KRASS“',
		events: [
			{
				time: '16:00:00',
				type: 1,
				title: 'DJ Kandels',
				content:
					'\u003Cp class="p2"\u003EGude Leute, ich bin &bdquo;Kandels&ldquo; und freue mich darauf, euch zur Einleitung des Filmsommers mit warmen, sommerlichen B&auml;ssen zu versorgen.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E'
			},
			{
				time: '16:00:00',
				type: 'Kurzfilmabend',
				title: 'ZU KRASS',
				fsk: true,
				content:
					'\u003Cp class="p2"\u003EEs geht um Rebellion, darum geh&ouml;rt zu werden, eigene Entscheidungen zu treffen und die Dynamiken, die sich daraus ergeben. Das klingt vielleicht nach sehr egoistischen Protagonist*innen \u003Cstrong\u003E\u003Cem\u003E&ndash; \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Esind sie aber nicht, zumindest nicht nur. Und sie haben etwas zu sagen. Mal voller Wut, manchmal auch leise, aber immer mit Gef&uuml;hl. Protest, Aktion, Mut, Freundschaft, Brisanz, Eigenleben, Raserei und auch Liebe \u003Cstrong\u003E\u003Cem\u003E&ndash; \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Edas alles ist \u003Cstrong\u003E\u003Cem\u003ETraces of Youth &ndash; Eine Spur zu krass\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp class="p3"\u003E&nbsp;\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Ca title="" href="https://www.shortfilm.com" target="_blank" rel="noopener"\u003Ewww.shortfilm.com&nbsp;\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003E\u003Cstrong\u003EFilme \u003Cem\u003EFest\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E, \u003Cstrong\u003E\u003Cem\u003EShe-Pack\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E, \u003Cstrong\u003E\u003Cem\u003ETrain Robbers\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E, \u003Cstrong\u003E\u003Cem\u003EThree Centimetres\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E, \u003Cstrong\u003E\u003Cem\u003EEmpreintes &ndash; Abdr&uuml;cke\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E, \u003Cstrong\u003E\u003Cem\u003EFuck You \u003Cbr \u002F\u003E\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E\u003Cstrong\u003ERegie \u003C\u002Fstrong\u003Everschiedene Regisseure \u003Cbr \u002F\u003E\u003Cstrong\u003EKooperationspartner \u003C\u002Fstrong\u003EKurzfilmagentur HH \u003Cbr \u002F\u003E\u003Cstrong\u003ELizenzgebiet \u003C\u002Fstrong\u003EDeutschland \u003Cbr \u002F\u003E\u003Cstrong\u003EFSK \u003C\u002Fstrong\u003Eab 16 \u003Cbr \u002F\u003E\u003Cstrong\u003E140 Min\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E',
				pathText: 'asdfc'
			}
		],
		image: 'DSQ_Schuetz_Hueller_Matschenz_Copyright_GordonATimpen.jpg'
	},
	{
		id: 5,
		date: '2022-08-18',
		name: 'test',
		events: [
			{
				time: '16:00:00',
				type: 'party',
				title: 'Jens Mackenthun & Gregor Schor',
				content:
					'\u003Cp class="p2"\u003EDas Duo aus Saxophon und Gitarre liefert chillige Grooves und relaxte Melodien aus Jazz und Pop in einem sommerlichen musikalischen Cocktail.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E'
			},
			{
				time: '16:00:00',
				type: 'Kurzfilme & Produktionen',
				title: 'des rheinlandpfälzischen Mediennachwuchses',
				content:
					'\u003Cp\u003EDie Branchen Games, Design, Film und Medien in RLP treffen sich zum Sommerempfang der Kreativforen Rheinland-Pfalz in Mainz. Der Filmsommer Mainz bietet mit der Kulturei eine perfekte Kulisse zum Kennenlernen und Vernetzen. Im Talk mit Vertreter*innen der Branchen gibt es Einblicke in aktuelle Themen und Ausblicke in die Zukunft der Branchen. Die Veranstaltung ist kostenfrei und willkommen sind alle &ndash; alte Hasen genauso wie Newcomer*innen und Interessierte.&nbsp;\u003C\u002Fp\u003E\n\u003Cp\u003EAnmeldung: redaktion@descom.de&nbsp;\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003EDas \u003Cstrong\u003E\u003Cem\u003EDesignforum Rheinland-Pfalz\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E, \u003Cstrong\u003E\u003Cem\u003EGame Up! Software-\u002F Gamesforum \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Eund \u003Cstrong\u003E\u003Cem\u003EFilm- und Medienforum RLP \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Eladen alle Kreativschaffenden und Interessierten herzlich zum Sommerempfang der Kreativforen ein.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003E\u003Cstrong\u003EFilmauswahl: \u003C\u002Fstrong\u003EDer rheinland-pf&auml;lzische Nachwuchs im Bereich Medien ist au&szlig;ergew&ouml;hnlich, voller Tatendrang und stets super sympathisch \u003Cstrong\u003E\u003Cem\u003E&ndash; \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Ewie unsere Auswahl an Filmen und Medienproduktionen unter Beweis stellt.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E',
				pathText: 'asdfc',
				title_long: 'test'
			}
		],
		image: 'DSQ_Schuetz_Hueller_Matschenz_Copyright_GordonATimpen.jpg'
	},
	{
		id: 5,
		date: '2022-08-19',
		name: 'test',
		events: [
			{
				time: '16:00:00',
				type: 'party',
				title: 'Janeck & Arturo Iturriaga',
				content:
					'\u003Cp class="p2"\u003ESie pr&auml;gen seit vielen Jahren das Rhein-Main Gebiet mit Projekten wie \u003Cstrong\u003E\u003Cem\u003ELa Bolschevita\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E, \u003Cstrong\u003E\u003Cem\u003EOriental Tropical \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Eund \u003Cstrong\u003E\u003Cem\u003EMach Mal Langsam \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Eim Bereich globale Rhythmen und Entschleunigung.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E'
			},
			{
				time: '16:00:00',
				type: 'Kurzfilme & Produktionen',
				title: 'Nosferatu',
				fsk: 'FSK 12',
				content:
					'\u003Cp class="p2"\u003EMit \u003Cstrong\u003E\u003Cem\u003ENosferatu \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Eschuf Friedrich Wilhelm Murnau nicht nur einen der ersten Vorl&auml;ufer des Horrorfilmgenres und sp&auml;terer Dracula-Verfilmungen, sondern auch eines der vielschichtigsten Meisterwerke des filmischen Expressionismus. Neu vertont wird der Stummfilmklassiker von \u003Cstrong\u003E\u003Cem\u003EJaneck &amp; Arturo Iturriaga \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Eals Duo Hybrid DJ und LIVE Soundtrack.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003E\u003Cstrong\u003ERegie \u003C\u002Fstrong\u003EFriedrich Wilhelm Murnau \u003Cbr \u002F\u003E\u003Cstrong\u003EKooperationspartner \u002F Filmauswahl \u003Cem\u003EMurnau Stiftung \u003Cbr \u002F\u003E\u003C\u002Fem\u003EFSK \u003C\u002Fstrong\u003Eab 12 \u003Cbr \u002F\u003E\u003Cstrong\u003E94 Min.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E',
				pathText: 'nosferatu',
				title_long: 'Nosferatu – Eine Symphonie des Grauens'
			}
		],
		image: 'DSQ_Schuetz_Hueller_Matschenz_Copyright_GordonATimpen.jpg'
	},
	{
		id: 7,
		date: '2022-08-20',
		name: 'LUCAS',
		events: [
			{
				time: '16:00:00',
				type: 'party',
				title: 'nilsonsound',
				content:
					'\u003Cp class="p2"\u003E\u003Cstrong\u003E\u003Cem\u003Enilsonsound \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Eist ein Projekt, dass aus der Coronazeit hervorgegangen ist. Als mobiler Soundsystem-Anh&auml;nger auf 12 Volt Basis versucht es, die Soundsystem-Culture auf die Stra&szlig;e zu bringen. King Nilson legt alles von Roots Reggae &uuml;ber Dub bis zu basslastigem Stepper auf.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E'
			},
			{
				time: '16:00:00',
				type: 'film',
				title: 'The Reason I Jump',
				fsk: true,
				content:
					'\u003Cp class="p2"\u003ET&ouml;ne, Bilder, Assoziationen und Worte &ouml;ffnen ein Fenster zu einem &uuml;berw&auml;ltigenden, sensorischen Universum. Sie stammen aus der ganzen Welt und doch eint sie ein Schicksal: Junge Autist*innen, die nicht sprechen k&ouml;nnen. Ausgehend von Naoki Higashidas gleichnamigen Bestseller, der bereits im Alter von 13 Jahren sein Leben als Autist beschrieb, portr&auml;tiert \u003Cstrong\u003E\u003Cem\u003EThe Reason I Jump \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Ebemerkenswerte Menschen, die einen intimen Einblick in ihr Leben geben.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003E\u003Cstrong\u003ERegie \u003C\u002Fstrong\u003EJerry Rothwell \u003Cbr \u002F\u003E\u003Cstrong\u003EDrehbuch \u003C\u002Fstrong\u003ENaoki Higashida USA \u002F GBR 2020 Dokumentarfilm \u002F OmU. \u003Cbr \u002F\u003E\u003Cstrong\u003EKooperationspartner \u003Cem\u003ELUCAS &ndash; Internationales Festival f&uuml;r junge Filmfans \u003Cbr \u002F\u003E\u003C\u002Fem\u003EFSK \u003C\u002Fstrong\u003Eab 6 (\u003Cstrong\u003EEmpfohlen \u003C\u002Fstrong\u003Eab 14)\u003Cbr \u002F\u003E\u003Cstrong\u003E94 Min.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E',
				pathText: 'sdafsdsa'
			}
		],
		image: 'DSQ_Schuetz_Hueller_Matschenz_Copyright_GordonATimpen.jpg'
	},
	{
		id: 8,
		date: '2022-08-23',
		name: 'FILMZ Abend',
		events: [
			{
				time: '16:00:00',
				type: 'party',
				title: 'DJ Eddy',
				content:
					'\u003Cp class="p2"\u003EDer kolumbianische DJ, bekannt auch als \u003Cstrong\u003E\u003Cem\u003EEl Garcia \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Ebesch&auml;ftigt sich seit 2004 mit Musik und ist seit 2016 auch in Deutschlands Szene aktiv.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003EEntdecke Eddy Hern&aacute;ndez auf #SoundCloud\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E'
			},
			{
				time: '16:00:00',
				type: 'film',
				title: 'Flatliner',
				fsk: true,
				content:
					'\u003Cp class="p2"\u003EEin junger Mann besucht aus Einsamkeit WG-Castings und trifft auf die lebensfrohe junge Frau Lotte, die sein Leben auf den Kopf stellt.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003E(2020) \u003Cstrong\u003ERegie \u003C\u002Fstrong\u003EJulian Richberg \u003Cbr \u002F\u003E\u003Cstrong\u003EKooperation \u003Cem\u003EFILMZ &ndash; FESTIVAL DES DEUTSCHEN KINOS \u003Cbr \u002F\u003E\u003C\u002Fem\u003EFSK \u003C\u002Fstrong\u003Eab 16 \u003Cbr \u002F\u003E\u003Cstrong\u003E29 Min\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E',
				pathText: 'afs'
			}
		],
		image: 'DSQ_Schuetz_Hueller_Matschenz_Copyright_GordonATimpen.jpg'
	},
	{
		id: 9,
		date: '2022-08-24',
		name: 'Für Frauen von Frauen',
		events: [
			{
				time: '16:00:00',
				type: 'party',
				title: 'DJ Shadi',
				content:
					'\u003Cp class="p2"\u003EElektronische Musik eines echten Elektro- Fanatikers. In Aleppo zum Leben erweckt, in Mainz erfahrbar gemacht. Von Experimental, Ambient, Dub und IDM bis hin zu Dancefloor House und Deep House, Breakbeats, Electro, Old School &amp; Modern Trance und allem dazwischen.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E'
			},
			{
				time: '16:00:00',
				type: 'Drama \u002F Familienfilm',
				title: 'Ivie wie Ivie',
				fsk: true,
				content:
					'\u003Cp class="p2"\u003EZwei afrodeutsche Halbschwestern, die sich nicht kannten, n&auml;hern sich &uuml;ber den Tod ihres gemeinsamen Vaters an, suchen ihre Wurzeln und finden sich selbst.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003EF&uuml;r diesen originellen, mitrei&szlig;enden Film wurde Regisseurin Sarah Bla&szlig;kiewitz mit dem \u003Cstrong\u003E\u003Cem\u003ESI STAR 2022 \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Eausgezeichnet.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003E\u003Cstrong\u003ERegie \u003C\u002Fstrong\u003ESarah Bla&szlig;kiewitz \u003Cbr \u002F\u003E\u003Cstrong\u003EKooperationspartner \u003Cem\u003ESI STAR &ndash; Filmpreis f&uuml;r herausragende Regisseurinnen \u003Cbr \u002F\u003E\u003C\u002Fem\u003ERedaktion \u003C\u002Fstrong\u003EVarinka Link (\u003Cstrong\u003E\u003Cem\u003EZDF\u002F Das kleine Fernsehspiel\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E), Claudia Tronnier \u003Cbr \u002F\u003E\u003Cstrong\u003EFSK \u003C\u002Fstrong\u003Eab 12 \u003Cbr \u002F\u003E\u003Cstrong\u003E110 Min\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E',
				pathText: 'Drama • Familienfilm'
			}
		],
		image: 'DSQ_Schuetz_Hueller_Matschenz_Copyright_GordonATimpen.jpg'
	},
	{
		id: 10,
		date: '2022-08-25',
		name: 'Politischer Film',
		events: [
			{
				time: '16:00:00',
				type: 'party',
				title: 'Absinto Orkestra',
				content:
					'\u003Cp class="p2"\u003EEINEWELTMUSIK &ndash; eine Band zwischen Balkan-Beat und Gipsy-Swing, tanzbar, melancholisch, und vor allem handgemacht.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E'
			},
			{
				time: '16:00:00',
				type: 'drama',
				title: 'Toubab',
				fsk: true,
				content:
					'\u003Cp class="p2"\u003ENach seiner Entlassung aus der JVA wartet eine spontane Willkommensparty auf Babtou (Farba Dieng), doch die l&auml;uft derma&szlig;en schief, dass er gleich wieder verhaftet wird und in sein &bdquo;Heimatland&ldquo; Senegal ausgewiesen werden soll. Um das zu verhindern, ist sein Kumpel Dennis (Julius Nitschkoff) mit ihm zu allem bereit.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp class="p3"\u003EDeutschland \u002F Senegal 2021\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003E\u003Cstrong\u003EBuch \u003C\u002Fstrong\u003EFlorian Dietrich, Arne Dechow \u003Cbr \u002F\u003E\u003Cstrong\u003ERegie \u003C\u002Fstrong\u003EFlorian Dietrich \u003Cbr \u002F\u003E\u003Cstrong\u003ERedaktion \u003C\u002Fstrong\u003EJ&ouml;rg Schneider \u003Cbr \u002F\u003E\u003Cstrong\u003EUnterst&uuml;tzer \u003C\u002Fstrong\u003EZDF\u002FDas kleine Fernsehspiel\u003Cstrong\u003E\u003Cem\u003E \u003Cbr \u002F\u003E\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E\u003Cstrong\u003EKooperationspartner\u003C\u002Fstrong\u003E Rosa Luxemburg Stiftung\u003Cstrong\u003E\u003Cem\u003E \u003Cbr \u002F\u003E\u003C\u002Fem\u003EFSK \u003C\u002Fstrong\u003Eab 12 \u003Cbr \u002F\u003E\u003Cstrong\u003E92 Min\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E',
				pathText: 'sdfg'
			}
		],
		image: 'DSQ_Schuetz_Hueller_Matschenz_Copyright_GordonATimpen.jpg'
	},
	{
		id: 11,
		date: '2022-08-26',
		name: 'LGBTQIA+ - Community Filmabend',
		events: [
			{
				time: '16:00:00',
				type: 'party',
				title: 'DJane Jasmin & DJ Alex',
				content:
					'\u003Cp class="p2"\u003E1\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003EHerz &amp; 1 Seele: F&uuml;r das Warm-up vor dem Film sorgt ab 18.00 Uhr das DJ-Team \u003Cstrong\u003E\u003Cem\u003EJasmin &amp; Alex \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Eaus MZ\u002FWI. Die beiden legen schon seit Jahren mit viel Spa&szlig; &amp; Erfolg zusammen auf (\u003Cstrong\u003E\u003Cem\u003EKUZ\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E, \u003Cstrong\u003E\u003Cem\u003EQ-Kaff\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E, \u003Cstrong\u003E\u003Cem\u003EOrange Peel\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E) und erg&auml;nzen sich mit ihren coolen Dance Remixes einfach gro&szlig;artig.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E'
			},
			{
				time: '16:00:00',
				type: 'awf',
				title: 'Futur Drei',
				fsk: true,
				content:
					'\u003Cp class="p2"\u003EEbenso erfrischender wie wegweisender Gegenentwurf zu den konventionellen Erz&auml;hlungen (post)migrantischer Geschichten im deutschen Kino: Das autobiographisch gepr&auml;gte Regiedeb&uuml;t von Faraz Shariat portr&auml;tiert Parvis, den schwulen Sohn iranischer Eltern, der in einer Unterkunft f&uuml;r Gefl&uuml;chtete Sozialstunden ableisten muss und dort das iranische Geschwisterpaar Banafshe und Amon kennenlernt. Die \u003Cstrong\u003E\u003Cem\u003EM&eacute;nage-&agrave;-trois \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Egewann 2020 den \u003Cstrong\u003E\u003Cem\u003ETeddy-Award \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Ein der Kategorie \u003Cstrong\u003E\u003Cem\u003EBester Spielfilm\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003E\u003Cstrong\u003ERegie \u003C\u002Fstrong\u003EFaraz Shariat \u003Cbr \u002F\u003E\u003Cstrong\u003EUnterst&uuml;tzer \u003C\u002Fstrong\u003EBar jeder Sicht &amp; Schwuguntia e.V.\u003Cstrong\u003E\u003Cem\u003E \u003Cbr \u002F\u003E\u003C\u002Fem\u003EFSK \u003C\u002Fstrong\u003Eab 16 \u003Cbr \u002F\u003E\u003Cstrong\u003E92 Min\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E',
				pathText: 'adf'
			}
		],
		image: 'DSQ_Schuetz_Hueller_Matschenz_Copyright_GordonATimpen.jpg'
	},
	{
		date: '2022-08-27',
		name: 'Abschlussabend Disco Night',
		events: [
			{
				time: '16:00:00',
				type: 'party',
				title: 'DJ Lichi',
				content:
					'\u003Cp class="p2"\u003E\u003Cstrong\u003E\u003Cem\u003EDJ Lichi \u003C\u002Fem\u003E\u003C\u002Fstrong\u003E(Resident Elektrobecher und Lichi-tronic) &ndash; erhellender House, herrlicher Elektro und angemessener Techno.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E'
			},
			{
				time: '16:00:00',
				type: 'concert',
				title: 'Leif in Concert',
				fsk: 0,
				content:
					'\u003Cp class="p2"\u003ELeif soll ein Konzert spielen &ndash; in einer Jazz- Blues-Bar irgendwo in Deutschland. Auf der B&uuml;hne hei&szlig;t er \u003Cstrong\u003E\u003Cem\u003EPoorboy \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Eund er kommt aus Kopenhagen. Dort hat die Barfrau Lene sein Konzert gesehen. Fasziniert von Leifs Musik hat sie ihn in ihre Bar nach Deutschland ein-geladen.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003E\u003Cstrong\u003E\u003Cem\u003ELeif in Concert \u003C\u002Fem\u003E\u003C\u002Fstrong\u003Eist eine Liebeserkl&auml;rung an die Musik und an diese eine Kneipe, die jeder kennt, das verl&auml;ngerte Wohnzimmer, wo du dich zu Hause f&uuml;hlst, wo du sein kannst, wie du bist, und wo es keine Klassenunterschiede gibt.\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003E\u003Cstrong\u003ERegie \u003C\u002Fstrong\u003EChristian Klandt, Deutschland 2019 \u003Cbr \u002F\u003E\u003Cstrong\u003EFSK \u003C\u002Fstrong\u003Eab 0 \u003Cbr \u002F\u003E\u003Cstrong\u003E114 Min\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E',
				pathText: 'concert'
			},
			{
				time: '22:00:00',
				type: 'party',
				title: 'mit DJ Eddy, DJ Matt K B2B Cesare und DJ Lichi',
				content:
					'\u003Cp class="p2"\u003EAbschlussparty plus Kontrastfilm Sommerfest &ndash; mal ganz anders. Wir freuen uns auf musikalische Beitr&auml;ge zum Tanzen von und mit:&nbsp;\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003EDJ Eddy Hern&aacute;ndez\u003Cbr \u002F\u003EDJ&nbsp;\u003Cspan class=""\u003EMatt K B2B Cesare\u003C\u002Fspan\u003E\u003Cspan class=""\u003E&nbsp;\u003Cbr \u002F\u003E\u003C\u002Fspan\u003EDJ Lichi\u003C\u002Fp\u003E\n\u003Cp class="p2"\u003ETeilnahme nur nach vorheriger Anmeldung und Best&auml;tigung unter: sommer@kontrastfilm.de\u003Cspan class="Apple-converted-space"\u003E&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fp\u003E',
				title_long: 'wfa'
			}
		],
		image: 'DSQ_Schuetz_Hueller_Matschenz_Copyright_GordonATimpen.jpg'
	}
]
const about = {
	text: '\u003Cp class="p2"\u003EHerzlich willkommen zum 9. Filmsommer in Mainz. Wir werden bunter, lauter, vielf&auml;ltiger und legen in diesem Jahr einen besonderen Fokus auf die Nachhaltigkeit.\u003C\u002Fp\u003E\n\u003Cp class="p3"\u003EWir freuen uns, vom 16. &ndash; 27. August an unserem wundersch&ouml;nen Spielort \u003Cstrong\u003E\u003Cem\u003EKulturei\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E, \u003Cstrong\u003E\u003Cem\u003EZitadelle Mainz\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E, wieder gelebte Filmkultur zu pr&auml;sentieren. Livemusik, Kunst, Film und ganz viel Lebensfreude &hellip; Sommerwetter trifft Filmkultur &ndash; ein Genuss!\u003C\u002Fp\u003E\n\u003Cp class="p3"\u003ENach 2 Jahren Pandemie starten wir wieder voll durch. Der Eintritt zu unseren Veranstaltungen ist wie immer frei, f&uuml;r Speis und Trank ist bestens gesorgt. Seid herzlich willkommen bei unserer tollen Open-Air-Reihe!\u003C\u002Fp\u003E\n\u003Cp class="p3"\u003EBeste Gr&uuml;&szlig;e und &bdquo;Film ab!&ldquo;\u003C\u002Fp\u003E\n\u003Cp class="p3"\u003EEuer Filmsommer-Team\u003C\u002Fp\u003E'
}

export { about, dates }
