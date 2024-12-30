import React from 'react';
import { render } from '@testing-library/react';
import SlickSlider from './SlickSlider.jsx';
import '@testing-library/jest-dom';


jest.mock('slick-carousel/slick/slick.css', () => {});
jest.mock('slick-carousel/slick/slick-theme.css', () => {});

describe('SlickSlider', () => {
  it('renders the carousel with slides',  () => {
    render(<SlickSlider />);
  });
});


