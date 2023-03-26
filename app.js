//Benzin istasyonu 

/**
    1-dizel   : 24.53
    2-benzin  : 22.25
    3-lpg     : 11.1

    Müşteriden istenecek şeyler:
        1-yakıt tipi
        2-yakıt miktarı
*/

let dizel = 24.53, benzin = 22.25, lpg = 11.1;

//alt satıra geçirme metni
const yeniSatir = "\r\n";

//bilgilendirme metni
const yakitMetni = "1-Dizel" +yeniSatir
+"2-Benzin"+yeniSatir
+"3-LPG"+yeniSatir
+"Lütfen yakıt tipinizi seçiniz!";

let yakitTipi = prompt(yakitMetni);

if (yakitTipi==1 || yakitTipi==2 || yakitTipi==3){
    let yakitLitresi = Number(prompt("Kaç litre yakıt alacaksınız?"));
    let bakiye = Number(prompt("Bakiyenizi Giriniz!"));

    //dizel
    if(yakitTipi==1);{
        let odenecektutar = dizel*yakitLitresi;
        let kalanBakiye = bakiye-odenecektutar;
        let ekucret = odenecektutar-bakiye;

        if(odenecektutar<bakiye){
            alert("İşlem başarılı!"+yeniSatir +
            "ödeyeğiniz tutar: "+odenecektutar +yeniSatir +
            "kalan bakiye: "+kalanBakiye);
        }else{
            alert("Bakiyeniz yeterli değil!" +yeniSatir +
            "ödeyeceğiniz tutar: "+ odenecektutar +yeniSatir+
            "ödemeniz gereken ek ücret: "+ekucret);
        }
    }

    //benzin 
    if(yakitTipi==2);{
        let odenecektutar = benzin*yakitLitresi;
        let kalanBakiye = bakiye-odenecektutar;
        let ekucret = odenecektutar-bakiye;

        if(odenecektutar<bakiye){
            alert("İşlem başarılı!"+yeniSatir +
            "ödeyeğiniz tutar: "+odenecektutar +yeniSatir +
            "kalan bakiye: "+kalanBakiye);
        }else{
            alert("Bakiyeniz yeterli değil!" +yeniSatir +
            "ödeyeceğiniz tutar: "+ odenecektutar +yeniSatir+
            "ödemeniz gereken ek ücret: "+ekucret);
        }
    }

    //LPG
    if(yakitTipi==3);{
        let odenecektutar = lpg*yakitLitresi;
        let kalanBakiye = bakiye-odenecektutar;
        

        if(odenecektutar<bakiye){
            alert("İşlem başarılı!"+yeniSatir +
            "ödeyeğiniz tutar: "+odenecektutar + yeniSatir +
            "kalan bakiye: "+kalanBakiye);
        }else{
            alert("Bakiyeniz yeterli değil!" +yeniSatir +
            "ödeyeceğiniz tutar: "+ odenecektutar +yeniSatir+
            "ödemeniz gereken ek ücret: "+ekucret);
        }
    }
}else{
    alert("lütfen geçerli bir işlem seçiniz!");
}