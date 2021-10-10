import React from 'react';
import Loader from '../loader/loader';
import {
    CardsContainer,
    CardWrapper,
    Card,
    ButtonContainer,
    ButtonForLike,
    ButtonForDelete
} from './cardsElements';

const Cards = ({ todos, loading }) => {

    if (loading) {
        return <Loader />
    }

    return <CardsContainer>
            {todos.map(todo => (
                <CardWrapper key={todo.id}>
                    <Card>
                        {todo.title}
                    </Card>
                    <ButtonContainer>
                        <ButtonForLike>
                            Like!
                        </ButtonForLike>
                        <ButtonForDelete>
                            Delete!
                        </ButtonForDelete>
                    </ButtonContainer>
                </CardWrapper>
            ))}
    </CardsContainer>
};

export default Cards;