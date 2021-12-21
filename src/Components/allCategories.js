import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import './Allcategories.css';
const style = {
    height: "auto",
    border: "1px solid green",
    margin: 6,
    padding: 8
};

function AllCategories() {

    // var pages = ["art", "electronics", "food-and-beverages", "health-and-beauty", "health-care", "home-and-garden", "pet-supplies", "sporting-goods", "toys-and-games"]


    const [page, setPage] = useState([]);


    useEffect(() => {

        const getPages = async () => {
            const response = await fetch('https://dev.api.seebiz.com/api/1.0/home/fetchCategoryByName?page=menu');
    
            const value = await response.json();
            setPage(value)
        }

        getPages();
    }, [])

    const pages = page.map((items)=>{
        return items.slug
    })

    console.log(pages);

    

    const [state, setState] = useState(
        {
            data: [],
            hasMore: true,
            ind: 1
        }
    )

    useEffect(() => {

        const getApparelData = async () => {

            const response2 = await fetch(`https://dev.api.seebiz.com/api/1.0/home/fetchCategoryByName?page=apparel`);
    
            const value2 = await response2.json();
    
            setState({
                data: state.data.concat(value2),
                hasMore: true,
                ind: 1
            });
        }

        getApparelData();
    }, [])




    const fetchMoreData = async () => {

        const val = []

        if (state.ind > 9) {
            setState({
                data: state.data.concat(val),
                hasMore: false
            });
            return;
        }

        const response = await fetch(`https://dev.api.seebiz.com/api/1.0/home/fetchCategoryByName?page=${pages[state.ind]}`);


        const value = await response.json();

        setTimeout(() => {
            setState({
                data: state.data.concat(value),
                hasMore: true,
                ind: state.ind + 1
            });
        }, 1500);



    };
    // console.log(state.hasMore);

    return (
        <div className="scrollable">
            <hr />
            <div id="scrollableDiv" style={{ height: 1000, overflow: "auto" }}>
                <InfiniteScroll
                    dataLength={state.ind}
                    next={fetchMoreData}
                    hasMore={state.hasMore}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {state.data.map((item, index) => (
                        <div style={style} key={index} className="maindiv">
                            <h1>{item.name}</h1>

                            <div className="childdiv" key={state.data.name}>
                                {
                                    item.childNodes.map((data) => {
                                        return (
                                            <div className="sbchild1" key={data.L2}>

                                                <b key={data.link}>{data.L2}</b>

                                                {
                                                    data.childNodes.map((data2) => {
                                                        return (

                                                            <ul className="ba" key={data2.breadcrumb}>
                                                                <li key={data2.id}>{data2.L3}</li>
                                                            </ul>

                                                        );
                                                    })
                                                }

                                            </div>

                                        );
                                    })
                                }

                            </div>
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default AllCategories;