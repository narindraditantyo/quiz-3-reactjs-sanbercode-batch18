import React, { Component } from "react";
import Axios from "axios";
import '../Assets/css/style.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
        };
    }

    componentDidMount() {
        Axios.get("http://backendexample.sanbercloud.com/api/movies")
            .then((res) => {
                if (res.status === 200) {
                    this.setState({ movieList: res.data });
                }
            })
            .catch((error) => console.log(error.message));
    }

    render() {
        return (
            <section>
                <h1>Daftar Film Terbaik</h1>
                <div id="article-list">
                    {this.state.movieList.length > 0 &&
                        this.state.movieList.map((el, index) => {
                            return (
                                <div key={index} className="articles-item">
                                    <div className="container">
                                        <h3 className="articles-title">
                                            {el.title
                                                ? `${el.title[0].toUpperCase()}${el.title.substr(1)}`
                                                : "-"}
                                        </h3>
                                        <div>
                                            <div>
                                                <img
                                                    src={el.image_url}
                                                    alt={el.title}
                                                    style={{
                                                        width: "100%",
                                                        height: "400px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </div>
                                            <div className="col-4">
                                                <h4>Rating {el.rating || "-"}</h4>
                                                <h4>
                                                    Durasi:{" "}
                                                    {`${(Number(el.duration) / 60).toPrecision(1)} Jam`}
                                                </h4>
                                                <h4>
                                                    Genre:{" "}
                                                    {el.genre
                                                        ? el.genre.charAt(0).toUpperCase() +
                                                        el.genre.substr(1)
                                                        : "-"}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p>
                                                    <b>Deskripsi: </b>
                                                    {el.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </section>
        );
    }
}

export default Home;
