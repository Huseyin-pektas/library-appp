
import React,{useState} from "react";

/*
=> REACTA FORM handle etmektekten bahsediyorsak ;
herbir inpur için (input, texterea,select) birer tane 
state oluşturmalıyız.

=>JSX içersinde eventlistener ekleme yöntemi
kullanarak (buton->onclick) onsubmit eventine listener
 ekleriz ve formu kontrol ederiz
*/

function App() {

  const [ad,setAd]=useState("");
  const [Soyad,setSoyad]=useState("");


 const formuDenetle =(event) => {
  event.preventDefault();
  /* validetion */
  if(ad===""){
    alert("ad boş bırakılamaz")
    return
  }
  if(Soyad ===""){
    alert("soyad boş bırakılamaz")
    return
  }
  alert("FORM BAŞARILI")
}

  return (
    <div className="App">
        <form onSubmit={formuDenetle}>
          <div>
            <label>Adı:</label>
            <input value={ad} onChange={(event)=>{
              setAd(event.target.value)
            }} placeholder="Dr.Alex"></input>
          </div>
          <div>
            <label>Soyadı:</label>
            <input value={Soyad} onChange={(event)=>{
              setSoyad(event.target.value) 
            }} placeholder="fergusson"></input>
          </div>
          <div>
           <button type="submit">Gönder</button>
          </div>
        </form>

    </div>
  );
}
/*
JAVASCRİPT TE YAPIMI BU ŞEKİLDE;

const input=document.createElement("input")
input.addEventListener.('change',(event)=>{
  event.target.value
})
*/

/* input handle ->1.controlled olarak çok kullanıyoruz. */

export default App;
