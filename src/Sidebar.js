import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {

    const createElements = (n) => {
        var elements = [];
        for(let i =0; i < n; i++){
            elements.push(i);
        }
        return elements;
    }

    return (
        <div className="sidebarContainer">
            <h1>Top 5</h1>
            <div className="savedProducts">
            {props.isSaved.map((product) => {
                return (
                    <div className="singleSavedProduct">
                        <h1 className="productRanking">{createElements(1)}</h1>
                        <p className="specialSidebarProduct">{product}</p>
                        <h3>X</h3>
                    </div>
                )
            })}
                <div className="singleSavedProduct">
                    <h1 className="productRanking">1</h1>
                    <p>Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB</p>
                    <h3>X</h3>
                </div>
                <div className="singleSavedProduct">
                    <h1 className="productRanking">2</h1>
                    <p>peepers by peeperspecs Women's Showbiz Soft Square Blue Light Blocking Reading Glasses</p>
                    <h3>X</h3>
                </div>
                <div className="singleSavedProduct">
                    <h1 className="productRanking">3</h1>
                    <p>Philips Pasta and Noodle Maker Plus, Large, HR2375/06</p>
                    <h3>X</h3>
                </div>
                <div className="singleSavedProduct">
                    <h1 className="productRanking">4</h1>
                    <p>Samsonite & Sarah Jessica Parker - Shoeful Convertible Duffel, One Size, Black</p>
                    <h3>X</h3>
                </div>
                <div className="singleSavedProduct">
                    <h1 className="productRanking">5</h1>
                    <p>Galison Faith Ringgold The Sunflower Quilting Bee at Arles Puzzle, 1000 Pieces, 27” x 20” – Difficult Jigsaw Puzzle with Stunning & Colorful Artwork – Thick, Sturdy Pieces, Challenging Family Activity</p>
                    <h3>X</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
