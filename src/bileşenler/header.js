const Header = (baslik, tarih, yazi) => {
  const divHeader = document.createElement("div");
  divHeader.classList.add("header")

  const spanDate = document.createElement("span");
  spanDate.classList.add("date")
  spanDate.textContent = tarih;

  const tekH1 = document.createElement("h1");
  tekH1.textContent = baslik;

  const spanTemp = document.createElement("span");
  spanTemp.classList.add("temp");
  spanTemp.textContent = yazi;

  divHeader.appendChild("spanDate");
  divHeader.appendChild("tekH1");
  divHeader.appendChild("spanTemp");
  return divHeader



  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
}

const headerEkleyici = (secici) => {
  const headerOgeleri = document.querySelector(secici);
  headerOgeleri.append(Header("Teknoloji Zamanı", "24.06.2023", "Güncel Blog"));
  
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 
}

export { Header, headerEkleyici }

