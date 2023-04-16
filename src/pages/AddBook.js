import React, { useState } from "react";
import Header from "../component/Header";
import Button from "../component/Button";
import { Store } from "redux";
import { useSelector } from "react-redux";
import UpperFirstLetter from "../utils/functions";

const AddBook = () => {
    const { categoriesState } = useSelector(state => state)
    // const [title, setTitle] = useState("")
    // const [author, setAuthor] = useState("")
    // const [publisher, setPublisher] = useState("")
    // const [price, setPrice] = useState("")
    // const [isbn, setIsbn] = useState("")
    // const [categoriesId, setCategoriId] = useState("empty")

    // yukarıdaki oluşturduğumuz state ler yerine bunu kullanıyoruz.
    const [formState, setFormState] = useState({
        id: String(new Date().getTime()),
        title: "",
        aouthur: "",
        price: "",
        isbn: "",
        categoriesId: "empty"
    })
    console.log(formState,"dfsfs")
    const handleSubmit =(event) =>{
        event.preventDefault()
        // validation
        
    }
    return (
        <div>
            <Header />
            <div className="container my-5">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Kitap Adı</label>
                        <input type="text" className="form-control" id="title" placeholder="Puslu Kıtalar Diyarı"
                            value={formState.title}
                            onChange={(event => setFormState({ ...formState, title: event.target.value }))} />
                    </div>
                </form>
            </div>
            <div className="container my-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Yazın  Evi</label>
                        <input type="text" className="form-control" id="author" placeholder="İletişim"
                            value={formState.author}
                            onChange={(event => setFormState({ ...formState, author: event.target.value }))} />
                    </div>
                </form>
            </div>
            <div className="container my-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="publisher" className="form-label">Yazın  Evi</label>
                        <input type="text" className="form-control" id="publisher" placeholder="İletişim"
                            value={formState.publisher}
                            onChange={(event => setFormState({ ...formState, publisher: event.target.value }))} />
                    </div>
                </form>
            </div>
            <div className="container my-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Fiyat</label>
                        <input type="number" className="form-control" id="price" placeholder="70"
                            value={formState.price}
                            onChange={(event => setFormState({ ...formState, price: event.target.value }))} />
                    </div>
                </form>
            </div>
            <div className="container my-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="isbn" className="form-label">ISBN</label>
                        <input type="text" className="form-control" id="isbn" placeholder="xxxxxxxxxx"
                            value={formState.isbn}
                            onChange={(event => setFormState({ ...formState, isbn: event.target.value }))} />
                    </div>
                    <select value={formState.categoriesId}
                        onChange={(event => setFormState({ ...formState, categoriesId: event.target.value }))}
                        className="form-select" >
                        <option value="empty">Kategori Seçiniz</option>
                        {categoriesState.categories.map(category => (
                            <option key={category.id} value={category.id}>{UpperFirstLetter(category.name)}</option>

                        ))}
                    </select>
                    <div className="my-5 d-flex justify-content-center">
                        <button type="submit" className="btn btn-success w-50">Kaydet</button>
                    </div>
                </form>
            </div>

        </div>
    )
}


export default AddBook