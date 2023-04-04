import React from "react";
import { useSelector } from "react-redux";



const ListBooks = () => {
    const { booksState, categoriesState } = useSelector(state => state)

    return (
        <div>
            {booksState.books.length === 0 && (
                <div className="my-5">
                    <div className="alert alert-danger" role="alert">
                        Gösterilecek bir kitap nulunmamaktadır.
                    </div>
                </div>
            )}
            {booksState.books.length > 0 && (
                <div className="my-5" >
                    <table className="table .table-striped">
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
                                booksState.books.map((books, index) => {
                                    const mayCategory = categoriesState.categories.find((item) => item.id === books.categoriesId)
                                    console.log(mayCategory, "fdgdgg")
                                    return (
                                        <tr key={books.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{books.title}</td>
                                            <td>{mayCategory.name}</td>
                                            <div className="btn-group" role="group" >
                                                <button type="button" className="btn btn-sm btn-secondary">Detay</button>
                                                <button type="button" className="btn btn-sm btn-danger">Sil</button>
                                                <button type="button" className="btn btn-sm btn-warning">Güncelle</button>
                                            </div>
                                        </tr>
                                    )
                                })}
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default ListBooks