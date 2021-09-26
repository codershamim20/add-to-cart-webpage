import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Card from '../single-card/Card';

const Display = () => {
    const [cards, setCards] = useState([]);
    // iteams on cart 
    const [cart, setCart] = useState([]);
    const handleAddIteam = (card)=>{
        const newCart = [...cart, card]
        setCart(newCart);
        // console.log(newCart)
    }
    useEffect(() => {
        fetch('./heroes.json')
            .then(res => res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div>
            <h2 className='text-center'>Heroes</h2>
            <div className="row">
                <div className="col-md-9">
                    {/* card-display-area */}
                    <div className="row g-2">
                        {
                            cards.map(card => <Card
                                key={card.id}
                                handleAddIteam={handleAddIteam}
                                card={card}
                            >

                            </Card>)
                        }
                    
                    
                    </div>
                    
                </div>
                <div className="col-md-3">
                    {/* clicked card info area */}
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Display;