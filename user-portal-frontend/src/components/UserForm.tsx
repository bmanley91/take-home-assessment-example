import React, { useState } from 'react';
import { fetchUsers } from '../service/userService';
import StyledInput from './styled/StyledInput';
import { StyledFormSection,  StyledSubmit, StyledSubHeader} from './styled';

const UserForm = ({ usersCallback }) => {
    const [includeCategories, setIncludeCategories] = useState('');
    const [excludeCategories, setExcludeCategories] = useState('');
    const [includeCodes, setIncludeCodes] = useState('');
    const [excludeCodes, setExcludeCodes] = useState('');

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        usersCallback(fetchUsers({
            includeCodes,
            excludeCodes,
            includeCategories,
            excludeCategories
        }))
    }

    return (
        <form onSubmit={ onSubmit } data-testid='form'>
            <StyledFormSection id='codes-section'>
                <StyledSubHeader>Codes</StyledSubHeader>
                <StyledInput
                    placeholder='Codes to Include'
                    onChange={e => setIncludeCodes(e.target.value)}
                    value={includeCodes}
                />
                <StyledInput
                    placeholder='Codes to Exclude'
                    onChange={e => setExcludeCodes(e.target.value)}
                    value={excludeCodes}
                />
            </StyledFormSection>
            <StyledFormSection id='categories-section'>
                <StyledSubHeader>Categories</StyledSubHeader>
                <StyledInput
                    placeholder='Categories to Include'
                    onChange={e => setIncludeCategories(e.target.value)}
                    value={includeCategories}
                />
                <StyledInput
                    placeholder='Categories to Exclude'
                    onChange={e => setExcludeCategories(e.target.value)}
                    value={excludeCategories}
                />
            </StyledFormSection>
            <StyledSubmit type='submit'>Submit</StyledSubmit>
        </form>
    )
}

export default UserForm;
