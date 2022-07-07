import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas del AddCategory', () => {

    test('debe de cambiar el falor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => {} } /> );
        // screen.debug();
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: "Saitama" } });

        expect( input.value ).toBe( "Saitama" );
    });

    test('debe de llamar onNewCategory su el input tiene un valor', () => {
        // Aqui estamos evaluando el comportamiento del componente
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn(); // Esta funcion es un mock(Mock es una simulacion de una funcion)

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');
        // screen.debug();

        fireEvent.input( input, { target: { value: inputValue} });
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn(); // Esta funcion es un mock(Mock es una simulacion de una funcion)

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form  = screen.getByRole('form');
        // screen.debug();
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });

});