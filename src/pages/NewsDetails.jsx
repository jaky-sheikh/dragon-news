import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-components/RightNavbar";
import Navbar from "../components/Navbar";
const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(news);
    return (
        <div>
            <header className="mt-4">
                <Header></Header>
                <Navbar></Navbar>
            </header>
            <h2>Dragon news</h2>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back to id</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;