import React from 'react'
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{basket}, dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
              <img className="checkout__add"
              src="https://tse4.mm.bing.net/th?id=OIP.JYbxQm9xMleX_TwktnMNtQHaB-&pid=Api&P=0&w=488&h=131"
              alt=""/>
                
                <div >
                    <h2 className="checkout__title">
                        Your shopping basket </h2>
                        {basket.map(item => (
                           < CheckoutProduct 
                           id={item.id}
                           title={item.title}
                           image={item.image}
                           price={item.price}
                           rating={item.rating} />
                        )) 
                    }
                     

                </div>
        </div> 

        <div className="checkout__right">
            <Subtotal/>
    
        </div>
    </div>
    );
}

export default Checkout;
