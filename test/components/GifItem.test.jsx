import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";


describe('Prueba del GifItem', () => {

    const title = 'Saitama';
    const url   = 'https://one-punch.com/saitama.jpg';

    test('debe de hacer match con los snapshops', () => {
        
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

    });

    test('debe de mistrar la imagen con el URL y el ALT indicado', () => {

        render( <GifItem title={ title } url={ url } /> );
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('debe mostrar el titulo en el componente', () => {

        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title) ).toBeTruthy();
    });
});