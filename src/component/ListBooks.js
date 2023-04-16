import React from "react";
import { useSelector } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";
import api from "../api/api";
import url from "../api/url";
import UpperFirstLetter from "../utils/functions";
import Button from "./Button";



const ListBooks = () => {
    const { booksState, categoriesState } = useSelector(state => state)

    return (
        <div >
            {booksState.books.length === 0 && (
                <div className="my-5 p-2 d-flex justify-content-center" >
                    <div className="alert alert-danger" role="alert">
                        Gösterilecek bir kitap bulunmamaktadır.
                    </div>
                </div>
            )}
            {booksState.books.length > 0 && (
                <div >
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Sıra No</th>
                                <th scope="col">Kitap Adı</th>
                                <th scope="col">Kategori</th>
                                <th scope="col">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booksState.books.map((book, index) => {
                                    const mayCategory = categoriesState.categories.find((item) => item.id === book.categoriesId)
                                    return (
                                        <tr key={book.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{UpperFirstLetter(book.title)}</td>
                                            <td>{UpperFirstLetter (mayCategory.name)}</td>
                                            <div className="btn-group" role="group" >
                                                <button type="button" className="btn btn-sm btn-secondary">Detay</button>
                                                <button type="button" className="btn btn-sm btn-danger">Sil</button>
                                                <button type="button" className="btn btn-sm btn-warning">Güncelle</button>
                                            </div>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default ListBooks
