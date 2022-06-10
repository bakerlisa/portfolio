import React from 'react';
import Resunme from '../pdf/Resume-Lisa_Broadhead.pdf';

export default function Test() {
    return (
        <>
            {/* <h1>Lisa Broadhead Resume</h1> */}
            <object data={Resunme} type="application/pdf" width="100%" height="100%">
                <p>Alternative text - include a link <a href={Resunme}>to the PDF!</a></p>
            </object>
        </>
    );
}