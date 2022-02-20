# Booleanovský model
- dotazy na klíčová slova
- booleanovské dotazy - and, or, not
- proximitní dotazy - vzdálenost mezi slovy
- dotazy na podobnost mezi dokumenty
- dotazy na frázi - ta se hledá jako celek

## Reprezentace dokumentů
- každý dokument je chápán jako slovní unigram (seznam použitých slov)
	- nebere v potaz, jak jdou slova za sebou
- *slovník* - seznam unikátních slov v dokumentu
- pro každé slovo se definuje váha 0/1 podle toho, jestli se v dokumentu vyskytuje, nebo ne

- výsledky vyhledání mohou být zavádějící - některá data mohou být ztracena, nebo naopak získána navíc
	- protože vyhledávání je exaktní - buď `true` nebo `false`

# Vektorový model
**TF (term frequency)** - počet výskytů slov v dokumentu

$$
TF = \frac{n}{N}
$$
- $n$ - počet výskytů daného slova
- $N$ - počet výskytů nejčastěji se vyskytujícího slova

**IDF (inverse document frequency)** - míra vzácnosti

$$
IDF = \log \frac{n}{N}
$$
- $n$ - počet dokumentů
- $N$ - počet dokumentů, kde se slovo vyskytuje

**TF-IDF** - dává výše popsané termíny dohromady

$$
\text{TF-IDF} = \text{TF} \times \text{IDF}
$$

- sestaví se matice s vektory slov a dokumentů

| dokumenty/slova | slovo 1 | slovo 2 | ... | slovo n |
|--|--|--|--|--|
| dokument 1 | TF, IDF | TF, IDF | ... | TF, IDF |
| dokument 2 | ... | ... | ... | ... |
| ...  | ... | ... | ... | ... |
| dokument m | ... | ... | ... | ... |

- většina hodnot TF,IDF jsou nuly
	- je problém pracovat s takovými daty
	- euklidovské vzdálenosti mezi dokumenty se budou málo lišit

## Kosinova míra
- extrémní zjednodušení:
	- dokumenty mají jen dvě slova
	- jen dva dokumenty

![[obrazky/Screenshot 2022-02-15 at 14.58.05.png]]
$$
\cos = \frac{w_{1,1} \cdot w_{1,2} + w_{2,1} \cdot w_{2,2}}{|d_1|\cdot |d_2|}
$$
- $|d_1|, |d_2|$ - délka vektorů dokumentů, roste s počtem slov, které se v dokumentu vyskytují
- používá pouze slova, která jsou mezi dokumenty společné 
- oproti euklidovské vzdálenosti (vzdálenost bodů $d_1$ a $d_2$ v prostoru) není třeba počítat ji pro nulový výskyt slov
	- navíc jsou hodnoty více rozlišné, více bere v potaz dimenzionální rozměr

# Booleanovský vs Vektorový model
- v základu reprezentují dokumenty slovním unigramem (seznam slov)
	- booleanovský model - výskyt ano/ne
	- vektorový model - přidává váhu slova v dokumentu v rozmezí 0 a 1
