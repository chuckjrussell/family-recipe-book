import styled from 'styled-components';

export const Table = styled.table`
    border-spacing: 0;
    background-color: #fff;
    border-radius: 4px;
    width: 100%;
`;

export const THead = styled.thead`
    color: #fff;

    tr {
        border-radius: 8px;
        background-color: ${props => props.theme.secondary};
        height: 48px;
    }
`;

export const TBody = styled.tbody`
    tr:nth-child(even){
        background: #eee;
    }
`;

export const TR = styled.tr``;

export const TH = styled.th`
    padding: 8px;

    &:first-of-type {
        padding-left: 40px;
        border-top-left-radius: 8px;
    }

    &:last-of-type {
        padding-right: 40px;
        border-top-right-radius: 8px;
    }
`;

export const TD = styled.td`
    padding: 8px;
`;