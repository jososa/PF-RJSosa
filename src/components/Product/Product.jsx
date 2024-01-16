import { Link, useParams } from "react-router-dom"
import { Submit } from "../Submit/Submit"

export const Product = ( {products} ) => {
    const { categoryId } = useParams()
    return (
        <section className="container m-auto mt-8">
        <h2 className="text-4xl font-bold">{!categoryId ? "Todos los productos" : categoryId.toUpperCase()}</h2>
        <hr />
        <div className="grid grid-cols-3 gap-3">
            { products.map((item) => (

        <div className="flex flex-row mb-10">
            <article key={item.id} className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                <img className="h-48 w-full object-cover object-center" src={item.img} alt={item.name} />
                    <div className="p-4">
                    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{item.name}</h2>
                    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{item.description}</p>
                    <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${item.price}</p>
                    </div>
                    </div>
                <Submit>
                    <Link to={`/item/${item.id}`}>Ver más</Link>
                </Submit>
            </article>
        </div>
        ))}
        </div>
    </section>
    )
}