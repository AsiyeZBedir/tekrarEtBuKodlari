import React from "react";

// Ana bileşenimizi oluşturuyoruz.
export default function App() {
  // Durum (state) değişkenimizi tanımlıyoruz. Başlangıçta "Evet" olarak ayarlanmış.
  const [isGoingOut, setIsGoingOut] = React.useState(true);

  // Tıklamada durumu değiştiren işlevi tanımlıyoruz.
  function changeMind() {
    // setIsGoingOut işlevi, önceki durumu alır ve tersine çevirir.
    setIsGoingOut(prevState => !prevState);
  }

  return (
    <div>
      {/* Tıklamaya yanıt veren div öğesini oluşturuyoruz. */}
      <div onClick={changeMind}>
        {/* Duruma göre metni gösteren başlık (h1) öğesini oluşturuyoruz. */}
        <h1>{isGoingOut ? "Evet" : "Hayır"}</h1>
      </div>
    </div>
  );
}
