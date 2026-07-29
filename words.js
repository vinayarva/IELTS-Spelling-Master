const DB = [
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
].map(([w,d],i)=>({ id:"w"+i, word:w, difficulty:d }));