import React from 'react';
import styled from 'styled-components';

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
    
    return (
        <CoinStyled>
            <div className="coin-container">
                <div className="coin-row">
                        <div className="item img">
                            <img className="img" src={image} alt="crypto" />
                        </div>
                        <div className="item">
                            <h3>{name}</h3>
                        </div>
                        <div className="item symbol">
                            <p className="coin-symbol">{symbol}</p>
                        </div>
                        <div className="item">
                            <p className="coin-price">£{price}</p>
                        </div>
                        <div className="item volume">
                            <p className="coin-volume">£{volume.toLocaleString()}</p>
                        </div>
                        <div className="item">
                            {
                                priceChange < 0 ? (
                                    <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                                ) :(<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)
                            } 
                        </div>
                        <div className="item marketcap">
                            <p className="coin-marketcap">Mkt Cap: £{marketcap.toLocaleString()}</p>
                        </div>
                </div>
            </div>
            </CoinStyled>
    )
}

const CoinStyled = styled.div`
    width: 100%;

    .coin-container{
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .coin-row{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 90%;
        border-bottom: 1px solid #fff;
        padding: 1.6rem 0;
    }

    .img{
        width: 3rem;
    }

    .item{
        width: 12rem;
        text-align: center;
    }

    .red{
        color: red;
    }

    .green{
        color: green;
    }


`;

export default Coin
