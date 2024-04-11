import styled from 'styled-components';

// Grid item test
export const GridItem = styled.div`
z-index: 20;
font-size: 1.5rem;
color: white;
`;

//responsive grid of elements
export const ResponsiveGrid = styled.div`
width: 80%;
height: 80vh;
padding: 3rem 0;
display: grid;
grid-template-columns: repeat(2, 1fr); /* default, 2 column */
gap: 3.5rem;

@media (min-width: 768px) {
grid-template-columns: repeat(3, 1fr); /* 3 columns medium size */
}

@media (min-width: 992px) {
grid-template-columns: repeat(4, 1fr); /* 4 columns large size */
}
`;