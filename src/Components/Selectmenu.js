import React, { useEffect, useState } from 'react'
import { Ca } from 'react-flags-select';
import Categoriesdata from './Categoriesdata'

function Selectmenu() {
    const [data, setData] = useState(Categoriesdata);
    const filterResult = (catItem) => {
        const result = Categoriesdata.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <h6 className='mt-5 mb-4 fw-bold text-secondary'>Kategoriler</h6>
                        <div className="catBox py-2">
                            <button className='btn cat-btn' onClick={() => filterResult('Drinks')} >
                                <img className='me-3' src="https://market-product-images-cdn.getirapi.com/category/f66f92ea-f680-4dd4-808b-8f8a71709a86.jpeg" width="35px" alt="" />
                                Su & İçecek
                            </button>
                            <button className='btn cat-btn' onClick={() => filterResult('Fruit')}>
                                <img className='me-3' src="https://market-product-images-cdn.getirapi.com/category/d43a0396-b588-4666-ac43-af4b3159fee2.jpeg" width="35px" alt="" />
                                Meyve & Sebze
                            </button>
                            <button className='btn cat-btn' onClick={() => filterResult('Baker')}>
                                <img className='me-3' src="https://market-product-images-cdn.getirapi.com/category/6814548a-24f2-4ba2-9762-7ca3e96a3d40.jpeg" width="35px" alt="" />
                                Fırından
                            </button>
                            <button className='btn cat-btn' onClick={() => filterResult('BasicFood')}>
                                <img className='me-3' src="https://market-product-images-cdn.getirapi.com/category/4c2530e6-d2d2-4a77-96a0-917f16165f57.jpeg" width="35px" alt="" />
                                Temel Gıda
                            </button>
                            <button className='btn cat-btn' onClick={() => filterResult('Snack')}>
                                <img className='me-3' src="https://market-product-images-cdn.getirapi.com/category/8393d053-6478-410a-a234-d1a914185b35.jpeg" width="35px" alt="" />
                                Atıştırmalık
                            </button>
                            <button className='btn cat-btn' onClick={() => filterResult('İceCream')}>
                                <img className='me-3' src="https://market-product-images-cdn.getirapi.com/category/0f329100-f339-4503-bf56-095ab4c11c98.jpeg" width="35px" alt="" />
                                Dondurma
                            </button>
                            <button className='btn cat-btn' onClick={() => filterResult('Milk')}>
                                <img className='me-3' src="https://market-product-images-cdn.getirapi.com/category/afee33f9-93fe-4b87-8094-6e5c7f13c064.jpeg" width="35px" alt="" />
                                Süt Ürünleri
                            </button>
                            <button className='btn cat-btn' onClick={() => filterResult('Breakfast')}>
                                <img className='me-3' src="https://market-product-images-cdn.getirapi.com/category/35640646-a603-4b9a-96db-96918025fb61.jpeg" width="35px" alt="" />
                                Kahvaltılık
                            </button>
                            <button className='btn cat-btn' onClick={() => filterResult('Aliment')}>
                                <img className='me-3' src="https://market-product-images-cdn.getirapi.com/category/b01619f2-e12e-4777-85a2-5727abb62d51.jpeg" width="35px" alt="" />
                                Yiyecek
                            </button>
                            <button className='btn cat-btn' onClick={() => filterResult('Diet')}>
                                <img className='me-3' src="https://market-product-images-cdn.getirapi.com/category/c594be17-998d-475e-91a5-89924798a27d.jpeg" width="35px" alt="" />
                                Fit & Form
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <h6 className='mt-5 mb-4 fw-bold text-secondary'>Ürünler</h6>
                            {data.map((values) => {
                                const { id, title, category, price, image } = values;
                                return (
                                    <>
                                        <div className="col-md-3 px-0" key={id}>
                                            <div className="prod text-center px-2 py-3">
                                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                                    <button type="button" class="btn plus-icon me-3"> <b>+</b></button>
                                                    <b className='mt-2 text-dark'>0</b>
                                                    <button type="button" class="btn plus-icon ms-3"><b>-</b></button>
                                                </div>
                                                <img className='mb-4' width="80%" src={image} alt="" />
                                                <h6 className='fw-bold' >₺{price}</h6>
                                                <h6 className='text-dark fw-bold'>{title}</h6>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Selectmenu