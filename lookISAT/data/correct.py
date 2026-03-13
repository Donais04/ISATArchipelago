for i in range(1,218):
  toWrite = ""
  num = str(i)
  if int(num) < 100:
    if int(num) < 10:
      num = "00" + num
    else: 
      num = "0"+num
  print(num)
  with open("Map"+num+".json", 'r', encoding="utf-8") as f:
    data = f.read()
    #print("14, "+str(len(data)))
    nextGo = False
    for j in data.split("("):
      #print(len(j))
      #print(j[-4:])
      if(nextGo):
        nextGo = False
        print("19, " + j[:30])
        
        if ((")" in j) and not(j[j.index(")")+1] == ";")):
          j = j[:j.index(")")+1] + ";" + j[j.index(")")+1:]
      if j[-4:] == "gain":
        nextGo = True
        #print("line 16")
      toWrite += j + "("
  print("36, "+str(len(toWrite)))
  with open("Map"+num+".json", 'w', encoding="utf-8") as f:
    f.write(toWrite[:-1])