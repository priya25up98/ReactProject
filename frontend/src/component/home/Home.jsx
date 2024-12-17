import React from 'react';
import style from '../home/Home.module.css';


const Home = () => {
    return (
        <div >
            <div className={style.home_img} >
                <div className={style.main}>
                    <h1>Find your dream job now</h1>
                    <h3>5 lakh+ jobs for you to explore</h3>
                    <div style={{ display: "flex" }}>
                        <input className={style.inp} type='text' placeholder='Enter Skills/designation/companies'></input>
                        <button className={style.btn}>Click</button>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Home;
