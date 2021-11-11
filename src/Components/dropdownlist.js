import React, { useEffect, useState } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Dropdown, NavDropdown, Button } from 'react-bootstrap';
// import { catalogData } from './home';

import { clickedData } from "../Services/Action/action";

import { useDispatch } from 'react-redux';




function Dropdownlist() {

    // var { hello } = useContext(catalogData);

    const dispatch = useDispatch();


    const [data, setData] = useState([])

    // const hello = (value) => {
    //     console.log(value);
    // }

    const getDeta = async () => {
        const response = await fetch('https://dev.api.seebiz.com/api/1.0/home/fetchCategoryByName?page=menu');
        // console.log(response);
        setData(await response.json());
        console.log(data);
    }

    useEffect(() => {
        getDeta();
    }, [])




    return (
        <div className="main">
            <Button variant="Light" size="md" className="btn" >
                <i className="fas fa-bars bar"></i>&nbsp; Categories &nbsp;<i className="fas fa-caret-down drop"></i></Button>

            <div className="mainlist">

                <div className="mainlist2">
                    {
                        data.map((item) => {
                            return (

                                <div key={item.L1}>
                                    <NavDropdown.Item href="#action/3.1" className="list" onClick={() => dispatch(clickedData(item))}>    {/* props.drpdata(item.name)*/}
                                        {/* <i className="fas fa-tshirt"></i>&nbsp; {item.name} */}
                                        {item.name}

                                        <div className="child" key={data.name}>
                                            {
                                                item.childNodes.map((data) => {
                                                    return (
                                                        <div className="sb1" key={data.L2}>

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



                                    </NavDropdown.Item>
                                    <Dropdown.Divider className="divider" />

                                </div>

                            );
                        })
                    }

                </div>
                {/* {
                    data.map((item) => {
                        return (

                           
                        )
                    })
                } */}

                <div className="child2">
                    <p><b>All Catagories</b></p>
                </div>

            </div>
        </div>
    );

}

// const mapStateToProps = state => ({
//     clickdata: state.clickeditems.clickdata.name
// })

// const mapDispatchToProps = dispatch => ({
//     dataHandler: data => dispatch(clickedData(data))
// })

export default Dropdownlist

// connect(mapStateToProps, mapDispatchToProps)(Dropdownlist)



//  <NavDropdown.Item href="#action/3.1" className="list1">
//                 <i className="fas fa-tshirt"></i>&nbsp; Apparel

//                     <div className="child1">
//                         <div className="l1">
//                             <ul className="ba">
//                                 <li><b>Baby & Toddler</b></li>
//                                 <li>Baby Accessories</li>
//                                 <li>Bottoms</li>
//                                 <li>Christening Clothing</li>
//                                 <li>Dresses</li>
//                                 <li>One-Pieces</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Costumes</b></li>
//                                 <li>Accessories</li>
//                                 <li>Boys</li>
//                                 <li>Girls</li>
//                                 <li>Infants & Toddlers</li>
//                                 <li>Men</li>
//                             </ul>
//                         </div>

//                         <div className="l2">
//                             <ul className="ba">
//                                 <li><b>Boys' Clothing</b></li>
//                                 <li>Jeans</li>
//                                 <li>Bottoms</li>
//                                 <li>Bottoms</li>
//                                 <li>Others In Boys' Clothing</li>
//                                 <li>Outerwear</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Dancewear</b></li>
//                                 <li>Adult Dancewear</li>
//                                 <li>Baby & Toddler Dancewear</li>
//                                 <li>Dance Shoes</li>
//                                 <li>Kids' Dancewear</li>
//                                 <li>Others In Dancewear</li>
//                             </ul>
//                         </div>

//                         <div className="l3">
//                             <ul className="ba">
//                                 <li><b>Clothing & Shoe Care</b></li>
//                                 <li>Clothes Brushes</li>
//                                 <li>Garment Bags</li>
//                                 <li>Others In Clothing & Shoe Care</li>
//                                 <li>Shoe Care & Repair</li>
//                                 <li><br /></li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Girls' Clothing</b></li>
//                                 <li>Perfumes</li>
//                                 <li>Dresses</li>
//                                 <li>Girls' Accessories</li>
//                                 <li>Girls' Shoes</li>
//                                 <li>Jeans</li>
//                             </ul>
//                         </div>

//                     </div> 
                
//                 </NavDropdown.Item>
//                 <Dropdown.Divider className="divider" />

//                 <NavDropdown.Item href="#action/3.2" className="list2">
//                 <i className="fas fa-palette"></i>&nbsp; Art

//                     <div className="child1">
//                         <div className="l1">
//                             <ul className="ba">
//                                 <li><b>Animation & Charactersr</b></li>
//                                 <li>Ah My Goddess</li>
//                                 <li>Akira</li>
//                                 <li>Astro Boy</li>
//                                 <li>Berserk</li>
//                                 <li>Betty Boop</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Home Arts & Crafts</b></li>
//                                 <li>Decorative & Tole Painting</li>
//                                 <li>Floral Crafts</li>
//                                 <li>Framing & Matting</li>
//                                 <li>Metalworking</li>
//                                 <li>Others In Home Arts & Crafts</li>
//                             </ul>
//                         </div>

//                         <div className="l2">
//                             <ul className="ba">
//                                 <li><b>Boys' Clothing</b></li>
//                                 <li>Jeans</li>
//                                 <li>Bottoms</li>
//                                 <li>Bottoms</li>
//                                 <li>Others In Boys' Clothing</li>
//                                 <li>Outerwear</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Dancewear</b></li>
//                                 <li>Adult Dancewear</li>
//                                 <li>Baby & Toddler Dancewear</li>
//                                 <li>Dance Shoes</li>
//                                 <li>Kids' Dancewear</li>
//                                 <li>Others In Dancewear</li>
//                             </ul>
//                         </div>

//                         <div className="l3">
//                             <ul className="ba">
//                                 <li><b>Clothing & Shoe Care</b></li>
//                                 <li>Clothes Brushes</li>
//                                 <li>Garment Bags</li>
//                                 <li>Others In Clothing & Shoe Care</li>
//                                 <li>Shoe Care & Repair</li>
//                                 <li><br /></li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Girls' Clothing</b></li>
//                                 <li>Perfumes</li>
//                                 <li>Dresses</li>
//                                 <li>Girls' Accessories</li>
//                                 <li>Girls' Shoes</li>
//                                 <li>Jeans</li>
//                             </ul>
//                         </div>

//                     </div>


//                 </NavDropdown.Item>
//                 <Dropdown.Divider className="divider" />

//                 <NavDropdown.Item href="#action/3.3" className="list3">
//                 <i className="fas fa-plug"></i>&nbsp; Electronics

//                     <div className="child1">
//                         <div className="l1">
//                             <ul className="ba">
//                                 <li><b>Cell Phones & Accessories</b></li>
//                                 <li>Accessory Bundles</li>
//                                 <li>Armbands</li>
//                                 <li>Audio Docks & Speakers</li>
//                                 <li>Batteries</li>
//                                 <li>Cables & Adapters</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Computers Supplies</b></li>
//                                 <li>Others In Computers Supplies</li>
//                                 <li>Printers & Scanners</li>
//                                 <li><br /></li>
//                                 <li><br /></li>
//                                 <li><br /></li>
//                             </ul>
//                         </div>

//                         <div className="l2">
//                             <ul className="ba">
//                                 <li><b>Computer Networking</b></li>
//                                 <li>Enterprise Networking & Servers</li>
//                                 <li>Home Networking & Connectivity</li>
//                                 <li>Keyboards, Mice & Pointers</li>
//                                 <li>Monitors, Projectors & Accs</li>
//                                 <li>Others In Computer Networking</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Consumer Electronics</b></li>
//                                 <li>Home Surveillance</li>
//                                 <li>Home Telephones & Accessories</li>
//                                 <li>Mixed Lots</li>
//                                 <li>Multipurpose Batteries & Power</li>
//                                 <li>Others In Consumer Electronics</li>
//                             </ul>
//                         </div>

//                         <div className="l3">
//                             <ul className="ba">
//                                 <li><b>Computers &Tablets</b></li>
//                                 <li>3D Printer Accessories</li>
//                                 <li>3D Printer Consumables</li>
//                                 <li>3D Printer Parts</li>
//                                 <li>3D Printers</li>
//                                 <li>3D Scanner Accessories</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>E-Cigarettes & Vapes</b></li>
//                                 <li>E-Cigarette & Vape Access</li>
//                                 <li>E-Cigarette & Vape Parts</li>
//                                 <li>E-Cigarettes, Vapes & Mods</li>
//                                 <li>E-Liquids & E-Cig Cartridges</li>
//                                 <li>Others In E-Cigarettes </li>
//                             </ul>
//                         </div>

//                     </div>
//                 </NavDropdown.Item>
//                 <Dropdown.Divider className="divider" />

//                 <NavDropdown.Item href="#action/3.3" className="list4">
//                 <i className="fas fa-hamburger"></i>&nbsp; Food & Beverages

//                     <div className="child1">

//                         <div className="l1">
//                             <ul className="ba">
//                                 <li><b>Alcohol & Mixers</b></li>
//                                 <li>Absinthe</li>
//                                 <li>Beer</li>
//                                 <li>Brandy & Cognac</li>
//                                 <li>Cider</li>
//                                 <li>Cocktail & Mixes</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Sweets & Chocolate</b></li>
//                                 <li>Candy</li>
//                                 <li>Chocolate Blocks</li>
//                                 <li>Chocolate Sweets & Assortments</li>
//                                 <li>Cookies & Biscuits</li>
//                                 <li>Novelty Chocolates</li>
//                             </ul>
//                         </div>

//                         <div className="l2">
//                             <ul className="ba">
//                                 <li><b>Non-Alcoholic Drinks</b></li>
//                                 <li>Coconut Water</li>
//                                 <li>Coffee</li>
//                                 <li>Dairy Alternatives</li>
//                                 <li>Energy & Fitness Drinks</li>
//                                 <li>Hot Chocolate & Malted Drinks</li>
//                             </ul>
//                         </div>

//                         <div className="l3">
//                             <ul className="ba">
//                                 <li><b>Pantry</b></li>
//                                 <li>Baking & Desserts</li>
//                                 <li>Breakfast Cereals</li>
//                                 <li>Cereal & Breakfast Bars</li>
//                                 <li>Coconut Milk & Cream</li>
//                                 <li>Condiments & Sauces</li>
//                             </ul>
//                         </div>

//                     </div>
//                 </NavDropdown.Item>
//                 <Dropdown.Divider className="divider" />

//                 <NavDropdown.Item href="#action/3.3" className="list5">
//                 <i className="fas fa-spray-can"></i>&nbsp; Health & Beauty

//                     <div className="child1">
//                         <div className="l1">
//                             <ul className="ba">
//                                 <li><b>Bath & Body</b></li>
//                                 <li>Bar Soaps</li>
//                                 <li>Bath Bombs & Fizzies</li>
//                                 <li>Bath Brushes & Sponges</li>
//                                 <li>Bath Oils</li>
//                                 <li>Bath Salts</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Makeup</b></li>
//                                 <li>Body</li>
//                                 <li>Eyes</li>
//                                 <li>Face</li>
//                                 <li>Lips</li>
//                                 <li>Makeup Bags & Cases</li>
//                             </ul>
//                         </div>

//                         <div className="l2">
//                             <ul className="ba">
//                                 <li><b>Fragrances</b></li>
//                                 <li>Children's Fragrances</li>
//                                 <li>Men's Fragrances</li>
//                                 <li>Others In Fragrances</li>
//                                 <li>Unisex Fragrances</li>
//                                 <li>Women's Fragrances</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Manicure & Pedicure</b></li>
//                                 <li>Acrylic Powders & Liquids</li>
//                                 <li>Artificial Nail Tips</li>
//                                 <li>Cuticle Treatments</li>
//                                 <li>Electric Files & Tools</li>
//                                 <li>Fiberglass & Silk Wraps</li>
//                             </ul>
//                         </div>

//                         <div className="l3">
//                             <ul className="ba">
//                                 <li><b>Hair Care & Styling</b></li>
//                                 <li>Brushes & Combs</li>
//                                 <li>Hair Color</li>
//                                 <li>Hair Dryers</li>
//                                 <li>Hair Extensions & Wigs</li>
//                                 <li>Hair Loss Treatments</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Massage</b></li>
//                                 <li>Electric Massage Chairs</li>
//                                 <li>Linens & Covers</li>
//                                 <li>Massage Oils & Lotions</li>
//                                 <li>Massage Pillows & Bolsters</li>
//                                 <li>Massage Stones & Rocks</li>
//                             </ul>
//                         </div>

//                     </div>
//                 </NavDropdown.Item>
//                 <Dropdown.Divider className="divider" />


//                 <NavDropdown.Item href="#action/3.3" className="list6">
//                 <i className="fas fa-briefcase-medical"></i>&nbsp; Health Care

//                     <div className="child1">
//                         <div className="l1">
//                             <ul className="ba">
//                                 <li><b>Bath & Body</b></li>
//                                 <li>Bar Soaps</li>
//                                 <li>Bath Bombs & Fizzies</li>
//                                 <li>Bath Brushes & Sponges</li>
//                                 <li>Bath Oils</li>
//                                 <li>Bath Salts</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Makeup</b></li>
//                                 <li>Body</li>
//                                 <li>Eyes</li>
//                                 <li>Face</li>
//                                 <li>Lips</li>
//                                 <li>Makeup Bags & Cases</li>
//                             </ul>
//                         </div>

//                         <div className="l2">
//                             <ul className="ba">
//                                 <li><b>Fragrances</b></li>
//                                 <li>Children's Fragrances</li>
//                                 <li>Men's Fragrances</li>
//                                 <li>Others In Fragrances</li>
//                                 <li>Unisex Fragrances</li>
//                                 <li>Women's Fragrances</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Manicure & Pedicure</b></li>
//                                 <li>Acrylic Powders & Liquids</li>
//                                 <li>Artificial Nail Tips</li>
//                                 <li>Cuticle Treatments</li>
//                                 <li>Electric Files & Tools</li>
//                                 <li>Fiberglass & Silk Wraps</li>
//                             </ul>
//                         </div>

//                         <div className="l3">
//                             <ul className="ba">
//                                 <li><b>Hair Care & Styling</b></li>
//                                 <li>Brushes & Combs</li>
//                                 <li>Hair Color</li>
//                                 <li>Hair Dryers</li>
//                                 <li>Hair Extensions & Wigs</li>
//                                 <li>Hair Loss Treatments</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Massage</b></li>
//                                 <li>Electric Massage Chairs</li>
//                                 <li>Linens & Covers</li>
//                                 <li>Massage Oils & Lotions</li>
//                                 <li>Massage Pillows & Bolsters</li>
//                                 <li>Massage Stones & Rocks</li>
//                             </ul>
//                         </div>

//                     </div>
//                 </NavDropdown.Item>
//                 <Dropdown.Divider className="divider" />

//                 <NavDropdown.Item href="#action/3.3" className="list7">
//                 <i className="fas fa-leaf"></i>&nbsp; Home & Garden

//                     <div className="child1">
//                         <div className="l1">
//                             <ul className="ba">
//                                 <li><b>Bath & Body</b></li>
//                                 <li>Bar Soaps</li>
//                                 <li>Bath Bombs & Fizzies</li>
//                                 <li>Bath Brushes & Sponges</li>
//                                 <li>Bath Oils</li>
//                                 <li>Bath Salts</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Makeup</b></li>
//                                 <li>Body</li>
//                                 <li>Eyes</li>
//                                 <li>Face</li>
//                                 <li>Lips</li>
//                                 <li>Makeup Bags & Cases</li>
//                             </ul>
//                         </div>

//                         <div className="l2">
//                             <ul className="ba">
//                                 <li><b>Fragrances</b></li>
//                                 <li>Children's Fragrances</li>
//                                 <li>Men's Fragrances</li>
//                                 <li>Others In Fragrances</li>
//                                 <li>Unisex Fragrances</li>
//                                 <li>Women's Fragrances</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Manicure & Pedicure</b></li>
//                                 <li>Acrylic Powders & Liquids</li>
//                                 <li>Artificial Nail Tips</li>
//                                 <li>Cuticle Treatments</li>
//                                 <li>Electric Files & Tools</li>
//                                 <li>Fiberglass & Silk Wraps</li>
//                             </ul>
//                         </div>

//                         <div className="l3">
//                             <ul className="ba">
//                                 <li><b>Hair Care & Styling</b></li>
//                                 <li>Brushes & Combs</li>
//                                 <li>Hair Color</li>
//                                 <li>Hair Dryers</li>
//                                 <li>Hair Extensions & Wigs</li>
//                                 <li>Hair Loss Treatments</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Massage</b></li>
//                                 <li>Electric Massage Chairs</li>
//                                 <li>Linens & Covers</li>
//                                 <li>Massage Oils & Lotions</li>
//                                 <li>Massage Pillows & Bolsters</li>
//                                 <li>Massage Stones & Rocks</li>
//                             </ul>
//                         </div>

//                     </div>
//                 </NavDropdown.Item>
//                 <Dropdown.Divider className="divider" />

//                 <NavDropdown.Item href="#action/3.3" className="list8">
//                 <i className="fas fa-dog"></i>&nbsp; Pet Supplies

//                     <div className="child1">
//                         <div className="l1">
//                             <ul className="ba">
//                                 <li><b>Bath & Body</b></li>
//                                 <li>Bar Soaps</li>
//                                 <li>Bath Bombs & Fizzies</li>
//                                 <li>Bath Brushes & Sponges</li>
//                                 <li>Bath Oils</li>
//                                 <li>Bath Salts</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Makeup</b></li>
//                                 <li>Body</li>
//                                 <li>Eyes</li>
//                                 <li>Face</li>
//                                 <li>Lips</li>
//                                 <li>Makeup Bags & Cases</li>
//                             </ul>
//                         </div>

//                         <div className="l2">
//                             <ul className="ba">
//                                 <li><b>Fragrances</b></li>
//                                 <li>Children's Fragrances</li>
//                                 <li>Men's Fragrances</li>
//                                 <li>Others In Fragrances</li>
//                                 <li>Unisex Fragrances</li>
//                                 <li>Women's Fragrances</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Manicure & Pedicure</b></li>
//                                 <li>Acrylic Powders & Liquids</li>
//                                 <li>Artificial Nail Tips</li>
//                                 <li>Cuticle Treatments</li>
//                                 <li>Electric Files & Tools</li>
//                                 <li>Fiberglass & Silk Wraps</li>
//                             </ul>
//                         </div>

//                         <div className="l3">
//                             <ul className="ba">
//                                 <li><b>Hair Care & Styling</b></li>
//                                 <li>Brushes & Combs</li>
//                                 <li>Hair Color</li>
//                                 <li>Hair Dryers</li>
//                                 <li>Hair Extensions & Wigs</li>
//                                 <li>Hair Loss Treatments</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Massage</b></li>
//                                 <li>Electric Massage Chairs</li>
//                                 <li>Linens & Covers</li>
//                                 <li>Massage Oils & Lotions</li>
//                                 <li>Massage Pillows & Bolsters</li>
//                                 <li>Massage Stones & Rocks</li>
//                             </ul>
//                         </div>

//                     </div>
//                 </NavDropdown.Item>
//                 <Dropdown.Divider className="divider" />

//                 <NavDropdown.Item href="#action/3.3" className="list9">
//                 <i className="fas fa-football-ball"></i>&nbsp; Sporting Goods

//                     <div className="child1">
//                         <div className="l1">
//                             <ul className="ba">
//                                 <li><b>Bath & Body</b></li>
//                                 <li>Bar Soaps</li>
//                                 <li>Bath Bombs & Fizzies</li>
//                                 <li>Bath Brushes & Sponges</li>
//                                 <li>Bath Oils</li>
//                                 <li>Bath Salts</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Makeup</b></li>
//                                 <li>Body</li>
//                                 <li>Eyes</li>
//                                 <li>Face</li>
//                                 <li>Lips</li>
//                                 <li>Makeup Bags & Cases</li>
//                             </ul>
//                         </div>

//                         <div className="l2">
//                             <ul className="ba">
//                                 <li><b>Fragrances</b></li>
//                                 <li>Children's Fragrances</li>
//                                 <li>Men's Fragrances</li>
//                                 <li>Others In Fragrances</li>
//                                 <li>Unisex Fragrances</li>
//                                 <li>Women's Fragrances</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Manicure & Pedicure</b></li>
//                                 <li>Acrylic Powders & Liquids</li>
//                                 <li>Artificial Nail Tips</li>
//                                 <li>Cuticle Treatments</li>
//                                 <li>Electric Files & Tools</li>
//                                 <li>Fiberglass & Silk Wraps</li>
//                             </ul>
//                         </div>

//                         <div className="l3">
//                             <ul className="ba">
//                                 <li><b>Hair Care & Styling</b></li>
//                                 <li>Brushes & Combs</li>
//                                 <li>Hair Color</li>
//                                 <li>Hair Dryers</li>
//                                 <li>Hair Extensions & Wigs</li>
//                                 <li>Hair Loss Treatments</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Massage</b></li>
//                                 <li>Electric Massage Chairs</li>
//                                 <li>Linens & Covers</li>
//                                 <li>Massage Oils & Lotions</li>
//                                 <li>Massage Pillows & Bolsters</li>
//                                 <li>Massage Stones & Rocks</li>
//                             </ul>
//                         </div>

//                     </div>
//                 </NavDropdown.Item>
//                 <Dropdown.Divider className="divider" />

//                 <NavDropdown.Item href="#action/3.3" className="list10">
//                 <i className="fas fa-gamepad"></i>&nbsp; Toys & Games

//                     <div className="child1">
//                         <div className="l1">
//                             <ul className="ba">
//                                 <li><b>Bath & Body</b></li>
//                                 <li>Bar Soaps</li>
//                                 <li>Bath Bombs & Fizzies</li>
//                                 <li>Bath Brushes & Sponges</li>
//                                 <li>Bath Oils</li>
//                                 <li>Bath Salts</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Makeup</b></li>
//                                 <li>Body</li>
//                                 <li>Eyes</li>
//                                 <li>Face</li>
//                                 <li>Lips</li>
//                                 <li>Makeup Bags & Cases</li>
//                             </ul>
//                         </div>

//                         <div className="l2">
//                             <ul className="ba">
//                                 <li><b>Fragrances</b></li>
//                                 <li>Children's Fragrances</li>
//                                 <li>Men's Fragrances</li>
//                                 <li>Others In Fragrances</li>
//                                 <li>Unisex Fragrances</li>
//                                 <li>Women's Fragrances</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Manicure & Pedicure</b></li>
//                                 <li>Acrylic Powders & Liquids</li>
//                                 <li>Artificial Nail Tips</li>
//                                 <li>Cuticle Treatments</li>
//                                 <li>Electric Files & Tools</li>
//                                 <li>Fiberglass & Silk Wraps</li>
//                             </ul>
//                         </div>

//                         <div className="l3">
//                             <ul className="ba">
//                                 <li><b>Hair Care & Styling</b></li>
//                                 <li>Brushes & Combs</li>
//                                 <li>Hair Color</li>
//                                 <li>Hair Dryers</li>
//                                 <li>Hair Extensions & Wigs</li>
//                                 <li>Hair Loss Treatments</li>
//                             </ul>

//                             <ul className="ba">
//                                 <li><b>Massage</b></li>
//                                 <li>Electric Massage Chairs</li>
//                                 <li>Linens & Covers</li>
//                                 <li>Massage Oils & Lotions</li>
//                                 <li>Massage Pillows & Bolsters</li>
//                                 <li>Massage Stones & Rocks</li>
//                             </ul>
//                         </div>

//                     </div>
//                 </NavDropdown.Item> 


