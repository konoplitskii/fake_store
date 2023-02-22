import React from 'react';
import './CardList.css';
import Card from "../Card/Card";

const CardList = ({items}) => {
    return (
        <div className="card-list">
            {
                items.map(item => {
                    return <Card key={item.id} item={item}/>
                })
            }
        </div>
    );
};

export default CardList;