import React, { Component } from 'react';
import PricingCard from './PricingCard';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class PricingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pricingContent: [{ title: 'Abstract Art Pricing', text: `Each piece of artwork is individually priced. I base this on how much work and effort I put into the picture, basically I'm just using my own criteria.` },
            { title: 'Abstract Art Postage and Packaging', text: `Postage & packing is set at £2.50 with 50 pence for each additional picture.Exchange rates will be calculated, depending on currencies used for payment. There will be no extras added to that part of the pricing.` },
            { title: 'Abstract Art Commissions - Custom Abstract Art', text: `Commissions will be undertaken upon an agreed upon price. This agreed price will include postage and packaging. If you require an odd size of picture, that will have be taken into account as regards posting and Packaging and will probably be more than the above price for the standard two sizes of A4 and A3.` },
            { title: 'Abstract Art Insurance', text: `Insurance - Within the UK I can insure pictures for up to £250 for £3.50 outside the UK I'm looking into the possibility, however for the moment it is not possible. You must contact me before buying a picture to require insurance. The size of the picture does not matter as regards insurance.` },
            { title: 'Abstract Art Payment methods', text: `Payment is made by PayPal, if paypal won't accept your payment for whatever reason you may send me a cheque made out to Tina Clarke. USA and UK cheques accepted only. Cashing a USA cheque can take well over a month and will cost an extra $3. Goods will only be sent when either USA or UK cheques have cleared.` },
            { title: 'Abstract Art Satisfaction', text: `If you are not totally happy with your Original Abstract Art, I will refund the cost of the art you purchased less packaging and posting, and any exchange rate costs, provided the artwork is sent back undamaged and upon receiving the artwork.` },
            { title: 'Abstract Art Shipping', text: `Artwork is sent in a cardboard cylinder of the size to match the artwork i.e. A4 or A3. On Tuesday of any week I visit my local Post Office and have the item weighed and posted.` },
            { title: 'Authentication of Art work by Tina Clarke', text: `All my work is Initialled with the year in brief (e.g. TAC 05) on the bottom right hand side of the picture, so you can tell which way up I thought the picture should be. However if you wish to display it another way the initial becomes part of the picture and does not interfere with viewing. All the pictures are fully signed and dated on the back. Sometimes I may name the picture on the back but I generally don't. If you wish a personal message to be included, you can leave me a message via paypal at point of purchase or email to discuss this or anything else before you buy.` }]
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div className='pricing-page-wrapper'>
                <div className='navbar-background'></div>
                <h1 className='pricing-title'>Pricing</h1>
                    {this.state.pricingContent.map((item, i) => {
                        
                        return (
                            <PricingCard key={item.title} title={item.title} text={item.text} timing={i} />
                        )
                    })}
            </div>
        )
    }
}

export default PricingPage;