
const DB_01 = [
  // EASY
  ["believe","easy"],["receive","easy"],["definitely","easy"],["separate","easy"],["necessary","easy"],
  ["government","easy"],["immediately","easy"],["achievement","easy"],["environment","easy"],["february","easy"],
  ["wednesday","easy"],["calendar","easy"],["restaurant","easy"],["vegetable","easy"],["temperature","easy"],
  ["foreign","easy"],["neighbour","easy"],["colleague","easy"],["committee","easy"],["occasion","easy"],
  ["address","easy"],["argument","easy"],["business","easy"],["career","easy"],["category","easy"],
  ["changeable","easy"],["coming","easy"],["criticise","easy"],["definite","easy"],["describe","easy"],
  ["develop","easy"],["disappear","easy"],["disappoint","easy"],["embarrass","easy"],["exercise","easy"],
  ["experience","easy"],["familiar","easy"],["forty","easy"],["grammar","easy"],["guarantee","easy"],["height","easy"],

  // MEDIUM
  ["accommodate","medium"],["questionnaire","medium"],["entrepreneur","medium"],["bureaucracy","medium"],
  ["phenomenon","medium"],["rhythm","medium"],["occurrence","medium"],["apparent","medium"],["existence","medium"],
  ["maintenance","medium"],["privilege","medium"],["tomorrow","medium"],["weird","medium"],["parliament","medium"],
  ["pronunciation","medium"],["curriculum","medium"],["laboratory","medium"],["prejudice","medium"],["subtle","medium"],
  ["technique","medium"],["unnecessary","medium"],["withhold","medium"],["acknowledgment","medium"],["aggressive","medium"],
  ["amateur","medium"],["appearance","medium"],["athlete","medium"],["auxiliary","medium"],["awkward","medium"],
  ["cemetery","medium"],["commitment","medium"],["comparative","medium"],["competent","medium"],["conscience","medium"],
  ["conscious","medium"],["consensus","medium"],["controversy","medium"],["correlate","medium"],["criticism","medium"],
  ["deceive","medium"],["dependent","medium"],["desperate","medium"],["deteriorate","medium"],["disastrous","medium"],
  ["discipline","medium"],["exaggerate","medium"],["exhilarate","medium"],["extraordinary","medium"],["fascinating","medium"],
  ["fluorescent","medium"],["harass","medium"],["hierarchy","medium"],["humorous","medium"],["hygiene","medium"],
  ["independent","medium"],["indispensable","medium"],["inevitable","medium"],["intelligence","medium"],["interrupt","medium"],
  ["irrelevant","medium"],["jewellery","medium"],

  // HARD
  ["idiosyncrasy","hard"],["hypocrisy","hard"],["inoculate","hard"],["liaison","hard"],["manoeuvre","hard"],
  ["medieval","hard"],["memento","hard"],["miscellaneous","hard"],["mischievous","hard"],["misspell","hard"],
  ["negotiate","hard"],["noticeable","hard"],["nuisance","hard"],["obedience","hard"],["omission","hard"],
  ["outrageous","hard"],["pamphlet","hard"],["pastime","hard"],["perceive","hard"],["perseverance","hard"],
  ["personnel","hard"],["persuade","hard"],["philosophy","hard"],["playwright","hard"],["possess","hard"],
  ["precede","hard"],["predictable","hard"],["professor","hard"],["psychology","hard"],["publicly","hard"],
  ["pursue","hard"],["receipt","hard"],["recommend","hard"],["referred","hard"],["reminiscent","hard"],
  ["renowned","hard"],["repetition","hard"],["ridiculous","hard"],["sacrilegious","hard"],["satellite","hard"],
  ["secretary","hard"],["seize","hard"],["sergeant","hard"],["siege","hard"],["sovereign","hard"],
  ["statistics","hard"],["stubbornness","hard"],["subtlety","hard"],["supersede","hard"],["surveillance","hard"],
  ["susceptible","hard"],["symmetry","hard"],["tendency","hard"],["thorough","hard"],["threshold","hard"],
  ["transferred","hard"],["twelfth","hard"],["unanimous","hard"],["unforeseen","hard"],["vacuum","hard"],["yacht","hard"]
]


const DB_02 = [
  // EASY: Months, Days, Seasons & Times
  ["january","easy"],["march","easy"],["april","easy"],["may","easy"],["june","easy"],
  ["july","easy"],["august","easy"],["september","easy"],["october","easy"],["november","easy"],
  ["december","easy"],["monday","easy"],["tuesday","easy"],["thursday","easy"],["friday","easy"],
  ["saturday","easy"],["sunday","easy"],["spring","easy"],["summer","easy"],["autumn","easy"],
  ["winter","easy"],["morning","easy"],["afternoon","easy"],["evening","easy"],["midnight","easy"],
  ["sunrise","easy"],["sunset","easy"],["weekend","easy"],["weekday","easy"],["fortnight","easy"],

  // EASY: Numbers, Ordinals & Math
  ["zero","easy"],["first","easy"],["second","easy"],["third","easy"],["fourth","easy"],
  ["fifth","easy"],["sixth","easy"],["seventh","easy"],["eighth","easy"],["ninth","easy"],
  ["tenth","easy"],["eleventh","easy"],["twelfth","easy"],["thirteenth","easy"],["fourteenth","easy"],
  ["fifteenth","easy"],["sixteenth","easy"],["seventeenth","easy"],["eighteenth","easy"],["nineteenth","easy"],
  ["twentieth","easy"],["thirtieth","easy"],["fiftieth","easy"],["hundredth","easy"],["thousandth","easy"],
  ["million","easy"],["billion","easy"],["quarter","easy"],["half","easy"],["dozen","easy"],
  ["fraction","easy"],["percentage","easy"],["addition","easy"],["subtraction","easy"],["multiply","easy"],

  // EASY: Common IELTS Names
  ["william","easy"],["elizabeth","easy"],["james","easy"],["sarah","easy"],["george","easy"],
  ["margaret","easy"],["charles","easy"],["joseph","easy"],["thomas","easy"],["alice","easy"],
  ["henry","easy"],["florence","easy"],["arthur","easy"],["beatrice","easy"],["edward","easy"],
  ["charlotte","easy"],["david","easy"],["emily","easy"],["richard","easy"],["victoria","easy"],
  ["michael","easy"],["alexander","easy"],["isabella","easy"],["robert","easy"],["olivia","easy"],
  ["daniel","easy"],["sophia","easy"],["matthew","easy"],["amelia","easy"],["andrew","easy"],
  ["joshua","easy"],["kevin","easy"],["chloe","easy"],["brian","easy"],["grace","easy"],
  ["jason","easy"],["justin","easy"],["ryan","easy"],["megan","easy"],["aaron","easy"],

  // EASY: Addresses, Streets & Basic Places
  ["avenue","easy"],["boulevard","easy"],["street","easy"],["road","easy"],["lane","easy"],
  ["drive","easy"],["court","easy"],["alley","easy"],["terrace","easy"],["highway","easy"],
  ["freeway","easy"],["expressway","easy"],["motorway","easy"],["turnpike","easy"],["plaza","easy"],
  ["square","easy"],["promenade","easy"],["arcade","easy"],["bypass","easy"],["esplanade","easy"],
  ["north","easy"],["south","easy"],["east","easy"],["west","easy"],["northeast","easy"],
  ["southwest","easy"],["apartment","easy"],["village","easy"],["town","easy"],["city","easy"],

  // MEDIUM: Countries, Cities & Geography
  ["australia","medium"],["germany","medium"],["france","medium"],["italy","medium"],["spain","medium"],
  ["mexico","medium"],["russia","medium"],["egypt","medium"],["england","medium"],["scotland","medium"],
  ["wales","medium"],["ireland","medium"],["birmingham","medium"],["manchester","medium"],["liverpool","medium"],
  ["edinburgh","medium"],["glasgow","medium"],["melbourne","medium"],["brisbane","medium"],["auckland","medium"],
  ["wellington","medium"],["toronto","medium"],["vancouver","medium"],["washington","medium"],["chicago","medium"],
  ["seattle","medium"],["yorkshire","medium"],["lancashire","medium"],["cornwall","medium"],["cumbria","medium"],
  ["surrey","medium"],["sussex","medium"],["norfolk","medium"],["suffolk","medium"],["oxfordshire","medium"],
  ["gloucestershire","medium"],["warwickshire","medium"],["nottinghamshire","medium"],["cambridgeshire","medium"],["continent","medium"],

  // MEDIUM: Academic & Universities
  ["abstract","medium"],["academy","medium"],["accreditation","medium"],["administration","medium"],["admission","medium"],
  ["algebra","medium"],["alumni","medium"],["analysis","medium"],["anthropology","medium"],["appendix","medium"],
  ["architecture","medium"],["archive","medium"],["article","medium"],["assessment","medium"],["assignment","medium"],
  ["astronomy","medium"],["attendance","medium"],["auditorium","medium"],["bachelor","medium"],["bibliography","medium"],
  ["biology","medium"],["bursary","medium"],["calculus","medium"],["campus","medium"],["canteen","medium"],
  ["certificate","medium"],["chancellor","medium"],["chemistry","medium"],["citation","medium"],["clinic","medium"],
  ["cohort","medium"],["college","medium"],["colloquium","medium"],["comprehensive","medium"],["compulsory","medium"],
  ["conference","medium"],["conservatory","medium"],["consortium","medium"],["coursework","medium"],["credential","medium"],
  ["deadline","medium"],["dean","medium"],["debate","medium"],["deferral","medium"],["degree","medium"],
  ["department","medium"],["diagram","medium"],["dictionary","medium"],["diploma","medium"],["director","medium"],
  ["discourse","medium"],["dissertation","medium"],["distinction","medium"],["doctorate","medium"],["dormitory","medium"],
  ["ecology","medium"],["economics","medium"],["elective","medium"],["elementary","medium"],["eligibility","medium"],
  ["encyclopedia","medium"],["engineering","medium"],["enrollment","medium"],["entrance","medium"],["essay","medium"],
  ["ethics","medium"],["evaluation","medium"],["examination","medium"],["exchange","medium"],["exhibition","medium"],
  ["experiment","medium"],["extension","medium"],["extracurricular","medium"],["facility","medium"],["faculty","medium"],
  ["fellowship","medium"],["fieldwork","medium"],["foundation","medium"],["framework","medium"],["freshman","medium"],
  ["funding","medium"],["gallery","medium"],["genetics","medium"],["geography","medium"],["geology","medium"],
  ["geometry","medium"],["glossary","medium"],["graduate","medium"],["grant","medium"],["guideline","medium"],
  ["gymnasium","medium"],["handbook","medium"],["harvard","medium"],["history","medium"],["honorarium","medium"],
  ["horticulture","medium"],["housing","medium"],["humanities","medium"],["hypothesis","medium"],["illustration","medium"],
  ["index","medium"],["induction","medium"],["infrastructure","medium"],["innovation","medium"],["institute","medium"],
  ["instruction","medium"],["instructor","medium"],["integration","medium"],["interactive","medium"],["interdisciplinary","medium"],
  ["intermediate","medium"],["internship","medium"],["interview","medium"],["investigation","medium"],["itinerary","medium"],
  ["journal","medium"],["journalism","medium"],["junior","medium"],["knowledge","medium"],["language","medium"],
  ["learning","medium"],["lecture","medium"],["librarian","medium"],["library","medium"],["linguistics","medium"],
  ["literacy","medium"],["literature","medium"],["logic","medium"],["logistics","medium"],["magazine","medium"],
  ["major","medium"],["management","medium"],["manual","medium"],["manuscript","medium"],["marketing","medium"],
  ["mathematics","medium"],["matriculation","medium"],["mechanics","medium"],["medicine","medium"],["mentor","medium"],
  ["methodology","medium"],["microbiology","medium"],["midterm","medium"],["module","medium"],["monograph","medium"],
  ["motivation","medium"],["museum","medium"],["musicology","medium"],["narrative","medium"],["navigation","medium"],
  ["neurology","medium"],["notation","medium"],["nursing","medium"],["nutrition","medium"],["objective","medium"],
  ["observatory","medium"],["oceanography","medium"],["orientation","medium"],["outline","medium"],["oxford","medium"],
  ["paleontology","medium"],["paragraph","medium"],["parameter","medium"],["pathology","medium"],["pedagogy","medium"],
  ["penalty","medium"],["perception","medium"],["performance","medium"],["periodical","medium"],["perspective","medium"],
  ["pharmacology","medium"],["phenomenology","medium"],["phonetics","medium"],["photography","medium"],["physics","medium"],
  ["physiology","medium"],["placement","medium"],["plagiarism","medium"],["portfolio","medium"],["postgraduate","medium"],
  ["practical","medium"],["prerequisite","medium"],["presentation","medium"],["primary","medium"],["principle","medium"],
  ["probation","medium"],["procedure","medium"],["proceeding","medium"],["profile","medium"],["program","medium"],
  ["project","medium"],["promotion","medium"],["proofread","medium"],["proposal","medium"],["prospectus","medium"],
  ["protocol","medium"],["prototype","medium"],["publication","medium"],["publisher","medium"],["punctuation","medium"],
  ["qualification","medium"],["qualitative","medium"],["quantitative","medium"],["quotation","medium"],["reasoning","medium"],
  ["reference","medium"],["register","medium"],["registrar","medium"],["registration","medium"],["regulation","medium"],
  ["rehearsal","medium"],["reimbursement","medium"],["rejection","medium"],["renewable","medium"],["requirement","medium"],
  ["research","medium"],["reservation","medium"],["residence","medium"],["resolution","medium"],["resource","medium"],
  ["response","medium"],["restriction","medium"],["resume","medium"],["retention","medium"],["review","medium"],
  ["revision","medium"],["robotics","medium"],["roster","medium"],["rubric","medium"],["sabbatical","medium"],
  ["salary","medium"],["schedule","medium"],["scholarship","medium"],["science","medium"],["secondary","medium"],
  ["semester","medium"],["seminar","medium"],["senate","medium"],["senior","medium"],["sequence","medium"],
  ["session","medium"],["simulation","medium"],["sociology","medium"],["software","medium"],["sophomore","medium"],
  ["specialization","medium"],["specification","medium"],["spectrum","medium"],["sponsor","medium"],["spreadsheet","medium"],
  ["stadium","medium"],["statistic","medium"],["strategy","medium"],["structure","medium"],["student","medium"],
  ["studio","medium"],["submission","medium"],["subsidiary","medium"],["subsidy","medium"],["summary","medium"],
  ["supervisor","medium"],["supplement","medium"],["syllabus","medium"],["symbol","medium"],["symposium","medium"],
  ["synthesis","medium"],["system","medium"],["tablet","medium"],["talent","medium"],["taxonomy","medium"],
  ["technology","medium"],["telecommunication","medium"],["template","medium"],["tenure","medium"],["terminal","medium"],
  ["textbook","medium"],["theater","medium"],["theology","medium"],["theorem","medium"],["theory","medium"],
  ["thesis","medium"],["timeline","medium"],["timetable","medium"],["topic","medium"],["tournament","medium"],
  ["tradition","medium"],["trainee","medium"],["training","medium"],["transcript","medium"],["transfer","medium"],
  ["translation","medium"],["transmission","medium"],["transportation","medium"],["tuition","medium"],["tutor","medium"],
  ["tutorial","medium"],["undergraduate","medium"],["union","medium"],["university","medium"],["update","medium"],
  ["upgrade","medium"],["vacancy","medium"],["vacation","medium"],["vaccination","medium"],["validity","medium"],
  ["valuation","medium"],["variable","medium"],["variation","medium"],["vehicle","medium"],["vendor","medium"],
  ["venue","medium"],["verification","medium"],["version","medium"],["veterinary","medium"],["video","medium"],
  ["violation","medium"],["violence","medium"],["virus","medium"],["visa","medium"],["vision","medium"],
  ["vocabulary","medium"],["vocation","medium"],["volume","medium"],["volunteer","medium"],["voucher","medium"],
  ["warehouse","medium"],["welfare","medium"],["wildlife","medium"],["withdrawal","medium"],["workshop","medium"],
  ["zoology","medium"],

  // MEDIUM: Jobs & Professions
  ["accountant","medium"],["architect","medium"],["engineer","medium"],["scientist","medium"],["journalist","medium"],
  ["manager","medium"],["director","medium"],["assistant","medium"],["supervisor","medium"],["executive","medium"],
  ["physician","medium"],["surgeon","medium"],["pediatrician","medium"],["dermatologist","medium"],["cardiologist","medium"],
  ["neurologist","medium"],["psychiatrist","medium"],["oncologist","medium"],["radiologist","medium"],["anesthesiologist","medium"],
  ["optician","medium"],["dentist","medium"],["orthodontist","medium"],["hygienist","medium"],["therapist","medium"],
  ["physiotherapist","medium"],["chiropractor","medium"],["acupuncturist","medium"],["herbalist","medium"],["pharmacist","medium"],
  ["paramedic","medium"],["midwife","medium"],["developer","medium"],["designer","medium"],["plumber","medium"],
  ["electrician","medium"],["carpenter","medium"],["mechanic","medium"],["technician","medium"],["consultant","medium"],

  // MEDIUM: Health & Medicine
  ["dietary","medium"],["digestion","medium"],["respiratory","medium"],["cardiovascular","medium"],["muscular","medium"],
  ["skeletal","medium"],["nervous","medium"],["immune","medium"],["endocrine","medium"],["reproductive","medium"],
  ["urinary","medium"],["lymphatic","medium"],["anatomy","medium"],["epidemiology","medium"],["virology","medium"],
  ["bacteriology","medium"],["parasitology","medium"],["sanitation","medium"],["quarantine","medium"],["isolation","medium"],
  ["immunization","medium"],["antibiotic","medium"],["antiseptic","medium"],["analgesic","medium"],["anesthetic","medium"],
  ["sedative","medium"],["stimulant","medium"],["antidepressant","medium"],["prescription","medium"],["dosage","medium"],
  ["overdose","medium"],["allergic","medium"],["chronic","medium"],["acute","medium"],["contagious","medium"],
  ["infectious","medium"],["hereditary","medium"],["congenital","medium"],["terminal","medium"],["malignant","medium"],
  ["benign","medium"],["tumor","medium"],["cancer","medium"],["diabetes","medium"],["asthma","medium"],
  ["arthritis","medium"],["rheumatism","medium"],["stroke","medium"],["fracture","medium"],["sprain","medium"],
  ["strain","medium"],["dislocation","medium"],["scald","medium"],["wound","medium"],["scar","medium"],
  ["bruise","medium"],["blister","medium"],["rash","medium"],["ulcer","medium"],["inflammation","medium"],
  ["infection","medium"],["fever","medium"],["cough","medium"],["sneeze","medium"],["fatigue","medium"],
  ["nausea","medium"],["vomit","medium"],["dizzy","medium"],["faint","medium"],["unconscious","medium"],
  ["coma","medium"],["paralysis","medium"],["handicap","medium"],["disability","medium"],["therapy","medium"],
  ["rehabilitation","medium"],["surgery","medium"],["operation","medium"],["transplant","medium"],["implant","medium"],
  ["amputation","medium"],["biopsy","medium"],["autopsy","medium"],["ultrasound","medium"],["plasma","medium"],
  ["serum","medium"],["tissue","medium"],["organ","medium"],["muscle","medium"],["bone","medium"],
  ["joint","medium"],["cartilage","medium"],["ligament","medium"],["tendon","medium"],["nerve","medium"],
  ["brain","medium"],["heart","medium"],["lung","medium"],["liver","medium"],["kidney","medium"],
  ["stomach","medium"],["intestine","medium"],["bowel","medium"],["bladder","medium"],["gland","medium"],
  ["hormone","medium"],["enzyme","medium"],["protein","medium"],["vitamin","medium"],["mineral","medium"],
  ["fat","medium"],["calorie","medium"],["diet","medium"],["obesity","medium"],["anorexia","medium"],
  ["bulimia","medium"],["starvation","medium"],["malnutrition","medium"],["fitness","medium"],["exercise","medium"],
  ["aerobic","medium"],["anaerobic","medium"],["meditation","medium"],["relaxation","medium"],["massage","medium"],
  ["sauna","medium"],["jacuzzi","medium"],["treadmill","medium"],["dumbbell","medium"],["barbell","medium"],
  ["weight","medium"],["sweat","medium"],["perspiration","medium"],["stamina","medium"],["endurance","medium"],
  ["strength","medium"],["flexibility","medium"],["agility","medium"],["balance","medium"],["coordination","medium"],

  // MEDIUM: Environment, Technology & Science
  ["atmosphere","medium"],["biosphere","medium"],["ecosystem","medium"],["habitat","medium"],["biodiversity","medium"],
  ["extinction","medium"],["endangered","medium"],["species","medium"],["predator","medium"],["prey","medium"],
  ["carnivore","medium"],["herbivore","medium"],["omnivore","medium"],["mammal","medium"],["reptile","medium"],
  ["amphibian","medium"],["terrestrial","medium"],["aquatic","medium"],["marine","medium"],["coastal","medium"],
  ["inland","medium"],["continental","medium"],["tropical","medium"],["subtropical","medium"],["temperate","medium"],
  ["polar","medium"],["arctic","medium"],["antarctic","medium"],["glacier","medium"],["iceberg","medium"],
  ["avalanche","medium"],["blizzard","medium"],["cyclone","medium"],["typhoon","medium"],["monsoon","medium"],
  ["drought","medium"],["flood","medium"],["famine","medium"],["earthquake","medium"],["tsunami","medium"],
  ["volcano","medium"],["eruption","medium"],["crater","medium"],["lava","medium"],["magma","medium"],
  ["crust","medium"],["mantle","medium"],["core","medium"],["tectonic","medium"],["plate","medium"],
  ["fault","medium"],["fossil","medium"],["fuel","medium"],["coal","medium"],["petroleum","medium"],
  ["diesel","medium"],["petrol","medium"],["solar","medium"],["lunar","medium"],["wind","medium"],
  ["hydro","medium"],["geothermal","medium"],["biomass","medium"],["renewable","medium"],["sustainable","medium"],
  ["alternative","medium"],["efficient","medium"],["panel","medium"],["turbine","medium"],["generator","medium"],
  ["battery","medium"],["grid","medium"],["emission","medium"],["exhaust","medium"],["tailpipe","medium"],
  ["chimney","medium"],["smokestack","medium"],["greenhouse","medium"],["warming","medium"],["climate","medium"],
  ["change","medium"],["carbon","medium"],["dioxide","medium"],["footprint","medium"],["offset","medium"],
  ["credit","medium"],["ozone","medium"],["layer","medium"],["depletion","medium"],["acid","medium"],
  ["rain","medium"],["smog","medium"],["haze","medium"],["particulate","medium"],["filter","medium"],
  ["catalytic","medium"],["converter","medium"],["purify","medium"],["treat","medium"],["recycle","medium"],
  ["reuse","medium"],["reduce","medium"],["compost","medium"],["incinerate","medium"],["landfill","medium"],
  ["dump","medium"],["litter","medium"],["trash","medium"],["garbage","medium"],["rubbish","medium"],
  ["waste","medium"],["sewage","medium"],["contaminate","medium"],["pollute","medium"],["degrade","medium"],
  ["erode","medium"],["deforestation","medium"],["desertification","medium"],["soil","medium"],["topsoil","medium"],
  ["clay","medium"],["silt","medium"],["sand","medium"],["gravel","medium"],["rock","medium"],
  ["stone","medium"],["pebble","medium"],["boulder","medium"],["mineral","medium"],["ore","medium"],
  ["mine","medium"],["quarry","medium"],["extract","medium"],["refine","medium"],["smelt","medium"],
  ["alloy","medium"],["steel","medium"],["iron","medium"],["copper","medium"],["brass","medium"],
  ["bronze","medium"],["aluminum","medium"],["lead","medium"],["zinc","medium"],["silver","medium"],
  ["gold","medium"],["platinum","medium"],["diamond","medium"],["ruby","medium"],["sapphire","medium"],
  ["emerald","medium"],["pearl","medium"],["jewel","medium"],["gem","medium"],["crystal","medium"],

  // HARD: British Spellings, Trap Words & Complex Academic
  ["accommodation","hard"],["archaeology","hard"],["camouflage","hard"],["carbohydrate","hard"],["catastrophe","hard"],
  ["cholesterol","hard"],["choreography","hard"],["chrysanthemum","hard"],["connoisseur","hard"],["euphemism","hard"],
  ["exacerbate","hard"],["lieutenant","hard"],["mayonnaise","hard"],["millennium","hard"],["onomatopoeia","hard"],
  ["paraphernalia","hard"],["picturesque","hard"],["pneumonia","hard"],["pseudonym","hard"],["renaissance","hard"],
  ["repertoire","hard"],["reservoir","hard"],["rhinoceros","hard"],["schizophrenia","hard"],["silhouette","hard"],
  ["stethoscope","hard"],["subterranean","hard"],["veterinarian","hard"],["xylophone","hard"],["bourgeoisie","hard"],
  ["cacophony","hard"],["camaraderie","hard"],["chicanery","hard"],["colloquial","hard"],["conundrum","hard"],
  ["deleterious","hard"],["dichotomy","hard"],["ephemeral","hard"],["epitome","hard"],["facetious","hard"],
  ["fastidious","hard"],["gregarious","hard"],["hegemony","hard"],["iconoclast","hard"],["idiosyncratic","hard"],
  ["juxtapose","hard"],["lackadaisical","hard"],["lethargic","hard"],["lugubrious","hard"],["machiavellian","hard"],
  ["mellifluous","hard"],["mnemonic","hard"],["obfuscate","hard"],["ostentatious","hard"],["panacea","hard"],
  ["paradigm","hard"],["paradox","hard"],["pejorative","hard"],["perfunctory","hard"],["plethora","hard"],
  ["quintessential","hard"],["quixotic","hard"],["serendipity","hard"],["sycophant","hard"],["taciturn","hard"],
  ["ubiquitous","hard"],["vacillate","hard"],["vehement","hard"],["vociferous","hard"],["xenophobia","hard"],
  ["zephyr","hard"],["colour","hard"],["flavour","hard"],["honour","hard"],["labour","hard"],
  ["rumour","hard"],["behaviour","hard"],["humour","hard"],["splendour","hard"],["saviour","hard"],
  ["endeavour","hard"],["armour","hard"],["parlour","hard"],["valour","hard"],["mould","hard"],
  ["smoulder","hard"],["moustache","hard"],["plough","hard"],["draught","hard"],["cheque","hard"],
  ["theatre","hard"],["centre","hard"],["litre","hard"],["metre","hard"],["fibre","hard"],
  ["sombre","hard"],["calibre","hard"],["sepulchre","hard"],["defence","hard"],["offence","hard"],
  ["pretence","hard"],["apologise","hard"],["organise","hard"],["realise","hard"],["recognise","hard"],
  ["analyse","hard"],["paralyse","hard"],["catalyse","hard"],["dialyse","hard"],["travelling","hard"],
  ["cancelling","hard"],["modelling","hard"],["signalling","hard"],["quarrelling","hard"],["fuelling","hard"],
  ["aluminium","hard"],["paediatrics","hard"],["orthopaedics","hard"],["gynaecology","hard"],["foetus","hard"],
  ["anaemia","hard"],["leukaemia","hard"]
]


const DB_03 = [
  // EASY: Travel, Transport & Tourism
  ["passport","easy"],["luggage","easy"],["baggage","easy"],["passenger","easy"],["departure","easy"],
  ["arrival","easy"],["customs","easy"],["immigration","easy"],["souvenir","easy"],["excursion","easy"],
  ["reception","easy"],["boarding","easy"],["ticket","easy"],["flight","easy"],["destination","easy"],
  ["cruise","easy"],["currency","easy"],["brochure","easy"],["cancellation","easy"],["insurance","easy"],
  ["transit","easy"],["platform","easy"],["delay","easy"],["commute","easy"],["cabins","easy"],

  // EASY: Home, Living & Appliances
  ["furniture","easy"],["upholstery","easy"],["balcony","easy"],["basement","easy"],["attic","easy"],
  ["corridor","easy"],["escalator","easy"],["elevator","easy"],["appliance","easy"],["microwave","easy"],
  ["refrigerator","easy"],["mattress","easy"],["wardrobe","easy"],["cupboard","easy"],["radiator","easy"],
  ["faucet","easy"],["fireplace","easy"],["cushion","easy"],["blanket","easy"],["curtain","easy"],

  // EASY: Materials, Shapes & Colours
  ["plastic","easy"],["leather","easy"],["cotton","easy"],["wool","easy"],["silk","easy"],
  ["nylon","easy"],["polyester","easy"],["denim","easy"],["velvet","easy"],["timber","easy"],
  ["concrete","easy"],["cement","easy"],["rectangle","easy"],["triangle","easy"],["circle","easy"],
  ["sphere","easy"],["cylinder","easy"],["pyramid","easy"],["cone","easy"],["oval","easy"],
  ["turquoise","easy"],["magenta","easy"],["crimson","easy"],["indigo","easy"],["beige","easy"],["maroon","easy"],

  // EASY: Additional Common IELTS Names
  ["anthony","easy"],["christopher","easy"],["stephen","easy"],["jonathan","easy"],["nicholas","easy"],
  ["samuel","easy"],["benjamin","easy"],["nathan","easy"],["timothy","easy"],["vincent","easy"],
  ["amanda","easy"],["jessica","easy"],["melissa","easy"],["stephanie","easy"],["rebecca","easy"],
  ["michelle","easy"],["kimberly","easy"],["angela","easy"],["heather","easy"],["rachel","easy"],
  ["carolyn","easy"],["janet","easy"],["diane","easy"],["pamela","easy"],["evelyn","easy"],["shirley","easy"],

  // MEDIUM: Food, Dining & Ingredients
  ["catering","medium"],["recipe","medium"],["ingredient","medium"],["appetizer","medium"],["dessert","medium"],
  ["beverage","medium"],["vegetarian","medium"],["vegan","medium"],["cereal","medium"],["dairy","medium"],
  ["poultry","medium"],["seafood","medium"],["biscuit","medium"],["chocolate","medium"],["vanilla","medium"],
  ["strawberry","medium"],["cinnamon","medium"],["garlic","medium"],["onion","medium"],["pepper","medium"],
  ["mushroom","medium"],["broccoli","medium"],["spinach","medium"],["lettuce","medium"],["tomato","medium"],
  ["potato","medium"],["avocado","medium"],["croissant","medium"],["spaghetti","medium"],["macaroni","medium"],

  // MEDIUM: Business & Finance
  ["mortgage","medium"],["loan","medium"],["overdraft","medium"],["investment","medium"],["inflation","medium"],
  ["bankruptcy","medium"],["revenue","medium"],["profit","medium"],["deficit","medium"],["transaction","medium"],
  ["retail","medium"],["wholesale","medium"],["commercial","medium"],["enterprise","medium"],["corporation","medium"],
  ["dividend","medium"],["equity","medium"],["shareholder","medium"],["asset","medium"],["liability","medium"],
  ["audit","medium"],["budget","medium"],["currency","medium"],["pension","medium"],["allowance","medium"],

  // MEDIUM: Hobbies, Sports & Entertainment
  ["swimming","medium"],["cycling","medium"],["badminton","medium"],["cricket","medium"],["championship","medium"],
  ["marathon","medium"],["leisure","medium"],["recreation","medium"],["orchestra","medium"],["instrument","medium"],
  ["gymnastics","medium"],["concert","medium"],["cinema","medium"],["festival","medium"],["carnival","medium"],

  // MEDIUM: Additional Countries & Cities
  ["sweden","medium"],["norway","medium"],["denmark","medium"],["finland","medium"],["switzerland","medium"],
  ["austria","medium"],["belgium","medium"],["netherlands","medium"],["portugal","medium"],["greece","medium"],
  ["turkey","medium"],["china","medium"],["japan","medium"],["korea","medium"],["thailand","medium"],
  ["vietnam","medium"],["malaysia","medium"],["singapore","medium"],["indonesia","medium"],["philippines","medium"],
  ["india","medium"],["pakistan","medium"],["bangladesh","medium"],["srilanka","medium"],["brazil","medium"],
  ["argentina","medium"],["colombia","medium"],["peru","medium"],["chile","medium"],["venezuela","medium"],
  ["kenya","medium"],["nigeria","medium"],["southafrica","medium"],["morocco","medium"],["zimbabwe","medium"],
  ["sydney","medium"],["adelaide","medium"],["perth","medium"],["hobart","medium"],["darwin","medium"],
  ["canberra","medium"],["boston","medium"],["miami","medium"],["dallas","medium"],["houston","medium"],
  ["detroit","medium"],["atlanta","medium"],

  // HARD: Common IELTS Spelling Traps
  ["acquire","hard"],["absence","hard"],["acceptable","hard"],["accidentally","hard"],["achieve","hard"],
  ["across","hard"],["basically","hard"],["beginning","hard"],["belief","hard"],["bizarre","hard"],
  ["caribbean","hard"],["column","hard"],["collectible","hard"],["completely","hard"],["condemn","hard"],
  ["daiquiri","hard"],["diarrhoea","hard"],["dilemma","hard"],["ecstasy","hard"],["equipment","hard"],
  ["exceed","hard"],["fiery","hard"],["gauge","hard"],["grateful","hard"],["ignorance","hard"],
  ["implement","hard"],["judgment","hard"],["lightning","hard"],["marshmallow","hard"],["miniature","hard"],
  ["minuscule","hard"],["parallel","hard"],["piece","hard"],["pigeon","hard"],["presence","hard"],
  ["queue","hard"],["raspberry","hard"],["rhyme","hard"],["tyranny","hard"],["until","hard"],
  ["weather","hard"],["writing","hard"],["whether","hard"],["breathe","hard"],["breath","hard"],

  // HARD: British Suffixes (-ise, -ogue, etc.)
  ["catalogue","hard"],["dialogue","hard"],["epilogue","hard"],["monologue","hard"],["categorise","hard"],
  ["civilise","hard"],["colonise","hard"],["computerise","hard"],["dramatise","hard"],["empathise","hard"],
  ["harmonise","hard"],["hypnotise","hard"],["idolise","hard"],["jeopardise","hard"],["legalise","hard"],
  ["maximise","hard"],["minimise","hard"],["mobilise","hard"],["optimise","hard"],["patronise","hard"],
  ["penalise","hard"],["polarise","hard"],["prioritise","hard"],["rationalise","hard"],["revolutionise","hard"],
  ["scrutinise","hard"],["socialise","hard"],["specialise","hard"],["standardise","hard"],["summarise","hard"],
  ["symbolise","hard"],["sympathise","hard"],["terrorise","hard"],["vandalise","hard"],["visualise","hard"],
  ["agonise","hard"],["acclimatise","hard"],["mediaeval","hard"],["tyre","hard"],["pyjamas","hard"]
]


const DB_04 = [
  // EASY: Clothing, Accessories & Personal Items
  ["trousers","easy"],["uniform","easy"],["helmet","easy"],["backpack","easy"],["briefcase","easy"],
  ["wallet","easy"],["purse","easy"],["umbrella","easy"],["sunglasses","easy"],["sweater","easy"],
  ["jacket","easy"],["sandals","easy"],["sneakers","easy"],["jumper","easy"],["cardigan","easy"],
  ["necklace","easy"],["bracelet","easy"],["earrings","easy"],["scarf","easy"],["boots","easy"],

  // EASY: Common Surnames (Frequently spelled out in Listening Section 1)
  ["smith","easy"],["johnson","easy"],["williams","easy"],["brown","easy"],["taylor","easy"],
  ["davis","easy"],["evans","easy"],["thomas","easy"],["roberts","easy"],["clarke","easy"],
  ["wright","easy"],["robinson","easy"],["thompson","easy"],["white","easy"],["hughes","easy"],
  ["edwards","easy"],["green","easy"],["hall","easy"],["lewis","easy"],["harris","easy"],

  // EASY: Buildings, Housing & Places
  ["cottage","easy"],["bungalow","easy"],["hostel","easy"],["skyscraper","easy"],["factory","easy"],
  ["supermarket","easy"],["pharmacy","easy"],["bakery","easy"],["butcher","easy"],["garage","easy"],
  ["lighthouse","easy"],["windmill","easy"],["detached","easy"],["mansion","easy"],["studio","easy"],

  // MEDIUM: Office, Stationery & Workplace
  ["stationery","medium"],["envelope","medium"],["clipboard","medium"],["stapler","medium"],["photocopier","medium"],
  ["projector","medium"],["folder","medium"],["document","medium"],["signature","medium"],["printer","medium"],
  ["scanner","medium"],["paperclip","medium"],["whiteboard","medium"],["cubicle","medium"],["boardroom","medium"],
  ["cartridge","medium"],["briefing","medium"],["newsletter","medium"],["bulletin","medium"],["workforce","medium"],

  // MEDIUM: Vehicles, Transport & Infrastructure
  ["helicopter","medium"],["ferry","medium"],["submarine","medium"],["scooter","medium"],["tractor","medium"],
  ["ambulance","medium"],["carriage","medium"],["tram","medium"],["subway","medium"],["gondola","medium"],
  ["hovercraft","medium"],["spaceship","medium"],["shuttle","medium"],["caravan","medium"],["lorry","medium"],
  ["minibus","medium"],["roundabout","medium"],["intersection","medium"],["pedestrian","medium"],["pavement","medium"],

  // MEDIUM: Weather, Environment & Nature
  ["humidity","medium"],["forecast","medium"],["precipitation","medium"],["breeze","medium"],["hurricane","medium"],
  ["tornado","medium"],["thermometer","medium"],["barometer","medium"],["meteorology","medium"],["frost","medium"],
  ["mist","medium"],["thunder","medium"],["overcast","medium"],["peninsula","medium"],["archipelago","medium"],
  ["canyon","medium"],["plateau","medium"],["waterfall","medium"],["rainforest","medium"],["oasis","medium"],

  // MEDIUM: Arts, Crafts & Hobbies
  ["sculpture","medium"],["portrait","medium"],["canvas","medium"],["ceramics","medium"],["pottery","medium"],
  ["acoustic","medium"],["classical","medium"],["knitting","medium"],["sewing","medium"],["painting","medium"],
  ["sketching","medium"],["origami","medium"],["calligraphy","medium"],["mosaic","medium"],["tapestry","medium"],

  // HARD: Double Consonant Traps & Tricky Adverbs
  ["occasionally","hard"],["successfully","hard"],["sincerely","hard"],["faithfully","hard"],["beautifully","hard"],
  ["wonderfully","hard"],["terribly","hard"],["horribly","hard"],["necessarily","hard"],["ironically","hard"],
  ["stubbornly","hard"],["aggravate","hard"],["alleviate","hard"],["assassinate","hard"],["commemorate","hard"],
  ["interrogate","hard"],["commission","hard"],["successful","hard"],["succession","hard"],["squirrel","hard"],

  // HARD: The "-ible" vs "-able" Suffix Trap
  ["accessible","hard"],["discernible","hard"],["illegible","hard"],["invincible","hard"],["feasible","hard"],
  ["plausible","hard"],["audible","hard"],["edible","hard"],["credible","hard"],["compatible","hard"],
  ["flexible","hard"],["terrible","hard"],["horrible","hard"],["visible","hard"],["tangible","hard"],
  ["valuable","hard"],["profitable","hard"],["unbelievable","hard"],["knowledgeable","hard"],["indispensable","hard"],

  // HARD: Homophones and Commonly Confused Pairs
  ["principal","hard"],["principle","hard"],["counsel","hard"],["council","hard"],["desert","hard"],
  ["loose","hard"],["lose","hard"],["affect","hard"],["effect","hard"],["complement","hard"],
  ["compliment","hard"],["altogether","hard"],["already","hard"],["descent","hard"],["dissent","hard"],
  ["elicit","hard"],["illicit","hard"],["proceed","hard"],["stationery","hard"],["stationary","hard"]

]
const DB = [...DB_01, ...DB_02, ...DB_03,...DB_04].map(([w,d],i)=>({ id:"new_w"+i, word:w, difficulty:d }));
