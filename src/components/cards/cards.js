import React from 'react';
import Loader from '../loader/loader';
import {
    CardsContainer,
    CardWrapper,
    Card
} from './cardsElements';

const Cards = ({ todos, loading }) => {

    if (loading) {
        return <Loader />
    }

    return (
        <CardsContainer>
            {todos.map(todo => (
                <CardWrapper key={todo.id}>
                    <Card>
                        <div>
                            Number: {todo.id}
                        </div>
                        {todo.title}
                    </Card>
                </CardWrapper>
            ))}
        </CardsContainer>
    ) 
};

export default Cards;