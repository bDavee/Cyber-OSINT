import os,random
os.system("cls")

class Suti:
    def __init__(self, nev:str, tipus:str, ar:int, egyseg:str):
        self.nev = nev
        self.tipus = tipus
        self.ar = ar
        self.egyseg = egyseg
        self.eladas = 0
        self.bevetel = 0

    def EladasGeneralas(self) -> int:
        return random.randint(100,500)

    def BevetelSzamitas(self):
        self.bevetel = self.eladas*self.ar

sutemenyek = []

with open("13_2024-03-10_11-16-56_4255.txt","r", encoding="utf-8") as fajl:
    for sor in fajl:
        sor = sor.strip()
        if not sor:
            continue
        adatok = sor.split(";")
        nev,tipus, ar_str,egyseg = adatok
        ar = int(ar_str)
        suti = Suti(nev,tipus,ar,egyseg)
        suti.eladas = suti.EladasGeneralas()
        suti.BevetelSzamitas()
        sutemenyek.append(suti)

with open("sutik.txt","w", encoding="utf-8") as kimenet:
    for suti in sutemenyek:
        kimenet.write(f"Sütemény neve: {suti.nev}\n")
        kimenet.write(f"A sütemény kiszerelése: {suti.egyseg}\n")
        kimenet.write(f"Eladott mennyiség: {suti.eladas} {suti.egyseg}\n")
        kimenet.write(f"Bevétel: {suti.bevetel} Ft")
        if suti.bevetel > 100000:
            kimenet.write("NÉPSZERŰ")
        kimenet.write("\n-------------------------------------\n")
