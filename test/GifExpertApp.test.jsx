import { render } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas del GifExpertApp', () => {

    test('debe de hacer match con el snaptshop', () => {

        const { container } = render( <GifExpertApp /> );
        expect( container ).toMatchSnapshot();
    });

    test('debe de comprobar que el onAddCategory reciba la categoria', () => {

        
    });

});