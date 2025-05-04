import styled from "styled-components";
import Container from "./assets/components/Container";
import { useState, useEffect } from "react";

export const URL = 'http://localhost:9000'
const App = () => {
  const [loading, setLoading] = useState(false)
  const [data, setdata] = useState(null)
  const [error, seterror] = useState(null)
  const [filtereddata, setFiltereddata] = useState(null)
  const [selectedbtn, setSelectedbtn] = useState("all")

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true)
      try {
        let data = await fetch(URL);
        let response = await data.json();
        setdata(response)
        setFiltereddata(response)
        setLoading(false);

      } catch (error) {
        seterror("Unable to fetch data")
      }

      if (error) return <div>{error}</div>
      if (loading) return <div>{"Fetching data ....."}</div>
    }
    fetchdata();
  }, [])

  function search(e) {
    const searchvalue = e.target.value

    const filter = data?.filter((item) => item.name.toLowerCase().includes(searchvalue.toLowerCase()))
    setFiltereddata(filter)
  }


  function filterbtns(type) {
    if (type == "all") {
      setFiltereddata(data)
      setSelectedbtn("all")
      return;
    }


    const filter = data?.filter((item) => item.type.toLowerCase().includes(type.toLowerCase()))
    setFiltereddata(filter)
    setSelectedbtn(type)
  }

  const filterbtn = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },

  ]

  return <Main>
    <Nav>
      <Navtitle>
        <Logoheading>
          F<span>OO</span>DY Z<span>O</span>NE
        </Logoheading>
        <Searchbox>
          <input onChange={search} type="text" placeholder="  Search Food..." />
        </Searchbox>
      </Navtitle>
      <Filterbuttons>

        {filterbtn.map((item)=>(
          <button key={item.name} onClick={()=>filterbtns(item.type)}>
            {item.name}
          </button>
        ))}
      </Filterbuttons>
    </Nav>

    < Container data={filtereddata} />
  </Main>
};
const Main = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #323334;
  `;


const Nav = styled.div`
height: 240px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Navtitle = styled.div`
display: flex;
justify-content: space-between;
opacity: 0px;
width: 80%;
height: 100px;
margin-bottom: 20px;

@media (max-width: 650px){
  flex-direction: column;
  align-items: center;
}
`
const Filterbuttons = styled.div`

display: flex;
gap: 20px;
  button{    
background: #FF4343;
color: white  ;
gap: 10px;
border-radius: 5px;
padding-top: 6px;
padding-right: 12px;
padding-bottom: 6px;
padding-left: 12px;
  }
`
const Logoheading = styled.div`
color: white;
  font-family: Inter;
font-size: 32px;
font-weight: 700;

span{
  color: red;
}
`
const Searchbox = styled.div`
input{
  font-family: Inter;
font-size: 16px;
color: white;
  background-color: transparent;
  width: 285px;
  height: 40px;
border-radius: 5px;
border: 1px 0px 0px 0px;
border-color : red;
}
input::placeholder{
  color: white;
  font-size: 16px;
}
`
export default App;
