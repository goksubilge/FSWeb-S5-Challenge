# Uygulamalı JavaScript Sprint Mücadelesi

**Bu talimatları dikkatlice okuyun. Bu Sprint Mücadelesine başlamadan önce tam olarak ne beklendiğini anlayın.**

Bu mücadele, geçmiş sprint boyunca öğrenilen kavramları ve teknikleri uygulamanıza ve bunları somut bir projede kullanmanıza olanak tanır. Bu sprint sayesinde **Uygulamalı JavaScript** 'i keşfettiniz. Bu sprint boyunca **DOM ve bileşenler**'i öğrendiniz. Bu mücadelede, **çevrimiçi bir Teknoloji Gazetesi** oluşturarak bu becerilerdeki ustalığınızı göstereceksiniz.

Bu projeyi, herkesin kendisinin yapması beklenmektedir. Tüm iş size ait olmalıdır. Mücadele puanınız, bu sprint boyunca işlenen materyali kullanarak bağımsız çalışma yeteneğinizin bir ölçüsüdür. Önceki Sprint'te tanıtılan ve uygulanan kavram ve hedeflerde yeterlilik göstermeniz gerekir.

Bu sprint mücadelesi sırasında işbirliği yapmanıza izin verilmez.

### Proje Kurulumu

* [ ] Bu projenyi forklayarak bir kopyasını oluşturun.
* [ ] Reponun kendi versiyonunuzu klonlayın.
* [ ] Commitinizi pushlayın: `git push origin main`.

## Proje Açıklaması

### Giriş

Bir teknoloji gazetesi oluşturacaksınız. İşiniz, gazetenin ana sayfasını oluşturan bileşenleri oluşturmak olacak..

Aşağıda listelenen minimum uygulanabilir ürün (MVP) spesifikasyonlarını karşılayan projeniz, aşağıda bağlantısı verilen görüntüye benzer görünmelidir.:

[Teknoloji Zamanı](/tasarım.png)

### Detaylar

- [ ] Komut satırınızla projenin kök dizinine gidin.
- [ ] `package.json` dosyasında listelenen bağımlılıkları indirmek için `npm install` komutunu çalıştırın.
- [ ] Projeyi derlemek ve sunmak için `npm start` komutunu çalıştırın.
- [ ] Chrome'da `http://localhost:3000` konumuna gidin
- [ ] Testleri çalıştırmak için ayrı bir terminalde `npm test` komutunu yazın.

**MVP için adımlar:**

- [ ] Adım 1 ve 2 `src/bileşenler/header.js` dosyasında açıklandı.
- [ ] Adım 3 ve 4 `src/bileşenler/tabs.js` dosyasında açıklandı.
- [ ] Adım 5 ve 6 `src/bileşenler/card.js` dosyasında açıklandı.

**Önemli Notlar:**

- Lütfen **dosyaları ya da klasörleri taşımayın ve isimlerini değiştirmeyin** .
- Geliştirme sunucunuz "otomatik yeniden yüklemeyi" durdurursa, `CTRL+C` ile manuel olarak sonlandırın ve yeniden başlatın.
- `package.json` 'ı değiştirmeyin, sadece NPM ile dosyaları indirin (Axios _halihazırda_ `package.json` 'a eklendi).
- Çözümünüzde en iyi uygulamaları izlemeniz, temiz ve profesyonel sonuçlar üretmeniz önemlidir.
- Yazım denetimi ve dilbilgisi denetimi de dahil olmak üzere çalışmanızı gözden geçirmek, iyileştirmek için zaman planlayın.
- MVP'yi karşılayan bir meydan okuma göndermek, çok fazla detayla uğraşılıp da çalışmayan bir kod göndermekten daha iyidir.


## Ek Sorular

Aşağıdaki soruları yanıtlayarak bu sprint'in kavramlarını anladığınızı gösterin. Her sorudan sonra yanıtlarınızı eklemek için bu belgeyi düzenleyin.

1. DOM nedir?
2. Bir event nedir?
3. Bir event dinleyici(listener) nedir?
4. Neden bir NodeList'i Array'e dönüştürelim??
5. Bileşen nedir?

1. DOM ('Document Object Model'), belgenin içeriğinin belirli bir düzen içerisinde nesne olarak temsil edilmesini sağlayan bir modeldir. bir internet sayfası adresine gitmek istediğimizde, internet tarayıcısı bir web sayfasını açarken sunucuya ilk isteği gönderir ve sayfaya ait belge yükler. Bu modelde belge yapısında bulunan her bir nesne için bir düğüm bulunur. Bu nesneler kök bir düğüme bağlıdır. Servis, belgedeki nesneleri düğümlerden çözerek hiyerarşiye göre sayfanın içine yerleştirir ve site açılmış olur.

2. Bir sitenin içinde, kullanıcının her etkileşimi birer eventtir (olaydır). düğmeye tıklama, sürükleyip bırakma, tuşa basma ya da tuştan parmağını kaldırma vb.

