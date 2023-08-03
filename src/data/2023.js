const dates = [
	{
		date: '2023-08-18',
		name: 'Eröffnungs-/ Geburtstagsabend',
		events: [
			{
				time: '18:00:00',
				type: 'Live-Musik',
				title: 'Youloosie',
				fskHidden: false,
				content:
					'Die Band Youloosie begeistert mit ihrem einzigartigen Mix aus energiegeladenem Rock und eingängigen Melodien. Ihre mitreißenden Live-Auftritte und charismatische Bühnenpräsenz machen sie zu einem unvergesslichen Erlebnis auf dem diesjährigen Festival. Eine mitreißende Show voller Energie, Leidenschaft und Rock’n’Roll.'
			},
			{
				time: '20:00:00',
				type: 'Eröffnung',
				title: 'Offizielle Eröffnung Schirmherr Markus Müller',
				fskHidden: false,
				content: 'Der Schirmherr Markus Müller, Intendant des Staatstheaters Mainz eröffnet offiziell den Filmsommer Mainz 2023.'
			},
			{
				time: '20:30:00',
				type: 'Spielfim',
				title: 'Alki Alki',
				fsk: '12',
				content: `Tobias und Flasche – die unzertrennlichen Partyprofis! Doch Tobias‘ rebellische Jugend und seine ständigen Saufgelage geraten ins Wanken,als er sich dem Erwachsenenleben stellen muss. Seine Familie sucht nach Stabilität, während Tobias um Veränderungen kämpft. Eine epische Suche nach einer erwachseneren Existenz beginnt. Weniger Tequila, mehr Verantwortung.<br><br>
				<b>Buch</b> Heiko Pinkowski, Axel Ranisch, Peter Trabner<br>
				<b>Regie</b> Axel Ranisch <br>
				<b>Redaktion</b> ZDF/Das kleine Fernsehspiel <br>
				<b>Produktion</b> Sehr gute Filme GmbH <br>
				<b>Erscheinungsjahr</b> Deutschland 2015 <br>
				<b>FSK</b> ab 12, Pädagogische Empfehlung ab 16 <br>
				<b>97 Min</b><br><br>
				<b>Mit Unterstützung: ZDF/ Das kleine Fernsehspiel</b>`,
				pathText: 'Spielfilm'
			}
		],
		image: 'ALKIALKI_2_FLASCHE_peter_trabner_ANIKA_christina_grosse_TOBIAS_heiko_pinkowski_BETT.png',
		imageText: 'Alki Alki'
	},
	{
		id: 2,
		date: '2023-08-19',
		name: 'Stummfilmabend und Verleihung Albert Treber Preis',
		events: [
			{
				time: '18:00:00',
				type: 'Musik',
				title: 'DJ Matt K',
				content:
					'Matt K, mit bürgerlichem Namen Matthias Kornecki, ist ein erfahrener Musikproduzent und DJ. Durch seine zahlreichen Auftritte ist er ist er schon lange ein fester Bestandteil der Mainzer Musikszene. Neben seiner Tätigkeit als A&R bei dem Label You Are Strange ist er seit 2011 sein eigener Chef bei KorneckiDesign. Mit hohen Anspruch an Qualität, Sinn für Details und glühender Leidenschaft kreiert er für euch unvergessliche Musikmomente.'
			},
			{
				time: '20:30:00',
				type: 'Stummfilm',
				title: 'Das Blumenwunder',
				fsk: true,
				content:
					`<i>Das Blumenwunder</i> – Ein „Erstes Mal“, ein Zeitraffer-Erlebnis, durch das das Wunder der Pflanzenwelt, das Wachstum, die fließenden Bewegungen in noch nie dagewesener Weise filmisch erlebt werden konnten. Ursprünglich als Werbefilm für ein Düngemittel geplant, entwickelte sich das Material, montiert mit Solisten-Tanzszenen der Berliner Staatsoper, zu einem einzigartigen Kinoerlebnis und ist mittlerweile ein Kultfilm. Der Filmsommer Mainz nimmt euch mit auf diese einzigartige Reise, auf der der renommierte DJ Matt K diesen Stummfilm von Max Reichmann aus dem Jahr 1925 neu vertont.<br><br>
						<b>Regie & Drehbuch</b> Max Reichmann <br>
						<b>Erscheinungsjahr</b> Deutschland 1926 <br>
						<b>FSK 0</b><br><br>
						<b>Kooperation: Medien.rlp</b>`,
				pathText: 'Stummfilm'
			},
			{
				type: 'Preisverleihung',
				title: 'Albert Treber Preis',
				content:
					`<p>Wir sind stolz, den diesjährigen Albert Treber Preis auf dem Filmsommer Festival – Mainz verleihen zu dürfen!
						</p><p>
Zum zehnjährigen Jubiläum ehren wir erstmals eine Person für ihren herausragenden Einsatz und ihr Engagement für das Filmschaffen.
</p><p>
Der Preis würdigt die besondere Leidenschaft und den herausragenden Beitrag des/der Preistragenden zur Filmkunst.
</p><p>
Mit dieser Auszeichnung ehren wir das Erbe von Albert Treber, einem engagierten Filmförderer und Unterstützer von Nachwuchsfilmemachern. Sein Einsatz legte den Grundstein für die Filmförderung in Rheinland-Pfalz.</p>`
			},
		],
		image: 'DasBlumenwunderl_2.jpg'
	},
	{
		id: 5,
		date: '2023-08-21',
		name: 'Kurzfilm und mittellanger Film des FILMZ-Festivals',
		events: [
			{
				time: '18:00:00',
				type: 'Musik',
				title: 'DJ Shadi',
				content:
					'Elektronische Musik eines echten Elektro-Fanatikers. In Aleppo zum Leben erweckt, in Mainz erfahrbar gemacht. Von Experimental, Ambient, Dub und IDM bis hin zu Dancefloor House und Deep House, Breakbeats, Electro, Old School & Modern Trance – und alles dazwischen.'
			},
			{
				time: '20:30:00',
				type: 'Doku & Best-of-Filme',
				title: 'Das zieh ich an wenn ich tot bin & Best-of-Filme',
				content:
					`<h3>Das zieh ich an wenn ich tot bin</h3>
					Drei über-80-Jährige erzählen auf einfühlsame und persönliche Weise von ihren Gedanken über das Unausweichliche, das, was schon war, das Leben, das sie gelebt haben und über die, die schon vorausgegangen sind. <br><br>
					<b>Regie</b> Marvin Menné <br>
					<b>Erscheinungsjahr</b> 2022 <br>
					<b>FSK 12</b> <br>
					<b>20 Min.</b>
					<h3>Best-of-Filme</h3>
					aus dem FILMZ-Festivaljahr 2022. Neben dem Gewinner des lokalen Kurzfilmwettbewerbs zeigen wir ebenfalls Best-of-Filme aus dem mittellangen Filmwettbewerb und den anderen Kurzfilm-Wettbewerben.<br><br>
					<b>Nakam (Rache)</b> • 33 Min.<br>
					Gewinner des mittellangen Wettbewerbs 2022<br>
					<b>Clown Wars</b> • 10 Min.<br>
					Gewinner des andersARTig Wettbewerbs 2022<br>
					<b>Danzamatta</b> • 5 Min.<br>
					Film der im andersARTig Wettbewerb lief<br><br>
					<b>Kooperation: FILMZ-Festival des deutschen Kinos</b>`,
				pathText: 'Doku • Best-of-Filme',
				title_long: ''
			}
		],
		image: 'AndersARTig22_Danzamatta_VanjaTognola_praeferenz.jpg'
	},
	{
		id: 5,
		date: '2023-08-22',
		name: 'Wild & Wunderbar – Pride & Queerer Filmabend',
		events: [
			{
				time: '18:00:00',
				type: 'Musik',
				title: 'DJane Genie',
				content:
					'Ihr Sound ist so bunt wie die Farben der LGBTIQ+Flaggen. Sie gibt queeren Musiker*innen und Soundkreativen einen Raum und spielt eingängige Fem-Pop-Hymnen neben einer gehörigen Portion Disco-Grooves, Hip-Hop, House und Electronica.'
			},
			{
				time: '20:30:00',
				type: 'Spielfilm',
				title: 'Die Mitte der Welt',
				fsk: 'FSK 12',
				content:
					`Die Mitte der Welt – Ein turbulenter Mix aus Familienleben und schwärmerischen Gedanken. Regisseur Jakob M. Erwa jongliert mit Teenagererfahrungen und Familiengeheimnissen. Schnelle Bildabfolgen katapultieren uns in die Gefühlswelt des Protagonisten Phil, thematisieren seine Emotionen und seine Homosexualität. Louis Hofmann brilliert als verträumter Protagonist. Ein mitreißendes Coming-of-Age-Drama zum Lachen und Mitfühlen.<br><br>
					<b>Buch & Regie</b> Jakob M. Erwa <br>
					<b>Produktion</b> Neue Schönhauser Filmproduktion GmbH <br>
					<b>Erscheinungsjahr</b> Deutschland/Österreich 2016 <br>
					<b>FSK</b> ab 12<br>
					<b>115 Min</b> <br><br>
					<b>Kooperation: Bar&nbsp;jeder&nbsp;Sicht, Schwuguntia&nbsp;e.V., QueerNet-Rheinland-Pfalz&nbsp;e.V.</b>`,
				pathText: 'Spielfilm',
				// title_long: 'Die Mitte der Welt'
			}
		],
		image: '300_DieMittederWelt_main_.jpg'
	},
	{
		id: 7,
		date: '2023-08-23',
		name: 'SI Star – Filmabend',
		events: [
			{
				time: '18:00:00',
				type: 'Musik',
				title: 'DJane Løra Papi',
				content:
					'sorgt für einen Klangteppich aus bekannten und unbekannten Sounds. Eine treibende Mischung aus Indie, Pop und elektronischen Beats sorgt für die richtige Stimmung.'
			},
			{
				time: '20:30:00',
				type: 'Spielfilm',
				title: 'The Ordinaries',
				fsk: 'FSK 12',
				content:
					`Das Mainzer Team des SI STAR Filmpreis, der seit 2015 an herausragende Regisseurinnen verliehen wird, präsentiert die junge Regisseurin Sophie Linnenbaum mit ihrem preisgekrönten Spielfilmdebüt The Ordinaries. Eine originell erzählte Geschichte über eine junge Heldin, die sich in einer besonderen Welt durchsetzt und dabei gesellschaftlicher Ausgrenzung und großem Anpassungsdruck trotzt. Die Produzentin Britta Strampe wird vor Ort sein, ebenso die SI STAR Jury: ein Abend mit starken Filmfrauen in Mainz!<br><br>
					<b>Buch</b> Sophie Linnenbaum, Michael Fetter Nathansky <br>
					<b>Regie</b> Sophie Linnenbaum <br>
					<b>Produktion</b> Bandenfilm <br>
					<b>Koproduktion</b> ZDF/Das kleine Fernsehspiel, Filmuniversität Babelsberg KONRADWOLF <br>
					<b>Erscheinungsjahr</b> Deutschland 2022 <br>
					<b>FSK</b> ab 12 <br>
					<b>115 Min</b><br><br>
					<b>Kooperation: SI Club Mainz</b>`,
				pathText: 'Spielfilm'
			}
		],
		image: 'THE_ORDINARIES_02_FilmStill_by_Valentin Selmke_copyright_Bandenfilm_ZDF scale.png'
	},
	{
		id: 8,
		date: '2023-08-24',
		name: 'Politischer Filmabend mit der Rosa Luxemburg Stiftung',
		events: [
			{
				time: '18:00:00',
				type: 'Live-Musik',
				title: 'Absinto Orkestra',
				content:
					'EINEWELTMUSIK – eine Band zwischen Balkan-Beat und Gipsy-Swing, tanzbar, melancholisch und vor allem handgemacht.'
			},
			{
				time: '20:30:00',
				type: 'Thriller',
				title: 'Holy Spider',
				fsk: 'FSK 16',
				content:
					`Ein vermeintlich gewöhnlicher Familienvater entpuppt sich als Serienmörder im Namen Gottes. Journalistin Rahimi aus Teheran will dem „Spinnenmörder“ auf die Spur kommen. Doch Behörden und Bewohner feiern ihn. Basierend auf einem wahren Fall feierte der Film auf den 75. Filmfestspielen in Cannes Premiere und setzt ein Zeichen gegen Femizide und für mutigen Journalismus inmitten der iranischen Proteste seit September 2022.<br><br>
					<b>Buch & Regie</b> Ali Abbasi <br>
					<b>Erscheinungsjahr</b> Dänemark, Deutschland, Schweden, Frankreich 2022 <br>
					<b>FSK</b> 16<br>
					<b>119 Min</b><br><br>
					<b>Kooperation: Rosa Luxemburg Stiftung RLP</b>`,
				pathText: 'Thriller • Krimi • Drama'
			}
		],
		image: '300_HolySpider1.jpg'
	},
	{
		id: 9,
		date: '2023-08-25',
		name: 'Generation Now – Jugendfilmabend',
		events: [
			{
				time: '18:00:00',
				type: 'Musik',
				title: 'DJ Janeck',
				content:
					'Er prägt seit vielen Jahren das Rhein-Main Gebiet mit Projekten wie La Bolschevita, Oriental Tropical und Mach-Mal-Langsam im Bereich globale Rhythmen und Entschleunigung.'
			},
			{
				time: '20:30:00',
				type: 'Spielfilm',
				title: 'SONNE',
				fsk: 'FSK 12',
				content:
					`Ein virales Tik-Tok-Video mit Hijab-tragenden Freundinnen führt zu plötzlichem Ruhm und fragwürdigen Auftritten als A-cappella-Trio. Für Yesmin, die gläubige Muslima, wird es kompliziert. Regisseurin Kurdwin Ayub präsentiert in SONNE ein wildes Gen-Z-Porträt. Ein kraftvoller Film, der den besten Erstlingsfilm-Preis auf der Berlinale gewann und Religion, Freundschaft und Identitätsspiele eindringlich thematisiert.<br><br>
					<b>Buch und Regie</b> Kurdwin Ayub <br>
					<b>Produktion</b> Ulrich Seidl Filmproduktion GmbH <br>
					<b>Erscheinungsjahr</b> Österreich 2022 <br>
					<b>FSK</b> 12 <br>
					<b>88 Min</b><br><br>
					<b>Kooperation: LUCAS – Internationales Festival für junge Filmfans</b>`,
				pathText: 'Spielfilm'
			}
		],
		image: 'sonne.jpg'
	},
	{
		id: 10,
		date: '2023-08-26',
		name: 'Klangfilmnacht – Musikvideos & Abschlussparty',
		events: [
			{
				time: '18:00:00',
				type: 'Musik',
				title: 'DJ Psycho-Jones',
				content:
					'Seit 1998 infiltriert Psycho-Jones das vorher eher eintönige Mainzer Nachtleben – von Anfang an illustriert  & gefärbt von seiner musikalisch und visuell einzigartigen Handschrift. Er bewegt sich zwischen 60s, Indie, Elektro, Pop & Trash, feinst abgestimmt mit Deko, Visuals, Livepercussion, Gameshows, Gast DJs, Liveacts uvm. • <a href="https://www.psycho-jones.com">psycho-jones.com</a>'
			},
			{
				time: '20:30:00',
				type: 'Musikvideos',
				title: 'Musikvideos',
				content:
					`Der Ventil Verlag präsentiert eine Reise in die Welt der Musikvideos. Taucht ein in eine Welt voller spannender, klingender Bildwelten. Unser Musikvideo-Abend nimmt euch mit auf eine Reise zu fesselnden Klängen und visuellen Meisterwerken. Einführend wird der Filmwissenschaftler und langjährige Ventil-Autor Dr. Andreas Rauscher einen kurzen Vortrag zur Geschichte des Musikvideos halten; Bücher des Ventil Verlags gibt es vor Ort zu erwerben.<br><br>
					Kooperation: Ventil Verlag`,
			},
			{
				time: '22:00:00',
				type: 'Jubiläumsparty',
				title: 'mit DJ Psycho-Jones',
				content:
					'Heute zelebriert Mr. PJ zusammen mit dem Team vom Filmsommer Festival – Mainz das Jubiläum im Gewölbe!'
			},
		],
		// image: 'DSQ_Schuetz_Hueller_Matschenz_Copyright_GordonATimpen.jpg'
	}
]
const about = {
	text: `<p>Liebe Freund*innen der Filmkultur und des Umsonst-und- draußen-Kinos, liebe treue Besucher*innen des Filmsommer Festival–Mainz, wir möchten mit euch feiern!</p>
<p>Ganze 10 Jahre ist es her, da startete der Filmsom­mer Mainz mit vier Filmen an vier Tagen und vier Locations. Mittlerweile umfasst er nicht nur 8 Tage mit 10 Filmen und einer Party, sondern er hat auch ein festes Zuhause: Die Kulturei an der Mainzer Zitadelle. Freut euch auch dieses Jahr auf wunderbare Sommerabende voller Filmkultur an einem der idyllischsten Spielorte der Stadt! Vom 18.08.2023 bis zum 26.08.2023 gibt es unser Jubiläumsprogramm mit unvergesslichen Filmen, toller Livemusik und verschiedenen Kunstaktionen. Der Eintritt ist frei, für Speisen und Getränke ist wie immer gesorgt. Also kommt vorbei, wir freuen uns auf euch!</p>
Beste Grüße und „Film ab!“<br>
Euer Filmsommer-Team<br>
<br>
<p>
<b>Veranstaltungsort:</b><br>
<address>
Zitadelle Mainz<br>
Kulturei<br>
Zitadellenweg, 55131 Mainz<br>
</address>
</p>`
}

export { about, dates }
