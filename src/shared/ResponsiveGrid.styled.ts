import styled from 'styled-components';



//responsive grid of elements
export const ResponsiveGrid = styled.div`
padding: 3rem 0;
display: grid;
justify-content: space-evenly;
gap: 3.5rem;
grid-template-columns: repeat(1, 1fr); /* default, 1 column */

@media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns medium size */
    }
    
@media (min-width: 1440px) {
grid-template-columns: repeat(4, 1fr); /* 4 columns large size */
}
`;

