// src/App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import CounterApp from './App';
import React from 'react';

describe('Pruebas para el contador', () => {
  test('el contador inicia en 0', () => {
    render(<CounterApp />);
    const contador = screen.getByText(/Contador: 0/i);
    expect(contador).toBeInTheDocument();
  });

  test('incrementar el contador', () => {
    render(<CounterApp />);
    const buttonIncrement = screen.getByText(/Incrementar/i);
    fireEvent.click(buttonIncrement);
    const contador = screen.getByText(/Contador: 1/i);
    expect(contador).toBeInTheDocument();
  });

  test('decrementar el contador', () => {
    render(<CounterApp />);
    const buttonDecrement = screen.getByText(/Decrementar/i);
    fireEvent.click(buttonDecrement);
    const contador = screen.getByText(/Contador: -1/i);
    expect(contador).toBeInTheDocument();
  });

  test('resetear el contador', () => {
    render(<CounterApp />);
    const buttonIncrement = screen.getByText(/Incrementar/i);
    const buttonReset = screen.getByText(/Resetear/i);
    fireEvent.click(buttonIncrement);
    fireEvent.click(buttonReset);
    const contador = screen.getByText(/Contador: 0/i);
    expect(contador).toBeInTheDocument();
  });
});

//Nicolas Alberto Cuellar Castrellon - 2220906//