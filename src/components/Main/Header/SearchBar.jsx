import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => (
    <InputGroup
        style={{
            width: '500px',     
            height: '50px',
            marginLeft: '8px'   
        }}
    >

        <FormControl
            placeholder="검색하세요"
            aria-label="검색어 입력"
            style={{ fontSize: '16px' }}
        />
        <Button
            variant="warning"
            type="submit"
            style={{ fontWeight: 'bold' }}
        >
            검색
        </Button>
    </InputGroup>
);

export default SearchBar;
