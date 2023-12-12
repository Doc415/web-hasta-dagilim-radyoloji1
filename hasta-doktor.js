
class Oda{
    odaTetkikleri
    odaname
    odaId
    constructor(_odaname,_odaId){
        this.odaname=_odaname
        this.odaId=_odaId
        this.odaTetkikleri={"tumabdomenus":0,"ustabdomenus":0,"altabdomenus":0,"hepatobiliyerus":0,"tiroidus":0,"yuzeyelus":0,
        "renalnus":0,"skrotal":0,"kalcaus":0,"transfontanelus":0,"urinerus":0,
        "karotisdoppler":0,"vertebraldoppler":0,"altvendoppler":0,"ustvendoppler":0,"altarterdoppler":0,"ustarterdoppler":0,
        "renaldoppler":0,"aortadoppler":0,"skrotaldoppler":0}
        }
    }


let tetkikBasliklari=["tumabdomenus","ustabdomenus","altabdomenus","hepatobiliyerus","tiroidus","yuzeyelus",
"renalnus","skrotal","kalcaus","transfontanelus","urinerus",
"karotisdoppler","vertebraldoppler","altvendoppler","ustvendoppler","altarterdoppler","ustarterdoppler",
"renaldoppler","aortadoppler","skrotaldoppler"]
var odaindeks=0;
var tablo=true;
var istemListesi=[]
var odaListesi=[]
console.log(istemListesi)
const sabitodalar=["oda1","oda2","oda3"]
tabloHazirla()
/* for (let oda of sabitodalar){
    console.log(oda)
    sabitodaekle(oda)
} */


function istemListesineEkle(istemAdi){
    if (istemAdi.includes("cift")){
        let counter=0;
        for (let eleman of istemListesi){
            if (eleman==istemAdi.slice(0,-4)){
                counter++
            }
        }
        if (counter==0){
        istemListesi.push(istemAdi.slice(0,-4))
        istemListesi.push(istemAdi.slice(0,-4))
        let temp1=document.createElement("button")
        let temp2=document.createElement("button")
        temp1.style.margin="5px"
        temp1.style.border="solid 2px black"
        temp1.innerHTML=istemAdi.slice(0,-4)
        temp2.style.margin="5px"
        temp2.style.border="solid 2px black"
        temp2.innerHTML=istemAdi.slice(0,-4)
        // oluşturulan button a spesifik id ver ve ustune tıkladığında bu id li buttonu remove et ve istemlistesinende istemini kaldır
        // ..... eklenecek
        

        document.getElementById("secilenIstemler").appendChild(temp1)
        document.getElementById("secilenIstemler").appendChild(temp2)
       

        console.log(istemListesi)
        } else {alert("Zaten listede tek taraf/cift taraf istemi var")}

    }else {
        if(!istemListesi.includes(istemAdi)){
        istemListesi.push(istemAdi)
        let temp1=document.createElement("button")
        temp1.innerHTML=istemAdi
        temp1.style.margin="5px"
        temp1.style.border="solid 2px black"
        document.getElementById("secilenIstemler").appendChild(temp1)
        }
    console.log(istemListesi)
    }
}


function odaekle(){
    let yenioda=prompt("Oda yada doktor adını giriniz: ")
    if (yenioda!="" && yenioda!=null){
        let odaAlanı= document.getElementById("odalar")
        let newoda=document.createElement("p")
        let odaID="oda"+odaindeks
        odaindeks++
        newoda.style.display="inline"
        newoda.id=odaID
        newoda.innerHTML=yenioda
        newoda.style.margin="10px"
        newoda.style.border="solid 2px black"
        odaAlanı.appendChild(newoda)
        odaListesi.push(new Oda(yenioda,odaID))
        console.log(odaListesi)
        let tabloyaEkle=document.createElement("tr")
        tabloyaEkle.innerHTML=yenioda.toUpperCase()
        tabloyaEkle.id=yenioda
        document.getElementById("tablobody").appendChild(tabloyaEkle)
        for(let istemler of tetkikBasliklari){
            let tdekle=document.createElement("td")
            tdekle.innerHTML=0
            tdekle.id=yenioda+istemler
            tabloyaEkle.appendChild(tdekle)

        }
    }

        
    }


/* function sabitodaekle(sabitoda){
    console.log(sabitoda)
   
    if (sabitoda!="" && sabitoda!=null){
        let odaAlani= document.getElementById("odalar")
        let newoda=document.createElement("p")
        let odaID="oda"+odaindeks
        odaindeks++
        newoda.style.display="inline"
        newoda.id=odaID
        newoda.innerHTML=sabitoda
        newoda.style.margin="10px"
        newoda.style.border="solid 2px black"
        odaAlani.appendChild(newoda)
        odaListesi.push(new Oda(sabitoda,odaID))
        console.log(odaListesi)
        for(let oda of odaListesi) {
        console.log(oda)
        }
    }
} */

function getMinOda(){
    let minOda=odaListesi[0]
    console.log("secilen oda",minOda.odaTetkikleri)
    let mintoplam=100000
    for (let oda of odaListesi){
        console.log("deglendirilen oda ", oda)
        console.log(oda.odaTetkikleri)

            // tetkik kimde en azsa ona gonderir
            // birden fazla tetkik varsa ucununtoplami kimde en azsa ona gonderir
            //ucunde esitse toplam tetkik sayisi en az olana gonderecek sekilde ekleme yapılacak
        let toplam=0
        for (let tetkik of istemListesi){
            console.log(oda.odaTetkikleri)
            toplam+= oda.odaTetkikleri[tetkik]
        }
        if (toplam<mintoplam){
            mintoplam=toplam
            minOda=oda}

     }
     console.log("secilen oda",minOda.odaname)
     return minOda
 }

 function odayaTetkikleriEkle(secilenOda){
    console.log(secilenOda)
    let tabloGirisElemani=document.getElementById(secilenOda.odaname)

    for (let tetkik of istemListesi){
        console.log(tabloGirisElemani)
        secilenOda.odaTetkikleri[tetkik]++
        let tempelementname=secilenOda.odaname+tetkik
        let tempelement=document.getElementById(tempelementname)
        tempelement.innerHTML=secilenOda.odaTetkikleri[tetkik]

    }
    document.getElementById("sonucEkrani").innerHTML=secilenOda.odaname
    
 }

 function istemListesiniTemizle(){
    let parent=document.getElementById("secilenIstemler")
    let child=parent.lastElementChild
    while(child){
        parent.removeChild(child)
        child=parent.lastChild
    }
    istemListesi=[]
    console.log(istemListesi)
 }

 function istemleriOdayaAktar(){
    odayaTetkikleriEkle(getMinOda())
    istemListesiniTemizle()

 }

 function tabloHazirla(){
    let tabloheader=document.getElementById("istembaslik")
    let firstrow=document.createElement("th")
    firstrow.innerHTML="Odalar"
    tabloheader.appendChild(firstrow)
    for (let baslik of tetkikBasliklari){
        let element=document.createElement("th")
        console.log(element)
        element.innerHTML=baslik
        console.log(element.innerHTML)
        element.style.margin="3px"
       
        console.log(tabloheader)

        tabloheader.appendChild(element)
    }

}

function tablogoster(){
    let tablodiv=document.getElementById("odatablosu")
    if (tablo==false){
        tablodiv.style.display="block"
        document.getElementById("tabloackapa").innerHTML="Tabloyu kaldır"
        tablo=true
    } else {tablodiv.style.display="none"
            tablo=false
            document.getElementById("tabloackapa").innerHTML="Tabloyu aç"
        }
    

}



    