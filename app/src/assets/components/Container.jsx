import React from 'react'
import styled from 'styled-components'
import { URL } from '../../App';

const Container = ({ data = [], url }) => {

    return (

        <Cont>
            <Cards>
                {data?.map((item) => (
                    <Card key={item.name}>
                        <img src={URL + item.image} alt="" />
                        <div className="section2">
                            <div className="name">{item.name}</div>
                            <div className="text">{item.text}</div>
                            <button className="price">${item.price}</button>
                        </div>
                    </Card>
                ))}
            </Cards>
        </Cont>
    )
}

const Cont = styled.div`
background-image: url("/bg.png");
background-size: cover;
min-height: 100%;
color: white;

@media (max-width: 894px){
    height: max-content;
}
`
const Card = styled.div`
width: 340px;
height: 167px;
background-color: #0000008e;
display: flex;
align-items: center;
margin-top: 30px;
  justify-self: center;
  border: 0.66px solid;
  border-radius: 20px;

  @media (max-width: 480px){
    scale: 0.7;
    margin-top: 0px;
  }

background: url(.png),
  radial-gradient(
    90.16% 143.01% at 15.32% 21.04%,
    rgba(165, 239, 255, 0.2) 0%,
    rgba(110, 191, 244, 0.0447917) 77.08%,
    rgba(70, 144, 213, 0) 100%
  );
  
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.1842px);

img{
    width: 133px;
height: 133px;
top: 7px;
left: 13px;
}


.section2{
    width: 200px;
height: 86px;
display: flex;
flex-direction: column;
align-self: flex-start;
margin-top: 15px;
margin-left: 10px;
gap: 10px;
}

.name{
    font-family: Inter;
font-weight: 600;
font-size: 16px;
}
.text{
    font-family: Inter;
font-weight: 400;
font-size: 12px;
}
.price{
    align-self: flex-end;
    width: 57px;
height: 25px;
border-radius: 5px;
padding: 6px 4px;
margin-right: 10px;
margin-top: 30px;
background-color: rgba(255, 67, 67, 1);
color: white;
display: flex;
justify-content: center;
align-items: center;
}
`
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    row-gap: 20px;
    max-width: 80%;
    margin: 0 auto;
    justify-content: center;

    @media (min-width: 1828px) { 
        justify-content: flex-start; 
    }
    @media(max-width: 480px){
        row-gap: 5px;
    }
`
export default Container
