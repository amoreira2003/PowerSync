

function initMap() {

    var postoList = [
        {
            "name": "POSTO SHELL - AUTO POSTO VIA SUL BRASIL LTDA",
            "lat": "-25.4358374",
            "lng": "-49.260794699999998",
            "address": "AV AFFONSO CAMARGO.10"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO DO TRABALHO FREGUESIA LT",
            "lat": "-22.9416385",
            "lng": "-43.345045599999999",
            "address": "ESTRADA DO GABINAL. 905"
        },
        {
            "name": "POSTO SHELL - POSTO PORTAL DE AMERICANA LTDA",
            "lat": "-22.72931341",
            "lng": "-47.295765289999999",
            "address": "RUA MAURO SCHIAVONI. 27"
        },
        {
            "name": "POSTO SHELL - PETROMAY DERIVADOS DE PETROLEO LTDA",
            "lat": "-3.0769173300000001",
            "lng": "-60.024430099999996",
            "address": "AV. DJALMA BATISTA.4360"
        },
        {
            "name": "POSTO SHELL - POSTO 3000 LTDA",
            "lat": "-3.1035393899999999",
            "lng": "-60.024466859999997",
            "address": "AV DJALMA BATISTA. 935 F C NERY1255"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MARINI LTDA",
            "lat": "-23.500537999999999",
            "lng": "-46.686042999999998",
            "address": "AV INAJAR DE SOUZA. 550"
        },
        {
            "name": "POSTO SHELL - PRIME AUTO POSTO LTDA",
            "lat": "-23.632821",
            "lng": "-46.638240000000003",
            "address": "AV DIEDERICHSEN. 1144"
        },
        {
            "name": "POSTO SHELL - POSTO MASTER BRASIL DE FRANCA LTDA",
            "lat": "-20.526605",
            "lng": "-47.379553999999999",
            "address": "AVENIDA BRASIL. 1298"
        },
        {
            "name": "POSTO SHELL - CPC SERVICOS AUTOMOTIVOS LTDA",
            "lat": "-23.518110400000001",
            "lng": "-46.852905200000002",
            "address": "R DEP EMILIO CARLOS. 1780"
        },
        {
            "name": "POSTO SHELL - GP PETROLEO COMERCIO DE COMB LTDA",
            "lat": "-1.443176",
            "lng": "-48.483034000000004",
            "address": "AV. GENERALISSIMO DEODORO. 306"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO OURO DE BARUERI LTDA",
            "lat": "-23.493371",
            "lng": "-46.880226",
            "address": "R SARGENTO JOSE DE SIQUEIRA. 646"
        },
        {
            "name": "POSTO SHELL - UIRAPURU COMERCIO DE COMBUST LTDA",
            "lat": "-3.7974302999999998",
            "lng": "-38.518462200000002",
            "address": "AV ALBERTO CRAVEIRO. 1973"
        },
        {
            "name": "POSTO SHELL - TIGER AUTO POSTO LTDA",
            "lat": "-22.703254000000001",
            "lng": "-47.647410000000001",
            "address": "AV LIMEIRA. 950"
        },
        {
            "name": "POSTO SHELL - TYRESOLES DE SERGIPR IND COM SERV L",
            "lat": "-10.929119999999999",
            "lng": "-37.065705000000001",
            "address": "AV GONCALO ROLLEMBERG LEITE. 1721"
        },
        {
            "name": "POSTO SHELL - GIGANTE DA IMIGRANTES AUTO P LTDA",
            "lat": "-23.614729000000001",
            "lng": "-46.627409999999998",
            "address": "AV PROF.ABRAHAO DE MORAIS. 1180"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO FORMULA FOZ LTDA",
            "lat": "-25.546841629999999",
            "lng": "-54.578800000000001",
            "address": "AV JORGE SCHIMMELPFENG. 891"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.280217",
            "lng": "-48.846513000000002",
            "address": "R MARCOS WELMUTH. 2636"
        },
        {
            "name": "POSTO SHELL - GB POSTO E SERVICOS LTDA",
            "lat": "-20.16102811",
            "lng": "-40.257184000000002",
            "address": "ROD NORTE SUL. 10000"
        },
        {
            "name": "POSTO SHELL - RODEIO COM DE COMBUSTIVEIS LTDA",
            "lat": "-20.2107192",
            "lng": "-40.262742299999999",
            "address": "AV DESEMB MARIO DA SILVA NUNES. 78"
        },
        {
            "name": "POSTO SHELL - POSTO JK 2000 LTDA",
            "lat": "-22.500607500000001",
            "lng": "-44.098912299999903",
            "address": "AV ALM ADALBERTO B NUNES. 1000"
        },
        {
            "name": "POSTO SHELL - COMVEL VASSOURAS COM SERV VEIC LTDA",
            "lat": "-22.406300000000002",
            "lng": "-43.660899999999998",
            "address": "R. OTAVIO GOMES. 11 ESQ R.AC E.N.BA"
        },
        {
            "name": "POSTO SHELL - VAZ E CRUZ LTDA",
            "lat": "-16.8214139",
            "lng": "-49.2413259",
            "address": "ROD BR 153. SN KM 516"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO BOULEVARD LTDA",
            "lat": "-22.90194",
            "lng": "-47.080500000000001",
            "address": "AV. LIX DA CUNHA. NUM.200"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PETRO NACOES BAURU LTDA",
            "lat": "-22.312149999999999",
            "lng": "-49.069803",
            "address": "AV NACOES UNIDAS. 17 50"
        },
        {
            "name": "POSTO SHELL - AUTO P CENTENARIO COM COMB SER LTDA",
            "lat": "-13.000299999999999",
            "lng": "-38.517000000000003",
            "address": "AV CENTENARIO. 328"
        },
        {
            "name": "POSTO SHELL - HIPER POSTO CAMINHO DAS ARVORES LTD",
            "lat": "-12.981923180000001",
            "lng": "-38.455412129999999",
            "address": "AVENIDA TANCREDO NEVES. 1506"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ESTONIA 2 LTDA",
            "lat": "-23.651762600000001",
            "lng": "-46.511414000000002",
            "address": "AV DOS ESTADOS. 6943"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CLASSE A LTDA",
            "lat": "-16.702620320000001",
            "lng": "-49.273863050000003",
            "address": "AV T9. NR 1194 QD 83 LT 14/16"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CENTRAL DE LONDRINA",
            "lat": "-23.314246300000001",
            "lng": "-51.170272990000001",
            "address": "AV JUSCELINO KUBITSCHECK. 1395"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PEDRAZZOLI LTDA",
            "lat": "-25.468063300000001",
            "lng": "-49.264050099999999",
            "address": "RUA MARIA MOSCARDI FANINI. 268"
        },
        {
            "name": "POSTO SHELL - COM DERIV PET RUI BARB INDAIATUBA",
            "lat": "-23.0890579",
            "lng": "-47.213608600000001",
            "address": "R CERQUEIRA CESAR. 1156"
        },
        {
            "name": "POSTO SHELL - COMERCIO VAR COMBUST MRJP LTDA",
            "lat": "-23.655414960000002",
            "lng": "-46.724472800000001",
            "address": "AV GUIDO CALOI. 2228"
        },
        {
            "name": "POSTO SHELL - POSTO PANAMBY LTDA",
            "lat": "-23.650096470000001",
            "lng": "-46.726464729999996",
            "address": "AV GUIDO CALOI. 661"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO TIQUATIRA LTDA",
            "lat": "-23.513563179999998",
            "lng": "-46.5291833",
            "address": "RUA DOUTOR VIRGILIO MACHADO. 271"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ESTADAO DE STO ANDRE LTD",
            "lat": "-23.652124100000002",
            "lng": "-46.513715300000001",
            "address": "AV DOS ESTADOS. 6700"
        },
        {
            "name": "POSTO SHELL - POSTO DAS AMERICAS LTDA",
            "lat": "-24.9788487",
            "lng": "-53.449709400000003",
            "address": "RDV BR 277 KM583.85 SAIDA P CURITIB"
        },
        {
            "name": "POSTO SHELL - ECO POSTO BANDEIRANTES LTDA",
            "lat": "-23.615527029999999",
            "lng": "-46.666474340000001",
            "address": "AV DOS BANDEIRANTES. 3459"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO SAO CONRADO LTDA",
            "lat": "-23.479292000000001",
            "lng": "-46.727221999999998",
            "address": "AV RAIMUNDO P DE MAGALHAES. 6277"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO INAJA LTDA",
            "lat": "-22.863788",
            "lng": "-43.438706000000003",
            "address": "AVENIDA BRASIL. 30055"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO COMBOIO LTDA",
            "lat": "-29.153095",
            "lng": "-51.205050800000002",
            "address": "RUA JACOB LUCHESI. 2111 SL 1"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO RETIRO LTDA",
            "lat": "-23.1787855",
            "lng": "-46.912719209999999",
            "address": "RUA DO RETIRO. 2905"
        },
        {
            "name": "POSTO SHELL - POSTO PARQUE TAQUARAL LTDA",
            "lat": "-22.86561",
            "lng": "-47.054549999999999",
            "address": "R ALMEIDA GARRET.1845 TERREO"
        },
        {
            "name": "POSTO SHELL - TAO SET AUTO POSTO LTDA",
            "lat": "-23.649782559999998",
            "lng": "-46.547737079999997",
            "address": "AV PRESTES MAIA. 1400"
        },
        {
            "name": "POSTO SHELL - LIMA COM DE COMB LTDA",
            "lat": "-2.6268542899999998",
            "lng": "-44.263981690000001",
            "address": "AV ENG EMILIANO MACIEIRA. 215 KM 06"
        },
        {
            "name": "POSTO SHELL - PIRAPANEMA SERV AUTOMOTIVOS LTDA",
            "lat": "-23.553270000000001",
            "lng": "-46.757139000000002",
            "address": "AV CORIFEU DE AZEVEDO MARQUES. 5793"
        },
        {
            "name": "POSTO SHELL - POSTO LIMEIRANEA LTDA",
            "lat": "-22.562815610000001",
            "lng": "-47.422107480000001",
            "address": "R JOAQUIM DANIEL DOS SANTOS.625"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO OSASCO COUNTRY LTDA",
            "lat": "-23.553218940000001",
            "lng": "-46.79242189",
            "address": "RUA XV DE NOVEMBRO. 700"
        },
        {
            "name": "POSTO SHELL - GD COMERCIO DE COMB DERIVADOS LTDA",
            "lat": "-7.1142317000000004",
            "lng": "-34.824486100000001",
            "address": "AV NEGO. 196 101"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERV 2002 LTDA",
            "lat": "-23.626239999999999",
            "lng": "-46.736559999999997",
            "address": "AVENIDA DR GUILHERME D VILLA. 2425"
        },
        {
            "name": "POSTO SHELL - RALPHA POSTO LTDA",
            "lat": "-23.498611",
            "lng": "-46.852359",
            "address": "AL ARAGUAIA. 941"
        },
        {
            "name": "POSTO SHELL - MASH POSTOS E SERV LTDA",
            "lat": "-23.61602079",
            "lng": "-46.608792520000002",
            "address": "AV PRES TANCREDO NEVES. 1265"
        },
        {
            "name": "POSTO SHELL - BRISTOL AUTO POSTO E SERV LTDA",
            "lat": "-23.557355000000001",
            "lng": "-46.5723251",
            "address": "AV REGENTE FEIJO. 639"
        },
        {
            "name": "POSTO SHELL - CALIFORNIA RIBEIRAO AUTO POSTO LTDA",
            "lat": "-21.186737999999998",
            "lng": "-47.798206999999998",
            "address": "RUA ANGELICA. 36"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.8865841",
            "lng": "-49.082083900000001",
            "address": "AVENIDA LISBOA. 122"
        },
        {
            "name": "POSTO SHELL - ALONSO Y ALONSO AUTO POSTO LTDA",
            "lat": "-20.5521931",
            "lng": "-47.407108000000001",
            "address": "AV DR ISMAEL ALONSO Y ALONSO. 203"
        },
        {
            "name": "POSTO SHELL - POSTO SANTOS DUMONT DE FRANCA LTDA",
            "lat": "-20.54320027",
            "lng": "-47.42215642",
            "address": "AV SANTOS DUMONT. 1200"
        },
        {
            "name": "POSTO SHELL - COMERCIAL SAO FRANCISCO LTDA",
            "lat": "-3.0375000000000001",
            "lng": "-59.940832999999998",
            "address": "AV AUTAZ MIRIM. 1000 ESQ CAMAPUA"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO K2 LTDA",
            "lat": "-23.566576000000001",
            "lng": "-46.743492000000003",
            "address": "AV CORIFEU DE AZEVEDO MARQUES. 3480"
        },
        {
            "name": "POSTO SHELL - BARCELONA CENTRO AUTO E DE CONV LTD",
            "lat": "-23.6482077",
            "lng": "-46.757987700000001",
            "address": "EST DO CAMPO LIMPO. 434"
        },
        {
            "name": "POSTO SHELL - DAT NAV TRANSP E COM DER PET LTDA",
            "lat": "-3.0979825999999999",
            "lng": "-60.009644600000001",
            "address": "Av Jorn Humberto Calderaro F. 1800"
        },
        {
            "name": "POSTO SHELL - GT COMBUSTIVEIS E SERVICOS LTDA",
            "lat": "-22.732659999999999",
            "lng": "-47.634270000000001",
            "address": "AV PIRACICAMIRIM. 2511"
        },
        {
            "name": "POSTO SHELL - POSTO DUAS BARRAS LTDA",
            "lat": "-20.841296",
            "lng": "-41.158501000000001",
            "address": "ROD BR482. 08 CACHOEIRO X ALEGRE"
        },
        {
            "name": "POSTO SHELL - DAT NAV TRANSP COM DER DE PET LTDA",
            "lat": "-3.0934982",
            "lng": "-60.028629000000002",
            "address": "AV. DARCY VARGAS. 5040"
        },
        {
            "name": "POSTO SHELL - ARTIGAS COM DE COMB LTDA",
            "lat": "-25.451343000000001",
            "lng": "-49.179703000000003",
            "address": "AV. IRAI. 1512"
        },
        {
            "name": "POSTO SHELL - LUANA AUTO POSTO LTDA",
            "lat": "-23.51075543",
            "lng": "-47.453866929999997",
            "address": "AV JUVENAL DE CAMPOS. 300"
        },
        {
            "name": "POSTO SHELL - F A MARTINS DERIVADOS DE PETROLEO L",
            "lat": "-12.988814",
            "lng": "-38.449458",
            "address": "AVENIDA PROFESS. 1304 POSTO LOTE 20"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NOVA ITAPEVI LTDA",
            "lat": "-23.536159999999999",
            "lng": "-46.939830000000001",
            "address": "R PROF DIMARAES A SANDEI. 39"
        },
        {
            "name": "POSTO SHELL - SRB REV DE COMB E LUBRIF LTDA",
            "lat": "-12.986957",
            "lng": "-38.448430999999999",
            "address": "AV ARTHUR AZEVEDO MACHADO.1443 TERR"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GG LTDA",
            "lat": "-26.914289199999999",
            "lng": "-49.060620900000004",
            "address": "R REPUBLICA ARGENTINA. 563"
        },
        {
            "name": "POSTO SHELL - AP GRUTA LTDA",
            "lat": "-23.460058",
            "lng": "-46.620649999999998",
            "address": "R MARIA AMALIA L. DE AZEVEDO. 352"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO RIO DA PRATA LTDA",
            "lat": "-23.5230307",
            "lng": "-46.532851399999998",
            "address": "AV AMADOR BUENO DA VEIGA. 2218"
        },
        {
            "name": "POSTO SHELL - POSTO GASAUTO STELLA LTDA",
            "lat": "-12.9337064",
            "lng": "-38.344584500000003",
            "address": "AL DILSON JATAHY FONSECA. 1248"
        },
        {
            "name": "POSTO SHELL - ARIBERTO TRIDAPALLI",
            "lat": "-27.085049999999999",
            "lng": "-48.911909999999999",
            "address": "AV OTTO RENAUX. 485"
        },
        {
            "name": "POSTO SHELL - POSTO 3000 LTDA",
            "lat": "-3.086284",
            "lng": "-60.063259000000002",
            "address": "AV. CEL TEIXEIRA. 7077"
        },
        {
            "name": "POSTO SHELL - CJCM PETROLEO LTDA",
            "lat": "-8.1246600000000004",
            "lng": "-34.901850000000003",
            "address": "ERNESTO DE PAULA SANTOS. 525"
        },
        {
            "name": "POSTO SHELL - SAO MIGUEL PETROLEO LTDA",
            "lat": "-8.1698506000000002",
            "lng": "-34.915303399999999",
            "address": "AV BERNARDO VIEIRA DE MELO. 1905"
        },
        {
            "name": "POSTO SHELL - POSTO DE COMBUSTIVEL TORRE LTDA",
            "lat": "-8.0403421999999996",
            "lng": "-34.910826",
            "address": "R JOSE BONIFACIO. 1210"
        },
        {
            "name": "POSTO SHELL - ALBUQUERQUE PNEUS LTDA",
            "lat": "-7.9861000000000004",
            "lng": "-34.839599999999997",
            "address": "AV GOV CARLOS LIMA CAVALCANTE. 2221"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CARACAS OIL LTDA",
            "lat": "-23.555111329999999",
            "lng": "-46.836338179999998",
            "address": "AV INOCENCIO SERAFICO. 3725"
        },
        {
            "name": "POSTO SHELL - CHECON DANTAS COM DE COMB LTDA",
            "lat": "-14.791107",
            "lng": "-39.039444899999999",
            "address": "AV ITABUNA. 534"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SOF NORTE LTDA",
            "lat": "-15.750336000000001",
            "lng": "-47.924303000000002",
            "address": "ST OFICINA NORTE. QD 04 PLL. 01"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GRECO LTDA",
            "lat": "-22.734163800000001",
            "lng": "-47.333650499999997",
            "address": "RUA NOVE DE JULHO. 378"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PICHETH LTDA",
            "lat": "-25.511862000000001",
            "lng": "-49.274208999999999",
            "address": "OMAR RAYMUNDO PICHETH. 1123"
        },
        {
            "name": "POSTO SHELL - VIAGAS COMERCIO DE COMBUSTIVEIS LTD",
            "lat": "-8.1081380799999998",
            "lng": "-34.926866330000003",
            "address": "AV RECIFE. 2586"
        },
        {
            "name": "POSTO SHELL - A C COMERCIO DE COMBUSTIVEIS LTDA",
            "lat": "-10.9442842",
            "lng": "-37.069659000000001",
            "address": "AVENIDA ADELIA FRANCO. 3380"
        },
        {
            "name": "POSTO SHELL - POSTO CIDADE NOVA LTDA",
            "lat": "-19.9646537",
            "lng": "-44.196714",
            "address": "AV JUIZ MARCO TULIO ISSAC. 330"
        },
        {
            "name": "POSTO SHELL - POSTO TOCANTINS LTDA",
            "lat": "-3.0925248700000001",
            "lng": "-60.035179309999997",
            "address": "AV. THEOMARIO PINTO DA COSTA. 5045"
        },
        {
            "name": "POSTO SHELL - POSTOS ALPA LTDA",
            "lat": "-18.600269600000001",
            "lng": "-46.514905599999999",
            "address": "R PARA. 322"
        },
        {
            "name": "POSTO SHELL - POSTO WAP CRISTIANO MACHADO LTDA",
            "lat": "-19.8492429",
            "lng": "-43.934844699999999",
            "address": "AV CRISTIANO MACHADO. 9434"
        },
        {
            "name": "POSTO SHELL - POSTO ALGODOAL PIRACICABA LTDA",
            "lat": "-22.697034160000001",
            "lng": "-47.660388089999998",
            "address": "RUA OTAVIANO DE ASSIS. 101"
        },
        {
            "name": "POSTO SHELL - AP SAO MIGUEL DE PIRACICABA LTDA",
            "lat": "-22.71074496",
            "lng": "-47.655555229999997",
            "address": "AV DONA FRANCISCA. 410"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SELECT LTDA",
            "lat": "-19.96453",
            "lng": "-44.185989999999997",
            "address": "AV BANDEIRANTES 741"
        },
        {
            "name": "POSTO SHELL - POSTO FAGA E BIZARRIA DERIV DE PET",
            "lat": "-23.588034",
            "lng": "-46.723208",
            "address": "AVENIDA JORGE JO├O SAAD. 161/165"
        },
        {
            "name": "POSTO SHELL - POSTO UNIVERSITARIO SAO CARLOS LTDA",
            "lat": "-22.011869999999998",
            "lng": "-47.897850400000003",
            "address": "R CAP ADAO PEREIRA D S CABRAL. 883"
        },
        {
            "name": "POSTO SHELL - POSTO KALILANDIA LTDA",
            "lat": "-12.968225",
            "lng": "-38.438634999999998",
            "address": "AV LUIS VIANA. 2078 PARALELA"
        },
        {
            "name": "POSTO SHELL - CHAO PRETO COM DERIV DE PETRO LTDA",
            "lat": "-20.334486999999999",
            "lng": "-47.797853000000003",
            "address": "R ANTONIO ABDALLA. 493"
        },
        {
            "name": "POSTO SHELL - ALABAMMA COM VAREJISTA DE COMB LTDA",
            "lat": "-22.73225364",
            "lng": "-47.318400599999997",
            "address": "RUA ORLANDO DEI SANTI. 70"
        },
        {
            "name": "POSTO SHELL - AUTO P SANTA LUCIA DE LIMEIRA LTDA",
            "lat": "-22.555797519999999",
            "lng": "-47.376631209999999",
            "address": "AV. MAJOR JOSE LEVY SOBRINHO. 2272"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO RENAN LTDA",
            "lat": "-22.898067000000001",
            "lng": "-47.062483999999998",
            "address": "AV OROZIMBO MAIA. 515"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERVICOS MARAVILHA LTDA",
            "lat": "-21.172951999999999",
            "lng": "-47.806556999999998",
            "address": "RUA TIBIRICA. 41"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PQ DA UVA JUNDIAI LTDA",
            "lat": "-23.190441740000001",
            "lng": "-46.89804316",
            "address": "AV JUNDIAI. 926"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MESQUITA LTDA",
            "lat": "-22.897092000000001",
            "lng": "-47.0584761",
            "address": "AV JULIO DE MESQUITA. 990"
        },
        {
            "name": "POSTO SHELL - COMERCIO DE COMB MORAES SALES LTDA",
            "lat": "-22.905394999999999",
            "lng": "-47.051217999999999",
            "address": "AV MORAES SALES. 1404 1440"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO BAPTISTELLA LTDA",
            "lat": "-23.019303000000001",
            "lng": "-46.842002000000001",
            "address": "AV MAL CASTELO BRANCO. 1147"
        },
        {
            "name": "POSTO SHELL - GIRAFA AUTO POSTO LTDA",
            "lat": "-22.897198499999998",
            "lng": "-47.094037999999998",
            "address": "AV GOVERNADOR PEDRO DE TOLEDO. 2500"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO VALINHO LTDA",
            "lat": "-23.355802109999999",
            "lng": "-47.867891929999999",
            "address": "RUA 11 DE AGOSTO. 2440"
        },
        {
            "name": "POSTO SHELL - NOVA CAMPINAS COM DE COMB LTDA",
            "lat": "-22.902617920000001",
            "lng": "-47.046111109999998",
            "address": "AV ENG CARLOS STEVENSON. 292"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO VERDELHO LTDA",
            "lat": "-22.728038999999999",
            "lng": "-47.635553999999999",
            "address": "AV INDEPENDENCIA. 2425"
        },
        {
            "name": "POSTO SHELL - POSTO PRESIDENTE RIBEIRAO LTDA",
            "lat": "-21.203582000000001",
            "lng": "-47.80962632",
            "address": "AV PRESIDENTE VARGAS. 1765"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTO JARDIM MARAJOARA LTDA",
            "lat": "-23.659939999999999",
            "lng": "-46.685938999999998",
            "address": "AV DOM AGUIRRE. 40"
        },
        {
            "name": "POSTO SHELL - POSTO RECREIO OURO LTDA",
            "lat": "-23.122586380000001",
            "lng": "-47.224584149999998",
            "address": "R OURO. 382"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MALIBU DE RIO CLARO LTDA",
            "lat": "-22.403732999999999",
            "lng": "-47.565375000000003",
            "address": "RUA SEIS. 1875"
        },
        {
            "name": "POSTO SHELL - FR 2 COMERCIO DE DERIVADOS DE PETRO",
            "lat": "-3.0931030000000002",
            "lng": "-60.021385000000002",
            "address": "AV DARCY VARGAS. 3300"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO AEROPORTO BAURU LTDA",
            "lat": "-22.343426470000001",
            "lng": "-49.052139930000003",
            "address": "AL DR OCTAVIO PINHE BRIZOLA.23 A 25"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO POLE POSITION LTDA",
            "lat": "-22.923002",
            "lng": "-47.050699000000002",
            "address": "RUA DR BETIM. 77"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO JARDIM CICA LTDA",
            "lat": "-23.206230999999999",
            "lng": "-46.884552900000003",
            "address": "JOAO FERRARA. 448"
        },
        {
            "name": "POSTO SHELL - POSTO E RESTAURANTE 3 VIAS LTDA",
            "lat": "-22.856134000000001",
            "lng": "-47.151217000000003",
            "address": "RODOVIA ANHANGUERA KM 105. SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ALCANTARA LTDA",
            "lat": "-23.696598000000002",
            "lng": "-46.714765999999997",
            "address": "AV ROBERTO KENNEDY. 3771 LOTE 09"
        },
        {
            "name": "POSTO SHELL - AF ZEN COM COMB LUBRIFICANTES LTDA",
            "lat": "-26.988125",
            "lng": "-48.640774",
            "address": "AV DO ESTADO. 3709"
        },
        {
            "name": "POSTO SHELL - POSTO MOTORHOME LTDA",
            "lat": "-27.575794439999999",
            "lng": "-48.612947220000002",
            "address": "R.VIRGILINO FERREIRA DE SOUZA. 216"
        },
        {
            "name": "POSTO SHELL - POSTO ATARUMIN DE SJ RIO PRETO LTDA",
            "lat": "-20.792992399999999",
            "lng": "-49.394493999999902",
            "address": "AV ERNANI PIRES DOMINGUES. 1850"
        },
        {
            "name": "POSTO SHELL - AP BARBIERI DE BARAO GERALDO LTDA",
            "lat": "-22.830193000000001",
            "lng": "-47.079031000000001",
            "address": "ALBINO JOSE B. DE OLIVEIRA. 1001"
        },
        {
            "name": "POSTO SHELL - RPA COMERCIO DE COMB LIMEIRA I LTDA",
            "lat": "-22.575728000000002",
            "lng": "-47.393436999999999",
            "address": "RUA PADRE ELIAS FADUL. 103"
        },
        {
            "name": "POSTO SHELL - J P X COMB E CONV BARRA LTDA",
            "lat": "-23.00095177",
            "lng": "-43.375278469999998",
            "address": "AV. DAS AM╔RICAS.6137 (LT2PAL43270)"
        },
        {
            "name": "POSTO SHELL - AUTO P BANDEIRANTES LIMEIRA LTDA",
            "lat": "-22.554652900000001",
            "lng": "-47.411268999999997",
            "address": "AV RIO CLARO. 138"
        },
        {
            "name": "POSTO SHELL - A P NOVA ESTACAO DO PESSEGO LTDA",
            "lat": "-23.733657900000001",
            "lng": "-46.6595674",
            "address": "AV NOVA TRABALHADORES. 8210"
        },
        {
            "name": "POSTO SHELL - ALVORECER COM DE COMB LTDA",
            "lat": "-23.417095",
            "lng": "-51.943635999999998",
            "address": "AV PARANA. 1145"
        },
        {
            "name": "POSTO SHELL - COM DE COMB BRASIL LTDA",
            "lat": "-25.538360000000001",
            "lng": "-54.586300000000001",
            "address": "AV BRASIL. 500 - ESQ COM RUI BARBOS"
        },
        {
            "name": "POSTO SHELL - JR COM COMBUSTIVEIS E CONVEN LTDA",
            "lat": "-18.9052884",
            "lng": "-48.266066700000003",
            "address": "AV FLORIANO PEIXOTO. 2251"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NOVO HAUER LTDA",
            "lat": "-25.481158499999999",
            "lng": "-49.248058399999998",
            "address": "RUA ALCINO GUANABARA. 804"
        },
        {
            "name": "POSTO SHELL - SAO JOSE III COMERCIO DE COMB LTDA",
            "lat": "-23.427652999999999",
            "lng": "-51.937095999999997",
            "address": "AV CERRO AZUL. 07 ZONA 2"
        },
        {
            "name": "POSTO SHELL - POSTO E CHURRASCARIA O CUPIM LTDA",
            "lat": "-25.609995399999999",
            "lng": "-49.172277000000001",
            "address": "ROD BR 376 KM 621"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ERASTO GAERTNER LTDA",
            "lat": "-25.399912",
            "lng": "-49.238436999999998",
            "address": "MAXMINO ZANON. 31"
        },
        {
            "name": "POSTO SHELL - CHAPARRAL COMB E LUBRIF LTDA",
            "lat": "-25.44834187",
            "lng": "-49.27314166",
            "address": "RUA BRASILIO ITIBERE. 2976 POSTO"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ECCELLENZA LTDA",
            "lat": "-25.444738000000001",
            "lng": "-49.304474999999996",
            "address": "AV VICENTE MACHADO. 3040"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CAETANO ALVARES LTDA",
            "lat": "-23.493897",
            "lng": "-46.659719000000003",
            "address": "RUA EPAMINONDAS MELO DO AMARAL.1707"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERV ROSARIO LTDA",
            "lat": "-25.396091200000001",
            "lng": "-49.244090700000001",
            "address": "RUA GAGO COUTINHO. 2002"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO LAGUNA LTDA",
            "lat": "-25.463356739999998",
            "lng": "-49.276653580000001",
            "address": "AV PRESIDENTE KENNEDY. 1966"
        },
        {
            "name": "POSTO SHELL - NSL COMBUSTIVEIS E CONV LTDA",
            "lat": "-25.435375000000001",
            "lng": "-49.168908999999999",
            "address": "RDV JOAO LEOPOLDO JACOMEL. 10502"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO TS LTDA",
            "lat": "-25.400492400000001",
            "lng": "-49.258254899999997",
            "address": "AV ANITA GARIBALDI. 1305"
        },
        {
            "name": "POSTO SHELL - BOMM FILHO E CIA LTDA",
            "lat": "-24.954605399999998",
            "lng": "-53.466440200000001",
            "address": "AV BRASIL. 7114"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO PORTAL GIOVANNI L",
            "lat": "-23.637190199999999",
            "lng": "-46.736937599999997",
            "address": "AV GIOVANI GRONCHI. 6600"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO HOLANDA LTDA",
            "lat": "-25.430980000000002",
            "lng": "-49.209432999999997",
            "address": "AV. VICTOR FERREIRA DO AMARAL. 3122"
        },
        {
            "name": "POSTO SHELL - POSTO DE COMB FAROL DA ILHA LTDA",
            "lat": "-27.602383329999999",
            "lng": "-48.59018889",
            "address": "RUA PROF SOFIA QUINT SOUZA. 349"
        },
        {
            "name": "POSTO SHELL - AUTO P VERDE COM COMB LUBRIF LTDA",
            "lat": "-25.407140399999999",
            "lng": "-49.255392499999999",
            "address": "RUA MANOEL PEDRO. 228"
        },
        {
            "name": "POSTO SHELL - LT NICHELE COM DE COMBUSTIVEIS LTDA",
            "lat": "-25.438117999999999",
            "lng": "-49.366095000000001",
            "address": "RUA EURICO JULIO BETTEGA. 99"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO VIA EXPRESSA ARARAQUARA",
            "lat": "-21.802797000000002",
            "lng": "-48.173271999999997",
            "address": "AV MARIA A C OLIVEIRA. 371"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.47741757",
            "lng": "-48.995883820000003",
            "address": "ROD BR 280 KM 56. 12726"
        },
        {
            "name": "POSTO SHELL - CONDOR AUTO POSTO LTDA",
            "lat": "-25.52946",
            "lng": "-49.29965",
            "address": "ROD BR 116 KM 108. N 20386"
        },
        {
            "name": "POSTO SHELL - POSTO AUTOBLU LTDA",
            "lat": "-26.897079699999999",
            "lng": "-49.079594800000002",
            "address": "RUA SAO PAULO. 2423 FRENTE"
        },
        {
            "name": "POSTO SHELL - POSTO PEROLA LTDA",
            "lat": "-25.4438177",
            "lng": "-49.267957600000003",
            "address": "RUA DEZ WESTPHALEN. 1298"
        },
        {
            "name": "POSTO SHELL - POSTO PINHEIRO LTDA",
            "lat": "-25.451778999999998",
            "lng": "-49.288330899999998",
            "address": "AV REPUBLICA ARGENTINA. 580"
        },
        {
            "name": "POSTO SHELL - ABAST ABM LTDA",
            "lat": "-29.8855848",
            "lng": "-51.179890800000003",
            "address": "AV GETULIO VARGAS. 9055 BR116 KM 9"
        },
        {
            "name": "POSTO SHELL - VIELFE MARTINS AUTO POSTO LTDA",
            "lat": "-23.625139999999998",
            "lng": "-46.461350000000003",
            "address": "AV SAPOPEMBA. 20020"
        },
        {
            "name": "POSTO SHELL - MAX CENTER CENTRO DE COMPRAS LTDA",
            "lat": "-30.014882499999999",
            "lng": "-51.111965499999997",
            "address": "AV BALTAZAR OLIVEIRA GARCIA. 3362"
        },
        {
            "name": "POSTO SHELL - ABASTECEDORA TRES AMIGOS LTDA",
            "lat": "-29.650780000000001",
            "lng": "-51.143771000000001",
            "address": "BR 116. 7455"
        },
        {
            "name": "POSTO SHELL - L S COMERCIO E SERVICOS LTDA",
            "lat": "-2.5514399999999999",
            "lng": "-44.175482000000002",
            "address": "ROD MA 201 KM 07. SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ALPHA MARTE LTDA",
            "lat": "-23.462598",
            "lng": "-46.875902099999998",
            "address": "AV YOJIRO TAKAOKA.4858"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.878048379999999",
            "lng": "-49.130178069999999",
            "address": "ROD BR 470 KM 58. 4125"
        },
        {
            "name": "POSTO SHELL - COMERCIO DE COMB NEVOEIRO LTDA",
            "lat": "-29.1662556",
            "lng": "-51.5211921",
            "address": "AV OSVALDO ARANHA. 740"
        },
        {
            "name": "POSTO SHELL - COML DE COMB VIP LTDA",
            "lat": "-30.0335945",
            "lng": "-51.1786064",
            "address": "AV CARLOS GOMES. 1395"
        },
        {
            "name": "POSTO SHELL - SIM REDE DE POSTOS LTDA",
            "lat": "-29.9152664",
            "lng": "-51.178106700000001",
            "address": "AV GETULIO VARGAS. 5800"
        },
        {
            "name": "POSTO SHELL - AGUA BRANCA COMB E SERV LTDA",
            "lat": "-22.745960700000001",
            "lng": "-47.639852699999999",
            "address": "AV AGUA BRANCA. 500"
        },
        {
            "name": "POSTO SHELL - SOBRAL E PALACIO PETROLEO LTDA",
            "lat": "-3.7241005",
            "lng": "-38.511766799999997",
            "address": "AV MONSENHOR TABOSA. 1054"
        },
        {
            "name": "POSTO SHELL - COMBUSTIVEIS VALADARES LTDA",
            "lat": "-19.889747400000001",
            "lng": "-43.968898899999999",
            "address": "AV PRES CARLOS LUZ .2600"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO AEROPORTO LTDA",
            "lat": "-15.86759",
            "lng": "-47.924253999999998",
            "address": "AER INT BSB PRES JK . S/N LT 05"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SAO MARCOS LTDA",
            "lat": "-15.8567201",
            "lng": "-47.954885900000001",
            "address": "SPMS ROD BSB ANAPOLIS. LOTE. 02"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO BELA JOIA LTDA",
            "lat": "-26.908930000000002",
            "lng": "-49.081747",
            "address": "R ANTONIO DA VEIGA. 740 FRENTE"
        },
        {
            "name": "POSTO SHELL - POSTO OLINDA LTDA",
            "lat": "-5.8590720000000003",
            "lng": "-35.195067000000002",
            "address": "AV ENGENHEIRO ROBERTO FREIRE. 1810"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO REPUBLICA BOM JESUS EIRE",
            "lat": "-22.183475999999999",
            "lng": "-49.961575000000003",
            "address": "AV REPUBLICA. 4767"
        },
        {
            "name": "POSTO SHELL - TERRAPIRES & CIA LTDA",
            "lat": "-22.116000100000001",
            "lng": "-51.4002713",
            "address": "AV WASHINGTON LUIZ. 2046"
        },
        {
            "name": "POSTO SHELL - SUPER POSTO ESTRELA LTDA",
            "lat": "-1.28094039",
            "lng": "-47.9248105",
            "address": "AV MAXIMO PORPINO. 3476 A"
        },
        {
            "name": "POSTO SHELL - POSTO CAMILA COM VAREJIS COMB LTDA",
            "lat": "-1.37122202",
            "lng": "-48.443611150000002",
            "address": "ROD AUGUSTO MONTENEGRO. KM 4.5 SN"
        },
        {
            "name": "POSTO SHELL - POSTO CASTANHEIRAS LTDA",
            "lat": "-7.1073626999999897",
            "lng": "-49.940720800000001",
            "address": "AV XINGU. NR. 151"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO AVENIDA BRASIL LTDA",
            "lat": "-22.752404500000001",
            "lng": "-47.350292699999997",
            "address": "AVENIDA BRASIL. 1985"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO DUQUE 21 DE MOURA LTDA",
            "lat": "-22.326136099999999",
            "lng": "-49.055802100000001",
            "address": "AV DUQUE DE CAXIAS. 21 30"
        },
        {
            "name": "POSTO SHELL - REDE DE POSTOS MARAJO CENTRALINA LT",
            "lat": "-18.589398599999999",
            "lng": "-49.192874499999903",
            "address": "BR 153. SN KM 017"
        },
        {
            "name": "POSTO SHELL - AUTO P MANHATTAM DE ARACATUBA LTDA",
            "lat": "-21.228323899999999",
            "lng": "-50.437945599999999",
            "address": "AV BRASILIA. 2148"
        },
        {
            "name": "POSTO SHELL - ISMAR SAGGIORO CIA LTDA",
            "lat": "-22.288967700000001",
            "lng": "-48.548901999999998",
            "address": "PCA JOSE LOURENCO. 10"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO AXR LTDA",
            "lat": "-20.8226947",
            "lng": "-49.392241899999902",
            "address": "RUA BERNARDINO DE CAMPOS. 4705"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CACIQUE RIO PRETO LTDA",
            "lat": "-20.797227740950401",
            "lng": "-49.358106523815501",
            "address": "AV NOSSA SENHORA DA PAZ. 2089"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CAMPINAS LTDA",
            "lat": "-16.671800609999998",
            "lng": "-49.282199859999999",
            "address": "AV 24 DE OUT.392 QD P-89 LT59"
        },
        {
            "name": "POSTO SHELL - POSTO SHUKRAN LTDA",
            "lat": "-16.68600082",
            "lng": "-49.266998289999997",
            "address": "AV ASSIS CHATEAUBRI. 929 Q F6 L30 E"
        },
        {
            "name": "POSTO SHELL - SOUSA E ALVES COM DER DE PETR LTDA",
            "lat": "-15.83463723",
            "lng": "-48.094801099999998",
            "address": "QNM 15 LT G AREA ESPECIAL. S/N"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PEROLA DE UBATUBA LTDA",
            "lat": "-23.43561021",
            "lng": "-45.072669609999998",
            "address": "PCA 13 DE MAIO. 71"
        },
        {
            "name": "POSTO SHELL - POSTO BOM SAMAR COM DER PETROL LTDA",
            "lat": "-12.897177449999999",
            "lng": "-38.330079759999997",
            "address": "AV SANTOS DUMON. 2616 QD J LT 4 E 5"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GUIMARAES LTDA ME",
            "lat": "-5.5052098999999997",
            "lng": "-47.4677778",
            "address": "ROD BR-010 KM 1350. SN"
        },
        {
            "name": "POSTO SHELL - SAITO COMERCIO DE COMBUSTIVEIS LTDA",
            "lat": "-1.4363668000000001",
            "lng": "-48.477183599999996",
            "address": "AV PEDRO MIRANDA. 240"
        },
        {
            "name": "POSTO SHELL - PLANALTO PETROLEO FATIMA LTDA",
            "lat": "-5.0635029999999999",
            "lng": "-42.794891999999997",
            "address": "AV NOSSA SENHORA DE FATIMA. 2727"
        },
        {
            "name": "POSTO SHELL - POSTO S FRANCISCO COM COMBS LUBS LT",
            "lat": "-4.8579888000000002",
            "lng": "-43.364570700000002",
            "address": "AV GETULIO VARGAS. 582"
        },
        {
            "name": "POSTO SHELL - SUPER GAMES COMERCIAL LTDA",
            "lat": "-2.5078049999999998",
            "lng": "-44.284675999999997",
            "address": "AVE PROFESSOR CARLO. 1000 QD 4 LT 1"
        },
        {
            "name": "POSTO SHELL - LIMA COM DE COMB LTDA",
            "lat": "-2.5379610000000001",
            "lng": "-44.222811",
            "address": "AV JERONIMO ALB MARANHAO . 5"
        },
        {
            "name": "POSTO SHELL - POSTO NATUREZA E SERV LTDA",
            "lat": "-2.4981453999999998",
            "lng": "-44.228601900000001",
            "address": "AV S LUIS REI DE FRANCA. 190"
        },
        {
            "name": "POSTO SHELL - F L COMERCIO DE COMBUSTIVEIS LTDA",
            "lat": "-2.5540918000000001",
            "lng": "-44.260624",
            "address": "AV JOAO PESSOA. 404 A"
        },
        {
            "name": "POSTO SHELL - ARENA PETROLEO REVENDA DE COMB LTDA",
            "lat": "-3.0853226199999999",
            "lng": "-60.026399980000001",
            "address": "AV CONSTANTINO NERY. 4536"
        },
        {
            "name": "POSTO SHELL - COPEVE COM DE PETRO E SERV LTDA",
            "lat": "-3.0756390100000002",
            "lng": "-59.95299911",
            "address": "EST DO ALEIXO. KM 5 P SHELL TERM 5"
        },
        {
            "name": "POSTO SHELL - POSTO JAPIIM COM VAR COMB LTDA",
            "lat": "-3.1175000000000002",
            "lng": "-59.983193999999997",
            "address": "AV RODRIGO OTAVIO. 4229"
        },
        {
            "name": "POSTO SHELL - MANAUS COM DERIVADOS PETROLEO LTDA",
            "lat": "-3.0944278000000001",
            "lng": "-59.990228899999998",
            "address": "AV ANDRE ARAUJO. 2893"
        },
        {
            "name": "POSTO SHELL - TRADING DERIVADOS DE PETROLEO LTDA",
            "lat": "-3.108635",
            "lng": "-60.023449999999997",
            "address": "AV DJALMA BATISTA. 700"
        },
        {
            "name": "POSTO SHELL - POSTO KALILANDIA LTDA",
            "lat": "-13.004678569999999",
            "lng": "-38.482251320000003",
            "address": "R MUNDO NOVO.1428 P SHELL RIO VERME"
        },
        {
            "name": "POSTO SHELL - POSTO NOVO BAIRRO SA",
            "lat": "-12.99579752",
            "lng": "-38.46969962",
            "address": "AV ANT CARLOS MAGALHAES. 1298"
        },
        {
            "name": "POSTO SHELL - FERREIRA COMB LTDA",
            "lat": "-13.013119",
            "lng": "-38.483511",
            "address": "R MARQUES DE MONTE SANTO. 299"
        },
        {
            "name": "POSTO SHELL - POSTO ALBALONGA LTDA",
            "lat": "-12.998061999999999",
            "lng": "-38.491970999999999",
            "address": "AV. VASCO DA GAMA. 3883 - R VERMELH"
        },
        {
            "name": "POSTO SHELL - POSTO KALILANDIA LTDA",
            "lat": "-12.964172919999999",
            "lng": "-38.437064890000002",
            "address": "AV LUIS VIANA FILHO. 2489"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CAPITAL LTDA",
            "lat": "-15.820150999999999",
            "lng": "-48.086219",
            "address": "Q CNL 01 LOTE E. S/N - PLL 1"
        },
        {
            "name": "POSTO SHELL - POSTO E SERVICOS MAPUA LTDA",
            "lat": "-22.924800869999999",
            "lng": "-43.386798859999999",
            "address": "EST RODRIGUES CALDAS.1333"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA ELEFANTINHO LTDA",
            "lat": "-22.841265459999999",
            "lng": "-42.071011570000003",
            "address": "ROD.RJ 140. N 500. KM 05"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MARAMAR LTDA",
            "lat": "-23.020932699999999",
            "lng": "-43.500655000000002",
            "address": "AV DAS AMERICAS. 19563-FREGUESIA"
        },
        {
            "name": "POSTO SHELL - POSTO CANCELA SERV E COM LTDA",
            "lat": "-22.398168559999998",
            "lng": "-41.791744229999999",
            "address": "EST DA CANCELA PRETA.60"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOM GOLFE CLUBE LTDA",
            "lat": "-22.99733969",
            "lng": "-43.26708575",
            "address": "EST DA GAVEA. 820 A 850"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO LACASEMA LTDA",
            "lat": "-23.000686649999999",
            "lng": "-44.30321884",
            "address": "AV.ALM.JAIR CARNEIRO T.BRITO. 417"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ENSEADA AZUL LTDA",
            "lat": "-19.801616500000002",
            "lng": "-44.007460399999999",
            "address": "AV DENISE CRISTINA ROCHA. 807"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ITAMOGI LTDA",
            "lat": "-25.537089999999999",
            "lng": "-54.576259999999998",
            "address": "AV PARANA. 1291"
        },
        {
            "name": "POSTO SHELL - POSTO DE COMB APOLO V LTDA",
            "lat": "-29.9349013",
            "lng": "-51.042485999999997",
            "address": "AV BENTO GONCALVES. 40"
        },
        {
            "name": "POSTO SHELL - BRILHANTE AUTO POSTO LTDA",
            "lat": "-23.570317795815701",
            "lng": "-46.631435680642397",
            "address": "AV ACLIMACAO. 613"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO BANDEIRA PAULISTA LTDA",
            "lat": "-23.5827727",
            "lng": "-46.676475699999997",
            "address": "RUA BANDEIRA PAULISTA. 370"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GUIGUI LTDA",
            "lat": "-23.653708000000002",
            "lng": "-46.536817999999997",
            "address": "RUA DAS MONCOES. 618"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO FEVEREIRO LTDA",
            "lat": "-23.667795000000002",
            "lng": "-46.587828000000002",
            "address": "RUA MMDC. 309"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO LUTAIF LTDA",
            "lat": "-23.492143410000001",
            "lng": "-46.611387909999998",
            "address": "AV LUIZ DUMONT VILLARS.1159 SANT"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ORENSE LTDA",
            "lat": "-23.704035000000001",
            "lng": "-46.588217",
            "address": "AV HUMB A CASTELO BRANCO. 1215"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERV RIMACRIS LTDA",
            "lat": "-23.502656999999999",
            "lng": "-46.831389000000001",
            "address": "AL ARAGUAIA. 3207"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CAMBORIU LTDA",
            "lat": "-23.681291000000002",
            "lng": "-46.557322999999997",
            "address": "AV KENNEDY. 960"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ESTONIA 5 LTDA",
            "lat": "-23.74744342",
            "lng": "-46.554978490000003",
            "address": "AV NICOLA DEMARCHI. 575 ESQ R JOSE"
        },
        {
            "name": "POSTO SHELL - COMERCIAL MARCESOP LTDA",
            "lat": "-19.929769960000002",
            "lng": "-43.979063580000002",
            "address": "AV. AMAZONAS. 5234"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO QUEOPS LTDA",
            "lat": "-25.510208500000001",
            "lng": "-49.176494099999999",
            "address": "AV RUI BARBOSA. 1560"
        },
        {
            "name": "POSTO SHELL - POSTO CONTERRANEO DERIV PETRO LTDA",
            "lat": "-12.2534762",
            "lng": "-38.931952099999997",
            "address": "AV EDUARDO FROES DA MO. 1680 TERREO"
        },
        {
            "name": "POSTO SHELL - GR REVEND DE COMB E LUBRIFICANTES E",
            "lat": "-12.9515888",
            "lng": "-38.477214500000002",
            "address": "AV GENERAL SAN MARTIN. 95"
        },
        {
            "name": "POSTO SHELL - SRB REVENDEDORA DE COMB E LUBS LTD",
            "lat": "-12.958679999999999",
            "lng": "-38.477179",
            "address": "AV BARROS REIS. 1223"
        },
        {
            "name": "POSTO SHELL - ENTREPOSTO COMERCIAL DE AMARALINA L",
            "lat": "-13.01359688",
            "lng": "-38.474182659999997",
            "address": "AV AMARALINA. 441"
        },
        {
            "name": "POSTO SHELL - POSTO KALILANDIA LTDA",
            "lat": "-13.012309999999999",
            "lng": "-38.481079999999999",
            "address": "RUA OSVALDO CRUZ. 819"
        },
        {
            "name": "POSTO SHELL - GRL ORG REV DE COMB LUBR LTDA",
            "lat": "-12.930017810000001",
            "lng": "-38.468937699999998",
            "address": "BR 324 KM 4.8. S/N"
        },
        {
            "name": "POSTO SHELL - POSTO UP3 COM DE COMB E LUB LTDA",
            "lat": "-12.9892",
            "lng": "-38.50761",
            "address": "AV VASCO DA GAMA. 1894"
        },
        {
            "name": "POSTO SHELL - ALBUQUERQUE PNEUS LTDA",
            "lat": "-7.9918959999999997",
            "lng": "-34.839575000000004",
            "address": "AV DR JOSE AUGUSTO MOREIRA. 377"
        },
        {
            "name": "POSTO SHELL - CEMOPEL CM PETRO LTDA",
            "lat": "-8.0466301999999992",
            "lng": "-34.901453699999998",
            "address": "AV RUI BARBOSA. 879 GRACAS"
        },
        {
            "name": "POSTO SHELL - GRACAS COMBUSTIVEIS LTDA",
            "lat": "-8.0383499999999994",
            "lng": "-34.900275999999998",
            "address": "AV CONSELHEIRO ROSA E SILVA. 1550"
        },
        {
            "name": "POSTO SHELL - COM RECIFE COM DE DERIVADOS DE PETR",
            "lat": "-8.0567470500000002",
            "lng": "-34.892604730000002",
            "address": "AV CONDE DA BOA VISTA. 1377"
        },
        {
            "name": "POSTO SHELL - CMA PETROLEO LTDA",
            "lat": "-8.1999928999999998",
            "lng": "-34.918073999999997",
            "address": "AV BERNARDO VIEIRA DE MELO. 5160"
        },
        {
            "name": "POSTO SHELL - POSTO URBANO III LTDA EPP",
            "lat": "-8.0607107100000004",
            "lng": "-39.11719429",
            "address": "AV CORONEL VEREMUNDO SOARES. 881"
        },
        {
            "name": "POSTO SHELL - COMERCIAL RECIFE COM DE DER PETR LT",
            "lat": "-8.0360709000000003",
            "lng": "-34.89141",
            "address": "AV BEBERIBE. 167"
        },
        {
            "name": "POSTO SHELL - POSTO LUPP II LTDA",
            "lat": "-8.0646369999999994",
            "lng": "-34.937891999999998",
            "address": "AV ENG ABIDIAS DE CARVALHO. 1122"
        },
        {
            "name": "POSTO SHELL - CJCM PETROLEO LTDA",
            "lat": "-8.0288439",
            "lng": "-34.926090600000002",
            "address": "AV DEZESSETE DE AGOSTO. 2450"
        },
        {
            "name": "POSTO SHELL - CEMOPEL CM PETROLEO LTDA",
            "lat": "-8.1775599000000003",
            "lng": "-34.917344100000001",
            "address": "AV. BERNARDO VIEIRA DE MELO. 2750"
        },
        {
            "name": "POSTO SHELL - RS PNEUS LTDA",
            "lat": "-8.2992107500000003",
            "lng": "-35.959429309999997",
            "address": "AV. JOS╔ MARQUES FONTES. 760"
        },
        {
            "name": "POSTO SHELL - GERALDO VIEIRA & CIA LTDA",
            "lat": "-8.0369368300000001",
            "lng": "-34.945055269999997",
            "address": "AV CAXANGA. 4500"
        },
        {
            "name": "POSTO SHELL - POSTO LUPP LTDA",
            "lat": "-8.1002427000000008",
            "lng": "-34.887567400000002",
            "address": "AV.DOMINGOS FERREIRA. 1222"
        },
        {
            "name": "POSTO SHELL - ALBUQUERQUE PNEUS LTDA",
            "lat": "-8.0391409899999999",
            "lng": "-34.889630670000003",
            "address": "AV NORTE. 2120"
        },
        {
            "name": "POSTO SHELL - SAO MIGUEL PETROLEO LTDA",
            "lat": "-80.529393999999996",
            "lng": "-34.8919426",
            "address": "R JOAO FERNANDES VIEIRA. 386"
        },
        {
            "name": "POSTO SHELL - DN COMERCIO DE COMB LTDA",
            "lat": "-7.1153199999999996",
            "lng": "-34.861051199999999",
            "address": "ROD BR 101 NORTE. SN KM 01"
        },
        {
            "name": "POSTO SHELL - G B COMERCIO DE COMBUSTIVEIS LTDA",
            "lat": "-5.8107498800000004",
            "lng": "-35.20458679",
            "address": "AV SENADOR SALGADO FILHO.1552"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERV ROGLEN LTDA",
            "lat": "-30.0882647",
            "lng": "-51.624542599999998",
            "address": "BR 116 KM 284. S/N"
        },
        {
            "name": "POSTO SHELL - ALBUQUERQUE PNEUS LTDA",
            "lat": "-7.4110670000000001",
            "lng": "-35.110130300000002",
            "address": "RDV PE 75 KM 28. S/N SL 01"
        },
        {
            "name": "POSTO SHELL - CJCM PETROLEO LTDA",
            "lat": "-8.1648420000000002",
            "lng": "-34.933407000000003",
            "address": "AV DR JULIO MARANHAO. 3062"
        },
        {
            "name": "POSTO SHELL - POSTO 99 COMERCIAL DE COMB LTDA",
            "lat": "-7.1194419999999896",
            "lng": "-34.837328900000003",
            "address": "AV PRESIDENTE EPITACIO PESSOA. 3663"
        },
        {
            "name": "POSTO SHELL - POSTO APIPUCOS LTDA",
            "lat": "-8.0440529999999999",
            "lng": "-34.909475999999998",
            "address": "RUA PROF TRAJANO DE MENDONCA. 440"
        },
        {
            "name": "POSTO SHELL - AMERICAMANIA COM VAR DE COMB LTDA",
            "lat": "0",
            "lng": "0",
            "address": "AV DE CILLO. 1116"
        },
        {
            "name": "POSTO SHELL - POSTO COMBUSTIVEL L E C LTDA",
            "lat": "-9.6622190000000003",
            "lng": "-35.728391999999999",
            "address": "PEDRO PAULINO. 395"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SOLEDADE GAUCHA LTDA",
            "lat": "-23.496317579999999",
            "lng": "-47.465924940000001",
            "address": "RUA PROF.TOLEDO. 848"
        },
        {
            "name": "POSTO SHELL - CEMOPEL CM PETRO LTDA",
            "lat": "-8.0357599999999998",
            "lng": "-34.908591000000001",
            "address": "AV.PARNAMIRIM. 196"
        },
        {
            "name": "POSTO SHELL - WANDERLEY E CLAUDENIER LTDA",
            "lat": "-8.0297219999999996",
            "lng": "-34.958055999999999",
            "address": "AV JOAQUIM RIBEIRO.40 ESQ V AO MUND"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO COLINA ARACATUBA LTDA",
            "lat": "-21.227663400000001",
            "lng": "-50.445047099999996",
            "address": "AV DA SAUDADE. 1334"
        },
        {
            "name": "POSTO SHELL - NEYJHON COM DE DERIV DE PETRO LTDA",
            "lat": "-8.7444787000000002",
            "lng": "-63.864942900000003",
            "address": "AV CALAMA. 5658"
        },
        {
            "name": "POSTO SHELL - LIMA COMERCIAL DE COMBUSTIVEIS LTDA",
            "lat": "-2.5763210000000001",
            "lng": "-44.242474000000001",
            "address": "AV DOS FRANCESES. 25"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ITAMARATY LTDA",
            "lat": "-18.974688199999999",
            "lng": "-49.459641300000001",
            "address": "AV DEZESSETE. 825"
        },
        {
            "name": "POSTO SHELL - AERO SETE AUTO POSTO LTDA",
            "lat": "-16.654399869999999",
            "lng": "-49.246101379999999",
            "address": "AV VEREADOR J. MONTEIRO. 1854"
        },
        {
            "name": "POSTO SHELL - AUTO PECAS ABREU TEIXEIRA LTDA",
            "lat": "-19.4606846",
            "lng": "-44.2480349",
            "address": "RUA PAULO FRONTIN. 434"
        },
        {
            "name": "POSTO SHELL - POLAR DERIV DE PETRO LTDA",
            "lat": "-15.7942287",
            "lng": "-47.882165800000003",
            "address": "SHC SUL SQ410 BL B 60 LJ CONV PLL01"
        },
        {
            "name": "POSTO SHELL - POSTO RAMADAS LTDA",
            "lat": "-19.921990000000001",
            "lng": "-43.965448000000002",
            "address": "RUA PLATINA. 789"
        },
        {
            "name": "POSTO SHELL - POSTO Z+Z 314 SUL LTDA",
            "lat": "-15.827578040000001",
            "lng": "-47.921515739999997",
            "address": "SHCS SQ 314 BL B PLL 01. SN"
        },
        {
            "name": "POSTO SHELL - POSTO CAPIM DOURADO LTDA",
            "lat": "-16.703462989999998",
            "lng": "-49.231397780000002",
            "address": "ROD BR153. SN KM4 QD C26 LT 1 22"
        },
        {
            "name": "POSTO SHELL - PIONEIRO COM VAR DERIV PETRO LTDA",
            "lat": "-15.865031999999999",
            "lng": "-47.962096000000003",
            "address": "ROD BRASILIA/ANAPOLIS LT PLL 01. S/"
        },
        {
            "name": "POSTO SHELL - POSTO CARIJO LTDA",
            "lat": "-19.899166109999999",
            "lng": "-43.982360839999998",
            "address": "ROD ANEL RODOVIARIO CELSO ME. 14563"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO WALTER SANTOS LTDA",
            "lat": "-16.677931279999999",
            "lng": "-49.286023980000003",
            "address": "210. NR. 14. QD. 75. LT. 02E"
        },
        {
            "name": "POSTO SHELL - MACEDO E MACEDO POSTOS E SERV LTDA",
            "lat": "-19.921939200000001",
            "lng": "-43.986632399999998",
            "address": "AV D JOAO ANTONIO DOS SANTOS. 195"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO 2 M LTDA",
            "lat": "-18.922082899999999",
            "lng": "-48.288471219999998",
            "address": "AV GETULIO VARGAS. 1316"
        },
        {
            "name": "POSTO SHELL - POSTO Z Z SAO BENTO LTDA",
            "lat": "-16.671157999999998",
            "lng": "-49.231760999999999",
            "address": "AV ANHANGUERA. 2235"
        },
        {
            "name": "POSTO SHELL - POSTO TROPICO LTDA",
            "lat": "-19.863191",
            "lng": "-43.957646699999998",
            "address": "AV PRESIDENTE ANTONIO CARLOS. 6640"
        },
        {
            "name": "POSTO SHELL - POSTO BATISTAO LTDA",
            "lat": "-19.965734000000001",
            "lng": "-43.997934000000001",
            "address": "RUA DESEMB. REIS ALVES. 880"
        },
        {
            "name": "POSTO SHELL - POSTO CHEFAO LTDA",
            "lat": "-20.061615",
            "lng": "-43.978121000000002",
            "address": "AVENIDA TORONTO. 470"
        },
        {
            "name": "POSTO SHELL - REIS MASSI E CIA LTDA",
            "lat": "-21.1958783",
            "lng": "-47.773929299999999",
            "address": "RUA JORGE FAZOLINE. 515"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO STA CRUZ DE MOGI MIRIM L",
            "lat": "-22.436224599999999",
            "lng": "-46.975804099999998",
            "address": "RUA SANTA CRUZ. 1198"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO FERRARI JAGUARIUNA LTDA",
            "lat": "-22.705438399999998",
            "lng": "-46.9913326",
            "address": "RUA MARIA ANGELA. 747"
        },
        {
            "name": "POSTO SHELL - POSTO SAO CRISTOVAO DE CASTELO LTDA",
            "lat": "-20.605727999999999",
            "lng": "-41.203749999999999",
            "address": "AV N SENHORA DA PENHA. 236"
        },
        {
            "name": "POSTO SHELL - POSTO CN LTDA",
            "lat": "-19.897684399999999",
            "lng": "-43.928111999999999",
            "address": "AV CRISTIANO MACHADO. 1383"
        },
        {
            "name": "POSTO SHELL - LMT COMERCIO E SERVICOS LTDA",
            "lat": "-12.996928",
            "lng": "-38.443831400000001",
            "address": "AV OCTAVIO MANGABEIRA. 3251"
        },
        {
            "name": "POSTO SHELL - DEUSREI COMB E LUBRIF LTDA",
            "lat": "-12.968826",
            "lng": "-38.424767000000003",
            "address": "AV JORGE AMADO LOTE 128 A 130 QD 15"
        },
        {
            "name": "POSTO SHELL - D & B COMERCIAL LTDA",
            "lat": "-12.948262529999999",
            "lng": "-38.411192049999997",
            "address": "AV Professor Pinto de Aguiar. 2100"
        },
        {
            "name": "POSTO SHELL - POSTO KALILANDIA LTDA",
            "lat": "-12.937016809999999",
            "lng": "-38.404117360000001",
            "address": "AV LUIZ VIANA FILHO. 7419"
        },
        {
            "name": "POSTO SHELL - COOPERCITRUS COOP DE PROD RURAIS",
            "lat": "-21.180330699999999",
            "lng": "-47.787379000000001",
            "address": "AV TREZE DE MAIO. 932"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MEDIANI PIRES LTDA",
            "lat": "-20.825112000000001",
            "lng": "-49.366531000000002",
            "address": "AV MURCHID HONSI. 1602"
        },
        {
            "name": "POSTO SHELL - AUTO SERVICO ROCAR RIO LTDA",
            "lat": "-23.002000809999998",
            "lng": "-43.325920099999998",
            "address": "AV AMERICAS. 1600"
        },
        {
            "name": "POSTO SHELL - POSTO MONSENHOR ESCRIVA LTDA",
            "lat": "-22.880949999999999",
            "lng": "-43.103794000000001",
            "address": "ALAMEDA S├O BOAVENTURA.246"
        },
        {
            "name": "POSTO SHELL - POSTO JARDIM OCEANICO LTDA",
            "lat": "-23.01200867",
            "lng": "-43.305191039999997",
            "address": "AV OLEGARIO MACIEL.319"
        },
        {
            "name": "POSTO SHELL - POSTO SAO MIGUEL ARCANJO LTDA",
            "lat": "-22.708471200000002",
            "lng": "-43.429153199999902",
            "address": "RUA CAIEIRAS. 14"
        },
        {
            "name": "POSTO SHELL - POSTO ITAIPAVA LTDA",
            "lat": "-22.398437650000002",
            "lng": "-43.134018840000003",
            "address": "EST UNIAO INDUSTRIA.10425"
        },
        {
            "name": "POSTO SHELL - POSTO IATE COMERCIO E SERV LTDA",
            "lat": "-22.949100489999999",
            "lng": "-43.180400849999998",
            "address": "AV REPORTER NESTOR MOREIRA. 41"
        },
        {
            "name": "POSTO SHELL - POSTO FM DA DUTRA LTDA",
            "lat": "-22.7862434",
            "lng": "-43.378195599999998",
            "address": "ROD PRES DUTRA. S/N - KM8.75"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA CANARIO LTDA",
            "lat": "-23.007201420000001",
            "lng": "-43.312128559999998",
            "address": "R. AFONSO TAUNAY.801"
        },
        {
            "name": "POSTO SHELL - A P F DISTRIBUIDORA DE COMB LTDA",
            "lat": "-22.512699130000001",
            "lng": "-44.087600709999997",
            "address": "AV AMARAL PEIXOTO. 800"
        },
        {
            "name": "POSTO SHELL - POSTO GRAN CENTER 10 LTDA",
            "lat": "-22.278949000000001",
            "lng": "-42.534057999999902",
            "address": "FRANCISCO MIELE. 10"
        },
        {
            "name": "POSTO SHELL - ENZO QUITANDINHA LTDA",
            "lat": "-22.527864614962699",
            "lng": "-43.211875109672398",
            "address": "R GAL RONDON. 550 PARTE"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO EXCEDE LTDA",
            "lat": "-22.966743999999998",
            "lng": "-43.203325999999997",
            "address": "AV EPITACIO PESSOA. 4630"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA BUGGY LTDA",
            "lat": "-22.80020523",
            "lng": "-43.199859619999998",
            "address": "R JAIME PERDIGAO. 806"
        },
        {
            "name": "POSTO SHELL - POSTO DE ABASTECIMENTO LIPE LTDA",
            "lat": "-22.882299419999999",
            "lng": "-43.293098450000002",
            "address": "AV DOM HELDER CAMARA. 6611"
        },
        {
            "name": "POSTO SHELL - SIMOVAN AUTO POSTO LTDA",
            "lat": "-22.51329994",
            "lng": "-43.221401210000003",
            "address": "RUA DOUTOR PAULO HERVE. 1100"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERV DE AUTOM KONTIKI LTDA",
            "lat": "-22.917000000000002",
            "lng": "-43.361385499999997",
            "address": "AV GEREMARIO DANTAS. 27 TANQUE"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA GUADIANA LTDA",
            "lat": "-22.923187384859499",
            "lng": "-43.450257295554898",
            "address": "AV MARACANA. 779"
        },
        {
            "name": "POSTO SHELL - POSTO VIA PONTE LTDA",
            "lat": "-22.887800219999999",
            "lng": "-43.114898680000003",
            "address": "RUA PROF JOAQUIM COSTA RIBEIRO. 5"
        },
        {
            "name": "POSTO SHELL - POSTO HAWAI LUBRIFICACAO LTDA",
            "lat": "-22.804919000000002",
            "lng": "-43.209569000000002",
            "address": "EST DO GALEAO. 2870"
        },
        {
            "name": "POSTO SHELL - POLUS COM E SERV LTDA",
            "lat": "-20.310357700000001",
            "lng": "-40.296537200000003",
            "address": "AV DESEMBARGADOR SANTOS NEVES. 22"
        },
        {
            "name": "POSTO SHELL - POSTO RFD LTDA",
            "lat": "-22.886500000000002",
            "lng": "-43.224440000000001",
            "address": "AV BRASIL. 1960"
        },
        {
            "name": "POSTO SHELL - POSTO DE ABAST AMOR DA LEOPOLDINA L",
            "lat": "-22.830589289999999",
            "lng": "-43.270427699999999",
            "address": "AV BRASIL. 11847"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO DOMINGUES DE SA LTDA",
            "lat": "-22.904015170000001",
            "lng": "-43.105475679999998",
            "address": "AV ROBERTO SILVEIRA. 283"
        },
        {
            "name": "POSTO SHELL - PARAISO LUBRIFICANTES LTDA",
            "lat": "-22.45989458",
            "lng": "-44.435654489999997",
            "address": "ROD PRES DUTRA. KM 305"
        },
        {
            "name": "POSTO SHELL - POSTO IATE LTDA",
            "lat": "-20.296059899999999",
            "lng": "-40.290134199999997",
            "address": "AV SATURNINO DE BRITO. 1394 LJ 3"
        },
        {
            "name": "POSTO SHELL - POSTO MODELO JMLBG LTDA",
            "lat": "-22.950505",
            "lng": "-43.192427000000002",
            "address": "RUA SAO CLEMENTE.307"
        },
        {
            "name": "POSTO SHELL - POSTO 2001 LTDA",
            "lat": "-22.745305269999999",
            "lng": "-42.853430179999997",
            "address": "AV 22 DE MAIO. 5849"
        },
        {
            "name": "POSTO SHELL - POSTO UM AF SOUZA LTDA",
            "lat": "-22.8994",
            "lng": "-43.110500000000002",
            "address": "AV. ROBERTO SILVEIRA 09"
        },
        {
            "name": "POSTO SHELL - POSTO GASOL S JERONIMO DO ANIL LTDA",
            "lat": "-22.95151572",
            "lng": "-43.338512729999998",
            "address": "ETR DE JACAREPAGUA. 6580"
        },
        {
            "name": "POSTO SHELL - POSTO MERITI LTDA",
            "lat": "-22.79339981",
            "lng": "-43.366500850000001",
            "address": "R NICOLAU CHEUEN. SN LT 12 QD 06"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CALYPSO LTDA",
            "lat": "-19.870547899999998",
            "lng": "-44.990637100000001",
            "address": "R DR JACINTO MOREIRA FILHO. 975"
        },
        {
            "name": "POSTO SHELL - POSTO BARAO VPP LTDA",
            "lat": "-19.9411126",
            "lng": "-43.9722486",
            "address": "AV BARAO HOMEM DE MELO. 3000"
        },
        {
            "name": "POSTO SHELL - POSTO DN LTDA",
            "lat": "-16.623518170000001",
            "lng": "-49.21961769",
            "address": "AV VERA CRUZ.822 QD 47 LT 01A"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CHACALTAYA LTDA",
            "lat": "-23.016700740000001",
            "lng": "-43.473800660000002",
            "address": "AV DAS AMERICAS. 16747"
        },
        {
            "name": "POSTO SHELL - POSTO TIO ZICO III LTDA",
            "lat": "-25.490570000000002",
            "lng": "-49.216439999999999",
            "address": "AV COMENDADOR FRANCO. 7062"
        },
        {
            "name": "POSTO SHELL - LM COM DERIV DE PETRO LTDA",
            "lat": "-16.764400479999999",
            "lng": "-49.244800570000002",
            "address": "AV JUSC KUBISTSHEK.SN QD1 LTS14 35"
        },
        {
            "name": "POSTO SHELL - BATISTA PEREIRA E RODRIGUES LTDA",
            "lat": "-10.717913299999999",
            "lng": "-48.406441000000001",
            "address": "ANEL VIARIO. SN KM 01"
        },
        {
            "name": "POSTO SHELL - SOBRAL PALACIO PETROLEO LTDA",
            "lat": "-3.7426395000000001",
            "lng": "-38.509108400000002",
            "address": "AVENIDA BARAO DE STUDART. 2255"
        },
        {
            "name": "POSTO SHELL - S & C PETROLEO LTDA",
            "lat": "-3.7462300000000002",
            "lng": "-38.543871600000003",
            "address": "AVENIDA JOAO PESSOA. 3555"
        },
        {
            "name": "POSTO SHELL - MOURA COMERCIO DE COMBUSTIVEIS LTDA",
            "lat": "-3.7321659999999999",
            "lng": "-38.546219000000001",
            "address": "AV BEZERRA DE MENEZES. 161"
        },
        {
            "name": "POSTO SHELL - CENTER CAR AUTO POSTO LTDA",
            "lat": "-23.553833000000001",
            "lng": "-46.743340000000003",
            "address": "AV JAGUARE. 717"
        },
        {
            "name": "POSTO SHELL - ATLANTICA AUTO POSTO E CONV LTDA",
            "lat": "-23.533557699999999",
            "lng": "-46.656090800000001",
            "address": "AV GAL OLIMPIO DA SILVEIRA. 309"
        },
        {
            "name": "POSTO SHELL - PORTAL LESTE AUTO POSTO LTDA",
            "lat": "-23.550710850000002",
            "lng": "-46.606496730000003",
            "address": "AV ALCANTARA MACHADO. 1884"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ABV LTDA",
            "lat": "-23.642349219584801",
            "lng": "-46.701241105101701",
            "address": "AVENIDA ADOLFO PINHEIRO. 1264"
        },
        {
            "name": "POSTO SHELL - POSTO SUMMER DERIV DE PETRO LTDA",
            "lat": "-23.655080000000002",
            "lng": "-46.691345779999999",
            "address": "AV WASHINGTON LUIZ. 1490"
        },
        {
            "name": "POSTO SHELL - AGUA FUNDA SERV AUTOM LTDA",
            "lat": "-23.585212330000001",
            "lng": "-46.61788138",
            "address": "AV DR RICARDO JAFET. 959"
        },
        {
            "name": "POSTO SHELL - POSTO CAIUBI LTDA",
            "lat": "-23.538307639999999",
            "lng": "-46.674799720000003",
            "address": "RUA CAIUBI. 760"
        },
        {
            "name": "POSTO SHELL - PHENIX COM VAREJISTA DE COMB LTDA",
            "lat": "-23.585254800000001",
            "lng": "-46.601891299999998",
            "address": "RUA SILVA BUENO. 754"
        },
        {
            "name": "POSTO SHELL - ELMAR POSTO DE ABAST LTDA",
            "lat": "-23.639098430000001",
            "lng": "-46.642900439999998",
            "address": "AV ENG GEORGE CORBISIER. 260"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO RAMAL LTDA",
            "lat": "-23.517531999999999",
            "lng": "-46.729258000000002",
            "address": "AV EMB MACEDO SOARES. 6000"
        },
        {
            "name": "POSTO SHELL - CORTESIA AUTO POSTO SERVICO LTDA",
            "lat": "-23.561458860317501",
            "lng": "-46.567279698761297",
            "address": "AV SAPOPEMBA. 1213"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MIKE LTDA",
            "lat": "-23.685565",
            "lng": "-46.616728700000003",
            "address": "AV ANTONIO PIRANGA. 779"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO BEIRA BAIXA LTDA",
            "lat": "-23.649268200000002",
            "lng": "-46.577982499999997",
            "address": "AV RUDGE RAMOS. 906"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GALENA LTDA",
            "lat": "-23.603171700000001",
            "lng": "-46.625852899999998",
            "address": "AV DR RICARDO JAFET. 3274"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO BENETS LTDA",
            "lat": "-23.579147599999999",
            "lng": "-46.7101921",
            "address": "AV PROF FRANCISCO MORATO. 860"
        },
        {
            "name": "POSTO SHELL - FAROL COMERCIAL LTDA",
            "lat": "-23.423333",
            "lng": "-46.394860000000001",
            "address": "ROD PRESID DUTRA. SN KM 208 620 MTS"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOM TRES POSTOS LTDA",
            "lat": "-23.670207999999999",
            "lng": "-46.559547000000002",
            "address": "AV SENADOR VERGUEIRO. 2876"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CECI LTDA",
            "lat": "-23.61927",
            "lng": "-46.650440000000003",
            "address": "AV CECI. 1090"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERV AUTOM JAU LTDA",
            "lat": "-23.716424",
            "lng": "-46.555515",
            "address": "RUA JOAQUIM NABUCO. 506"
        },
        {
            "name": "POSTO SHELL - SAO GUALTER AUTO POSTO LTDA",
            "lat": "-23.5413946801762",
            "lng": "-46.7102674233481",
            "address": "AV SAO GUALTER. 918"
        },
        {
            "name": "POSTO SHELL - AP INDEPENDENCIA DO CAMBUCI LTDA",
            "lat": "-23.567513399999999",
            "lng": "-46.6136044",
            "address": "RUA INDEPENDENCIA. 907"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO BARRANCAO LTDA",
            "lat": "-23.483180000000001",
            "lng": "-46.721359999999997",
            "address": "AV MIGUEL DE CASTRO. 23"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MESTRE LTDA",
            "lat": "-23.457815",
            "lng": "-46.568747999999999",
            "address": "AV SETE DE SETEMBRO. 1870 A"
        },
        {
            "name": "POSTO SHELL - LUBRICAR AUTO POSTO LTDA",
            "lat": "-23.672341599999999",
            "lng": "-46.539718409999999",
            "address": "AV HIGIENOPOLIS. 275"
        },
        {
            "name": "POSTO SHELL - CENTRO DE ABAST DE GAS MILENA LTDA",
            "lat": "-23.50680844",
            "lng": "-46.695845009999999",
            "address": "AV OTAVIANO ALVES DE LIMA. 3926"
        },
        {
            "name": "POSTO SHELL - PORTAL DA GUARAPIRANGA AUTO POSTO L",
            "lat": "-23.666218799999999",
            "lng": "-46.714579800000003",
            "address": "AV GUARAPIRANGA. 271"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERV PAZ LTDA",
            "lat": "-23.625558999999999",
            "lng": "-46.708100000000002",
            "address": "R ENG MESQUITA SAMPAIO. 825"
        },
        {
            "name": "POSTO SHELL - POSTO BOLA PESADA LTDA",
            "lat": "-23.612470900000002",
            "lng": "-46.657296000000002",
            "address": "AV MOREIRA GUIMARAES. 700"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NOVO OURO NEGRO LTDA",
            "lat": "-23.666095500000001",
            "lng": "-46.464650849999998",
            "address": "AV JOAO RAMALHO. 446"
        },
        {
            "name": "POSTO SHELL - ASTURIAS AUTO POSTO LTDA",
            "lat": "-23.637797450000001",
            "lng": "-46.72057349",
            "address": "RUA BRAGANCA PAULISTA. 1327"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERV FERNAO DIAS LTDA",
            "lat": "-23.468989730000001",
            "lng": "-46.568629379999997",
            "address": "ROD FERNAO DIAS KM 86. SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GRANERO LTDA",
            "lat": "-23.556086700000002",
            "lng": "-46.649895000000001",
            "address": "R DR PLINIO BARRETO. 31"
        },
        {
            "name": "POSTO SHELL - TURISMO II POSTO DE SERVICOS LTDA",
            "lat": "-23.68056",
            "lng": "-46.599967800000002",
            "address": "AV ANTONIO PIRANGA. 2697"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MULTMAX LTDA",
            "lat": "-23.569552699999999",
            "lng": "-46.508230400000002",
            "address": "AV RIO DAS PEDRAS. 1816"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO REDE LESTE COM COMB LTDA",
            "lat": "-23.549927019999998",
            "lng": "-46.508511540000001",
            "address": "AV WALDEMAR CARLOS PEREIRA. 2176"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MANCINI LTDA",
            "lat": "-23.474485099999999",
            "lng": "-46.530671230000003",
            "address": "AV ANIELLO PRATICI. 20"
        },
        {
            "name": "POSTO SHELL - BELLA LUNA CENTRO AUTOM LTDA",
            "lat": "-23.55485685",
            "lng": "-46.558848939999997",
            "address": "R EMILIA MARENGO. 895"
        },
        {
            "name": "POSTO SHELL - CITY CANTAREIRA AUTO POSTO LTDA",
            "lat": "-23.4580129",
            "lng": "-46.604824899999997",
            "address": "AV MARIA AMALIA L DE AZEVEDO. 976"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO VENCEDOR LTDA",
            "lat": "-23.605560697995301",
            "lng": "-46.509537472886798",
            "address": "AV SAPOPEMBA. 5359"
        },
        {
            "name": "POSTO SHELL - JUVENTUS COM VAREJISTA DE COMB LTDA",
            "lat": "-23.628023899999999",
            "lng": "-46.704385000000002",
            "address": "RUA JOAO ANTONIO DE OLIVEIRA. 108"
        },
        {
            "name": "POSTO SHELL - SOL DOURADO AUTO SERVICE LTDA",
            "lat": "-23.592557760091101",
            "lng": "-46.572694497807497",
            "address": "R CAPITAO PACHECO CHAVES. 685"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CARLU LTDA",
            "lat": "-23.6572584",
            "lng": "-46.717043400000001",
            "address": "AV DAS NACOES UNIDAS. 19467"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CASA GRANDE LTDA",
            "lat": "-23.609107682974201",
            "lng": "-46.662148599727097",
            "address": "AV IRAI 1080 X AV RUBEM BERTA. SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SAINT GERMAIN LTDA",
            "lat": "-23.53015843",
            "lng": "-46.786351369999998",
            "address": "AV DOS AUTONOMISTAS. 3840"
        },
        {
            "name": "POSTO SHELL - TURISMO POSTO DE SERV LTDA",
            "lat": "-23.683812339999999",
            "lng": "-46.63411481",
            "address": "AV PRES KENNEDY. 800"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NOTA MAIOR LTDA",
            "lat": "-23.614896000000002",
            "lng": "-46.502809999999997",
            "address": "AV SAPOPEMBA. 11030"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO O CHEFAO LTDA",
            "lat": "-23.451651999999999",
            "lng": "-46.550730000000001",
            "address": "AV DR TIMOTEO PENTEADO. 2783 A"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NOSSA SRA SALETE LTDA",
            "lat": "-23.679642999999999",
            "lng": "-46.516098",
            "address": "R DAS HORTENCIAS. 346"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CENTER PARAISO LTDA",
            "lat": "-23.572223699999999",
            "lng": "-46.645332699999997",
            "address": "RUA RAFAEL DE BARROS. 137"
        },
        {
            "name": "POSTO SHELL - JOIA DE GUARULHOS P DE SERV LTDA",
            "lat": "-23.463352499999999",
            "lng": "-46.526761899999997",
            "address": "AV TIRADENTES. 1734"
        },
        {
            "name": "POSTO SHELL - PORTAL DO MORUMBI SERV AUTOM",
            "lat": "-23.617287999999999",
            "lng": "-46.705576999999998",
            "address": "AV MORUMBI. 6705"
        },
        {
            "name": "POSTO SHELL - ESCALADA AUTO POSTO LTDA",
            "lat": "-23.64293765",
            "lng": "-46.73808708",
            "address": "EST DE ITAPECERICA.195"
        },
        {
            "name": "POSTO SHELL - POSTO STO ANTONIO LTDA",
            "lat": "-23.972320888211598",
            "lng": "-46.299481689256403",
            "address": "AV SENADOR DANTAS. 75"
        },
        {
            "name": "POSTO SHELL - OITENTA AUTO POSTO LTDA",
            "lat": "-23.671537600000001",
            "lng": "-46.458640699999997",
            "address": "AV CAPITAO JOAO. 614"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ESTACAO ANCHIETA LTDA",
            "lat": "-23.689623000000001",
            "lng": "-46.567563999999997",
            "address": "AV PIRAPORINHA. 108"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO QUATRO TREVO LTDA",
            "lat": "-23.205557209999998",
            "lng": "-45.884398470000001",
            "address": "AV DR NELSON DAVILA. 2160"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO JARDIM SAO PAULO LTDA",
            "lat": "-23.487366000000002",
            "lng": "-46.620377300000001",
            "address": "AV NOVA CANTAREIRA. 428"
        },
        {
            "name": "POSTO SHELL - POSTO BATALHA LTDA",
            "lat": "-23.58088167",
            "lng": "-46.730561489999999",
            "address": "AZEM ABDALLA AZEM. 2600"
        },
        {
            "name": "POSTO SHELL - POSTO ISOLA DERIV DE PETRO LTDA",
            "lat": "-23.548943300000001",
            "lng": "-46.638818200000003",
            "address": "AV ROBERT KENNEDY. 850"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PLACAR LTDA",
            "lat": "-23.563141300000002",
            "lng": "-46.552715300000003",
            "address": "AV DR EDUARDO COTCHING. 833"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO LA CANIZA LTDA",
            "lat": "-23.990093999999999",
            "lng": "-46.286769",
            "address": "AV ADHEMAR DE BARROS. 2795"
        },
        {
            "name": "POSTO SHELL - TALISMA AUTO POSTO LTDA",
            "lat": "-23.673423",
            "lng": "-46.540194999999997",
            "address": "AV HIGIENOPOLIS. 458"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO KM 23 LTDA",
            "lat": "-23.629505300000002",
            "lng": "-46.821381500000001",
            "address": "AV HELIO OSSAMU DAIKUARA. 2445"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO AZZOLINI NETO LTDA",
            "lat": "-23.709337999999999",
            "lng": "-46.711638000000001",
            "address": "AV ROBERTO KENNEDY. 4695"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO JABUCA LTDA",
            "lat": "-23.94176861",
            "lng": "-46.334910100000002",
            "address": "AV DR WALDEMAR LEAO. 280"
        },
        {
            "name": "POSTO SHELL - DTC CENTRO AUTOMOTIVO LTDA",
            "lat": "-23.665185300000001",
            "lng": "-46.451276800000002",
            "address": "AV BARAO DE MAUA. 1150"
        },
        {
            "name": "POSTO SHELL - DUCATI AUTO POSTO LTDA",
            "lat": "-25.391179000000001",
            "lng": "-49.255839999999999",
            "address": "R CLAUDIO PAULINO DARIVA. 304"
        },
        {
            "name": "POSTO SHELL - IMPERIO COM DER PETROLEO LTDA",
            "lat": "-14.850403999999999",
            "lng": "-40.851825499999997",
            "address": "AV BRUMADO. 321"
        },
        {
            "name": "POSTO SHELL - POSTO Z+Z DE COMB GRAVATAI LTDA",
            "lat": "-29.937422000000002",
            "lng": "-51.002786",
            "address": "AV DORIVAL CAND L DE OLIVEIRA. 917"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO BELLAGIO LTDA",
            "lat": "-23.479172299999998",
            "lng": "-46.6729184",
            "address": "AV INAJAR DE SOUZA. 3550"
        },
        {
            "name": "POSTO SHELL - NOVO POSTO CRISTIANO MACHADO EIRELI",
            "lat": "-19.87866592",
            "lng": "-43.928749080000003",
            "address": "AV CRISTIANO MACHADO. 3050"
        },
        {
            "name": "POSTO SHELL - ESPACO JAGUARE SERV AUTOMOT EIRELI",
            "lat": "-23.549620000000001",
            "lng": "-46.738100000000003",
            "address": "AV JAGUARE. 1470"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO REZENDE RECREIO II LTDA",
            "lat": "-23.01749762",
            "lng": "-43.481295019999997",
            "address": "AVENIDA DAS AMERICAS. 17552"
        },
        {
            "name": "POSTO SHELL - PETRO BADY COM COMB LTDA",
            "lat": "-20.8175059",
            "lng": "-49.395444900000001",
            "address": "AV BADY BASSITT. 4600"
        },
        {
            "name": "POSTO SHELL - POSTO PETROSHOP LTDA",
            "lat": "-8.1297712999999998",
            "lng": "-34.910733299999997",
            "address": "AV DESEMBARGADOR JOSE NEVES. 211"
        },
        {
            "name": "POSTO SHELL - POSTO ABREU LTDA",
            "lat": "-22.814013549999999",
            "lng": "-43.073675360000003",
            "address": "RUA MAGALH├ES BASTOS. 3065"
        },
        {
            "name": "POSTO SHELL - POSTOS MAHLE LTDA EPP",
            "lat": "-25.529485000000001",
            "lng": "-48.520392000000001",
            "address": "AV PREFEITO ROQUE VERNALHA. 872"
        },
        {
            "name": "POSTO SHELL - DIAS COMERCIO DE COMB EIRELI",
            "lat": "-7.1136379999999999",
            "lng": "-34.8554247",
            "address": "AV MARANHAO. 665 SALA 101"
        },
        {
            "name": "POSTO SHELL - BEZERRA E BEZERRA LTDA",
            "lat": "-7.0891593999999998",
            "lng": "-34.835446300000001",
            "address": "R FERNANDO LUIZ H SANTOS. 909 SL101"
        },
        {
            "name": "POSTO SHELL - 3L COM DE COMB E LUBRIF LTDA",
            "lat": "-12.913323200000001",
            "lng": "-38.346847799999999",
            "address": "AV CARIBE. SN"
        },
        {
            "name": "POSTO SHELL - EUROPA EMPREENDIMENTOS LTDA",
            "lat": "-22.9613753",
            "lng": "-46.540354299999997",
            "address": "RUA CEL LEME. 499"
        },
        {
            "name": "POSTO SHELL - POSTO IMPERIAL BRACUI LTDA",
            "lat": "-22.929908000000001",
            "lng": "-44.380631000000001",
            "address": "ROD MARIO COVAS. SN KM 113"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PARANA LTDA",
            "lat": "-25.4779394",
            "lng": "-49.294789299999998",
            "address": "RUA ITATIAIA. 320"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PREMIERE LTDA",
            "lat": "-25.435462399999999",
            "lng": "-49.327435199999996",
            "address": "RUA PROF PEDRO VIRIATO P SOUZA. 184"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO COLOSSAL BATEL LTDA",
            "lat": "-25.437815000000001",
            "lng": "-49.292166999999999",
            "address": "AL DR CARLOS DE CARVALHO. 1830"
        },
        {
            "name": "POSTO SHELL - POSTO PORTAL DO SERTAO LTDA",
            "lat": "-12.278637",
            "lng": "-38.928212000000002",
            "address": "ROD BR 324 KM 01. SN"
        },
        {
            "name": "POSTO SHELL - GAZPARK PARTICIPACOES LTDA",
            "lat": "-22.859890709999998",
            "lng": "-43.02827491",
            "address": "AV VISC SANTAREM.651 LTS 1.2 A E B"
        },
        {
            "name": "POSTO SHELL - POSTO ESTACAO CARANDIRU LTDA",
            "lat": "-23.506428469999999",
            "lng": "-46.624128079999998",
            "address": "AV GEN ATALIBA LEONEL. 275"
        },
        {
            "name": "POSTO SHELL - AMPR DERIVADOS DE PETROLEO LTDA",
            "lat": "-12.70407",
            "lng": "-38.307115000000003",
            "address": "AV LESTE LOT JD LIMOEIRO QD 37. SN"
        },
        {
            "name": "POSTO SHELL - POSTO DE ABAST GRANDE AMOR LTDA",
            "lat": "-22.86227933",
            "lng": "-43.543003079999998",
            "address": "ESTR DO MENDANHA. 4081"
        },
        {
            "name": "POSTO SHELL - ALBUQUERQUE PNEUS LTDA",
            "lat": "-7.8491524400000001",
            "lng": "-35.235976180000002",
            "address": "RDV BR 408. SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CHIARELLO COM COMB LTDA",
            "lat": "-27.44652",
            "lng": "-48.502161000000001",
            "address": "AV DAS RAIAS. 261"
        },
        {
            "name": "POSTO SHELL - JSM COMB LTDA",
            "lat": "-12.955416680000001",
            "lng": "-38.468666079999998",
            "address": "AV LUIZ EDUARDO MAGALHAES. 3091"
        },
        {
            "name": "POSTO SHELL - COM DE COMB PINHAIS LTDA",
            "lat": "-25.4280729",
            "lng": "-49.192403900000002",
            "address": "AV MARINGA. 405"
        },
        {
            "name": "POSTO SHELL - COM DE COMB ATUBA LTDA",
            "lat": "-25.3733416",
            "lng": "-49.144579200000003",
            "address": "ROD BR 116 KM 87. S/N"
        },
        {
            "name": "POSTO SHELL - BIRA E BIRA COM DE COMB LTDA",
            "lat": "-25.514284799999999",
            "lng": "-49.2697596",
            "address": "RUA CATARINA GOOSSEN. 496"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NS DA PAZ LTDA",
            "lat": "-25.508632200000001",
            "lng": "-49.228240499999998",
            "address": "R BARTOLOMEU LOURENCO GUSMAO.4569"
        },
        {
            "name": "POSTO SHELL - PIRAQUARA AUTO POSTO LTDA",
            "lat": "-22.878565049999999",
            "lng": "-43.424492630000003",
            "address": "AV MAL FONTENELLE. 5721"
        },
        {
            "name": "POSTO SHELL - ALBUQUERQUE PNEUS LTDA",
            "lat": "-7.515727",
            "lng": "-35.311227000000002",
            "address": "AV DR FERREIRA LIMA. 300"
        },
        {
            "name": "POSTO SHELL - POSTO KALILANDIA LTDA",
            "lat": "-12.86082332",
            "lng": "-38.28683083",
            "address": "ESTR DO COCO KM 09. SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NOVENTA LTDA",
            "lat": "-23.673387099999999",
            "lng": "-46.517712600000003",
            "address": "AV ANDRADE NEVES. 159"
        },
        {
            "name": "POSTO SHELL - POSTO CAPIVARI LTDA",
            "lat": "-22.40565582",
            "lng": "-43.143657259999998",
            "address": "ROD BR 040 KM 61.8. S/N"
        },
        {
            "name": "POSTO SHELL - POSTO OCEANO LTDA",
            "lat": "-19.9180651",
            "lng": "-43.955267900000003",
            "address": "AV DO CONTORNO. 10325"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOM AGUA ESPRAIADA LTDA",
            "lat": "-23.627507000000001",
            "lng": "-46.675601",
            "address": "RUA ZACARIAS DE GOES. 628"
        },
        {
            "name": "POSTO SHELL - ARARA FLUMINENSE COM DE COMBS LTDA",
            "lat": "-21.7542677",
            "lng": "-41.325990999999902",
            "address": "AV ALBERTO TORRES. 100"
        },
        {
            "name": "POSTO SHELL - ARARA FLUMINENSE COM DE COMBS LTDA",
            "lat": "-21.7643421",
            "lng": "-41.3325508",
            "address": "AV VINTE E OITO DE MARÃO. 643"
        },
        {
            "name": "POSTO SHELL - ARARA AZUL REDE DE POSTOS LTDA",
            "lat": "-20.332367600000001",
            "lng": "-40.353569700000001",
            "address": "AV FRANCISCO LACERDA AGUIAR. 530"
        },
        {
            "name": "POSTO SHELL - ARARA AZUL REDE DE POSTOS LTDA",
            "lat": "-20.2911106",
            "lng": "-40.306360900000001",
            "address": "R D MARIA ROSA. 155 POSTO DE GASOLI"
        },
        {
            "name": "POSTO SHELL - ARARA AZUL REDE DE POSTOS LTDA",
            "lat": "-20.274431700000001",
            "lng": "-40.300386699999997",
            "address": "AV FERNANDO FERRARI. 1300"
        },
        {
            "name": "POSTO SHELL - TIC COMERCIO DE COMBUSTIVEIS LTDA",
            "lat": "-12.959337",
            "lng": "-38.472526000000002",
            "address": "ROD BR 324. 1120 ACESSO NORTE"
        },
        {
            "name": "POSTO SHELL - GMX COMERCIO DE DERIV PETROLEO LTDA",
            "lat": "-3.732891",
            "lng": "-38.515189399999997",
            "address": "RUA PINTO MADEIRA. 1131"
        },
        {
            "name": "POSTO SHELL - AUTO CENTER DENDE DA ILHA LTDA",
            "lat": "-22.92925164",
            "lng": "-43.674945309999998",
            "address": "RUA FELIPE CARDOSO. 1975 LOTE 15"
        },
        {
            "name": "POSTO SHELL - ARACI DERIVADOS DE PETROLEO LTDA",
            "lat": "-12.284655000000001",
            "lng": "-38.949527000000003",
            "address": "AV EDUARDO FROES MOTA. 1500"
        },
        {
            "name": "POSTO SHELL - POSTO BEQUIMAO EIRELI",
            "lat": "-2.5060503999999999",
            "lng": "-44.241534600000001",
            "address": "AV DANIEL DE LA TOUCHE. 2"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MARICA LTDA",
            "lat": "-23.510580600000001",
            "lng": "-46.207546200000003",
            "address": "AV ENGENHEIRO EDSON CONSOLMAGNO. 20"
        },
        {
            "name": "POSTO SHELL - COM VAREJISTA DE COMB ROCAR",
            "lat": "-23.8557165",
            "lng": "-46.940570399999999",
            "address": "RDV REGIS BITTENCOURT KM 313 E 314."
        },
        {
            "name": "POSTO SHELL - POSTOS F V V LTDA",
            "lat": "-8.0524623999999996",
            "lng": "-34.871633199999998",
            "address": "AV MILITAR. 550"
        },
        {
            "name": "POSTO SHELL - ARARAS AUTO POSTO LTDA",
            "lat": "-23.524876809999999",
            "lng": "-46.20082463",
            "address": "RUA DR CAMPOS SALLES. 247"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NOVA RADIAL LTDA",
            "lat": "-23.525471",
            "lng": "-46.444704999999999",
            "address": "R RIO BOM. SN"
        },
        {
            "name": "POSTO SHELL - POSTO ICCAR LTDA",
            "lat": "-7.2074501",
            "lng": "-48.2328914",
            "address": "FILADELFIA. 1135 QD 54 LO 4"
        },
        {
            "name": "POSTO SHELL - ABASTECEDORA ABM LTDA",
            "lat": "-30.0447129",
            "lng": "-51.2292366",
            "address": "AV BORGES DE MEDEIROS . 2055"
        },
        {
            "name": "POSTO SHELL - F P PETROLEO LTDA",
            "lat": "-3.7200220000000002",
            "lng": "-38.541401999999998",
            "address": "AV PRES CASTELO BRANCO. 1215"
        },
        {
            "name": "POSTO SHELL - AUTO CENTER DUDUCA LTDA",
            "lat": "-22.879381682279799",
            "lng": "-43.449515672879699",
            "address": "RUA FRANCISCO REAL. 616"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NOBRE LTDA",
            "lat": "-23.5479872752597",
            "lng": "-46.692292904721398",
            "address": "RUA HEITOR PENTEADO. 1645"
        },
        {
            "name": "POSTO SHELL - NT COM DE PETRO LTDA",
            "lat": "-3.7400728000000001",
            "lng": "-38.567780900000002",
            "address": "AV. HUMBERTO MONTE. 2550"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA STAR DA TIJUCA LT",
            "lat": "-22.923187384859499",
            "lng": "-43.450257295554898",
            "address": "RUA SAO FRANCISCO XAVIER. 127"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NOVA CURITIBA LTDA",
            "lat": "-25.512267000000001",
            "lng": "-49.297097999999998",
            "address": "R. MAL. OTAVIO SALDANHA MAZZA. 7585"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERV MONTE CARLO LTDA",
            "lat": "-23.610175699999999",
            "lng": "-46.663865809999997",
            "address": "AL DOS MARACATINS. 1144"
        },
        {
            "name": "POSTO SHELL - POSTO ESTRELA LTDA",
            "lat": "-5.7981498",
            "lng": "-35.23771",
            "address": "RUA FELIZARDO FIRMINO MOURA. 114"
        },
        {
            "name": "POSTO SHELL - PREMIUM COM DE DERIV DE PETRO",
            "lat": "-7.1912459999999996",
            "lng": "-48.224795399999998",
            "address": "AV JOSE DE BRITO SOARES. 1101 QD X"
        },
        {
            "name": "POSTO SHELL - PORTAL DO UMARIZAL AUTO POSTO LTDA",
            "lat": "-23.635694425499199",
            "lng": "-46.772915753149",
            "address": "EST DO CAMPO LIMPO. 5340"
        },
        {
            "name": "POSTO SHELL - ROD OIL COM DE COMB LTDA",
            "lat": "-7.1976681999999998",
            "lng": "-48.193014899999902",
            "address": "AV FILADELFIA. 5561"
        },
        {
            "name": "POSTO SHELL - POSTO DE ABASTE BARRA MONTEIRO LTDA",
            "lat": "-22.923599240000001",
            "lng": "-43.565898900000001",
            "address": "EST DO MONTEIRO. 1697"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA AVENIDA LTDA",
            "lat": "-22.864941999999999",
            "lng": "-43.42154",
            "address": "A BRASIL. 28388"
        },
        {
            "name": "POSTO SHELL - DEM E DEM COMERCIO COMBUSTIVES LTDA",
            "lat": "-15.567556",
            "lng": "-56.060495699999997",
            "address": "AV DEPUTADO MILTON FIGUEIREDO. 645"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO RANGER LTDA",
            "lat": "-23.58867167",
            "lng": "-46.72747167",
            "address": "AV PROF FRANCISCO MORATO. 3061"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO EDROMA LTDA",
            "lat": "-23.665500000000002",
            "lng": "-46.785499999999999",
            "address": "EST DE ITAPECERICA. 5900"
        },
        {
            "name": "POSTO SHELL - FAROL VERDE AUTO POSTO LTDA",
            "lat": "-23.674357000000001",
            "lng": "-46.586990999999998",
            "address": "R GAL BERTOLO KLINGER. 50"
        },
        {
            "name": "POSTO SHELL - MAXI POSTO IV LTDA",
            "lat": "-9.6296166000000003",
            "lng": "-35.698874600000003",
            "address": "AV COMENDADOR GUSTAVO PAIVA. 5790"
        },
        {
            "name": "POSTO SHELL - FENIX COM DE COMB LTDA",
            "lat": "-27.632586799999999",
            "lng": "-52.2772875",
            "address": "R ALEMANHA. 197"
        },
        {
            "name": "POSTO SHELL - REDE LK DE POSTOS LTDA",
            "lat": "-22.335213459999999",
            "lng": "-49.053818790000001",
            "address": "AV NACOES UNIDAS. 28-75"
        },
        {
            "name": "POSTO SHELL - REDE LK DE POSTOS LTDA",
            "lat": "-22.339092999999998",
            "lng": "-49.064064999999999",
            "address": "AV GETULIO VARGAS. 5 20"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NOVA RADIAL LESTE LTDA",
            "lat": "-23.526221",
            "lng": "-46.438380000000002",
            "address": "R DAMASIO PINTO. 805"
        },
        {
            "name": "POSTO SHELL - L S COMERCIO E SERVICOS LTDA",
            "lat": "-2.5701872300000002",
            "lng": "-44.222581130000002",
            "address": "AV LOURENCO VIEIRA DA SILVA. 4"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CAMPOMAR LTDA",
            "lat": "-22.538019179999999",
            "lng": "-41.966979979999998",
            "address": "ROD AMARAL PEIXOTO. SN QD 8 LT 3A5"
        },
        {
            "name": "POSTO SHELL - CACULINHA COMBUSTIVEIS LTDA",
            "lat": "-8.8756456000000004",
            "lng": "-36.473608300000002",
            "address": "R MAL RONDON. S/N ROD BR423 KM 975"
        },
        {
            "name": "POSTO SHELL - CACULINHA COMBUSTIVEIS LTDA",
            "lat": "-8.8907376999999901",
            "lng": "-36.496562599999997",
            "address": "R DOUTOR LUIZ BURGOS. 2194"
        },
        {
            "name": "POSTO SHELL - POSTO KALILANDIA LTDA",
            "lat": "-12.957184399999999",
            "lng": "-38.391965399999997",
            "address": "AV OCTAVIO MANGABEIRA. SN"
        },
        {
            "name": "POSTO SHELL - A POSTO ABAS VITRINE DE CAXIAS LTDA",
            "lat": "-22.785191999999999",
            "lng": "-43.322344399999999",
            "address": "AV NILO PECANHA. 1044"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO JARDIM COLONIAL LTDA",
            "lat": "-23.108737359999999",
            "lng": "-47.231058599999997",
            "address": "AV MANOEL RUZ PERES. 2550"
        },
        {
            "name": "POSTO SHELL - MANAUS COM DE DERIV DE PETROLEO LTD",
            "lat": "-3.0629222399999998",
            "lng": "-60.006843490000001",
            "address": "AV PROF NILTON LINS. 2653"
        },
        {
            "name": "POSTO SHELL - ROTA SUL COM DERIV PETRO LTDA",
            "lat": "-6.0726944999999999",
            "lng": "-35.235058500000001",
            "address": "ROD BR 101 KM 116.2. 1000 LT 4A7"
        },
        {
            "name": "POSTO SHELL - G J G DERIVADOS DE PETROLEO LTDA",
            "lat": "-15.620965",
            "lng": "-56.082723999999999",
            "address": "AV CARMINDO DE CAMPOS. 1621"
        },
        {
            "name": "POSTO SHELL - POSTO KENNEDY RIBEIRANIA LTDA",
            "lat": "-21.21144",
            "lng": "-47.772826999999999",
            "address": "AV PRES KENNEDY. 470"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.431945599999999",
            "lng": "-49.065196999999998",
            "address": "RUA MARECHAL CASTELO BRANCO. 3490"
        },
        {
            "name": "POSTO SHELL - B E M COM DE COMBUST LUBRIFICANTES",
            "lat": "-15.58308255",
            "lng": "-56.111387389999997",
            "address": "AVENIDA MIGUEL SUTIL. 9275"
        },
        {
            "name": "POSTO SHELL - FLEX POSTO LTDA EPP",
            "lat": "-9.6333749999999991",
            "lng": "-35.739747999999999",
            "address": "R JOSE DA SILVEIRA CAMERINO. 469"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.995840999999999",
            "lng": "-48.640093",
            "address": "AV 4A AVENIDA. 700"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SANTA LUZIA ATIBAIA LTDA",
            "lat": "-23.117418000000001",
            "lng": "-46.580193999999999",
            "address": "AV PREF A J DE TOLEDO G LOPES. 21"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO TEMPUS LTDA",
            "lat": "-23.198741999999999",
            "lng": "-45.912193000000002",
            "address": "AV DOUTOR EDUARDO CURY. 700"
        },
        {
            "name": "POSTO SHELL - POSTO ESPACO BOTANICO LTDA",
            "lat": "-21.212594379999999",
            "lng": "-47.796187240000002",
            "address": "AV CARLOS E DE GASPERI CONSONI. 892"
        },
        {
            "name": "POSTO SHELL - POSTO ALPHA DE VOTORANTIM LTDA EPP",
            "lat": "-23.549430000000001",
            "lng": "-47.467959999999998",
            "address": "AV GISELE CONSTANTINO. 400"
        },
        {
            "name": "POSTO SHELL - A L P COM DE COMB LTDA",
            "lat": "-29.689057999999999",
            "lng": "-53.793436",
            "address": "AV NSA SENHORA DAS DORES. 454"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MONTE SERENO",
            "lat": "-21.355913300000001",
            "lng": "-48.085067799999997",
            "address": "AV MONTE SERENO. 935"
        },
        {
            "name": "POSTO SHELL - MS COMERCIO DE COMBUSTIVEIS LTDA",
            "lat": "-28.267391700000001",
            "lng": "-49.175255399999998",
            "address": "AV FELIPE SCHMIDT. 669 SALA 01"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTO ABRAAO DE MORAES LTDA",
            "lat": "-23.624047999999998",
            "lng": "-46.628410000000002",
            "address": "AV PROFESSOR ABRAAO DE MORAIS. 2233"
        },
        {
            "name": "POSTO SHELL - COMERCIAL ALVORADA CENTER LTDA",
            "lat": "-23.958318999999999",
            "lng": "-46.320425",
            "address": "AV AFONSO PENA. 55"
        },
        {
            "name": "POSTO SHELL - AUTO P REDE PERSONALYTTE LTDA EPP",
            "lat": "-24.007955070000001",
            "lng": "-46.412775449999998",
            "address": "R PERNANBUCO. 618"
        },
        {
            "name": "POSTO SHELL - PARAISO COM DER PETROLEO SERV LTDA",
            "lat": "-12.8372794",
            "lng": "-38.277518700000002",
            "address": "EST DO COCO. SN GL 02"
        },
        {
            "name": "POSTO SHELL - BATARA COMERCIO DE PETROLEO LTDA",
            "lat": "-3.08969643",
            "lng": "-60.023923580000002",
            "address": "AV DJALMA BATISTA. 2966"
        },
        {
            "name": "POSTO SHELL - C R POSTO DE GASOLINA LTDA",
            "lat": "-2.5326021999999999",
            "lng": "-44.2262834",
            "address": "AV ITAPIRACO. 01 LT ITAPIRACO"
        },
        {
            "name": "POSTO SHELL - POSTO ARCO IRIS COMBUSTIVEIS LTDA",
            "lat": "-8.1405212099999993",
            "lng": "-35.380740639999999",
            "address": "RODOVIA BR 232 KM 57.20. SN"
        },
        {
            "name": "POSTO SHELL - MANAUS COM DE DERIV DE PETROLEO LTD",
            "lat": "-3.0984060000000002",
            "lng": "-60.063651",
            "address": "AV CORONEL CYRILLO NEVES. 613"
        },
        {
            "name": "POSTO SHELL - POSTO SERV BADEJO DE BERTIOGA LTDA",
            "lat": "-23.816606",
            "lng": "-46.047986999999999",
            "address": "ROD SP 55 BR 101 KM 211. SN"
        },
        {
            "name": "POSTO SHELL - M S PETROLEO LTDA",
            "lat": "-3.8077390000000002",
            "lng": "-38.502037999999999",
            "address": "ROD BR 116 ROD S DUMONT. 2620 KM 7"
        },
        {
            "name": "POSTO SHELL - L S COMERCIO E SERVICOS LTDA",
            "lat": "-2.5529692399999999",
            "lng": "-44.251318640000001",
            "address": "AV DOS FRANCESES. 03"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NOVO GARANTIA BR101 LTDA",
            "lat": "-22.700192900000001",
            "lng": "-42.566179599999998",
            "address": "ROD BR 101 KM 254 8. SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO LINCE TAUBATE LTDA",
            "lat": "-23.00327575",
            "lng": "-45.546033639999997",
            "address": "RUA AMADOR BUENO VEIGA. 1111"
        },
        {
            "name": "POSTO SHELL - FORMULA 1 COM DE COMBUSTIVEIS LTDA",
            "lat": "-23.448716999999998",
            "lng": "-51.943522999999999",
            "address": "PCA LUIZ GONZAGA. 36"
        },
        {
            "name": "POSTO SHELL - M L CUNHA E CIA LTDA",
            "lat": "-23.538507899999999",
            "lng": "-47.185500300000001",
            "address": "AV 27 DE OUTUBRO. 661"
        },
        {
            "name": "POSTO SHELL - POSTO MARTINELLI COM VAREJ COMB LTD",
            "lat": "-23.5247511",
            "lng": "-46.708610899999996",
            "address": "R BARAO DE JUNDIAI. 420"
        },
        {
            "name": "POSTO SHELL - MAXI POSTO BR LTDA",
            "lat": "-9.6269171",
            "lng": "-35.716607400000001",
            "address": "JUCA SAMPAIO. 2179"
        },
        {
            "name": "POSTO SHELL - KOBAYACHI AUTO POSTO LTDA",
            "lat": "-23.6078765",
            "lng": "-47.0346251",
            "address": "ROD BUNJIRO NAKAO. 45685"
        },
        {
            "name": "POSTO SHELL - POSTO RIO CLARO CENTER SHOPPING LTD",
            "lat": "-22.411210000000001",
            "lng": "-47.555909999999997",
            "address": "RUA 1B. 32"
        },
        {
            "name": "POSTO SHELL - RPA COM DE COMB PIRACICABA II LTDA",
            "lat": "-22.68985678",
            "lng": "-47.673042770000002",
            "address": "AV CRISTOVAO COLOMBO. 2088"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO G4 LTDA",
            "lat": "-23.663329999999998",
            "lng": "-46.482500000000002",
            "address": "AV JOAO RAMALHO. 1504 B"
        },
        {
            "name": "POSTO SHELL - ATHENA COMERCIO DE COMBUSTIVEIS LTD",
            "lat": "-23.280902999999999",
            "lng": "-51.149062999999998",
            "address": "R ANTONIO DOMINGUES DE OLIVEIRA. 71"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO 2 IRMAOS LTDA",
            "lat": "-9.5480389999999993",
            "lng": "-35.786636999999999",
            "address": "LOURIVAL MELO MOTA. 13930"
        },
        {
            "name": "POSTO SHELL - DIST DE DERIV DE PET PREDILETO LTDA",
            "lat": "-3.9293608",
            "lng": "-38.608364100000003",
            "address": "CE 060. KM 25"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MAXIMO DE BAURU LTDA",
            "lat": "-22.334053999999998",
            "lng": "-49.046447999999998",
            "address": "RUA PE F VAN DER MAAS. 8 28"
        },
        {
            "name": "POSTO SHELL - LUA PETROLEO LTDA",
            "lat": "-3.8798919999999999",
            "lng": "-38.460388999999999",
            "address": "ROD CE 040 KM 06. SN"
        },
        {
            "name": "POSTO SHELL - POSTO INDEPENDENCIA LTDA",
            "lat": "-16.462161099999999",
            "lng": "-54.625552399999997",
            "address": "AV RUI BARBOSA. 2271"
        },
        {
            "name": "POSTO SHELL - P DE GASOLINA E SER RECREIO 2009 LT",
            "lat": "-23.015899659999999",
            "lng": "-43.470199579999999",
            "address": "AV DAS AMERICAS. 16885"
        },
        {
            "name": "POSTO SHELL - AUTO SERVICO MANGUEIRINHA LTDA",
            "lat": "-22.886091799999999",
            "lng": "-43.5581411",
            "address": "ETR DO MENDANHA. 356"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PESSEGO LTDA",
            "lat": "-23.551753000000001",
            "lng": "-46.445278999999999",
            "address": "R SABBADO D ANGELO. 2134"
        },
        {
            "name": "POSTO SHELL - A POSTO PAISAGEM DO M BOI MIRIM LTD",
            "lat": "-23.677603999999999",
            "lng": "-46.761125",
            "address": "EST DO M BOI MIRIM. 3095"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA PASSIONE LTDA",
            "lat": "-22.784431139999999",
            "lng": "-43.429732469999998",
            "address": "RUA PRESIDENTE COSTA E SILVA. 1846"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERVICOS MARIA BONITA LTDA",
            "lat": "-23.45324467",
            "lng": "-46.555365209999998",
            "address": "AV DOUTOR TIMOTEO PENTEADO. 3298"
        },
        {
            "name": "POSTO SHELL - POSTO KALILANDIA LTDA",
            "lat": "-12.88256",
            "lng": "-38.314689999999999",
            "address": "RODOVIA BA 099. SN KM 3 8"
        },
        {
            "name": "POSTO SHELL - MAXI POSTO V LTDA",
            "lat": "-9.6368861999999993",
            "lng": "-35.736529300000001",
            "address": "FERNANDES LIMA. 1579"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GOPOUVA LTDA",
            "lat": "-23.465862300000001",
            "lng": "-46.547393100000001",
            "address": "AV. EMILIO RIBAS .1502"
        },
        {
            "name": "POSTO SHELL - POSTO 26 LTDA",
            "lat": "-5.3456777000000004",
            "lng": "-49.101178689999998",
            "address": "QUA 10 FOLHA 26. SN LOTE B"
        },
        {
            "name": "POSTO SHELL - POSTO HADOCK LOBO LTDA",
            "lat": "-22.921531680000001",
            "lng": "-43.22048187",
            "address": "RUA HADDOCK LOBO .438"
        },
        {
            "name": "POSTO SHELL - RIO MARACANA POSTO DE GASOLINA LTDA",
            "lat": "-22.921340369999999",
            "lng": "-43.235664319999998",
            "address": "RUA RIBEIRO GUIMARAES .20"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO BOA VISTA LTDA",
            "lat": "-22.960553116001901",
            "lng": "-43.260849951212997",
            "address": "R BOA VISTA. 23"
        },
        {
            "name": "POSTO SHELL - ROCAL PRODUTOS DE PETROLEO LTDA.",
            "lat": "-22.9566968",
            "lng": "-43.187488700000003",
            "address": "RUA GENERAL POLIDORO .224"
        },
        {
            "name": "POSTO SHELL - POSTO JARDIM UBA LTDA",
            "lat": "-22.937746050000001",
            "lng": "-43.061916349999997",
            "address": "ETR FRANCISCO DA CRUZ NUNES. 5874"
        },
        {
            "name": "POSTO SHELL - POSTO MONZA LTDA",
            "lat": "-22.944754199999998",
            "lng": "-43.035097399999998",
            "address": "ESTRADA DE ITAIPU. 2314"
        },
        {
            "name": "POSTO SHELL - A O LESSA",
            "lat": "-22.885932",
            "lng": "-42.029299999999999",
            "address": "AV TEIXEIRA E SOUZA. SN"
        },
        {
            "name": "POSTO SHELL - POSTO DE GAS.E SERVICO ZBY LTDA",
            "lat": "-22.871978697647801",
            "lng": "-43.350720132828101",
            "address": "ESTRADA INTENDENTE MAGALHAES. 75"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PISTAO LTDA.",
            "lat": "-22.927101140000001",
            "lng": "-43.361164090000003",
            "address": "ESTRADA DO TINDIBA .530"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA MATO ALTO LTDA.",
            "lat": "-22.910869600000002",
            "lng": "-43.360412599999997",
            "address": "RUA CANDIDO BENICIO .3530"
        },
        {
            "name": "POSTO SHELL - POSTO DE GAS.SANTAREM LTDA.",
            "lat": "-22.843942999999999",
            "lng": "-43.374727",
            "address": "AV .BRASIL .22815"
        },
        {
            "name": "POSTO SHELL - POSTO GAS SERV NOVA VALQUEIRE LTDA",
            "lat": "-22.884387",
            "lng": "-43.373346050000002",
            "address": "AV JAMBEIRO. 955"
        },
        {
            "name": "POSTO SHELL - POSTO QUINZE DE COMBUSTIVEIS LTDA",
            "lat": "-22.801665969999998",
            "lng": "-43.42048466",
            "address": "AV.GETULIO DE MOURA .2385"
        },
        {
            "name": "POSTO SHELL - POSTO DE COMBUSTIVEIS JALISCO LTDA",
            "lat": "-22.465676800000001",
            "lng": "-43.828899499999999",
            "address": "RUA ANGELICA .127"
        },
        {
            "name": "POSTO SHELL - POSTO SANTA AMALIA LTDA",
            "lat": "-22.410088999999999",
            "lng": "-43.671075000000002",
            "address": "AV SEBASTIAO MANOEL FURTADO .969"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SENNA LTDA",
            "lat": "-20.857002000000001",
            "lng": "-41.121386000000001",
            "address": "AV FRANCISCO LACERDA DE AGUIAR. 350"
        },
        {
            "name": "POSTO SHELL - COM PETROL DERIV CONDES R NOVO LTDA",
            "lat": "-22.115022",
            "lng": "-43.203679000000001",
            "address": "R BARBOSA DE ANDRADE. 242"
        },
        {
            "name": "POSTO SHELL - KRUK E LOPES LTDA",
            "lat": "-2.6115000199999998",
            "lng": "-44.250968929999999",
            "address": "AVE ENG EMILIANO MACIEIRA. 13 KM 3"
        },
        {
            "name": "POSTO SHELL - PORTOS EMPREENDIMENTOS LTDA ME",
            "lat": "-2.5436095000000001",
            "lng": "-44.289245700000002",
            "address": "AVE JAIME TAVARES. 110"
        },
        {
            "name": "POSTO SHELL - KING PETROLEO LTDA",
            "lat": "-5.0802274000000001",
            "lng": "-42.790810200000003",
            "address": "AVENIDA JOAO XXIII. 805"
        },
        {
            "name": "POSTO SHELL - ALENCAR E RIBEIRO PETROLEO LTDA",
            "lat": "-5.1077691999999999",
            "lng": "-42.808514600000002",
            "address": "AV BARAO DE GURGUEIA. 1852"
        },
        {
            "name": "POSTO SHELL - MACK VIII COM DE DERIV DE PETRO LTD",
            "lat": "-3.740402",
            "lng": "-38.525306",
            "address": "AV AGUANHAMBI. 384"
        },
        {
            "name": "POSTO SHELL - HN COMERCIAL DE PETROLEO LTDA.",
            "lat": "-3.7502149999999999",
            "lng": "-38.528052000000002",
            "address": "AV. 13 DE MAIO .980"
        },
        {
            "name": "POSTO SHELL - BEZERRA E BEZERRA LTDA",
            "lat": "-3.7682730000000002",
            "lng": "-38.552312000000001",
            "address": "TRAVESSA MONTESE. 50"
        },
        {
            "name": "POSTO SHELL - JANGADA COM COMB LTDA",
            "lat": "-3.7269207999999998",
            "lng": "-38.497094099999998",
            "address": "AV DA ABOLICAO. 2432"
        },
        {
            "name": "POSTO SHELL - COMERCIO DE PETROLEO MP LTDA",
            "lat": "-3.7894399999999999",
            "lng": "-38.510649999999998",
            "address": "ROD BR 116 KM 4 2. 356"
        },
        {
            "name": "POSTO SHELL - UNIVERSO PETROLEO LTDA",
            "lat": "-3.7533932000000001",
            "lng": "-38.520523500000003",
            "address": "AV VISC RIO BRANCO. 3675"
        },
        {
            "name": "POSTO SHELL - J MARCOS ALVES TRINDADE E CIA LTDA",
            "lat": "-16.372305099999998",
            "lng": "-39.580763699999999",
            "address": "AV LUIZ EDUARDO MAGALHAES. 376"
        },
        {
            "name": "POSTO SHELL - GRL ORGANIZACAO REV COMBS LUBS LTDA",
            "lat": "-12.9549688",
            "lng": "-38.475072300000001",
            "address": "AV BARROS REIS. 3132"
        },
        {
            "name": "POSTO SHELL - POSTO CHAME CHAME COM SERV COMB LTD",
            "lat": "-13.005653499999999",
            "lng": "-38.522509100000001",
            "address": "R COMEND FRANCISCO PEDREIRA. 131"
        },
        {
            "name": "POSTO SHELL - COMBUSTIVEL FJT EIRELI",
            "lat": "-17.348955",
            "lng": "-44.946604000000001",
            "address": "PC PRES TANCREDO NEVES .10"
        },
        {
            "name": "POSTO SHELL - LORENTZ LAMEGO COMBUSTIVEIS LTDA",
            "lat": "-17.858713399999999",
            "lng": "-41.515038500000003",
            "address": "AV ALFREDO SA. 2894"
        },
        {
            "name": "POSTO SHELL - MAXXI COME DE DERIV DE PETROLEO LTD",
            "lat": "-15.852245",
            "lng": "-47.955680000000001",
            "address": "SPMS EPIA CONJUNTO F LOTE 05ST . SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO AVENIDA DOS ESTADOS LTDA",
            "lat": "-23.637658550000001",
            "lng": "-46.534128629999998",
            "address": "AVENIDA DOS ESTADOS. 1586"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO DIAS LTDA",
            "lat": "-23.673439999999999",
            "lng": "-46.527000000000001",
            "address": "RUA REGENTE FEIJO. 428"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOM. NOVO S.BERNARDO LTDA.",
            "lat": "-23.698661049999998",
            "lng": "-46.549821459999997",
            "address": "RUA DOS VIANAS. 21"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MELIDE LTDA",
            "lat": "-23.574203099999998",
            "lng": "-46.6039283",
            "address": "RUA CONEGO JANUARIO. 357"
        },
        {
            "name": "POSTO SHELL - CAMBUCI AUTO POSTO LTDA.",
            "lat": "-23.563654400000001",
            "lng": "-46.620738600000003",
            "address": "LARGO DO CAMBUCI. 172"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO FIANDEIRAS LTDA",
            "lat": "-23.597468670000001",
            "lng": "-46.674175439999999",
            "address": "AV SANTO AMARO. 1510"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO JORUHI LTDA",
            "lat": "-23.59541291",
            "lng": "-46.669415469999997",
            "address": "R AFONSO BRAS. 603"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERVICO CCS LTDA",
            "lat": "-23.550790620000001",
            "lng": "-46.533101690000002",
            "address": "AV.CONSELHEIRO CARRAO .3002"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO M A LTDA",
            "lat": "-23.558765999999999",
            "lng": "-46.521186800000002",
            "address": "AV. RIO DAS PEDRAS. 35"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO LINCE DO VALE EIRELI",
            "lat": "-23.022116130000001",
            "lng": "-45.556667070000003",
            "address": "AV GRANADEIRO GUIMARAES. 359"
        },
        {
            "name": "POSTO SHELL - SCOFANO E SCOFANO LTDA",
            "lat": "-22.744465909999999",
            "lng": "-45.599783219999999",
            "address": "AVENIDA DR JANUARIO MIRAGLIA. 240"
        },
        {
            "name": "POSTO SHELL - MISSIANY FREIRE FIGUEIREDO",
            "lat": "-23.532831099999999",
            "lng": "-46.657708300000003",
            "address": "AV GAL OLIMPIO DA SILVEIRA. 105"
        },
        {
            "name": "POSTO SHELL - POSTO PUMA EIRELI ME",
            "lat": "-23.281602800000002",
            "lng": "-47.279440000000001",
            "address": "AV EUGEN WISSMANN. 55"
        },
        {
            "name": "POSTO SHELL - PALMA E CIA LTDA",
            "lat": "-20.722765299999999",
            "lng": "-47.893979799999997",
            "address": "RUA UM. 700"
        },
        {
            "name": "POSTO SHELL - JOSIMAR D LOURENCO RIBEIRAO PRETO",
            "lat": "-21.188581450000001",
            "lng": "-47.798110399999999",
            "address": "AVENIDA FRANCISCO JUNQUEIRA. 2640"
        },
        {
            "name": "POSTO SHELL - ATLANTA ROTA SHOPPING COM COMB EIRE",
            "lat": "-21.209728200000001",
            "lng": "-50.456499999999998",
            "address": "AV GOVERNADOR MARIO COVAS. 3601"
        },
        {
            "name": "POSTO SHELL - M.H.SILVA PEREIRA",
            "lat": "-22.354523189999998",
            "lng": "-48.774956879999998",
            "address": "AV.TIRADENTES .S-276"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA SHANGHAI LTDA",
            "lat": "-30.081969999999998",
            "lng": "-51.211979999999997",
            "address": "AV TERESOPOLIS. 3368"
        },
        {
            "name": "POSTO SHELL - POSTO DUEVILLE II LTDA",
            "lat": "-30.014077199999999",
            "lng": "-51.203891400000003",
            "address": "AV FARRAPOS. 2099"
        },
        {
            "name": "POSTO SHELL - POSTO DUEVILLE LTDA",
            "lat": "-29.992016199999998",
            "lng": "-51.126709099999999",
            "address": "AV ASSIS BRASIL. 6853"
        },
        {
            "name": "POSTO SHELL - HEMISFERIO ABAST DE COMB LTDA",
            "lat": "-29.952658599999999",
            "lng": "-51.176172100000002",
            "address": "AV GETULIO VARGAS. 1623"
        },
        {
            "name": "POSTO SHELL - COML SULINA DERIV PETROLEO LTDA",
            "lat": "-29.81409167",
            "lng": "-51.168422219999997",
            "address": "BR 116 KM 252. 1826"
        },
        {
            "name": "POSTO SHELL - COML DE COMB XV DE NOVEMBRO LTDA",
            "lat": "-29.591062999999998",
            "lng": "-50.803688000000001",
            "address": "AV PRES TANCR A NEVES RS115 .7009"
        },
        {
            "name": "POSTO SHELL - ABASTECEDORA DE COMB E L G LTDA",
            "lat": "-28.500594570000001",
            "lng": "-50.950604560000002",
            "address": "AV MILITAR. 2484"
        },
        {
            "name": "POSTO SHELL - ABASTECEDORA COMBUST. ZAMBOM LTDA",
            "lat": "-29.147041000000002",
            "lng": "-51.528615000000002",
            "address": "AV SAO ROQUE .514"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO COMBOIO LTDA",
            "lat": "-29.1680876",
            "lng": "-51.195124",
            "address": "AV JULIO DE CASTILHOS. 3221"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERV PAULO MOREIRA LTDA",
            "lat": "-31.7609283",
            "lng": "-52.340749099999996",
            "address": "RUA GEN OSORIO. 1037"
        },
        {
            "name": "POSTO SHELL - ABAST PAULO MOREIRA LTDA",
            "lat": "-31.740012929999999",
            "lng": "-52.343989980000003",
            "address": "AV FERNANDO OSORIO. 1160"
        },
        {
            "name": "POSTO SHELL - MP POSTOS E LOGISTICA LTDA ME",
            "lat": "-28.296727000000001",
            "lng": "-52.797218999999998",
            "address": "AV FLORES DA CUNHA. 2962"
        },
        {
            "name": "POSTO SHELL - COML DE COMB NERY MACHADO LTDA",
            "lat": "-29.1899041",
            "lng": "-54.8625075",
            "address": "RUA 13 DE MAIO. 2034"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SANTO ANJO LTDA",
            "lat": "-28.486731800000001",
            "lng": "-49.012832799999998",
            "address": "RUA RUI BARBOSA. 388"
        },
        {
            "name": "POSTO SHELL - POSTO COELHO LTDA",
            "lat": "-27.390985709999999",
            "lng": "-51.216612079999997",
            "address": "AV PRESIDENTE J K. 964"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.921403999999999",
            "lng": "-48.708193999999999",
            "address": "ROD BR101 KM 121. 8925"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.914546680000001",
            "lng": "-49.07054892",
            "address": "RUA SAO PAULO. 121"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO UNIAO LTDA",
            "lat": "-27.242823520000002",
            "lng": "-48.638098489999997",
            "address": "AV BAYER FILHO. 1205"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-27.102111799999999",
            "lng": "-48.9164417",
            "address": "AV LAURO MULLER. 149"
        },
        {
            "name": "POSTO SHELL - COML DE COMBUSTIVEIS NOROESTE LTDA",
            "lat": "-23.081393330000001",
            "lng": "-52.446244040000003",
            "address": "R DEP.HEITOR ALENCAR FURTADO. 5552"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MUFFATO LTDA",
            "lat": "-23.301758700000001",
            "lng": "-51.173226100000001",
            "address": "R QUINTINO BOCAIUVA. 1358 TERREO"
        },
        {
            "name": "POSTO SHELL - TIGRAO COMERCIO COMBUSTIVEIS LTDA",
            "lat": "-26.219806800000001",
            "lng": "-52.672549799999999",
            "address": "AV TUPY. 1611"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO VALIATI LTDA",
            "lat": "-25.277426699999999",
            "lng": "-54.073458899999999",
            "address": "AV 24 DE OUTUBRO .1940"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA DO LAGO LTDA",
            "lat": "-24.856504000000001",
            "lng": "-54.333745999999998",
            "address": "AV BRASIL. 1161"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO L B CAPANEMA LTDA",
            "lat": "-25.43843",
            "lng": "-49.251269000000001",
            "address": "R ENGENHEIROS REBOUCAS. 520"
        },
        {
            "name": "POSTO SHELL - POSTO ALVES DA ROCHA LTDA",
            "lat": "-25.529105000000001",
            "lng": "-49.202365999999998",
            "address": "RUA JOAQUIM NABUCO. 1643"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SANTA PAULINA LTDA",
            "lat": "-25.541154800000001",
            "lng": "-49.192383700000001",
            "address": "R.XV DE NOVEMBRO C.POST 242 .2952"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PELANDA LTDA",
            "lat": "-25.656286399999999",
            "lng": "-49.310831299999997",
            "address": "ROD BR 116 KM 128. SN"
        },
        {
            "name": "POSTO SHELL - R A PUPPI E CIA LTDA",
            "lat": "-25.293322",
            "lng": "-49.223737999999997",
            "address": "R.FRANCISCO BUSATO. 8049"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NUELLE LTDA",
            "lat": "-25.781269399999999",
            "lng": "-49.325784900000002",
            "address": "R FRANCISCO ARI CLAUDINO. 293"
        },
        {
            "name": "POSTO SHELL - COMERCIO DE COMB CONCHA DE OURO LTD",
            "lat": "-25.3959574",
            "lng": "-49.346716100000002",
            "address": "AV MANOEL RIBAS. 8051"
        },
        {
            "name": "POSTO SHELL - ALADIN POSTO ABASTEC SERVICOS LTDA",
            "lat": "-25.418392999999998",
            "lng": "-49.348311000000002",
            "address": "RUA VER TOALDO TULIO. 3299"
        },
        {
            "name": "POSTO SHELL - POSTO SERVICO PORTAL DO VALE LTDA",
            "lat": "-23.29830917",
            "lng": "-45.967511430000002",
            "address": "AV NOVE DE JULHO .696"
        },
        {
            "name": "POSTO SHELL - TASCA AUTO POSTO LTDA",
            "lat": "-22.952905489999999",
            "lng": "-46.547263809999997",
            "address": "AV DOS IMIGRANTES. 2171"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MUFFATO LTDA",
            "lat": "-24.032861799999999",
            "lng": "-52.366928999999999",
            "address": "AV MANOEL MENDES DE CAMARGO. 2910"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO COPA OURO LTDA",
            "lat": "-25.511662080000001",
            "lng": "-49.33208449",
            "address": "R JOAO BETTEGA. 6115"
        },
        {
            "name": "POSTO SHELL - TROPICAL GAS SERV AUTOMOTIVOS LTDA",
            "lat": "-23.552603000000001",
            "lng": "-46.623764199999997",
            "address": "AV ALCANTARA MACHADO. 360"
        },
        {
            "name": "POSTO SHELL - BATALHA 1000 POSTO E SERVICOS LTDA",
            "lat": "-22.908599850000002",
            "lng": "-43.067798609999997",
            "address": "AV RUI BARBOSA .1000"
        },
        {
            "name": "POSTO SHELL - ABASTECEDORA DE COMBS TW LTDA",
            "lat": "-29.721359",
            "lng": "-52.435474999999997",
            "address": "R SEN PINHEIRO MACHADO. 1367"
        },
        {
            "name": "POSTO SHELL - POSTO SUPER TIGRE LTDA",
            "lat": "-21.57991556",
            "lng": "-45.442363380000003",
            "address": "AV PRINCESA DO SUL .1100"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MAJOR MATHEUS LTDA",
            "lat": "-22.873697",
            "lng": "-48.446590999999998",
            "address": "RUA GALVAO SEVERINO. 200"
        },
        {
            "name": "POSTO SHELL - ARCO VERDE COM SERV COMB LUB LTDA",
            "lat": "-23.564166669999999",
            "lng": "-46.415555560000001",
            "address": "AV RAGUEB CHOHFI. 8828"
        },
        {
            "name": "POSTO SHELL - FABIO MOTTA MARQUES",
            "lat": "-23.520681",
            "lng": "-46.555053899999997",
            "address": "AV CONDESSA ELIZABETH ROBIANO. 2222"
        },
        {
            "name": "POSTO SHELL - SABELLA & SABELLA LTDA",
            "lat": "-22.915382999999999",
            "lng": "-46.549543999999997",
            "address": "AV DR PLINIO SALGADO. 5701"
        },
        {
            "name": "POSTO SHELL - CENTRO CONVENIENCIAS FALEIRO LTDA",
            "lat": "-29.460138100000002",
            "lng": "-51.967355300000001",
            "address": "R JULIO DE CASTILHOS. 1348"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PARAQUEDA LTDA",
            "lat": "-22.417227",
            "lng": "-47.568578000000002",
            "address": "RUA 14. 603"
        },
        {
            "name": "POSTO SHELL - PETROARCOS AUTOPOSTO LTDA",
            "lat": "-20.295572799999999",
            "lng": "-45.5395319",
            "address": "AV MAGALHAES PINTO. 850"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.246300999999999",
            "lng": "-48.633465700000002",
            "address": "AV BARAO RIO BRANCO. 731"
        },
        {
            "name": "POSTO SHELL - ITAPARICA PETROLEO E COMERCIO LTDA",
            "lat": "-20.357330319999999",
            "lng": "-40.293861390000004",
            "address": "AV PROF FRANCELINA C SETUBAL .SN"
        },
        {
            "name": "POSTO SHELL - ORGANIZACAO COML GUIMARAES LTDA",
            "lat": "-20.075665300000001",
            "lng": "-44.5798816",
            "address": "AV JOVE SOARES. 845"
        },
        {
            "name": "POSTO SHELL - PIO XII COMBUSTIVEIS LTDA",
            "lat": "-19.9356662",
            "lng": "-44.0329318",
            "address": "AV PIO XII. 45"
        },
        {
            "name": "POSTO SHELL - NEWS SHOPPING PONTA D AREIA LTDA",
            "lat": "-2.4891166",
            "lng": "-44.250254699999999",
            "address": "AV DOS HOLANDESES Q 22 LT 01. SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ROSANGELA LTDA",
            "lat": "-22.302099999999999",
            "lng": "-48.572800000000001",
            "address": "AV ANA CLAUDINA. 700"
        },
        {
            "name": "POSTO SHELL - ENZO ITAIPAVA LTDA",
            "lat": "-22.405684999999998",
            "lng": "-43.136443999999997",
            "address": "ESTRADA UNIAO INDUSTRIAL. 9429"
        },
        {
            "name": "POSTO SHELL - RADJA COM COMB CONVENIENCIA LTDA",
            "lat": "-25.486484999999998",
            "lng": "-49.273609",
            "address": "R MTRO FRANCISCO ANTONELLO. 1966"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ARRASTAO LTDA",
            "lat": "-22.871032",
            "lng": "-43.004103000000001",
            "address": "AV DR EUGENIO BORGES KM 03 .SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO META LINEAR LTDA",
            "lat": "-26.905298999999999",
            "lng": "-49.075471999999998",
            "address": "AV MARTIN LUTHER. 1112"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO BAILER LTDA",
            "lat": "-26.91111944",
            "lng": "-49.089472219999998",
            "address": "RUA ALMIRANTE TAMANDARE. 888"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GASOL.PORTELA DOIS LTDA.",
            "lat": "-22.892199999999999",
            "lng": "-43.6723",
            "address": "AV. BRASIL .51201"
        },
        {
            "name": "POSTO SHELL - BEGNINI COMERCIO DE COMBUST EIRELI",
            "lat": "-25.3804467",
            "lng": "-51.469926100000002",
            "address": "AVENIDA MANOEL RIBAS. 2760"
        },
        {
            "name": "POSTO SHELL - MEX COMBUSTIVEIS LTDA",
            "lat": "-25.536708099999998",
            "lng": "-49.206684199999998",
            "address": "R IZABEL A REDENTORA. 1200"
        },
        {
            "name": "POSTO SHELL - POSTO ESTORIL LTDA",
            "lat": "-19.972272499999999",
            "lng": "-43.967199099999903",
            "address": "AVE PROFESSOR MARIO WERNECK. 1910"
        },
        {
            "name": "POSTO SHELL - POSTO AVENIDA DAS COMUNID EIRELI",
            "lat": "-26.930851799999999",
            "lng": "-48.959875500000003",
            "address": "AV DAS COMUNIDADES. 990"
        },
        {
            "name": "POSTO SHELL - HAVAN AUTO CENTER LTDA",
            "lat": "-27.098492100000001",
            "lng": "-48.904916499999999",
            "address": "ROD. ANTONIO HEIL KM 29. SN"
        },
        {
            "name": "POSTO SHELL - L E COMERCIO DE COMBUSTIVEIS LTDA",
            "lat": "-26.9053957",
            "lng": "-49.075694400000003",
            "address": "RUA 2 DE SETEMBRO. 3255"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-27.0257299424126",
            "lng": "-48.599495308686699",
            "address": "AV HERMOGENES DE ASSIS FEIJO. 2100"
        },
        {
            "name": "POSTO SHELL - LINEO FERNANDES DE SOUZA E CIA LTDA",
            "lat": "-29.154361000000002",
            "lng": "-51.168725999999999",
            "address": "RUA JOSE ALOYSIO BRUGGER. 1333"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO RODO TREVO LTDA",
            "lat": "-22.116091730000001",
            "lng": "-43.198826570000001",
            "address": "AV. CONDESSA DO RIO NOVO .760"
        },
        {
            "name": "POSTO SHELL - KALAHAN COMERCIO COMBUSTIVEIS LTDA.",
            "lat": "-23.258662399999999",
            "lng": "-51.158249699999999",
            "address": "AV.SAUL ELKIND .2100"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ST AMARO IMPERATRIZ LTDA",
            "lat": "-27.685511529999999",
            "lng": "-48.741534799999997",
            "address": "R PEDRO NERI SCHWINDEN. SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO 100% VALINHOS LTDA",
            "lat": "-22.956662519999998",
            "lng": "-46.985819309999997",
            "address": "RODOVIA FLAVIO DE CARVALHO. 759"
        },
        {
            "name": "POSTO SHELL - POSTO REPUBLICA DIST DERIV PETROL",
            "lat": "-31.738958",
            "lng": "-52.327973999999998",
            "address": "AV PRES JUSCELINO K OLIVEIRA. 5240"
        },
        {
            "name": "POSTO SHELL - NOVO MILENIO COMERCIO COMBUST LTDA",
            "lat": "-23.555426199999999",
            "lng": "-46.446216900000003",
            "address": "RUA TOME ALVARES DE CASTRO. 45"
        },
        {
            "name": "POSTO SHELL - POSTO BALUARTE DE COMBUSTIVEIS LTDA",
            "lat": "-7.16891169999999",
            "lng": "-35.855585099999999",
            "address": "RODOVIA BR 104. SN KM 16"
        },
        {
            "name": "POSTO SHELL - POSTO PORTAL DO SOLAR LTDA",
            "lat": "-25.3936478",
            "lng": "-49.228216600000003",
            "address": "AV PREF ERASTO GAERTNER. 2220"
        },
        {
            "name": "POSTO SHELL - POSTO SAO BENTO SUL-COM. COMB. LTDA",
            "lat": "-29.173492",
            "lng": "-51.520710000000001",
            "address": "R.10 NOVEMBRO(C.TRAV.CARAZINHO) .24"
        },
        {
            "name": "POSTO SHELL - ELIANE STANG HUNING",
            "lat": "-26.073711599999999",
            "lng": "-53.040380499999998",
            "address": "R UNIAO DA VITORIA. 1635"
        },
        {
            "name": "POSTO SHELL - W L COMERCIO DE COMBUSTIVEIS LTDA",
            "lat": "-12.93982731",
            "lng": "-38.431517479999997",
            "address": "AV ULYSSES GUIMARAES. 4538"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CLEAN CAR LTDA",
            "lat": "-9.6113420000000005",
            "lng": "-35.718791000000003",
            "address": "AV MENINO MARCELO. 10601"
        },
        {
            "name": "POSTO SHELL - COMERCIO DE COMBS CHANCELLER LTDA",
            "lat": "-24.333922130000001",
            "lng": "-50.625171999999999",
            "address": "AV.CHANCELLER HORACIO LAFFER. SN"
        },
        {
            "name": "POSTO SHELL - POSTO 44 PARANAGUA COM COMB LTDA",
            "lat": "-25.565142000000002",
            "lng": "-48.629116699999997",
            "address": "AV AYRTON SENNA DA SILVA. 5344"
        },
        {
            "name": "POSTO SHELL - GAIVOTA SERVICOS AUTOMOTIVOS LTDA",
            "lat": "-23.607282999999999",
            "lng": "-46.67071",
            "address": "AV COTOVIA. 555"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PATINHO FEIO LTDA",
            "lat": "-22.926500000000001",
            "lng": "-43.246499999999997",
            "address": "RUA BARAO DE MESQUITA. 707"
        },
        {
            "name": "POSTO SHELL - POSTO FAGUNDAO LTDA",
            "lat": "-22.900244010000002",
            "lng": "-43.1125531",
            "address": "RUA FAGUNDES VARELA. 594"
        },
        {
            "name": "POSTO SHELL - POSTO PALACIO GUANABARA LTDA",
            "lat": "-22.93576431",
            "lng": "-43.183967590000002",
            "address": "R.PINHEIRO MACHADO .83"
        },
        {
            "name": "POSTO SHELL - OVIDIO DA SILVEIRA GASPARETTO COM",
            "lat": "-1.444453",
            "lng": "-48.475929999999998",
            "address": "RUA DOMINGOS MARREIROS .1402"
        },
        {
            "name": "POSTO SHELL - CAUIPE REVENDEDORA DE PETROLEO LTDA",
            "lat": "-3.7946342999999998",
            "lng": "-38.533285800000002",
            "address": "AV DEDE BRASIL. 1530"
        },
        {
            "name": "POSTO SHELL - CHAC COM DE COMBUSTIVEIS LTDA",
            "lat": "-3.820932",
            "lng": "-38.557680499999996",
            "address": "AV PRES COSTA E SILVA. 2721"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO TIGRAO LTDA",
            "lat": "-3.85502791",
            "lng": "-38.496444699999998",
            "address": "ROD BR 116 KM 12. 2928"
        },
        {
            "name": "POSTO SHELL - POSTO CAYMAN LTDA",
            "lat": "-8.0312383399999998",
            "lng": "-34.955408130000002",
            "address": "AV CAXANGA. 5808"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ITAIPU BASSITT LTDA.",
            "lat": "-20.82405",
            "lng": "-49.402661000000002",
            "address": "AV BADY BASSITT .5500"
        },
        {
            "name": "POSTO SHELL - DUDZIAK FILHOS E CIA LTDA",
            "lat": "-25.8751009",
            "lng": "-50.384269199999999",
            "address": "RDV BR 476. 151"
        },
        {
            "name": "POSTO SHELL - POSTO MAR AZUL LTDA",
            "lat": "-27.125211199999999",
            "lng": "-48.604011399999997",
            "address": "AV.NEREU RAMOS .3550"
        },
        {
            "name": "POSTO SHELL - MP POSTOS E LOGISTICA LTDA",
            "lat": "-28.268851600000001",
            "lng": "-52.424101",
            "address": "AV BRASIL OESTE. 2210"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ALVORADA LONDRINA EIRELI",
            "lat": "-23.293374700000001",
            "lng": "-51.142522399999997",
            "address": "AV. BRASILIA .5446"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO S PEDRO LONDRINA LTDA",
            "lat": "-23.319700000000001",
            "lng": "-51.155200000000001",
            "address": "RUA DUQUE DE CAXIAS. 2509"
        },
        {
            "name": "POSTO SHELL - MAZZOCHI AUTO SERVICOS LTDA",
            "lat": "-23.525509230000001",
            "lng": "-46.800907000000002",
            "address": "AV DOS AUTONOMISTAS. 5600 GALPAO"
        },
        {
            "name": "POSTO SHELL - J MARTINS DERIVADOS PETROLEO LTDA",
            "lat": "-12.26047",
            "lng": "-38.932212900000003",
            "address": "R EDUARDO FROES DA MATA. 1197"
        },
        {
            "name": "POSTO SHELL - SOC COML IRMAOS RODRIGUES LTDA",
            "lat": "-19.878506000000002",
            "lng": "-44.603718700000002",
            "address": "AV OVIDIO DE ABREU. 786"
        },
        {
            "name": "POSTO SHELL - VA VER COMERCIO DE COMBUSTIVEL LTDA",
            "lat": "-21.851198",
            "lng": "-47.484453000000002",
            "address": "AV.ENG.N.DE VERGUEIRO FORJAZ. 1003"
        },
        {
            "name": "POSTO SHELL - WG RIBEIRAO AUTO POSTO LTDA",
            "lat": "-21.199434199999999",
            "lng": "-47.808603550000001",
            "address": "AV PRESIDENTE VARGAS. 1176"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO VILLENEUVE LTDA",
            "lat": "-23.649463999999998",
            "lng": "-46.6699701",
            "address": "AV VEREADOR JOAO DE LUCA. 627"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO BAP BARAO LTDA",
            "lat": "-23.665233000000001",
            "lng": "-46.433832000000002",
            "address": "AV BARAO DE MAUA. 2990"
        },
        {
            "name": "POSTO SHELL - SOUZA COM PETROLEO SERVICOS LTDA",
            "lat": "-3.7515990000000001",
            "lng": "-38.501843999999998",
            "address": "AV PONTES VIEIRA. 2250"
        },
        {
            "name": "POSTO SHELL - A ANGELONI & CIA LTDA",
            "lat": "-28.6881545",
            "lng": "-49.3364051",
            "address": "AV JORGE ELIAS DE LUCCA. 550"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.9309197",
            "lng": "-49.059647499999997",
            "address": "RUA AMAZONAS. 920"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO RETAO DA DUTRA LTDA ME",
            "lat": "-23.2235342",
            "lng": "-45.887433999999999",
            "address": "AV ANDROMEDA. 1171"
        },
        {
            "name": "POSTO SHELL - WINNER COM VAREJISTA DE COMB LTDA",
            "lat": "-23.52942908",
            "lng": "-46.791260510000001",
            "address": "AV SPORT CLUB CORINTHIANS PAUL. 366"
        },
        {
            "name": "POSTO SHELL - IRMAOS LONGUINI LTDA",
            "lat": "-21.834570750000001",
            "lng": "-46.895044089999999",
            "address": "R QUINZINHO OTAVIO. 350"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO IMIGRANTE VINHEDO LTDA",
            "lat": "-23.038474900000001",
            "lng": "-46.985046699999998",
            "address": "AV IMIGRANTES. 678"
        },
        {
            "name": "POSTO SHELL - R.S. COMERCIAL COMBUSTIVEIS LTDA.",
            "lat": "-21.129342319999999",
            "lng": "-48.018549450000002",
            "address": "AV.CEZAR MINGOSSI .61"
        },
        {
            "name": "POSTO SHELL - POSTO MORUMBI DE ATIBAIA EIRELI",
            "lat": "-23.117428499999999",
            "lng": "-46.580195199999999",
            "address": "AV MARGJERONIMO DE CAMARGO. 6781"
        },
        {
            "name": "POSTO SHELL - COML DE COMB TK LTDA",
            "lat": "-30.123539000000001",
            "lng": "-51.221144000000002",
            "address": "AV EDUARDO PRADO. 415"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CATALAO LTDA",
            "lat": "-20.163822",
            "lng": "-44.906557399999997",
            "address": "AV PARANA. 1757"
        },
        {
            "name": "POSTO SHELL - A F J COMBUSTIVEIS LTDA",
            "lat": "-10.9186902",
            "lng": "-37.069527000000001",
            "address": "AV DR JOSE DA SILVA RIBEIRO FI. 334"
        },
        {
            "name": "POSTO SHELL - PASSIONE COMERC DE COMBUSTIVEIS LTD",
            "lat": "-25.5204959",
            "lng": "-49.2968999",
            "address": "R MAL OTAVIO SALDANHA MAZZA. 8427"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MILLENIUM LTDA",
            "lat": "-9.6536388399999993",
            "lng": "-35.704860689999997",
            "address": "AV JULIO MARQUES LUZ. 655"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO DIAMANTE SOROCABA LTDA",
            "lat": "-23.506858600000001",
            "lng": "-47.455898699999999",
            "address": "AV COM PEREIRA INACIO. 120"
        },
        {
            "name": "POSTO SHELL - POSTO CASAGRANDE LTDA",
            "lat": "-12.866904399999999",
            "lng": "-38.477113000000003",
            "address": "R FREDERICO COSTA. 07"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO OLIVEIRA LTDA",
            "lat": "-15.874394000000001",
            "lng": "-48.03199",
            "address": "CSG 20 LOTE 03. SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CARRO NOBRE LTDA",
            "lat": "-21.20428192",
            "lng": "-47.793663719999998",
            "address": "AV MAURILIO BIAGI .1224"
        },
        {
            "name": "POSTO SHELL - ALMAMATER AUTO POSTO LTDA",
            "lat": "-23.0966722",
            "lng": "-47.716777",
            "address": "AV. FERNANDO COSTA. 25"
        },
        {
            "name": "POSTO SHELL - INGLESES COM DE COMBUSTVEIS LTDA",
            "lat": "-27.436163069999999",
            "lng": "-48.394539109999997",
            "address": "ROD ARMANDO CALIL BULOS. 6777"
        },
        {
            "name": "POSTO SHELL - POSTO BR 31 AUTO SERVICOS LTDA",
            "lat": "-20.3318437",
            "lng": "-40.366612099999998",
            "address": "ROD BR 262 SN. KM 3"
        },
        {
            "name": "POSTO SHELL - E C MORAIS COMBUSTIVEIS LTDA",
            "lat": "-8.0418479999999999",
            "lng": "-34.891170000000002",
            "address": "AV JOAO DE BARROS. 1454"
        },
        {
            "name": "POSTO SHELL - POSTO PIRACENA LTDA",
            "lat": "-22.739051409999998",
            "lng": "-47.63028972",
            "address": "AV RIO DAS PEDRAS. 54 A 66"
        },
        {
            "name": "POSTO SHELL - ORION AUTO POSTO LTDA",
            "lat": "-23.55377399",
            "lng": "-46.742616060000003",
            "address": "AV JAGUARE. 740 ANTIGA STO EURILO"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO BEIRAMAR LTDA",
            "lat": "-20.317250000000001",
            "lng": "-40.318161000000003",
            "address": "AV MARECHAL MASCARENHAS MORAIS.1477"
        },
        {
            "name": "POSTO SHELL - POSTO PARDAL LTDA.",
            "lat": "-18.206690500000001",
            "lng": "-45.227597499999902",
            "address": "AVENIDA SANTOS DUMONT .66"
        },
        {
            "name": "POSTO SHELL - POSTO DE COMBUSTIVEL YASMIN LTDA",
            "lat": "-15.818861",
            "lng": "-47.897263000000002",
            "address": "SHCS SQ 407 BLOCO B PLL. 03"
        },
        {
            "name": "POSTO SHELL - CARLOS E L BRAGA POSTO",
            "lat": "-23.67250855",
            "lng": "-46.71239267",
            "address": "AVENIDA ROBERT KENNEDY. 760"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO JARDIM SANTA MONICA LTDA",
            "lat": "-22.855271999999999",
            "lng": "-47.110501999999997",
            "address": "RUA SYLVIA DA SILVA BRAGA. 880"
        },
        {
            "name": "POSTO SHELL - ABDELNOR COME.DE COMBUSTIVEIS LTDA",
            "lat": "-23.118965429999999",
            "lng": "-47.227367770000001",
            "address": "AVENIDA ARIO BARNABE. 326"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERVICO MALTA 04 LTDA",
            "lat": "-23.547855380000001",
            "lng": "-46.749885560000003",
            "address": "PRACA HENRIQUE DUMONT VILLARES. 69"
        },
        {
            "name": "POSTO SHELL - HELIO VALDIVIA",
            "lat": "-22.900599",
            "lng": "-47.058444999999999",
            "address": "AVENIDA ANCHIETA. 265"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO BOSQUE DOS JEQUITIBAS LT",
            "lat": "-22.906097890000002",
            "lng": "-47.047080430000001",
            "address": "RUA GAL MARCONDES SALGADO.850"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO KARAPITO DA BEIRA LTDA",
            "lat": "-22.875975329999999",
            "lng": "-43.552913089999997",
            "address": "ESTRADA DO MENDANHA .1700"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SANPETRO LTDA",
            "lat": "-23.310393999999999",
            "lng": "-51.148479299999998",
            "address": "AV DEZ DE DEZEMBRO. 1897"
        },
        {
            "name": "POSTO SHELL - POSTO SALVE JORGE LTDA",
            "lat": "-22.760439000000002",
            "lng": "-43.475009999999997",
            "address": "AV ABILIO AUGUSTO TAVORA. 2227"
        },
        {
            "name": "POSTO SHELL - MONTE SANTO COMBUSTIVEIS LTDA",
            "lat": "-23.417866839999999",
            "lng": "-47.408056160000001",
            "address": "AV INDEPENDENCIA. 6218"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ITAGUA DE UBATUBA LTDA",
            "lat": "-23.458906200000001",
            "lng": "-45.061301700000001",
            "address": "R CAPITAO FELIPE. 387"
        },
        {
            "name": "POSTO SHELL - POSTO REAL LTDA",
            "lat": "-5.0722394999999896",
            "lng": "-42.803760099999998",
            "address": "AV MARECHAL CASTELO BRANCO. 1271"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO AEROPORTO LIMEIRA LTDA",
            "lat": "-22.583570900000002",
            "lng": "-47.408720500000001",
            "address": "R.CANDIDO SOUZA OLIVEIRA. 2765"
        },
        {
            "name": "POSTO SHELL - ROMEU VITTO & CIA LTDA",
            "lat": "-25.476817",
            "lng": "-49.250010000000003",
            "address": "RUA PRESIDENTE PADUA FLEURY. 701"
        },
        {
            "name": "POSTO SHELL - CASSIA BARBOSA SOARES EIRELI",
            "lat": "-19.9073134",
            "lng": "-43.963004900000001",
            "address": "AV PRES CARLOS LUZ. 102"
        },
        {
            "name": "POSTO SHELL - COM DE COMB E LUBRI SANTA MONICA LT",
            "lat": "-27.582496500000001",
            "lng": "-48.584625600000003",
            "address": "RUA CORONEL PEDRO DEMORO.2035"
        },
        {
            "name": "POSTO SHELL - COMERCIAL DE COMBUSTIVEIS TK LTDA",
            "lat": "-29.933900000000001",
            "lng": "-51.08164",
            "address": "AV GEN FLORES DA CUNHA. 4050"
        },
        {
            "name": "POSTO SHELL - PARIS AUTO POSTO LTDA",
            "lat": "-19.763491200000001",
            "lng": "-47.950281599999997",
            "address": "AV SANTA BEATRIZ DA SILVA. 1080"
        },
        {
            "name": "POSTO SHELL - A ANGELONI E CIA LTDA",
            "lat": "-27.5933542",
            "lng": "-48.6184437",
            "address": "RUA CASSOL. 503 SL 1"
        },
        {
            "name": "POSTO SHELL - POSTO PATRICIA EIRELI",
            "lat": "-22.227216500000001",
            "lng": "-54.804898999999999",
            "address": "AV MARCELINO PIRES. 2702"
        },
        {
            "name": "POSTO SHELL - POSTO PHOENIX LTDA",
            "lat": "-19.9216278",
            "lng": "-43.967333799999999",
            "address": "R PLATINA .999"
        },
        {
            "name": "POSTO SHELL - PILARZINHO COM DE COMBUSTIVEIS LTDA",
            "lat": "-25.397335099999999",
            "lng": "-49.2880842",
            "address": "AV DESEMBARGADOR HUGO SIMAS. 2730"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PRIMAVERA MURCHID LTDA",
            "lat": "-20.827281259999999",
            "lng": "-49.365826830000003",
            "address": "AVENIDA MURCHID HONSI .1865"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NOVA IPANEMA LTDA",
            "lat": "-23.000600810000002",
            "lng": "-43.35749817",
            "address": "AVENIDA DAS AMERICAS .4399"
        },
        {
            "name": "POSTO SHELL - MP POSTOS E LOGISTICA LTDA",
            "lat": "-26.877386000000001",
            "lng": "-52.408230099999997",
            "address": "AV LA SALLE. 139"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO Z Z 307 NORTE LTDA",
            "lat": "-15.766754000000001",
            "lng": "-47.886526000000003",
            "address": "QD SHCN SUPERQDRA 307 BL B PLL. SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CENTER LTDA",
            "lat": "-20.844908",
            "lng": "-41.128811399999996",
            "address": "AV JONES DOS SANTOS NEVES. 280 316"
        },
        {
            "name": "POSTO SHELL - TASCA MARTE COM COMBUSTIVEL LTDA",
            "lat": "-23.535900000000002",
            "lng": "-46.772500000000001",
            "address": "AV DOS AUTONOMISTAS. 1828"
        },
        {
            "name": "POSTO SHELL - FIBRA POSTO DE COMBUSTIVEIS LTDA",
            "lat": "-23.633181100000002",
            "lng": "-46.64395734",
            "address": "AV ENG ARMANDO ARRUDA PEREIRA. 539"
        },
        {
            "name": "POSTO SHELL - ANDREA SANTINI REGO",
            "lat": "-22.893842599999999",
            "lng": "-47.060924200000002",
            "address": "AV. BRASIL .33"
        },
        {
            "name": "POSTO SHELL - POSTO BARAO BRASIL LTDA",
            "lat": "-22.125843400000001",
            "lng": "-51.384256700000002",
            "address": "AVENIDA BRASIL. 693"
        },
        {
            "name": "POSTO SHELL - POSTO DE ABASTECIMENTO SATAMINI LTD",
            "lat": "-22.918937",
            "lng": "-43.21931",
            "address": "RUA DOUTOR SATAMINI. 123"
        },
        {
            "name": "POSTO SHELL - CARLOS ALBERTO PAPACIDERO",
            "lat": "-23.513223",
            "lng": "-46.672179",
            "address": "AV PROF CELESTINO BOURROUL .34"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SABELLA JARDINS LTDA",
            "lat": "-22.966692699999999",
            "lng": "-46.542981300000001",
            "address": "RUA FELIPE SIQUEIRA. 101"
        },
        {
            "name": "POSTO SHELL - A P JARDIM OCEANICO DA BARRA LTDA",
            "lat": "-23.006385699999999",
            "lng": "-43.30921154",
            "address": "AVN ARMANDO LOMBARDI .370"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA RIO LIMA LTDA",
            "lat": "-22.836896899999999",
            "lng": "-43.317382809999998",
            "address": "AV BRAZ DE PINA .1823"
        },
        {
            "name": "POSTO SHELL - COMERCIO DE COMB JAPONES LTDA",
            "lat": "-29.114918800000002",
            "lng": "-49.639496899999997",
            "address": "VIA LAT DA BR 101 FRANCISCO POSSAMA"
        },
        {
            "name": "POSTO SHELL - POSTO DE ABAST AMOR DA ILHA LTDA",
            "lat": "-22.805240980000001",
            "lng": "-43.210556429999997",
            "address": "EST DO GALEAO.2781"
        },
        {
            "name": "POSTO SHELL - CENTRO AUT PONTE METALICA DE OSASCO",
            "lat": "-23.539690700000001",
            "lng": "-46.772295399999997",
            "address": "AV DOS AUTONOMISTAS. 1987"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-27.799306399999999",
            "lng": "-50.312723299999902",
            "address": "AV DUQUE DE CAXIAS. 527"
        },
        {
            "name": "POSTO SHELL - J S PETROLEO E COMERCIO LTDA",
            "lat": "-20.274591999999998",
            "lng": "-40.282798999999997",
            "address": "AV DANTE MICHELINE. 2461"
        },
        {
            "name": "POSTO SHELL - P GASOLINA STA ROSA DE ICARAI LTDA",
            "lat": "-22.89874945",
            "lng": "-43.105251920000001",
            "address": "R DOUTOR PAULO CESAR .278"
        },
        {
            "name": "POSTO SHELL - MARECHAL TAUBATE AUTO POSTO LTDA",
            "lat": "-23.013119",
            "lng": "-45.550362999999997",
            "address": "R FRANCISCO BARRETO LEME. 20"
        },
        {
            "name": "POSTO SHELL - CIDADE DO VINHO COM VAR DE COMB LTD",
            "lat": "-23.2068127",
            "lng": "-46.885171999999997",
            "address": "R BOM JESUS DE PIRAPORA .1700"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CONFIANCA LTDA",
            "lat": "-23.298237700000001",
            "lng": "-51.1929102",
            "address": "AV TIRADENTES. 1836"
        },
        {
            "name": "POSTO SHELL - COMERCIO DE COMB SARDENHA LTDA",
            "lat": "-23.4127264",
            "lng": "-51.943396200000002",
            "address": "AV PARANA. 1661"
        },
        {
            "name": "POSTO SHELL - COM DE COMB CASARIN EIRELI",
            "lat": "-23.300825",
            "lng": "-51.185751000000003",
            "address": "AV TIRADENTES. 1241"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO TREVO DE MAGE LTDA",
            "lat": "-22.66340065",
            "lng": "-43.033599850000002",
            "address": "AV SIMAO DA MOTTA .20"
        },
        {
            "name": "POSTO SHELL - JVM DERIV DE PETROLEO E TRANSP LTDA",
            "lat": "-16.4727101",
            "lng": "-43.4981267",
            "address": "ROD BR 251 KM 505"
        },
        {
            "name": "POSTO SHELL - ABASTECEDORA DIAS NARCIZO LTDA",
            "lat": "-29.8611279",
            "lng": "-51.180944399999902",
            "address": "ROD BR 116. 1048"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MIKONOS LTDA",
            "lat": "-22.913652419999998",
            "lng": "-43.233806610000002",
            "address": "R SAO FRANCISCO XAVIER .446"
        },
        {
            "name": "POSTO SHELL - P MOCAO DERIVADOS DE PETROLEO LTDA",
            "lat": "-16.741057000000001",
            "lng": "-43.846038",
            "address": "AV DEPUTADO PLINIO RIBEIRO. 3515"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MIQUIRA III LTDA",
            "lat": "-23.596296200000001",
            "lng": "-48.060887739999998",
            "address": "AV 5 DE NOVEMBRO .900"
        },
        {
            "name": "POSTO SHELL - POSTO V E M DER DE PETROLEO LTDA",
            "lat": "-16.708297099999999",
            "lng": "-43.856333499999998",
            "address": "AV IPANEMA. 216"
        },
        {
            "name": "POSTO SHELL - TARGINO COMERCIO DE COMB LTDA",
            "lat": "-9.6558542999999997",
            "lng": "-35.733288100000003",
            "address": "AV TOMAS ESPINDOLA. 278"
        },
        {
            "name": "POSTO SHELL - POSTO POLE POSITION LTDA",
            "lat": "-19.858233500000001",
            "lng": "-43.959681099999997",
            "address": "AV PRESIDENTE ANTONIO CARLOS. 7400"
        },
        {
            "name": "POSTO SHELL - VITRINE COM VAREJISTA DE COMB LTDA",
            "lat": "-23.190337110000002",
            "lng": "-46.896435320000002",
            "address": "AV JUNDIAI. 770"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MORAES & MORAES LTDA",
            "lat": "-22.751981799999999",
            "lng": "-47.259203499999998",
            "address": "R JOSE VOLPATO. 260"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SANTORINI LTDA",
            "lat": "-22.769576000000001",
            "lng": "-43.407729000000003",
            "address": "ROD PRESIDENTE DUTRA .10726"
        },
        {
            "name": "POSTO SHELL - PETROLEO SAO PAULO LTDA",
            "lat": "-5.0812590000000002",
            "lng": "-42.779226999999999",
            "address": "AV JOAO XXIII .2180"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.91353333",
            "lng": "-48.960361669999998",
            "address": "R HERCILIO FIDES ZIMMERMANN LT 1"
        },
        {
            "name": "POSTO SHELL - MARIT E NITEROI POSTO DE COMB LTDA",
            "lat": "-22.88220024",
            "lng": "-43.334701539999998",
            "address": "AV ERNANI CARDOSO. 202"
        },
        {
            "name": "POSTO SHELL - A P FIRENZE DE RIBEIRAO PRETO LTDA",
            "lat": "-21.190882999999999",
            "lng": "-47.801246999999996",
            "address": "AV PORTUGAL .408"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GIROMANILHA LTDA",
            "lat": "-22.773502499999999",
            "lng": "-42.937915869999998",
            "address": "ROD BR 101 LOTES 06 E 23 .SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SANTA GIANNA LTDA",
            "lat": "-20.527625",
            "lng": "-47.412103000000002",
            "address": "AV CHICO JULIO. 2701"
        },
        {
            "name": "POSTO SHELL - R E MENGUE",
            "lat": "-30.010499100000001",
            "lng": "-51.160296000000002",
            "address": "AV ASSIS BRASIL. 2704"
        },
        {
            "name": "POSTO SHELL - S S COMERCIO DE COMBUSTIVEIS SA",
            "lat": "-28.459315799999999",
            "lng": "-52.200085199999997",
            "address": "AV JULIO BORELLA. 1979"
        },
        {
            "name": "POSTO SHELL - BREDA-COMERCIO DE COMBUSTIVEIS LTDA",
            "lat": "-23.401554000000001",
            "lng": "-51.427227000000002",
            "address": "AV MARACANA .3530"
        },
        {
            "name": "POSTO SHELL - PEGASUS DA BANDEIR AUTO POSTO LTDA",
            "lat": "-23.5979759817881",
            "lng": "-46.680329215089799",
            "address": "AV DOS BANDEIRANTES. 1365"
        },
        {
            "name": "POSTO SHELL - POSTO UNIVERSITARIO LTDA",
            "lat": "-16.4793029",
            "lng": "-54.605809600000001",
            "address": "RUA ANTONIO FRANCISCO BUOSI. 4132"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SORRISO LTDA",
            "lat": "-25.431730399999999",
            "lng": "-49.290460699999997",
            "address": "AV CANDIDO HARTMANN. 379"
        },
        {
            "name": "POSTO SHELL - POSTO DE COMB VILA DOS VENTOS LTDA",
            "lat": "-25.3928634",
            "lng": "-49.3345579",
            "address": "R FRANCISCO DALLALIBERA. 1539"
        },
        {
            "name": "POSTO SHELL - POSTO DE COMB.FLEX ARACATUBA LTDA",
            "lat": "-21.2047095",
            "lng": "-50.447210299999902",
            "address": "R MARCILIO DIAS .317"
        },
        {
            "name": "POSTO SHELL - COOPERCITRUS COOP PROD RURAIS",
            "lat": "-21.146037929999999",
            "lng": "-48.976163390000004",
            "address": "RUA BRASIL. 1805"
        },
        {
            "name": "POSTO SHELL - KS COM DE COMB E CONVENV LTDA",
            "lat": "-25.4832863",
            "lng": "-49.253496599999998",
            "address": "RUA ALCINO GUANABARA. 1410"
        },
        {
            "name": "POSTO SHELL - SILVIA MARIA PINTO SANTOS",
            "lat": "-23.58570757",
            "lng": "-46.618167239999998",
            "address": "AV RICARDO JAFET. 1101"
        },
        {
            "name": "POSTO SHELL - TUTOIA COM VAR COMB LTDA ME",
            "lat": "-23.577671540000001",
            "lng": "-46.651199509999998",
            "address": "R TUTOIA. 780"
        },
        {
            "name": "POSTO SHELL - COMERCIO DE COMBS UNIVERSITARIO LTD",
            "lat": "-27.821318000000002",
            "lng": "-50.318303",
            "address": "R FREI GABRIEL TERREO. 897 TERREO"
        },
        {
            "name": "POSTO SHELL - ALCATRAZ COMB CONV LTDA",
            "lat": "-23.638753999999999",
            "lng": "-46.672877999999997",
            "address": "AV WASHINGTON LUIZ. 4547"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERVICOS CACIQUE R P LTDA",
            "lat": "-21.159441399999999",
            "lng": "-47.797517499999998",
            "address": "R SAO PAULO. 1688"
        },
        {
            "name": "POSTO SHELL - POSTO SR BARCELONA LTDA",
            "lat": "-25.514452599999998",
            "lng": "-49.231588299999999",
            "address": "AV MARECHAL FLORIANO PEIXOTO. 10052"
        },
        {
            "name": "POSTO SHELL - POSTO DISBRAVE IMPERIAL LTDA",
            "lat": "-15.794375",
            "lng": "-47.888888999999999",
            "address": "SHS QUADRA 02 BLOCO F PLL ASA SUL"
        },
        {
            "name": "POSTO SHELL - CUPIMZAO LONDRINA AUTO POSTO E SERV",
            "lat": "-23.340215400000002",
            "lng": "-51.147404100000003",
            "address": "AV INGLATERRA. 88"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO LIDER JUNIOR LTDA",
            "lat": "-22.72465",
            "lng": "-45.577758119999999",
            "address": "AV FREI ORESTES GIRARDI. 3569"
        },
        {
            "name": "POSTO SHELL - CARLOS EDUARDO CASAGRANDE",
            "lat": "-12.988576",
            "lng": "-38.470762000000001",
            "address": "AV ANTONIO CARLOS MAGALHAES. 2749"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO E MECANICA BARAO LTDA",
            "lat": "-25.516770699999999",
            "lng": "-49.181928399999997",
            "address": "AV RUI BARBOSA. 11425"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ITAMAXI LTDA",
            "lat": "-23.002246",
            "lng": "-46.844859",
            "address": "AV SENADOR LACERDA FRANCO. 148"
        },
        {
            "name": "POSTO SHELL - POSTO Z+Z N S MEDALHA MILAGROSA LTD",
            "lat": "-16.678042229999999",
            "lng": "-49.268305169999998",
            "address": "AV ANHANGUERA Q1 A LOTE 13E. 6076"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA JB CAXIAS LTDA",
            "lat": "-22.678595359999999",
            "lng": "-43.286511709999999",
            "address": "ROD WASHINGTON LUIS LT 1A 6A. 14689"
        },
        {
            "name": "POSTO SHELL - COM DE COMB SERRANO LTDA",
            "lat": "-10.91544225",
            "lng": "-37.087888839999998",
            "address": "AV PRESIDENTE TANCREDO NEVES. 7604"
        },
        {
            "name": "POSTO SHELL - CJCM PETROLEO LTDA",
            "lat": "-8.1278210000000009",
            "lng": "-34.915591999999997",
            "address": "AV M MASCARENHAS DE MORAIS. 4900"
        },
        {
            "name": "POSTO SHELL - SERGIO MOTTA MARQUES",
            "lat": "-23.55840182",
            "lng": "-46.445411210000003",
            "address": "AV JACU PESSEGO.N TRABALHADORES. 45"
        },
        {
            "name": "POSTO SHELL - MARTINELI CITY AUTO POSTO LTDA",
            "lat": "-21.216388890000001",
            "lng": "-47.819722220000003",
            "address": "AV DR JOSE CEZARIO M S FILHO. 285"
        },
        {
            "name": "POSTO SHELL - AUGUSTO BASSANI E CIA LTDA",
            "lat": "-25.4510422",
            "lng": "-49.528194199999902",
            "address": "ROD BR277 CURITIBA PONT. 2286 KM 22"
        },
        {
            "name": "POSTO SHELL - POSTO RAJA F R LTDA",
            "lat": "-19.956634300000001",
            "lng": "-43.957959199999998",
            "address": "AV RAJA GABAGLIA. 2526"
        },
        {
            "name": "POSTO SHELL - POSTO QUINTA BALSA NOVA LTDA",
            "lat": "-25.479162599999999",
            "lng": "-49.645496999999999",
            "address": "ROD BR 277. SN KM 134"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO HUMAITA LTDA",
            "lat": "-23.664556999999999",
            "lng": "-46.509380999999998",
            "address": "PRACA QUATORZE BIS. 15"
        },
        {
            "name": "POSTO SHELL - POSTO SAFF IV LTDA",
            "lat": "-25.091224100000002",
            "lng": "-50.139959400000002",
            "address": "AV GENERAL CARLOS CAVALCANTI. 1255"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO RJB HUNGRIA IMPERATRIZ L",
            "lat": "-22.419039999999999",
            "lng": "-42.973891999999999",
            "address": "AV FELICIANO SODRE. 578"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO DAMINELLI LTDA",
            "lat": "-28.939504599999999",
            "lng": "-49.490369000000001",
            "address": "AV SETE DE SETEMBRO. 837"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERVICOS VERA CRUZ RADIAL",
            "lat": "-23.531818999999999",
            "lng": "-46.522547000000003",
            "address": "AV ANTONIO ESTEVAO DE CARVALHO. 28"
        },
        {
            "name": "POSTO SHELL - INFINITY COMERCIO DE COMBUSTIVEIS L",
            "lat": "-23.573372610625398",
            "lng": "-46.504245725756299",
            "address": "AV ARICANDUVA. 6640"
        },
        {
            "name": "POSTO SHELL - PHOENIX II COM DE COMB LTDA",
            "lat": "-29.771832",
            "lng": "-51.148826999999997",
            "address": "AV JOAO CORREA. 1380"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO JARDIM ESMERALDA LTDA",
            "lat": "-23.599147219999999",
            "lng": "-46.78499351",
            "address": "AV ENG HEITOR ANTO E GARCIA. 6391"
        },
        {
            "name": "POSTO SHELL - PIPEL-PICOS PETROLEO LTDA.",
            "lat": "-7.0776081",
            "lng": "-41.442487900000003",
            "address": "AV BRASIL .2120"
        },
        {
            "name": "POSTO SHELL - PETROCAR COMERCIO DE PETROLEO LTDA",
            "lat": "-3.7352032999999998",
            "lng": "-38.507800799999998",
            "address": "R DR JOSE LOURENCO. 1241 LJ 01"
        },
        {
            "name": "POSTO SHELL - JP SANTA LUCIA COM DE COMB LTDA",
            "lat": "-29.7110007",
            "lng": "-53.804364199999902",
            "address": "EST RST 509. 1200 KM 03"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.4999252",
            "lng": "-49.087654200000003",
            "address": "RUA WALTER MARQUARDT. 467"
        },
        {
            "name": "POSTO SHELL - PEGORARO E PEGORARO LTDA",
            "lat": "-24.948949899999999",
            "lng": "-53.442899300000001",
            "address": "AV BRASIL. 4487"
        },
        {
            "name": "POSTO SHELL - A FERREIRA DE PAULA AUTO POSTO LTDA",
            "lat": "-25.293070100000001",
            "lng": "-49.223268699999998",
            "address": "ROD BR 116 KM 9 700 METROS. SN"
        },
        {
            "name": "POSTO SHELL - POSTO CORCOVADO LTDA",
            "lat": "-23.417846000000001",
            "lng": "-51.927103000000002",
            "address": "AV BENTO MUNHOZ DA ROCHA NETTO. 621"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MANCOES LTDA",
            "lat": "-20.675999999999998",
            "lng": "-54.559640000000002",
            "address": "RDV BR163 KM 454 CX POSTAL 2526 .SN"
        },
        {
            "name": "POSTO SHELL - CLASSE A SERVICOS AUTOMOTIVOS LTDA.",
            "lat": "-23.6333117",
            "lng": "-46.680026300000002",
            "address": "AV. VICENTE RAO .1001"
        },
        {
            "name": "POSTO SHELL - POSTO SERVICOS TIGRE DO VALE LTDA",
            "lat": "-23.507467370000001",
            "lng": "-46.2094661",
            "address": "ROD MOGI DUTRA. 600"
        },
        {
            "name": "POSTO SHELL - WALTER TANNUS FREITAS",
            "lat": "-13.004562099999999",
            "lng": "-38.523652899999902",
            "address": "AV CENTENARIO. 2726"
        },
        {
            "name": "POSTO SHELL - J MARCOS ALVES TRINDADE E CIA LTDA",
            "lat": "-16.374116000000001",
            "lng": "-39.582977",
            "address": "AVENIDA PORTO SEGURO. 207 TERREO"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PELANDA 27 LTDA ME",
            "lat": "-25.620565800000001",
            "lng": "-49.167723899999999",
            "address": "RDV BR 376. 27500 KM 626"
        },
        {
            "name": "POSTO SHELL - QUIRINO SOUZA COM PETROLEO SERV LTD",
            "lat": "-5.7914332000000002",
            "lng": "-35.201515800000003",
            "address": "RUA APODI. 520"
        },
        {
            "name": "POSTO SHELL - PITUBA DERIVADOS DE PETROLEO LTDA",
            "lat": "-13.004670000000001",
            "lng": "-38.453870000000002",
            "address": "AV OCTAVIO MANGABEIRA. 1283"
        },
        {
            "name": "POSTO SHELL - GHANDI SECAF E CIA LTDA",
            "lat": "-21.869064999999999",
            "lng": "-47.489176999999998",
            "address": "AV JOAO M SILV SOBRINHO. 2101"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.245733999999999",
            "lng": "-49.385466399999999",
            "address": "AV ARGOLO. 282"
        },
        {
            "name": "POSTO SHELL - IRMAOS SILVA SA",
            "lat": "-19.459202999999999",
            "lng": "-44.242425999999902",
            "address": "RUA ANTONIO OLINTO .565"
        },
        {
            "name": "POSTO SHELL - POSTO FERNANDINHO LTDA",
            "lat": "-26.914148000000001",
            "lng": "-48.668315",
            "address": "RUA BRUSQUE. 786"
        },
        {
            "name": "POSTO SHELL - COMERCIAL BUFFON COMBS E TRANS LTDA",
            "lat": "-26.313224300000002",
            "lng": "-48.873678400000003",
            "address": "BR-101 KM 33. SN"
        },
        {
            "name": "POSTO SHELL - M.L. CUNHA & CIA LTDA.",
            "lat": "-23.532917999999999",
            "lng": "-47.1363068",
            "address": "RUA SOTERO DE SOUZA .218"
        },
        {
            "name": "POSTO SHELL - METANAUTO POSTO DE COMBUST LTDA",
            "lat": "-22.794763960000001",
            "lng": "-43.423723199999998",
            "address": "AV PRES C E SILVA LT564-567 Q28 .SN"
        },
        {
            "name": "POSTO SHELL - POSTO FENIX ESTORIL LTDA",
            "lat": "-19.9294723",
            "lng": "-43.977271600000002",
            "address": "AV AMAZONAS. 4808"
        },
        {
            "name": "POSTO SHELL - POSTO ZOOLOGICO LTDA",
            "lat": "-29.804209",
            "lng": "-51.166629999999998",
            "address": "RODOVIA BR 116. 750"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-27.249038150000001",
            "lng": "-49.989164219999999",
            "address": "BR 470 KM 181. 5300"
        },
        {
            "name": "POSTO SHELL - GETULIO ABAST DE COMB LTDA",
            "lat": "-30.060132199999899",
            "lng": "-51.223553000000003",
            "address": "AV GETULIO VARGAS. 1737"
        },
        {
            "name": "POSTO SHELL - WENCESLAU ABAST DE COMB LTDA",
            "lat": "-30.103091150000001",
            "lng": "-51.250812119999999",
            "address": "AV WENCESLAU ESCOBAR. 1488"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.277339699999999",
            "lng": "-48.846280499999999",
            "address": "R DONA FRANCISCA. 3125"
        },
        {
            "name": "POSTO SHELL - COM VAREJ DE COMB VELOZ LTDA",
            "lat": "-23.593086100000001",
            "lng": "-46.5398572",
            "address": "AV P LUIZ IGNACIO ANHAIA MELLO.6143"
        },
        {
            "name": "POSTO SHELL - GALAPAGOS CENTRO AUTOMOTIVO LTDA",
            "lat": "-22.80209923",
            "lng": "-43.3512001",
            "address": "ROD PRESIDENTE DUTRA. 1997"
        },
        {
            "name": "POSTO SHELL - COM VAR DE COMB VIA SUL LTDA",
            "lat": "-23.615000219999999",
            "lng": "-46.742131899999997",
            "address": "R MAL HASTINFILO DE MOURA. 990"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO COLOSSAL MERCES LTDA",
            "lat": "-25.428160999999999",
            "lng": "-49.284576999999999",
            "address": "RUA MARTIN AFONSO. 700"
        },
        {
            "name": "POSTO SHELL - PETROCAR COMERCIO DE PETROLEO LTDA",
            "lat": "-3.7708944999999998",
            "lng": "-38.482484599999999",
            "address": "AV WASHINGTON SOARES. 1370 B"
        },
        {
            "name": "POSTO SHELL - NOVO DERIVADO DE PETROLEO LTDA",
            "lat": "-7.0688887999999999",
            "lng": "-41.509482499999997",
            "address": "ROD BR316 KM308 C.AV.S.EULALIO .SN"
        },
        {
            "name": "POSTO SHELL - POSTO PE LIBERIO LTDA",
            "lat": "-19.958800350000001",
            "lng": "-44.07198503",
            "address": "ROD BR 381. SN KM 482"
        },
        {
            "name": "POSTO SHELL - A ANGELONI & CIA LTDA",
            "lat": "-28.679445600000001",
            "lng": "-49.374686099999998",
            "address": "AV CENTENARIO. 2925"
        },
        {
            "name": "POSTO SHELL - POSTO MAR DAS PEDRAS LTDA",
            "lat": "-27.5286434",
            "lng": "-48.630616799999999",
            "address": "R CECILIA MARIA JOSE AZEVEDO. 210"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO AUTOMIX LTDA",
            "lat": "-23.69059571",
            "lng": "-46.576758650000002",
            "address": "AV PIRAPORINHA. 1087"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MACEDO LTDA",
            "lat": "-23.464920379999999",
            "lng": "-46.513440330000002",
            "address": "VIA MONTEIRO LOBATO. 1471"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERV ARMANDO DE MORAES LTD",
            "lat": "-23.465355299999999",
            "lng": "-46.532469200000001",
            "address": "AVENIDA TIRADENTES. 21"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERVICOS PONTE NOVA LTDA",
            "lat": "-23.471666670000001",
            "lng": "-46.52",
            "address": "R FRANCISCO DE P SANTANA. 62/64 E68"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GTX LTDA",
            "lat": "-23.021444169999999",
            "lng": "-45.540615449999997",
            "address": "AV BRIG JOSE V F LIMA. 815"
        },
        {
            "name": "POSTO SHELL - COMERCIAL DE COMB SAO MARCOS LTDA",
            "lat": "-28.483197000000001",
            "lng": "-49.034393000000001",
            "address": "AV SEVERINO ALBINO CORREA. SN"
        },
        {
            "name": "POSTO SHELL - SUPER POSTO 7100 LTDA.",
            "lat": "-23.622523109999999",
            "lng": "-46.653927529999997",
            "address": "AV SAO MIGUEL. 7100"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA MAIOCHI LTDA",
            "lat": "-26.473838000000001",
            "lng": "-48.998845899999999",
            "address": "RUA 28 DE AGOSTO 1598"
        },
        {
            "name": "POSTO SHELL - A POSTO DUQUE CONDE ALPHAVILLE LTDA",
            "lat": "-23.484656300000001",
            "lng": "-46.862872709999998",
            "address": "AV SAGITARIO. 607"
        },
        {
            "name": "POSTO SHELL - SIM REDE DE POSTOS LTDA",
            "lat": "-32.559019999999997",
            "lng": "-53.385404000000001",
            "address": "R URUGUAI. 878"
        },
        {
            "name": "POSTO SHELL - FERNANDO JOSEF KUBART",
            "lat": "-22.73358",
            "lng": "-45.584311999999997",
            "address": "AV DR.JANUARIO MIRAGLIA. 2140"
        },
        {
            "name": "POSTO SHELL - MARIA BONITA COM DE COMB E LUB LDTA",
            "lat": "-12.695247",
            "lng": "-38.464024999999999",
            "address": "ROD BR 324 KM 591"
        },
        {
            "name": "POSTO SHELL - A P PIO XII DE CAPIVARI LTDA EPP",
            "lat": "-23.00709956",
            "lng": "-47.522228660000003",
            "address": "AV PIO XII. 1880"
        },
        {
            "name": "POSTO SHELL - R A RIBEIRO COMBUSTIVEIS",
            "lat": "-21.776795",
            "lng": "-43.345801399999999",
            "address": "AV BARAO DO RIO BRANCO. 3950"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO BELEZURA LTDA",
            "lat": "-23.533467000000002",
            "lng": "-46.583664900000002",
            "address": "R ULISSES CRUZ. 296"
        },
        {
            "name": "POSTO SHELL - ARINELLA IMIGRANTES COM VAR COMB LT",
            "lat": "-23.604247000000001",
            "lng": "-46.626280000000001",
            "address": "AV RICARDO JAFET. 3400"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO VIA BRASIL LTDA",
            "lat": "-21.143395000000002",
            "lng": "-47.788553",
            "address": "AV BRASIL. 1133"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PETROCOMBO LTDA",
            "lat": "-23.411858599999999",
            "lng": "-51.943021299999998",
            "address": "AV COLOMBO. 6300"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO VISTA BELLA LTDA",
            "lat": "-23.555126189999999",
            "lng": "-46.645450590000003",
            "address": "R MANOEL DUTRA. 236"
        },
        {
            "name": "POSTO SHELL - ABAST DE COMB LUCIO BITTENCOURT LT",
            "lat": "-29.819908699999999",
            "lng": "-51.149610000000003",
            "address": "AV LUCIO BITTENCOURT. 50"
        },
        {
            "name": "POSTO SHELL - SOL DISTR DE COMB EIRELI EPP",
            "lat": "-8.7808980999999999",
            "lng": "-63.8978799",
            "address": "AV CAMPOS SALES. 410"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NONNA EMA EIRELI",
            "lat": "-28.363836285030199",
            "lng": "-49.284069372413299",
            "address": "ROD SC 108. 559"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GASAUTO LTDA EPP",
            "lat": "-12.287966000000001",
            "lng": "-38.957000000000001",
            "address": "ESTRADA FEIRA SAO GONCALO. SN"
        },
        {
            "name": "POSTO SHELL - POSTO BOTO LTDA",
            "lat": "-3.86216109999999",
            "lng": "-38.634729",
            "address": "AV PE JOSE HOLANDA DO VALE. 809"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO AJ E AR LTDA",
            "lat": "-23.619213999999999",
            "lng": "-45.401116000000002",
            "address": "AV PRES CASTELO BRANCO. 614"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO VITORIA LTDA",
            "lat": "-20.404125000000001",
            "lng": "-42.891337700000001",
            "address": "AV DOUTOR JOSE GROSSI. 175"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ESTONIA 4 LTDA",
            "lat": "-23.637718199999998",
            "lng": "-46.542597100000002",
            "address": "AV DOM PEDRO II. 2180"
        },
        {
            "name": "POSTO SHELL - POSTO POTENCIA II LTDA",
            "lat": "-21.203938000000001",
            "lng": "-47.778320999999998",
            "address": "AV COSTABILE ROMANO. 2342"
        },
        {
            "name": "POSTO SHELL - POSTO PORTAL DA POSSE LTDA",
            "lat": "-22.71870041",
            "lng": "-43.4612999",
            "address": "ETR DE ADRIANOPOLIS. SN LTS 1-5 Q V"
        },
        {
            "name": "POSTO SHELL - POSTO RESERVA DO VALE LTDA",
            "lat": "-9.5946929999999995",
            "lng": "-35.724066000000001",
            "address": "MEN MARCELO. 8551 L R DO VALE L2 QF"
        },
        {
            "name": "POSTO SHELL - VINICIUS CANSANCAO E CIA LTDA",
            "lat": "-9.6280921999999993",
            "lng": "-35.737451800000002",
            "address": "FERNANDES LIMA. 2542"
        },
        {
            "name": "POSTO SHELL - FTP CIDADE COMERCIO DE COMB LTDA",
            "lat": "-8.7796836999999996",
            "lng": "-63.840246200000003",
            "address": "AV MAMORE. 1721"
        },
        {
            "name": "POSTO SHELL - RIO DOCE COMBUSTIVEIS LTDA",
            "lat": "-7.96803699999999",
            "lng": "-34.835546600000001",
            "address": "AV CORONEL FREDERICO LUNDGREN. 495"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO RETAO DA DUTRA LTDA",
            "lat": "-23.180598199999999",
            "lng": "-45.848090599999999",
            "address": "AV PRESIDENTE JUSC KUBITSCHEK. 8400"
        },
        {
            "name": "POSTO SHELL - REDE N BRASIL DE POSTOS DE COMB LTD",
            "lat": "-23.213000999999998",
            "lng": "-46.838819000000001",
            "address": "RUA PASCHOAL GIANFRANCESCO. 60"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GUARAPARI LTDA",
            "lat": "-20.668566200000001",
            "lng": "-40.498344299999999",
            "address": "AV GOV JONES DOS SANTOS NEVES. 15"
        },
        {
            "name": "POSTO SHELL - POSTO NOVA ITAPARICA LTDA",
            "lat": "-20.375713439999998",
            "lng": "-40.319527919999999",
            "address": "AV SERGIO CARDOSO.SN LT 01 A 03 QD8"
        },
        {
            "name": "POSTO SHELL - POSTO IPE LTDA ME",
            "lat": "-4.2279318999999997",
            "lng": "-44.774422199999997",
            "address": "PCA DUQUE DE CAXIAS. 1"
        },
        {
            "name": "POSTO SHELL - POSTO PANTANAL FENIX LTDA",
            "lat": "-22.0039868",
            "lng": "-47.884976100000003",
            "address": "R CAPITAO ALBERTO MENDES JUNIOR. 20"
        },
        {
            "name": "POSTO SHELL - ABAST DE COMB LAGOA DO ARMAZEM LTDA",
            "lat": "-29.995170899999898",
            "lng": "-50.184609700000003",
            "address": "AV FERNANDES BASTOS. 5190"
        },
        {
            "name": "POSTO SHELL - POSTO DE COMB BAL DAS GARCAS LTDA",
            "lat": "-22.43463856",
            "lng": "-41.866966560000002",
            "address": "AVN 1. SN LOTE 242-A"
        },
        {
            "name": "POSTO SHELL - BARCELONA COM DE COMBUSTIVEIS LTDA",
            "lat": "-23.446693",
            "lng": "-51.913263999999998",
            "address": "AV DR GASTAO VIDIGAL. 2079"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PORTAL SAO FERNANDO LTDA",
            "lat": "-23.559087999999999",
            "lng": "-46.886020000000002",
            "address": "RUA SAO FERNANDO. 858"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PORTAL DE SANTANA LTDA",
            "lat": "-23.458371700000001",
            "lng": "-46.491046799999999",
            "address": "RODOVIA HELIO SMIDT. SN"
        },
        {
            "name": "POSTO SHELL - MATO GROSSO COM DE COMB E DER LTDA",
            "lat": "-13.060468999999999",
            "lng": "-55.923768000000003",
            "address": "R DOS NARCISOS. 451 W"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PRAIA ANCORA LTDA",
            "lat": "-22.486600880000001",
            "lng": "-41.911701200000003",
            "address": "AV DAS CASUARINAS. SN"
        },
        {
            "name": "POSTO SHELL - TULEMON COMERCIO LTDA",
            "lat": "-9.5118606000000003",
            "lng": "-35.793182799999997",
            "address": "LOT PALMARES I. 17 QD 06"
        },
        {
            "name": "POSTO SHELL - DISTRIB DE COMB SAVAR LTDA",
            "lat": "-29.987490000000001",
            "lng": "-51.172241",
            "address": "AV SEVERO DULLIUS. 1405 LT 01 QD A"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.938873999999998",
            "lng": "-48.703010999999996",
            "address": "RODOVIA ANTONIO HEIL. 655"
        },
        {
            "name": "POSTO SHELL - POSTO ATLANTICO LTDA",
            "lat": "-20.264972",
            "lng": "-40.265040999999997",
            "address": "AVE DANTE MICHELINI. 4405"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO HG LTDA",
            "lat": "-28.746180299999999",
            "lng": "-49.371642700000002",
            "address": "ROD LUIZ ROSSO KM 08. SN"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-27.203475099999999",
            "lng": "-49.661846799999999",
            "address": "R ESTRADA BOA ESPERANCA. 790"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ROLDAN LTDA",
            "lat": "-26.270299999999999",
            "lng": "-48.640900000000002",
            "address": "AV DOUTOR NEREU RAMOS N 2245"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.477257000000002",
            "lng": "-49.102561999999999",
            "address": "RUA JOAQUIM FRANCISCO DE PAULA. 360"
        },
        {
            "name": "POSTO SHELL - ARIRIU COMERCIO DE COMB LTDA",
            "lat": "-27.688817",
            "lng": "-48.718752799999997",
            "address": "AV SAO CRISTOVAO. 5846"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-27.097117799999999",
            "lng": "-48.914025700000003",
            "address": "R RODRIGUES ALVES. 160"
        },
        {
            "name": "POSTO SHELL - POSTO GAUCHO LTDA",
            "lat": "-27.095500000000001",
            "lng": "-52.6753",
            "address": "AV SENADOR ATILIO FONTANA. 2721 E"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.479861",
            "lng": "-49.056046000000002",
            "address": "R BERNARDO DORNBUSCH. N 2400"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.754812399999999",
            "lng": "-49.173394500000001",
            "address": "XV DE NOVEMBRO. 2004"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-27.036968099999999",
            "lng": "-49.392018899999997",
            "address": "QUINTINO BOCAIUVA. 353"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.5138",
            "lng": "-49.118899999999996",
            "address": "R FELICIANO BORTOLINI N 1305"
        },
        {
            "name": "POSTO SHELL - POSTO DE COMBUSTVEIS ZE LUCAS LTDA",
            "lat": "-26.487558700000001",
            "lng": "-49.043566599999998",
            "address": "R JOSE THEODORO RIBEIRO. 2960"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.494499000000001",
            "lng": "-49.070579000000002",
            "address": "R CORONEL PROCOPIO GOMES DE OLIVEIR"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.581232199999999",
            "lng": "-49.139988000000002",
            "address": "R GUSTAVO GUNZ. N 477"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.459027500000001",
            "lng": "-49.0382459",
            "address": "MANOEL L FRANCISCO DA COSTA. N 2010"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.528379999999999",
            "lng": "-48.714532800000001",
            "address": "ROD BR 101. KM 72"
        },
        {
            "name": "POSTO SHELL - POSTO DE GAS CARDOSO CASTRO LTDA",
            "lat": "-22.82167244",
            "lng": "-43.40825272",
            "address": "RUA CARDOSO DE CASTRO. 208"
        },
        {
            "name": "POSTO SHELL - BMK COMBUSTIVEIS EIRELI",
            "lat": "-5.3481667000000002",
            "lng": "-49.129507699999998",
            "address": "AV ANTONIO MAIA. 1804 B"
        },
        {
            "name": "POSTO SHELL - SBRISSIA COM DE COMBUSTIVEIS LTDA",
            "lat": "-25.4579153",
            "lng": "-49.225178700000001",
            "address": "AV NOSSA SENHORA DE LOURDES. 900"
        },
        {
            "name": "POSTO SHELL - CONDOR AUTO POSTO LINHA VERDE II LT",
            "lat": "-25.523558999999999",
            "lng": "-49.295160000000003",
            "address": "ROD BR116. 19740"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA MIME 02",
            "lat": "-26.104138500000001",
            "lng": "-49.434598999999999",
            "address": "RODOVIA PR 281. 80 KM 32"
        },
        {
            "name": "POSTO SHELL - LIG COMBUSTIVEIS E SERVICOS LTDA",
            "lat": "-8.1150739900000008",
            "lng": "-35.247937350000001",
            "address": "RODOVIA LUIZ GONZAGA. SN KM 41"
        },
        {
            "name": "POSTO SHELL - LH COM DE DERIV DE PETROL LTDA EPP",
            "lat": "-3.8937279999999999",
            "lng": "-38.431623000000002",
            "address": "ROD CE 040. SN KM 10"
        },
        {
            "name": "POSTO SHELL - POSTO PORTAL DO RIBEIRAO VERDE LTDA",
            "lat": "-21.13174347",
            "lng": "-47.751204850000001",
            "address": "ESTR ANTONIA MUGN MARINCECK. 2600"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO DUQUE MOEMA LTDA",
            "lat": "-23.600013669999999",
            "lng": "-46.667393420000003",
            "address": "RUA INHAMBU. 570"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MINAS BRASILIA LTDA",
            "lat": "-18.904095250000001",
            "lng": "-48.295595970000001",
            "address": "RUA CONSTELACAO. 10"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO R M LTDA",
            "lat": "-20.384170000000001",
            "lng": "-40.310896",
            "address": "ROD DO SOL. 3701 LOTE 11 QUADRA 64"
        },
        {
            "name": "POSTO SHELL - ORGANIZACAO DE COMB E PECAS LTDA",
            "lat": "-3.7993549999999998",
            "lng": "-38.530565000000003",
            "address": "AV DEDE BRASIL. 5255"
        },
        {
            "name": "POSTO SHELL - CHAVES E CHAVES COM DE DER PET LTDA",
            "lat": "-3.9218999999999999",
            "lng": "-38.6081",
            "address": "ROD DR MENDEL STEINBRUCH. 4500"
        },
        {
            "name": "POSTO SHELL - POSTO DIESEL SAO JOSE LTDA",
            "lat": "-7.0688223999999904",
            "lng": "-36.5738056",
            "address": "R MARECHAL DEODORO DA FONSECA. SN"
        },
        {
            "name": "POSTO SHELL - PORTOPETRO COMBUSTIVEIS LTDA",
            "lat": "-19.997252400000001",
            "lng": "-43.907786899999998",
            "address": "RODOVIA MG 30. SN LOTE 7 E 8 QD 2"
        },
        {
            "name": "POSTO SHELL - A W NUNES CHAVES COM COMBUSTIVEL",
            "lat": "-3.8057449999999999",
            "lng": "-38.638719999999999",
            "address": "R BOA VISTA. 3203"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO RADIAL III LTDA",
            "lat": "-23.504425600000001",
            "lng": "-46.442920200000003",
            "address": "AVENIDA PIRES DO RIO. 2705"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO LAGOA AZUL LTDA",
            "lat": "-23.3055363",
            "lng": "-45.966955599999999",
            "address": "AV ALDO LENCIONI TOLEDO. 72"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ESTRELA DA DUTRA LTDA",
            "lat": "-23.123816099999999",
            "lng": "-45.7275925",
            "address": "VER GERALDO NOGUEIRA SILVA.SN KM131"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO COLONIAL LTDA",
            "lat": "-1.7762863499999999",
            "lng": "-48.788793320000003",
            "address": "ROD DR JOAO MIRANDA. SN KM 12"
        },
        {
            "name": "POSTO SHELL - BONATTO E CIA LTDA",
            "lat": "-20.455766000000001",
            "lng": "-54.681643100000002",
            "address": "AVE DUQUE DE CAXIAS. 5403"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NOVO AGUIA DE HAIA LTDA",
            "lat": "-23.537901999999999",
            "lng": "-46.476858",
            "address": "AV AGUIA DE HAIA. 952"
        },
        {
            "name": "POSTO SHELL - E A R PEREIRA COMBUSTIVEIS",
            "lat": "-10.269723300000001",
            "lng": "-48.332680000000003",
            "address": "AV TEOTONIO SEGURADO. SN QD1 4 LT41"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PILOTT LTDA",
            "lat": "-22.599869999999999",
            "lng": "-47.419227999999997",
            "address": "AV DOUTOR LAURO CORREA SILVA. 4820"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO TRENTO LTDA",
            "lat": "-23.562806999999999",
            "lng": "-46.790596999999998",
            "address": "AVENIDA FLORA. 975"
        },
        {
            "name": "POSTO SHELL - MORADA AUTO POSTO LTDA",
            "lat": "-15.589126",
            "lng": "-56.117519999999999",
            "address": "AVENIDA MIGUEL SUTIL. 200"
        },
        {
            "name": "POSTO SHELL - PETRO FACCIO COMERCIAL LTDA ME",
            "lat": "2.8217020000000002",
            "lng": "-60.680134299999999",
            "address": "AV MARIO HOMEM DE MELO. 688"
        },
        {
            "name": "POSTO SHELL - HAVAN AUTO CENTER LTDA",
            "lat": "-26.636748000000001",
            "lng": "-48.700394600000003",
            "address": "ROD BR 101. 1019"
        },
        {
            "name": "POSTO SHELL - BONATTO E BONATTO LTDA",
            "lat": "-20.4455238",
            "lng": "-54.581653600000003",
            "address": "AVE NELLY MARTINS. 121"
        },
        {
            "name": "POSTO SHELL - DIDONE E ALVIM COMBUSTIVEIS LTDA",
            "lat": "-9.5500604999999901",
            "lng": "-35.785847699999998",
            "address": "AV LOURIVAL MELO . 5011 QD A LT 3 4"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SAO CHARBEL LTDA",
            "lat": "-15.5868976",
            "lng": "-56.081579899999902",
            "address": "AV HIST RUBENS DE MENDONCA. 1578"
        },
        {
            "name": "POSTO SHELL - S S COMERCIO DE COMBUSTIVEIS S A",
            "lat": "-28.2683918",
            "lng": "-52.389310999999999",
            "address": "AV ASPIRANTE JENNER. 1133"
        },
        {
            "name": "POSTO SHELL - AUTOMIX COM DE COMBUSTIVEIS LTDA",
            "lat": "-7.1281650299999999",
            "lng": "-34.869180270000001",
            "address": "AV DOM PEDRO II. 1767"
        },
        {
            "name": "POSTO SHELL - PUROGAS MUTUA POSTO DE GASOLINA LTD",
            "lat": "-22.813889",
            "lng": "-43.039166999999999",
            "address": "AV PAULA LEMOS. 04"
        },
        {
            "name": "POSTO SHELL - POSTO CAMINHOS RURAIS LTDA",
            "lat": "-30.1133223",
            "lng": "-51.176765199999998",
            "address": "R DR SARMENTO BARATA. 22"
        },
        {
            "name": "POSTO SHELL - POSTO PETROTURBO LTDA",
            "lat": "-8.3034347000000004",
            "lng": "-35.974679199999997",
            "address": "RODOVIA BR 232. SN"
        },
        {
            "name": "POSTO SHELL - MALURE AUTO POSTO LTDA",
            "lat": "-23.584622230000001",
            "lng": "-46.578131429999999",
            "address": "AV PROF LUIZ IGNACIO A MELO. 1622"
        },
        {
            "name": "POSTO SHELL - PORTAL DE ITAPUA COM SERV LTDA",
            "lat": "-12.926541",
            "lng": "-38.355859000000002",
            "address": "AV DORIVAL CAYMMI. SN"
        },
        {
            "name": "POSTO SHELL - REBELO E ALVES LTDA",
            "lat": "-0.62232419999999999",
            "lng": "-47.3474875",
            "address": "AV DR MIGUEL SANTA BRIGIDA. SN ANG"
        },
        {
            "name": "POSTO SHELL - PUROGAS GNV AUTO POSTO LTDA",
            "lat": "-22.818919999999999",
            "lng": "-43.019829999999999",
            "address": "AV JOSE MENDONCA DE CAMPOS. 48"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO TASSOS LTDA",
            "lat": "-22.834132499999999",
            "lng": "-43.051694500000004",
            "address": "AV HUMBERTO ALENCAR C BRANCO.SN LTC"
        },
        {
            "name": "POSTO SHELL - IRMAOS SILVA SA",
            "lat": "-19.464750299999999",
            "lng": "-44.248806599999902",
            "address": "RUA SANTA HELENA. 9"
        },
        {
            "name": "POSTO SHELL - COM DE COMB SANTO ANTAO LTDA",
            "lat": "-29.1667089",
            "lng": "-51.516986099999997",
            "address": "R NELSON CARRARO. 627 PQ SABIA II"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.982476999999999",
            "lng": "-48.643200999999998",
            "address": "RUA ISRAEL. 317"
        },
        {
            "name": "POSTO SHELL - LESTE OESTE PETROLEO LTDA",
            "lat": "-3.7077485999999999",
            "lng": "-38.57074952",
            "address": "AV PRES CASTELO BRANCO. 4277"
        },
        {
            "name": "POSTO SHELL - POSTO DE COMB DAL RI LTDA",
            "lat": "-30.035935500000001",
            "lng": "-52.903880000000001",
            "address": "RUA JULIO DE CASTILHOS. 865"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SANTO EDUARDO LTDA",
            "lat": "-23.6724462",
            "lng": "-46.803451600000002",
            "address": "EST ITAPECERICA A CAMPO LIMPO. 2945"
        },
        {
            "name": "POSTO SHELL - KALOTA AUTO POSTO LTDA",
            "lat": "-23.529033999999999",
            "lng": "-46.560298000000003",
            "address": "RUA ARNALDO CINTRA. 24"
        },
        {
            "name": "POSTO SHELL - SOLANAS COM DE COMBUSTIVEIS LTDA",
            "lat": "-27.455375449999998",
            "lng": "-48.404946000000002",
            "address": "ROD JOAO GUALBERTO SOARES. 1836"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CASACA LTDA",
            "lat": "-22.563258999999999",
            "lng": "-42.999181999999998",
            "address": "ROD RIO TERESOPOLIS. SN KM 107 5"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MEGAO RECREIO LTDA",
            "lat": "-23.018580700000001",
            "lng": "-43.481387599999998",
            "address": "AV DAS AMERICAS. 17485 PTE"
        },
        {
            "name": "POSTO SHELL - HELOA AUTO POSTO LTDA",
            "lat": "-23.478412299999999",
            "lng": "-54.186924400000002",
            "address": "AV INDUSTRIAL. 761"
        },
        {
            "name": "POSTO SHELL - COMERCIO DE COMB ITAIPU LTDA",
            "lat": "-25.472635",
            "lng": "-54.585657869999999",
            "address": "AV TANCREDO NEVES. 3901 KM 04"
        },
        {
            "name": "POSTO SHELL - POSTO PORTAL DO PARQUE LTDA",
            "lat": "-23.18986795",
            "lng": "-47.30904211",
            "address": "AV GETULIO VARGAS. 952"
        },
        {
            "name": "POSTO SHELL - CENTRO AUT MARINAS DE SAO VICENTE",
            "lat": "-23.971313070000001",
            "lng": "-46.391379890000003",
            "address": "AVENIDA CAPITAO MOR AGUIAR. 10"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO REINA SOPHIA LTDA",
            "lat": "-23.507033",
            "lng": "-46.710296999999997",
            "address": "RUA PEDRO COLACO. 6"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SUZANO LTDA",
            "lat": "-23.533460420000001",
            "lng": "-46.31179873",
            "address": "R PRUDENTE DE MORAES. 50"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MARAPE LTDA",
            "lat": "-23.566811739999999",
            "lng": "-46.756752980000002",
            "address": "AV ESCOLA POLITECNICA. 3600"
        },
        {
            "name": "POSTO SHELL - MACK COM DE DERIV DE PET LTDA",
            "lat": "-3.76559",
            "lng": "-38.537016999999999",
            "address": "AV LUCIANO CARNEIRO. 1990"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO TRANSAMERICA LTDA",
            "lat": "-16.465475699999999",
            "lng": "-54.638722899999998",
            "address": "AV INDUSTRIAL. 1326 QD 1 LOTE 3"
        },
        {
            "name": "POSTO SHELL - POSTO DE ABAST E LUBRIF AGUA GRANDE",
            "lat": "-22.828675310000001",
            "lng": "-43.324556579999999",
            "address": "ETR DA AGUA GRANDE. 230"
        },
        {
            "name": "POSTO SHELL - ABASTECEDORA ALBERNAZ LTDA EPP",
            "lat": "-29.6505507",
            "lng": "-50.775708700000003",
            "address": "AV SEBASTIAO AMORETTI. 2480"
        },
        {
            "name": "POSTO SHELL - POSTO S J COM DER PETROLEO SERV LTD",
            "lat": "-3.8566250000000002",
            "lng": "-38.589081",
            "address": "ROD DR. MENDEL STEINBRUCH. 10101"
        },
        {
            "name": "POSTO SHELL - POSTO JACUECANGA LTDA",
            "lat": "-22.991668199999999",
            "lng": "-44.243017199999997",
            "address": "AV RAUL POMPEIA. SN AREA A-XI L 1/2"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CENTRO CIVICO LTDA",
            "lat": "-23.519960000000001",
            "lng": "-46.184221999999998",
            "address": "AV TTE LUIZ M SANTOS. 25"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO DE COMB COSTINHA LTDA",
            "lat": "-6.9802080999999996",
            "lng": "-34.830356899999998",
            "address": "ROD BR 230. SN KM 3 5"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GUAPIMIRIM LTDA",
            "lat": "-22.520505878102298",
            "lng": "-42.988372238880501",
            "address": "R JOAO FRANCISCO WRIGTH. 245"
        },
        {
            "name": "POSTO SHELL - POSTO SATELITE LTDA",
            "lat": "-23.776046987499999",
            "lng": "-46.679011795312498",
            "address": "AV RAGUEB CHOHFI. 5199"
        },
        {
            "name": "POSTO SHELL - POSTO COMBUSTIVEL NOVO ESTRELA LTDA",
            "lat": "-1.2823448",
            "lng": "-47.934188900000002",
            "address": "LOT ESTRELA REAL. SN QD N LOTE 1 4"
        },
        {
            "name": "POSTO SHELL - POSTO SERV AUTO COM COMB OLIV LIMA",
            "lat": "-23.523228",
            "lng": "-46.780760999999998",
            "address": "AV DAS NACOES UNIDAS. 214"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MB LTDA",
            "lat": "-19.753166199999999",
            "lng": "-47.964138030000001",
            "address": "AV NENE SABINO. 1167"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO SKIPPER LTDA",
            "lat": "-23.656033000000001",
            "lng": "-46.535473000000003",
            "address": "RUA CATEQUESE. 701"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO LIDER ARARAQUARA LTDA",
            "lat": "-21.783787400000001",
            "lng": "-48.175862100000003",
            "address": "R GONCALVES DIAS. 1360"
        },
        {
            "name": "POSTO SHELL - J E PETROLEO LTDA",
            "lat": "-8.2869410000000006",
            "lng": "-35.97345",
            "address": "RUA PROFESSOR AUGUSTO TABOSA. 49"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO BOM PRINCIPIO LTDA",
            "lat": "-25.926722999999999",
            "lng": "-53.478836000000001",
            "address": "AV DAS MISSOES. SN"
        },
        {
            "name": "POSTO SHELL - TRUCCOLLO E CIA LTDA",
            "lat": "-25.105885000000001",
            "lng": "-50.1601",
            "address": "R DOUTOR PAULA XAVIER. 370"
        },
        {
            "name": "POSTO SHELL - M M PETROLEO LTDA",
            "lat": "-3.7572871999999999",
            "lng": "-38.6569231",
            "address": "AV IMPAR ULISSES GUIMARAES. SN"
        },
        {
            "name": "POSTO SHELL - FLM ADM DE PARTIC EM OUTRAS SOC LT",
            "lat": "-3.0162197000000002",
            "lng": "-60.029392999999999",
            "address": "AVE TORQUATO TAPAJOS. 7033"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SILVA E OREM LTDA",
            "lat": "-23.497095760000001",
            "lng": "-47.442853980000002",
            "address": "AV SAO PAULO. 771"
        },
        {
            "name": "POSTO SHELL - POSTO FLEX COM DISTR COMB LUBR LTDA",
            "lat": "-3.7201179999999998",
            "lng": "-38.549802",
            "address": "AV FRANCISCO SA. 2707"
        },
        {
            "name": "POSTO SHELL - LEAO CENTER AUTO POSTO LTDA",
            "lat": "-23.3518443",
            "lng": "-46.008795499999998",
            "address": "ROD GENERAL EURYALE J Z. 2880 KM 89"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SANTANA DE SUMARE LTDA",
            "lat": "-22.802800000000001",
            "lng": "-47.24",
            "address": "ROD VIRGINIA VIEL C DALLORT. SN KM2"
        },
        {
            "name": "POSTO SHELL - ARGETAX ADMIN E PAR EM EMP COM LTDA",
            "lat": "-23.613759999999999",
            "lng": "-46.601225999999997",
            "address": "RUA REGINO ARAGAO. 38"
        },
        {
            "name": "POSTO SHELL - ARGETAX ADMIN E PAR EM EMP COM LTDA",
            "lat": "-23.508907449999999",
            "lng": "-46.600219950000003",
            "address": "RUA CHICO PONTES. 1292"
        },
        {
            "name": "POSTO SHELL - ARGETAX ADMIN E PAR EM EMP COM LTDA",
            "lat": "-23.485493999999999",
            "lng": "-46.551298000000003",
            "address": "AV CARLOS FERREIRA ENDRES. 875 A"
        },
        {
            "name": "POSTO SHELL - CENTRO AUT ALTO DA BOA VISTA LTDA",
            "lat": "-23.657018099999998",
            "lng": "-46.699890699999997",
            "address": "R BORBA GATO. 680"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MELEIRO LTDA",
            "lat": "-28.8318373",
            "lng": "-49.636208699999997",
            "address": "ROD ORACIDIO OLIVO. 60"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO LINCE DO VALE EIRELI",
            "lat": "-23.192736700000001",
            "lng": "-45.869762700000003",
            "address": "R RIO GRANDE DO SUL. 317"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO RETAO DA DUTRA LTDA",
            "lat": "-23.277793200000001",
            "lng": "-45.951523599999902",
            "address": "AV GETULIO DORNELES VAR. 1425 LJ 01"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PRAIA DE S FRANCISCO LTD",
            "lat": "-23.437581000000002",
            "lng": "-45.090384999999998",
            "address": "ROD OSWALDO CRUZ. 770"
        },
        {
            "name": "POSTO SHELL - A P TEXANO I SHOP CENTER LTDA",
            "lat": "-25.43437389",
            "lng": "-49.525301919999997",
            "address": "ROD BR277. SN KM-123 LD"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO RM E FILHOS EIRELI",
            "lat": "-6.0684911000000001",
            "lng": "-49.903447200000002",
            "address": "ROD MUNICIPAL FARUK SALME. SN KM 05"
        },
        {
            "name": "POSTO SHELL - JH COMBUSTIVEIS LTDA ME",
            "lat": "-26.949639999999999",
            "lng": "-48.7531873",
            "address": "ROD SC 486. 5500 ANTONIO HEIL"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.222992999999999",
            "lng": "-49.389617000000001",
            "address": "ROD DEPUTADO GENSIO TURECK SC. 1125"
        },
        {
            "name": "POSTO SHELL - WL COM DE COMB DER PET LTDA EPP",
            "lat": "-6.0745772999999996",
            "lng": "-49.875596100000003",
            "address": "R XAVANTES. SN QD 7 LT 17 E 18"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO REAL DE BANGU LTDA",
            "lat": "-22.875283400000001",
            "lng": "-43.471608179999997",
            "address": "R CORONEL TAMARINDO. 2354"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO EUROPA GARDEN LTDA",
            "lat": "-23.5033306871475",
            "lng": "-46.386381285128998",
            "address": "AV MARECHAL TITO. 7059"
        },
        {
            "name": "POSTO SHELL - CENTRO AUT GUARUMON LTDA",
            "lat": "-23.435831100000001",
            "lng": "-46.505741099999902",
            "address": "AV OCTAV BRAGA MESQUITA ESQ. SN L5B"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO RM E FILHOS EIRELI",
            "lat": "-6.0751759999999999",
            "lng": "-49.889591699999997",
            "address": "AV LIBERDADE. SN CHAC03 BOA VENT"
        },
        {
            "name": "POSTO SHELL - NOVO HORIZONTE COMB LTDA",
            "lat": "-13.81251956",
            "lng": "-56.086452559999998",
            "address": "RUA DAS ROSAS. 1242N L4.5 E 17. Q84"
        },
        {
            "name": "POSTO SHELL - LIDER COMERCIO DE COMBUST LTDA EPP",
            "lat": "-1.3525054000000001",
            "lng": "-48.418843099999997",
            "address": "RODOVIA DO 40 HORAS. 10"
        },
        {
            "name": "POSTO SHELL - LIDER COM DE COMB LTDA EPP",
            "lat": "-1.356328",
            "lng": "-48.368254",
            "address": "AV ZACARIAS DE ASSU. QD 59 QD59 L14"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO TRADICAO LTDA",
            "lat": "-26.239066959999999",
            "lng": "-49.500508349999997",
            "address": "ROD BR 280. 2400"
        },
        {
            "name": "POSTO SHELL - TERRA STA CRUZ POSTO SERV LTDA",
            "lat": "-22.92015",
            "lng": "-43.681742999999997",
            "address": "AV ISABEL. 37 ESQ R FELIPE CA"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO RETAO DA DUTRA LTDA",
            "lat": "-23.203672999999998",
            "lng": "-45.945492000000002",
            "address": "AV SHISHIMA HIFUMI. 2320"
        },
        {
            "name": "POSTO SHELL - BOX 44 POSTO E SERVICOS LTDA",
            "lat": "-23.547179",
            "lng": "-46.834274000000001",
            "address": "AV INOCENCIO SERAFICO. 2660"
        },
        {
            "name": "POSTO SHELL - REDE AUTOMAN 2 POSTO DE SERV LTDA",
            "lat": "-23.624212289999999",
            "lng": "-46.540888430000003",
            "address": "AV DA PAZ. 712"
        },
        {
            "name": "POSTO SHELL - REDE AUTOMAN POSTO DE SERVICO LTDA",
            "lat": "-23.638797499999999",
            "lng": "-46.533435599999997",
            "address": "R DISTRITO FED. 443 FRENTE AV ESTAD"
        },
        {
            "name": "POSTO SHELL - F F COM VAR DER DE PET LTDA ME",
            "lat": "-3.0309735999999998",
            "lng": "-59.963344799999902",
            "address": "AV CAMAPUA. 190 LOTE AC 8B"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ORTIZ LTDA",
            "lat": "-23.789097999999999",
            "lng": "-53.078852900000001",
            "address": "ROD PR 323 KM 288. SN LT TERRAS 14"
        },
        {
            "name": "POSTO SHELL - PIMENTEL ROCHA LTDA",
            "lat": "-7.563015",
            "lng": "-35.013142999999999",
            "address": "R CORACAO DE JES. SN VL CAST BRANCO"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO A2 LTDA",
            "lat": "-23.463968999999999",
            "lng": "-47.478914000000003",
            "address": "AV ITAVUVU. 2420"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO DOIS IRMAOS LTDA",
            "lat": "-22.76463665",
            "lng": "-42.078825270000003",
            "address": "ROD RODVIA RJ106. SN KM 116"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GUINE LTDA",
            "lat": "-25.346978",
            "lng": "-49.265746",
            "address": "AV FRANCISCO KRUGER. 6371"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO TIMOR LTDA",
            "lat": "-25.262608400000001",
            "lng": "-49.302462499999997",
            "address": "ROD DOS MINERIOS. 5300"
        },
        {
            "name": "POSTO SHELL - POSTO NOVA ARICANDUVA LTDA",
            "lat": "-23.552589099999999",
            "lng": "-46.5204509",
            "address": "AV ARICANDUVA. 3498"
        },
        {
            "name": "POSTO SHELL - POSTO MATEUS DER DE PETROLEO LTDA",
            "lat": "-7.3580437999999999",
            "lng": "-41.1332472",
            "address": "ROD BR 407. SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO DE COMB CUMBUCO LTDA",
            "lat": "-3.6594557999999999",
            "lng": "-38.686514600000002",
            "address": "EST TABUBA CUMBUC. SN II ETAPA"
        },
        {
            "name": "POSTO SHELL - A ANGELONI E CIA LTDA",
            "lat": "-26.914389400000001",
            "lng": "-49.079976899999998",
            "address": "R JOAO PESSOA. 522"
        },
        {
            "name": "POSTO SHELL - RISSATO E NARCISO COMERCIAL LTDA ME",
            "lat": "-21.203376290000001",
            "lng": "-47.82732129",
            "address": "AV LUZITANA. 20"
        },
        {
            "name": "POSTO SHELL - TYRESOLES DE SE IND COM E SERV LTDA",
            "lat": "-10.927242",
            "lng": "-37.663711999999997",
            "address": "ROD ANTONIO MARTINS DE MENEZES. 584"
        },
        {
            "name": "POSTO SHELL - H D PORTELLA E CIA LTDA",
            "lat": "-29.681186400000001",
            "lng": "-53.792905400000002",
            "address": "RUA EUCLIDES DA CUNHA.1200"
        },
        {
            "name": "POSTO SHELL - S S COMERCIO DE COMBUSTIVEIS SA",
            "lat": "-28.283207000000001",
            "lng": "-52.373078999999997",
            "address": "AV PRES VARGAS. 3767"
        },
        {
            "name": "POSTO SHELL - PILECCO PAIM E CIA LTDA",
            "lat": "-29.808085899999998",
            "lng": "-55.851681599999999",
            "address": "EST BR 290. 1860 KM 576"
        },
        {
            "name": "POSTO SHELL - PAGNUSSAT COMERCIO DE COMBUST LTDA",
            "lat": "-25.978052210000001",
            "lng": "-52.813555780000002",
            "address": "ROD PR 469. SN KM 32 CASA"
        },
        {
            "name": "POSTO SHELL - FABIO ALHER",
            "lat": "-22.900718000000001",
            "lng": "-48.450271999999998",
            "address": "R EMILIO CANI. 911"
        },
        {
            "name": "POSTO SHELL - POSTO BOA VISTA LTDA",
            "lat": "-24.657269889999998",
            "lng": "-50.860540929999999",
            "address": "AV CORONEL ROGERIO BORBA. SN"
        },
        {
            "name": "POSTO SHELL - POSTO BOA VISTA LTDA",
            "lat": "-25.09825",
            "lng": "-50.179430000000004",
            "address": "AV VISCONDE DE TAUNAY. 1758"
        },
        {
            "name": "POSTO SHELL - POSTO BOA VISTA LTDA",
            "lat": "-25.102919",
            "lng": "-50.162230000000001",
            "address": "R BALDUINO TAQUES. 750"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GASOSAN LTDA",
            "lat": "-23.2873573",
            "lng": "-51.262231800000002",
            "address": "R DA ESPERANCA. 150"
        },
        {
            "name": "POSTO SHELL - COMERCIO DE COMB GHIDINI LTDA",
            "lat": "-24.959139799999999",
            "lng": "-53.4605064",
            "address": "R SETE DE SETEMBRO. 2664"
        },
        {
            "name": "POSTO SHELL - FLORIDA COMERCIO DE COMB LTDA",
            "lat": "-25.406663399999999",
            "lng": "-49.251382",
            "address": "R JOAQUIM JOSE PEDROSA. 425"
        },
        {
            "name": "POSTO SHELL - POSTO BOA VISTA LTDA",
            "lat": "-25.082173969999999",
            "lng": "-50.188507340000001",
            "address": "AV DOM PEDRO II. 1383"
        },
        {
            "name": "POSTO SHELL - POSTO BOA VISTA LTDA",
            "lat": "-25.09329",
            "lng": "-50.123759",
            "address": "AV GENERAL CARLOS CAVALCANTI.. 2840"
        },
        {
            "name": "POSTO SHELL - POSTO BOA VISTA LTDA",
            "lat": "-25.05762",
            "lng": "-50.135779999999997",
            "address": "AV MONTEIRO LOBATO. 5187"
        },
        {
            "name": "POSTO SHELL - POSTO BOA VISTA LTDA",
            "lat": "-25.470435999999999",
            "lng": "-50.634225999999998",
            "address": "AV JOSE GALICIOLI. 1005"
        },
        {
            "name": "POSTO SHELL - JC 4708 POSTO DE SERVICOS LTDA",
            "lat": "-22.923187384859499",
            "lng": "-43.450257295554898",
            "address": "ETR DE SANTA EUGENIA. 1711 LOTE 01"
        },
        {
            "name": "POSTO SHELL - MORUMBI COMBUSTIVEIS LTDA",
            "lat": "-22.730792560000001",
            "lng": "-47.613543190000001",
            "address": "AV DOUTOR CASSIO PASCHOAL PAD. 1410"
        },
        {
            "name": "POSTO SHELL - PONTES E LANDIM COMB LTDA EPP",
            "lat": "-3.7724499999999899",
            "lng": "-38.672041",
            "address": "ROD ESTRUTURANTE CE 085. SN KM 22"
        },
        {
            "name": "POSTO SHELL - CSB COMERCIO DE COMBUSTIVEIS LTDA",
            "lat": "-15.641619199999999",
            "lng": "-56.130664499999902",
            "address": "AV ULISSES POMPEU DE CAMPOS. SN"
        },
        {
            "name": "POSTO SHELL - BARAO DE TATUI AUTO POSTO LTDA",
            "lat": "-23.350100000000001",
            "lng": "-47.842500000000001",
            "address": "RUA SAO BENTO. 587"
        },
        {
            "name": "POSTO SHELL - REBUCCI AUTO POSTO LTDA",
            "lat": "-21.633634000000001",
            "lng": "-49.787025",
            "address": "VIA DE ACESSO HERMINIO PAIZAN. 1440"
        },
        {
            "name": "POSTO SHELL - POSTO DE COMB AMOR DE BANGU LTDA",
            "lat": "-22.861588000000001",
            "lng": "-43.451991999999997",
            "address": "EST DA CANCELA PRETA. 96"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERVICOS MALTA 07 LTDA",
            "lat": "-23.642349219584801",
            "lng": "-46.701241105101701",
            "address": "AV JOAO DIAS. 1906"
        },
        {
            "name": "POSTO SHELL - POSTO ZONA SUL DE RIBEIRAO LTDA",
            "lat": "-21.214848750000002",
            "lng": "-47.795010380000001",
            "address": "AV CARLOS EDUARDO DE G CONSON. 1131"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERVICO MALTA 02 LTDA",
            "lat": "-23.591999999999999",
            "lng": "-46.546500000000002",
            "address": "R ROQUE BARBOSA LIM. 326 TERREO 332"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO VARELA LTDA",
            "lat": "-25.415284400000001",
            "lng": "-49.234773099999998",
            "address": "R FAGUNDES VARELA. 665"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO M FRUTAL LTDA",
            "lat": "-20.0255592",
            "lng": "-48.936230100000003",
            "address": "ROD BR 153. SN KM 186"
        },
        {
            "name": "POSTO SHELL - POSTO BOA VISTA LTDA",
            "lat": "-25.114001850000001",
            "lng": "-50.120687439999998",
            "address": "R SIQUEIRA CAMPOS. 2299"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA VILA FLOR LTDA",
            "lat": "-22.816053",
            "lng": "-43.187514399999998",
            "address": "EST DO GALEAO. 12"
        },
        {
            "name": "POSTO SHELL - POSTO DE GAS NOVA ESPERANCA LT DA",
            "lat": "-22.879538877279099",
            "lng": "-43.271816141931602",
            "address": "AV PASTOR MARTIN LUTHER KING . 1661"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO TAPAJOS LTDA",
            "lat": "-19.536618900000001",
            "lng": "-54.042660599999998",
            "address": "R PEDRO CELESTINO. 901"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO QUALIDADE LTDA",
            "lat": "-21.802587760000002",
            "lng": "-43.370524619999998",
            "address": "AV DEUSDEDITH SALGADO. 3600 GALPAO"
        },
        {
            "name": "POSTO SHELL - REDE DE POSTOS MARAJO CUIABA LTDA",
            "lat": "-15.6790641",
            "lng": "-56.174663099999997",
            "address": "ROD DOS IMIGRANTES. SN KM23"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ZETA LTDA",
            "lat": "-23.657699999999998",
            "lng": "-46.696399999999997",
            "address": "AV WASHINGTON LUIS. 870"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MELO BORGES EIRELI",
            "lat": "-19.766507900000001",
            "lng": "-47.988844999999998",
            "address": "R ANESIO LEITE. 870"
        },
        {
            "name": "POSTO SHELL - POSTO SHOPPING EIRELI",
            "lat": "-19.765357999999999",
            "lng": "-47.947488999999997",
            "address": "AV APOLONIO SALES. 540"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO XADAI LTDA",
            "lat": "-23.318918",
            "lng": "-51.135609000000002",
            "address": "AV SAO JOAO. 1217"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO SBC LTDA",
            "lat": "-23.714072980000001",
            "lng": "-46.586479349999998",
            "address": "AV HUMBERTO A CASTELO BRANCO.2595"
        },
        {
            "name": "POSTO SHELL - A P HIGIENOPOLIS RIBEIRAO PRETO LTD",
            "lat": "-21.187216599999999",
            "lng": "-47.806092900000003",
            "address": "AV INDEPENDENCIA. 987"
        },
        {
            "name": "POSTO SHELL - POSTO MARECHAL RONDON LTDA",
            "lat": "-16.47",
            "lng": "-54628",
            "address": "AV MAL RONDON ESQ COM A R FLOR. 269"
        },
        {
            "name": "POSTO SHELL - JC BERGAMASCO COM VAR COMB E DERV",
            "lat": "-23.17438018",
            "lng": "-50.627308079999999",
            "address": "AV DOM PEDRO I. 1510"
        },
        {
            "name": "POSTO SHELL - MIL DISTRIBUIDORA DE PETROLEO LTDA",
            "lat": "-16.711529500000001",
            "lng": "-49.253007820000001",
            "address": "AV CIRCULAR. 1218 Q25 LT01E"
        },
        {
            "name": "POSTO SHELL - COM DE DER DE PET ESTRELA LTDA",
            "lat": "-8.74625599999999",
            "lng": "-63.903193000000002",
            "address": "AVENIDA LAURO SODRE. 2020"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA SOL DA PRAIA LTDA",
            "lat": "-22.798791680000001",
            "lng": "-43.195978760000003",
            "address": "RUA JAIME PERDIGAO. 292"
        },
        {
            "name": "POSTO SHELL - ENZO QUEIMADOS LTDA",
            "lat": "-22.724876200000001",
            "lng": "-43.558948700000002",
            "address": "R VER MARINHO HEM OLIVEIRA. 1026"
        },
        {
            "name": "POSTO SHELL - ENZO ITAGUAI LTDA",
            "lat": "-22.8665387",
            "lng": "-43.777223999999997",
            "address": "ROD RIO SANTOS. SN LT 8 QD 5"
        },
        {
            "name": "POSTO SHELL - POSTO MEGA VERAO LTDA",
            "lat": "-23.006103070000002",
            "lng": "-43.316354199999999",
            "address": "AV ARMANDO LOMBARDI. 1100"
        },
        {
            "name": "POSTO SHELL - ALTOS PETROLEO LTDA",
            "lat": "-5.0399506000000001",
            "lng": "-42.4739754",
            "address": "ROD BR 343 TERESINA ALTOS. SN KM 27"
        },
        {
            "name": "POSTO SHELL - POSTO DE SERVICO MALTA 01 LTDA",
            "lat": "-23.584693000000001",
            "lng": "-46.586585999999997",
            "address": "AV PROF LUIZ IGNACIO ANHAIA ME. 680"
        },
        {
            "name": "POSTO SHELL - SP POSTO COM COMB VEICULOS LTDA",
            "lat": "-3.0979825999999999",
            "lng": "-60.009644600000001",
            "address": "AV JORN HUMBERTO CALDERARO FI. 1712"
        },
        {
            "name": "POSTO SHELL - FCJ COMBUSTIVEIS E CONVENIENCIA LTD",
            "lat": "-8.1547909999999995",
            "lng": "-34.946223000000003",
            "address": "ROD EMPRESARIO JOAO SANTOS FIL. 471"
        },
        {
            "name": "POSTO SHELL - REDE POSTOS MARAJO GR GOIANIA LTDA",
            "lat": "-16.968018499999999",
            "lng": "-49.231666999999902",
            "address": "ROD BR 153. SN KM 540"
        },
        {
            "name": "POSTO SHELL - PORTELA AUTO POSTO LTDA",
            "lat": "-3.0572697999999998",
            "lng": "-60.109676699999902",
            "address": "AV CORONEL TEIXEIRA. 9555"
        },
        {
            "name": "POSTO SHELL - PORTAL DOS BANDEIRANTES P FELIZ AUT",
            "lat": "-23.240120919999999",
            "lng": "-47.517145970000001",
            "address": "AL BENEDITA CAROLINA DA. SN GLEBA C"
        },
        {
            "name": "POSTO SHELL - COMERCIAL ANTONIO BENVINDO LTDA",
            "lat": "-7.842498",
            "lng": "-35.760786000000003",
            "address": "AV SAO SEBASTIAO. 135"
        },
        {
            "name": "POSTO SHELL - POSTO DE COMBUSTIVEIS FENIX LTDA",
            "lat": "-22.842875100000001",
            "lng": "-42.097658000000003",
            "address": "ROD RJ 140. 100"
        },
        {
            "name": "POSTO SHELL - BOITUVA COMERCIO DE COMBUSTIVEIS LT",
            "lat": "-23.302264659999999",
            "lng": "-47.660532869999997",
            "address": "AV ANTONIO ANGELO AMADIO. 501"
        },
        {
            "name": "POSTO SHELL - H N AUTO POSTO LTDA",
            "lat": "-12.549504199999999",
            "lng": "-55.712646799999902",
            "address": "RODOVIA BR 163. SN KM 741"
        },
        {
            "name": "POSTO SHELL - ST COM DE COMBUST E LUBRI LTDA",
            "lat": "-14.860649199999999",
            "lng": "-40.843577199999999",
            "address": "AV BARTOLOMEU DE GUSMAO. 547"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO NHAMBIQUARAS LTDA",
            "lat": "-23.611415999999998",
            "lng": "-46.663496000000002",
            "address": "AL DOS NHAMBIQUARAS. 1555"
        },
        {
            "name": "POSTO SHELL - POTENZA PETROL SERV AUTOMOTI EIRELI",
            "lat": "-23.54812935",
            "lng": "-46.736498689999998",
            "address": "AVENIDA JAGUARE. 1662"
        },
        {
            "name": "POSTO SHELL - COM COMBS BV LTDA",
            "lat": "-30.130174",
            "lng": "-51.097558999999997",
            "address": "EST JOAO OLIVEIRA REMIAO. 7810"
        },
        {
            "name": "POSTO SHELL - COMERCIO DE COMBUSTIVEIS ABBC LTDA",
            "lat": "-29.997885400000001",
            "lng": "-51.1555745",
            "address": "R OURO PRETO. 980"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO 5300 LTDA EPP",
            "lat": "-23.557747599999999",
            "lng": "-46.619067459999997",
            "address": "RUA DOS ALPES. 41"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO IRMAOS ROTTAVA LTDA",
            "lat": "-8.7500450000000001",
            "lng": "-63.860757",
            "address": "AV PINHEIRO MACHADO. 5826"
        },
        {
            "name": "POSTO SHELL - COOPERCITRUS COOP PRODUTORES RURAIS",
            "lat": "-18.643981100000001",
            "lng": "-48.208556599999902",
            "address": "AV SENADOR MELO VIANA. 1055"
        },
        {
            "name": "POSTO SHELL - POSTO NOVENTA E CINCO LTDA",
            "lat": "-12.088624299999999",
            "lng": "-45.775746099999999",
            "address": "AV JK. 2733 TERREO"
        },
        {
            "name": "POSTO SHELL - EUROPA EMPREENDIMENTOS LTDA",
            "lat": "-22.951837000000001",
            "lng": "-46.544943000000004",
            "address": "AV JOSE GOMES DA ROCHA LEAL. 1718"
        },
        {
            "name": "POSTO SHELL - BEIRA RIO PIRACICABA COMB SERV LTDA",
            "lat": "-22.715078999999999",
            "lng": "-47.647826000000002",
            "address": "AV TORQUATO SILVA LEITAO. 89"
        },
        {
            "name": "POSTO SHELL - S S COMERCIO DE COMBUSTIVEIS S A",
            "lat": "-28.421198",
            "lng": "-52.215581",
            "address": "EST ERS 324. SN KM 88"
        },
        {
            "name": "POSTO SHELL - ARGOS COMB LUB LTDA EPP",
            "lat": "-12.2338006",
            "lng": "-38.948500000000003",
            "address": "R TUPINAMBAS. 4000"
        },
        {
            "name": "POSTO SHELL - AEGA COMERCIAL GASOLINE BEACH LTDA",
            "lat": "-3.833037",
            "lng": "-38.405728400000001",
            "address": "V CAMINHO DO SOL III ETAPA. 3706"
        },
        {
            "name": "POSTO SHELL - PEROLA COM DE DERIV DE PETROLEO LTD",
            "lat": "-14.8561864",
            "lng": "-40.841666600000003",
            "address": "PC VICTOR BRITO. 134"
        },
        {
            "name": "POSTO SHELL - NATUREZA COMERCIO E SERVICOS LTDA",
            "lat": "-2.553823",
            "lng": "-44.066391000000003",
            "address": "ROD MA 201. 1999"
        },
        {
            "name": "POSTO SHELL - POSTO GAS EST BAND VARGEM PQ LT",
            "lat": "-22.98629206",
            "lng": "-43.459840239999998",
            "address": "EST DOS BANDEIRANTES. 13951"
        },
        {
            "name": "POSTO SHELL - POSTO TRILHA LTDA",
            "lat": "-20.244394700000001",
            "lng": "-40.274319499999997",
            "address": "AV JOSE MARIA VIVACQUA SANTOS. 1250"
        },
        {
            "name": "POSTO SHELL - MACK VI COM DERIV PETROL LTDA",
            "lat": "-3.8227126999999999",
            "lng": "-38.481509699999997",
            "address": "R FRANCISCO LEANDRO. 250"
        },
        {
            "name": "POSTO SHELL - VW2 COMERCIO DE COMB EIRELI",
            "lat": "-23.109323799999999",
            "lng": "-51.533873",
            "address": "R AGENOR RISCALLI. 100"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO DOS PASSAROS LTDA",
            "lat": "-23.575066700000001",
            "lng": "-46.765773199999998",
            "address": "AV ESCOLA POLITECNICA. 5050"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PRIMAVERA LTDA",
            "lat": "-7.1097899999999896",
            "lng": "-49.939213100000003",
            "address": "R AMAZONAS. SN KM 510"
        },
        {
            "name": "POSTO SHELL - ROTA DERIVADOS DE PETROLEO LTDA",
            "lat": "-8.3674636899999992",
            "lng": "-35.008078079999997",
            "address": "ROD PE 009. SN KM41 SUAPE"
        },
        {
            "name": "POSTO SHELL - POSTO AMERICA LTDA",
            "lat": "-8.1119235700000001",
            "lng": "-35.20795983",
            "address": "ROD LUIZ GONZAGA. SN KM32"
        },
        {
            "name": "POSTO SHELL - COMERC COMBUST CASARIN EIRELI EPP",
            "lat": "-23.339020000000001",
            "lng": "-51.185698000000002",
            "address": "ROD MABIO GONCALVES . 155 LOTE 2A2B"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO RIVIERA ITATIBA L",
            "lat": "-23.008966999999998",
            "lng": "-46.830612000000002",
            "address": "AV DA SAUDADE. 350 370"
        },
        {
            "name": "POSTO SHELL - POSTO Z Z SAO JUDAS TADEU LTDA",
            "lat": "-16.615738",
            "lng": "-49.243698999999999",
            "address": "AV PRES KENNEDY. 1675 QD 49 LT 01E"
        },
        {
            "name": "POSTO SHELL - JOSE MOACYR FATTOR E CIA LTDA",
            "lat": "-22.2465844",
            "lng": "-53.347499900000003",
            "address": "AV ANTONIO J DE M ANDRADE. 1100"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-26.9224298",
            "lng": "-48.675066600000001",
            "address": "AV VEREADOR ABRAHAO JOAO FRAN. 2700"
        },
        {
            "name": "POSTO SHELL - PETRO KF COM DE COMBUSTIVEIS LTDA E",
            "lat": "-15.6202845",
            "lng": "-56.082407500000002",
            "address": "ROD MT 010. SN KM 22"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PRA FRENTE BRASIL LTDA",
            "lat": "-24.981728199999999",
            "lng": "-53.452579499999999",
            "address": "RUA CARLOS GOMES. 1404"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO GIGANTE DE CONTENDA SA",
            "lat": "-25.688702200000002",
            "lng": "-49.538939900000003",
            "address": "ROD DO XISTO BR 476. 3150"
        },
        {
            "name": "POSTO SHELL - MIRAGE COMERCIO DE COMBUSTIVEIS LTD",
            "lat": "-23.664355",
            "lng": "-46.458413999999998",
            "address": "AV ANTONIA ROSA FIORAVANTI. 1020"
        },
        {
            "name": "POSTO SHELL - CHICAGO POSTO DE SERVICOS LTDA",
            "lat": "-23.4090326",
            "lng": "-46.847763800000003",
            "address": "AVENIDA TENENTE MARQUES. 995"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ROMA SACCHI LTDA",
            "lat": "-22.570354999999999",
            "lng": "-47.170065000000001",
            "address": "R HUMBERTO ROSSETTI. 214"
        },
        {
            "name": "POSTO SHELL - CIRO GOMES MAGALHAES",
            "lat": "-4.9565313",
            "lng": "-39.007366500000003",
            "address": "AVENIDA JESUS MARIA JOSE. 3785"
        },
        {
            "name": "POSTO SHELL - NAILTON PASSOS E CIA COM PETRO LTDA",
            "lat": "-2.9048786999999998",
            "lng": "-41.777718399999998",
            "address": "AV LEONARDO C CASTELO BRANCO. 6065"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO JD INTER DE HORTOLANDIA",
            "lat": "-22.8915948",
            "lng": "-47.2069805",
            "address": "R RIO SO FRANCISCO. 190"
        },
        {
            "name": "POSTO SHELL - HP CHAVES COME DE COMBUSTIVEIS LTDA",
            "lat": "-3.84075926",
            "lng": "-38.636801849999998",
            "address": "R VICENTE ALVES DE PAULA. 150"
        },
        {
            "name": "POSTO SHELL - COOPERCITRUS COOP DE PROD RURAIS",
            "lat": "-21.772516",
            "lng": "-48.841420999999997",
            "address": "AVENIDA DAS BORDADEIRA. 955 BLOCO 3"
        },
        {
            "name": "POSTO SHELL - PERIMETRAL COM COMBUSTIVEIS LTDA",
            "lat": "-3.7725010499999998",
            "lng": "-38.589131680000001",
            "address": "R DIOGO CORREIA. 210"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO AMG LTDA",
            "lat": "-23.0275",
            "lng": "-45.603056000000002",
            "address": "AV CARLOS PEDROSO DA SILVEIRA. 1111"
        },
        {
            "name": "POSTO SHELL - PORTAL DE BARUERI SERV AUTOM LTDA",
            "lat": "-23.510954000000002",
            "lng": "-46.879584999999999",
            "address": "AV HENRIQUETA MENDES GUERRA. 486"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO VELOZ LTDA",
            "lat": "-9.5654071999999992",
            "lng": "-35.776296799999997",
            "address": "AV MENINO MARCELO. 4420"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO PAMPA LTDA",
            "lat": "-21.784863999999999",
            "lng": "-46.550353999999999",
            "address": "AVENIDA JOSE REMIGIO PREZIA. 609"
        },
        {
            "name": "POSTO SHELL - POSTO ZE CARIOCA LTDA",
            "lat": "-16.742268200000002",
            "lng": "-49.329473399999998",
            "address": "AV PRESIDENTE. 1644 QD 40 LT 171927"
        },
        {
            "name": "POSTO SHELL - LEC COM DE COMB E SERV LTDA",
            "lat": "-12.513876099999999",
            "lng": "-38.495181299999999",
            "address": "ROD BR 324. SN KM 576"
        },
        {
            "name": "POSTO SHELL - POSTO DOIS MIL SALTO LTDA",
            "lat": "-23.1855726",
            "lng": "-47.272815700000002",
            "address": "RUA JAPAO. 1014"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO AMERICA LTDA ME",
            "lat": "-19.669134",
            "lng": "-51.179789",
            "address": "AV QUEDU LEAL. 895"
        },
        {
            "name": "POSTO SHELL - DALLAS AUTO POSTO PRUDENTE LTDA",
            "lat": "-22.116223000000002",
            "lng": "-51.411591000000001",
            "address": "AV MANOEL GOULART. 3000"
        },
        {
            "name": "POSTO SHELL - LAGV COMBUSTIVEIS LTDA",
            "lat": "-3.8429422999999998",
            "lng": "-38.569105200000003",
            "address": "AV RADIALISTA JOAO RAMOS. 1260"
        },
        {
            "name": "POSTO SHELL - LVBE COMBUSTIVEIS LTDA",
            "lat": "-3.8420150899999999",
            "lng": "-38.573743790000002",
            "address": "AV RAD JOAO RAMOS. 1845"
        },
        {
            "name": "POSTO SHELL - COSTA NETO POSTO DE COMB LTDA ME",
            "lat": "-22.3351446",
            "lng": "-41.7577353",
            "address": "EST HILDEBRANDO ALVES BARBOSA. 3463"
        },
        {
            "name": "POSTO SHELL - POSTO AGRICOPEL LTDA",
            "lat": "-27.450643800000002",
            "lng": "-48.512555599999999",
            "address": "ROD FRANCISCO MAGNO VIERA. 865"
        },
        {
            "name": "POSTO SHELL - CENTRO AUT E COM DE COMB MAXXIMA",
            "lat": "-23.7050725",
            "lng": "-46.576467100000002",
            "address": "AV ROBERT KENNEDY. 1650"
        },
        {
            "name": "POSTO SHELL - JUAZEIRO DERIVADOS DE PETROLEO LTDA",
            "lat": "-9.4242126000000006",
            "lng": "-40.500399399999999",
            "address": "AV SAARA. SN"
        },
        {
            "name": "POSTO SHELL - POSTO J3 ARACATUBA LTDA",
            "lat": "-21.203886000000001",
            "lng": "-50.439847999999998",
            "address": "AV DOS ARACAS. 1400"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO SELENE LTDA",
            "lat": "-23.541872000000001",
            "lng": "-46.339151999999999",
            "address": "R JOAO PEKNY. 1210"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA E BAR GAROA LTDA",
            "lat": "-22.993254",
            "lng": "-43.255389000000001",
            "address": "ETR DA GAVEA. 586"
        },
        {
            "name": "POSTO SHELL - COM VAREJISTA COMB PARAISO BAR LTDA",
            "lat": "-23.492548599999999",
            "lng": "-46.882257499999902",
            "address": "AV CAPITAO FRANCISCO CEZAR. 196"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO QUINHONE E FILHOS LTDA",
            "lat": "-21.198089",
            "lng": "-47.764625299999999",
            "address": "AV PRESIDENTE KENNEDY. 2140"
        },
        {
            "name": "POSTO SHELL - SUPER POSTO TREVAO EIRELI",
            "lat": "-6.1099546",
            "lng": "-49.351161900000001",
            "address": "AV SAO GERALDO. SN"
        },
        {
            "name": "POSTO SHELL - ITAPERAPUAN COM COMBUSTIVEIS LTDA",
            "lat": "-16.396512999999999",
            "lng": "-39.042127999999998",
            "address": "AVENIDA BEIRA MAR. 5595"
        },
        {
            "name": "POSTO SHELL - CHACEM COMERCIAL DE COMBUSTIVEIS",
            "lat": "-3.8247383899999998",
            "lng": "-38.548881889999997",
            "address": "AV PRESIDENTE COSTA E SILVA. 3602"
        },
        {
            "name": "POSTO SHELL - POSTO SER ALIANCA CAMPO GRANDE LTDA",
            "lat": "-22.9090533637767",
            "lng": "-43.268614476288498",
            "address": "AV SANTA CRUZ. 11275"
        },
        {
            "name": "POSTO SHELL - FENIX COMERCIO DE COMBUSTIVEIS LTDA",
            "lat": "-27.6438636",
            "lng": "-52.26926753",
            "address": "RUA ESPIRITO SANTO. 45"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ML AYRTON SENNA LTDA",
            "lat": "-22.971599999999999",
            "lng": "-43.360520000000001",
            "address": "AV AYRTON SENNA. LT2 QD I PAL46342"
        },
        {
            "name": "POSTO SHELL - POSTO GLORIA II LTDA",
            "lat": "-22.228345699999998",
            "lng": "-45.931594500000003",
            "address": "R COMENDADOR JOSE GARCIA. 502"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO NOVO GALEAO LTDA",
            "lat": "-22.808140000000002",
            "lng": "-43.1967",
            "address": "EST DO GALEAO. 1346"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO NOVA RIBEIRA LTDA",
            "lat": "-22.8205802181465",
            "lng": "-43.180401824749403",
            "address": "PRAIA DE JEQUIA. 180"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO VANCOUVER LTDA",
            "lat": "-22.911186000000001",
            "lng": "-43.056680999999998",
            "address": "EST FRANCISCO DA CRUZ NUNES. 915"
        },
        {
            "name": "POSTO SHELL - MANAUS COM DE DERIV DE PET LTDA",
            "lat": "-3.1134233",
            "lng": "-60.041626899999997",
            "address": "AV BRASIL. 4089"
        },
        {
            "name": "POSTO SHELL - ITAPAGIPE COMERCIO DE COMB LTDA",
            "lat": "-12.7870268",
            "lng": "-38.4001199",
            "address": "VIA CIA AEROPORTO. SN ROD BA 526"
        },
        {
            "name": "POSTO SHELL - RM COMBUSTIVEIS LTDA ME",
            "lat": "-22.158868300000002",
            "lng": "-42.418721900000001",
            "address": "ROD PRES JOAO GOULART RJ 116 24. SN"
        },
        {
            "name": "POSTO SHELL - POSTO CIDADE DOS LAGOS LTDA EPP",
            "lat": "-25.3935271",
            "lng": "-51.456170099999902",
            "address": "RUA VEREADOR JACIR DE FRANCA LO. 60"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CENTRAL DE JACAREI LTDA",
            "lat": "-23.298877465149801",
            "lng": "-45.990505912786197",
            "address": "RUA BARAO DE JACAREI. 1481"
        },
        {
            "name": "POSTO SHELL - LE REVE AUTO POSTO LTDA",
            "lat": "-23.663955999999999",
            "lng": "-46.562520999999997",
            "address": "AV SENADOR VERGUEIRO. 3680"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO AMAZONMINAS LTDA ME",
            "lat": "2.8505848999999999",
            "lng": "-60.665453999999997",
            "address": "AV MINAS GERAIS. 747"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO LUSTOSA LTDA",
            "lat": "-25.423799899999999",
            "lng": "-49.272839400000002",
            "address": "R DUQUE DE CAXIAS. 399"
        },
        {
            "name": "POSTO SHELL - DAG DISTRIBUIDORA DE COMBUST LTDA.",
            "lat": "-3.86576549999999",
            "lng": "-38.515156699999999",
            "address": "ROD ANEL VIARIO. 2121"
        },
        {
            "name": "POSTO SHELL - EUROPA EMPREENDIMENTOS LTDA",
            "lat": "-22.976964049999999",
            "lng": "-46.533622809999997",
            "address": "RUA ALPHEU GRIMELLO. 990"
        },
        {
            "name": "POSTO SHELL - L S COMERCIO E SERVICOS LTDA",
            "lat": "-2.5631805000000001",
            "lng": "-44.062564199999997",
            "address": "ETR RAPOSA 01 06. SN MORADA SOL"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO G 10 LTDA",
            "lat": "-11.452714",
            "lng": "-61.4278762",
            "address": "AV CASTELO BRANCO. 15778"
        },
        {
            "name": "POSTO SHELL - SUPERMERCADO JACOMAR LTDA",
            "lat": "-25.514919599999999",
            "lng": "-49.243777899999998",
            "address": "R PAULO SETUBAL. 4430 TERREO"
        },
        {
            "name": "POSTO SHELL - F A COMERCIO DE COMBUSTIVEL LTDA ME",
            "lat": "-3.8732340999999999",
            "lng": "-38.464559199999997",
            "address": "AV EUSEBIO DE QUEIROZ. 2651"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO AMAZONMINAS LTDA EPP",
            "lat": "2.8171257000000001",
            "lng": "-60.6935462",
            "address": "ROD BR 174 KM 8 LO. SN GLEBA MURUPU"
        },
        {
            "name": "POSTO SHELL - LT NICHELE COMERCIO DE COMBUSTIVEIS",
            "lat": "-25.437003000000001",
            "lng": "-49.314476999999997",
            "address": "R PROF PEDRO VIRIATO PARIGOT D. 565"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO SOL LEVANTE LTDA",
            "lat": "-25.421989700000001",
            "lng": "-49.274103500000002",
            "address": "RUA TRAJANO REIS. 614"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CRIANCA LTDA",
            "lat": "-25.415512799999998",
            "lng": "-49.284479699999999",
            "address": "R ROBERTO BARROZZO. 1647"
        },
        {
            "name": "POSTO SHELL - TINDIBA AUTO POSTO LTDA",
            "lat": "-22.927413399999999",
            "lng": "-43.366688459999999",
            "address": "ETR DO TINDIBA. 1410"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MACKENZIE LTDA",
            "lat": "-23.503051985301202",
            "lng": "-46.824007740067202",
            "address": "AV TUCUNARE 1498"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO QS 09 LTDA",
            "lat": "-15.875482099999999",
            "lng": "-48.023902799999902",
            "address": "QS 09 RUA 123 LOTES 24 E 26. SN"
        },
        {
            "name": "POSTO SHELL - ARTEMIA DERIVADOS PETROLEO LTDA",
            "lat": "-12.2460548",
            "lng": "-38.909084200000002",
            "address": "AV ARTEMIA PIRES FREITAS. SN"
        },
        {
            "name": "POSTO SHELL - HAVAN AUTO CENTER LTDA",
            "lat": "-27.6459337",
            "lng": "-48.671536199999998",
            "address": "ROD BR101. SN KM 213"
        },
        {
            "name": "POSTO SHELL - A P NOVO BANDEIRANTES JACAREPAGUA L",
            "lat": "-22.947831900000001",
            "lng": "-43.372419000000001",
            "address": "ESTR DOS BANDEIRANTES. 2772"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO LARISSA OLEGARIO LTDA",
            "lat": "-23.614194000000001",
            "lng": "-46.849905999999997",
            "address": "ESTRADA DO EMBU. 2548"
        },
        {
            "name": "POSTO SHELL - IPE DERIVADOS DE PETROLEO LTDA ME",
            "lat": "-6.0756603",
            "lng": "-49.902632199999999",
            "address": "RUA P. 212"
        },
        {
            "name": "POSTO SHELL - A4LU COMERCIO DE COMB E DERIV LTDA",
            "lat": "-16.373096",
            "lng": "-39.575135899999999",
            "address": "AV ANTONIO CARLOS MAGALHES. 1978"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ANDA LUZ LTDA EPP",
            "lat": "-9.6685193999999992",
            "lng": "-35.736358699999997",
            "address": "R BARAO DE ANADIA. 31"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO KNOX LTDA",
            "lat": "-22.853124999999999",
            "lng": "-47.228997",
            "address": "AV THEREZA ANA CECON BREDA. 1860"
        },
        {
            "name": "POSTO SHELL - POSTO SHOW CARAIBAS LTDA",
            "lat": "-16.690625199999999",
            "lng": "-49.252514099999999",
            "address": "R 88. 30"
        },
        {
            "name": "POSTO SHELL - RPA COM DE COMB RIO CLARO II LTDA",
            "lat": "-22.415682",
            "lng": "-47.573118999999998",
            "address": "AV PRES TANCREDO NEVES. 400"
        },
        {
            "name": "POSTO SHELL - FERRARI COM DE DERDE PETROLEO LTDA",
            "lat": "-17.777065",
            "lng": "-50.910885999999998",
            "address": "R 73. 724"
        },
        {
            "name": "POSTO SHELL - OCEANO BLUE COMERCIO DE COMBUSTIVEI",
            "lat": "-23.599382889096098",
            "lng": "-46.739152951982",
            "address": "AV PROF FRANCISCO MORATO. 6155"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO MARINGA LTDA",
            "lat": "-16.660427299999998",
            "lng": "-49.3297782",
            "address": "ROD GO 060. SN QD 53 LT08"
        },
        {
            "name": "POSTO SHELL - HAVAN AUTO CENTER LTDA",
            "lat": "-28.997367100000002",
            "lng": "-49.554126500000002",
            "address": "AL ASCENDINO MO. 9575 KM 422 BR 101"
        },
        {
            "name": "POSTO SHELL - SANGIRARDI COM VAREJISTA COMB LTDA",
            "lat": "-23.592921",
            "lng": "-46.694896",
            "address": "AV ALCIDES SANGIRARDI. 82"
        },
        {
            "name": "POSTO SHELL - ECO POSTO 3L LTDA",
            "lat": "-12.6963594",
            "lng": "-38.323351199999998",
            "address": "ROD BA 099 ESTRADA DO COC. SN KM 10"
        },
        {
            "name": "POSTO SHELL - CANDOI COM DE COMBUSTIVEIS LTD",
            "lat": "-25.667566600000001",
            "lng": "-52.124811600000001",
            "address": "ROD BR 373 KM 400. SN"
        },
        {
            "name": "POSTO SHELL - VIEIRA E PIZZOLI VIEIRA LTDA",
            "lat": "-11.8838832",
            "lng": "-55.500794499999998",
            "address": "R JOAO PEDRO MOREIRA DE CARVALHO. 1"
        },
        {
            "name": "POSTO SHELL - POSTO UIRAPURU LTDA",
            "lat": "-21.104086299999999",
            "lng": "-42.962415700000001",
            "address": "AV SENADOR LEVINDO COEL. 184 AREA F"
        },
        {
            "name": "POSTO SHELL - POSTOS REALEZA EIRELI",
            "lat": "-2.5542189",
            "lng": "-44.203896",
            "address": "ETR DE RIBAMAR. 4 QD B ST SARAMAN"
        },
        {
            "name": "POSTO SHELL - POSTO PAPAGAIO LTDA ME",
            "lat": "-12.211454",
            "lng": "-38.949055299999998",
            "address": "RUA DOUTOR VICENTE DOS REIS. SN"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO TUPY LTDA",
            "lat": "-21.5681215",
            "lng": "-45.447563799999998",
            "address": "AV PRES CASTELO BRANCO. 330"
        },
        {
            "name": "POSTO SHELL - MARCLAU COMERCIO DE COMB LTDA.",
            "lat": "-22.854658000000001",
            "lng": "-43.1021669",
            "address": "ROD BR 101. SN KM 319"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO PIEMONTE LTDA",
            "lat": "-23.559108670000001",
            "lng": "-46.576976340000002",
            "address": "AV SAPOPEMBA. 88"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ESTACAO BELENZINHO",
            "lat": "-23.543731260000001",
            "lng": "-46.59192925",
            "address": "AV ALCANTARA MACHADO. 3555"
        },
        {
            "name": "POSTO SHELL - CENTRO AUTOMOTIVO CENTER PAES DE BA",
            "lat": "-23.561400380471198",
            "lng": "-46.596341840538798",
            "address": "AV PAES DE BARROS. 2381"
        },
        {
            "name": "POSTO SHELL - POSTO KALILANDIA LTDA",
            "lat": "-12.6963594",
            "lng": "-38.323351199999998",
            "address": "ROD BA 99. SN KM 21"
        },
        {
            "name": "POSTO SHELL - POSTO MOTORIZADO LTDA EPP",
            "lat": "-9.6367440000000002",
            "lng": "-35.747410000000002",
            "address": "MAJOR CICERO DE GOES MONTEIRO. 2706"
        },
        {
            "name": "POSTO SHELL - POSTO N SRA APARECIDA DERIV PET LTD",
            "lat": "-7.2088795000000001",
            "lng": "-39.321366699999999",
            "address": "R PADRE CICERO. 1248"
        },
        {
            "name": "POSTO SHELL - SJ PETROLEO LTDA",
            "lat": "-7.2118744000000001",
            "lng": "-39.297441300000003",
            "address": "AV GOV VIRGILIO TAVORA. 1100"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO CENTRO LTDA EPP",
            "lat": "-11269",
            "lng": "-37442",
            "address": "RUA TENENTE ELOI SILVA. 715"
        },
        {
            "name": "POSTO SHELL - POSTO DE COMBUSTVEIS ALLGAS LTDA",
            "lat": "-23.015184341037799",
            "lng": "-43.480857872684901",
            "address": "ETR BENVINDO DE NOVAES. 2500"
        },
        {
            "name": "POSTO SHELL - POSTO DE GASOLINA PINA RANGEL LTDA",
            "lat": "-22.891436424861698",
            "lng": "-43.552605794729701",
            "address": "AVN CESARIO DE MELO. 4596"
        },
        {
            "name": "POSTO SHELL - POSTO GUARARAPES LTDA",
            "lat": "-3.7603088999999899",
            "lng": "-38.564253000000001",
            "address": "AV AMERICO BARREIRA. 5525"
        },
        {
            "name": "POSTO SHELL - POSTO NATIVO LTDA",
            "lat": "-16.5911981",
            "lng": "-39.102117200000002",
            "address": "EST PARA ITABELA. SN"
        },
        {
            "name": "POSTO SHELL - POSTO SALINENSE COM DE COMB LTDA",
            "lat": "-15.955214399999999",
            "lng": "-42.296268300000001",
            "address": "R ARACUAI. 760"
        },
        {
            "name": "POSTO SHELL - CENTER TURISTICA AUTO POSTO LTDA",
            "lat": "-23.481513",
            "lng": "-46.755110000000002",
            "address": "EST TURISTICA DO JARAGUA. 1020"
        },
        {
            "name": "POSTO SHELL - SIC PROJAC COMBUSTIVEIS LTDA",
            "lat": "-22.96549766",
            "lng": "-43.408637249999998",
            "address": "EST DOS BANDEIRANTES. 7205"
        },
        {
            "name": "POSTO SHELL - ALTERNATO COMERCIO DE COMBUSTIVEIS",
            "lat": "-20.288347900000002",
            "lng": "-40.304317599999997",
            "address": "AV NOSSA SENHORA DA PENHA. 2719"
        },
        {
            "name": "POSTO SHELL - CTRO AUTO COM COMB MAXXIMA NAZARE",
            "lat": "-23.59",
            "lng": "-46611",
            "address": "AV NAZARE. 666"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO REAL ATLANTICO LTDA",
            "lat": "-22.4979224",
            "lng": "-41.920664100000003",
            "address": "AV ALCEBIADES SABINO. SN QD 15 LT 9"
        },
        {
            "name": "POSTO SHELL - AUTO P NOVO INTENDENTE LTDA",
            "lat": "-22.8672657909332",
            "lng": "-43.360829762393401",
            "address": "ETR INTENDENTE MAGALHAES. 821"
        },
        {
            "name": "POSTO SHELL - WENDELL ANDRADE LIMA",
            "lat": "-7.3093119999999896",
            "lng": "-39.303465699999997",
            "address": "R ANTONIO CORREIA CELESTINO. 5165"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO DE SERV POMBAL LTDA EPP",
            "lat": "-1.1932910999999999",
            "lng": "-47.182765699999997",
            "address": "ROD BR 316 KM 151"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO ML RECREIO DOS BAND LTDA",
            "lat": "-23.015184341037799",
            "lng": "-43.480857872684901",
            "address": "AV DAS AMERICAS. 19011"
        },
        {
            "name": "POSTO SHELL - AUTO POSTO JARDIM EUROPA VGP LTDA",
            "lat": "-23.599843499999999",
            "lng": "-47.022474500000001",
            "address": "R JOSE MANOEL DE ALMEIDA. 717"
        },
        {
            "name": "POSTO SHELL - JL COMBUSTIVEIS LUBRIFICANTES LTDA",
            "lat": "-8.0737454999999994",
            "lng": "-39.129290400000002",
            "address": "RUA DESEMBARGADOR SILVA BARROS. 327"
        },
        {
            "name": "POSTO SHELL - POSTO IBIZA LTDA",
            "lat": "-8.0823540000000005",
            "lng": "-34.933205999999998",
            "address": "AV RECIFE. 5421"
        },
        {
            "name": "POSTO SHELL - SOBRAL PALACIO PETROLEO LTDA",
            "lat": "-3.7252830000000001",
            "lng": "-38.483842000000003",
            "address": "AV DA ABOLICAO. 3395"
        },
        {
            "name": "POSTO SHELL - GARCIA GARCIA AUTO POSTO LIMITADA",
            "lat": "-20546",
            "lng": "-48586",
            "address": "AV RIO DALVA. 136"
            }
    ]


    const local = { lat: -23.56789116291294, lng: -46.62986132274762};


    const styles = {
        default: [],
        hide: [
          {
            featureType: "poi.business",
            stylers: [{ visibility: "off" }],
          },
          
          {
            featureType: "transit",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
        ],
      };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: local,
      disableDefaultUI: true,
    });
    
    map.setOptions({ styles: styles["hide"] });

    for(posto in postoList) {
        const cord = new google.maps.LatLng(postoList[posto].lat,postoList[posto].lng);
        createPostoMarker(cord);
    }

    function createPostoMarker(coordinates) {
        const marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: './gmaps_pin.png',
            animation: google.maps.Animation.DROP
          });
          const callback = () => toggleBounce(marker)
          marker.addListener("click", callback)
    }

    function toggleBounce(marker) {
        var infowindow = new google.maps.InfoWindow({
            content: '<iframe width="400px" height="235px" src="./displayGasStation.html"><iframe/>',
          });

          infowindow.open("click",marker)
        if (marker.getAnimation() !== google.maps.Animation.BOUNCE) {
          marker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(() => {marker.setAnimation(null);},720)
        }
      }
  }
  
  window.initMap = initMap;